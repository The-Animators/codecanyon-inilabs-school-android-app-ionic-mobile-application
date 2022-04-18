(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-invoice-invoice-module"],{

/***/ "./src/app/pages/account/invoice/invoice.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/invoice/invoice.module.ts ***!
  \*********************************************************/
/*! exports provided: InvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.page */ "./src/app/pages/account/invoice/invoice.page.ts");







var routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]
    }
];
var InvoicePageModule = /** @class */ (function () {
    function InvoicePageModule() {
    }
    InvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]]
        })
    ], InvoicePageModule);
    return InvoicePageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/invoice/invoice.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/invoice/invoice.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"maininvoices?.length > 0\">\n    <ion-toolbar color=\"light\">\n      <ion-row>\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-searchbar placeholder=\"Search for a student name\"  (ionInput)=\"filterArea($event.target.value)\">\n            </ion-searchbar>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ng-container>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"maininvoices?.length > 0\">\n    <ion-card class=\"card-bg\"  *ngFor=\"let maininvoice of maininvoices\">\n      <div class=\"card-class\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <img class=\"boy-img\" src=\"{{siteUrl}}uploads/images/{{maininvoice.photo}}\">\n          </ion-col>\n          <ion-col size=\"9\">\n            <div class=\"text-div\">\n              <h4 class=\"text-color-h\"> {{maininvoice.srname}}</h4>\n              <p class=\"text-color-p\">{{language?.invoice_classes}}({{maininvoice.srclasses}})</p>\n            </div>\n            <ion-row>\n            <ion-col size=\"4\">\n                <ion-badge color=\"success\" style=\"font-size: 11px !important;\" *ngIf=\"maininvoice.maininvoicestatus == '2';else status\">{{language?.invoice_fully_paid}}</ion-badge>\n              <ng-template #status >\n                <ion-badge style=\"font-size: 11px !important;\" *ngIf=\"maininvoice.maininvoicestatus == '1';else status1\" color=\"warning\">{{language?.invoice_partially_paid}}</ion-badge>\n              </ng-template>\n              <ng-template #status1 >\n                <ion-badge style=\"font-size: 11px !important;\"  *ngIf=\"maininvoice.maininvoicestatus == '0';\" color=\"danger\">{{language?.invoice_notpaid}}</ion-badge>\n              </ng-template>\n            </ion-col>\n            <ion-col size=\"8\">\n              <div class=\"ion-text-end\">\n                <ion-button  class=\"button-with-height button-color\"  size=\"default\"  (click)=\"getinvoiceIDView(maininvoice.maininvoiceID)\">View</ion-button>\n<!--                <ion-button  *ngIf=\"maininvoice.maininvoicestatus != '2'\" class=\"button-with-height\" fill=\"solid\" size=\"default\" color=\"primary\" (click)=\"getinvoiceIDPayment(maininvoice.maininvoiceID)\">Payment</ion-button>-->\n              </div>\n            </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.invoice_date}}</h4>\n            <ion-text>\n              <p>{{maininvoice.maininvoicedate | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/invoice.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.invoice_total}} - {{totalamount[maininvoice?.maininvoiceID]}} </h4>\n            <ion-text *ngIf=\"maininvoice.maininvoicestatus != '0';\">\n              <p>{{language?.invoice_paid}} - {{totalpayment[maininvoice?.maininvoiceID]}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/invoice/invoice.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/invoice/invoice.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 10px; }\n\n.boy-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.button-with-height {\n  width: 65px;\n  height: 25px;\n  font-size: 10px; }\n\n.button-color {\n  --background: #9395a0 !important; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9pbnZvaWNlL0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXGFjY291bnRcXGludm9pY2VcXGludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDJDQUF1QixFQUFBOztBQUV6QjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQ0FBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2ludm9pY2UvaW52b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ib3ktaW1nIHtcbiAgd2lkdGg6ODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5idXR0b24td2l0aC1oZWlnaHQge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uYnV0dG9uLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTM5NWEwICFpbXBvcnRhbnQ7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/account/invoice/invoice.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/account/invoice/invoice.page.ts ***!
  \*******************************************************/
/*! exports provided: InvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePage", function() { return InvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/account/account.service */ "./src/app/service/account/account.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var InvoicePage = /** @class */ (function () {
    function InvoicePage(router, route, network, toastCtrl, accountService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.accountService = accountService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    InvoicePage.prototype.ngOnInit = function () {
    };
    InvoicePage.prototype.presentToast = function () {
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
    InvoicePage.prototype.getinvoiceIDView = function (inivoiceID) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.router.navigate(['/invoiceview', inivoiceID]);
        }
    };
    InvoicePage.prototype.getinvoiceIDPayment = function (inivoiceID) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.router.navigate(['/payment', inivoiceID]);
        }
    };
    InvoicePage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.accountService.getInvoice(value)
            .then(function (data) {
            console.log(_this.maininvoices);
            _this.maininvoices = data.maininvoices;
            _this.grandtotal = data.grandtotalandpayment.grandtotal;
            _this.totalamount = data.grandtotalandpayment.totalamount;
            _this.totaldiscount = data.grandtotalandpayment.totaldiscount;
            _this.totalpayment = data.grandtotalandpayment.totalpayment;
            _this.totalweaver = data.grandtotalandpayment.totalweaver;
            _this.totalfine = data.grandtotalandpayment.totalfine;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'invoice')
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
    InvoicePage.prototype.filterArea = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.maininvoices = this.maininvoices.filter(function (item) {
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
    InvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.page.html */ "./src/app/pages/account/invoice/invoice.page.html"),
            styles: [__webpack_require__(/*! ./invoice.page.scss */ "./src/app/pages/account/invoice/invoice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], InvoicePage);
    return InvoicePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-invoice-invoice-module.js.map