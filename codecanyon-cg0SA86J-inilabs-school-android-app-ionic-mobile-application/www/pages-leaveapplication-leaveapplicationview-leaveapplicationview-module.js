(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveapplication-leaveapplicationview-leaveapplicationview-module"],{

/***/ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.module.ts ***!
  \********************************************************************************************/
/*! exports provided: LeaveapplicationviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapplicationviewPageModule", function() { return LeaveapplicationviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaveapplicationview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveapplicationview.page */ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.ts");







var routes = [
    {
        path: '',
        component: _leaveapplicationview_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapplicationviewPage"]
    }
];
var LeaveapplicationviewPageModule = /** @class */ (function () {
    function LeaveapplicationviewPageModule() {
    }
    LeaveapplicationviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leaveapplicationview_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapplicationviewPage"]]
        })
    ], LeaveapplicationviewPageModule);
    return LeaveapplicationviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,leaveapplicationID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"leaveapply && applicant\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ng-container *ngIf=\"applicant.photo\">\n              <img class=\"notice-img\" src=\"{{siteUrl}}uploads/images/{{applicant.photo}}\">\n            </ng-container>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h4 class=\"text-color-h\"> {{applicant?.name}}</h4>\n              <p class=\"text-color-p\"> {{applicant?.usertype}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.leaveapplication_dob}}</h4>\n            <ion-text>\n              <p>{{applicant?.dob | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/sms.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.leaveapplication_phone}}</h4>\n            <ion-text>\n              <p>{{applicant?.phone}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/leave.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{leaveapply?.category}}</h4>\n            <ion-text>\n              <p *ngIf=\"leaveapply?.status == 1\">{{language?.leaveapplication_status_approved}}</p>\n              <p *ngIf=\"leaveapply?.status == 0\">{{language?.leaveapplication_status_declined}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <p>{{language?.leaveapplication_date}}-{{leaveapply.apply_date | date:\"dd MMM yyyy HH:mm:ss\" }}</p>\n          <span  [innerHTML]=\"leaveapply?.reason\"></span>\n        </ion-card-content>\n        <ng-container *ngIf=\"daysArray\">\n          <ion-item class=\"p-text ion-item-css\">\n            <ion-label>\n              <h4>{{language?.leaveapplication_schedule}}</h4>\n              <ion-text>\n                <p>{{daysArray?.fromdate | date:\"dd MMM yyyy\" }} - {{daysArray?.todate | date:\"dd MMM yyyy\" }}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"p-text ion-item-css\">\n            <ion-label>\n              <h4>{{language?.leaveapplication_availableleavedays}} ({{daysArray?.totaldayCount - daysArray?.leavedayCount}})</h4>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"p-text ion-item-css\">\n            <ion-label>\n              <h4>{{language?.leaveapplication_leavedays}} ({{daysArray?.leavedayCount}})</h4>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"p-text ion-item-css\">\n            <ion-label>\n              <h4>{{language?.leaveapplication_holidays}} ({{daysArray?.holidayCount}})</h4>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"p-text ion-item-css\">\n            <ion-label>\n              <h4>{{language?.leaveapplication_weekenddays}} ({{daysArray?.weekenddayCount}})</h4>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"p-text ion-item-css\">\n            <ion-label>\n              <h4>{{language?.leaveapplication_totaldays}} ({{daysArray?.totaldayCount}})</h4>\n            </ion-label>\n          </ion-item>\n        </ng-container>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.notice-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhdmVhcHBsaWNhdGlvbi9sZWF2ZWFwcGxpY2F0aW9udmlldy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxsZWF2ZWFwcGxpY2F0aW9uXFxsZWF2ZWFwcGxpY2F0aW9udmlld1xcbGVhdmVhcHBsaWNhdGlvbnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXZlYXBwbGljYXRpb24vbGVhdmVhcHBsaWNhdGlvbnZpZXcvbGVhdmVhcHBsaWNhdGlvbnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59XG5cblxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6Izk4OWFhMjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuLmNhcmQtY2xhc3Mge1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLm5vdGljZS1pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.ts ***!
  \******************************************************************************************/
/*! exports provided: LeaveapplicationviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapplicationviewPage", function() { return LeaveapplicationviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_leaveapplication_leaveapplication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/leaveapplication/leaveapplication.service */ "./src/app/service/leaveapplication/leaveapplication.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var LeaveapplicationviewPage = /** @class */ (function () {
    function LeaveapplicationviewPage(router, route, network, toastCtrl, leaveapplicationService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.leaveapplicationService = leaveapplicationService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.leaveapplicationID = this.route.snapshot.paramMap.get('applicationID');
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
        this.doRefresh(false, false, this.leaveapplicationID);
    }
    LeaveapplicationviewPage.prototype.ngOnInit = function () {
    };
    LeaveapplicationviewPage.prototype.presentToast = function () {
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
    LeaveapplicationviewPage.prototype.doRefresh = function (event, value, leaveapplicationID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.leaveapplicationService.getLeaveApplicationView(value, leaveapplicationID)
            .then(function (data) {
            _this.leaveapply = data.leaveapplication;
            _this.applicant = data.applicant;
            _this.usertypes = data.usertypes;
            _this.daysArray = data.daysArray;
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
    LeaveapplicationviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaveapplicationview',
            template: __webpack_require__(/*! ./leaveapplicationview.page.html */ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.html"),
            styles: [__webpack_require__(/*! ./leaveapplicationview.page.scss */ "./src/app/pages/leaveapplication/leaveapplicationview/leaveapplicationview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_leaveapplication_leaveapplication_service__WEBPACK_IMPORTED_MODULE_3__["LeaveapplicationService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], LeaveapplicationviewPage);
    return LeaveapplicationviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leaveapplication-leaveapplicationview-leaveapplicationview-module.js.map