(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-feetypes-feetypes-module"],{

/***/ "./src/app/pages/account/feetypes/feetypes.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/feetypes/feetypes.module.ts ***!
  \***********************************************************/
/*! exports provided: FeetypesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeetypesPageModule", function() { return FeetypesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feetypes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feetypes.page */ "./src/app/pages/account/feetypes/feetypes.page.ts");







var routes = [
    {
        path: '',
        component: _feetypes_page__WEBPACK_IMPORTED_MODULE_6__["FeetypesPage"]
    }
];
var FeetypesPageModule = /** @class */ (function () {
    function FeetypesPageModule() {
    }
    FeetypesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feetypes_page__WEBPACK_IMPORTED_MODULE_6__["FeetypesPage"]]
        })
    ], FeetypesPageModule);
    return FeetypesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/feetypes/feetypes.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/feetypes/feetypes.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"feetypes\">\n    <ion-card class=\"card-bg\"  *ngFor=\"let feetype of feetypes; let i = index\">\n      <div class=\"card-class\">\n        <h4 class=\"text-color-h\">{{language?.feetypes_name}} ({{i+1}})</h4>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/late-fee.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{feetype.feetypes}}</h4>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/account/feetypes/feetypes.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/feetypes/feetypes.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9mZWV0eXBlcy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50XFxmZWV0eXBlc1xcZmVldHlwZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDJDQUF1QixFQUFBOztBQUV6QjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9mZWV0eXBlcy9mZWV0eXBlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/account/feetypes/feetypes.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/feetypes/feetypes.page.ts ***!
  \*********************************************************/
/*! exports provided: FeetypesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeetypesPage", function() { return FeetypesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/account/account.service */ "./src/app/service/account/account.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var FeetypesPage = /** @class */ (function () {
    function FeetypesPage(router, route, accountService, network, toastCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
    }
    FeetypesPage.prototype.ngOnInit = function () { };
    FeetypesPage.prototype.presentToast = function () {
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
    FeetypesPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.accountService.getFeetypes(value)
            .then(function (data) {
            _this.feetypes = data.feetypes;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'feetypes')
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
    FeetypesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feetypes',
            template: __webpack_require__(/*! ./feetypes.page.html */ "./src/app/pages/account/feetypes/feetypes.page.html"),
            styles: [__webpack_require__(/*! ./feetypes.page.scss */ "./src/app/pages/account/feetypes/feetypes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], FeetypesPage);
    return FeetypesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-feetypes-feetypes-module.js.map