import { Component, OnInit } from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {ActivatedRoute} from '@angular/router';
import {fileUrl} from '../../../../config/config';
import {SponsorshipService} from '../../../service/sponsorship/sponsorship.service';

@Component({
  selector: 'app-candidateview',
  templateUrl: './candidateview.page.html',
  styleUrls: ['./candidateview.page.scss'],
})
export class CandidateviewPage implements OnInit {

  candidateID: any;
  siteUrl: any;
  public photo: any;
  public profile: any;
  public candidate: any;
  public groups: any;
  public subjects: any;
  permission: any;
  language: any;

  constructor(
      public sponsorshipService: SponsorshipService,
      private network: Network,
      private toastCtrl: ToastController,
      public langandpermissionService: LangandparmisionService,
      private route: ActivatedRoute
  ) {
    this.candidateID = this.route.snapshot.paramMap.get('candidateID');
    this.doRefresh(false, false, this.candidateID);
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

  doRefresh(event, value, candidateID) {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.presentToast();
    }
    this.sponsorshipService.getCandidateView(value, candidateID)
        .then((data: any) => {
          this.groups = data.groups;
          this.subjects = data.subjects;
          this.photo = data.photo;
          this.profile = data.profile;
          this.candidate = data.candidate;
        });
    this.langandpermissionService.getLangandPermissionCall(value, 'candidate')
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
