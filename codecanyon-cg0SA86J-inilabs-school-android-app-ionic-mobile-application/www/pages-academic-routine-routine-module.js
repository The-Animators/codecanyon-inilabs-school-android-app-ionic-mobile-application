(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-academic-routine-routine-module"],{

/***/ "./src/app/pages/academic/routine/routine.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/academic/routine/routine.module.ts ***!
  \**********************************************************/
/*! exports provided: RoutinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutinePageModule", function() { return RoutinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _routine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routine.page */ "./src/app/pages/academic/routine/routine.page.ts");







var routes = [
    {
        path: '',
        component: _routine_page__WEBPACK_IMPORTED_MODULE_6__["RoutinePage"]
    }
];
var RoutinePageModule = /** @class */ (function () {
    function RoutinePageModule() {
    }
    RoutinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_routine_page__WEBPACK_IMPORTED_MODULE_6__["RoutinePage"]]
        })
    ], RoutinePageModule);
    return RoutinePageModule;
}());



/***/ }),

/***/ "./src/app/pages/academic/routine/routine.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/academic/routine/routine.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n    <ng-container *ngIf=\"loginuser?.usertypeID != 3\">\n    <ion-toolbar color=\"light\" *ngIf=\"classes\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.routine_classes}}</ion-label>\n          <ion-select placeholder=\"{{language?.routine_select_classes}}\" #select [(ngModel)]=\"selectedClass\" (ionChange)=\"selectedClasses()\">\n            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n    </ng-container>\n</ion-header>\n\n<ion-content   class=\"bg-image no-scroll\" >\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event, classesID,true)\" *ngIf=\"isRefresh\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Pull to refresh\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-slides [options]=\"slideOpts\" *ngIf=\"routines\">\n        <ng-container *ngFor=\"let routine of routines; let i = index\">\n            <ion-slide  *ngIf=\"routine !='Weekend' && routine !=null\">\n                <ion-content>\n                    <div class=\"div-first\">\n                        <ion-card-header  class=\"routine-header\">\n                            <p>{{days[i].day}}</p>\n                        </ion-card-header>\n                        <ion-card  class=\"card-routine\" *ngFor=\"let rotn of routine\">\n                            <div class=\"card-class\">\n                                <h3 class=\"text-color-h\">{{rotn.subject}}</h3>\n                                <ion-item class=\"p-text ion-item-css\" >\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/routine.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4>{{language?.routine_start_time}} - {{language?.routine_end_time}}</h4>\n                                        <ion-text color=\"secondary\">\n                                            <p>{{rotn.time}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\"p-text ion-item-css\" >\n                                    <ion-avatar class=\"avatar-img\">\n                                        <img src=\"assets/teacher.png\" />\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <h4>{{language?.Teacher}}</h4>\n                                        <ion-text color=\"secondary\">\n                                            <p>{{rotn.teacher}}</p>\n                                        </ion-text>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n                        </ion-card>\n                    </div>\n                </ion-content>\n            </ion-slide>\n        </ng-container>\n    </ion-slides>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/academic/routine/routine.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/academic/routine/routine.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".routine-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 14px;\n  margin-bottom: 5px;\n  height: 60px; }\n\n.routine-header p {\n  margin: 6px;\n  font-weight: bold; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.card-routine {\n  --background: #ffff !important;\n  margin: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.card-class {\n  margin: 8px; }\n\n.first-div {\n  width: 100%;\n  height: 100%; }\n\n.card-routine .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-routine .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNhZGVtaWMvcm91dGluZS9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY2FkZW1pY1xccm91dGluZVxccm91dGluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osV0FBVSxFQUFBOztBQUlaO0VBQ0UsOEJBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwyQ0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjYWRlbWljL3JvdXRpbmUvcm91dGluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3V0aW5lLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91dGluZS1oZWFkZXIgcHtcbiAgbWFyZ2luOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDoxMDAlO1xufVxuXG5cbi5jYXJkLXJvdXRpbmV7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uZmlyc3QtZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkLXJvdXRpbmUgLnRleHQtY29sb3ItaHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FyZC1yb3V0aW5lIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/academic/routine/routine.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/academic/routine/routine.page.ts ***!
  \********************************************************/
/*! exports provided: RoutinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutinePage", function() { return RoutinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _service_academic_roution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/academic/roution.service */ "./src/app/service/academic/roution.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var RoutinePage = /** @class */ (function () {
    function RoutinePage(router, route, routionService, classService, network, storage, toastCtrl, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.routionService = routionService;
        this.classService = classService;
        this.network = network;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.selectedClass = '';
        this.slideOpts = {
            autoplay: true
        };
        this.isRefresh = true;
    }
    RoutinePage.prototype.ngOnInit = function () {
        this.Profile();
        this.getRoutine();
    };
    RoutinePage.prototype.presentToast = function () {
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
    RoutinePage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    RoutinePage.prototype.getRoutine = function () {
        var _this = this;
        var daysData = [];
        this.routionService.getRoutine('', false)
            .then(function (data) {
            _this.classes = data.classes;
            _this.classesID = data.classesID;
            if (data.days) {
                Object.keys(data.days).forEach(function (key) {
                    daysData.push({ 'day': data.days[key] });
                });
                _this.days = daysData;
                _this.routines = data.routines;
            }
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'routine')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
        });
    };
    RoutinePage.prototype.selectedClasses = function () {
        var _this = this;
        var classID = this.selectedClass;
        var daysData = [];
        if (classID) {
            this.routionService.getRoutine(classID, false)
                .then(function (data) {
                _this.classes = data.classes;
                _this.classesID = data.classesID;
                if (data.days) {
                    Object.keys(data.days).forEach(function (key) {
                        daysData.push({ 'day': data.days[key] });
                    });
                    _this.days = daysData;
                }
                _this.routines = data.routines;
                console.log(_this.routines);
            });
            this.langandpermissionService.getLangandPermissionCall(false, 'routine')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
        }
    };
    RoutinePage.prototype.doRefresh = function (event, classID, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        var daysData = [];
        this.routionService.getRoutine(classID, value)
            .then(function (data) {
            _this.classes = data.classes;
            _this.classesID = data.classesID;
            if (data.days) {
                Object.keys(data.days).forEach(function (key) {
                    daysData.push({ 'day': data.days[key] });
                });
                _this.days = daysData;
            }
            _this.routines = data.routines;
            console.log(_this.routines);
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'routine')
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
    RoutinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routine',
            template: __webpack_require__(/*! ./routine.page.html */ "./src/app/pages/academic/routine/routine.page.html"),
            styles: [__webpack_require__(/*! ./routine.page.scss */ "./src/app/pages/academic/routine/routine.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_academic_roution_service__WEBPACK_IMPORTED_MODULE_4__["RoutionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], RoutinePage);
    return RoutinePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-academic-routine-routine-module.js.map