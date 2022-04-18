(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payroll-salarytemplateview-salarytemplateview-module"],{

/***/ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/payroll/salarytemplateview/salarytemplateview.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SalarytemplateviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalarytemplateviewPageModule", function() { return SalarytemplateviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salarytemplateview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salarytemplateview.page */ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.ts");







var routes = [
    {
        path: '',
        component: _salarytemplateview_page__WEBPACK_IMPORTED_MODULE_6__["SalarytemplateviewPage"]
    }
];
var SalarytemplateviewPageModule = /** @class */ (function () {
    function SalarytemplateviewPageModule() {
    }
    SalarytemplateviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_salarytemplateview_page__WEBPACK_IMPORTED_MODULE_6__["SalarytemplateviewPage"]]
        })
    ], SalarytemplateviewPageModule);
    return SalarytemplateviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,salarytemplateID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"salarytemplate\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\">{{language?.salary_template_salary_grades}} ({{salarytemplate?.salary_grades}})</h3>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.salary_template_basic_salary}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{salarytemplate?.basic_salary}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.salary_template_overtime_rate}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{salarytemplate?.overtime_rate}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n    <ion-card class=\"card-bg\" *ngFor=\"let salaryoption of salaryoptions\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\" *ngIf=\"salaryoption.option_type == 1\">{{language?.salary_template_allowances}}</h3>\n        <h3 class=\"text-color-h\" *ngIf=\"salaryoption.option_type == 2\">{{language?.salary_template_deductions}}</h3>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{salaryoption.label_name}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{salaryoption.label_amount}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\">{{language?.salary_template_total_salary_details}}</h3>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.salary_template_gross_salary}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{grosssalary}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.salary_template_total_deduction}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{totaldeduction}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/salary.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.salary_template_net_salary}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{netsalary}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC9zYWxhcnl0ZW1wbGF0ZXZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xccGF5cm9sbFxcc2FsYXJ5dGVtcGxhdGV2aWV3XFxzYWxhcnl0ZW1wbGF0ZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXlyb2xsL3NhbGFyeXRlbXBsYXRldmlldy9zYWxhcnl0ZW1wbGF0ZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cblxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6Izk4OWFhMjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuLmNhcmQtY2xhc3Mge1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SalarytemplateviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalarytemplateviewPage", function() { return SalarytemplateviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/payroll/payroll.service */ "./src/app/service/payroll/payroll.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var SalarytemplateviewPage = /** @class */ (function () {
    function SalarytemplateviewPage(payrollService, network, toastCtrl, langandpermissionService, route) {
        this.payrollService = payrollService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.salarytemplateID = this.route.snapshot.paramMap.get('salarytemplateID');
        this.doRefresh(false, false, this.salarytemplateID);
    }
    SalarytemplateviewPage.prototype.ngOnInit = function () {
    };
    SalarytemplateviewPage.prototype.presentToast = function () {
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
    SalarytemplateviewPage.prototype.doRefresh = function (event, value, salarytemplateID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.payrollService.getSalaryTemplateView(value, salarytemplateID)
            .then(function (data) {
            _this.salarytemplate = data.salary_template;
            _this.salaryoptions = data.salaryoptions;
            _this.grosssalary = data.grosssalary;
            _this.totaldeduction = data.totaldeduction;
            _this.netsalary = data.netsalary;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'salary_template')
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
    SalarytemplateviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salarytemplateview',
            template: __webpack_require__(/*! ./salarytemplateview.page.html */ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.html"),
            styles: [__webpack_require__(/*! ./salarytemplateview.page.scss */ "./src/app/pages/payroll/salarytemplateview/salarytemplateview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_3__["PayrollService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SalarytemplateviewPage);
    return SalarytemplateviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payroll-salarytemplateview-salarytemplateview-module.js.map