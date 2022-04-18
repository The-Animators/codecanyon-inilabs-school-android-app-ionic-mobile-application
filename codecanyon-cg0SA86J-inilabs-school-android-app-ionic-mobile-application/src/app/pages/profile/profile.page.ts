import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student.service';
import {LangandparmisionService} from '../../service/langandparmision.service';
import {ActivatedRoute} from '@angular/router';
import {Network} from '@ionic-native/network/ngx';
import {Storage} from '@ionic/storage';
import {AlertController, LoadingController, MenuController, ToastController} from '@ionic/angular';
import {UserService} from '../../service/user.service';
import {fileUrl} from '../../../config/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
   profile: any;
  loginuser: any;
  permission: any;
  language: any;
  siteUrl: any;
  public isRefresh = true;
  constructor(
      public userService: UserService,
      public langandpermissionService: LangandparmisionService,
      private route: ActivatedRoute,
      private network: Network,
      private storage: Storage,
      private toastCtrl: ToastController,
      public  loadingCtrl: LoadingController,
      public  alertCtrl: AlertController,
      public menuCtrl: MenuController,
  ) {
    this.doRefreshProfile(false, false);
    this.siteUrl = fileUrl;
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.doRefreshProfile(false, false);
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'You are offline, please connect your wifi or 3g',
      position: 'top',
      duration: 2000
    });
    await toast.present();
  }
  doRefreshProfile(event, value) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    }
    this.storage.get('Profile').then((response) => {
      this.loginuser = response;
    });
    this.userService.getUserProfile(value)
        .then((data: any) => {
          console.log(data);
          this.profile = data.profile;
          console.log(this.profile);
        });
    this.langandpermissionService.getLangandPermissionCall(value, 'profile')
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
