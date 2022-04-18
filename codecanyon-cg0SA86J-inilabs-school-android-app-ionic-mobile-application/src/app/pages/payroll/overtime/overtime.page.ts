import { Component, OnInit } from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {ActivatedRoute} from '@angular/router';
import {fileUrl} from '../../../../config/config';
import {PayrollService} from '../../../service/payroll/payroll.service';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.page.html',
  styleUrls: ['./overtime.page.scss'],
})
export class OvertimePage implements OnInit {

  siteUrl: any;
  public allUsers: any;
  public roles: any;
  public overtimes: any;
  permission: any;
  language: any;

  constructor(
      public payrollService: PayrollService,
      private network: Network,
      private toastCtrl: ToastController,
      public langandpermissionService: LangandparmisionService,
      private route: ActivatedRoute
  ) {
    this.doRefresh(false, false);
    this.siteUrl = fileUrl;
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

  doRefresh(event, value) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    }
    this.payrollService.getOvertime(value)
        .then((data: any) => {
          this.overtimes = data.overtimes;
          this.roles = data.roles;
          this.allUsers = data.allUsers;
        });
    this.langandpermissionService.getLangandPermissionCall(value, 'overtime')
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
