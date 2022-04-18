(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-paymenthistory-paymenthistory-module"],{

/***/ "./src/app/pages/account/paymenthistory/paymenthistory.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/paymenthistory/paymenthistory.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymenthistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPageModule", function() { return PaymenthistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymenthistory.page */ "./src/app/pages/account/paymenthistory/paymenthistory.page.ts");







var routes = [
    {
        path: '',
        component: _paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__["PaymenthistoryPage"]
    }
];
var PaymenthistoryPageModule = /** @class */ (function () {
    function PaymenthistoryPageModule() {
    }
    PaymenthistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__["PaymenthistoryPage"]]
        })
    ], PaymenthistoryPageModule);
    return PaymenthistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/paymenthistory/paymenthistory.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/paymenthistory/paymenthistory.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"payments?.length > 0\">\n    <ion-toolbar color=\"light\">\n      <ion-row>\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-searchbar placeholder=\"Search for a student name\"  (ionInput)=\"filterArea($event.target.value)\">\n            </ion-searchbar>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ng-container>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"payments?.length > 0\">\n\n    <ion-card class=\"card-bg\"  *ngFor=\"let payment of payments\">\n      <div class=\"card-class\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <img class=\"boy-img\" src=\"{{siteUrl}}uploads/images/{{payment.photo}}\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h4 class=\"text-color-h\"> {{payment.srname}}</h4>\n              <p class=\"text-color-p\">{{language?.paymenthistory_classes}}({{payment.srclasses}})</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/fee.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.paymenthistory_feetype}}</h4>\n            <ion-text>\n              <p>{{payment.feetype}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.paymenthistory_date}}</h4>\n            <ion-text>\n              <p>{{payment.paymentdate |date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/invoice.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{payment.paymenttype}}</h4>\n            <ion-text>\n              <p>{{payment.paymentamount}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/teacher.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.paymenthistory_payment_by}}</h4>\n            <ion-text>\n              <p>{{payment.uname}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/paymenthistory/paymenthistory.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/paymenthistory/paymenthistory.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.boy-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9wYXltZW50aGlzdG9yeS9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50XFxwYXltZW50aGlzdG9yeVxccGF5bWVudGhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9wYXltZW50aGlzdG9yeS9wYXltZW50aGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcblxufVxuXG4uY2FyZC1jbGFzcyB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5pb24taXRlbS1jc3Mge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4uYm95LWltZyB7XG4gIHdpZHRoOjgwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/account/paymenthistory/paymenthistory.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/account/paymenthistory/paymenthistory.page.ts ***!
  \*********************************************************************/
/*! exports provided: PaymenthistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPage", function() { return PaymenthistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/account/account.service */ "./src/app/service/account/account.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var PaymenthistoryPage = /** @class */ (function () {
    function PaymenthistoryPage(router, route, accountService, network, toastCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    PaymenthistoryPage.prototype.ngOnInit = function () {
    };
    PaymenthistoryPage.prototype.presentToast = function () {
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
    PaymenthistoryPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.accountService.getPaymenthistory(value)
            .then(function (data) {
            _this.payments = data.payments;
            console.log(_this.payments);
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'paymenthistory')
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
    PaymenthistoryPage.prototype.filterArea = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.payments = this.payments.filter(function (item) {
                if (item.srname.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return item.srname.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
                else {
                    return item.srregisterNO.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        }
        else {
            this.doRefresh(false, false);
        }
    };
    PaymenthistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paymenthistory',
            template: __webpack_require__(/*! ./paymenthistory.page.html */ "./src/app/pages/account/paymenthistory/paymenthistory.page.html"),
            styles: [__webpack_require__(/*! ./paymenthistory.page.scss */ "./src/app/pages/account/paymenthistory/paymenthistory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], PaymenthistoryPage);
    return PaymenthistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-paymenthistory-paymenthistory-module.js.map