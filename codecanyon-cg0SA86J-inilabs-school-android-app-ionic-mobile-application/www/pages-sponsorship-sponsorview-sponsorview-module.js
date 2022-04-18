(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sponsorship-sponsorview-sponsorview-module"],{

/***/ "./src/app/pages/sponsorship/sponsorview/sponsorview.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsorview/sponsorview.module.ts ***!
  \*********************************************************************/
/*! exports provided: SponsorviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorviewPageModule", function() { return SponsorviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sponsorview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsorview.page */ "./src/app/pages/sponsorship/sponsorview/sponsorview.page.ts");







var routes = [
    {
        path: '',
        component: _sponsorview_page__WEBPACK_IMPORTED_MODULE_6__["SponsorviewPage"]
    }
];
var SponsorviewPageModule = /** @class */ (function () {
    function SponsorviewPageModule() {
    }
    SponsorviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sponsorview_page__WEBPACK_IMPORTED_MODULE_6__["SponsorviewPage"]]
        })
    ], SponsorviewPageModule);
    return SponsorviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sponsorship/sponsorview/sponsorview.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsorview/sponsorview.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,sponsorID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"sponsor\">\n    <img  color=\"secondary\" *ngIf=\"sponsor\" src=\"{{siteUrl}}uploads/images/{{sponsor?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"sponsor\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-card-header class=\"card-header1\">\n          <span style=\"font-weight: bold\">{{language?.sponsor_sponsor}}</span>\n        </ion-card-header>\n        <ion-list  class=\"card-bg\">\n          <ion-item class=\"item\" *ngIf=\"sponsor?.name\">\n            <ion-label>\n              <p align=\"left\">{{language?.sponsor_name}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.name}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\">\n            <ion-label>\n              <p align=\"left\">Type</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\" *ngIf=\"sponsor?.type == 'individual';else type\">Individual</ion-note>\n            <ng-template #type>\n              <ion-note slot=\"end\" class=\"ionnote\">Organisation</ion-note>\n            </ng-template>\n          </ion-item>\n          <ion-item class=\"item\">\n            <ion-label>\n              <p align=\"left\">{{language?.sponsor_phone}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.phone}}</ion-note>\n          </ion-item>\n          <ng-container *ngIf=\"sponsor?.type == 'individual';else org\">\n            <ion-item class=\"item\" >\n              <ion-label>\n                <p align=\"left\">{{language?.sponsor_title}}</p>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ionnote\">{{titles[sponsor?.title]}}</ion-note>\n            </ion-item>\n            <ion-item class=\"item\">\n              <ion-label>\n                <p align=\"left\">{{language?.sponsor_person_name}}</p>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.name}}</ion-note>\n            </ion-item>\n            <ion-item class=\"item\">\n              <ion-label>\n                <p align=\"left\">{{language?.sponsor_organisation_name}}</p>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.organisation_name}}</ion-note>\n            </ion-item>\n          </ng-container>\n\n          <ng-template #org>\n            <ion-item class=\"item\">\n              <ion-label>\n                <p align=\"left\">{{language?.sponsor_sponsor_organisation_name}}</p>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.name}}</ion-note>\n            </ion-item>\n            <ion-item class=\"item\">\n              <ion-label>\n                <p align=\"left\">{{language?.sponsor_title}}</p>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ionnote\">{{titles[sponsor?.title]}}</ion-note>\n            </ion-item>\n            <ion-item class=\"item\">\n              <ion-label>\n                <p align=\"left\">{{language?.sponsor_contact_person_name}}</p>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.organisation_name}}</ion-note>\n            </ion-item>\n          </ng-template>\n\n          <ion-item class=\"item\">\n            <ion-label>\n              <p align=\"left\">{{language?.sponsor_email}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.email}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\">\n            <ion-label>\n              <p align=\"left\">{{language?.sponsor_country}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{allcountry[sponsor?.country]}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\">\n            <ion-label>\n              <p align=\"left\">{{language?.sponsor_create_date}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{sponsor?.create_date | date: \"dd MMM yyyy\"}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sponsorship/sponsorview/sponsorview.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsorview/sponsorview.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BvbnNvcnNoaXAvc3BvbnNvcnZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcc3BvbnNvcnNoaXBcXHNwb25zb3J2aWV3XFxzcG9uc29ydmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxvQ0FBb0MsRUFBQTs7QUFJdEM7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQWEsRUFBQTs7QUFFZjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BvbnNvcnNoaXAvc3BvbnNvcnZpZXcvc3BvbnNvcnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pb24tY29udGVudC1jc3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGl2LW92ZXJmbG93LWNzcyB7XHJcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XHJcbn1cclxuLmRpdi1tYXJnaW4tY3NzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5pb24tY2FyZC1zcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW9uLWljb24tY3NzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmlvbi1jYXJkLWNzcyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNhcmQtcm91dGluZS1kaXYge1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4uYmctY2xhc3N7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGl2LWJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5pb24taXRlbS1jc3N7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhci1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4udGV4dC1kaXYge1xyXG4gIHRleHQtYWxpZ246c3RhcnQ7XHJcbn1cclxuXHJcbi50ZXh0LWgge1xyXG4gIGZvbnQtc2l6ZToxN3B4O1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbi50ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBsaW5lLWhlaWdodDogMHB4O1xyXG59XHJcblxyXG4ucmVsYXRpdmUtY2FyZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG59XHJcbi5pbWdjYXJke1xyXG4gIG1hcmdpbjogIDEwcHg7XHJcbn1cclxuLmNhcmQtYmd7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbn1cclxuLmNhcmQtaGVhZGVyMXtcclxuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5jYXJkLWhlYWRlcjJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4uaW1nMntcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuLmlvbm5vdGV7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucm93IHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4ucm93IHAge1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pdGVte1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XHJcbn1cclxuLml0ZW0tcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcbi51c2VybmFtZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5oZWRkaW5ne1xyXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uaW9uLXRleHQtcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5pb24tdGV4dC1oIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/sponsorship/sponsorview/sponsorview.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsorview/sponsorview.page.ts ***!
  \*******************************************************************/
/*! exports provided: SponsorviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorviewPage", function() { return SponsorviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_sponsorship_sponsorship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/sponsorship/sponsorship.service */ "./src/app/service/sponsorship/sponsorship.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var SponsorviewPage = /** @class */ (function () {
    function SponsorviewPage(sponsorshipService, network, toastCtrl, langandpermissionService, route) {
        this.sponsorshipService = sponsorshipService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.sponsorID = this.route.snapshot.paramMap.get('sponsorID');
        this.doRefresh(false, false, this.sponsorID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    SponsorviewPage.prototype.ngOnInit = function () {
    };
    SponsorviewPage.prototype.presentToast = function () {
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
    SponsorviewPage.prototype.doRefresh = function (event, value, sponsorID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.sponsorshipService.getSponsorView(value, sponsorID)
            .then(function (data) {
            _this.allcountry = data.allcountry;
            _this.sponsor = data.sponsor;
            _this.titles = data.titles;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'sponsor')
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
    SponsorviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sponsorview',
            template: __webpack_require__(/*! ./sponsorview.page.html */ "./src/app/pages/sponsorship/sponsorview/sponsorview.page.html"),
            styles: [__webpack_require__(/*! ./sponsorview.page.scss */ "./src/app/pages/sponsorship/sponsorview/sponsorview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_sponsorship_sponsorship_service__WEBPACK_IMPORTED_MODULE_2__["SponsorshipService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], SponsorviewPage);
    return SponsorviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sponsorship-sponsorview-sponsorview-module.js.map