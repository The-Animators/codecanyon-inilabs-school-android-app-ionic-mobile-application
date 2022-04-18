(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-library-memberview-memberview-module"],{

/***/ "./src/app/pages/library/memberview/memberview.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/library/memberview/memberview.module.ts ***!
  \***************************************************************/
/*! exports provided: MemberviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberviewPageModule", function() { return MemberviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _memberview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memberview.page */ "./src/app/pages/library/memberview/memberview.page.ts");







var routes = [
    {
        path: '',
        component: _memberview_page__WEBPACK_IMPORTED_MODULE_6__["MemberviewPage"]
    }
];
var MemberviewPageModule = /** @class */ (function () {
    function MemberviewPageModule() {
    }
    MemberviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_memberview_page__WEBPACK_IMPORTED_MODULE_6__["MemberviewPage"]]
        })
    ], MemberviewPageModule);
    return MemberviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/library/memberview/memberview.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/library/memberview/memberview.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,studentID,classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n    <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"studentprofile\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-card-header class=\"card-header1\">\n          <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n        </ion-card-header>\n        <ion-list  class=\"card-bg\">\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.name\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_name}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.name}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srregisterNO\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_registerNO}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srregisterNO}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srroll\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_roll}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srroll}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srclasses\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_classes}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srclasses}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srsection\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_section}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srsection}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.group\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_studentgroup}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentGrup?.group}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.subject\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_optionalsubject}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{optionalsubject?.subject}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.sex\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_sex}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.sex}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.dob\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_dob}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.bloodgroup\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_bloodgroup}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.bloodgroup}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.religion\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_religion}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.religion}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"lmember?.ljoindate\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_joindate}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.ljoindate | date: \"dd MMM yyyy\"}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"lmember?.lID\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_lID}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.lID}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"lmember?.lbalance\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_libraryFee}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.lbalance}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.phone\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_phone}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.phone}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.email\" lines=\"none\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_email}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.email}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/library/memberview/memberview.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/library/memberview/memberview.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlicmFyeS9tZW1iZXJ2aWV3L0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXGxpYnJhcnlcXG1lbWJlcnZpZXdcXG1lbWJlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSw4QkFBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpYnJhcnkvbWVtYmVydmlldy9tZW1iZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1jb250ZW50LWNzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmlvbi1jYXJkLWNzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1yb3V0aW5lLWRpdiB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4uYmctY2xhc3N7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1iZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMTk2MSAhaW1wb3J0YW50O1xuXG59XG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246c3RhcnQ7XG59XG5cbi50ZXh0LWgge1xuICBmb250LXNpemU6MTdweDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4ucmVsYXRpdmUtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG59XG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtLXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pb24tdGV4dC1oIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/library/memberview/memberview.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/library/memberview/memberview.page.ts ***!
  \*************************************************************/
/*! exports provided: MemberviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberviewPage", function() { return MemberviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_library_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/library/library.service */ "./src/app/service/library/library.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var MemberviewPage = /** @class */ (function () {
    function MemberviewPage(libraryService, network, toastCtrl, langandpermissionService, route) {
        this.libraryService = libraryService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.studentID = this.route.snapshot.paramMap.get('studentID');
        this.classID = this.route.snapshot.paramMap.get('classID');
        this.doRefresh(false, false, this.studentID, this.classID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    MemberviewPage.prototype.ngOnInit = function () {
    };
    MemberviewPage.prototype.presentToast = function () {
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
    MemberviewPage.prototype.doRefresh = function (event, value, studentID, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.libraryService.getLmemberView(value, studentID, classID)
            .then(function (data) {
            _this.studentprofile = data.student;
            _this.lmember = data.lmember;
            _this.usertypes = data.usertypes[_this.studentprofile.usertypeID];
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'lmember')
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
    MemberviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-memberview',
            template: __webpack_require__(/*! ./memberview.page.html */ "./src/app/pages/library/memberview/memberview.page.html"),
            styles: [__webpack_require__(/*! ./memberview.page.scss */ "./src/app/pages/library/memberview/memberview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_library_library_service__WEBPACK_IMPORTED_MODULE_3__["LibraryService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MemberviewPage);
    return MemberviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-library-memberview-memberview-module.js.map