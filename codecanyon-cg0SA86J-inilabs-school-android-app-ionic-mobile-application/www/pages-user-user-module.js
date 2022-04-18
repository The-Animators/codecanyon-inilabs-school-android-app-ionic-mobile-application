(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");







var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!myProfile\" class=\"bg-image no-scroll\" >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card  class=\"card-user-css\" *ngFor=\"let user of users\" routerLink=\"/userview/{{user.userID}}\">\n    <div class=\"div-margin\" >\n      <ion-row>\n        <ion-col size=\"4\">\n          <img class=\"user-img\" src=\"{{siteUrl}}uploads/images/{{user.photo}}\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"text-div\">\n            <h3 class=\"text-h\">{{user.name}}</h3>\n            <p class=\"text-p\">{{user.usertype}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"ion-item-css\" >\n        <ion-avatar class=\"avatar-img\">\n          <img src=\"assets/email.png\" />\n        </ion-avatar>\n        <ion-label>\n          <h4 class=\"ion-text-h\">{{language?.user_email}}</h4>\n          <ion-text color=\"secondary\">\n            <p class=\"ion-text-p\">{{user.email}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item-css\" >\n        <ion-avatar class=\"avatar-img\">\n          <img src=\"assets/sms.png\" />\n        </ion-avatar>\n        <ion-label>\n          <h4 class=\"ion-text-h\">{{language?.user_phone}}</h4>\n          <ion-text color=\"secondary\">\n            <p class=\"ion-text-p\">{{user.phone}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>\n<ion-content  *ngIf=\"myProfile\" class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"userprofile\">\n    <img  color=\"secondary\" *ngIf=\"userprofile\" src=\"{{siteUrl}}uploads/images/{{userprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"userprofile\">\n    <ion-card class=\"card-bg1\">\n      <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(false)\" *ngIf=\"useritems;else other_content\">\n        <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #other_content>\n        <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(true)\">\n          <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ion-list  class=\"card-bg\" *ngIf=\"!useritems\" >\n        <ion-item class=\"item\" *ngIf=\"userprofile?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.name}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item\" *ngIf=\"userprofile?.sex\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_sex}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{userprofile?.sex}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.dob\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_dob}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{userprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{userprofile?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.email\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{userprofile?.email}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.religion\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_religion}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.religion}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.jod\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_jod}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.jod | date: \"dd MMM yyyy\"}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.address\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_address}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.address}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item\" *ngIf=\"userprofile?.username\">\n          <ion-label>\n            <p align=\"left\">{{language?.user_username}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.username}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <ng-container *ngIf=\"(permission.user_add == 'yes' && permission.user_delete == 'yes') || (loginuser.usertypeID == userprofile.usertypeID && loginuser.loginuserID == userprofile.userID)\">\n        <!--Attendance Information-->\n\n        <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(false)\" *ngIf=\"attendanceitems;else attendance_content\">\n          <span style=\"font-weight: bold\">{{language?.user_attendance}}</span>\n          <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n        </ion-card-header>\n        <ng-template #attendance_content>\n          <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(true)\">\n            <span style=\"font-weight: bold\">{{language?.user_attendance}}</span>\n            <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n          </ion-card-header>\n        </ng-template>\n        <div  *ngIf=\"!attendanceitems\" style=\"margin-top: 10px;\">\n          <ion-card   class=\"card-bg1\">\n            <div style=\"overflow-x:scroll;\">\n              <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                <thead>\n                <tr>\n                  <th>#</th>\n                  <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let value of attendancesMonth;\">\n                  <td >{{value.monthname}}</td>\n                  <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                  <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                </tr>\n                </tbody>\n              </table>\n              <div align=\"center\">\n                <p style=\"margin: 10px;\">{{language?.user_total_holiday}}: {{totalcount?.totalholiday}}, {{language?.user_total_weekenday}}: {{totalcount?.totalweekend}}, {{language?.user_total_present}}: {{totalcount?.totalpresent}}, {{language?.user_total_absent}}: {{totalcount?.totalabsent}}, {{language?.user_total_late}}: {{totalcount?.totallate}}, {{language?.user_total_leaveday}}: {{totalcount?.totalleave}}</p>\n              </div>\n            </div>\n          </ion-card>\n        </div>\n\n        <!--salary information-->\n        <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(false)\" *ngIf=\"invoicesitems;else invoices_content\">\n          <span style=\"font-weight: bold\">{{language?.user_salary}}</span>\n          <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n        </ion-card-header>\n        <ng-template #invoices_content>\n          <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(true)\">\n            <span style=\"font-weight: bold\">{{language?.user_salary}}</span>\n            <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n          </ion-card-header>\n        </ng-template>\n        <ion-list  class=\"card-bg\" *ngIf=\"!invoicesitems\">\n          <ion-card>\n            <div style=\"margin: 8px;\">\n              <ng-container  *ngIf=\"salary_template\">\n                <h3 class=\"text-color-h\">  {{language?.user_salary_grades}} {{salary_template?.salary_grades}}</h3>\n                <ion-item class=\"p-text ion-item-css\">\n                  <p> {{language?.user_basic_salary}} </p>\n                  <div class=\"item-note\" slot=\"end\">\n                    <p>{{salary_template?.basic_salary}}</p>\n                  </div>\n                </ion-item>\n                <ion-item class=\"p-text ion-item-css\">\n                  <p>{{language?.user_overtime_rate}}</p>\n                  <div class=\"item-note\" slot=\"end\">\n                    <p>{{salary_template?.overtime_rate}}</p>\n                  </div>\n                </ion-item>\n              </ng-container>\n              <ng-container *ngIf=\"hourly_salary\">\n                <h3 class=\"text-color-h\"> {{language?.user_salary_grades}} {{hourly_salary?.hourly_grades}}</h3>\n                <ion-item class=\"p-text ion-item-css\">\n                  <p> {{language?.user_hourly_rate}} </p>\n                  <div class=\"item-note\" slot=\"end\">\n                    <p>{{hourly_salary?.hourly_rate}}</p>\n                  </div>\n                </ion-item>\n              </ng-container>\n            </div>\n          </ion-card>\n          <ion-card *ngIf=\"salaryoptions[0]?.label_name\">\n            <div style=\"margin: 8px;\">\n              <h3 class=\"text-color-h\">  {{language?.user_allowances}}</h3>\n              <ion-item class=\"p-text ion-item-css\">\n                <p>{{salaryoptions[0]?.label_name}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{salaryoptions[0]?.label_amount }}</p>\n                </div>\n              </ion-item>\n            </div>\n          </ion-card>\n          <ion-card *ngIf=\"salaryoptions[1]?.label_name\">\n            <div style=\"margin: 8px;\">\n              <h3 class=\"text-color-h\">  {{language?.user_deductions}}</h3>\n              <ion-item class=\"p-text ion-item-css\">\n                <p>{{salaryoptions[1]?.label_name}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{salaryoptions[1]?.label_amount  }}</p>\n                </div>\n              </ion-item>\n            </div>\n          </ion-card>\n          <ion-card>\n            <div style=\"margin: 8px;\">\n              <h3 class=\"text-color-h\">  {{language?.user_total_salary_details}}</h3>\n              <ion-item class=\"p-text ion-item-css\">\n                <p>{{language?.user_gross_salary}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{grosssalary }}</p>\n                </div>\n              </ion-item>\n              <ion-item class=\"p-text ion-item-css\">\n                <p>{{language?.user_total_deduction}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{totaldeduction }}</p>\n                </div>\n              </ion-item>\n              <ion-item class=\"p-text ion-item-css\">\n                <p>{{language?.user_net_salary}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{netsalary}}</p>\n                </div>\n              </ion-item>\n            </div>\n          </ion-card>\n        </ion-list>\n\n        <!--payments information-->\n        <ion-card-header class=\"card-header2\" (click)=\"isCollapsedpayments(false)\" *ngIf=\"paymentsitems;else payments_content\">\n          <span style=\"font-weight: bold\">{{language?.user_payment}}</span>\n          <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n        </ion-card-header>\n        <ng-template #payments_content>\n          <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(true)\">\n            <span style=\"font-weight: bold\">{{language?.user_payment}}</span>\n            <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n          </ion-card-header>\n        </ng-template>\n        <ion-list  class=\"card-bg\" *ngIf=\"!paymentsitems\">\n          <ion-card *ngFor=\"let makepayment of make_payments\">\n            <div style=\"margin: 8px;\">\n              <h3 class=\"text-color-h\"> {{makepayment.create_date | date: \"dd MMM yyyy\" }}</h3>\n              <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.month\">\n                <p>{{language?.user_month}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{makepayment.month }}</p>\n                </div>\n              </ion-item>\n              <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.net_salary\">\n                <p>{{language?.user_net_salary}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p *ngIf=\"makepayment.total_hours\"> {{makepayment.net_salary * makepayment.total_hours }}</p>\n                  <p *ngIf=\"makepayment.total_hours==null\"> {{makepayment.net_salary }}</p>\n                </div>\n              </ion-item>\n              <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.payment_amount\">\n                <p>{{language?.user_payment_amount}}</p>\n                <div class=\"item-note\" slot=\"end\">\n                  <p>{{makepayment.payment_amount }}</p>\n                </div>\n              </ion-item>\n            </div>\n          </ion-card>\n        </ion-list>\n      </ng-container>\n    </ion-card>\n  </ng-container>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-margin {\n  margin: 8px; }\n\n.user-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-user-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.card-content-css {\n  margin-top: 10px; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #1D223a !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyXFx1c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFFekI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBU2xCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSw4QkFB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WyJcbi5kaXYtbWFyZ2luIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4udXNlci1pbWd7XG4gIHdpZHRoOjgwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG5cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pb24tdGV4dC1oIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWNhcmQtY3NzIHtcbiAgbWFyZ2luOjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtdXNlci1jc3Mge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cblxuLmlvbi1pdGVtLWNzc3tcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cbi5jYXJkLWNvbnRlbnQtY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246c3RhcnQ7XG59XG5cbi50ZXh0LWgge1xuICBmb250LXNpemU6MTdweDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG5cblxuXG5cblxuXG4uaW9uLWNvbnRlbnQtY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW9uLWNhcmQtY3NzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLXJvdXRpbmUtZGl2IHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5iZy1jbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XG5cbn1cblxuLmlvbi1pdGVtLWNzc3tcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnRleHQtZGl2IHtcbiAgdGV4dC1hbGlnbjpzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGZvbnQtc2l6ZToxN3B4O1xuICBjb2xvcjojMDAwMDAwO1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5yZWxhdGl2ZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbn1cbi5pbWdjYXJke1xuICBtYXJnaW46ICAxMHB4O1xufVxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cbi5jYXJkLWJnMXtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4uY2FyZC1oZWFkZXIxe1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLmNhcmQtaGVhZGVyMntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uaW1nMntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5pb25ub3Rle1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5yb3cgcCB7XG4gIGNvbG9yOmJsYWNrO1xufVxuLml0ZW17XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XG59XG4uaXRlbS1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VybmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oZWRkaW5ne1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW52b2ljZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5YWEyO2NvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3ViamVjdC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cbi5yb3V0aW5lLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91dGluZS1oZWFkZXIgcHtcbiAgbWFyZ2luOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1yb3V0aW5le1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2EgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjEwMCU7XG59XG5cblxuLmF0dGVuZGFuY2VfdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjMjMyYTJmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG59XG5cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6ICMyMzJhMmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLlAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5BLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi5XLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5ILWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4uTC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4uTkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cblxuLnAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5hLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi53LWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5oLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4ubC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4ubmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");









