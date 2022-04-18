(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-administrator-systemadminview-systemadminview-module"],{

/***/ "./src/app/pages/administrator/systemadminview/systemadminview.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/systemadminview/systemadminview.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SystemadminviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemadminviewPageModule", function() { return SystemadminviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _systemadminview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systemadminview.page */ "./src/app/pages/administrator/systemadminview/systemadminview.page.ts");







var routes = [
    {
        path: '',
        component: _systemadminview_page__WEBPACK_IMPORTED_MODULE_6__["SystemadminviewPage"]
    }
];
var SystemadminviewPageModule = /** @class */ (function () {
    function SystemadminviewPageModule() {
    }
    SystemadminviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_systemadminview_page__WEBPACK_IMPORTED_MODULE_6__["SystemadminviewPage"]]
        })
    ], SystemadminviewPageModule);
    return SystemadminviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/administrator/systemadminview/systemadminview.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/systemadminview/systemadminview.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,userID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"systemadmin\">\n    <img  color=\"secondary\" *ngIf=\"systemadmin\" src=\"{{siteUrl}}uploads/images/{{systemadmin?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"systemadmin\">\n    <ion-card class=\"card-bg1\">\n      <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(false)\" *ngIf=\"useritems;else other_content\">\n        <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #other_content>\n        <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(true)\">\n          <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ion-list  class=\"card-bg\" *ngIf=\"!useritems\" >\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{systemadmin?.name}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.sex\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_sex}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{systemadmin?.sex}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.dob\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_dob}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{systemadmin?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{systemadmin?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.email\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{systemadmin?.email}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.religion\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_religion}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{systemadmin?.religion}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.jod\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_jod}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{systemadmin?.jod | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.address\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_address}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{systemadmin?.address}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"systemadmin?.username\">\n          <ion-label>\n            <p align=\"left\">{{language?.systemadmin_username}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{systemadmin?.username}}</ion-note>\n        </ion-item>\n      </ion-list>\n\n\n      <!--salary information-->\n      <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(false)\" *ngIf=\"invoicesitems;else invoices_content\">\n        <span style=\"font-weight: bold\">{{language?.systemadmin_salary}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #invoices_content>\n        <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(true)\">\n          <span style=\"font-weight: bold\">{{language?.systemadmin_salary}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ion-list  class=\"card-bg\" *ngIf=\"!invoicesitems\">\n        <ion-card>\n          <div style=\"margin: 8px;\">\n            <ng-container  *ngIf=\"salary_template\">\n              <h3 class=\"text-color-h\">  {{language?.systemadmin_salary_grades}} {{salary_template?.salary_grades}}</h3>\n              <ion-item class=\"p-text ion-item-css\">\n                <p> {{language?.systemadmin_basic_salary}} </p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{salary_template?.basic_salary}}</p>\n                </div>\n              </ion-item>\n              <ion-item class=\"p-text ion-item-css\">\n                <p>{{language?.systemadmin_overtime_rate}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{salary_template?.overtime_rate}}</p>\n                </div>\n              </ion-item>\n            </ng-container>\n            <ng-container *ngIf=\"hourly_salary\">\n              <h3 class=\"text-color-h\"> {{language?.systemadmin_salary_grades}} {{hourly_salary?.hourly_grades}}</h3>\n              <ion-item class=\"p-text ion-item-css\">\n                <p> {{language?.systemadmin_hourly_rate}} </p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{hourly_salary?.hourly_rate}}</p>\n                </div>\n              </ion-item>\n            </ng-container>\n          </div>\n        </ion-card>\n        <ion-card *ngIf=\"salaryoptions[0]?.label_name\">\n          <div style=\"margin: 8px;\">\n            <h3 class=\"text-color-h\">  {{language?.systemadmin_allowances}}</h3>\n            <ion-item class=\"p-text ion-item-css\">\n              <p>{{salaryoptions[0]?.label_name}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{salaryoptions[0]?.label_amount }}</p>\n              </div>\n            </ion-item>\n          </div>\n        </ion-card>\n        <ion-card *ngIf=\"salaryoptions[1]?.label_name\">\n          <div style=\"margin: 8px;\">\n            <h3 class=\"text-color-h\">  {{language?.systemadmin_deductions}}</h3>\n            <ion-item class=\"p-text ion-item-css\">\n              <p>{{salaryoptions[1]?.label_name}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{salaryoptions[1]?.label_amount  }}</p>\n              </div>\n            </ion-item>\n          </div>\n        </ion-card>\n        <ion-card>\n          <div style=\"margin: 8px;\">\n            <h3 class=\"text-color-h\">  {{language?.systemadmin_total_salary_details}}</h3>\n            <ion-item class=\"p-text ion-item-css\">\n              <p>{{language?.systemadmin_gross_salary}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{grosssalary }}</p>\n              </div>\n            </ion-item>\n            <ion-item class=\"p-text ion-item-css\">\n              <p>{{language?.systemadmin_total_deduction}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{totaldeduction }}</p>\n              </div>\n            </ion-item>\n            <ion-item class=\"p-text ion-item-css\">\n              <p>{{language?.systemadmin_net_salary}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{netsalary}}</p>\n              </div>\n            </ion-item>\n          </div>\n        </ion-card>\n      </ion-list>\n\n      <!--payments information-->\n      <ion-card-header class=\"card-header2\" (click)=\"isCollapsedpayments(false)\" *ngIf=\"paymentsitems;else payments_content\">\n        <span style=\"font-weight: bold\">{{language?.systemadmin_payment}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #payments_content>\n        <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(true)\">\n          <span style=\"font-weight: bold\">{{language?.systemadmin_payment}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ion-list  class=\"card-bg\" *ngIf=\"!paymentsitems\">\n        <ion-card *ngFor=\"let makepayment of make_payments\">\n          <div style=\"margin: 8px;\">\n            <h3 class=\"text-color-h\"> {{makepayment.create_date | date: \"dd MMM yyyy\" }}</h3>\n            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.month\">\n              <p>{{language?.systemadmin_month}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{makepayment.month }}</p>\n              </div>\n            </ion-item>\n            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.net_salary\">\n              <p>{{language?.systemadmin_net_salary}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p *ngIf=\"makepayment.total_hours\"> {{makepayment.net_salary * makepayment.total_hours }}</p>\n                <p *ngIf=\"makepayment.total_hours==null\"> {{makepayment.net_salary }}</p>\n              </div>\n            </ion-item>\n            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.payment_amount\">\n              <p>{{language?.systemadmin_payment_amount}}</p>\n              <div class=\"item-note\" slot=\"end\">\n                <p>{{makepayment.payment_amount }}</p>\n              </div>\n            </ion-item>\n          </div>\n        </ion-card>\n      </ion-list>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/administrator/systemadminview/systemadminview.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/systemadminview/systemadminview.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.card-content-css {\n  margin-top: 10px; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #1D223a !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9zeXN0ZW1hZG1pbnZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW5pc3RyYXRvclxcc3lzdGVtYWRtaW52aWV3XFxzeXN0ZW1hZG1pbnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSw4QkFBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0UsMkNBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQUMsY0FBYyxFQUFBOztBQUcxQztFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUloQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdDQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9zeXN0ZW1hZG1pbnZpZXcvc3lzdGVtYWRtaW52aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1jb250ZW50LWNzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmlvbi1jYXJkLWNzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1yb3V0aW5lLWRpdiB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4uYmctY2xhc3N7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1iZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMTk2MSAhaW1wb3J0YW50O1xuXG59XG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1jb250ZW50LWNzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4uY2FyZC1iZzF7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuLmNhcmQtaGVhZGVyMXtcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cbi5jYXJkLWhlYWRlcjJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmltZzJ7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uaW9ubm90ZXtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4ucm93IHAge1xuICBjb2xvcjpibGFjaztcbn1cbi5pdGVte1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTg5YWEyO1xufVxuLml0ZW0tcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG59XG4udXNlcm5hbWV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaGVkZGluZ3tcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmlvbi10ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmlvbi10ZXh0LWgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtjb2xvcjogIzAwMDAwMDtcbn1cblxuLnN1YmplY3QtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW52b2ljZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuXG4ucm91dGluZS1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnJvdXRpbmUtaGVhZGVyIHB7XG4gIG1hcmdpbjogNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtcm91dGluZXtcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4udGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/administrator/systemadminview/systemadminview.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administrator/systemadminview/systemadminview.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SystemadminviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemadminviewPage", function() { return SystemadminviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/administrator/administrator.service */ "./src/app/service/administrator/administrator.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var SystemadminviewPage = /** @class */ (function () {
    function SystemadminviewPage(router, route, network, toastCtrl, administratorService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.administratorService = administratorService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.useritems = false;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.userID = this.route.snapshot.paramMap.get('userID');
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
        this.doRefresh(false, false, this.userID);
    }
    SystemadminviewPage.prototype.ngOnInit = function () {
    };
    SystemadminviewPage.prototype.isCollapsed = function (value) {
        this.paymentsitems = true;
        this.invoicesitems = true;
        this.useritems = value;
    };
    SystemadminviewPage.prototype.isCollapsedinvoices = function (value) {
        this.useritems = true;
        this.invoicesitems = value;
        this.paymentsitems = true;
    };
    SystemadminviewPage.prototype.isCollapsedpayments = function (value) {
        this.useritems = true;
        this.invoicesitems = true;
        this.paymentsitems = value;
    };
    SystemadminviewPage.prototype.presentToast = function () {
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
    SystemadminviewPage.prototype.doRefresh = function (event, value, userID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.administratorService.getSystemAdminview(value, userID)
            .then(function (data) {
            _this.systemadmin = data.profile;
            _this.salary_template = data.salary_template;
            _this.hourly_salary = data.hourly_salary;
            _this.grosssalary = data.grosssalary;
            _this.totaldeduction = data.totaldeduction;
            _this.netsalary = data.netsalary;
            _this.salaryoptions = data.salaryoptions;
            _this.make_payments = data.make_payments;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'systemadmin')
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
    SystemadminviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-systemadminview',
            template: __webpack_require__(/*! ./systemadminview.page.html */ "./src/app/pages/administrator/systemadminview/systemadminview.page.html"),
            styles: [__webpack_require__(/*! ./systemadminview.page.scss */ "./src/app/pages/administrator/systemadminview/systemadminview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], SystemadminviewPage);
    return SystemadminviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-administrator-systemadminview-systemadminview-module.js.map