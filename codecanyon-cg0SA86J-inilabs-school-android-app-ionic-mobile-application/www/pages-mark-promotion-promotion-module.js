(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mark-promotion-promotion-module"],{

/***/ "./src/app/pages/mark/promotion/promotion.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mark/promotion/promotion.module.ts ***!
  \**********************************************************/
/*! exports provided: PromotionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionPageModule", function() { return PromotionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _promotion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promotion.page */ "./src/app/pages/mark/promotion/promotion.page.ts");







var routes = [
    {
        path: '',
        component: _promotion_page__WEBPACK_IMPORTED_MODULE_6__["PromotionPage"]
    }
];
var PromotionPageModule = /** @class */ (function () {
    function PromotionPageModule() {
    }
    PromotionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_promotion_page__WEBPACK_IMPORTED_MODULE_6__["PromotionPage"]]
        })
    ], PromotionPageModule);
    return PromotionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mark/promotion/promotion.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/mark/promotion/promotion.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">PROMOTION</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"bg-class\">\n  <div class=\"imgcard\" align=\"center\">\n\n  </div>\n  <!--<div padding class=\"div-bg\" *ngIf=\"examlist\">-->\n    <!--<div class=\"relative-card\">-->\n      <!--<ion-card class=\"card-bg\" *ngFor=\"let exam of examlist\">-->\n        <!--<ion-item class=\"p-text\" *ngIf=\"exam.exam\">-->\n          <!--<p>Exam Name</p>-->\n          <!--<div class=\"item-note\" slot=\"end\">-->\n            <!--<h4>{{exam.exam}}</h4>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n        <!--<ion-item class=\"p-text\" *ngIf=\"exam.date\">-->\n          <!--<p>Date</p>-->\n          <!--<div class=\"item-note\" slot=\"end\">-->\n            <!--<h4>{{exam.date}}</h4>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item class=\"p-text\" *ngIf=\"exam.note\">-->\n          <!--<p>Note</p>-->\n          <!--<div class=\"item-note\" slot=\"end\">-->\n            <!--<h4>{{exam.note}}</h4>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n      <!--</ion-card>-->\n    <!--</div>-->\n  <!--</div>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mark/promotion/promotion.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/mark/promotion/promotion.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-class {\n  --background: #1D223a !important; }\n\n.div-bg {\n  background-color: #4EB876 !important; }\n\n.relative-card {\n  position: relative;\n  bottom: 95px; }\n\n.imgcard {\n  background-color: #1D223a !important;\n  margin: 20px 21px 50px;\n  height: 40px; }\n\n.card-bg {\n  --background: white !important;\n  margin-top: 0px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sbFByb2plY3Qvc2Nob29sYXBwdjIvc3JjL2FwcC9wYWdlcy9tYXJrL3Byb21vdGlvbi9wcm9tb3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0NBQWEsRUFBQTs7QUFHZjtFQUNFLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFJZDtFQUNFLDhCQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLG9CQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQUMsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFyay9wcm9tb3Rpb24vcHJvbW90aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2EgIWltcG9ydGFudDtcbn1cblxuLmRpdi1iZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQjg3NiAhaW1wb3J0YW50O1xuXG59XG5cbi5yZWxhdGl2ZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogOTVweDtcbn1cbi5pbWdjYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyMjNhICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogIDIwcHggMjFweCA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cblxufVxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiM5ODlhYTI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtjb2xvcjogIzAwMDAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/mark/promotion/promotion.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/mark/promotion/promotion.page.ts ***!
  \********************************************************/
/*! exports provided: PromotionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionPage", function() { return PromotionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_exam_exam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/exam/exam.service */ "./src/app/service/exam/exam.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");





var PromotionPage = /** @class */ (function () {
    // public examlist: any;
    // public permission: any;
    // public language: any;
    function PromotionPage(router, route, examService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.examService = examService;
        this.langandpermissionService = langandpermissionService;
    }
    PromotionPage.prototype.ngOnInit = function () {
    };
    PromotionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__(/*! ./promotion.page.html */ "./src/app/pages/mark/promotion/promotion.page.html"),
            styles: [__webpack_require__(/*! ./promotion.page.scss */ "./src/app/pages/mark/promotion/promotion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_exam_exam_service__WEBPACK_IMPORTED_MODULE_3__["ExamService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], PromotionPage);
    return PromotionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mark-promotion-promotion-module.js.map