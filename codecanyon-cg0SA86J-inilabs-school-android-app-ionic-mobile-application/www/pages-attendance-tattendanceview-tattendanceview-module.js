(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-attendance-tattendanceview-tattendanceview-module"],{

/***/ "./src/app/pages/attendance/tattendanceview/tattendanceview.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendance/tattendanceview/tattendanceview.module.ts ***!
  \****************************************************************************/
/*! exports provided: TattendanceviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TattendanceviewPageModule", function() { return TattendanceviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tattendanceview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tattendanceview.page */ "./src/app/pages/attendance/tattendanceview/tattendanceview.page.ts");







var routes = [
    {
        path: '',
        component: _tattendanceview_page__WEBPACK_IMPORTED_MODULE_6__["TattendanceviewPage"]
    }
];
var TattendanceviewPageModule = /** @class */ (function () {
    function TattendanceviewPageModule() {
    }
    TattendanceviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tattendanceview_page__WEBPACK_IMPORTED_MODULE_6__["TattendanceviewPage"]]
        })
    ], TattendanceviewPageModule);
    return TattendanceviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/attendance/tattendanceview/tattendanceview.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendance/tattendanceview/tattendanceview.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,teacherID)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"imgcard\" align=\"center\" *ngIf=\"teacherprofile\">\n        <img  color=\"secondary\" *ngIf=\"teacherprofile\" src=\"{{siteUrl}}uploads/images/{{teacherprofile?.photo}}\" class=\"img2\" align=\"center\">\n    </div>\n    <ng-container  *ngIf=\"teacherprofile\">\n            <ion-card  class=\"card-bg\">\n                <ion-card-header class=\"card-header1\">\n                    <span style=\"font-weight: bold;\">{{language?.tattendance_attendance}}</span>\n                </ion-card-header>\n                <div style=\"overflow-x:scroll;\">\n                    <table cellpadding=\"2\" cellspacing=\"2\" class=\"attendance_table\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let value of attendancesMonth;\">\n                            <td >{{value.monthname}}</td>\n                            <td class=\"{{attendances[value.monthkey]['1']}}-color\">{{attendances[value.monthkey]['1']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['2']}}-color\">{{attendances[value.monthkey]['2']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['3']}}-color\">{{attendances[value.monthkey]['3']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['4']}}-color\">{{attendances[value.monthkey]['4']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['5']}}-color\">{{attendances[value.monthkey]['5']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['6']}}-color\">{{attendances[value.monthkey]['6']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['7']}}-color\">{{attendances[value.monthkey]['7']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['8']}}-color\">{{attendances[value.monthkey]['8']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['9']}}-color\">{{attendances[value.monthkey]['9']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['10']}}-color\">{{attendances[value.monthkey]['10']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['11']}}-color\">{{attendances[value.monthkey]['11']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['12']}}-color\">{{attendances[value.monthkey]['12']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['13']}}-color\">{{attendances[value.monthkey]['13']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['14']}}-color\">{{attendances[value.monthkey]['14']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['15']}}-color\">{{attendances[value.monthkey]['15']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['16']}}-color\">{{attendances[value.monthkey]['16']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['17']}}-color\">{{attendances[value.monthkey]['17']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['18']}}-color\">{{attendances[value.monthkey]['18']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['19']}}-color\">{{attendances[value.monthkey]['19']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['20']}}-color\">{{attendances[value.monthkey]['20']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['21']}}-color\">{{attendances[value.monthkey]['21']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['22']}}-color\">{{attendances[value.monthkey]['22']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['23']}}-color\">{{attendances[value.monthkey]['23']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['24']}}-color\">{{attendances[value.monthkey]['24']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['25']}}-color\">{{attendances[value.monthkey]['25']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['26']}}-color\">{{attendances[value.monthkey]['26']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['27']}}-color\">{{attendances[value.monthkey]['27']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['28']}}-color\">{{attendances[value.monthkey]['28']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['29']}}-color\">{{attendances[value.monthkey]['29']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['30']}}-color\">{{attendances[value.monthkey]['30']}}</td>\n                            <td class=\"{{attendances[value.monthkey]['31']}}-color\">{{attendances[value.monthkey]['31']}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <div align=\"center\">\n                        <p>{{language?.tattendance_total_holiday}}: {{totalcount?.totalholiday}}, {{language?.tattendance_total_weekenday}}: {{totalcount?.totalweekend}}, {{language?.tattendance_total_present}}: {{totalcount?.totalpresent}}, {{language?.tattendance_total_absent}}: {{totalcount?.totalabsent}}, {{language?.tattendance_total_late}}: {{totalcount?.totallate}}, {{language?.tattendance_total_leaveday}}: {{totalcount?.totalleave}}</p>\n                    </div>\n                </div>\n            </ion-card>\n    </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/attendance/tattendanceview/tattendanceview.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendance/tattendanceview/tattendanceview.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-content-css {\n  width: 100%;\n  height: 100%; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-routine-div {\n  margin: 8px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000;\n  line-height: 0px; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.attendance_table {\n  width: 100%; }\n\n.attendance_table tr th {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  color: #232a2f;\n  font-weight: 400;\n  padding: 10px 14px; }\n\n.attendance_table tr td {\n  text-align: center;\n  border: 0.1px solid #ddd;\n  padding: 10px 14px;\n  color: #232a2f !important;\n  margin-top: 1px; }\n\n.P-color {\n  background: #5eb171 !important; }\n\n.A-color {\n  background: #e8737e !important; }\n\n.W-color {\n  background: #5fbfce !important; }\n\n.H-color {\n  background: #6a94c1 !important; }\n\n.L-color {\n  background: #7044ff !important; }\n\n.NA-color {\n  background: #8cb0d0 !important; }\n\n.p-color {\n  background: #5eb171 !important; }\n\n.a-color {\n  background: #e8737e !important; }\n\n.w-color {\n  background: #5fbfce !important; }\n\n.h-color {\n  background: #6a94c1 !important; }\n\n.l-color {\n  background: #7044ff !important; }\n\n.na-color {\n  background: #8cb0d0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS90YXR0ZW5kYW5jZXZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYXR0ZW5kYW5jZVxcdGF0dGVuZGFuY2V2aWV3XFx0YXR0ZW5kYW5jZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBSWI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQWEsRUFBQTs7QUFFZjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS90YXR0ZW5kYW5jZXZpZXcvdGF0dGVuZGFuY2V2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1jb250ZW50LWNzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmlvbi1jYXJkLWNzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1yb3V0aW5lLWRpdiB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG5cbi5pb24taXRlbS1jc3N7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIHRleHQtYWxpZ246c3RhcnQ7XG59XG5cbi50ZXh0LWgge1xuICBmb250LXNpemU6MTdweDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4ucmVsYXRpdmUtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG59XG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uY2FyZC1oZWFkZXIxe1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLmNhcmQtaGVhZGVyMntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uaW1nMntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5pb25ub3Rle1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5yb3cgcCB7XG4gIGNvbG9yOmJsYWNrO1xufVxuLml0ZW17XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XG59XG4uaXRlbS1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VybmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oZWRkaW5ne1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYXR0ZW5kYW5jZV90YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xcHggc29saWQgI2RkZDtcbiAgY29sb3I6ICMyMzJhMmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbn1cblxuLmF0dGVuZGFuY2VfdGFibGUgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBjb2xvcjogIzIzMmEyZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uUC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcbn1cblxuLkEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg3MzdlIWltcG9ydGFudDtcbn1cblxuLlctY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcbn1cblxuLkgtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcbn1cbi5MLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XG59XG5cbi5OQS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM4Y2IwZDAhaW1wb3J0YW50O1xufVxuXG4ucC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM1ZWIxNzEgIWltcG9ydGFudDtcbn1cblxuLmEtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg3MzdlIWltcG9ydGFudDtcbn1cblxuLnctY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNWZiZmNlIWltcG9ydGFudDtcbn1cblxuLmgtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjNmE5NGMxIWltcG9ydGFudDtcbn1cbi5sLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiFpbXBvcnRhbnQ7XG59XG5cbi5uYS1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM4Y2IwZDAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/attendance/tattendanceview/tattendanceview.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/attendance/tattendanceview/tattendanceview.page.ts ***!
  \**************************************************************************/
