(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exam-examattedance-examattedance-module"],{

/***/ "./src/app/pages/exam/examattedance/examattedance.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/exam/examattedance/examattedance.module.ts ***!
  \******************************************************************/
/*! exports provided: ExamattedancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamattedancePageModule", function() { return ExamattedancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _examattedance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examattedance.page */ "./src/app/pages/exam/examattedance/examattedance.page.ts");







var routes = [
    {
        path: '',
        component: _examattedance_page__WEBPACK_IMPORTED_MODULE_6__["ExamattedancePage"]
    }
];
var ExamattedancePageModule = /** @class */ (function () {
    function ExamattedancePageModule() {
    }
    ExamattedancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_examattedance_page__WEBPACK_IMPORTED_MODULE_6__["ExamattedancePage"]]
        })
    ], ExamattedancePageModule);
    return ExamattedancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/exam/examattedance/examattedance.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/exam/examattedance/examattedance.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">EXAMATTEDANCE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"bg-class\">\n  <div class=\"imgcard\" align=\"center\">\n\n  </div>\n  <!--<div padding class=\"div-bg\" *ngIf=\"examlist\">-->\n    <!--<div class=\"relative-card\">-->\n      <!--<ion-card class=\"card-bg\" *ngFor=\"let exam of examlist\">-->\n        <!--<ion-item class=\"p-text\" *ngIf=\"exam.exam\">-->\n          <!--<p>Exam Name</p>-->\n          <!--<div class=\"item-note\" slot=\"end\">-->\n            <!--<h4>{{exam.exam}}</h4>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n        <!--<ion-item class=\"p-text\" *ngIf=\"exam.date\">-->\n          <!--<p>Date</p>-->\n          <!--<div class=\"item-note\" slot=\"end\">-->\n            <!--<h4>{{exam.date}}</h4>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item class=\"p-text\" *ngIf=\"exam.note\">-->\n          <!--<p>Note</p>-->\n          <!--<div class=\"item-note\" slot=\"end\">-->\n            <!--<h4>{{exam.note}}</h4>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n      <!--</ion-card>-->\n    <!--</div>-->\n  <!--</div>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/exam/examattedance/examattedance.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/exam/examattedance/examattedance.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-class {\n  --background: #1D223a !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.relative-card {\n  position: relative;\n  bottom: 95px; }\n\n.imgcard {\n  background-color: #1D223a !important;\n  margin: 20px 21px 50px;\n  height: 40px; }\n\n.card-bg {\n  --background: white !important;\n  margin-top: 0px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sbFByb2plY3Qvc2Nob29sYXBwdjIvc3JjL2FwcC9wYWdlcy9leGFtL2V4YW1hdHRlZGFuY2UvZXhhbWF0dGVkYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQ0FBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLG9DQUFvQztFQUNwQyxzQkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUlkO0VBQ0UsOEJBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSx5QkFBeUI7RUFBQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leGFtL2V4YW1hdHRlZGFuY2UvZXhhbWF0dGVkYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5iZy1jbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjMUQyMjNhICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcblxufVxuXG4ucmVsYXRpdmUtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDk1cHg7XG59XG4uaW1nY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjIzYSAhaW1wb3J0YW50O1xuICBtYXJnaW46ICAyMHB4IDIxcHggNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuXG5cbn1cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7Y29sb3I6ICMwMDAwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/exam/examattedance/examattedance.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/exam/examattedance/examattedance.page.ts ***!
  \****************************************************************/
/*! exports provided: ExamattedancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamattedancePage", function() { return ExamattedancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamattedancePage = /** @class */ (function () {
    function ExamattedancePage() {
    }
    ExamattedancePage.prototype.ngOnInit = function () {
    };
    ExamattedancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examattedance',
            template: __webpack_require__(/*! ./examattedance.page.html */ "./src/app/pages/exam/examattedance/examattedance.page.html"),
            styles: [__webpack_require__(/*! ./examattedance.page.scss */ "./src/app/pages/exam/examattedance/examattedance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamattedancePage);
    return ExamattedancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-exam-examattedance-examattedance-module.js.map