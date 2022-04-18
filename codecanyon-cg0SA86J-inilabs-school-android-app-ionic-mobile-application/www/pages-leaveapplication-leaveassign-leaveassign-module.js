(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveapplication-leaveassign-leaveassign-module"],{

/***/ "./src/app/pages/leaveapplication/leaveassign/leaveassign.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveassign/leaveassign.module.ts ***!
  \**************************************************************************/
/*! exports provided: LeaveassignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveassignPageModule", function() { return LeaveassignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaveassign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveassign.page */ "./src/app/pages/leaveapplication/leaveassign/leaveassign.page.ts");







var routes = [
    {
        path: '',
        component: _leaveassign_page__WEBPACK_IMPORTED_MODULE_6__["LeaveassignPage"]
    }
];
var LeaveassignPageModule = /** @class */ (function () {
    function LeaveassignPageModule() {
    }
    LeaveassignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leaveassign_page__WEBPACK_IMPORTED_MODULE_6__["LeaveassignPage"]]
        })
    ], LeaveassignPageModule);
    return LeaveassignPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveassign/leaveassign.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveassign/leaveassign.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"leaveassign\">\n    <ion-card class=\"card-bg\" *ngFor=\"let leave of leaveassign; let i = index\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\">{{language?.menu_leaveassign}} ({{i+1}})</h3>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/leave.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{leavecategorys[leave.leavecategoryID] }}</h4>\n            <ion-text color=\"secondary\" *ngIf=\"leave.leaveassignday\">\n              <p>{{leave.leaveassignday }}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/teacher.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.leaveassign_usertypeID }}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{usertypes[leave.usertypeID] }}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveassign/leaveassign.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveassign/leaveassign.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhdmVhcHBsaWNhdGlvbi9sZWF2ZWFzc2lnbi9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxsZWF2ZWFwcGxpY2F0aW9uXFxsZWF2ZWFzc2lnblxcbGVhdmVhc3NpZ24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWF2ZWFwcGxpY2F0aW9uL2xlYXZlYXNzaWduL2xlYXZlYXNzaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG5cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiM5ODlhYTI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveassign/leaveassign.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveassign/leaveassign.page.ts ***!
  \************************************************************************/
/*! exports provided: LeaveassignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveassignPage", function() { return LeaveassignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_leaveapplication_leaveapplication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/leaveapplication/leaveapplication.service */ "./src/app/service/leaveapplication/leaveapplication.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var LeaveassignPage = /** @class */ (function () {
    function LeaveassignPage(router, route, network, toastCtrl, leaveapplicationService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.leaveapplicationService = leaveapplicationService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
    }
    LeaveassignPage.prototype.ngOnInit = function () {
    };
    LeaveassignPage.prototype.presentToast = function () {
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
    LeaveassignPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.leaveapplicationService.getLeaveAssign(value)
            .then(function (data) {
            _this.leaveassign = data.leaveassign;
            _this.usertypes = data.usertypes;
            _this.leavecategorys = data.leavecategorys;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'leaveassign')
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
    LeaveassignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaveassign',
            template: __webpack_require__(/*! ./leaveassign.page.html */ "./src/app/pages/leaveapplication/leaveassign/leaveassign.page.html"),
            styles: [__webpack_require__(/*! ./leaveassign.page.scss */ "./src/app/pages/leaveapplication/leaveassign/leaveassign.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_leaveapplication_leaveapplication_service__WEBPACK_IMPORTED_MODULE_3__["LeaveapplicationService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], LeaveassignPage);
    return LeaveassignPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leaveapplication-leaveassign-leaveassign-module.js.map