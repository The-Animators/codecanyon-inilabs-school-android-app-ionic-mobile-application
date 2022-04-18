(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mark-markview-markview-module"],{

/***/ "./src/app/pages/mark/markview/markview.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/mark/markview/markview.module.ts ***!
  \********************************************************/
/*! exports provided: MarkviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkviewPageModule", function() { return MarkviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _markview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markview.page */ "./src/app/pages/mark/markview/markview.page.ts");







var routes = [
    {
        path: '',
        component: _markview_page__WEBPACK_IMPORTED_MODULE_6__["MarkviewPage"]
    }
];
var MarkviewPageModule = /** @class */ (function () {
    function MarkviewPageModule() {
    }
    MarkviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_markview_page__WEBPACK_IMPORTED_MODULE_6__["MarkviewPage"]]
        })
    ], MarkviewPageModule);
    return MarkviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mark/markview/markview.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/mark/markview/markview.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true,studentID, classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"studentprofile\">\n    <img  color=\"secondary\" *ngIf=\"studentprofile\" src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"marksettings\">\n    <ion-card class=\"card-bg\" *ngFor=\"let markE of objectKeys(marksettings)\">\n      <ion-card-header class=\"card-header\">\n        <span style=\"font-weight: bold\">{{exams[markE]}}</span>\n      </ion-card-header>\n      <div style=\"overflow-x:scroll;\">\n        <table class=\"table table-striped table-bordered\">\n          <thead>\n          <tr>\n            <th class=\"text-center\" rowspan=\"2\" style=\"background-color:#1D223a;color:#fff;\">{{language?.mark_subject}}</th>\n            <th colspan=\"2\" class=\" text-center\" style=\"background-color:#1D223a;color:#fff;\" *ngFor=\"let markpercentage of marksettings[markE]?.markpercentageKey\">{{markpercentages[markpercentage]?.markpercentagetype}}</th>\n            <th colspan=\"3\" class=\"text-center \" style=\"background-color:#1D223a;color:#fff;\">{{language?.mark_total}}</th>\n          </tr>\n          <tr>\n            <ng-container *ngFor=\"let markpercentage of marksettings[markE]?.markpercentageKey\">\n              <th class=\"bg-sky text-center \">{{language?.mark_obtained_mark}}</th>\n              <th class=\"bg-sky-light text-center\" data-title=\"Highest Mark\">{{language?.mark_highest_mark}}</th>\n            </ng-container>\n            <th class=\"bg-sky-total text-center\" style=\"background-color: #6a94c1\">{{language?.mark_mark}}</th>\n            <th class=\"bg-purple-shipu text-center\" data-title=\"Point\" style=\"background-color: #5eb171\">{{language?.mark_point}}</th>\n            <th class=\"bg-sky-total-grade text-center\" data-title=\"Grade\" style=\"background-color: #5fbfce\">{{language?.mark_grade}}</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let subjectkey of marksettings[markE].subjectKeys\">\n            <td class=\"text-black\" data-title=\"Subject\">{{subjects[subjectkey].subject}}</td>\n            <ng-container *ngFor=\"let markpercentage of marksettings[markE].markpercentageKey\">\n              <ng-container *ngIf=\"marksettings[markE][subjectkey]['own'][markpercentage] == markpercentage;else other_content\">\n                <ng-container *ngIf=\"marks[markE][subjectkey];else mark_content\">\n                  <td class=\"text-black\" data-title=\"Mark\" >{{marks[markE][subjectkey][markpercentage]}}</td>\n                </ng-container>\n                <ng-template #mark_content>\n                  <td class=\"text-black\" data-title=\"Mark\" >N/A</td>\n                </ng-template>\n                <td class=\"text-black\" data-title=\"Highest Mark\">{{highestmarks[markE][subjectkey][markpercentage]}}</td>\n              </ng-container>\n\n              <ng-template #other_content>\n                <td class=\"text-black\" data-title=\"Mark\"></td>\n                <td class=\"text-black\" data-title=\"Highest Mark\"></td>\n              </ng-template>\n            </ng-container>\n            <ng-container *ngIf=\"marksettings[markE][subjectkey].totalSumMark && marksettings[markE][subjectkey].gradepoint && marksettings[markE][subjectkey].grade;else tgg_mark\">\n              <td class=\"text-black\" data-title=\"Mark\">{{marksettings[markE][subjectkey].totalSumMark}}</td>\n              <td class=\"text-black\" data-title=\"Point\">{{marksettings[markE][subjectkey].gradepoint}}</td>\n              <td class=\"text-black\" data-title=\"Grade\">{{marksettings[markE][subjectkey].grade}}</td>\n            </ng-container>\n            <ng-template #tgg_mark>\n              <td class=\"text-black\" data-title=\"Mark\">{{totalSumpoint}}</td>\n              <td class=\"text-black\" data-title=\"Point\">{{totalSumpoint.toFixed(2)}}</td>\n              <ng-container *ngFor=\"let gread of grades\">\n                <td class=\"text-black\" data-title=\"Grade\" *ngIf=\"gread.gradefrom == 0\">{{gread.grade}}</td>\n              </ng-container>\n            </ng-template>\n\n          </tr>\n          </tbody>\n        </table>\n        <div class=\"box-footer\" style=\"padding-left:0px;\">\n          <p class=\"text-black\" style=\"margin-top: 17px; width: max-content;\">&nbsp;&nbsp;{{language?.mark_total_marks}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalSubjectMarks}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{language?.mark_total_obtained_marks}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalExamMarks}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{language?.mark_total_average_marks}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalAverageMarks}} </span> <br> &nbsp;&nbsp;{{language?.mark_total_average_marks_percetage}} : <span class=\"text-red text-bold\">{{marksettings[markE].greadAverageMarks}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{language?.mark_gpa}} : <span class=\"text-red text-bold\">{{marksettings[markE].totalAveragegpa}}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n        </div>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/mark/markview/markview.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/mark/markview/markview.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  text-align: center; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background:#1D223a;\n  color: #ffffff; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item p {\n  font-size: 12px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.table-bordered {\n  border: 1px solid #E2E7EB; }\n\n.table-bordered > thead > tr > th {\n  border-bottom-width: 2px;\n  color: #1A2229;\n  font-weight: 300; }\n\n.table-bordered > tbody > tr > td {\n  color: #707070; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd; }\n\n.table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #F0F3F5; }\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.bg-sky {\n  background-color: #5fbfce; }\n\n.text-center {\n  text-align: center; }\n\n.text-black {\n  color: #222222 !important; }\n\n.text-bold, .text-bold.table td, .text-bold.table th {\n  font-weight: 700; }\n\n.text-red {\n  color: #f56954 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFyay9tYXJrdmlldy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxtYXJrXFxtYXJrdmlld1xcbWFya3ZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBTXJCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQkFBYTtFQUNiLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBS2I7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCOztFQUVFLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCOzs7Ozs7RUFNRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCLEVBQUE7O0FBRS9COzs7Ozs7RUFNRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmsvbWFya3ZpZXcvbWFya3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1nY2FyZHtcbiAgbWFyZ2luOiAgMTBweDtcbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1cblxuXG5cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uY2FyZC1oZWFkZXIye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cblxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTdFQjtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgY29sb3I6ICMxQTIyMjk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQge1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCxcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1jb2xvcjogI0UyRTdFQjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQsXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXG4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0ZCwgLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xufVxuLnRhYmxlPnRoZWFkPnRyPnRoIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG59XG4udGFibGU+dGhlYWQ+dHI+dGgsXG4udGFibGU+dGJvZHk+dHI+dGgsXG4udGFibGU+dGZvb3Q+dHI+dGgsXG4udGFibGU+dGhlYWQ+dHI+dGQsXG4udGFibGU+dGJvZHk+dHI+dGQsXG4udGFibGU+dGZvb3Q+dHI+dGQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4uYmctc2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmYmZjZTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYm9sZCwgLnRleHQtYm9sZC50YWJsZSB0ZCwgLnRleHQtYm9sZC50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjZjU2OTU0ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/mark/markview/markview.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/mark/markview/markview.page.ts ***!
  \******************************************************/
