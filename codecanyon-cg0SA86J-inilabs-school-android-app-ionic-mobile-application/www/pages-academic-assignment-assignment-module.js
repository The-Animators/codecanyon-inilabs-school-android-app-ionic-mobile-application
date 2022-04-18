(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-academic-assignment-assignment-module"],{

/***/ "./src/app/pages/academic/assignment/assignment.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/academic/assignment/assignment.module.ts ***!
  \****************************************************************/
/*! exports provided: AssignmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentPageModule", function() { return AssignmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assignment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignment.page */ "./src/app/pages/academic/assignment/assignment.page.ts");







var routes = [
    {
        path: '',
        component: _assignment_page__WEBPACK_IMPORTED_MODULE_6__["AssignmentPage"]
    }
];
var AssignmentPageModule = /** @class */ (function () {
    function AssignmentPageModule() {
    }
    AssignmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_assignment_page__WEBPACK_IMPORTED_MODULE_6__["AssignmentPage"]]
        })
    ], AssignmentPageModule);
    return AssignmentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/academic/assignment/assignment.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/academic/assignment/assignment.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n  <ion-toolbar color=\"light\" *ngIf=\"classes\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.assignment_classes}}</ion-label>\n          <ion-select placeholder=\"{{language?.assignment_select_classes}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  </ng-container>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"assignments\">\n    <ion-card class=\"card-bg\" *ngFor=\"let assignment of assignments\">\n      <div class=\"card-class\">\n        <ion-row>\n          <ion-col size=\"5\"><h3 class=\"text-color-h\">{{assignment.title}}</h3></ion-col>\n          <ion-col size=\"7\">\n            <ion-button color=\"warning\" *ngIf=\"assignment.file\" class=\"button-download\" (click)=\"fileDownload(assignment.file,assignment.originalfile)\"><ion-icon  name=\"cloud-download\"></ion-icon></ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/subject.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.assignment_description}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{assignment.description}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.assignment_deadlinedate}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{assignment.deadlinedate | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/academic/assignment/assignment.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/academic/assignment/assignment.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.button-download {\n  float: right; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNhZGVtaWMvYXNzaWdubWVudC9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY2FkZW1pY1xcYXNzaWdubWVudFxcYXNzaWdubWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxvQkFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFFekI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjYWRlbWljL2Fzc2lnbm1lbnQvYXNzaWdubWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLmJ1dHRvbi1kb3dubG9hZCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiM5ODlhYTI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/academic/assignment/assignment.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/academic/assignment/assignment.page.ts ***!
  \**************************************************************/
/*! exports provided: AssignmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentPage", function() { return AssignmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_academic_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/academic/assignment.service */ "./src/app/service/academic/assignment.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");














var AssignmentPage = /** @class */ (function () {
    function AssignmentPage(router, route, classService, assignmentService, langandpermissionService, transfer, file, fileOpener, androidPermissions, network, storage, toastCtrl, loadingCtrl, alertCtrl, menuCtrl) {
        this.router = router;
        this.route = route;
        this.classService = classService;
        this.assignmentService = assignmentService;
        this.langandpermissionService = langandpermissionService;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.androidPermissions = androidPermissions;
        this.network = network;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.selectedClass = '';
        this.isRefresh = true;
    }
    AssignmentPage.prototype.ngOnInit = function () {
        this.Profile();
        this.doRefresh(false, false, '');
    };
    AssignmentPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                            spinner: 'crescent',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AssignmentPage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    AssignmentPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'You are offline, please connect your wifi or 3g',
                            position: 'top',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AssignmentPage.prototype.presentAlertConfirm = function (entry, filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'File downloaded!',
                            message: "" + entry.fullPath,
                            buttons: [
                                {
                                    text: 'Open',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        var extension = filename.replace(/^.*?\.([a-zA-Z0-9]+)$/, "$1");
                                        if (extension === 'pdf') {
                                            _this.fileOpener.open("" + entry.nativeURL, 'application/pdf')
                                                .then(function () { return console.log('File is opened'); })
                                                .catch(function (e) { return console.log('Error opening file', e); });
                                        }
                                        else {
                                            _this.fileOpener.open("" + entry.nativeURL, 'image/' + filename)
                                                .then(function () { return console.log('File is opened'); })
                                                .catch(function (e) { return console.log('Error opening file', e); });
                                        }
                                    }
                                }, {
                                    text: 'Open',
                                    handler: function () {
                                        var extension = filename.replace(/^.*?\.([a-zA-Z0-9]+)$/, "$1");
                                        if (extension === 'pdf') {
                                            _this.fileOpener.open("" + entry.nativeURL, 'application/pdf')
                                                .then(function () { return console.log('File is opened'); })
                                                .catch(function (e) { return console.log('Error opening file', e); });
                                        }
                                        else {
                                            _this.fileOpener.open("" + entry.nativeURL, 'image/' + filename)
                                                .then(function () { return console.log('File is opened'); })
                                                .catch(function (e) { return console.log('Error opening file', e); });
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AssignmentPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AssignmentPage.prototype.fileDownload = function (file, filename) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
                if (result.hasPermission) {
                    // code
                    _this.presentLoading();
                    var fileTransfer = _this.transfer.create();
                    var url = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"] + 'uploads/images/' + file;
                    fileTransfer.download(url, _this.file.externalRootDirectory + 'Download/' + filename)
                        .then(function (entry) {
                        _this.presentAlertConfirm(entry, filename);
                        console.log('download complete: ' + JSON.stringify(entry));
                        _this.dismiss();
                    }, function (error) {
                        _this.dismiss();
                        // handle error
                        console.log(error);
                    });
                }
                else {
                    _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
                        if (result.hasPermission) {
                            // code
                            _this.presentLoading();
                            var fileTransfer = _this.transfer.create();
                            var url = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"] + 'uploads/images/' + file;
                            // fileTransfer.download(path, this.file.dataDirectory + 'report.' + extension)
                            fileTransfer.download(url, _this.file.externalRootDirectory + 'Download/' + filename)
                                .then(function (entry) {
                                _this.dismiss();
                                _this.presentAlertConfirm(entry, filename);
                                console.log('download complete: ' + JSON.stringify(entry));
                            }, function (error) {
                                _this.dismiss();
                                console.log(error);
                            });
                        }
                    });
                }
            }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE); });
        }
    };
    AssignmentPage.prototype.doRefresh = function (event, value, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.assignmentService.getAssignment(value, classID)
            .then(function (data) {
            _this.classes = data.classes;
            _this.assignments = data.assignments;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'assignment')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
        });
        if (event) {
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    AssignmentPage.prototype.selectedClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.classID = this.selectedClass;
        if (this.classID) {
            this.assignmentService.getAssignment(false, this.classID)
                .then(function (data) {
                _this.classesData = data.classes;
                _this.assignments = data.assignments;
            });
            this.langandpermissionService.getLangandPermissionCall(false, 'assignment')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
        }
    };
    AssignmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignment',
            template: __webpack_require__(/*! ./assignment.page.html */ "./src/app/pages/academic/assignment/assignment.page.html"),
            styles: [__webpack_require__(/*! ./assignment.page.scss */ "./src/app/pages/academic/assignment/assignment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"],
            _service_academic_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"]])
    ], AssignmentPage);
    return AssignmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-academic-assignment-assignment-module.js.map