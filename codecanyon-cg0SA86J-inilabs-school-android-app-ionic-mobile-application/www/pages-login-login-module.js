(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <ion-grid class=\"bg-image no-scroll\">\n        <ion-row justify-content-center>\n            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" >\n                <div text-center>\n                    <img color=\"secondary\" src=\"{{siteUrl}}uploads/images/{{siteinfo?.logo}}\" class=\"img\"  alt=\"\" align=\"center\">\n                    <h4 class=\"login-h4\">{{siteinfo?.sitename}}</h4>\n                </div>\n                <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" >\n\n                    <div padding>\n                        <ion-item class=\"loginitem\">\n                            <ion-input class=\"logininput\" type=\"text\" [(ngModel)]=\"user.username\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\n                        </ion-item>\n                        <ion-item class=\"loginitem\">\n                            <ion-input type=\"password\" class=\"logininput\" [(ngModel)]=\"user.password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n                        </ion-item>\n                    </div>\n\n                    <div padding>\n                        <ion-button class=\"loginbutton\" size=\"large\"  type=\"submit\" [disabled]=\"loginForm.invalid\" expand=\"block\">\n                            <span>Login</span>\n                            <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  width: 100%;\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  border: 1px solid #488aff; }\n\nion-button {\n  font-weight: 300; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-col {\n    border: none; } }\n\n.loginitem {\n  --background: #1D223a !important;\n  border: 2px #989aa2;\n  color: #ffffff;\n  border-radius: 5px;\n  margin-bottom: 8px; }\n\n.loginbutton {\n  --background: #1D223a !important;\n  color: #ffffff;\n  padding: 3px;\n  margin: 0px; }\n\n.logininput {\n  color: #ffffff; }\n\n.login-h4 {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQVU7RUFDVixZQUpjLEVBQUE7O0FBT2hCO0VBQ0UsWUFSYyxFQUFBOztBQVdoQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUdFO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7O0FBR0g7RUFDRSxnQ0FBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdDQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuXG59XG5cbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xufVxuXG5pb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgfVxuICBpb24tY29sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLmxvZ2luaXRlbXtcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4ICM5ODlhYTI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxufVxuLmxvZ2luYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2EgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiAwcHg7XG5cbn1cbi5sb2dpbmlucHV0e1xuICBjb2xvcjogI2ZmZmZmZjtcblxufVxuXG4ubG9naW4taDQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/authentication/authentication.service */ "./src/app/service/authentication/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");









var LoginPage = /** @class */ (function () {
    function LoginPage(events, network, toastCtrl, authService, loadingCtrl, alertCtrl, menuCtrl, router, navCtrl) {
        this.events = events;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.user = new Object();
        this.menuCtrl.enable(false, 'menu');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    LoginPage.prototype.ngOnInit = function () {
        this.siteInfo();
    };
    LoginPage.prototype.presentLoading = function () {
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
    LoginPage.prototype.presentToast = function () {
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
    LoginPage.prototype.presentAlert = function (data) {
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
    LoginPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.siteInfo = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.authService.getSiteInfo()
                .then(function (data) {
                _this.siteinfo = data;
            }).catch(function (error) { });
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.presentLoading();
            this.authService.login(this.user)
                .then(function (data) {
                _this.events.publish('user:created', data.profile);
                _this.events.publish('token:created', data.token);
                if (data) {
                    _this.dismiss();
                    _this.router.navigate(['dashboard']);
                }
            }).catch(function (error) {
                _this.dismiss();
                _this.presentAlert(error);
            });
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map