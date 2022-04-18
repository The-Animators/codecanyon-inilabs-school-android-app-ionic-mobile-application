(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-attendance-sattendanceview-sattendanceview-module"],{

/***/ "./src/app/pages/attendance/sattendanceview/sattendanceview.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceview/sattendanceview.module.ts ***!
  \****************************************************************************/
/*! exports provided: SattendanceviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SattendanceviewPageModule", function() { return SattendanceviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sattendanceview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sattendanceview.page */ "./src/app/pages/attendance/sattendanceview/sattendanceview.page.ts");







var routes = [
    {
        path: '',
        component: _sattendanceview_page__WEBPACK_IMPORTED_MODULE_6__["SattendanceviewPage"]
    }
];
var SattendanceviewPageModule = /** @class */ (function () {
    function SattendanceviewPageModule() {
    }
    SattendanceviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sattendanceview_page__WEBPACK_IMPORTED_MODULE_6__["SattendanceviewPage"]]
        })
    ], SattendanceviewPageModule);
    return SattendanceviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/attendance/sattendanceview/sattendanceview.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceview/sattendanceview.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,studentID, classID)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n        <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n    </div>\n    <ng-container  *ngIf=\"attendanceType == 'subject'\">\n            <ion-card *ngFor=\"let subject of subjects; let i = index\" class=\"card-bg\">\n                <ng-container *ngIf=\"i == 0\">\n                    <ion-card-header class=\"card-header1\">\n                        <span style=\"font-weight: bold;\"> {{subject.subject}} {{language?.sattendance_attendance}}</span>\n                    </ion-card-header>\n                </ng-container>\n                <ng-container *ngIf=\"i !=0\">\n                    <ion-card-header class=\"card-header\">\n                        <span style=\"font-weight: bold;\"> {{subject.subject}} {{language?.sattendance_attendance}}</span>\n                    </ion-card-header>\n                </ng-container>\n\n                <div style=\"overflow-x:scroll;\">\n                    <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let value of attendancesMonth;\">\n                            <td >{{value.monthname}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['1']}}-color\">{{attendances[subject.subjectID][value.monthkey]['1']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['2']}}-color\">{{attendances[subject.subjectID][value.monthkey]['2']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['3']}}-color\">{{attendances[subject.subjectID][value.monthkey]['3']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['4']}}-color\">{{attendances[subject.subjectID][value.monthkey]['4']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['5']}}-color\">{{attendances[subject.subjectID][value.monthkey]['5']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['6']}}-color\">{{attendances[subject.subjectID][value.monthkey]['6']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['7']}}-color\">{{attendances[subject.subjectID][value.monthkey]['7']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['8']}}-color\">{{attendances[subject.subjectID][value.monthkey]['8']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['9']}}-color\">{{attendances[subject.subjectID][value.monthkey]['9']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['10']}}-color\">{{attendances[subject.subjectID][value.monthkey]['10']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['11']}}-color\">{{attendances[subject.subjectID][value.monthkey]['11']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['12']}}-color\">{{attendances[subject.subjectID][value.monthkey]['12']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['13']}}-color\">{{attendances[subject.subjectID][value.monthkey]['13']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['14']}}-color\">{{attendances[subject.subjectID][value.monthkey]['14']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['15']}}-color\">{{attendances[subject.subjectID][value.monthkey]['15']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['16']}}-color\">{{attendances[subject.subjectID][value.monthkey]['16']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['17']}}-color\">{{attendances[subject.subjectID][value.monthkey]['17']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['18']}}-color\">{{attendances[subject.subjectID][value.monthkey]['18']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['19']}}-color\">{{attendances[subject.subjectID][value.monthkey]['19']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['20']}}-color\">{{attendances[subject.subjectID][value.monthkey]['20']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['21']}}-color\">{{attendances[subject.subjectID][value.monthkey]['21']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['22']}}-color\">{{attendances[subject.subjectID][value.monthkey]['22']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['23']}}-color\">{{attendances[subject.subjectID][value.monthkey]['23']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['24']}}-color\">{{attendances[subject.subjectID][value.monthkey]['24']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['25']}}-color\">{{attendances[subject.subjectID][value.monthkey]['25']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['26']}}-color\">{{attendances[subject.subjectID][value.monthkey]['26']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['27']}}-color\">{{attendances[subject.subjectID][value.monthkey]['27']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['28']}}-color\">{{attendances[subject.subjectID][value.monthkey]['28']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['29']}}-color\">{{attendances[subject.subjectID][value.monthkey]['29']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['30']}}-color\">{{attendances[subject.subjectID][value.monthkey]['30']}}</td>\n                            <td class=\"{{attendances[subject.subjectID][value.monthkey]['31']}}-color\">{{attendances[subject.subjectID][value.monthkey]['31']}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <div align=\"center\">\n                        <p>{{language?.sattendance_total_holiday}}: {{totalcount[subject.subjectID].totalholiday}}, {{language?.sattendance_total_weekenday}}: {{totalcount[subject.subjectID].totalweekend}}, {{language?.sattendance_total_present}}: {{totalcount[subject.subjectID].totalpresent}}, {{language?.sattendance_total_absent}}: {{totalcount[subject.subjectID].totalabsent}}, {{language?.sattendance_total_late}}: {{totalcount[subject.subjectID].totallate}}, {{language?.sattendance_total_leaveday}}: {{totalcount[subject.subjectID].totalleave}}</p>\n                    </div>\n                </div>\n            </ion-card>\n    </ng-container>\n    <ng-container  *ngIf=\"attendanceType == 'day'\">\n            <ion-card  class=\"card-bg\">\n                <ion-card-header class=\"card-header1\">\n                    <span style=\"font-weight: bold;\">{{language?.sattendance_day}} {{language?.sattendance_attendance}}</span>\n                </ion-card-header>\n                <div style=\"overflow-x:scroll;\">\n                    <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let value of attendancesMonth;\">\n                            <td >{{value.monthname}}</td>\n                            <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <div align=\"center\">\n                        <p>{{language?.sattendance_total_holiday}}: {{totalcount.totalholiday}}, {{language?.sattendance_total_weekenday}}: {{totalcount.totalweekend}}, {{language?.sattendance_total_present}}: {{totalcount.totalpresent}}, {{language?.sattendance_total_absent}}: {{totalcount.totalabsent}}, {{language?.sattendance_total_late}}: {{totalcount.totallate}}, {{language?.sattendance_total_leaveday}}: {{totalcount.totalleave}}</p>\n                    </div>\n                </div>\n            </ion-card>\n    </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/attendance/sattendanceview/sattendanceview.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceview/sattendanceview.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.invoice-header {\n  background-color: #1D223a;\n  color: #ffffff; }\n\n.routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\n.card-routine {\n  --background: #1D223a !important;\n  margin-top: 20px;\n  border-radius: 15px; }\n\n.card-routine .text-color-h {\n  text-align: start;\n  font-size: 20px;\n  font-weight: bold;\n  color: #ffffff;\n  margin: 0px; }\n\n.card-routine .text-color-p {\n  text-align: start;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: 0px; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS9zYXR0ZW5kYW5jZXZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYXR0ZW5kYW5jZVxcc2F0dGVuZGFuY2V2aWV3XFxzYXR0ZW5kYW5jZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSw4QkFBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQWE7RUFDYixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUF5QjtFQUFDLGNBQWMsRUFBQTs7QUFHMUM7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQ0FBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVSxFQUFBOztBQUVaO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsWUFBWTtFQUNaLFdBQVUsRUFBQTs7QUFJWjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS9zYXR0ZW5kYW5jZXZpZXcvc2F0dGVuZGFuY2V2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY29udGVudC1jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpdi1vdmVyZmxvdy1jc3Mge1xuICBvdmVyZmxvdy14OnNjcm9sbDtcbn1cbi5kaXYtbWFyZ2luLWNzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaW9uLWNhcmQtc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmlvbi1pY29uLWNzcyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5pb24tY2FyZC1jc3Mge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtcm91dGluZS1kaXYge1xuICBtYXJnaW46IDhweDtcbn1cblxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcblxufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW1nMntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5pb25ub3Rle1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5yb3cgcCB7XG4gIGNvbG9yOmJsYWNrO1xufVxuLml0ZW17XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XG59XG4uaXRlbS1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VybmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oZWRkaW5ne1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW52b2ljZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5YWEyO2NvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3ViamVjdC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cbi5yb3V0aW5lLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91dGluZS1oZWFkZXIgcHtcbiAgbWFyZ2luOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1yb3V0aW5le1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2EgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jYXJkLXJvdXRpbmUgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46MHB4O1xufVxuLmNhcmQtcm91dGluZSAudGV4dC1jb2xvci1wIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6MTAwJTtcbn1cblxuXG4uYXR0ZW5kYW5jZV90YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xcHggc29saWQgI2RkZDtcbiAgY29sb3I6ICMyMzJhMmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbn1cblxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBjb2xvcjogIzIzMmEyZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uUC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcbn1cblxuLkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg3MzdlIWltcG9ydGFudDtcbn1cblxuLlctY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcbn1cblxuLkgtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcbn1cbi5MLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XG59XG5cbi5OQS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM4Y2IwZDAhaW1wb3J0YW50O1xufVxuXG4ucC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcbn1cblxuLmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg3MzdlIWltcG9ydGFudDtcbn1cblxuLnctY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcbn1cblxuLmgtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcbn1cbi5sLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XG59XG5cbi5uYS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM4Y2IwZDAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/attendance/sattendanceview/sattendanceview.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceview/sattendanceview.page.ts ***!
  \**************************************************************************/
