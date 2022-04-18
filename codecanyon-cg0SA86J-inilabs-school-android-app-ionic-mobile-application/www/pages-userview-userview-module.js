(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userview-userview-module"],{

/***/ "./src/app/pages/userview/userview.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/userview/userview.module.ts ***!
  \***************************************************/
/*! exports provided: UserviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewPageModule", function() { return UserviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userview.page */ "./src/app/pages/userview/userview.page.ts");







var routes = [
    {
        path: '',
        component: _userview_page__WEBPACK_IMPORTED_MODULE_6__["UserviewPage"]
    }
];
var UserviewPageModule = /** @class */ (function () {
    function UserviewPageModule() {
    }
    UserviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_userview_page__WEBPACK_IMPORTED_MODULE_6__["UserviewPage"]]
        })
    ], UserviewPageModule);
    return UserviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/userview/userview.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/userview/userview.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,userID)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"imgcard\" align=\"center\" *ngIf=\"userprofile\">\n        <img  color=\"secondary\" *ngIf=\"userprofile\" src=\"{{siteUrl}}uploads/images/{{userprofile?.photo}}\" class=\"img2\" align=\"center\">\n    </div>\n    <ng-container  *ngIf=\"userprofile\">\n        <ion-card class=\"card-bg1\">\n            <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(false)\" *ngIf=\"useritems;else other_content\">\n                <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n                <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n            </ion-card-header>\n            <ng-template #other_content>\n                <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(true)\">\n                    <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n                    <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                </ion-card-header>\n            </ng-template>\n            <ion-list  class=\"card-bg\" *ngIf=\"!useritems\" >\n                <ion-item class=\"item\" *ngIf=\"userprofile?.name\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_name}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.name}}</ion-note>\n                </ion-item>\n\n                <ion-item class=\"item\" *ngIf=\"userprofile?.sex\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_sex}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\"  class=\"ionnote\">{{userprofile?.sex}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.dob\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_dob}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\"  class=\"ionnote\">{{userprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.phone\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_phone}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{userprofile?.phone}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.email\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_email}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{userprofile?.email}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.religion\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_religion}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.religion}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.jod\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_jod}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.jod | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.address\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_address}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.address}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item\" *ngIf=\"userprofile?.username\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.user_username}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{userprofile?.username}}</ion-note>\n                </ion-item>\n            </ion-list>\n            <ng-container *ngIf=\"(permission.user_add == 'yes' && permission.user_delete == 'yes') || (loginuser.usertypeID == userprofile.usertypeID && loginuser.loginuserID == userprofile.userID)\">\n                <!--Attendance Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(false)\" *ngIf=\"attendanceitems;else attendance_content\">\n                    <span style=\"font-weight: bold\">{{language?.user_attendance}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #attendance_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(true)\">\n                        <span style=\"font-weight: bold\">{{language?.user_attendance}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <div  *ngIf=\"!attendanceitems\" style=\"margin-top: 10px;\">\n                    <ion-card   class=\"card-bg1\">\n                        <div style=\"overflow-x:scroll;\">\n                            <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let value of attendancesMonth;\">\n                                    <td >{{value.monthname}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            <div align=\"center\">\n                                <p style=\"margin: 10px;\">{{language?.user_total_holiday}}: {{totalcount?.totalholiday}}, {{language?.user_total_weekenday}}: {{totalcount?.totalweekend}}, {{language?.user_total_present}}: {{totalcount?.totalpresent}}, {{language?.user_total_absent}}: {{totalcount?.totalabsent}}, {{language?.user_total_late}}: {{totalcount?.totallate}}, {{language?.user_total_leaveday}}: {{totalcount?.totalleave}}</p>\n                            </div>\n                        </div>\n                    </ion-card>\n                </div>\n\n                <!--salary information-->\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(false)\" *ngIf=\"invoicesitems;else invoices_content\">\n                    <span style=\"font-weight: bold\">{{language?.user_salary}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #invoices_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(true)\">\n                        <span style=\"font-weight: bold\">{{language?.user_salary}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!invoicesitems\">\n                    <ion-card>\n                        <div style=\"margin: 8px;\">\n                            <ng-container  *ngIf=\"salary_template\">\n                                <h3 class=\"text-color-h\">  {{language?.user_salary_grades}} {{salary_template?.salary_grades}}</h3>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p> {{language?.user_basic_salary}} </p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{salary_template?.basic_salary}}</p>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p>{{language?.user_overtime_rate}}</p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{salary_template?.overtime_rate}}</p>\n                                    </div>\n                                </ion-item>\n                            </ng-container>\n                            <ng-container *ngIf=\"hourly_salary\">\n                                <h3 class=\"text-color-h\"> {{language?.user_salary_grades}} {{hourly_salary?.hourly_grades}}</h3>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p> {{language?.user_hourly_rate}} </p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{hourly_salary?.hourly_rate}}</p>\n                                    </div>\n                                </ion-item>\n                            </ng-container>\n                        </div>\n                    </ion-card>\n                    <ion-card *ngIf=\"salaryoptions[0]?.label_name\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.user_allowances}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{salaryoptions[0]?.label_name}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{salaryoptions[0]?.label_amount }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                    <ion-card *ngIf=\"salaryoptions[1]?.label_name\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.user_deductions}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{salaryoptions[1]?.label_name}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{salaryoptions[1]?.label_amount  }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                    <ion-card>\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.user_total_salary_details}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.user_gross_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{grosssalary }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.user_total_deduction}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{totaldeduction }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.user_net_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{netsalary}}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                </ion-list>\n\n                <!--payments information-->\n                <ion-card-header class=\"card-header2\" (click)=\"isCollapsedpayments(false)\" *ngIf=\"paymentsitems;else payments_content\">\n                    <span style=\"font-weight: bold\">{{language?.user_payment}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #payments_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(true)\">\n                        <span style=\"font-weight: bold\">{{language?.user_payment}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!paymentsitems\">\n                    <ion-card *ngFor=\"let makepayment of make_payments\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\"> {{makepayment.create_date | date: \"dd MMM yyyy\" }}</h3>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.month\">\n                                <p>{{language?.user_month}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{makepayment.month }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.net_salary\">\n                                <p>{{language?.user_net_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p *ngIf=\"makepayment.total_hours\"> {{makepayment.net_salary * makepayment.total_hours }}</p>\n                                    <p *ngIf=\"makepayment.total_hours==null\"> {{makepayment.net_salary }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.payment_amount\">\n                                <p>{{language?.user_payment_amount}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{makepayment.payment_amount }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                </ion-list>\n            </ng-container>\n        </ion-card>\n    </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/userview/userview.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/userview/userview.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.card-content-css {\n  margin-top: 10px; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #1D223a !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnZpZXdcXHVzZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsOEJBQWEsRUFBQTs7QUFHZjtFQUNFLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLDJDQUF1QixFQUFBOztBQUV6QjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUF5QjtFQUFDLGNBQWMsRUFBQTs7QUFHMUM7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQ0FBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFcEI7RUFDQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxZQUFZO0VBQ1osV0FBVSxFQUFBOztBQUlaO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vydmlldy91c2Vydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pb24tY29udGVudC1jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpdi1vdmVyZmxvdy1jc3Mge1xuICBvdmVyZmxvdy14OnNjcm9sbDtcbn1cbi5kaXYtbWFyZ2luLWNzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaW9uLWNhcmQtc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmlvbi1pY29uLWNzcyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5pb24tY2FyZC1jc3Mge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtcm91dGluZS1kaXYge1xuICBtYXJnaW46IDhweDtcbn1cblxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcblxufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuLmNhcmQtY29udGVudC1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnRleHQtZGl2IHtcbiAgdGV4dC1hbGlnbjpzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGZvbnQtc2l6ZToxN3B4O1xuICBjb2xvcjojMDAwMDAwO1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5yZWxhdGl2ZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbn1cblxuLmltZ2NhcmR7XG4gIG1hcmdpbjogIDEwcHg7XG59XG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuLmNhcmQtYmcxe1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtLXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pb24tdGV4dC1oIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7Y29sb3I6ICMwMDAwMDA7XG59XG5cbi5zdWJqZWN0LWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cblxuLnJvdXRpbmUtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5yb3V0aW5lLWhlYWRlciBwe1xuICBtYXJnaW46IDZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLXJvdXRpbmV7XG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjEwMCU7XG59XG5cblxuLmF0dGVuZGFuY2VfdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjMjMyYTJmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG59XG5cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6ICMyMzJhMmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLlAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5BLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi5XLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5ILWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4uTC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4uTkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cblxuLnAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5hLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi53LWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5oLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4ubC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4ubmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/userview/userview.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/userview/userview.page.ts ***!
  \*************************************************/
