(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visitorinfo-visitorinfoview-visitorinfoview-module"],{

/***/ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.module.ts ***!
  \*****************************************************************************/
/*! exports provided: VisitorinfoviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorinfoviewPageModule", function() { return VisitorinfoviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitorinfoview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitorinfoview.page */ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.ts");







var routes = [
    {
        path: '',
        component: _visitorinfoview_page__WEBPACK_IMPORTED_MODULE_6__["VisitorinfoviewPage"]
    }
];
var VisitorinfoviewPageModule = /** @class */ (function () {
    function VisitorinfoviewPageModule() {
    }
    VisitorinfoviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_visitorinfoview_page__WEBPACK_IMPORTED_MODULE_6__["VisitorinfoviewPage"]]
        })
    ], VisitorinfoviewPageModule);
    return VisitorinfoviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,visitorID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"visitorinfo\">\n    <ion-card class=\"card-bg\" *ngIf=\"visitorinfo\">\n      <ion-card-header align=\"center\" class=\"book-header\">{{visitorinfo.name}}</ion-card-header>\n      <img *ngIf=\"visitorinfo.photo\" src=\"{{siteUrl}}uploads/visitor/{{visitorinfo.photo}}\">\n      <p align=\"center\" *ngIf=\"user\">{{language?.to_meet}} - {{user}}</p>\n      <ion-card-content>\n        <ion-list  class=\"card-bg\" *ngIf=\"visitorinfo\" >\n          <ion-item class=\"item\" *ngIf=\"visitorinfo?.name\">\n            <ion-label>\n              <p align=\"left\">{{language?.name}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{visitorinfo?.name}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"visitorinfo?.email_id\">\n            <ion-label>\n              <p align=\"left\">{{language?.email_id}}</p>\n            </ion-label>\n            <ion-note slot=\"end\"  class=\"ionnote\">{{visitorinfo?.email_id}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"visitorinfo?.phone\">\n            <ion-label>\n              <p align=\"left\">{{language?.phone}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{visitorinfo?.phone}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"teacherprofile?.company_name\">\n            <ion-label>\n              <p align=\"left\">{{language?.company_name}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.company_name}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"teacherprofile?.coming_from\">\n            <ion-label>\n              <p align=\"left\">{{language?.coming_from}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.coming_from}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"visitorinfo?.check_in\">\n            <ion-label>\n              <p align=\"left\">{{language?.check_in}}</p>\n            </ion-label>\n            <ion-note slot=\"end\"  class=\"ionnote\">{{visitorinfo?.check_in | date: \"dd MMM yyyy HH:mm:ss\"}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"visitorinfo?.check_out\">\n            <ion-label>\n              <p align=\"left\">{{language?.check_out}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{visitorinfo?.check_out | date: \"dd MMM yyyy HH:mm:ss\"}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.book-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXRvcmluZm8vdmlzaXRvcmluZm92aWV3L0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXHZpc2l0b3JpbmZvXFx2aXNpdG9yaW5mb3ZpZXdcXHZpc2l0b3JpbmZvdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdG9yaW5mby92aXNpdG9yaW5mb3ZpZXcvdmlzaXRvcmluZm92aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5ib29rLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.ts ***!
  \***************************************************************************/
/*! exports provided: VisitorinfoviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorinfoviewPage", function() { return VisitorinfoviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_visitorinfo_visitorinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/visitorinfo/visitorinfo.service */ "./src/app/service/visitorinfo/visitorinfo.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var VisitorinfoviewPage = /** @class */ (function () {
    function VisitorinfoviewPage(router, route, network, toastCtrl, visitorinfoService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.visitorinfoService = visitorinfoService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.visitorID = this.route.snapshot.paramMap.get('visitorID');
        this.doRefresh(false, false, this.visitorID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    VisitorinfoviewPage.prototype.ngOnInit = function () {
    };
    VisitorinfoviewPage.prototype.presentToast = function () {
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
    VisitorinfoviewPage.prototype.doRefresh = function (event, value, visitorID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.visitorinfoService.getVisitorinfoview(value, visitorID)
            .then(function (data) {
            _this.visitorinfo = data.visitorinfo;
            _this.user = data.name;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'visitorinfo')
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
    VisitorinfoviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitorinfoview',
            template: __webpack_require__(/*! ./visitorinfoview.page.html */ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.html"),
            styles: [__webpack_require__(/*! ./visitorinfoview.page.scss */ "./src/app/pages/visitorinfo/visitorinfoview/visitorinfoview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_visitorinfo_visitorinfo_service__WEBPACK_IMPORTED_MODULE_3__["VisitorinfoService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], VisitorinfoviewPage);
    return VisitorinfoviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-visitorinfo-visitorinfoview-visitorinfoview-module.js.map