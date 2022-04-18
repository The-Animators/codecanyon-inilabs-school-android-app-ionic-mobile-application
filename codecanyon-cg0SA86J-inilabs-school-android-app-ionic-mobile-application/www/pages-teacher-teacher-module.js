(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teacher-teacher-module"],{

/***/ "./src/app/pages/teacher/teacher.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/teacher/teacher.module.ts ***!
  \*************************************************/
/*! exports provided: TeacherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPageModule", function() { return TeacherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teacher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher.page */ "./src/app/pages/teacher/teacher.page.ts");







var routes = [
    {
        path: '',
        component: _teacher_page__WEBPACK_IMPORTED_MODULE_6__["TeacherPage"]
    }
];
var TeacherPageModule = /** @class */ (function () {
    function TeacherPageModule() {
    }
    TeacherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teacher_page__WEBPACK_IMPORTED_MODULE_6__["TeacherPage"]]
        })
    ], TeacherPageModule);
    return TeacherPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teacher/teacher.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/teacher/teacher.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"bg-image no-scroll\" *ngIf=\"!myProfile\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card  class=\"card-teacher-css\" *ngFor=\"let teacher of teachers\" routerLink=\"/teacherview/{{teacher.teacherID}}\">\n    <div class=\"div-margin\" >\n      <ion-row>\n        <ion-col size=\"4\">\n          <img class=\"teacher-img\" src=\"{{siteUrl}}uploads/images/{{teacher.photo}}\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"text-div\">\n            <h3 class=\"text-h\">{{teacher.name}}</h3>\n            <p class=\"text-p\">{{teacher.designation}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"ion-item-css\" >\n        <ion-avatar class=\"avatar-img\">\n          <img src=\"assets/email.png\" />\n        </ion-avatar>\n        <ion-label>\n          <h4 class=\"ion-text-h\">{{language?.teacher_email}}</h4>\n          <ion-text color=\"secondary\">\n            <p class=\"ion-text-p\">{{teacher.email}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item-css\" >\n        <ion-avatar class=\"avatar-img\">\n          <img src=\"assets/sms.png\" />\n        </ion-avatar>\n        <ion-label>\n          <h4 class=\"ion-text-h\">{{language?.teacher_phone}}</h4>\n          <ion-text color=\"secondary\">\n            <p class=\"ion-text-p\">{{teacher.phone}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>\n<ion-content  *ngIf=\"myProfile\" class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"teacherprofile\">\n    <img  color=\"secondary\" *ngIf=\"teacherprofile\" src=\"{{siteUrl}}uploads/images/{{teacherprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n    <ng-container  *ngIf=\"teacherprofile\">\n        <ion-card class=\"card-bg1\">\n            <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(false)\" *ngIf=\"teacheritems;else other_content\">\n                <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n                <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n            </ion-card-header>\n            <ng-template #other_content>\n                <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(true)\">\n                    <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n                    <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                </ion-card-header>\n            </ng-template>\n            <ion-list  class=\"card-bg\" *ngIf=\"!teacheritems\" >\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.name\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_name}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.name}}</ion-note>\n                </ion-item>\n\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.sex\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_sex}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\"  class=\"ionnote\">{{teacherprofile?.sex}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.dob\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_dob}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\"  class=\"ionnote\">{{teacherprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.phone\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_phone}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{teacherprofile?.phone}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.email\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_email}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{teacherprofile?.email}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.religion\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_religion}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.religion}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.jod\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_jod}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.jod | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.address\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_address}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.address}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.username\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_username}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.username}}</ion-note>\n                </ion-item>\n            </ion-list>\n            <ng-container *ngIf=\"(permission.teacher_add == 'yes' && permission.teacher_delete == 'yes') || (loginuser.usertypeID == teacherprofile.usertypeID && loginuser.loginuserID == teacherprofile.teacherID)\">\n                <!--Routine Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedroutine(false)\" *ngIf=\"routineitems;else teacher_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_routine}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #teacher_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedroutine(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_routine}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-slides [options]=\"slideOpts\"  *ngIf=\"!routineitems\">\n                    <ng-container *ngIf=\"routines\">\n                        <ng-container *ngFor=\"let routine of routines; let i = index\">\n                            <ion-slide class=\"\" *ngIf=\"routine !='Weekend' && routine !=null\">\n                                <div  class=\"ion-content-css\">\n                                    <ion-card-header  class=\"routine-header\">\n                                        <p>{{days[i].day}}</p>\n                                    </ion-card-header>\n                                    <ion-card  class=\"card-routine\" *ngFor=\"let rotn of routine\">\n                                        <div style=\"margin: 8px;\">\n                                            <h3 class=\"text-color-h\">{{rotn.subject}}</h3>\n                                            <p class=\"text-color-p\">{{rotn.classes}} ({{rotn.section}})</p>\n                                            <ion-item class=\"p-text ion-item-css\" >\n                                                <ion-avatar class=\"avatar-img\">\n                                                    <img src=\"assets/routine.png\" />\n                                                </ion-avatar>\n                                                <ion-label>\n                                                    <h4>{{language?.teacher_date}}</h4>\n                                                    <ion-text >\n                                                        <p>{{rotn.time}}</p>\n                                                    </ion-text>\n                                                </ion-label>\n                                            </ion-item>\n                                        </div>\n                                    </ion-card>\n                                </div>\n                            </ion-slide>\n                        </ng-container>\n                    </ng-container>\n                </ion-slides>\n\n                <!--Attendance Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(false)\" *ngIf=\"attendanceitems;else attendance_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_attendance}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #attendance_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_attendance}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <div  *ngIf=\"!attendanceitems\" style=\"margin-top: 10px;\">\n                    <ion-card  class=\"card-bg1\">\n                        <div style=\"overflow-x:scroll;\">\n                            <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let value of attendancesMonth;\">\n                                    <td >{{value.monthname}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            <div align=\"center\">\n                                <p style=\"margin: 10px;\">{{language?.teacher_total_holiday}}: {{totalcount?.totalholiday}}, {{language?.teacher_total_weekenday}}: {{totalcount?.totalweekend}}, {{language?.teacher_total_present}}: {{totalcount?.totalpresent}}, {{language?.teacher_total_absent}}: {{totalcount?.totalabsent}}, {{language?.teacher_total_late}}: {{totalcount?.totallate}}, {{language?.teacher_total_leaveday}}: {{totalcount?.totalleave}}</p>\n                            </div>\n                        </div>\n                    </ion-card>\n                </div>\n\n                <!--salary information-->\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(false)\" *ngIf=\"invoicesitems;else invoices_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_salary}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #invoices_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_salary}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!invoicesitems\">\n                    <ion-card>\n                        <div style=\"margin: 8px;\">\n                            <ng-container  *ngIf=\"salary_template\">\n                                <h3 class=\"text-color-h\">  {{language?.teacher_salary_grades}} {{salary_template?.salary_grades}}</h3>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p> {{language?.teacher_basic_salary}} </p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{salary_template?.basic_salary}}</p>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p>{{language?.teacher_overtime_rate}}</p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{salary_template?.overtime_rate}}</p>\n                                    </div>\n                                </ion-item>\n                            </ng-container>\n                            <ng-container *ngIf=\"hourly_salary\">\n                                <h3 class=\"text-color-h\"> {{language?.teacher_salary_grades}} {{hourly_salary?.hourly_grades}}</h3>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p> {{language?.teacher_hourly_rate}} </p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{hourly_salary?.hourly_rate}}</p>\n                                    </div>\n                                </ion-item>\n                            </ng-container>\n                        </div>\n                    </ion-card>\n                    <ion-card *ngIf=\"salaryoptions\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.teacher_allowances}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{salaryoptions[0]?.label_name}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{salaryoptions[0]?.label_amount }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                    <ion-card *ngIf=\"salaryoptions\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.teacher_deductions}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{salaryoptions[1]?.label_name}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{salaryoptions[1]?.label_amount  }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                    <ion-card>\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.teacher_total_salary_details}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.teacher_gross_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{grosssalary }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.teacher_total_deduction}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{totaldeduction }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.teacher_net_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{netsalary}}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                </ion-list>\n\n                <!--payments information-->\n                <ion-card-header class=\"card-header2\" (click)=\"isCollapsedpayments(false)\" *ngIf=\"paymentsitems;else payments_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_payment}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #payments_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_payment}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!paymentsitems\">\n                    <ion-card *ngFor=\"let makepayment of make_payments\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\"> {{makepayment.create_date | date: \"dd MMM yyyy\" }}</h3>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.month\">\n                                <p>{{language?.teacher_month}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{makepayment.month }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.net_salary\">\n                                <p>{{language?.teacher_net_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p *ngIf=\"makepayment.total_hours\"> {{makepayment.net_salary * makepayment.total_hours }}</p>\n                                    <p *ngIf=\"makepayment.total_hours==null\"> {{makepayment.net_salary }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.payment_amount\">\n                                <p>{{language?.teacher_payment_amount}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{makepayment.payment_amount }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                </ion-list>\n            </ng-container>\n        </ion-card>\n    </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/teacher/teacher.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/teacher/teacher.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-margin {\n  margin: 8px; }\n\n.teacher-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-teacher-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #ffff !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-routine .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  font-weight: bold;\n  color: #000000; }\n\n.text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.card-routine .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.card-content-css {\n  margin-top: 10px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhY2hlci9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFx0ZWFjaGVyXFx0ZWFjaGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBS25CO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQUMsY0FBYyxFQUFBOztBQUcxQztFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osV0FBVSxFQUFBOztBQUlaO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsOEJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFjaGVyL3RlYWNoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGl2LW1hcmdpbiB7XG4gIG1hcmdpbjogOHB4O1xufVxuLnRlYWNoZXItaW1ne1xuICB3aWR0aDo4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmlvbi1pdGVtLWNzc3tcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGl2IHtcbiAgdGV4dC1hbGlnbjpzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGZvbnQtc2l6ZToxN3B4O1xuICBjb2xvcjojMDAwMDAwO1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1jYXJkLWNzcyB7XG4gIG1hcmdpbjowcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLXRlYWNoZXItY3NzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cblxuXG4uaW9uLWNvbnRlbnQtY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW9uLWNhcmQtY3NzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLXJvdXRpbmUtZGl2IHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cblxuXG4ucmVsYXRpdmUtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG59XG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4uY2FyZC1iZzF7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG5cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jYXJkLWhlYWRlcjJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmltZzJ7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uaW9ubm90ZXtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4ucm93IHAge1xuICBjb2xvcjpibGFjaztcbn1cbi5pdGVte1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTg5YWEyO1xufVxuLml0ZW0tcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG59XG4udXNlcm5hbWV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaGVkZGluZ3tcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmlvbi10ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmlvbi10ZXh0LWgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtjb2xvcjogIzAwMDAwMDtcbn1cblxuLnN1YmplY3QtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW52b2ljZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnJvdXRpbmUtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5yb3V0aW5lLWhlYWRlciBwe1xuICBtYXJnaW46IDZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLXJvdXRpbmV7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtcm91dGluZSAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4udGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG4uY2FyZC1yb3V0aW5lIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cbi5jYXJkLWNvbnRlbnQtY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjEwMCU7XG59XG5cblxuLmF0dGVuZGFuY2VfdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjMjMyYTJmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG59XG5cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6ICMyMzJhMmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLlAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5BLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi5XLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5ILWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4uTC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4uTkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cblxuLnAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5hLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi53LWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5oLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4ubC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4ubmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/teacher.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/teacher/teacher.page.ts ***!
  \***********************************************/
