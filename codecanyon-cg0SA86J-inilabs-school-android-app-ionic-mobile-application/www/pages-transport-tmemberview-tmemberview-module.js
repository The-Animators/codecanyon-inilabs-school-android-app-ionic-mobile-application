(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transport-tmemberview-tmemberview-module"],{

/***/ "./src/app/pages/transport/tmemberview/tmemberview.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/transport/tmemberview/tmemberview.module.ts ***!
  \*******************************************************************/
/*! exports provided: TmemberviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmemberviewPageModule", function() { return TmemberviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tmemberview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tmemberview.page */ "./src/app/pages/transport/tmemberview/tmemberview.page.ts");







var routes = [
    {
        path: '',
        component: _tmemberview_page__WEBPACK_IMPORTED_MODULE_6__["TmemberviewPage"]
    }
];
var TmemberviewPageModule = /** @class */ (function () {
    function TmemberviewPageModule() {
    }
    TmemberviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tmemberview_page__WEBPACK_IMPORTED_MODULE_6__["TmemberviewPage"]]
        })
    ], TmemberviewPageModule);
    return TmemberviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/transport/tmemberview/tmemberview.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/transport/tmemberview/tmemberview.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,studentID,classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n    <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"studentprofile\">\n    <ion-card class=\"card-bg\">\n      <ion-card-header class=\"card-header1\">\n        <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n      </ion-card-header>\n      <ion-list  class=\"card-bg\">\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srregisterNO\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_registerNO}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srregisterNO}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srroll\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_roll}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srroll}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srclasses\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_classes}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srclasses}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srsection\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_section}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srsection}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.group\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_studentgroup}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentGrup?.group}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.subject\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_optionalsubject}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{optionalsubject?.subject}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.sex\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_sex}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.sex}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.dob\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_dob}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.bloodgroup\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_bloodgroup}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.bloodgroup}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.religion\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_religion}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.religion}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"lmember?.tjoindate\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_joindate}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.tjoindate | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"transport?.route\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_route_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{transport?.route}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"tmember?.tbalance\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_tfee}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{tmember?.tbalance}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.email\" lines=\"none\">\n          <ion-label>\n            <p align=\"left\">{{language?.tmember_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.email}}</ion-note>\n        </ion-item>\n      </ion-list>\n\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/transport/tmemberview/tmemberview.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/transport/tmemberview/tmemberview.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhbnNwb3J0L3RtZW1iZXJ2aWV3L0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXHRyYW5zcG9ydFxcdG1lbWJlcnZpZXdcXHRtZW1iZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsOEJBQWEsRUFBQTs7QUFHZjtFQUNFLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFuc3BvcnQvdG1lbWJlcnZpZXcvdG1lbWJlcnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW9uLWNvbnRlbnQtY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW9uLWNhcmQtY3NzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLXJvdXRpbmUtZGl2IHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5iZy1jbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XG5cbn1cblxuLmlvbi1pdGVtLWNzc3tcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnRleHQtZGl2IHtcbiAgdGV4dC1hbGlnbjpzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGZvbnQtc2l6ZToxN3B4O1xuICBjb2xvcjojMDAwMDAwO1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5yZWxhdGl2ZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbn1cbi5pbWdjYXJke1xuICBtYXJnaW46ICAxMHB4O1xufVxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuLmNhcmQtaGVhZGVyMXtcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cbi5jYXJkLWhlYWRlcjJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmltZzJ7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uaW9ubm90ZXtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4ucm93IHAge1xuICBjb2xvcjpibGFjaztcbn1cbi5pdGVte1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTg5YWEyO1xufVxuLml0ZW0tcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG59XG4udXNlcm5hbWV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaGVkZGluZ3tcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmlvbi10ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmlvbi10ZXh0LWgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/transport/tmemberview/tmemberview.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transport/tmemberview/tmemberview.page.ts ***!
  \*****************************************************************/
/*! exports provided: TmemberviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmemberviewPage", function() { return TmemberviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_transport_transport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/transport/transport.service */ "./src/app/service/transport/transport.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var TmemberviewPage = /** @class */ (function () {
    function TmemberviewPage(transportService, network, toastCtrl, langandpermissionService, route) {
        this.transportService = transportService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.studentID = this.route.snapshot.paramMap.get('studentID');
        this.classID = this.route.snapshot.paramMap.get('classID');
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
        this.doRefresh(false, false, this.studentID, this.classID);
    }
    TmemberviewPage.prototype.ngOnInit = function () {
    };
    TmemberviewPage.prototype.presentToast = function () {
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
    TmemberviewPage.prototype.doRefresh = function (event, value, studentID, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.transportService.getTmemberView(value, studentID, classID)
            .then(function (data) {
            _this.studentprofile = data.student;
            _this.tmember = data.tmember;
            _this.transport = data.transport;
            _this.usertypes = data.usertypes[_this.studentprofile.usertypeID];
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'tmember')
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
    TmemberviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tmemberview',
            template: __webpack_require__(/*! ./tmemberview.page.html */ "./src/app/pages/transport/tmemberview/tmemberview.page.html"),
            styles: [__webpack_require__(/*! ./tmemberview.page.scss */ "./src/app/pages/transport/tmemberview/tmemberview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_transport_transport_service__WEBPACK_IMPORTED_MODULE_3__["TransportService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TmemberviewPage);
    return TmemberviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-transport-tmemberview-tmemberview-module.js.map