/*! exports provided: TattendanceviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TattendanceviewPage", function() { return TattendanceviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/attendance/attendance.service */ "./src/app/service/attendance/attendance.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var TattendanceviewPage = /** @class */ (function () {
    function TattendanceviewPage(attendanceService, network, toastCtrl, langandpermissionService, route) {
        this.attendanceService = attendanceService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    TattendanceviewPage.prototype.ngOnInit = function () {
        this.teacherID = this.route.snapshot.paramMap.get('teacherID');
        this.doRefreshProfile(false, false, this.teacherID);
    };
    TattendanceviewPage.prototype.presentToast = function () {
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
    TattendanceviewPage.prototype.doRefreshProfile = function (event, value, teacherID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.attendanceService.getTattendanceView(value, teacherID)
            .then(function (data) {
            _this.attendances = data.attendance;
            _this.totalcount = data.totalcount;
            _this.attendancesMonth = data.attendancesmonths;
            _this.teacherprofile = data.teacher;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'tattendance')
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
    TattendanceviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tattendanceview',
            template: __webpack_require__(/*! ./tattendanceview.page.html */ "./src/app/pages/attendance/tattendanceview/tattendanceview.page.html"),
            styles: [__webpack_require__(/*! ./tattendanceview.page.scss */ "./src/app/pages/attendance/tattendanceview/tattendanceview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_2__["AttendanceService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_3__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TattendanceviewPage);
    return TattendanceviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-attendance-tattendanceview-tattendanceview-module.js.map