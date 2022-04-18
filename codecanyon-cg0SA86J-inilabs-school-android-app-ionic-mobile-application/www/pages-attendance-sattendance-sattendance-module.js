(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-attendance-sattendance-sattendance-module"],{

/***/ "./src/app/pages/attendance/sattendance/sattendance.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/attendance/sattendance/sattendance.module.ts ***!
  \********************************************************************/
/*! exports provided: SattendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SattendancePageModule", function() { return SattendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sattendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sattendance.page */ "./src/app/pages/attendance/sattendance/sattendance.page.ts");







var routes = [
    {
        path: '',
        component: _sattendance_page__WEBPACK_IMPORTED_MODULE_6__["SattendancePage"]
    }
];
var SattendancePageModule = /** @class */ (function () {
    function SattendancePageModule() {
    }
    SattendancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sattendance_page__WEBPACK_IMPORTED_MODULE_6__["SattendancePage"]]
        })
    ], SattendancePageModule);
    return SattendancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/attendance/sattendance/sattendance.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/attendance/sattendance/sattendance.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"permission?.sattendance_add == 'yes'\" slot=\"end\" routerLink=\"/sattendanceadd\">\n        {{language?.menu_add}}\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n  <ion-toolbar color=\"light\" *ngIf=\"classes\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.attendance_classes}}</ion-label>\n          <ion-select placeholder=\"{{language?.attendance_select_classes}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  </ng-container>\n</ion-header>\n\n<ion-content  class=\"bg-image no-scroll\"  *ngIf=\"!myProfile\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true, classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"isLoaded\">\n    <ng-container *ngIf=\"students?.length > 0\">\n      <ion-card  class=\"card-student-css\" *ngFor=\"let student of students\" routerLink=\"/sattendanceview/{{student.studentID}}/{{student.classesID}}\">\n        <div style=\"margin: 8px;\" >\n          <ion-row>\n            <ion-col size=\"4\">\n              <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n            </ion-col>\n            <ion-col size=\"8\">\n              <div class=\"text-div\">\n                <h3 class=\"text-h\">{{student.name}}</h3>\n                <p class=\"text-p\">{{language?.attendance_roll}}: {{student.roll}}</p>\n                <p class=\"text-p\">{{language?.attendance_classes}}: {{student.srclasses}} ({{student.srsection}})</p>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-item class=\"ion-item-css\" >\n            <ion-avatar class=\"avatar-img\">\n              <img src=\"assets/boy.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h4 class=\"ion-text-h\">{{language?.attendance_username}}</h4>\n              <ion-text color=\"secondary\">\n                <p class=\"ion-text-p\">{{student.username}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"ion-item-css\" >\n            <ion-avatar class=\"avatar-img\">\n              <img src=\"assets/sms.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h4 class=\"ion-text-h\">{{language?.attendance_phone}}</h4>\n              <ion-text color=\"secondary\">\n                <p class=\"ion-text-p\">{{student.phone}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-card>\n    </ng-container>\n  </div>\n</ion-content>\n\n<ion-content  *ngIf=\"myProfile\"  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n    <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"attendanceType == 'subject'\">\n      <ion-card *ngFor=\"let subject of subjects; let i = index\" class=\"card-bg\">\n        <ng-container *ngIf=\"i == 0\">\n          <ion-card-header class=\"card-header1\">\n            <span style=\"font-weight: bold;\"> {{subject.subject}} {{language?.sattendance_attendance}}</span>\n          </ion-card-header>\n        </ng-container>\n        <ng-container *ngIf=\"i !=0\">\n          <ion-card-header class=\"card-header\">\n            <span style=\"font-weight: bold;\"> {{subject.subject}} {{language?.sattendance_attendance}}</span>\n          </ion-card-header>\n        </ng-container>\n\n        <div style=\"overflow-x:scroll;\">\n          <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let value of attendancesMonth;\">\n              <td >{{value.monthname}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['1']}}-color\">{{attendances[subject.subjectID][value.monthkey]['1']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['2']}}-color\">{{attendances[subject.subjectID][value.monthkey]['2']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['3']}}-color\">{{attendances[subject.subjectID][value.monthkey]['3']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['4']}}-color\">{{attendances[subject.subjectID][value.monthkey]['4']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['5']}}-color\">{{attendances[subject.subjectID][value.monthkey]['5']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['6']}}-color\">{{attendances[subject.subjectID][value.monthkey]['6']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['7']}}-color\">{{attendances[subject.subjectID][value.monthkey]['7']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['8']}}-color\">{{attendances[subject.subjectID][value.monthkey]['8']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['9']}}-color\">{{attendances[subject.subjectID][value.monthkey]['9']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['10']}}-color\">{{attendances[subject.subjectID][value.monthkey]['10']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['11']}}-color\">{{attendances[subject.subjectID][value.monthkey]['11']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['12']}}-color\">{{attendances[subject.subjectID][value.monthkey]['12']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['13']}}-color\">{{attendances[subject.subjectID][value.monthkey]['13']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['14']}}-color\">{{attendances[subject.subjectID][value.monthkey]['14']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['15']}}-color\">{{attendances[subject.subjectID][value.monthkey]['15']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['16']}}-color\">{{attendances[subject.subjectID][value.monthkey]['16']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['17']}}-color\">{{attendances[subject.subjectID][value.monthkey]['17']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['18']}}-color\">{{attendances[subject.subjectID][value.monthkey]['18']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['19']}}-color\">{{attendances[subject.subjectID][value.monthkey]['19']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['20']}}-color\">{{attendances[subject.subjectID][value.monthkey]['20']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['21']}}-color\">{{attendances[subject.subjectID][value.monthkey]['21']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['22']}}-color\">{{attendances[subject.subjectID][value.monthkey]['22']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['23']}}-color\">{{attendances[subject.subjectID][value.monthkey]['23']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['24']}}-color\">{{attendances[subject.subjectID][value.monthkey]['24']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['25']}}-color\">{{attendances[subject.subjectID][value.monthkey]['25']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['26']}}-color\">{{attendances[subject.subjectID][value.monthkey]['26']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['27']}}-color\">{{attendances[subject.subjectID][value.monthkey]['27']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['28']}}-color\">{{attendances[subject.subjectID][value.monthkey]['28']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['29']}}-color\">{{attendances[subject.subjectID][value.monthkey]['29']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['30']}}-color\">{{attendances[subject.subjectID][value.monthkey]['30']}}</td>\n              <td class=\"{{attendances[subject.subjectID][value.monthkey]['31']}}-color\">{{attendances[subject.subjectID][value.monthkey]['31']}}</td>\n            </tr>\n            </tbody>\n          </table>\n          <div align=\"center\">\n            <p>{{language?.sattendance_total_holiday}}: {{totalcount[subject.subjectID].totalholiday}}, {{language?.sattendance_total_weekenday}}: {{totalcount[subject.subjectID].totalweekend}}, {{language?.sattendance_total_present}}: {{totalcount[subject.subjectID].totalpresent}}, {{language?.sattendance_total_absent}}: {{totalcount[subject.subjectID].totalabsent}}, {{language?.sattendance_total_late}}: {{totalcount[subject.subjectID].totallate}}, {{language?.sattendance_total_leaveday}}: {{totalcount[subject.subjectID].totalleave}}</p>\n          </div>\n        </div>\n      </ion-card>\n  </ng-container>\n  <ng-container  *ngIf=\"attendanceType == 'day'\">\n      <ion-card class=\"card-bg\">\n        <ion-card-header class=\"card-header1\">\n          <span style=\"font-weight: bold;\">{{language?.sattendance_day}} {{language?.sattendance_attendance}}</span>\n        </ion-card-header>\n        <div style=\"overflow-x:scroll;\">\n          <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let value of attendancesMonth;\">\n              <td >{{value.monthname}}</td>\n              <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n              <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n              <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n              <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n              <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n              <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n              <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n              <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n              <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n              <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n              <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n              <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n              <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n              <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n              <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n              <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n              <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n              <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n              <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n              <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n              <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n              <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n              <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n              <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n              <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n              <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n              <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n              <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n              <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n              <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n              <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n            </tr>\n            </tbody>\n          </table>\n          <div align=\"center\">\n            <p>{{language?.sattendance_total_holiday}}: {{totalcount.totalholiday}}, {{language?.sattendance_total_weekenday}}: {{totalcount.totalweekend}}, {{language?.sattendance_total_present}}: {{totalcount.totalpresent}}, {{language?.sattendance_total_absent}}: {{totalcount.totalabsent}}, {{language?.sattendance_total_late}}: {{totalcount.totallate}}, {{language?.sattendance_total_leaveday}}: {{totalcount.totalleave}}</p>\n          </div>\n        </div>\n      </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/attendance/sattendance/sattendance.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/attendance/sattendance/sattendance.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffff; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffff; }\n\n.ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.relative-card {\n  position: relative;\n  bottom: 45px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background:#1D223a;\n  color: #ffffff; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 12px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.p-text-p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text-h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS9zYXR0ZW5kYW5jZS9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhdHRlbmRhbmNlXFxzYXR0ZW5kYW5jZVxcc2F0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFLZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUliO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSw4QkFBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQWEsRUFBQTs7QUFFZjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQkFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS9zYXR0ZW5kYW5jZS9zYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnN0dWRlbnQtaW1ne1xuICB3aWR0aDo4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jYXJkLXN0dWRlbnQtY3NzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYmctY2xhc3N7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZjtcbn1cbi5pb24tdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmY7XG59XG5cblxuXG4uaW9uLWNvbnRlbnQtY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pb24tY2FyZC1jc3Mge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtcm91dGluZS1kaXYge1xuICBtYXJnaW46IDhweDtcbn1cblxuXG4uaW9uLWNvbnRlbnQtY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kaXYtb3ZlcmZsb3ctY3NzIHtcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XG59XG4uZGl2LW1hcmdpbi1jc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmlvbi1jYXJkLXNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24taWNvbi1jc3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW9uLWNhcmQtY3NzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLXJvdXRpbmUtZGl2IHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5iZy1jbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0NXB4O1xufVxuXG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXIxe1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW1nMntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5pb25ub3Rle1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5yb3cgcCB7XG4gIGNvbG9yOmJsYWNrO1xufVxuLml0ZW17XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XG59XG4uaXRlbS1wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VybmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oZWRkaW5ne1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuLnAtdGV4dC1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wLXRleHQtaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cblxuLmF0dGVuZGFuY2VfdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjMjMyYTJmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG59XG5cbi5hdHRlbmRhbmNlX3RhYmxlIHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6ICMyMzJhMmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLlAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5BLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi5XLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5ILWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4uTC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4uTkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cblxuLnAtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWViMTcxICFpbXBvcnRhbnQ7XG59XG5cbi5hLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2U4NzM3ZSFpbXBvcnRhbnQ7XG59XG5cbi53LWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzVmYmZjZSFpbXBvcnRhbnQ7XG59XG5cbi5oLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzZhOTRjMSFpbXBvcnRhbnQ7XG59XG4ubC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYhaW1wb3J0YW50O1xufVxuXG4ubmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjOGNiMGQwIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/attendance/sattendance/sattendance.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/attendance/sattendance/sattendance.page.ts ***!
  \******************************************************************/
