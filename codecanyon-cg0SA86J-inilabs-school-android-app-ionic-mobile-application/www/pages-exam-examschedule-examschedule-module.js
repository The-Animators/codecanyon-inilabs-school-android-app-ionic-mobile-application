(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exam-examschedule-examschedule-module"],{

/***/ "./src/app/pages/exam/examschedule/examschedule.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/exam/examschedule/examschedule.module.ts ***!
  \****************************************************************/
/*! exports provided: ExamschedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamschedulePageModule", function() { return ExamschedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _examschedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examschedule.page */ "./src/app/pages/exam/examschedule/examschedule.page.ts");







var routes = [
    {
        path: '',
        component: _examschedule_page__WEBPACK_IMPORTED_MODULE_6__["ExamschedulePage"]
    }
];
var ExamschedulePageModule = /** @class */ (function () {
    function ExamschedulePageModule() {
    }
    ExamschedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_examschedule_page__WEBPACK_IMPORTED_MODULE_6__["ExamschedulePage"]]
        })
    ], ExamschedulePageModule);
    return ExamschedulePageModule;
}());



/***/ }),

/***/ "./src/app/pages/exam/examschedule/examschedule.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/exam/examschedule/examschedule.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title }}</ion-title>\n  </ion-toolbar>\n  <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n  <ion-toolbar color=\"light\" *ngIf=\"classes\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.examschedule_classes}}</ion-label>\n          <ion-select placeholder=\"{{language?.examschedule_select_classes}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  </ng-container>\n\n</ion-header>\n\n<ion-content   class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event, true, classID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"examschedules\">\n    <ion-card class=\"card-bg\" *ngFor=\"let examschedule of examschedules\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\">{{examschedule.exam}}</h3>\n        <p class=\"text-color-p\">{{language?.examschedule_classes}}: {{examschedule.classes}} ({{examschedule.section}})</p>\n        <ion-item class=\"p-text ion-item-css\" >\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/subject.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{examschedule.subject}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{language?.examschedule_room}} ({{examschedule.room}})</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\" >\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.examschedule_date}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{examschedule.edate |date:\"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.examschedule_examfrom}} - {{language?.examschedule_examto}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{examschedule.examfrom}}    -   {{examschedule.examto}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/exam/examschedule/examschedule.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/exam/examschedule/examschedule.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 12px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.invoice-header {\n  background-color: #989aa2;\n  color: #000000; }\n\n.subject-header {\n  --background:#989aa2;\n  color: black;\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhhbS9leGFtc2NoZWR1bGUvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcZXhhbVxcZXhhbXNjaGVkdWxlXFxleGFtc2NoZWR1bGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQUMsY0FBYyxFQUFBOztBQUUxQztFQUNFLG9CQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFLcEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwyQ0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4YW0vZXhhbXNjaGVkdWxlL2V4YW1zY2hlZHVsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucC10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbnZvaWNlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7Y29sb3I6ICMwMDAwMDA7XG59XG4uc3ViamVjdC1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojOTg5YWEyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5cblxuLmNhcmQtY2xhc3Mge1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/exam/examschedule/examschedule.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/exam/examschedule/examschedule.page.ts ***!
  \**************************************************************/
/*! exports provided: ExamschedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamschedulePage", function() { return ExamschedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_exam_exam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/exam/exam.service */ "./src/app/service/exam/exam.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var ExamschedulePage = /** @class */ (function () {
    function ExamschedulePage(router, route, examService, network, storage, toastCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.examService = examService;
        this.network = network;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.selectedClass = '';
        this.isRefresh = true;
    }
    ExamschedulePage.prototype.ngOnInit = function () {
        this.Profile();
        this.doRefresh(false, false, '');
    };
    ExamschedulePage.prototype.presentToast = function () {
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
    ExamschedulePage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    ExamschedulePage.prototype.doRefresh = function (event, value, classID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.examService.getExamSchedule(value, classID)
            .then(function (data) {
            _this.classesData = data.classes;
            _this.examschedules = data.examschedules;
            _this.classes = data.classes;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'examschedule')
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
    ExamschedulePage.prototype.selectedClasses = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.classID = this.selectedClass;
        if (this.classID) {
            this.examService.getExamSchedule(false, this.classID)
                .then(function (data) {
                _this.classesData = data.classes;
                _this.examschedules = data.examschedules;
            });
            this.langandpermissionService.getLangandPermissionCall(false, 'examschedule')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
        }
    };
    ExamschedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examschedule',
            template: __webpack_require__(/*! ./examschedule.page.html */ "./src/app/pages/exam/examschedule/examschedule.page.html"),
            styles: [__webpack_require__(/*! ./examschedule.page.scss */ "./src/app/pages/exam/examschedule/examschedule.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_exam_exam_service__WEBPACK_IMPORTED_MODULE_3__["ExamService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], ExamschedulePage);
    return ExamschedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-exam-examschedule-examschedule-module.js.map