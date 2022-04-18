import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Network} from '@ionic-native/network/ngx';
import {AuthenticationService} from '../../../service/authentication/authentication.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../../service/account/account.service';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-razor',
  templateUrl: 'razor.page.html',
  styleUrls: ['razor.page.scss'],
})
export class RazorPage {
  paymentAmount = 333;
  currency = 'USD';
  currencyIcon = '$';
  razor_key = 'rzp_test_jsC013SFkMOZlP';
  siteinfo: any;
  invoiceAmount: any;
  mainInivoiceID: any;


  constructor(
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
  }
  ionViewDidLoad() {
    this.siteInfo();
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
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'You are offline, please connect your wifi or 3g',
      position: 'top',
      duration: 2000
    });
    await toast.present();
  }

  siteInfo() {

    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    } else {
      this.authService.getSiteInfo()
          .then((data: any) => {
            console.log(data);
            this.siteinfo = data;
            if (data.currency_symbol && data.currency_code) {
              this.currencyIcon = data.currency_symbol;
              this.currency = data.currency_code;
            }
          }).catch(error => {});
    }
  }

  payWithRazor() {
    const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency,
      key: this.razor_key,
      amount: this.paymentAmount,
      name: 'foo',
      prefill: {
        email: 'admin@enappd.com',
        contact: '9621323231',
        name: 'Enappd'
      },
      theme: {
        color: '#528FF0'
      },
      modal: {
        ondismiss() {
          alert('dismissed');
        }
      }
    };

    let successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    let cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
