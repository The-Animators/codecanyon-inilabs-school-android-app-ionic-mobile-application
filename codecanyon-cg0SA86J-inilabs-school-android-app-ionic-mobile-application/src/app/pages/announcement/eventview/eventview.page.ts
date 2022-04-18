import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnouncementService} from '../../../service/announcement/announcement.service';
import {LangandparmisionService} from '../../../service/langandparmision.service';
import {Network} from '@ionic-native/network/ngx';
import {ToastController} from '@ionic/angular';
import {fileUrl} from '../../../../config/config';

@Component({
  selector: 'app-eventview',
  templateUrl: './eventview.page.html',
  styleUrls: ['./eventview.page.scss'],
})
export class EventviewPage implements OnInit {

     eventID: any;
     event: any;
    siteUrl: any;
    permission: any;
    language: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private network: Network,
        private toastCtrl: ToastController,
        public announcementService: AnnouncementService,
        public langandpermissionService: LangandparmisionService
    ) {
        this.eventID = this.route.snapshot.paramMap.get('eventID');
        this.siteUrl = fileUrl;
        this.doRefresh(false, false, this.eventID);
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

    doRefresh(event, value, eventID) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }

            this.announcementService.getEventview(value, eventID)
                .then((data: any) => {
                    this.event = data.event;
                });
            this.langandpermissionService.getLangandPermissionCall(value, 'event')
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
