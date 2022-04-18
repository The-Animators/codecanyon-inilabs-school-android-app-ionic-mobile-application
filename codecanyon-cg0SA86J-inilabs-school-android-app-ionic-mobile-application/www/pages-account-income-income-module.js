(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-income-income-module"],{

/***/ "./src/app/pages/account/income/income.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/account/income/income.module.ts ***!
  \*******************************************************/
/*! exports provided: IncomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income.page */ "./src/app/pages/account/income/income.page.ts");







var routes = [
    {
        path: '',
        component: _income_page__WEBPACK_IMPORTED_MODULE_6__["IncomePage"]
    }
];
var IncomePageModule = /** @class */ (function () {
    function IncomePageModule() {
    }
    IncomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_income_page__WEBPACK_IMPORTED_MODULE_6__["IncomePage"]]
        })
    ], IncomePageModule);
    return IncomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/income/income.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/account/income/income.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"incomes\">\n    <ion-card class=\"card-bg\"  *ngFor=\"let income of incomes\">\n      <div class=\"card-class\">\n        <h4 class=\"text-color-h\">{{income.name}}</h4>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{income.amount}}</h4>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{income.date |date: \"dd MMM yyyy\"}}</h4>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/boy.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 *ngIf=\"income.aname\">{{income.aname}}</h4>\n            <h4 *ngIf=\"income.tname\">{{income.tname}}</h4>\n            <h4 *ngIf=\"income.sname\">{{income.sname}}</h4>\n            <h4 *ngIf=\"income.uname\">{{income.uname}}</h4>\n            <h4 *ngIf=\"income.pname\">{{income.pname}}</h4>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/account/income/income.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/account/income/income.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9pbmNvbWUvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcaW5jb21lXFxpbmNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9pbmNvbWUvaW5jb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuLmNhcmQtY2xhc3Mge1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/account/income/income.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/income/income.page.ts ***!
  \*****************************************************/
/*! exports provided: IncomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePage", function() { return IncomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/account/account.service */ "./src/app/service/account/account.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var IncomePage = /** @class */ (function () {
    function IncomePage(router, route, accountService, network, toastCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
    }
    IncomePage.prototype.ngOnInit = function () {
    };
    IncomePage.prototype.presentToast = function () {
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
    IncomePage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.accountService.getIncomes(value)
            .then(function (data) {
            _this.incomes = data.incomes;
            _this.alluser = data.alluser;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'income')
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
    IncomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-income',
            template: __webpack_require__(/*! ./income.page.html */ "./src/app/pages/account/income/income.page.html"),
            styles: [__webpack_require__(/*! ./income.page.scss */ "./src/app/pages/account/income/income.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], IncomePage);
    return IncomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-income-income-module.js.map