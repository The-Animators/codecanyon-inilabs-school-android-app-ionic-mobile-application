import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiEndPoint } from  '../../config/config';
import { markData } from '../../markconfig/config';

import {Storage} from '@ionic/storage';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Network} from '@ionic-native/network/ngx';





@Injectable({
  providedIn: 'root'
})
export class StudentService {

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


    getStudent(classID, boolean, loginuserID, usertypeID) {
        return new Promise(resolve => {
            const  storageKey = 'student' + classID;
            if (boolean) {
                if (classID) {
                  if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                        this.presentLoading();
                        this.http.get(ApiEndPoint + 'student/index/' + classID).subscribe((data: any) => {
                            this.storage.set(storageKey, data.data);
                            resolve(data.data);
                            this.dismiss();
                        }, err => {
                            console.log(err);
                            this.dismiss();
                        });
                    }
                } else if (classID == null && usertypeID == 3) {
                            const storeProfileKey = 'student_profile' + loginuserID;
                          if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                                this.presentLoading();
                                this.http.get(ApiEndPoint + 'student/index/' + classID).subscribe((data: any) => {
                                    const response = markData(data.data);
                                    this.storage.set(storeProfileKey, response);
                                    resolve(response);
                                    this.dismiss();
                                }, err => {
                                    console.log(err);
                                    this.dismiss();
                                });
                            }
                }
            } else {

                if (classID == null && usertypeID == null) {
                    this.storage.get(storageKey).then((val) => {
                        if (val == null) {
                          if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                                this.presentLoading();
                                this.http.get(ApiEndPoint + 'student/index/' + classID).subscribe((data: any) => {
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
                } else if (classID) {
                    this.storage.get(storageKey).then((val) => {
                        if (val == null) {
                          if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                                this.presentLoading();
                                this.http.get(ApiEndPoint + 'student/index/' + classID).subscribe((data: any) => {
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
                } else if (classID == null && usertypeID == 3) {
                    const storeProfileKey = 'student_profile' + loginuserID;
                    this.storage.get(storeProfileKey).then((val) => {
                        if (val == null) {
                          if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                                this.presentLoading();
                                this.http.get(ApiEndPoint + 'student/index/' + classID).subscribe((data: any) => {
                                    const response = markData(data.data);
                                    this.storage.set(storeProfileKey, response);
                                    resolve(response);
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
            }

        });
    }

    getStudentView(studentID, classID, boolean) {
        return new Promise(resolve => {
            const storeProfileKey = 'student_profile' + studentID + classID;
            if (boolean) {
              if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                    this.presentLoading();
                    this.http.get(ApiEndPoint + 'student/view/' + studentID + '/' + classID).subscribe((data: any) => {
                        const response = markData(data.data);
                        this.storage.set(storeProfileKey, response);
                        resolve(response);
                        this.dismiss();
                    }, err => {
                        console.log(err);
                        this.dismiss();
                    });
                }
            } else {
                this.storage.get(storeProfileKey).then((val) => {
                    if (val == null) {
                      if (this.network.type === 'none' || this.network.type === 'unknown') {
                        } else {
                            this.presentLoading();
                            this.http.get(ApiEndPoint + 'student/view/' + studentID + '/' + classID).subscribe((data: any) => {
                                const response = markData(data.data);
                                console.log(data.data);
                                this.storage.set(storeProfileKey, response);
                                resolve(response);
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
