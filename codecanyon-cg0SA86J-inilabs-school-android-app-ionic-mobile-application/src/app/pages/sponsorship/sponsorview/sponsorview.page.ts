import { Component, OnInit } from '@angular/core';
import {SponsorshipService} from '../../../service/sponsorship/sponsorship.service';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {ActivatedRoute} from '@angular/router';
import {fileUrl} from '../../../../config/config';

@Component({
  selector: 'app-sponsorview',
  templateUrl: './sponsorview.page.html',
  styleUrls: ['./sponsorview.page.scss'],
})
export class SponsorviewPage implements OnInit {
  sponsorID: any;
  siteUrl: any;
  public allcountry: any;
  public sponsor: any;
  public titles: any;
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
    this.doRefresh(false, false, this.sponsorID);
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

  doRefresh(event, value, sponsorID) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    }
    this.sponsorshipService.getSponsorView(value, sponsorID)
        .then((data: any) => {
          this.allcountry = data.allcountry;
          this.sponsor = data.sponsor;
          this.titles = data.titles;
        });
    this.langandpermissionService.getLangandPermissionCall(value, 'sponsor')
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
