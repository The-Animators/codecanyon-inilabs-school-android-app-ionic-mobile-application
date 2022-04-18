(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-administrator-mailandsmstemplateview-mailandsmstemplateview-module"],{

/***/ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: MailandsmstemplateviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailandsmstemplateviewPageModule", function() { return MailandsmstemplateviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mailandsmstemplateview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mailandsmstemplateview.page */ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.ts");







var routes = [
    {
        path: '',
        component: _mailandsmstemplateview_page__WEBPACK_IMPORTED_MODULE_6__["MailandsmstemplateviewPage"]
    }
];
var MailandsmstemplateviewPageModule = /** @class */ (function () {
    function MailandsmstemplateviewPageModule() {
    }
    MailandsmstemplateviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mailandsmstemplateview_page__WEBPACK_IMPORTED_MODULE_6__["MailandsmstemplateviewPage"]]
        })
    ], MailandsmstemplateviewPageModule);
    return MailandsmstemplateviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,mailandsmstemplateID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"mailandsmstemplate\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/notice.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{mailandsmstemplate?.name}}</h4>\n            <ion-text>\n              <p>{{mailandsmstemplate?.type}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <span>{{mailandsmstemplate?.template}}</span>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 18px;\n  font-weight: bold;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.notice-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9tYWlsYW5kc21zdGVtcGxhdGV2aWV3L0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXGFkbWluaXN0cmF0b3JcXG1haWxhbmRzbXN0ZW1wbGF0ZXZpZXdcXG1haWxhbmRzbXN0ZW1wbGF0ZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbmlzdHJhdG9yL21haWxhbmRzbXN0ZW1wbGF0ZXZpZXcvbWFpbGFuZHNtc3RlbXBsYXRldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcblxufVxuXG4uY2FyZC1jbGFzcyB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLm5vdGljZS1pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: MailandsmstemplateviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailandsmstemplateviewPage", function() { return MailandsmstemplateviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/administrator/administrator.service */ "./src/app/service/administrator/administrator.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var MailandsmstemplateviewPage = /** @class */ (function () {
    function MailandsmstemplateviewPage(router, route, administratorService, network, toastCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.administratorService = administratorService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.mailandsmstemplateID = this.route.snapshot.paramMap.get('mailandsmstemplateID');
        this.doRefresh(false, false, this.mailandsmstemplateID);
    }
    MailandsmstemplateviewPage.prototype.ngOnInit = function () {
    };
    MailandsmstemplateviewPage.prototype.presentToast = function () {
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
    MailandsmstemplateviewPage.prototype.doRefresh = function (event, value, mailandsmstemplateID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.administratorService.getMailandsmsTemplatesview(value, mailandsmstemplateID)
            .then(function (data) {
            _this.mailandsmstemplate = data.mailandsmstemplate;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'mailandsmstemplate')
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
    MailandsmstemplateviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mailandsmstemplateview',
            template: __webpack_require__(/*! ./mailandsmstemplateview.page.html */ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.html"),
            styles: [__webpack_require__(/*! ./mailandsmstemplateview.page.scss */ "./src/app/pages/administrator/mailandsmstemplateview/mailandsmstemplateview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], MailandsmstemplateviewPage);
    return MailandsmstemplateviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-administrator-mailandsmstemplateview-mailandsmstemplateview-module.js.map