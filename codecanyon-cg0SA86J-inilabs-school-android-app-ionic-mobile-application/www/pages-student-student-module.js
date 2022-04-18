(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-student-module"],{

/***/ "./src/app/pages/student/student.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.module.ts ***!
  \*************************************************/
/*! exports provided: StudentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPageModule", function() { return StudentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student.page */ "./src/app/pages/student/student.page.ts");







var routes = [
    {
        path: '',
        component: _student_page__WEBPACK_IMPORTED_MODULE_6__["StudentPage"]
    }
];
var StudentPageModule = /** @class */ (function () {
    function StudentPageModule() {
    }
    StudentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_page__WEBPACK_IMPORTED_MODULE_6__["StudentPage"]]
        })
    ], StudentPageModule);
    return StudentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/student/student.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n    <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n        <ion-toolbar color=\"light\" *ngIf=\"classes\">\n            <ion-row>\n                <ion-col col-12 no-padding>\n                    <ion-item>\n                        <ion-label>{{language?.student_classes}}</ion-label>\n                        <ion-select placeholder=\"{{language?.student_select_class}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n                            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-toolbar>\n        <ng-container *ngIf=\"students?.length > 0\">\n            <ion-toolbar color=\"light\">\n                <ion-row>\n                    <ion-col col-12 no-padding>\n                        <ion-item>\n                            <ion-searchbar placeholder=\"Search for a student name\"  (ionInput)=\"filterArea($event.target.value)\">\n                            </ion-searchbar>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-toolbar>\n        </ng-container>\n    </ng-container>\n</ion-header>\n\n<ion-content  class=\"bg-image no-scroll\"  *ngIf=\"!myProfile\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true, classID)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf=\"isLoaded\">\n        <ng-container *ngIf=\"students?.length > 0\">\n            <ion-card  class=\"card-student-css\" *ngFor=\"let student of students\" routerLink=\"/studentview/{{student.studentID}}/{{student.classesID}}\">\n                <div style=\"margin: 8px;\">\n                    <ion-row>\n                        <ion-col size=\"4\">\n                            <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n                        </ion-col>\n                        <ion-col size=\"8\">\n                            <div class=\"text-div\">\n                                <h3 class=\"text-h\">{{student.name}}</h3>\n                                <p class=\"text-p\">{{language?.student_roll}}: {{student.roll}}</p>\n                                <p class=\"text-p\">{{language?.student_classes}}: {{student.srclasses}} ({{student.srsection}})</p>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item class=\"ion-item-css\" >\n                        <ion-avatar class=\"avatar-img\">\n                            <img src=\"assets/boy.png\" />\n                        </ion-avatar>\n                        <ion-label>\n                            <h4 class=\"ion-text-h\">{{language?.student_username}}</h4>\n                            <ion-text color=\"secondary\">\n                                <p class=\"ion-text-p\">{{student.username}}</p>\n                            </ion-text>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item class=\"ion-item-css\" >\n                        <ion-avatar class=\"avatar-img\">\n                            <img src=\"assets/sms.png\" />\n                        </ion-avatar>\n                        <ion-label>\n                            <h4 class=\"ion-text-h\">{{language?.student_phone}}</h4>\n                            <ion-text color=\"secondary\">\n                                <p class=\"ion-text-p\">{{student.phone}}</p>\n                            </ion-text>\n                        </ion-label>\n                    </ion-item>\n                </div>\n            </ion-card>\n        </ng-container>\n    </div>\n</ion-content>\n<ion-content  *ngIf=\"myProfile\" class=\"bg-image no-scroll\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n        <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n    </div>\n    <ng-container  *ngIf=\"studentprofile\">\n        <ion-card class=\"card-bg2\">\n            <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(false)\" *ngIf=\"studentitems;else other_content\">\n                <span class=\"ion-card-span\">{{language?.personal_information}}</span>\n                <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n            </ion-card-header>\n            <ng-template #other_content>\n                <ion-card-header class=\"card-header1\" (click)=\"isCollapsed(true)\">\n                    <span class=\"ion-card-span\">{{language?.personal_information}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                </ion-card-header>\n            </ng-template>\n            <ion-list  class=\"card-bg\" *ngIf=\"!studentitems\" >\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.name\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_name}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.name}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.srregisterNO\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_registerNO}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srregisterNO}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.srroll\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_roll}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srroll}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.srclasses\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_classes}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srclasses}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.srsection\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_section}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.srsection}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.group\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_studentgroup}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentGrup?.group}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.subject\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_optionalsubject}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{optionalsubject?.subject}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.sex\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_sex}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.sex}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.dob\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_dob}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.dob | date: \"dd MMM yyyy\"}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.bloodgroup\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_bloodgroup}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.bloodgroup}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.religion\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_religion}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.religion}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.phone\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_phone}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.phone}}</ion-note>\n                </ion-item>\n                <ion-item class=\"item-p\" *ngIf=\"studentprofile?.email\">\n                    <ion-label>\n                        <p align=\"left\">{{language?.student_email}}</p>\n                    </ion-label>\n                    <ion-note slot=\"end\" class=\"ionnote\">{{studentprofile?.email}}</ion-note>\n                </ion-item>\n            </ion-list>\n\n            <ng-container *ngIf=\"(permission.student_add == 'yes' && permission.student_delete == 'yes') || (loginuser.usertypeID == studentprofile.usertypeID && loginuser.loginuserID == studentprofile.studentID)\">\n                <!--Parents Information-->\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedParent(false)\" *ngIf=\"parentitems;else parent_content\">\n                    <span class=\"ion-card-span\">{{language?.parents_information}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #parent_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedParent(true)\">\n                        <span class=\"ion-card-span\">{{language?.parents_information}}</span>\n                        <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-list  class=\"card-bg\" *ngIf=\"!parentitems\">\n\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.name\">\n                        <ion-label>\n                            <p align=\"left\"> {{language?.student_name }}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\"  class=\"ionnote\">{{parents?.name}}</ion-note>\n                    </ion-item>\n\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.father_name\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_father_name}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\"  class=\"ionnote\">{{parents?.father_name}}</ion-note>\n                    </ion-item>\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.mother_name\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_mother_name}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\"  class=\"ionnote\">{{parents?.mother_name}}</ion-note>\n                    </ion-item>\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.father_profession\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_father_profession}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{parents?.father_profession}}</ion-note>\n                    </ion-item>\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.mother_profession\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_mother_profession}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{parents?.mother_profession}}</ion-note>\n                    </ion-item>\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.email\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_email}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\" class=\"ionnote\">{{parents?.email}}</ion-note>\n                    </ion-item>\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.phone\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_phone}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\" class=\"ionnote\">{{parents?.phone}}</ion-note>\n                    </ion-item>\n                    <ion-item class=\"item-p\" *ngIf=\"parents?.address\">\n                        <ion-label>\n                            <p align=\"left\">{{language?.parent_address}}</p>\n                        </ion-label>\n                        <ion-note slot=\"end\" class=\"ionnote\">{{parents?.address}}</ion-note>\n                    </ion-item>\n                </ion-list>\n\n                <!--Attendance Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(false)\" *ngIf=\"attendanceitems;else attendance_content\">\n                    <span class=\"ion-card-span\">{{language?.student_attendance}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #attendance_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedattendance(true)\">\n                        <span class=\"ion-card-span\">{{language?.student_attendance}}</span>\n                        <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <div  *ngIf=\"!attendanceitems\" >\n                    <div *ngIf=\"attendanceType == 'subject'\">\n                        <ion-card  *ngFor=\"let subject of attendancesubjects; let i = index\" class=\"ion-card-css-attend\">\n                            <ng-container *ngIf=\"i == 0\">\n                                <ion-card-header class=\"card-header-attend\">\n                                    <span class=\"ion-card-span\"> {{subject.subject}} {{language?.student_attendance}}</span>\n                                </ion-card-header>\n                            </ng-container>\n                            <ng-container *ngIf=\"i !=0\">\n                                <ion-card-header class=\"card-header\">\n                                    <span class=\"ion-card-span\"> {{subject.subject}} {{language?.student_attendance}}</span>\n                                </ion-card-header>\n                            </ng-container>\n                            <div class=\"div-overflow-css\">\n                                <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                                    <thead>\n                                    <tr>\n                                        <th>#</th>\n                                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let value of attendancesMonth;\">\n                                        <td >{{value.monthname}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['1']}}-color\">{{attendances[subject.subjectID][value.monthkey]['1']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['2']}}-color\">{{attendances[subject.subjectID][value.monthkey]['2']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['3']}}-color\">{{attendances[subject.subjectID][value.monthkey]['3']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['4']}}-color\">{{attendances[subject.subjectID][value.monthkey]['4']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['5']}}-color\">{{attendances[subject.subjectID][value.monthkey]['5']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['6']}}-color\">{{attendances[subject.subjectID][value.monthkey]['6']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['7']}}-color\">{{attendances[subject.subjectID][value.monthkey]['7']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['8']}}-color\">{{attendances[subject.subjectID][value.monthkey]['8']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['9']}}-color\">{{attendances[subject.subjectID][value.monthkey]['9']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['10']}}-color\">{{attendances[subject.subjectID][value.monthkey]['10']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['11']}}-color\">{{attendances[subject.subjectID][value.monthkey]['11']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['12']}}-color\">{{attendances[subject.subjectID][value.monthkey]['12']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['13']}}-color\">{{attendances[subject.subjectID][value.monthkey]['13']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['14']}}-color\">{{attendances[subject.subjectID][value.monthkey]['14']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['15']}}-color\">{{attendances[subject.subjectID][value.monthkey]['15']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['16']}}-color\">{{attendances[subject.subjectID][value.monthkey]['16']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['17']}}-color\">{{attendances[subject.subjectID][value.monthkey]['17']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['18']}}-color\">{{attendances[subject.subjectID][value.monthkey]['18']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['19']}}-color\">{{attendances[subject.subjectID][value.monthkey]['19']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['20']}}-color\">{{attendances[subject.subjectID][value.monthkey]['20']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['21']}}-color\">{{attendances[subject.subjectID][value.monthkey]['21']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['22']}}-color\">{{attendances[subject.subjectID][value.monthkey]['22']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['23']}}-color\">{{attendances[subject.subjectID][value.monthkey]['23']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['24']}}-color\">{{attendances[subject.subjectID][value.monthkey]['24']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['25']}}-color\">{{attendances[subject.subjectID][value.monthkey]['25']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['26']}}-color\">{{attendances[subject.subjectID][value.monthkey]['26']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['27']}}-color\">{{attendances[subject.subjectID][value.monthkey]['27']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['28']}}-color\">{{attendances[subject.subjectID][value.monthkey]['28']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['29']}}-color\">{{attendances[subject.subjectID][value.monthkey]['29']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['30']}}-color\">{{attendances[subject.subjectID][value.monthkey]['30']}}</td>\n                                        <td class=\"{{attendances[subject.subjectID][value.monthkey]['31']}}-color\">{{attendances[subject.subjectID][value.monthkey]['31']}}</td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                                <div align=\"center\">\n                                    <p style=\"margin: 10px\">{{language?.student_total_holiday}}: {{totalcount[subject.subjectID].totalholiday}}, {{language?.student_total_weekenday}}: {{totalcount[subject.subjectID].totalweekend}}, {{language?.student_total_present}}: {{totalcount[subject.subjectID].totalpresent}}, {{language?.student_total_absent}}: {{totalcount[subject.subjectID].totalabsent}}, {{language?.student_total_late}}: {{totalcount[subject.subjectID].totallate}}, {{language?.student_total_leaveday}}: {{totalcount[subject.subjectID].totalleave}}</p>\n                                </div>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n                <div  *ngIf=\"!attendanceitems\" class=\"div-margin-css\">\n                    <ion-card  class=\"ion-card-css-attend\" *ngIf=\"attendanceType == 'day'\">\n                        <div class=\"div-overflow-css\">\n                            <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let value of attendancesMonth;\">\n                                    <td >{{value.monthname}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                                    <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            <div align=\"center\">\n                                <p style=\"margin: 10px\">{{language?.student_total_holiday}}: {{totalcount.totalholiday}}, {{language?.student_total_weekenday}}: {{totalcount.totalweekend}}, {{language?.student_total_present}}: {{totalcount.totalpresent}}, {{language?.student_total_absent}}: {{totalcount.totalabsent}}, {{language?.student_total_late}}: {{totalcount.totallate}}, {{language?.student_total_leaveday}}: {{totalcount.totalleave}}</p>\n                            </div>\n                        </div>\n                    </ion-card>\n                </div>\n\n                <!--Mark Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedmark(false)\" *ngIf=\"markitems;else marks_content\">\n                    <span class=\"ion-card-span\">{{language?.student_mark}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #marks_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedmark(true)\">\n                        <span class=\"ion-card-span\">{{language?.student_mark}}</span>\n                        <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n\n                <div class=\"div-overflow-css\" *ngIf=\"!markitems\">\n                    <ng-container *ngIf=\"marks && marksettings\">\n                        <ion-card *ngFor=\"let markE of objectKeys(marksettings)\">\n                            <ion-card-header class=\"card-header\">\n                                <span class=\"ion-card-span\">{{exams[markE]}}</span>\n                            </ion-card-header>\n                            <div class=\"div-overflow-css\">\n                                <table class=\"table table-striped table-bordered\">\n                                    <thead>\n                                    <tr>\n                                        <th class=\"text-center\" rowspan=\"2\" style=\"background-color:#1D223a;color:#fff;\">{{language?.student_subject}}</th>\n                                        <th colspan=\"2\" class=\" text-center\" style=\"background-color:#1D223a;color:#fff;\" *ngFor=\"let markpercentage of marksettings[markE]?.markpercentageKey\">{{markpercentages[markpercentage]?.markpercentagetype}}</th>\n                                        <th colspan=\"3\" class=\"text-center \" style=\"background-color:#1D223a;color:#fff;\">{{language?.student_total}}</th>\n                                    </tr>\n                                    <tr>\n                                        <ng-container *ngFor=\"let markpercentage of marksettings[markE]?.markpercentageKey\">\n                                            <th class=\"bg-sky text-center \">{{language?.student_obtained_mark}}</th>\n                                            <th class=\"bg-sky-light text-center\" data-title=\"Highest Mark\">{{language?.student_highest_mark}}</th>\n                                        </ng-container>\n                                        <th class=\"bg-sky-total text-center\" style=\"background-color: #6a94c1\">{{language?.student_mark}}</th>\n                                        <th class=\"bg-purple-shipu text-center\" data-title=\"Point\" style=\"background-color: #5eb171\">{{language?.student_point}}</th>\n                                        <th class=\"bg-sky-total-grade text-center\" data-title=\"Grade\" style=\"background-color: #5fbfce\">{{language?.student_grade}}</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let subjectkey of marksettings[markE].subjectKeys\">\n                                        <td class=\"text-black\" data-title=\"Subject\">{{subjects[subjectkey].subject}}</td>\n                                        <ng-container *ngFor=\"let markpercentage of marksettings[markE].markpercentageKey\">\n                                            <ng-container *ngIf=\"marksettings[markE][subjectkey]['own'][markpercentage] == markpercentage;else other_content\">\n                                                <ng-container *ngIf=\"marks[markE][subjectkey];else mark_content\">\n                                                    <td class=\"text-black\" data-title=\"Mark\" >{{marks[markE][subjectkey][markpercentage]}}</td>\n                                                </ng-container>\n                                                <ng-template #mark_content>\n                                                    <td class=\"text-black\" data-title=\"Mark\" >N/A</td>\n                                                </ng-template>\n                                                <td class=\"text-black\" data-title=\"Highest Mark\">{{highestmarks[markE][subjectkey][markpercentage]}}</td>\n                                            </ng-container>\n\n                                            <ng-template #other_content>\n                                                <td class=\"text-black\" data-title=\"Mark\"></td>\n                                                <td class=\"text-black\" data-title=\"Highest Mark\"></td>\n                                            </ng-template>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"marksettings[markE][subjectkey].totalSumMark && marksettings[markE][subjectkey].gradepoint && marksettings[markE][subjectkey].grade;else tgg_mark\">\n                                            <td class=\"text-black\" data-title=\"Mark\">{{marksettings[markE][subjectkey].totalSumMark}}</td>\n                                            <td class=\"text-black\" data-title=\"Point\">{{marksettings[markE][subjectkey].gradepoint}}</td>\n                                            <td class=\"text-black\" data-title=\"Grade\">{{marksettings[markE][subjectkey].grade}}</td>\n                                        </ng-container>\n                                        <ng-template #tgg_mark>\n                                            <td class=\"text-black\" data-title=\"Mark\">{{totalSumpoint}}</td>\n                                            <td class=\"text-black\" data-title=\"Point\">{{totalSumpoint.toFixed(2)}}</td>\n                                            <ng-container *ngFor=\"let gread of grades\">\n                                                <td class=\"text-black\" data-title=\"Grade\" *ngIf=\"gread.gradefrom == 0\">{{gread.grade}}</td>\n                                            </ng-container>\n                                        </ng-template>\n\n                                    </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"box-footer\" style=\"padding-left:0px;\">\n                                    <p class=\"text-black\" style=\"margin-top: 17px; width: max-content;\">&nbsp;&nbsp;{{language?.student_total_marks}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalSubjectMarks}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{language?.student_total_obtained_marks}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalExamMarks}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{language?.student_total_average_marks}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalAverageMarks}} </span>&nbsp;<br>&nbsp;&nbsp;{{language?.student_total_average_marks_percetage}} : <span class=\"text-red text-bold\">{{marksettings[markE].greadAverageMarks}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{language?.student_gpa}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalAveragegpa}}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                                </div>\n                            </div>\n                        </ion-card>\n                    </ng-container>\n                </div>\n\n                <!--Routine Information-->\n\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedroutine(false)\" *ngIf=\"routineitems;else student_content\">\n                    <span class=\"ion-card-span\">{{language?.student_routine}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #student_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedroutine(true)\">\n                        <span class=\"ion-card-span\">{{language?.student_routine}}</span>\n                        <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ion-slides [options]=\"slideOpts\"  *ngIf=\"!routineitems\">\n                    <ng-container *ngIf=\"routines\">\n                        <ng-container *ngFor=\"let routine of routines; let i = index\">\n                            <ion-slide class=\"\" *ngIf=\"routine !='Weekend' && routine !=null\">\n                                <div  class=\"ion-content-css\">\n                                    <ion-card-header  class=\"routine-header\">\n                                        <p>{{days[i].day}}</p>\n                                    </ion-card-header>\n                                    <ion-card  class=\"card-routine\" *ngFor=\"let rotn of routine\">\n                                        <div style=\"margin: 8px;\">\n                                            <h3 class=\"text-color-h\">{{rotn.subject}}</h3>\n                                            <ion-item class=\"p-text ion-item-css\" >\n                                                <ion-avatar class=\"avatar-img\">\n                                                    <img src=\"assets/routine.png\" />\n                                                </ion-avatar>\n                                                <ion-label>\n                                                    <h4>{{language?.student_date}}</h4>\n                                                    <ion-text>\n                                                        <p>{{rotn.time}}</p>\n                                                    </ion-text>\n                                                </ion-label>\n                                            </ion-item>\n                                            <ion-item class=\"p-text ion-item-css\" >\n                                                <ion-avatar class=\"avatar-img\">\n                                                    <img src=\"assets/teacher.png\" />\n                                                </ion-avatar>\n                                                <ion-label>\n                                                    <h4>{{language?.Teacher}}</h4>\n                                                    <ion-text >\n                                                        <p>{{rotn.teacher}}</p>\n                                                    </ion-text>\n                                                </ion-label>\n                                            </ion-item>\n                                        </div>\n                                    </ion-card>\n                                </div>\n                            </ion-slide>\n                        </ng-container>\n                    </ng-container>\n                </ion-slides>\n\n                <!--invoices information-->\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(false)\" *ngIf=\"invoicesitems;else invoices_content\">\n                    <span class=\"ion-card-span\">{{language?.student_invoice}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #invoices_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedinvoices(true)\">\n                        <span class=\"ion-card-span\">{{language?.student_invoice}}</span>\n                        <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ng-container  *ngIf=\"!invoicesitems\">\n                    <ng-container *ngIf=\"invoices\">\n                        <ion-card class=\"card-bg1\"  *ngFor=\"let invoice of invoices\">\n                            <div class=\"card-class\">\n                                <h3 class=\"text-color-h\">{{invoice.feetype}}</h3>\n                                <ion-item class=\"ion-item-css\">\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/routine.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4 class=\"h-text\">{{language?.student_date}}</h4>\n                                        <ion-text>\n                                            <p class=\"p-text\">{{invoice.date | date: \"dd MMM yyyy\"}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\"ion-item-css\">\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/invoice.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4 class=\"h-text\">{{language?.student_fees_amount}} - {{invoice.amount}} </h4>\n                                        <ion-text>\n                                            <p class=\"p-text\">{{language?.student_discount}} - {{invoice.discount}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n                        </ion-card>\n                    </ng-container>\n                </ng-container>\n\n                <!--payments information-->\n                <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(false)\" *ngIf=\"paymentsitems;else payments_content\">\n                    <span class=\"ion-card-span\">{{language?.student_payment}}</span>\n                    <ion-icon class=\"ion-icon-css\" name=\"add\"></ion-icon>\n                </ion-card-header>\n                <ng-template #payments_content>\n                    <ion-card-header class=\"card-header\" (click)=\"isCollapsedpayments(true)\">\n                        <span class=\"ion-card-span\">{{language?.student_payment}}</span>\n                        <ion-icon class=\"ion-icon-css\" name=\"remove\"></ion-icon>\n                    </ion-card-header>\n                </ng-template>\n                <ng-container  *ngIf=\"!paymentsitems\">\n                    <ng-container *ngIf=\"payments\">\n                        <ion-card class=\"card-bg1\"  *ngFor=\"let payment of payments\">\n                            <div class=\"card-class\">\n                                <h3 class=\"text-color-h\">{{payment.feetype}}</h3>\n                                <p class=\"text-color-p\">{{language?.student_paymentmethod}}: {{payment.paymenttype}}</p>\n                                <ion-item class=\" ion-item-css\">\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/routine.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4 class=\"h-text\">{{language?.student_date}}</h4>\n                                        <ion-text>\n                                            <p class=\"p-text\">{{payment.paymentdate | date: \"dd MMM yyyy\"}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\" ion-item-css\">\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/invoice.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4 class=\"h-text\">{{language?.student_fees_amount}} - {{payment.amount}} </h4>\n                                        <ion-text>\n                                            <p class=\"p-text\">{{language?.student_paid}} - {{payment.paymentamount}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\" ion-item-css\">\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/invoice.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4 *ngIf=\"payment.weaver\" class=\"h-text\">{{language?.student_weaver}} - {{payment.weaver}} </h4>\n                                        <h4 *ngIf=\"payment.weaver==null\" class=\"h-text\">{{language?.student_weaver}} - {{0}}</h4>\n                                        <ion-text>\n                                            <p class=\"p-text\" *ngIf=\"payment.fine\">{{language?.student_fine}} - {{payment.fine}}</p>\n                                            <p class=\"p-text\" *ngIf=\"payment.fine == null\">{{language?.student_fine}} - {{0}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n                        </ion-card>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n        </ion-card>\n    </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/student/student.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffff; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffff; }\n\n.ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.ion-card-css {\n  margin: 5px;\n  border-radius: 5px; }\n\n.ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 5px;\n  border-radius: 5px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.relative-card {\n  position: relative;\n  bottom: 45px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg2 {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-bg1 {\n  --background: #ffff !important; }\n\n.p-text {\n  font-size: 13px;\n  color: #ffffff; }\n\n.h-text {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background:#1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 12px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.p-text-p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text-h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #ffff !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.card-routine .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  font-weight: bold;\n  color: #000000;\n  margin: 5px; }\n\n.card-routine .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.avatar-img {\n  margin-right: 10px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.table-bordered {\n  border: 1px solid #E2E7EB; }\n\n.table-bordered > thead > tr > th {\n  border-bottom-width: 2px;\n  color: #1A2229;\n  font-weight: 300; }\n\n.table-bordered > tbody > tr > td {\n  color: #707070; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd; }\n\n.table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #F0F3F5; }\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.bg-sky {\n  background-color: #5fbfce; }\n\n.text-center {\n  text-align: center; }\n\n.text-black {\n  color: #222222 !important; }\n\n.text-bold, .text-bold.table td, .text-bold.table th {\n  font-weight: 700; }\n\n.text-red {\n  color: #f56954 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZGVudC9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzdHVkZW50XFxzdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsOEJBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUtkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFLcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxvQ0FBb0MsRUFBQTs7QUFJdEM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDhCQUFhLEVBQUE7O0FBSWY7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBS2hCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVSxFQUFBOztBQUVaO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWTtFQUNaLFdBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7O0VBRUUscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7Ozs7OztFQU1FLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTs7QUFFL0I7Ozs7OztFQU1FLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0dWRlbnQtaW1ne1xuICB3aWR0aDo4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jYXJkLXN0dWRlbnQtY3NzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYmctY2xhc3N7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZjtcbn1cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmY7XG59XG5cblxuXG4uaW9uLWNvbnRlbnQtY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pb24tY2FyZC1jc3Mge1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cblxuLmlvbi1jb250ZW50LWNzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmlvbi1jYXJkLWNzcyB7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJkLXJvdXRpbmUtZGl2IHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5iZy1jbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0NXB4O1xufVxuLmltZ2NhcmR7XG4gIG1hcmdpbjogIDEwcHg7XG59XG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuLmNhcmQtYmcye1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1iZzF7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcblxufVxuXG4ucC10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmgtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuXG4uY2FyZC1jbGFzcyB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5jYXJkLWhlYWRlcjJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmltZzJ7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uaW9ubm90ZXtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4ucm93IHAge1xuICBjb2xvcjpibGFjaztcbn1cbi5pdGVte1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTg5YWEyO1xufVxuLml0ZW0tcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG59XG4udXNlcm5hbWV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaGVkZGluZ3tcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5wLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG59XG4ucC10ZXh0LWg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3ViamVjdC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yb3V0aW5lLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91dGluZS1oZWFkZXIgcHtcbiAgbWFyZ2luOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1yb3V0aW5le1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1yb3V0aW5lIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOjVweDtcbn1cbi5jYXJkLXJvdXRpbmUgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDoxMDAlO1xufVxuXG4uYXR0ZW5kYW5jZV90YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xcHggc29saWQgI2RkZDtcbiAgY29sb3I6ICMyMzJhMmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbn1cblxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBjb2xvcjogIzIzMmEyZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uUC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcbn1cblxuLkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg3MzdlIWltcG9ydGFudDtcbn1cblxuLlctY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcbn1cblxuLkgtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcbn1cbi5MLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XG59XG5cbi5OQS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM4Y2IwZDAhaW1wb3J0YW50O1xufVxuXG4ucC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcbn1cblxuLmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg3MzdlIWltcG9ydGFudDtcbn1cblxuLnctY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcbn1cblxuLmgtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcbn1cbi5sLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XG59XG5cbi5uYS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM4Y2IwZDAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTdFQjtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgY29sb3I6ICMxQTIyMjk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQge1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCxcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1jb2xvcjogI0UyRTdFQjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQsXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXG4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0ZCwgLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xufVxuLnRhYmxlPnRoZWFkPnRyPnRoIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG59XG4udGFibGU+dGhlYWQ+dHI+dGgsXG4udGFibGU+dGJvZHk+dHI+dGgsXG4udGFibGU+dGZvb3Q+dHI+dGgsXG4udGFibGU+dGhlYWQ+dHI+dGQsXG4udGFibGU+dGJvZHk+dHI+dGQsXG4udGFibGU+dGZvb3Q+dHI+dGQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4uYmctc2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmYmZjZTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYm9sZCwgLnRleHQtYm9sZC50YWJsZSB0ZCwgLnRleHQtYm9sZC50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjZjU2OTU0ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/student/student.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/student/student.page.ts ***!
  \***********************************************/
