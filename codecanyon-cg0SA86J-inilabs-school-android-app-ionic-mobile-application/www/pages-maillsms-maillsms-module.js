(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maillsms-maillsms-module"],{

/***/ "./src/app/pages/maillsms/maillsms.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/maillsms/maillsms.module.ts ***!
  \***************************************************/
/*! exports provided: MaillsmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaillsmsPageModule", function() { return MaillsmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maillsms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maillsms.page */ "./src/app/pages/maillsms/maillsms.page.ts");







var routes = [
    {
        path: '',
        component: _maillsms_page__WEBPACK_IMPORTED_MODULE_6__["MaillsmsPage"]
    }
];
var MaillsmsPageModule = /** @class */ (function () {
    function MaillsmsPageModule() {
    }
    MaillsmsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_maillsms_page__WEBPACK_IMPORTED_MODULE_6__["MaillsmsPage"]]
        })
    ], MaillsmsPageModule);
    return MaillsmsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/maillsms/maillsms.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/maillsms/maillsms.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"background-color\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content   class=\"bg-image no-scroll\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ng-container *ngIf=\"mailsms?.length > 0\">\n    <ion-card class=\"card-bg\"  *ngFor=\"let mlsm of mailsms; let i = index\" routerLink=\"/maillsmsview/{{mlsm.mailandsmsID}}\">\n        <div class=\"card-class\">\n            <h3 class=\"text-color-h\">{{mlsm.usertype}}</h3>\n            <ion-item class=\"p-text ion-item-css\" >\n                <ion-avatar style=\"margin-right: 10px\">\n                    <img src=\"assets/sms.png\" />\n                </ion-avatar>\n                <ion-label>\n                    <h4>{{mlsm.type}}</h4>\n                    <ion-text color=\"secondary\">\n                        <p>{{mlsm.create_date | date: \"dd MMM yyyy HH:mm:ss\"}}</p>\n                    </ion-text>\n                </ion-label>\n            </ion-item>\n        </div>\n    </ion-card>\n    </ng-container>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/maillsms/maillsms.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/maillsms/maillsms.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbGxzbXMvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcbWFpbGxzbXNcXG1haWxsc21zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLG9CQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDJDQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbGxzbXMvbWFpbGxzbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcblxufVxuXG4uY2FyZC1jbGFzcyB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pb24taXRlbS1jc3Mge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/maillsms/maillsms.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/maillsms/maillsms.page.ts ***!
  \*************************************************/
/*! exports provided: MaillsmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaillsmsPage", function() { return MaillsmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _service_maillsms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/maillsms.service */ "./src/app/service/maillsms.service.ts");







var MaillsmsPage = /** @class */ (function () {
    function MaillsmsPage(router, route, network, toastCtrl, mailsmsService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.mailsmsService = mailsmsService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
    }
    MaillsmsPage.prototype.ngOnInit = function () {
    };
    MaillsmsPage.prototype.presentToast = function () {
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
    MaillsmsPage.prototype.getMailsmsView = function (mailsmsID) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.router.navigate(['/maillsmsview', mailsmsID]);
        }
    };
    MaillsmsPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.mailsmsService.getMaillSms(value)
            .then(function (data) {
            _this.mailsms = data.mailandsms;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'mailandsms')
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
    MaillsmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maillsms',
            template: __webpack_require__(/*! ./maillsms.page.html */ "./src/app/pages/maillsms/maillsms.page.html"),
            styles: [__webpack_require__(/*! ./maillsms.page.scss */ "./src/app/pages/maillsms/maillsms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_maillsms_service__WEBPACK_IMPORTED_MODULE_6__["MaillsmsService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], MaillsmsPage);
    return MaillsmsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maillsms-maillsms-module.js.map