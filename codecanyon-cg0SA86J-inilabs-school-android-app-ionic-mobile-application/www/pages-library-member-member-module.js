(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-library-member-member-module"],{

/***/ "./src/app/pages/library/member/member.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/library/member/member.module.ts ***!
  \*******************************************************/
/*! exports provided: MemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPageModule", function() { return MemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _member_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member.page */ "./src/app/pages/library/member/member.page.ts");







var routes = [
    {
        path: '',
        component: _member_page__WEBPACK_IMPORTED_MODULE_6__["MemberPage"]
    }
];
var MemberPageModule = /** @class */ (function () {
    function MemberPageModule() {
    }
    MemberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_member_page__WEBPACK_IMPORTED_MODULE_6__["MemberPage"]]
        })
    ], MemberPageModule);
    return MemberPageModule;
}());



/***/ }),

/***/ "./src/app/pages/library/member/member.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/library/member/member.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n  <ion-toolbar color=\"light\" *ngIf=\"classes\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.lmember_classes}}</ion-label>\n          <ion-select placeholder=\"{{language?.lmember_select_class}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  </ng-container>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\"  *ngIf=\"!myProfile\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true, classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"students\">\n    <ion-card  class=\"card-student-css\" *ngFor=\"let student of students\" routerLink=\"/memberview/{{student.studentID}}/{{student.classesID}}\" >\n      <div style=\"margin: 8px;\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h3 class=\"text-h\">{{student.name}}</h3>\n              <p class=\"text-p\">{{language?.lmember_roll}}: {{student.roll}}</p>\n              <p class=\"text-p\">{{language?.lmember_classes}}: {{student.srclasses}} ({{student.srsection}})</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/sms.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.lmember_phone}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{student.phone}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n<ion-content padding *ngIf=\"myProfile\" class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n    <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"studentprofile\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <ion-card-header class=\"card-header1\">\n          <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n        </ion-card-header>\n        <ion-list  class=\"card-bg\">\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.name\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_name}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.name}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srregisterNO\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_registerNO}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srregisterNO}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srroll\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_roll}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srroll}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srclasses\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_classes}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srclasses}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.srsection\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_section}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srsection}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.group\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_studentgroup}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentGrup?.group}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.subject\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_optionalsubject}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{optionalsubject?.subject}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.sex\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_sex}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.sex}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.dob\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_dob}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.bloodgroup\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_bloodgroup}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.bloodgroup}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.religion\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_religion}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.religion}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"lmember?.ljoindate\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_joindate}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.ljoindate | date: \"dd MMM yyyy\"}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"lmember?.lID\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_lID}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.lID}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"lmember?.lbalance\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_libraryFee}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{lmember?.lbalance}}</ion-note>\n          </ion-item>\n\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.phone\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_phone}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.phone}}</ion-note>\n          </ion-item>\n          <ion-item class=\"item\" *ngIf=\"studentprofile?.email\" lines=\"none\">\n            <ion-label>\n              <p align=\"left\">{{language?.lmember_email}}</p>\n            </ion-label>\n            <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.email}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/library/member/member.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/library/member/member.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlicmFyeS9tZW1iZXIvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcbGlicmFyeVxcbWVtYmVyXFxtZW1iZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxvQ0FBb0MsRUFBQTs7QUFJdEM7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQWEsRUFBQTs7QUFFZjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlicmFyeS9tZW1iZXIvbWVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0dWRlbnQtaW1ne1xuICB3aWR0aDo4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jYXJkLXN0dWRlbnQtY3NzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYmctY2xhc3N7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1iZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMTk2MSAhaW1wb3J0YW50O1xuXG59XG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246c3RhcnQ7XG59XG5cbi50ZXh0LWgge1xuICBmb250LXNpemU6MTdweDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucmVsYXRpdmUtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG59XG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtLXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pb24tdGV4dC1oIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/library/member/member.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/library/member/member.page.ts ***!
  \*****************************************************/
/*! exports provided: MemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPage", function() { return MemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_library_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/library/library.service */ "./src/app/service/library/library.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");










var MemberPage = /** @class */ (function () {
    function MemberPage(router, route, libraryService, network, toastCtrl, loadingCtrl, alertCtrl, menuCtrl, storage, langandpermissionService, classService) {
        this.router = router;
        this.route = route;
        this.libraryService = libraryService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.langandpermissionService = langandpermissionService;
        this.classService = classService;
        this.myProfile = false;
        this.selectedClass = '';
        this.isRefresh = true;
        this.Profile();
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_9__["fileUrl"];
        this.getLmebear();
    }
    MemberPage.prototype.ngOnInit = function () { };
    MemberPage.prototype.presentToast = function () {
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
    MemberPage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    MemberPage.prototype.getLmemberView = function (studentID, classID) {
        this.router.navigate(['/memberview', studentID, classID]);
    };
    MemberPage.prototype.doRefresh = function (event, value, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.libraryService.getLmember(value, classID, null, null)
                .then(function (data) {
                _this.students = data.students;
            });
            this.langandpermissionService.getLangandPermissionCall(value, 'lmember')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    MemberPage.prototype.selectedClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.classID = this.selectedClass;
            if (this.classID) {
                this.libraryService.getLmember(false, this.classID, null, null)
                    .then(function (data) {
                    _this.students = data.students;
                });
                this.langandpermissionService.getLangandPermissionCall(false, 'lmember')
                    .then(function (data) {
                    _this.permission = data.permission;
                    _this.language = data.language;
                });
            }
        }
    };
    MemberPage.prototype.getLmebear = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.langandpermissionService.getLangandPermissionCall(false, 'lmember')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
                if (_this.loginuser.usertypeID == 3) {
                    _this.libraryService.getLmember(false, null, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                        .then(function (data) {
                        if (_this.permission.lmember_view == 'no') {
                            _this.myProfile = true;
                        }
                        if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                            _this.studentprofile = data.student;
                            _this.lmember = data.lmember;
                            _this.usertypes = data.usertypes[_this.studentprofile.usertypeID];
                        }
                        else {
                            _this.classes = data.classes;
                            _this.students = data.students;
                        }
                    });
                }
                else {
                    _this.libraryService.getLmember(false, null, null, null)
                        .then(function (data) {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    });
                }
            });
        }
    };
    MemberPage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.langandpermissionService.getLangandPermissionCall(value, 'lmember')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
                if (_this.loginuser.usertypeID == 3) {
                    _this.libraryService.getLmember(value, null, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                        .then(function (data) {
                        if (_this.permission.lmember_view == 'no') {
                            _this.myProfile = true;
                        }
                        if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                            _this.studentprofile = data.student;
                            _this.lmember = data.lmember;
                            _this.usertypes = data.usertypes[_this.studentprofile.usertypeID];
                        }
                        else {
                            _this.classes = data.classes;
                            _this.students = data.students;
                        }
                    });
                }
                else {
                    _this.libraryService.getLmember(value, null, null, null)
                        .then(function (data) {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    });
                }
            });
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    MemberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.page.html */ "./src/app/pages/library/member/member.page.html"),
            styles: [__webpack_require__(/*! ./member.page.scss */ "./src/app/pages/library/member/member.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_library_library_service__WEBPACK_IMPORTED_MODULE_4__["LibraryService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]])
    ], MemberPage);
    return MemberPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-library-member-member-module.js.map