/*! exports provided: StudentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPage", function() { return StudentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/student.service */ "./src/app/service/student.service.ts");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");










var StudentPage = /** @class */ (function () {
    function StudentPage(router, route, storage, studentService, langandpermissionService, classService, network, toastCtrl, loadingCtrl, alertCtrl, menuCtrl) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.studentService = studentService;
        this.langandpermissionService = langandpermissionService;
        this.classService = classService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.objectKeys = Object.keys;
        this.myProfile = false;
        this.selectedClass = '';
        this.totalSumpoint = 0;
        this.isLoaded = false;
        this.isRefresh = true;
        this.studentitems = false;
        this.parentitems = true;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.markitems = true;
        this.getStudent();
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_9__["fileUrl"];
        setTimeout(function () {
            _this.isLoaded = true;
        }, 3000);
    }
    StudentPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    StudentPage.prototype.isCollapsed = function (value) {
        this.parentitems = true;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.markitems = true;
        this.studentitems = value;
    };
    StudentPage.prototype.isCollapsedParent = function (value) {
        this.studentitems = true;
        this.routineitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.markitems = true;
        this.paymentsitems = true;
        this.parentitems = value;
    };
    StudentPage.prototype.isCollapsedroutine = function (value) {
        this.studentitems = true;
        this.parentitems = true;
        this.attendanceitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.markitems = true;
        this.routineitems = value;
    };
    StudentPage.prototype.isCollapsedattendance = function (value) {
        this.studentitems = true;
        this.parentitems = true;
        this.attendanceitems = value;
        this.routineitems = true;
        this.invoicesitems = true;
        this.paymentsitems = true;
        this.markitems = true;
    };
    StudentPage.prototype.isCollapsedinvoices = function (value) {
        this.studentitems = true;
        this.parentitems = true;
        this.invoicesitems = value;
        this.attendanceitems = true;
        this.routineitems = true;
        this.paymentsitems = true;
        this.markitems = true;
    };
    StudentPage.prototype.isCollapsedpayments = function (value) {
        this.studentitems = true;
        this.parentitems = true;
        this.invoicesitems = true;
        this.attendanceitems = true;
        this.routineitems = true;
        this.paymentsitems = value;
        this.markitems = true;
    };
    StudentPage.prototype.isCollapsedmark = function (value) {
        this.studentitems = true;
        this.parentitems = true;
        this.invoicesitems = true;
        this.attendanceitems = true;
        this.routineitems = true;
        this.paymentsitems = true;
        this.markitems = value;
    };
    StudentPage.prototype.ngOnInit = function () { };
    StudentPage.prototype.presentLoading = function () {
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
    StudentPage.prototype.presentToast = function () {
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
    StudentPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StudentPage.prototype.doRefresh = function (event, value, classID) {
        var _this = this;
        this.studentService.getStudent(classID, value, null, null)
            .then(function (data) {
            _this.students = data.students;
        });
        if (event) {
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    StudentPage.prototype.getStudentView = function (studentID, classID) {
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.router.navigate(['/studentview', studentID, classID]);
        }
    };
    StudentPage.prototype.selectedClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.classID = this.selectedClass;
        if (this.classID) {
            this.studentService.getStudent(this.classID, false, null, null)
                .then(function (data) {
                _this.students = data.students;
            });
            this.langandpermissionService.getLangandPermissionCall(false, 'student')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
        }
    };
    StudentPage.prototype.getStudent = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'student')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            var daysData = [];
            var examkeybox = [];
            if (_this.loginuser.usertypeID == 3) {
                _this.studentService.getStudent(null, false, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.student_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                        _this.studentprofile = data.profile;
                        _this.studentGrup = data.group;
                        _this.optionalsubject = data.optionalsubject;
                        _this.parents = data.parents;
                        _this.invoices = data.invoices;
                        _this.payments = data.payments;
                        _this.weaverandpayment = data.allweaverandpaymentbyinvoice;
                        _this.attendanceType = data.attendanceType;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.attendancesubjects = data.attendancesubjects;
                        _this.subjects = data.subjects;
                        _this.exams = data.exams;
                        _this.marks = data.marks;
                        _this.grades = data.grades;
                        _this.marksettings = data.marksettings;
                        _this.markpercentages = data.markpercentages;
                        _this.highestmarks = data.highestmarks;
                        Object.keys(data.days).forEach(function (key) {
                            daysData.push({ 'day': data.days[key] });
                        });
                        _this.days = daysData;
                        _this.routines = data.routine;
                        _this.section = data.section;
                        _this.class = data.class;
                    }
                    else {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    }
                });
            }
            else {
                _this.studentService.getStudent(null, false, null, null)
                    .then(function (data) {
                    _this.classes = data.classes;
                    _this.students = data.students;
                });
            }
        });
    };
    StudentPage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'student')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            var daysData = [];
            var examkeybox = [];
            if (_this.loginuser.usertypeID == 3) {
                _this.studentService.getStudent(null, value, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.student_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                        _this.studentprofile = data.profile;
                        _this.studentGrup = data.group;
                        _this.optionalsubject = data.optionalsubject;
                        _this.parents = data.parents;
                        _this.invoices = data.invoices;
                        _this.payments = data.payments;
                        _this.weaverandpayment = data.allweaverandpaymentbyinvoice;
                        _this.attendanceType = data.attendanceType;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.attendancesubjects = data.attendancesubjects;
                        _this.subjects = data.subjects;
                        _this.exams = data.exams;
                        _this.marks = data.marks;
                        _this.grades = data.grades;
                        _this.marksettings = data.marksettings;
                        _this.markpercentages = data.markpercentages;
                        _this.highestmarks = data.highestmarks;
                        Object.keys(data.days).forEach(function (key) {
                            daysData.push({ 'day': data.days[key] });
                        });
                        _this.days = daysData;
                        _this.routines = data.routine;
                        _this.section = data.section;
                        _this.class = data.class;
                    }
                    else {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    }
                });
            }
            else {
                _this.studentService.getStudent(null, false, null, null)
                    .then(function (data) {
                    _this.classes = data.classes;
                    _this.students = data.students;
                });
            }
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    StudentPage.prototype.filterArea = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.students = this.students.filter(function (item) {
                if (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
                else {
                    return item.srregisterNO.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        }
        else {
            this.doRefresh(false, false, this.classID);
        }
    };
    StudentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.page.html */ "./src/app/pages/student/student.page.html"),
            styles: [__webpack_require__(/*! ./student.page.scss */ "./src/app/pages/student/student.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]])
    ], StudentPage);
    return StudentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-student-student-module.js.map