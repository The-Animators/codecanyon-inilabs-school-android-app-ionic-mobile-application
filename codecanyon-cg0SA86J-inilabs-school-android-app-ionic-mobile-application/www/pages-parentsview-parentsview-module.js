(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parentsview-parentsview-module"],{

/***/ "./src/app/pages/parentsview/parentsview.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/parentsview/parentsview.module.ts ***!
  \*********************************************************/
/*! exports provided: ParentsviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsviewPageModule", function() { return ParentsviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parentsview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parentsview.page */ "./src/app/pages/parentsview/parentsview.page.ts");







var routes = [
    {
        path: '',
        component: _parentsview_page__WEBPACK_IMPORTED_MODULE_6__["ParentsviewPage"]
    }
];
var ParentsviewPageModule = /** @class */ (function () {
    function ParentsviewPageModule() {
    }
    ParentsviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_parentsview_page__WEBPACK_IMPORTED_MODULE_6__["ParentsviewPage"]]
        })
    ], ParentsviewPageModule);
    return ParentsviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parentsview/parentsview.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/parentsview/parentsview.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,parentsID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"parentsprofile\">\n    <img  color=\"secondary\" *ngIf=\"parentsprofile\" src=\"{{siteUrl}}uploads/images/{{parentsprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"parentsprofile\">\n    <ion-card class=\"card-bg\">\n      <ion-card-header class=\"card-header2\" (click)=\"isCollapsed(false)\" *ngIf=\"parentitems;else other_content\">\n        <span style=\"font-weight: bold\">{{language?.parentss_information}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #other_content>\n        <ion-card-header class=\"card-header2\" (click)=\"isCollapsed(true)\">\n          <span style=\"font-weight: bold\">{{language?.parentss_information}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ion-list  class=\"card-bg\" *ngIf=\"!parentitems\" >\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.name}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.father_name\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_father_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{parentsprofile?.father_name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.mother_name\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_mother_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{parentsprofile?.mother_name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.father_profession\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_father_profession}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{parentsprofile?.father_profession}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.mother_profession\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_mother_profession}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{parentsprofile?.mother_profession}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.email\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.email}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.address\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_address}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.address}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <ng-container *ngIf=\"(permission.parents_add == 'yes' && permission.parents_delete == 'yes') || (loginuser.usertypeID == parentsprofile.usertypeID && loginuser.loginuserID == parentsprofile.parentsID)\">\n        <!--Parents Information-->\n        <ion-card-header class=\"card-header\" (click)=\"isCollapsedParent(false)\" *ngIf=\"studentitems;else parent_content\">\n          <span style=\"font-weight: bold\">{{language?.parents_children}}</span>\n          <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n        </ion-card-header>\n        <ng-template #parent_content>\n          <ion-card-header class=\"card-header1\" (click)=\"isCollapsedParent(true)\">\n            <span style=\"font-weight: bold\">{{language?.parents_children}}</span>\n            <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n          </ion-card-header>\n        </ng-template>\n        <ng-container *ngIf=\"!studentitems\">\n          <ion-card  class=\"card-student-css\" *ngFor=\"let student of childrens\">\n            <div style=\"margin: 8px;\">\n              <ion-row>\n                <ion-col size=\"4\">\n                  <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n                </ion-col>\n                <ion-col size=\"8\">\n                  <div class=\"text-div\">\n                    <h3 class=\"text-h\">{{student.name}}</h3>\n                    <p class=\"text-p\">{{language?.parents_roll}}: {{student.roll}}</p>\n                    <p class=\"text-p\">{{language?.parents_classes}}: {{student.srclasses}} ({{student.srsection}})</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-item class=\"ion-item-css\" >\n                <ion-avatar class=\"avatar-img\">\n                  <img src=\"assets/boy.png\" />\n                </ion-avatar>\n                <ion-label>\n                  <h4 class=\"ion-text-h\">{{language?.parents_username}}</h4>\n                  <ion-text color=\"secondary\">\n                    <p class=\"ion-text-p\">{{student.username}}</p>\n                  </ion-text>\n                </ion-label>\n              </ion-item>\n              <ion-item class=\"ion-item-css\" >\n                <ion-avatar class=\"avatar-img\">\n                  <img src=\"assets/sms.png\" />\n                </ion-avatar>\n                <ion-label>\n                  <h4 class=\"ion-text-h\">{{language?.parents_phone}}</h4>\n                  <ion-text color=\"secondary\">\n                    <p class=\"ion-text-p\">{{student.phone}}</p>\n                  </ion-text>\n                </ion-label>\n              </ion-item>\n            </div>\n          </ion-card>\n        </ng-container>\n      </ng-container>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/parentsview/parentsview.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/parentsview/parentsview.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.student-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.card-header {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFyZW50c3ZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xccGFyZW50c3ZpZXdcXHBhcmVudHN2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUloQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBSWI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXJlbnRzdmlldy9wYXJlbnRzdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5iZy1jbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XG5cbn1cbi5jYXJkLXN0dWRlbnQtY3NzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3R1ZGVudC1pbWd7XG4gIHdpZHRoOjgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5cbi5yZWxhdGl2ZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbn1cbi5pbWdjYXJke1xuICBtYXJnaW46ICAxMHB4O1xufVxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cblxufVxuLmNhcmQtaGVhZGVyMntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtLXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cblxuLmlvbi10ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmlvbi10ZXh0LWgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/parentsview/parentsview.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/parentsview/parentsview.page.ts ***!
  \*******************************************************/
/*! exports provided: ParentsviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsviewPage", function() { return ParentsviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_parents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/parents.service */ "./src/app/service/parents.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var ParentsviewPage = /** @class */ (function () {
    function ParentsviewPage(parentsService, langandpermissionService, route, storage, network, toastCtrl) {
        this.parentsService = parentsService;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.storage = storage;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.isRefresh = true;
        this.parentitems = false;
        this.studentitems = true;
        this.parentsID = this.route.snapshot.paramMap.get('parentsID');
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
        this.doRefreshProfile(false, false, this.parentsID);
    }
    ParentsviewPage.prototype.ngOnInit = function () { };
    ParentsviewPage.prototype.isCollapsed = function (value) {
        this.studentitems = true;
        this.parentitems = value;
    };
    ParentsviewPage.prototype.isCollapsedParent = function (value) {
        this.parentitems = true;
        this.studentitems = value;
    };
    ParentsviewPage.prototype.presentToast = function () {
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
    ParentsviewPage.prototype.doRefreshProfile = function (event, value, parentsID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.parentsService.getParentsView(value, parentsID)
            .then(function (data) {
            _this.parentsprofile = data.profile;
            _this.childrens = data.childrens;
            _this.usertype = data.usertypes[_this.parentsprofile.usertypeID];
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'parents')
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
    ParentsviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parentsview',
            template: __webpack_require__(/*! ./parentsview.page.html */ "./src/app/pages/parentsview/parentsview.page.html"),
            styles: [__webpack_require__(/*! ./parentsview.page.scss */ "./src/app/pages/parentsview/parentsview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_parents_service__WEBPACK_IMPORTED_MODULE_2__["ParentsService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], ParentsviewPage);
    return ParentsviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parentsview-parentsview-module.js.map