/*! exports provided: TeacherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPage", function() { return TeacherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/teacher.service */ "./src/app/service/teacher.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");









var TeacherPage = /** @class */ (function () {
    function TeacherPage(router, route, storage, teacherService, network, toastCtrl, loadingCtrl, alertCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.teacherService = teacherService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.langandpermissionService = langandpermissionService;
        this.myProfile = false;
        this.isRefresh = true;
        this.teacheritems = false;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"];
    }
    TeacherPage.prototype.isCollapsed = function (value) {
        this.routineitems = true;
        this.attendanceitems = true;
        this.teacheritems = value;
    };
    TeacherPage.prototype.isCollapsedroutine = function (value) {
        this.teacheritems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.routineitems = value;
    };
    TeacherPage.prototype.isCollapsedattendance = function (value) {
        this.teacheritems = true;
        this.attendanceitems = value;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.routineitems = true;
    };
    TeacherPage.prototype.isCollapsedinvoices = function (value) {
        this.teacheritems = true;
        this.attendanceitems = true;
        this.invoicesitems = value;
        this.paymentsitems = true;
        this.routineitems = true;
    };
    TeacherPage.prototype.isCollapsedpayments = function (value) {
        this.teacheritems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = value;
        this.routineitems = true;
    };
    TeacherPage.prototype.ngOnInit = function () {
        this.Profile();
        this.getTeachers();
    };
    TeacherPage.prototype.presentLoading = function () {
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
    TeacherPage.prototype.presentToast = function () {
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
    TeacherPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TeacherPage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    TeacherPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        this.teacherService.getTeachers(value, '', '')
            .then(function (data) {
            _this.teachers = data.teachers;
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    TeacherPage.prototype.getTeacherView = function (teacherID) {
        this.router.navigate(['/teacherview', teacherID]);
    };
    TeacherPage.prototype.getTeachers = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'teacher')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            var daysData = [];
            if (_this.loginuser.usertypeID == 2) {
                _this.teacherService.getTeachers(false, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.teacher_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 2 && _this.myProfile) {
                        _this.teacherprofile = data.profile;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.hourly_salary = data.hourly_salary;
                        _this.salary_template = data.salary_template;
                        _this.salaryoptions = data.salaryoptions;
                        _this.grosssalary = data.grosssalary;
                        _this.totaldeduction = data.totaldeduction;
                        _this.netsalary = data.netsalary;
                        _this.make_payments = data.make_payments;
                        Object.keys(data.days).forEach(function (key) {
                            daysData.push({ 'day': data.days[key] });
                        });
                        _this.days = daysData;
                        _this.routines = data.routines;
                    }
                    else {
                        _this.teachers = data.teachers;
                    }
                });
            }
            else {
                _this.teacherService.getTeachers(false, '', '')
                    .then(function (data) {
                    _this.teachers = data.teachers;
                });
            }
        });
    };
    TeacherPage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'teacher')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            var daysData = [];
            if (_this.loginuser.usertypeID === 2) {
                _this.teacherService.getTeachers(value, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.parents_view === 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID === 2 && _this.myProfile) {
                        _this.teacherprofile = data.profile;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.hourly_salary = data.hourly_salary;
                        _this.salary_template = data.salary_template;
                        _this.salaryoptions = data.salaryoptions;
                        _this.grosssalary = data.grosssalary;
                        _this.totaldeduction = data.totaldeduction;
                        _this.netsalary = data.netsalary;
                        _this.make_payments = data.make_payments;
                        Object.keys(data.days).forEach(function (key) {
                            daysData.push({ 'day': data.days[key] });
                        });
                        _this.days = daysData;
                        _this.routines = data.routines;
                    }
                    else {
                        _this.teachers = data.teachers;
                    }
                });
            }
            else {
                _this.teacherService.getTeachers(false, '', '')
                    .then(function (data) {
                    _this.teachers = data.teachers;
                });
            }
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    TeacherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! ./teacher.page.html */ "./src/app/pages/teacher/teacher.page.html"),
            styles: [__webpack_require__(/*! ./teacher.page.scss */ "./src/app/pages/teacher/teacher.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _service_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], TeacherPage);
    return TeacherPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teacher-teacher-module.js.map