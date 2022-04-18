(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-razor-razor-module"],{

/***/ "./src/app/pages/payment/razor/razor.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/razor/razor.module.ts ***!
  \*****************************************************/
/*! exports provided: RazorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorPageModule", function() { return RazorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _razor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./razor.page */ "./src/app/pages/payment/razor/razor.page.ts");







var RazorPageModule = /** @class */ (function () {
    function RazorPageModule() {
    }
    RazorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _razor_page__WEBPACK_IMPORTED_MODULE_6__["RazorPage"]
                    }
                ])
            ],
            declarations: [_razor_page__WEBPACK_IMPORTED_MODULE_6__["RazorPage"]]
        })
    ], RazorPageModule);
    return RazorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/razor/razor.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/razor/razor.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      RazorPay\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/razorpay.jpeg\"></ion-img>\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          <h4>Total Payment</h4>\n        </ion-col>\n        <ion-col>\n          <h3>{{currencyIcon}}{{paymentAmount}}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"payWithRazor()\">Pay with RazorPay</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/payment/razor/razor.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/razor/razor.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "razor.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9yYXpvci9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxyYXpvclxccmF6b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9yYXpvci9yYXpvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyYXpvci53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/payment/razor/razor.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/payment/razor/razor.page.ts ***!
  \***************************************************/
/*! exports provided: RazorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorPage", function() { return RazorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/authentication/authentication.service */ "./src/app/service/authentication/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/account/account.service */ "./src/app/service/account/account.service.ts");








var RazorPage = /** @class */ (function () {
    function RazorPage(http, network, authService, toastCtrl, loadingCtrl, alertCtrl, route, router, accountService) {
        var _this = this;
        this.http = http;
        this.network = network;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.paymentAmount = 333;
        this.currency = 'USD';
        this.currencyIcon = '$';
        this.razor_key = 'rzp_test_jsC013SFkMOZlP';
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.invoiceAmount = JSON.parse(params.special);
                _this.paymentAmount = params.totalAmount;
                _this.mainInivoiceID = params.mainInivoiceID;
            }
        });
        this.siteInfo();
    }
    RazorPage.prototype.ionViewDidLoad = function () {
        this.siteInfo();
    };
    RazorPage.prototype.presentLoading = function () {
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
    RazorPage.prototype.presentAlert = function (data) {
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
    RazorPage.prototype.presentToast = function () {
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
    RazorPage.prototype.siteInfo = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.authService.getSiteInfo()
                .then(function (data) {
                console.log(data);
                _this.siteinfo = data;
                if (data.currency_symbol && data.currency_code) {
                    _this.currencyIcon = data.currency_symbol;
                    _this.currency = data.currency_code;
                }
            }).catch(function (error) { });
        }
    };
    RazorPage.prototype.payWithRazor = function () {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: this.currency,
            key: this.razor_key,
            amount: this.paymentAmount,
            name: 'foo',
            prefill: {
                email: 'admin@enappd.com',
                contact: '9621323231',
                name: 'Enappd'
            },
            theme: {
                color: '#528FF0'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = function (payment_id) {
            alert('payment_id: ' + payment_id);
        };
        var cancelCallback = function (error) {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    RazorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-razor',
            template: __webpack_require__(/*! ./razor.page.html */ "./src/app/pages/payment/razor/razor.page.html"),
            styles: [__webpack_require__(/*! ./razor.page.scss */ "./src/app/pages/payment/razor/razor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]])
    ], RazorPage);
    return RazorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-razor-razor-module.js.map