/*! exports provided: SattendancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SattendancePage", function() { return SattendancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/attendance/attendance.service */ "./src/app/service/attendance/attendance.service.ts");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");










var SattendancePage = /** @class */ (function () {
    function SattendancePage(router, route, attendanceService, network, toastCtrl, loadingCtrl, alertCtrl, menuCtrl, storage, langandpermissionService, classService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.attendanceService = attendanceService;
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
        this.isLoaded = false;
        this.isRefresh = true;
        this.Profile();
        this.getStudentClasses();
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_9__["fileUrl"];
        setTimeout(function () {
            _this.isLoaded = true;
        }, 3000);
    }
    SattendancePage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    SattendancePage.prototype.ngOnInit = function () { };
    SattendancePage.prototype.presentToast = function () {
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
    SattendancePage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    SattendancePage.prototype.doRefresh = function (event, boolean, classID) {
        var _this = this;
        this.attendanceService.getSattendance(classID, boolean, null, null)
            .then(function (data) {
            _this.isRefresh = true;
            console.log(data);
            _this.students = data.students;
            _this.isLoaded = true;
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    SattendancePage.prototype.getSattendanceView = function (studentID, classID) {
        this.router.navigate(['/sattendanceview', studentID, classID]);
    };
    SattendancePage.prototype.selectedClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.classID = this.selectedClass;
        if (this.classID) {
            this.attendanceService.getSattendance(this.classID, false, null, null)
                .then(function (data) {
                _this.students = data.students;
            });
            this.langandpermissionService.getLangandPermissionCall(false, 'sattendance')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
        }
    };
    SattendancePage.prototype.getStudentClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.langandpermissionService.getLangandPermissionCall(false, 'sattendance')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            if (_this.loginuser.usertypeID == 3) {
                _this.attendanceService.getSattendance(null, false, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.sattendance_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                        _this.attendanceType = data.attendanceType;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.subjects = data.subjects;
                        _this.studentprofile = data.student;
                        _this.usertype = data.usertype;
                    }
                    else {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    }
                });
            }
            else {
                _this.attendanceService.getSattendance(null, false, null, null)
                    .then(function (data) {
                    _this.classes = data.classes;
                    _this.students = data.students;
                });
            }
        });
    };
    SattendancePage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.langandpermissionService.getLangandPermissionCall(value, 'sattendance')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            if (_this.loginuser.usertypeID == 3) {
                _this.attendanceService.getSattendance(null, value, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.sattendance_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 3 && _this.myProfile) {
                        _this.attendanceType = data.attendanceType;
                        _this.attendances = data.attendance;
                        _this.totalcount = data.totalcount;
                        _this.attendancesMonth = data.attendancesmonths;
                        _this.subjects = data.subjects;
                        _this.studentprofile = data.student;
                        _this.usertype = data.usertype;
                    }
                    else {
                        _this.classes = data.classes;
                        _this.students = data.students;
                    }
                });
            }
            else {
                _this.attendanceService.getSattendance(null, false, null, null)
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
    SattendancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sattendance',
            template: __webpack_require__(/*! ./sattendance.page.html */ "./src/app/pages/attendance/sattendance/sattendance.page.html"),
            styles: [__webpack_require__(/*! ./sattendance.page.scss */ "./src/app/pages/attendance/sattendance/sattendance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_3__["AttendanceService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]])
    ], SattendancePage);
    return SattendancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-attendance-sattendance-sattendance-module.js.map