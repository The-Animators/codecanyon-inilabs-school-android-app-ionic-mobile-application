(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-announcement-eventview-eventview-module"],{

/***/ "./src/app/pages/announcement/eventview/eventview.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/announcement/eventview/eventview.module.ts ***!
  \******************************************************************/
/*! exports provided: EventviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventviewPageModule", function() { return EventviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eventview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventview.page */ "./src/app/pages/announcement/eventview/eventview.page.ts");







var routes = [
    {
        path: '',
        component: _eventview_page__WEBPACK_IMPORTED_MODULE_6__["EventviewPage"]
    }
];
var EventviewPageModule = /** @class */ (function () {
    function EventviewPageModule() {
    }
    EventviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_eventview_page__WEBPACK_IMPORTED_MODULE_6__["EventviewPage"]]
        })
    ], EventviewPageModule);
    return EventviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/announcement/eventview/eventview.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/announcement/eventview/eventview.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,eventID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"event\">\n    <ion-card class=\"card-bg\" *ngIf=\"event\">\n      <ion-card-header align=\"start\" class=\"book-header\">{{event.title}}</ion-card-header>\n      <ng-container *ngIf=\"event.photo;else img_content\">\n        <img  src=\"{{siteUrl}}uploads/images/{{event.photo}}\">\n      </ng-container>\n      <ng-template #img_content>\n        <img src=\"assets/event.png\">\n      </ng-template>\n      <p align=\"center\">{{event.fdate |date: \"dd MMM yyy\"}} - {{event.tdate |date: \"dd MMM yyy\"}}</p>\n      <ion-card-content>\n        <span [innerHTML]=\"event.details\"></span>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/announcement/eventview/eventview.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/announcement/eventview/eventview.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.book-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ub3VuY2VtZW50L2V2ZW50dmlldy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhbm5vdW5jZW1lbnRcXGV2ZW50dmlld1xcZXZlbnR2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fubm91bmNlbWVudC9ldmVudHZpZXcvZXZlbnR2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5ib29rLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/announcement/eventview/eventview.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/announcement/eventview/eventview.page.ts ***!
  \****************************************************************/
/*! exports provided: EventviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventviewPage", function() { return EventviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/announcement/announcement.service */ "./src/app/service/announcement/announcement.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var EventviewPage = /** @class */ (function () {
    function EventviewPage(router, route, network, toastCtrl, announcementService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.announcementService = announcementService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.eventID = this.route.snapshot.paramMap.get('eventID');
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
        this.doRefresh(false, false, this.eventID);
    }
    EventviewPage.prototype.ngOnInit = function () {
    };
    EventviewPage.prototype.presentToast = function () {
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
    EventviewPage.prototype.doRefresh = function (event, value, eventID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.announcementService.getEventview(value, eventID)
            .then(function (data) {
            _this.event = data.event;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'event')
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
    EventviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventview',
            template: __webpack_require__(/*! ./eventview.page.html */ "./src/app/pages/announcement/eventview/eventview.page.html"),
            styles: [__webpack_require__(/*! ./eventview.page.scss */ "./src/app/pages/announcement/eventview/eventview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], EventviewPage);
    return EventviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-announcement-eventview-eventview-module.js.map