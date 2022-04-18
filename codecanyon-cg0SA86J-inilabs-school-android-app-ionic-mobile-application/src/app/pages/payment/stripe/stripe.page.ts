import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClient } from '@angular/common/http';
import {Network} from '@ionic-native/network/ngx';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {AuthenticationService} from '../../../service/authentication/authentication.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../../service/account/account.service';

@Component({
  selector: 'app-stripe',
  templateUrl: 'stripe.page.html',
  styleUrls: ['stripe.page.scss'],
})
export class StripePage {
    stripeForm: FormGroup;
    paymentAmount: any;
  currency = 'USD';
  currencyIcon = '$';
  stripe_key: any;
  cardDetails: any = {};
  siteinfo: any;
    cardNumber: string;
    cardMonth: number;
    cardYear: number;
    cardCVV: string;
    invoiceAmount: any;
    mainInivoiceID: any;


    constructor(
      private stripe: Stripe,
      private http: HttpClient,
      private network: Network,
      private authService: AuthenticationService,
      private toastCtrl: ToastController,
      public  loadingCtrl: LoadingController,
      public  alertCtrl: AlertController,
      private route: ActivatedRoute,
      private router: Router,
      public accountService: AccountService,
    ) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.invoiceAmount = JSON.parse(params.special);
                this.paymentAmount = params.totalAmount;
                this.mainInivoiceID = params.mainInivoiceID;
            }
        });
      this.siteInfo();
        this.stripeForm = new FormGroup({
            cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
            cardMonth: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
            cardYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
            cardCVV: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
        });
  }

    validation_messages = {
        'cardNumber': [
            { type: 'required', message: 'Card number is required.' },
            { type: 'minlength', message: ' Card number must be at least 16 digit.' },
            { type: 'maxlength', message: ' Card number cannot be more than 16 digit.' },
        ],

        'cardMonth': [
            { type: 'required', message: 'Card month is required.' },
            { type: 'minlength', message: ' Card month must be at least 1 digit.' },
            { type: 'maxlength', message: ' Card month cannot be more than 2 digit.' },
        ],
        'cardYear': [
            { type: 'required', message: 'Card year is required.' },
            { type: 'minlength', message: ' Card year must be at least 4 digit.' },
            { type: 'maxlength', message: ' Card year cannot be more than 4 digit.' },
        ],
        'cardCVV': [
            { type: 'required', message: 'Card cvv is required.' },
            { type: 'minlength', message: ' Card cvv must be at least 3 digit.' },
            { type: 'maxlength', message: ' Card cvv cannot be more than 3 digit.' },
        ],
    };
    async presentToast() {
        const toast = await this.toastCtrl.create({
            message: 'You are offline, please connect your wifi or 3g',
            position: 'top',
            duration: 2000
        });
        await toast.present();
    }
    async presentLoading() {

        const loading = await this.loadingCtrl.create({
            message: 'Please wait...',
            spinner: 'crescent',
        });
        await loading.present();
    }

    async presentAlert(data) {
        const alert = await this.alertCtrl.create({
            header: 'Login',
            message: data.message,
            buttons: ['Dismiss']
        });

        await alert.present();
    }

    async dismiss() {
        return await this.loadingCtrl.dismiss({'dismissed': true});
    }
    ionViewDidLoad() {
        this.siteInfo();
    }
    siteInfo() {

        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        } else {
            this.authService.getSiteInfo()
                .then((data: any) => {
                    console.log(data);
                    this.siteinfo = data;
                    this.stripe_key = data.stripe_key;
                    if (data.currency_symbol && data.currency_code) {
                        this.currencyIcon = data.currency_symbol;
                        this.currency = data.currency_code;
                    }
                }).catch(error => {});
        }
    }
  payWithStripe() {
    this.stripe.setPublishableKey(this.stripe_key);

    this.cardDetails = {
        number: this.cardNumber,
        expMonth: this.cardMonth,
        expYear: this.cardYear,
        cvc: this.cardCVV
    };
    console.log(this.cardDetails);
    this.presentLoading();
    this.stripe.createCardToken(this.cardDetails)
        .then(token => {
          console.log(token);
          this.makePayment(token.id);
        })
        .catch(error => {
            this.dismiss().then(r => console.log(r));
            this.presentAlert(error);

        });
  }
  makePayment(token) {
      const allData = {
          stripeToken: token,
          invoicePaidAmount: this.invoiceAmount,
          totalAmount: this.paymentAmount,
          mainInivoiceID: this.mainInivoiceID,
          paymentmethodID: 'Stripe',
      };
      this.accountService.getInvoicePaid(allData)
          .then((data: any) => {
              console.log(data);
          });
      this.dismiss().then(r => console.log(r));
      // this.presentAlert('error');
  }

}
