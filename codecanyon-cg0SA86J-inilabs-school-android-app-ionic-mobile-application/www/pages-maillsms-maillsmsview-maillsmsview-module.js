(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maillsms-maillsmsview-maillsmsview-module"],{

/***/ "./src/app/pages/maillsms/maillsmsview/maillsmsview.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/maillsms/maillsmsview/maillsmsview.module.ts ***!
  \********************************************************************/
/*! exports provided: MaillsmsviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaillsmsviewPageModule", function() { return MaillsmsviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maillsmsview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maillsmsview.page */ "./src/app/pages/maillsms/maillsmsview/maillsmsview.page.ts");







var routes = [
    {
        path: '',
        component: _maillsmsview_page__WEBPACK_IMPORTED_MODULE_6__["MaillsmsviewPage"]
    }
];
var MaillsmsviewPageModule = /** @class */ (function () {
    function MaillsmsviewPageModule() {
    }
    MaillsmsviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_maillsmsview_page__WEBPACK_IMPORTED_MODULE_6__["MaillsmsviewPage"]]
        })
    ], MaillsmsviewPageModule);
    return MaillsmsviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/maillsms/maillsmsview/maillsmsview.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/maillsms/maillsmsview/maillsmsview.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,mailsmsID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"mailandsms\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/sms.png\" />\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <p>{{mailandsms.type}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <p align=\"center\">{{mailandsms?.create_date | date: \"dd MMM yyyy HH:mm:ss\"}}</p>\n          <span>{{mailandsms?.message}}</span>\n        </ion-card-content>\n      </div>\n    </ion-card>\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/user.png\" />\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <p>{{language?.mailandsms_reciver_users}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <p>{{mailandsms.users}}</p>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/maillsms/maillsmsview/maillsmsview.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/maillsms/maillsmsview/maillsmsview.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.notice-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbGxzbXMvbWFpbGxzbXN2aWV3L0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXG1haWxsc21zXFxtYWlsbHNtc3ZpZXdcXG1haWxsc21zdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFLckI7RUFDRSxvQkFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbGxzbXMvbWFpbGxzbXN2aWV3L21haWxsc21zdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcblxufVxuXG4uY2FyZC1jbGFzcyB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5pb24taXRlbS1jc3Mge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4ubm90aWNlLWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/maillsms/maillsmsview/maillsmsview.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/maillsms/maillsmsview/maillsmsview.page.ts ***!
  \******************************************************************/
/*! exports provided: MaillsmsviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaillsmsviewPage", function() { return MaillsmsviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _service_maillsms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/maillsms.service */ "./src/app/service/maillsms.service.ts");








var MaillsmsviewPage = /** @class */ (function () {
    function MaillsmsviewPage(router, route, network, toastCtrl, mailsmsService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.mailsmsService = mailsmsService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.mailsmsID = this.route.snapshot.paramMap.get('mailsmsID');
        this.doRefresh(false, false, this.mailsmsID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["fileUrl"];
    }
    MaillsmsviewPage.prototype.ngOnInit = function () {
    };
    MaillsmsviewPage.prototype.presentToast = function () {
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
    MaillsmsviewPage.prototype.doRefresh = function (event, value, mailsmsID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.mailsmsService.getMaillSmsView(value, mailsmsID)
            .then(function (data) {
            _this.mailandsms = data.mailandsms;
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
    MaillsmsviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maillsmsview',
            template: __webpack_require__(/*! ./maillsmsview.page.html */ "./src/app/pages/maillsms/maillsmsview/maillsmsview.page.html"),
            styles: [__webpack_require__(/*! ./maillsmsview.page.scss */ "./src/app/pages/maillsms/maillsmsview/maillsmsview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_maillsms_service__WEBPACK_IMPORTED_MODULE_7__["MaillsmsService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], MaillsmsviewPage);
    return MaillsmsviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maillsms-maillsmsview-maillsmsview-module.js.map