(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-stripe-stripe-module"],{

/***/ "./src/app/pages/payment/stripe/stripe.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/stripe/stripe.module.ts ***!
  \*******************************************************/
/*! exports provided: StripePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePageModule", function() { return StripePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stripe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe.page */ "./src/app/pages/payment/stripe/stripe.page.ts");







var routes = [
    {
        path: '',
        component: _stripe_page__WEBPACK_IMPORTED_MODULE_6__["StripePage"]
    }
];
var StripePageModule = /** @class */ (function () {
    function StripePageModule() {
    }
    StripePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_stripe_page__WEBPACK_IMPORTED_MODULE_6__["StripePage"]]
        })
    ], StripePageModule);
    return StripePageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/stripe/stripe.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/stripe/stripe.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Stripe\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/stripe.png\"></ion-img>\n    <div>\n      <ion-row>\n        <ion-col>\n          <h4>Total Payment</h4>\n        </ion-col>\n        <ion-col>\n          <h3>{{currencyIcon}}{{paymentAmount}}</h3>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-card-content>\n      <form novalidate [formGroup]=\"stripeForm\" (ngSubmit)=\"payWithStripe()\" >\n      <ion-list>\n        <ion-item>\n          <ion-label color=\"primary\">Card Number: </ion-label>\n          <ion-input type=\"text\" placeholder=\"4242424242424242\"\n                     [(ngModel)]=\"cardNumber\" formControlName=\"cardNumber\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_messages.cardNumber\">\n            <div class=\"error-message\" *ngIf=\"stripeForm.get('cardNumber').hasError(validation.type)  && (stripeForm.get('cardNumber').dirty || stripeForm.get('cardNumber').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label color=\"primary\" >Expiration Month: </ion-label>\n          <ion-input type=\"text\" placeholder=\"12\"\n                     [(ngModel)]=\"cardMonth\" formControlName=\"cardMonth\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validationc of validation_messages.cardMonth\">\n            <div class=\"error-message\" *ngIf=\"stripeForm.get('cardMonth').hasError(validationc.type) && (stripeForm.get('cardMonth').dirty || stripeForm.get('cardMonth').touched)\">\n              {{ validationc.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label color=\"primary\" >Expiration Year: </ion-label>\n          <ion-input type=\"text\" placeholder=\"2024\"\n                     [(ngModel)]=\"cardYear\" formControlName=\"cardYear\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_messages.cardYear\">\n            <div class=\"error-message\" *ngIf=\"stripeForm.get('cardYear').hasError(validation.type)  && (stripeForm.get('cardYear').dirty || stripeForm.get('cardYear').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label color=\"primary\" >CVV: </ion-label>\n          <ion-input type=\"text\" placeholder=\"123\"\n                     [(ngModel)]=\"cardCVV\" formControlName=\"cardCVV\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_messages.cardCVV\">\n            <div class=\"error-message\" *ngIf=\"stripeForm.get('cardCVV').hasError(validation.type)  && (stripeForm.get('cardCVV').dirty || stripeForm.get('cardCVV').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n      </ion-list>\n      <ion-button expand=\"full\" color=\"success\" type=\"submit\" [disabled]=\"stripeForm.invalid\" >Pay with Stripe</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/payment/stripe/stripe.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/stripe/stripe.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.card-content-md {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 10px !important;\n  font-size: 14px !important;\n  line-height: 1.5 !important; }\n\nh4 {\n  margin-top: 10px !important;\n  margin-bottom: 0px !important; }\n\nh3 {\n  margin-top: 10px !important;\n  margin-bottom: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9zdHJpcGUvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xccGF5bWVudFxcc3RyaXBlXFxzdHJpcGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvc3RyaXBlL3N0cmlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1tZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XHJcbn1cclxuaDR7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmgze1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/payment/stripe/stripe.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/stripe/stripe.page.ts ***!
  \*****************************************************/
/*! exports provided: StripePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePage", function() { return StripePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/authentication/authentication.service */ "./src/app/service/authentication/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/account/account.service */ "./src/app/service/account/account.service.ts");