var UserPage = /** @class */ (function () {
    function UserPage(router, route, userService, storage, network, toastCtrl, loadingCtrl, alertCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.storage = storage;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.langandpermissionService = langandpermissionService;
        this.myProfile = false;
        this.useritems = false;
        this.isRefresh = true;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"];
        this.getUser();
    }
    UserPage.prototype.isCollapsed = function (value) {
        this.attendanceitems = true;
        this.attendanceitems = true;
        this.paymentsitems = true;
        this.useritems = value;
    };
    UserPage.prototype.isCollapsedattendance = function (value) {
        this.useritems = true;
        this.attendanceitems = value;
        this.invoicesitems = true;
        this.paymentsitems = true;
    };
    UserPage.prototype.isCollapsedinvoices = function (value) {
        this.useritems = true;
        this.attendanceitems = true;
        this.invoicesitems = value;
        this.paymentsitems = true;
    };
    UserPage.prototype.isCollapsedpayments = function (value) {
        this.useritems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = value;
    };
    UserPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                            spinner: 'crescent',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.presentToast = function () {
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
    UserPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserPage.prototype.ngOnInit = function () {
        this.Profile();
    };
    UserPage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    UserPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        this.userService.getUsers(value, '', '')
            .then(function (data) {
            _this.users = data.users;
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    UserPage.prototype.getUserView = function (userID) {
        this.router.navigate(['/userview', userID]);
    };
    UserPage.prototype.getUser = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'user')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            var daysData = [];
            if (_this.loginuser.usertypeID != 1 && _this.loginuser.usertypeID != 2 && _this.loginuser.usertypeID != 3 && _this.loginuser.usertypeID != 4) {
                _this.userService.getUsers(false, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.user_view === 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID && _this.myProfile) {
                        _this.userprofile = data.profile;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.salary_template = data.salary_template;
                        _this.hourly_salary = data.hourly_salary;
                        _this.grosssalary = data.grosssalary;
                        _this.totaldeduction = data.totaldeduction;
                        _this.netsalary = data.netsalary;
                        _this.salaryoptions = data.salaryoptions;
                        _this.make_payments = data.make_payments;
                    }
                    else {
                        _this.users = data.users;
                    }
                });
            }
            else {
                _this.userService.getUsers(false, '', '')
                    .then(function (data) {
                    _this.users = data.users;
                });
            }
        });
    };
    UserPage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'user')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            var daysData = [];
            if (_this.loginuser.usertypeID != 1 && _this.loginuser.usertypeID != 2 && _this.loginuser.usertypeID != 3 && _this.loginuser.usertypeID != 4) {
                _this.userService.getUsers(value, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.user_view === 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID && _this.myProfile) {
                        _this.userprofile = data.profile;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.salary_template = data.salary_template;
                        _this.hourly_salary = data.hourly_salary;
                        _this.grosssalary = data.grosssalary;
                        _this.totaldeduction = data.totaldeduction;
                        _this.netsalary = data.netsalary;
                        _this.salaryoptions = data.salaryoptions;
                        _this.make_payments = data.make_payments;
                    }
                    else {
                        _this.users = data.users;
                    }
                });
            }
            else {
                _this.userService.getUsers(false, '', '')
                    .then(function (data) {
                    _this.users = data.users;
                });
            }
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.page.html */ "./src/app/pages/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module.js.map