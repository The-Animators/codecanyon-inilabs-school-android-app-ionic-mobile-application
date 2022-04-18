(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teacherview-teacherview-module"],{

/***/ "./src/app/pages/teacherview/teacherview.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/teacherview/teacherview.module.ts ***!
  \*********************************************************/
/*! exports provided: TeacherviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherviewPageModule", function() { return TeacherviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teacherview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacherview.page */ "./src/app/pages/teacherview/teacherview.page.ts");







var routes = [
    {
        path: '',
        component: _teacherview_page__WEBPACK_IMPORTED_MODULE_6__["TeacherviewPage"]
    }
];
var TeacherviewPageModule = /** @class */ (function () {
    function TeacherviewPageModule() {
    }
    TeacherviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teacherview_page__WEBPACK_IMPORTED_MODULE_6__["TeacherviewPage"]]
        })
    ], TeacherviewPageModule);
    return TeacherviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teacherview/teacherview.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/teacherview/teacherview.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,teacherID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"teacherprofile\">\n    <img  color=\"secondary\" *ngIf=\"teacherprofile\" src=\"{{siteUrl}}uploads/images/{{teacherprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n    <ng-container  *ngIf=\"teacherprofile\">\n        <ion-card class=\"card-bg1\">\n            <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(false)\" *ngIf=\"teacheritems;else other_content\">\n                <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n                <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n            </ion-card-header>\n            <ng-template #other_content>\n                <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(true)\">\n                    <span style=\"font-weight: bold\">{{language?.personal_information}}</span>\n                    <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                </ion-card-header>\n            </ng-template>\n            <ion-list  class=\"card-bg\" *ngIf=\"!teacheritems\" >\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.name\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_name}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.name}}</ion-note>\n                </ion-item>\n\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.sex\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_sex}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\"  class=\"ionnote\">{{teacherprofile?.sex}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.dob\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_dob}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\"  class=\"ionnote\">{{teacherprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.phone\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_phone}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{teacherprofile?.phone}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.email\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_email}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{teacherprofile?.email}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.religion\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_religion}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.religion}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.jod\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_jod}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.jod | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.address\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_address}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.address}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"teacherprofile?.username\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.teacher_username}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{teacherprofile?.username}}</ion-note>\n                </ion-item>\n            </ion-list>\n            <ng-container *ngIf=\"(permission.teacher_add == 'yes' && permission.teacher_delete == 'yes') || (loginuser.usertypeID == teacherprofile.usertypeID && loginuser.loginuserID == teacherprofile.teacherID)\">\n                <!--Routine Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedroutine(false)\" *ngIf=\"routineitems;else teacher_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_routine}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #teacher_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedroutine(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_routine}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-slides [options]=\"slideOpts\"  *ngIf=\"!routineitems\">\n                    <ng-container *ngIf=\"routines\">\n                        <ng-container *ngFor=\"let routine of routines; let i = index\">\n                            <ion-slide class=\"\" *ngIf=\"routine !='Weekend' && routine !=null\">\n                                <div  class=\"ion-content-css\">\n                                    <ion-card-header  class=\"routine-header\">\n                                        <p>{{days[i].day}}</p>\n                                    </ion-card-header>\n                                    <ion-card  class=\"card-routine\" *ngFor=\"let rotn of routine\">\n                                        <div style=\"margin: 8px;\">\n                                            <h3 class=\"text-color-h\">{{rotn.subject}}</h3>\n                                            <p class=\"text-color-p\">{{rotn.classes}} ({{rotn.section}})</p>\n                                            <ion-item class=\"p-text ion-item-css\" >\n                                                <ion-avatar class=\"avatar-img\">\n                                                    <img src=\"assets/routine.png\" />\n                                                </ion-avatar>\n                                                <ion-label>\n                                                    <h4>{{language?.teacher_date}}</h4>\n                                                    <ion-text >\n                                                        <p>{{rotn.time}}</p>\n                                                    </ion-text>\n                                                </ion-label>\n                                            </ion-item>\n                                        </div>\n                                    </ion-card>\n                                </div>\n                            </ion-slide>\n                        </ng-container>\n                    </ng-container>\n                </ion-slides>\n\n                <!--Attendance Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(false)\" *ngIf=\"attendanceitems;else attendance_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_attendance}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #attendance_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_attendance}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <div  *ngIf=\"!attendanceitems\" style=\"margin-top: 10px;\">\n                    <ion-card  class=\"card-bg1\">\n                        <div style=\"overflow-x:scroll;\">\n                            <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let value of attendancesMonth;\">\n                                    <td >{{value.monthname}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            <div align=\"center\">\n                                <p style=\"margin: 10px;\">{{language?.teacher_total_holiday}}: {{totalcount?.totalholiday}}, {{language?.teacher_total_weekenday}}: {{totalcount?.totalweekend}}, {{language?.teacher_total_present}}: {{totalcount?.totalpresent}}, {{language?.teacher_total_absent}}: {{totalcount?.totalabsent}}, {{language?.teacher_total_late}}: {{totalcount?.totallate}}, {{language?.teacher_total_leaveday}}: {{totalcount?.totalleave}}</p>\n                            </div>\n                        </div>\n                    </ion-card>\n                </div>\n\n                <!--salary information-->\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(false)\" *ngIf=\"invoicesitems;else invoices_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_salary}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #invoices_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_salary}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!invoicesitems\">\n                    <ion-card>\n                        <div style=\"margin: 8px;\">\n                            <ng-container  *ngIf=\"salary_template\">\n                                <h3 class=\"text-color-h\">  {{language?.teacher_salary_grades}} {{salary_template?.salary_grades}}</h3>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p> {{language?.teacher_basic_salary}} </p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{salary_template?.basic_salary}}</p>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p>{{language?.teacher_overtime_rate}}</p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{salary_template?.overtime_rate}}</p>\n                                    </div>\n                                </ion-item>\n                            </ng-container>\n                            <ng-container *ngIf=\"hourly_salary\">\n                                <h3 class=\"text-color-h\"> {{language?.teacher_salary_grades}} {{hourly_salary?.hourly_grades}}</h3>\n                                <ion-item class=\"p-text ion-item-css\">\n                                    <p> {{language?.teacher_hourly_rate}} </p>\n                                    <div class=\"item-note\" slot=\"end\">\n                                        <p>{{hourly_salary?.hourly_rate}}</p>\n                                    </div>\n                                </ion-item>\n                            </ng-container>\n                        </div>\n                    </ion-card>\n                    <ion-card *ngIf=\"salaryoptions\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.teacher_allowances}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{salaryoptions[0]?.label_name}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{salaryoptions[0]?.label_amount }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                    <ion-card *ngIf=\"salaryoptions\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.teacher_deductions}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{salaryoptions[1]?.label_name}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{salaryoptions[1]?.label_amount  }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                    <ion-card>\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\">  {{language?.teacher_total_salary_details}}</h3>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.teacher_gross_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{grosssalary }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.teacher_total_deduction}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{totaldeduction }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\">\n                                <p>{{language?.teacher_net_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{netsalary}}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                </ion-list>\n\n                <!--payments information-->\n                <ion-card-header class=\"card-header2\" (click)=\"isCollapsedpayments(false)\" *ngIf=\"paymentsitems;else payments_content\">\n                    <span style=\"font-weight: bold\">{{language?.teacher_payment}}</span>\n                    <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #payments_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(true)\">\n                        <span style=\"font-weight: bold\">{{language?.teacher_payment}}</span>\n                        <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!paymentsitems\">\n                    <ion-card *ngFor=\"let makepayment of make_payments\">\n                        <div style=\"margin: 8px;\">\n                            <h3 class=\"text-color-h\"> {{makepayment.create_date | date: \"dd MMM yyyy\" }}</h3>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.month\">\n                                <p>{{language?.teacher_month}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{makepayment.month }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.net_salary\">\n                                <p>{{language?.teacher_net_salary}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p *ngIf=\"makepayment.total_hours\"> {{makepayment.net_salary * makepayment.total_hours }}</p>\n                                    <p *ngIf=\"makepayment.total_hours==null\"> {{makepayment.net_salary }}</p>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"p-text ion-item-css\" *ngIf=\"makepayment.payment_amount\">\n                                <p>{{language?.teacher_payment_amount}}</p>\n                                <div class=\"item-note\" slot=\"end\">\n                                    <p>{{makepayment.payment_amount }}</p>\n                                </div>\n                            </ion-item>\n                        </div>\n                    </ion-card>\n                </ion-list>\n            </ng-container>\n        </ion-card>\n    </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/teacherview/teacherview.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/teacherview/teacherview.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #ffff !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-routine .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  font-weight: bold;\n  color: #000000; }\n\n.text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.card-routine .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.card-content-css {\n  margin-top: 10px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhY2hlcnZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcdGVhY2hlcnZpZXdcXHRlYWNoZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUliO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0Usb0JBQWE7RUFDYixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSx5QkFBeUI7RUFBQyxjQUFjLEVBQUE7O0FBRzFDO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVk7RUFDWixXQUFVLEVBQUE7O0FBSVo7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw4QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXJ2aWV3L3RlYWNoZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1jb250ZW50LWNzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmlvbi1jYXJkLWNzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1yb3V0aW5lLWRpdiB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246c3RhcnQ7XG59XG5cbi50ZXh0LWgge1xuICBmb250LXNpemU6MTdweDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4ucmVsYXRpdmUtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG59XG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4uY2FyZC1iZzF7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4uY2FyZC1oZWFkZXIxe1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtLXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pb24tdGV4dC1oIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7Y29sb3I6ICMwMDAwMDA7XG59XG5cbi5zdWJqZWN0LWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5yb3V0aW5lLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91dGluZS1oZWFkZXIgcHtcbiAgbWFyZ2luOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1yb3V0aW5le1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4udGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLXJvdXRpbmUgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuLmNhcmQtcm91dGluZSAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG4uY2FyZC1jb250ZW50LWNzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDoxMDAlO1xufVxuXG5cbi5hdHRlbmRhbmNlX3RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXR0ZW5kYW5jZV90YWJsZSB0ciB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogIzIzMmEyZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xufVxuXG4uYXR0ZW5kYW5jZV90YWJsZSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGNvbG9yOiAjMjMyYTJmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5QLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVlYjE3MSAhaW1wb3J0YW50O1xufVxuXG4uQS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICNlODczN2UhaW1wb3J0YW50O1xufVxuXG4uVy1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZmJmY2UhaW1wb3J0YW50O1xufVxuXG4uSC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM2YTk0YzEhaW1wb3J0YW50O1xufVxuLkwtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNzA0NGZmIWltcG9ydGFudDtcbn1cblxuLk5BLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzhjYjBkMCFpbXBvcnRhbnQ7XG59XG5cbi5wLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVlYjE3MSAhaW1wb3J0YW50O1xufVxuXG4uYS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICNlODczN2UhaW1wb3J0YW50O1xufVxuXG4udy1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZmJmY2UhaW1wb3J0YW50O1xufVxuXG4uaC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM2YTk0YzEhaW1wb3J0YW50O1xufVxuLmwtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNzA0NGZmIWltcG9ydGFudDtcbn1cblxuLm5hLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzhjYjBkMCFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/teacherview/teacherview.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/teacherview/teacherview.page.ts ***!
  \*******************************************************/
