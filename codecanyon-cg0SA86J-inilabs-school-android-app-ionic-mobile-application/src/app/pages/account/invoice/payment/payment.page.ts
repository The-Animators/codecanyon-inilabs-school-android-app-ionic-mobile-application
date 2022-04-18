import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {AccountService} from '../../../../service/account/account.service';
import {LangandparmisionService} from '../../../../service/langandparmision.service';
import {fileUrl} from '../../../../../config/config';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  inivoiceID: any;
  invoices: any;
  invoiceDue: any;
  totalDue: any;
  totalAmount: any;
  maininvoice: any;
  siteinfos: any;
  createuser: any;
  grandtotalandpayment: any;
  siteUrl: any;
  student: any;
  usertype: any;
  studentprofile: any;
  permission: any;
  language: any;
  paidAmount: any = '00.0';
  paidPayment = [];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private network: Network,
      private toastCtrl: ToastController,
      public accountService: AccountService,
      public langandpermissionService: LangandparmisionService
  ) {
    this.siteUrl = fileUrl;
    this.inivoiceID = this.route.snapshot.paramMap.get('invoiceID');
    this.doRefresh(false, false, this.inivoiceID);
  }

  isRefresh = true;
  ngOnInit() {

  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'You are offline, please connect your wifi or 3g',
      position: 'top',
      duration: 2000
    });
    await toast.present();
  }
  getSum() {
    const container = document.getElementById('inputContainer');
    const inputElements = container.getElementsByClassName('native-input');
    this.paidAmount = 0;
    let eachInput: HTMLInputElement;
    this.paidPayment = [];
    for (let i = 0; i < inputElements.length; i++) {
      eachInput = <HTMLInputElement>inputElements.item(i);
      this.paidAmount += Number(eachInput.value);
      this.paidPayment.push({'invoiceID': eachInput.name, 'amount': Number(eachInput.value)});
    }
    console.log(this.paidPayment);
  }

  openDetailsWithQueryParams() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.paidPayment),
        totalAmount: this.paidAmount,
        mainInivoiceID: this.inivoiceID
      }
    };
    this.router.navigate(['stripe'], navigationExtras);
  }

  openDetailsWithRazorPay() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.paidPayment),
        totalAmount: this.paidAmount,
        mainInivoiceID: this.inivoiceID
      }
    };
    this.router.navigate(['razorpay'], navigationExtras);
  }
  doRefresh(event, value, inivoiceID) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    }

    this.accountService.getInvoicePayment(value, inivoiceID)
        .then((data: any) => {
            console.log(data);
          this.usertype = data.usertype;
          this.student = data.student;
          this.studentprofile = data.studentprofile;
          this.invoices = data.invoices;
          this.invoiceDue = data.invoiceDue;
          this.totalAmount = data.totalAmount;
          this.totalDue = data.totalDue;
        });
    this.langandpermissionService.getLangandPermissionCall(value, 'invoice')
        .then((data: any) => {
          this.permission = data.permission;
          this.language = data.language;
        });
    if (event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
  }

}