/*! exports provided: SattendanceviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SattendanceviewPage", function() { return SattendanceviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/attendance/attendance.service */ "./src/app/service/attendance/attendance.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var SattendanceviewPage = /** @class */ (function () {
    function SattendanceviewPage(attendanceService, network, toastCtrl, langandpermissionService, route) {
        this.attendanceService = attendanceService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    SattendanceviewPage.prototype.ngOnInit = function () {
        this.getSattendanceView();
    };
    SattendanceviewPage.prototype.presentToast = function () {
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
    SattendanceviewPage.prototype.doRefreshProfile = function (event, boolean, studentID, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            if (studentID && classID) {
                this.attendanceService.getSattendanceView(studentID, classID, boolean)
                    .then(function (data) {
                    _this.attendanceType = data.attendanceType;
                    _this.attendances = data.attendance;
                    _this.totalcount = data.totalcount;
                    _this.attendancesMonth = data.attendancesmonths;
                    _this.subjects = data.subjects;
                    _this.studentprofile = data.student;
                    _this.usertype = data.usertype;
                });
            }
            this.langandpermissionService.getLangandPermissionCall(boolean, 'sattendance')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
        }
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    SattendanceviewPage.prototype.getSattendanceView = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.studentID = this.route.snapshot.paramMap.get('studentID');
        this.classID = this.route.snapshot.paramMap.get('classID');
        this.attendanceService.getSattendanceView(this.studentID, this.classID, false)
            .then(function (data) {
            _this.attendanceType = data.attendanceType;
            _this.attendances = data.attendance;
            _this.totalcount = data.totalcount;
            _this.attendancesMonth = data.attendancesmonths;
            _this.subjects = data.subjects;
            _this.studentprofile = data.student;
            _this.usertype = data.usertype;
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'sattendance')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
        });
    };
    SattendanceviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sattendanceview',
            template: __webpack_require__(/*! ./sattendanceview.page.html */ "./src/app/pages/attendance/sattendanceview/sattendanceview.page.html"),
            styles: [__webpack_require__(/*! ./sattendanceview.page.scss */ "./src/app/pages/attendance/sattendanceview/sattendanceview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_3__["AttendanceService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SattendanceviewPage);
    return SattendanceviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-attendance-sattendanceview-sattendanceview-module.js.map