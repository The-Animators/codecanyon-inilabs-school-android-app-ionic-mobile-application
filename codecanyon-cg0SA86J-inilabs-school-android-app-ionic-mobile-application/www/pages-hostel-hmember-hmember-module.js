(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hostel-hmember-hmember-module"],{

/***/ "./src/app/pages/hostel/hmember/hmember.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/hostel/hmember/hmember.module.ts ***!
  \********************************************************/
/*! exports provided: HmemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmemberPageModule", function() { return HmemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hmember_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hmember.page */ "./src/app/pages/hostel/hmember/hmember.page.ts");







var routes = [
    {
        path: '',
        component: _hmember_page__WEBPACK_IMPORTED_MODULE_6__["HmemberPage"]
    }
];
var HmemberPageModule = /** @class */ (function () {
    function HmemberPageModule() {
    }
    HmemberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hmember_page__WEBPACK_IMPORTED_MODULE_6__["HmemberPage"]]
        })
    ], HmemberPageModule);
    return HmemberPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hostel/hmember/hmember.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/hostel/hmember/hmember.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n    <ion-toolbar color=\"light\" *ngIf=\"classes\">\n      <ion-row>\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>{{language?.hmember_classes}}</ion-label>\n            <ion-select placeholder=\"{{language?.hmember_select_class}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n              <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ng-container>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\"  *ngIf=\"!myProfile\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true, classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"students\">\n    <ion-card  class=\"card-student-css\" *ngFor=\"let student of students\" routerLink=\"/hmemberview/{{student.studentID}}/{{student.classesID}}\" >\n      <div style=\"margin: 8px;\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h3 class=\"text-h\">{{student.name}}</h3>\n              <p class=\"text-p\">{{language?.hmember_roll}}: {{student.roll}}</p>\n              <p class=\"text-p\">{{language?.hmember_classes}}: {{student.srclasses}} ({{student.srsection}})</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/sms.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.hmember_phone}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{student.phone}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n<ion-content  *ngIf=\"myProfile\" class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,studentID,classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n    <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"studentprofile\">\n    <ion-card class=\"card-bg\">\n      <ion-card-header class=\"card-header1\">\n        <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n      </ion-card-header>\n      <ion-list  class=\"card-bg\">\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srregisterNO\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_registerNO}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srregisterNO}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srroll\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_roll}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srroll}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srclasses\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_classes}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srclasses}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.srsection\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_section}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srsection}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.group\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_studentgroup}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentGrup?.group}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.subject\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_optionalsubject}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{optionalsubject?.subject}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.sex\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_sex}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.sex}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.dob\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_dob}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.bloodgroup\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_bloodgroup}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.bloodgroup}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.religion\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_religion}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.religion}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"hmember?.hjoindate\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_joindate}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{hmember?.hjoindate | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"hostel?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_hname}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{hostel?.name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"transport?.htype\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_htype}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{transport?.htype}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"category?.class_type\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_class_type}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{category?.class_type}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"hmember?.hbalance\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_tfee}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{hmember?.hbalance}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"hostel?.address\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_hostel_address}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{hostel?.address}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"studentprofile?.email\" lines=\"none\">\n          <ion-label>\n            <p align=\"left\">{{language?.hmember_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.email}}</ion-note>\n        </ion-item>\n      </ion-list>\n\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/hostel/hmember/hmember.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/hostel/hmember/hmember.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9zdGVsL2htZW1iZXIvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcaG9zdGVsXFxobWVtYmVyXFxobWVtYmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSw4QkFBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvc3RlbC9obWVtYmVyL2htZW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5zdHVkZW50LWltZ3tcbiAgd2lkdGg6ODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2FyZC1zdHVkZW50LWNzcyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuXG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcblxufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xufVxuLmltZ2NhcmR7XG4gIG1hcmdpbjogIDEwcHg7XG59XG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4uY2FyZC1oZWFkZXIxe1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLmNhcmQtaGVhZGVyMntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uaW1nMntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5pb25ub3Rle1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5yb3cgcCB7XG4gIGNvbG9yOmJsYWNrO1xufVxuLml0ZW17XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XG59XG4uaXRlbS1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VybmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oZWRkaW5ne1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hostel/hmember/hmember.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/hostel/hmember/hmember.page.ts ***!
  \******************************************************/
