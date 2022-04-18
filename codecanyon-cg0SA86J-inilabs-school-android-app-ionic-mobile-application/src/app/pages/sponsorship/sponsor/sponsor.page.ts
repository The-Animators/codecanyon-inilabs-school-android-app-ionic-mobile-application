import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SponsorshipService} from '../../../service/sponsorship/sponsorship.service';
import {Network} from '@ionic-native/network/ngx';
import {AlertController, LoadingController, MenuController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {ClassService} from '../../../service/academic/class.service';
import {fileUrl} from '../../../../config/config';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.page.html',
  styleUrls: ['./sponsor.page.scss'],
})
export class SponsorPage implements OnInit {

  sponsors: any;
  allcountry: any;
  permission: any;
  siteUrl: any;
  language: any;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      public sponsorshipService: SponsorshipService,
      private network: Network,
      private toastCtrl: ToastController,
      public  loadingCtrl: LoadingController,
      public  alertCtrl: AlertController,
      public menuCtrl: MenuController,
      private storage: Storage,
      public langandpermissionService: LangandparmisionService,
  ) {
    this.siteUrl = fileUrl;
    this.getCandidate();
  }

  isRefresh = true;
  ngOnInit() {}


  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'You are offline, please connect your wifi or 3g',
      position: 'top',
      duration: 2000
    });
    await toast.present();
  }

  getCandidateView(sponsorID) {
    this.router.navigate([ '/sponsorview', sponsorID]);
  }

  doRefresh(event, value) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    } else {
      this.sponsorshipService.getSponsor(value)
          .then((data: any) => {
            this.sponsors = data.sponsors;
            this.allcountry = data.allcountry;
          });
      this.langandpermissionService.getLangandPermissionCall(value, 'sponsor')
          .then((data: any) => {
            this.permission = data.permission;
            this.language = data.language;
          });

      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
  }

  getCandidate() {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    } else {
      this.langandpermissionService.getLangandPermissionCall(false, 'sponsor')
          .then((data: any) => {
            this.permission = data.permission;
            this.language = data.language;
            this.sponsorshipService.getSponsor(false).then((data: any) => {
              this.sponsors = data.sponsors;
              this.allcountry = data.allcountry;
            });
          });
    }

  }

}