/*! exports provided: MarkviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkviewPage", function() { return MarkviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_mark_mark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/mark/mark.service */ "./src/app/service/mark/mark.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var MarkviewPage = /** @class */ (function () {
    function MarkviewPage(markService, langandpermissionService, route, network, toastCtrl) {
        this.markService = markService;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.objectKeys = Object.keys;
        this.totalSumpoint = 0;
        this.isRefresh = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    MarkviewPage.prototype.ngOnInit = function () {
        this.classID = this.route.snapshot.paramMap.get('classID');
        this.studentID = this.route.snapshot.paramMap.get('studentID');
        this.doRefreshProfile(false, false, this.studentID, this.classID);
    };
    MarkviewPage.prototype.presentToast = function () {
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
    MarkviewPage.prototype.doRefreshProfile = function (event, value, studentID, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        if (studentID && classID) {
            this.markService.getMarkListView(studentID, classID, value)
                .then(function (data) {
                _this.studentprofile = data.profile;
                _this.subjects = data.subjects;
                _this.exams = data.exams;
                _this.marks = data.marks;
                _this.grades = data.grades;
                _this.marksettings = data.marksettings;
                _this.markpercentages = data.markpercentages;
                _this.highestmarks = data.highestmarks;
                _this.usertype = data.usertype;
            });
        }
        this.langandpermissionService.getLangandPermissionCall(value, 'mark')
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
    MarkviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-markview',
            template: __webpack_require__(/*! ./markview.page.html */ "./src/app/pages/mark/markview/markview.page.html"),
            styles: [__webpack_require__(/*! ./markview.page.scss */ "./src/app/pages/mark/markview/markview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mark_mark_service__WEBPACK_IMPORTED_MODULE_4__["MarkService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_2__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], MarkviewPage);
    return MarkviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mark-markview-markview-module.js.map