/*! exports provided: HmemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmemberPage", function() { return HmemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_hostel_hostel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/hostel/hostel.service */ "./src/app/service/hostel/hostel.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");










var HmemberPage = /** @class */ (function () {
    function HmemberPage(router, route, hostelService, network, toastCtrl, loadingCtrl, alertCtrl, menuCtrl, storage, langandpermissionService, classService) {
        this.router = router;
        this.route = route;
        this.hostelService = hostelService;
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
        this.getHmebear();
    }
    HmemberPage.prototype.ngOnInit = function () { };
    HmemberPage.prototype.presentToast = function () {
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
    HmemberPage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    HmemberPage.prototype.getHmemberView = function (studentID, classID) {
        this.router.navigate(['/hmemberview', studentID, classID]);
    };
    HmemberPage.prototype.doRefresh = function (event, value, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.hostelService.getHmember(value, classID, null, null)
                .then(function (data) {
                _this.students = data.students;
            });
            this.langandpermissionService.getLangandPermissionCall(value, 'hmember')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    HmemberPage.prototype.selectedClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.classID = this.selectedClass;
            if (this.classID) {
                this.hostelService.getHmember(false, this.classID, null, null)
                    .then(function (data) {
                    _this.students = data.students;
                });
                this.langandpermissionService.getLangandPermissionCall(false, 'hmember')
                    .then(function (data) {
                    _this.permission = data.permission;
                    _this.language = data.language;
                });
            }
        }
    };
    HmemberPage.prototype.getHmebear = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.langandpermissionService.getLangandPermissionCall(false, 'hmember')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
                if (_this.loginuser.usertypeID == 3) {
                    _this.hostelService.getHmember(false, null, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                        .then(function (data) {
                        if (_this.permission.hmember_view == 'no') {
                            _this.myProfile = true;
                        }
                        if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                            _this.studentprofile = data.student;
                            _this.hmember = data.hmember;
                            _this.hostel = data.hostel;
                            _this.category = data.category;
                            _this.usertypes = data.usertypes[_this.studentprofile.usertypeID];
                        }
                        else {
                            _this.classes = data.classes;
                            _this.students = data.students;
                        }
                    });
                }
                else {
                    _this.hostelService.getHmember(false, null, null, null)
                        .then(function (data) {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    });
                }
            });
        }
    };
    HmemberPage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.langandpermissionService.getLangandPermissionCall(value, 'hmember')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
                if (_this.loginuser.usertypeID == 3) {
                    _this.hostelService.getHmember(value, null, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                        .then(function (data) {
                        if (_this.permission.hmember_view == 'no') {
                            _this.myProfile = true;
                        }
                        if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                            _this.studentprofile = data.student;
                            _this.hmember = data.hmember;
                            _this.hostel = data.hostel;
                            _this.category = data.category;
                            _this.usertypes = data.usertypes[_this.studentprofile.usertypeID];
                        }
                        else {
                            _this.classes = data.classes;
                            _this.students = data.students;
                        }
                    });
                }
                else {
                    _this.hostelService.getHmember(value, null, null, null)
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
    HmemberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmember',
            template: __webpack_require__(/*! ./hmember.page.html */ "./src/app/pages/hostel/hmember/hmember.page.html"),
            styles: [__webpack_require__(/*! ./hmember.page.scss */ "./src/app/pages/hostel/hmember/hmember.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_hostel_hostel_service__WEBPACK_IMPORTED_MODULE_4__["HostelService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]])
    ], HmemberPage);
    return HmemberPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-hostel-hmember-hmember-module.js.map