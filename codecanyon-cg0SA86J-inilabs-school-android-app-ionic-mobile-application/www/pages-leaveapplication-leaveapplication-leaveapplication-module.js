(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveapplication-leaveapplication-leaveapplication-module"],{

/***/ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplication/leaveapplication.module.ts ***!
  \************************************************************************************/
/*! exports provided: LeaveapplicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapplicationPageModule", function() { return LeaveapplicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaveapplication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveapplication.page */ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.ts");







var routes = [
    {
        path: '',
        component: _leaveapplication_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapplicationPage"]
    }
];
var LeaveapplicationPageModule = /** @class */ (function () {
    function LeaveapplicationPageModule() {
    }
    LeaveapplicationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leaveapplication_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapplicationPage"]]
        })
    ], LeaveapplicationPageModule);
    return LeaveapplicationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"leaveapplications\">\n    <ion-card class=\"card-bg\"  *ngFor=\"let leaveapplication of leaveapplications\"  routerLink=\"/leaveapplicationview/{{leaveapplication.leaveapplicationID}}\">\n      <div class=\"card-class\">\n        <h4 class=\"text-color-h\">{{leavecategorys[leaveapplication.leavecategoryID] }}</h4>\n        <p class=\"text-color-p\" *ngIf=\"leaveapplication?.status == null\">{{language?.leaveapplication_status_pending}}</p>\n        <p class=\"text-color-p\" *ngIf=\"leaveapplication?.status == 1\">{{language?.leaveapplication_status_approved}}</p>\n        <p class=\"text-color-p\" *ngIf=\"leaveapplication?.status == 0\">{{language?.leaveapplication_status_declined}}</p>\n        <ion-item class=\"p-text ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/boy.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\" >{{language?.leaveapplication_name}}</h4>\n            <ion-text>\n              <p *ngIf=\"leaveapplication.sname\">{{leaveapplication.sname }}</p>\n              <p *ngIf=\"leaveapplication.uname\">{{leaveapplication.uname }}</p>\n              <p *ngIf=\"leaveapplication.pname\">{{leaveapplication.pname }}</p>\n              <p *ngIf=\"leaveapplication.tname\">{{leaveapplication.tname }}</p>\n              <p *ngIf=\"leaveapplication.aname\">{{leaveapplication.aname }}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.leaveapplication_date}}</h4>\n            <ion-text>\n              <p>{{leaveapplication.apply_date | date:\"dd MMM yyyy\" }}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.notice-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhdmVhcHBsaWNhdGlvbi9sZWF2ZWFwcGxpY2F0aW9uL0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXGxlYXZlYXBwbGljYXRpb25cXGxlYXZlYXBwbGljYXRpb25cXGxlYXZlYXBwbGljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXZlYXBwbGljYXRpb24vbGVhdmVhcHBsaWNhdGlvbi9sZWF2ZWFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG5cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiM5ODlhYTI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RpY2UtaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.ts ***!
  \**********************************************************************************/
/*! exports provided: LeaveapplicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapplicationPage", function() { return LeaveapplicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_leaveapplication_leaveapplication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/leaveapplication/leaveapplication.service */ "./src/app/service/leaveapplication/leaveapplication.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var LeaveapplicationPage = /** @class */ (function () {
    function LeaveapplicationPage(router, route, network, toastCtrl, leaveapplicationService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.leaveapplicationService = leaveapplicationService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
    }
    LeaveapplicationPage.prototype.ngOnInit = function () {
    };
    LeaveapplicationPage.prototype.presentToast = function () {
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
    LeaveapplicationPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.leaveapplicationService.getLeaveApplication(value)
            .then(function (data) {
            _this.leaveapplications = data.leaveapplications;
            _this.leavecategorys = data.leavecategorys;
            _this.Users = data.allUser;
            _this.allUserTypes = data.allUserTypes;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'leaveapplication')
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
    LeaveapplicationPage.prototype.getleaveapplicationView = function (leaveapplicationID) {
        this.router.navigate(['/leaveapplicationview', leaveapplicationID]);
    };
    LeaveapplicationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaveapplication',
            template: __webpack_require__(/*! ./leaveapplication.page.html */ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.html"),
            styles: [__webpack_require__(/*! ./leaveapplication.page.scss */ "./src/app/pages/leaveapplication/leaveapplication/leaveapplication.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_leaveapplication_leaveapplication_service__WEBPACK_IMPORTED_MODULE_3__["LeaveapplicationService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], LeaveapplicationPage);
    return LeaveapplicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leaveapplication-leaveapplication-leaveapplication-module.js.map