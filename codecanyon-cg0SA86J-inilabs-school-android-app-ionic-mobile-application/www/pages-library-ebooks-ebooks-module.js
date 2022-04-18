(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-library-ebooks-ebooks-module"],{

/***/ "./src/app/pages/library/ebooks/ebooks.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/library/ebooks/ebooks.module.ts ***!
  \*******************************************************/
/*! exports provided: EbooksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbooksPageModule", function() { return EbooksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ebooks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ebooks.page */ "./src/app/pages/library/ebooks/ebooks.page.ts");







var routes = [
    {
        path: '',
        component: _ebooks_page__WEBPACK_IMPORTED_MODULE_6__["EbooksPage"]
    }
];
var EbooksPageModule = /** @class */ (function () {
    function EbooksPageModule() {
    }
    EbooksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ebooks_page__WEBPACK_IMPORTED_MODULE_6__["EbooksPage"]]
        })
    ], EbooksPageModule);
    return EbooksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/library/ebooks/ebooks.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/library/ebooks/ebooks.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <!--<ion-toolbar color=\"light\" *ngIf=\"classes\">-->\n    <!--<ion-row>-->\n      <!--<ion-col col-12 no-padding>-->\n        <!--<ion-item>-->\n          <!--<ion-label>{{language?.book_classes}}</ion-label>-->\n          <!--<ion-select placeholder=\"{{language?.book_select_classes}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">-->\n            <!--<ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>-->\n          <!--</ion-select>-->\n        <!--</ion-item>-->\n      <!--</ion-col>-->\n    <!--</ion-row>-->\n  <!--</ion-toolbar>-->\n</ion-header>\n\n<ion-content  class=\"bg-class\">\n  <div class=\"imgcard\" align=\"center\">\n\n  </div>\n  <div padding class=\"div-bg\" *ngIf=\"ebooks\">\n    <div class=\"relative-card\">\n        <ion-row class=\"card-bg\" align-items-start >\n          <ion-col *ngFor=\"let ebook of ebooks\">\n            <img src=\"https://demo.inilabs.net/school/schoolapi/uploads/images/{{ebook.cover_photo}}\">\n            <p>{{ebook.name}}</p>\n            <p>{{ebook.author}}</p>\n          </ion-col>\n        </ion-row>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/library/ebooks/ebooks.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/library/ebooks/ebooks.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-class {\n  --background: #1D223a !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.relative-card {\n  position: relative;\n  bottom: 95px; }\n\n.imgcard {\n  background-color: #1D223a !important;\n  margin: 20px 21px 50px;\n  height: 40px; }\n\n.card-bg {\n  --background: white !important;\n  margin-top: 0px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.book-header {\n  --background:#989aa2;\n  color: black;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\np {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sbFByb2plY3Qvc2Nob29sYXBwdjIvc3JjL2FwcC9wYWdlcy9saWJyYXJ5L2Vib29rcy9lYm9va3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0NBQWEsRUFBQTs7QUFHZjtFQUNFLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFJZDtFQUNFLDhCQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUF5QjtFQUFDLGNBQWMsRUFBQTs7QUFFMUM7RUFDRSxvQkFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlicmFyeS9lYm9va3MvZWJvb2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2EgIWltcG9ydGFudDtcbn1cblxuLmRpdi1iZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMTk2MSAhaW1wb3J0YW50O1xuXG59XG5cbi5yZWxhdGl2ZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogOTVweDtcbn1cbi5pbWdjYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyMjNhICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogIDIwcHggMjFweCA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cblxufVxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmludm9pY2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtjb2xvcjogIzAwMDAwMDtcbn1cbi5ib29rLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiM5ODlhYTI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbnB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/library/ebooks/ebooks.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/library/ebooks/ebooks.page.ts ***!
  \*****************************************************/
/*! exports provided: EbooksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbooksPage", function() { return EbooksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_library_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/library/library.service */ "./src/app/service/library/library.service.ts");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");






var EbooksPage = /** @class */ (function () {
    function EbooksPage(router, route, libraryService, langandpermissionService, classService) {
        this.router = router;
        this.route = route;
        this.libraryService = libraryService;
        this.langandpermissionService = langandpermissionService;
        this.classService = classService;
        this.getBooks();
    }
    EbooksPage.prototype.ngOnInit = function () {
    };
    EbooksPage.prototype.getBooks = function () {
        var _this = this;
        this.libraryService.getEBooks()
            .then(function (data) {
            _this.ebooks = data.ebooks;
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'ebooks')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
        });
    };
    EbooksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ebooks',
            template: __webpack_require__(/*! ./ebooks.page.html */ "./src/app/pages/library/ebooks/ebooks.page.html"),
            styles: [__webpack_require__(/*! ./ebooks.page.scss */ "./src/app/pages/library/ebooks/ebooks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_library_library_service__WEBPACK_IMPORTED_MODULE_3__["LibraryService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]])
    ], EbooksPage);
    return EbooksPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-library-ebooks-ebooks-module.js.map