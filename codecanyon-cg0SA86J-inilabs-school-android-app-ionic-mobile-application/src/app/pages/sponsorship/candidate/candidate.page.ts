import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Network} from '@ionic-native/network/ngx';
import {AlertController, LoadingController, MenuController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {ClassService} from '../../../service/academic/class.service';
import {fileUrl} from '../../../../config/config';
import {SponsorshipService} from '../../../service/sponsorship/sponsorship.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  classes: any;
  sponsors: any;
  permission: any;
  siteUrl: any;
  language: any;
  public candidates: any;

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

  getCandidateView(candidateID) {
    this.router.navigate([ '/candidateview', candidateID]);
  }

  doRefresh(event, value) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    } else {
      this.sponsorshipService.getCandidate(value)
          .then((data: any) => {
            this.classes = data.classes;
            this.sponsors = data.sponsors;
            this.candidates = data.candidates;
          });
      this.langandpermissionService.getLangandPermissionCall(value, 'candidate')
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
      this.langandpermissionService.getLangandPermissionCall(false, 'candidate')
          .then((data: any) => {
            this.permission = data.permission;
            this.language = data.language;
            this.sponsorshipService.getCandidate(false).then((data: any) => {
                  this.classes = data.classes;
                  this.sponsors = data.sponsors;
                  this.candidates = data.candidates;
                });
          });
    }

  }

}
