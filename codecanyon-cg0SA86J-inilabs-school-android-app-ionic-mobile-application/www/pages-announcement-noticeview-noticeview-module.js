(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-announcement-noticeview-noticeview-module"],{

/***/ "./src/app/pages/announcement/noticeview/noticeview.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/announcement/noticeview/noticeview.module.ts ***!
  \********************************************************************/
/*! exports provided: NoticeviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeviewPageModule", function() { return NoticeviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _noticeview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticeview.page */ "./src/app/pages/announcement/noticeview/noticeview.page.ts");







var routes = [
    {
        path: '',
        component: _noticeview_page__WEBPACK_IMPORTED_MODULE_6__["NoticeviewPage"]
    }
];
var NoticeviewPageModule = /** @class */ (function () {
    function NoticeviewPageModule() {
    }
    NoticeviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_noticeview_page__WEBPACK_IMPORTED_MODULE_6__["NoticeviewPage"]]
        })
    ], NoticeviewPageModule);
    return NoticeviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/announcement/noticeview/noticeview.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/announcement/noticeview/noticeview.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,noticeID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"notice\">\n    <ion-card class=\"card-bg\" *ngIf=\"notice\">\n      <ion-card-header align=\"start\" class=\"book-header\">{{notice.title}}</ion-card-header>\n\n      <div class=\"imgcard\" align=\"center\">\n        <img  src=\"assets/notice.png\" class=\"img2\" align=\"center\">\n      </div>\n      <ion-card-content>\n        <span [innerHTML]=\"notice.notice\"></span>\n        <p>{{notice.date |date: \"dd MMM yyy\"}}</p>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/announcement/noticeview/noticeview.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/announcement/noticeview/noticeview.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.book-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px; }\n\n.imgcard {\n  margin: 10px; }\n\n.img2 {\n  width: 60%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ub3VuY2VtZW50L25vdGljZXZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYW5ub3VuY2VtZW50XFxub3RpY2V2aWV3XFxub3RpY2V2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxZQUFhLEVBQUE7O0FBR2Y7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5ub3VuY2VtZW50L25vdGljZXZpZXcvbm90aWNldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYm9vay1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbi5pbWdjYXJke1xuICBtYXJnaW46ICAxMHB4O1xufVxuXG4uaW1nMntcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/announcement/noticeview/noticeview.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/announcement/noticeview/noticeview.page.ts ***!
  \******************************************************************/
/*! exports provided: NoticeviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeviewPage", function() { return NoticeviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/announcement/announcement.service */ "./src/app/service/announcement/announcement.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var NoticeviewPage = /** @class */ (function () {
    function NoticeviewPage(router, route, network, toastCtrl, announcementService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.announcementService = announcementService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.noticeID = this.route.snapshot.paramMap.get('noticeID');
        this.doRefresh(false, false, this.noticeID);
    }
    NoticeviewPage.prototype.ngOnInit = function () {
    };
    NoticeviewPage.prototype.presentToast = function () {
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
    NoticeviewPage.prototype.doRefresh = function (event, value, noticeID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.announcementService.getNoticeview(value, noticeID)
            .then(function (data) {
            _this.notice = data.notice;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'notice')
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
    NoticeviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-noticeview',
            template: __webpack_require__(/*! ./noticeview.page.html */ "./src/app/pages/announcement/noticeview/noticeview.page.html"),
            styles: [__webpack_require__(/*! ./noticeview.page.scss */ "./src/app/pages/announcement/noticeview/noticeview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], NoticeviewPage);
    return NoticeviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-announcement-noticeview-noticeview-module.js.map