/*! exports provided: TeacherviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherviewPage", function() { return TeacherviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/teacher.service */ "./src/app/service/teacher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var TeacherviewPage = /** @class */ (function () {
    function TeacherviewPage(teacherService, langandpermissionService, route, network, storage, toastCtrl) {
        this.teacherService = teacherService;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.network = network;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.slideOpts = {
            autoplay: true
        };
        this.isRefresh = true;
        this.teacheritems = false;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.teacherID = this.route.snapshot.paramMap.get('teacherID');
        this.doRefreshProfile(false, false, this.teacherID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["fileUrl"];
    }
    TeacherviewPage.prototype.ngOnInit = function () {
    };
    TeacherviewPage.prototype.isCollapsed = function (value) {
        this.routineitems = true;
        this.attendanceitems = true;
        this.teacheritems = value;
    };
    TeacherviewPage.prototype.isCollapsedroutine = function (value) {
        this.teacheritems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.routineitems = value;
    };
    TeacherviewPage.prototype.isCollapsedattendance = function (value) {
        this.teacheritems = true;
        this.attendanceitems = value;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.routineitems = true;
    };
    TeacherviewPage.prototype.isCollapsedinvoices = function (value) {
        this.teacheritems = true;
        this.attendanceitems = true;
        this.invoicesitems = value;
        this.paymentsitems = true;
        this.routineitems = true;
    };
    TeacherviewPage.prototype.isCollapsedpayments = function (value) {
        this.teacheritems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = value;
        this.routineitems = true;
    };
    TeacherviewPage.prototype.presentToast = function () {
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
    TeacherviewPage.prototype.doRefreshProfile = function (event, value, teacherID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        var daysData = [];
        this.teacherService.getTeacherView(value, teacherID)
            .then(function (data) {
            _this.teacherprofile = data.profile;
            _this.attendances = data.attendance;
            _this.totalcount = data.totalcount;
            _this.attendancesMonth = data.attendancesmonths;
            _this.hourly_salary = data.hourly_salary;
            _this.salary_template = data.salary_template;
            _this.grosssalary = data.grosssalary;
            _this.totaldeduction = data.totaldeduction;
            _this.netsalary = data.netsalary;
            _this.salaryoptions = data.salaryoptions;
            _this.make_payments = data.make_payments;
            Object.keys(data.days).forEach(function (key) {
                daysData.push({ 'day': data.days[key] });
            });
            _this.days = daysData;
            _this.routines = data.routines;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'teacher')
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
    TeacherviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacherview',
            template: __webpack_require__(/*! ./teacherview.page.html */ "./src/app/pages/teacherview/teacherview.page.html"),
            styles: [__webpack_require__(/*! ./teacherview.page.scss */ "./src/app/pages/teacherview/teacherview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], TeacherviewPage);
    return TeacherviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teacherview-teacherview-module.js.map