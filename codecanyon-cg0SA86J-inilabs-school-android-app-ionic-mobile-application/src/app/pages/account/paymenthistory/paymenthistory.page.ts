import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../../service/account/account.service';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {fileUrl} from '../../../../config/config';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.page.html',
  styleUrls: ['./paymenthistory.page.scss'],
})
export class PaymenthistoryPage implements OnInit {

    payments: any;
    permission: any;
    language: any;
    siteUrl: any;


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public accountService: AccountService,
        private network: Network,
        private toastCtrl: ToastController,
        public langandpermissionService: LangandparmisionService
    ) { this.doRefresh(false, false); this.siteUrl = fileUrl; }


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

    doRefresh(event, value) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
            this.accountService.getPaymenthistory(value)
                .then((data: any) => {
                    this.payments = data.payments;
                    console.log(this.payments);
                });
            this.langandpermissionService.getLangandPermissionCall(value, 'paymenthistory')
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

    filterArea(param: any): void {
        const val: string 	= param;
        if (val.trim() !== '') {
            this.payments = this.payments.filter((item) => {
                if (item.srname.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return item.srname.toLowerCase().indexOf(val.toLowerCase()) > -1;
                } else {
                    return item.srregisterNO.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        } else {
            this.doRefresh(false, false);
        }
    }
}