/*! exports provided: UserviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewPage", function() { return UserviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var UserviewPage = /** @class */ (function () {
    function UserviewPage(userService, langandpermissionService, route, storage, network, toastCtrl) {
        this.userService = userService;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.storage = storage;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.useritems = false;
        this.isRefresh = true;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.userID = this.route.snapshot.paramMap.get('userID');
        this.doRefreshProfile(false, false, this.userID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["fileUrl"];
    }
    UserviewPage.prototype.ngOnInit = function () {
    };
    UserviewPage.prototype.isCollapsed = function (value) {
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.useritems = value;
    };
    UserviewPage.prototype.isCollapsedattendance = function (value) {
        this.useritems = true;
        this.attendanceitems = value;
        this.invoicesitems = true;
        this.paymentsitems = true;
    };
    UserviewPage.prototype.isCollapsedinvoices = function (value) {
        this.useritems = true;
        this.attendanceitems = true;
        this.invoicesitems = value;
        this.paymentsitems = true;
    };
    UserviewPage.prototype.isCollapsedpayments = function (value) {
        this.useritems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = value;
    };
    UserviewPage.prototype.presentToast = function () {
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
    UserviewPage.prototype.doRefreshProfile = function (event, value, userID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.userService.getUserView(value, userID)
            .then(function (data) {
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
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'user')
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
    UserviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userview',
            template: __webpack_require__(/*! ./userview.page.html */ "./src/app/pages/userview/userview.page.html"),
            styles: [__webpack_require__(/*! ./userview.page.scss */ "./src/app/pages/userview/userview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_2__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
    ], UserviewPage);
    return UserviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-userview-userview-module.js.map