var StripePage = /** @class */ (function () {
    function StripePage(stripe, http, network, authService, toastCtrl, loadingCtrl, alertCtrl, route, router, accountService) {
        var _this = this;
        this.stripe = stripe;
        this.http = http;
        this.network = network;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.currency = 'USD';
        this.currencyIcon = '$';
        this.cardDetails = {};
        this.validation_messages = {
            'cardNumber': [
                { type: 'required', message: 'Card number is required.' },
                { type: 'minlength', message: ' Card number must be at least 16 digit.' },
                { type: 'maxlength', message: ' Card number cannot be more than 16 digit.' },
            ],
            'cardMonth': [
                { type: 'required', message: 'Card month is required.' },
                { type: 'minlength', message: ' Card month must be at least 1 digit.' },
                { type: 'maxlength', message: ' Card month cannot be more than 2 digit.' },
            ],
            'cardYear': [
                { type: 'required', message: 'Card year is required.' },
                { type: 'minlength', message: ' Card year must be at least 4 digit.' },
                { type: 'maxlength', message: ' Card year cannot be more than 4 digit.' },
            ],
            'cardCVV': [
                { type: 'required', message: 'Card cvv is required.' },
                { type: 'minlength', message: ' Card cvv must be at least 3 digit.' },
                { type: 'maxlength', message: ' Card cvv cannot be more than 3 digit.' },
            ],
        };
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.invoiceAmount = JSON.parse(params.special);
                _this.paymentAmount = params.totalAmount;
                _this.mainInivoiceID = params.mainInivoiceID;
            }
        });
        this.siteInfo();
        this.stripeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)]),
            cardMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(2)]),
            cardYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4)]),
            cardCVV: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3)]),
        });
    }
    StripePage.prototype.presentToast = function () {
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
    StripePage.prototype.presentLoading = function () {
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
    StripePage.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Login',
                            message: data.message,
                            buttons: ['Dismiss']
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
    StripePage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StripePage.prototype.ionViewDidLoad = function () {
        this.siteInfo();
    };
    StripePage.prototype.siteInfo = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.authService.getSiteInfo()
                .then(function (data) {
                console.log(data);
                _this.siteinfo = data;
                _this.stripe_key = data.stripe_key;
                if (data.currency_symbol && data.currency_code) {
                    _this.currencyIcon = data.currency_symbol;
                    _this.currency = data.currency_code;
                }
            }).catch(function (error) { });
        }
    };
    StripePage.prototype.payWithStripe = function () {
        var _this = this;
        this.stripe.setPublishableKey(this.stripe_key);
        this.cardDetails = {
            number: this.cardNumber,
            expMonth: this.cardMonth,
            expYear: this.cardYear,
            cvc: this.cardCVV
        };
        console.log(this.cardDetails);
        this.presentLoading();
        this.stripe.createCardToken(this.cardDetails)
            .then(function (token) {
            console.log(token);
            _this.makePayment(token.id);
        })
            .catch(function (error) {
            _this.dismiss().then(function (r) { return console.log(r); });
            _this.presentAlert(error);
        });
    };
    StripePage.prototype.makePayment = function (token) {
        var allData = {
            stripeToken: token,
            invoicePaidAmount: this.invoiceAmount,
            totalAmount: this.paymentAmount,
            mainInivoiceID: this.mainInivoiceID,
            paymentmethodID: 'Stripe',
        };
        this.accountService.getInvoicePaid(allData)
            .then(function (data) {
            console.log(data);
        });
        this.dismiss().then(function (r) { return console.log(r); });
        // this.presentAlert('error');
    };
    StripePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripe',
            template: __webpack_require__(/*! ./stripe.page.html */ "./src/app/pages/payment/stripe/stripe.page.html"),
            styles: [__webpack_require__(/*! ./stripe.page.scss */ "./src/app/pages/payment/stripe/stripe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]])
    ], StripePage);
    return StripePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-stripe-stripe-module.js.map