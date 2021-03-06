import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {AlertController, LoadingController} from '@ionic/angular';
import {Network} from '@ionic-native/network/ngx';
import {ApiEndPoint} from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SponsorshipService {

  constructor(public http: HttpClient,
              private storage: Storage,
              public  loadingCtrl: LoadingController,
              public network: Network,
              public  alertCtrl: AlertController) {}


  async presentLoading() {

    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
    });
    await loading.present();

  }

  async dismiss() {
    return await this.loadingCtrl.dismiss({             'dismissed': true         });
  }

  getCandidate(boolean) {
    return new Promise(resolve => {
      const  storageKey = 'candidateID';
      if (boolean) {
          if (this.network.type === 'none' || this.network.type === 'unknown') {
          } else {
            this.presentLoading();
            this.http.get(ApiEndPoint + 'candidate/index').subscribe((data: any) => {
              this.storage.set(storageKey, data.data);
              resolve(data.data);
              this.dismiss();
            }, err => {
              console.log(err);
              this.dismiss();
            });
          }
      } else {
        this.storage.get(storageKey).then((val) => {
          if (val == null) {
            if (this.network.type === 'none' || this.network.type === 'unknown') {
            } else {
              this.presentLoading();
              this.http.get(ApiEndPoint + 'candidate/index').subscribe((data: any) => {
                this.storage.set(storageKey, data.data);
                console.log(data.data);
                resolve(data.data);
                this.dismiss();
              }, err => {
                console.log(err);
                this.dismiss();
              });
            }
          } else {
            resolve(val);
          }

        }, err => {
          console.log(err);
        });
      }
    });
  }
  getCandidateView(boolean, candidateID) {
    return new Promise(resolve => {
      const  storageKey = 'candidateview' + candidateID;
      if (boolean) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
        } else {
          this.presentLoading();
          this.http.get(ApiEndPoint + 'candidate/view/' + candidateID).subscribe((data: any) => {
            this.storage.set(storageKey, data.data);
            resolve(data.data);
            this.dismiss();
          }, err => {
            console.log(err);
            this.dismiss();
          });
        }
      } else {
        this.storage.get(storageKey).then((val) => {
          if (val == null) {
            if (this.network.type === 'none' || this.network.type === 'unknown') {
            } else {
              this.presentLoading();
              this.http.get(ApiEndPoint + 'candidate/view/' + candidateID).subscribe((data: any) => {
                this.storage.set(storageKey, data.data);
                resolve(data.data);
                this.dismiss();
              }, err => {
                console.log(err);
                this.dismiss();
              });
            }
          } else {
            resolve(val);
          }

        }, err => {
          console.log(err);
        });
      }
    });
  }



  getSponsor(boolean) {
    return new Promise(resolve => {
      const  storageKey = 'sponsorID';
      if (boolean) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
        } else {
          this.presentLoading();
          this.http.get(ApiEndPoint + 'sponsor/index').subscribe((data: any) => {
            this.storage.set(storageKey, data.data);
            resolve(data.data);
            this.dismiss();
          }, err => {
            console.log(err);
            this.dismiss();
          });
        }
      } else {
        this.storage.get(storageKey).then((val) => {
          if (val == null) {
            if (this.network.type === 'none' || this.network.type === 'unknown') {
            } else {
              this.presentLoading();
              this.http.get(ApiEndPoint + 'sponsor/index').subscribe((data: any) => {
                this.storage.set(storageKey, data.data);
                resolve(data.data);
                this.dismiss();
              }, err => {
                console.log(err);
                this.dismiss();
              });
            }
          } else {
            resolve(val);
          }

        }, err => {
          console.log(err);
        });
      }
    });
  }
  getSponsorView(boolean, sponsorID) {
    return new Promise(resolve => {
      const  storageKey = 'sponsorview' + sponsorID;
      if (boolean) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
        } else {
          this.presentLoading();
          this.http.get(ApiEndPoint + 'sponsor/view/' + sponsorID).subscribe((data: any) => {
            this.storage.set(storageKey, data.data);
            resolve(data.data);
            this.dismiss();
          }, err => {
            console.log(err);
            this.dismiss();
          });
        }
      } else {
        this.storage.get(storageKey).then((val) => {
          if (val == null) {
            if (this.network.type === 'none' || this.network.type === 'unknown') {
            } else {
              this.presentLoading();
              this.http.get(ApiEndPoint + 'sponsor/view' + sponsorID).subscribe((data: any) => {
                this.storage.set(storageKey, data.data);
                resolve(data.data);
                this.dismiss();
              }, err => {
                console.log(err);
                this.dismiss();
              });
            }
          } else {
            resolve(val);
          }

        }, err => {
          console.log(err);
        });
      }
    });
  }


  getSponsorship(boolean) {
    return new Promise(resolve => {
      const  storageKey = 'sponsorshipID';
      if (boolean) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
        } else {
          this.presentLoading();
          this.http.get(ApiEndPoint + 'sponsorship/index').subscribe((data: any) => {
            this.storage.set(storageKey, data.data);
            resolve(data.data);
            this.dismiss();
          }, err => {
            console.log(err);
            this.dismiss();
          });
        }
      } else {
        this.storage.get(storageKey).then((val) => {
          if (val == null) {
            if (this.network.type === 'none' || this.network.type === 'unknown') {
            } else {
              this.presentLoading();
              this.http.get(ApiEndPoint + 'sponsorship/index').subscribe((data: any) => {
                this.storage.set(storageKey, data.data);
                resolve(data.data);
                this.dismiss();
              }, err => {
                console.log(err);
                this.dismiss();
              });
            }
          } else {
            resolve(val);
          }

        }, err => {
          console.log(err);
        });
      }
    });
  }

}
