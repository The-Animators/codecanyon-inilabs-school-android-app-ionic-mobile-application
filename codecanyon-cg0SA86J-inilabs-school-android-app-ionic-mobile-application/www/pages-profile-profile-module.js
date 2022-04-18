(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"profile\">\n    <img  color=\"secondary\" *ngIf=\"profile\" src=\"{{siteUrl}}uploads/images/{{profile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"profile\">\n    <ion-card class=\"card-bg2\">\n      <ion-card-header class=\"card-header1\">\n        <span class=\"ion-card-span\">{{language?.personal_information}}</span>\n      </ion-card-header>\n      <ion-list  class=\"card-bg\">\n        <ion-item class=\"item-p\" *ngIf=\"profile?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.srregisterNO\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_registerNO}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.srregisterNO}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.srroll\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_roll}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.srroll}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.srclasses\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_classes}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.srclasses}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.srsection\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_section}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.srsection}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item-p\" *ngIf=\"profile?.sex\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_sex}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.sex}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.dob\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_dob}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.jod\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_jod}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.jod | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.bloodgroup\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_bloodgroup}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.bloodgroup}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.religion\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_religion}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.religion}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"profile?.email\">\n          <ion-label>\n            <p align=\"left\">{{language?.profile_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{profile?.email}}</ion-note>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 5px;\n  border-radius: 5px; }\n\n.ion-card-css-attend {\n  border-radius: 0px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.relative-card {\n  position: relative;\n  bottom: 45px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg2 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.p-text {\n  font-size: 13px;\n  color: #ffffff; }\n\n.h-text {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header-attend {\n  --background:#1D223a;\n  color: #ffffff; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background:#1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 12px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.p-text-p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text-h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #ffff !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.card-routine .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  font-weight: bold;\n  color: #000000;\n  margin: 5px; }\n\n.card-routine .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.avatar-img {\n  margin-right: 10px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.table-bordered {\n  border: 1px solid #E2E7EB; }\n\n.table-bordered > thead > tr > th {\n  border-bottom-width: 2px;\n  color: #1A2229;\n  font-weight: 300; }\n\n.table-bordered > tbody > tr > td {\n  color: #707070; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd; }\n\n.table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #F0F3F5; }\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.bg-sky {\n  background-color: #5fbfce; }\n\n.text-center {\n  text-align: center; }\n\n.text-black {\n  color: #222222 !important; }\n\n.text-bold, .text-bold.table td, .text-bold.table th {\n  font-weight: 700; }\n\n.text-red {\n  color: #f56954 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsOEJBQWEsRUFBQTs7QUFHZjtFQUNFLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsOEJBQWEsRUFBQTs7QUFHZjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFLaEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0Usb0JBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFVLEVBQUE7O0FBRVo7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osV0FBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUdqQjs7Ozs7O0VBTUUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QixFQUFBOztBQUUvQjs7Ozs7O0VBTUUsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pb24tY29udGVudC1jc3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGl2LW92ZXJmbG93LWNzcyB7XHJcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XHJcbn1cclxuLmRpdi1tYXJnaW4tY3NzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5pb24tY2FyZC1zcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW9uLWljb24tY3NzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmlvbi1jYXJkLWNzcyB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pb24tY2FyZC1jc3MtYXR0ZW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXJvdXRpbmUtZGl2IHtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLmJnLWNsYXNze1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdi1iZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucmVsYXRpdmUtY2FyZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiA0NXB4O1xyXG59XHJcbi5pbWdjYXJke1xyXG4gIG1hcmdpbjogIDEwcHg7XHJcbn1cclxuLmNhcmQtYmd7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbn1cclxuLmNhcmQtYmcye1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmNhcmQtYmcxe1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmlvbi1pdGVtLWNzcyB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdGV4dHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmgtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG5cclxuXHJcbi5jYXJkLWNsYXNzIHtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1wIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyMXtcclxuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5jYXJkLWhlYWRlci1hdHRlbmR7XHJcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcjJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcntcclxuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5pbWcye1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uaW9ubm90ZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yb3cge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5yb3cgcCB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuLml0ZW17XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcclxufVxyXG4uaXRlbS1wIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuLnVzZXJuYW1le1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmhlZGRpbmd7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLnAtdGV4dC1wIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuLnAtdGV4dC1oNCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5pbnZvaWNlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnN1YmplY3QtaGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWhlYWRlcntcclxuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnJvdXRpbmUtaGVhZGVyIHB7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkLXJvdXRpbmV7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uY2FyZC1yb3V0aW5lIC50ZXh0LWNvbG9yLWh7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbjo1cHg7XHJcbn1cclxuLmNhcmQtcm91dGluZSAudGV4dC1jb2xvci1wIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxufVxyXG4uYXZhdGFyLWltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZV90YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XHJcbiAgY29sb3I6ICMyMzJhMmY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBjb2xvcjogIzIzMmEyZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4uUC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogIzVlYjE3MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uQS1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5XLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcclxufVxyXG5cclxuLkgtY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICM2YTk0YzEhaW1wb3J0YW50O1xyXG59XHJcbi5MLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjNzA0NGZmIWltcG9ydGFudDtcclxufVxyXG5cclxuLk5BLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICNlODczN2UhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcclxufVxyXG4ubC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYS1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogIzhjYjBkMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTJFN0VCO1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIGNvbG9yOiAjMUEyMjI5O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXHJcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRTJFN0VCO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoLFxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsXHJcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aCxcclxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkLFxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXHJcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsIC50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xyXG59XHJcbi50YWJsZT50aGVhZD50cj50aCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxufVxyXG4udGFibGU+dGhlYWQ+dHI+dGgsXHJcbi50YWJsZT50Ym9keT50cj50aCxcclxuLnRhYmxlPnRmb290PnRyPnRoLFxyXG4udGFibGU+dGhlYWQ+dHI+dGQsXHJcbi50YWJsZT50Ym9keT50cj50ZCxcclxuLnRhYmxlPnRmb290PnRyPnRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLmJnLXNreSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmYmZjZTtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dC1ibGFjayB7XHJcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtYm9sZCwgLnRleHQtYm9sZC50YWJsZSB0ZCwgLnRleHQtYm9sZC50YWJsZSB0aCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRleHQtcmVkIHtcclxuICBjb2xvcjogI2Y1Njk1NCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");









var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService, langandpermissionService, route, network, storage, toastCtrl, loadingCtrl, alertCtrl, menuCtrl) {
        this.userService = userService;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.network = network;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.isRefresh = true;
        this.doRefreshProfile(false, false);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"];
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.doRefreshProfile(false, false);
    };
    ProfilePage.prototype.presentToast = function () {
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
    ProfilePage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.userService.getUserProfile(value)
            .then(function (data) {
            console.log(data);
            _this.profile = data.profile;
            console.log(_this.profile);
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'profile')
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
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_2__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map