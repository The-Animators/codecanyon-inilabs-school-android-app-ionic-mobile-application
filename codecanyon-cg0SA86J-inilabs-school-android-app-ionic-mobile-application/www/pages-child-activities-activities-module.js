(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-child-activities-activities-module"],{

/***/ "./src/app/pages/child/activities/activities.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/child/activities/activities.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function() { return ActivitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activities.page */ "./src/app/pages/child/activities/activities.page.ts");







var routes = [
    {
        path: '',
        component: _activities_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPage"]
    }
];
var ActivitiesPageModule = /** @class */ (function () {
    function ActivitiesPageModule() {
    }
    ActivitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activities_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPage"]]
        })
    ], ActivitiesPageModule);
    return ActivitiesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/child/activities/activities.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/child/activities/activities.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"activities\">\n    <ion-card class=\"card-bg\"   *ngFor=\"let activitie of activities\">\n      <ion-item class=\"p-text ion-item-css\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img  src=\"{{siteUrl}}uploads/images/{{user[activitie?.usertypeID][activitie?.userID]?.photo}}\">\n        </ion-avatar>\n        <ion-label>\n          <h4>{{user[activitie?.usertypeID][activitie?.userID]?.name}}</h4>\n          <ion-text>\n            <p>{{language?.activities_shared_publicly}}-{{activitie?.create_date | date: \"dd MMM yyyy HH:mm\"}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-list  class=\"card-bg\">\n        <ion-card-content>\n          {{activitie?.description}}\n        </ion-card-content>\n        <ion-row class=\"cardfooter\">\n          <ion-col>\n            <ion-item class=\"p-text ion-item-css\" *ngFor=\"let coments of activitiescomments[activitie?.activitiesID]\" lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <img src=\"{{siteUrl}}uploads/images/{{user[coments?.usertypeID][coments?.userID]?.photo}}\">\n              </ion-avatar>\n              <ion-label>\n                <h2 style=\"color: white\">{{user[coments?.usertypeID][coments?.userID]?.name}}</h2>\n                <ion-text>\n                  <p>{{coments?.comment}}</p>\n                </ion-text>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card>\n  </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/child/activities/activities.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/child/activities/activities.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hpbGQvYWN0aXZpdGllcy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxjaGlsZFxcYWN0aXZpdGllc1xcYWN0aXZpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFLckI7RUFDRSxvQkFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwyQ0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoaWxkL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcblxufVxuXG4uY2FyZC1jbGFzcyB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5pb24taXRlbS1jc3Mge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/child/activities/activities.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/child/activities/activities.page.ts ***!
  \***********************************************************/
/*! exports provided: ActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPage", function() { return ActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_child_child_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/child/child.service */ "./src/app/service/child/child.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(router, route, network, toastCtrl, childService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.childService = childService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    ActivitiesPage.prototype.ngOnInit = function () {
    };
    ActivitiesPage.prototype.presentToast = function () {
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
    ActivitiesPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.childService.getActivities(value)
            .then(function (data) {
            _this.activities = data.activities;
            _this.activitiescomments = data.activitiescomments;
            _this.activitiesmedia = data.activitiesmedia;
            _this.user = data.user;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'activities')
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
    ActivitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.page.html */ "./src/app/pages/child/activities/activities.page.html"),
            styles: [__webpack_require__(/*! ./activities.page.scss */ "./src/app/pages/child/activities/activities.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_child_child_service__WEBPACK_IMPORTED_MODULE_3__["ChildService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-child-activities-activities-module.js.map