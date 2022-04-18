import { Component, OnInit } from '@angular/core';
import {SponsorshipService} from '../../../service/sponsorship/sponsorship.service';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {ActivatedRoute} from '@angular/router';
import {fileUrl} from '../../../../config/config';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.page.html',
  styleUrls: ['./sponsorship.page.scss'],
})
export class SponsorshipPage implements OnInit {

  sponsorID: any;
  siteUrl: any;
  public sponsorships: any;
  permission: any;
  language: any;

  constructor(
      public sponsorshipService: SponsorshipService,
      private network: Network,
      private toastCtrl: ToastController,
      public langandpermissionService: LangandparmisionService,
      private route: ActivatedRoute
  ) {
    this.sponsorID = this.route.snapshot.paramMap.get('sponsorID');
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
    this.sponsorshipService.getSponsorship(value)
        .then((data: any) => {
          this.sponsorships = data.sponsorships;
        });
    this.langandpermissionService.getLangandPermissionCall(value, 'sponsorship')
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
