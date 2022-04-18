(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onlineexam-questionbank-questionbankview-questionbankview-module"],{

/***/ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: QuestionbankviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionbankviewPageModule", function() { return QuestionbankviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questionbankview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questionbankview.page */ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.ts");







var routes = [
    {
        path: '',
        component: _questionbankview_page__WEBPACK_IMPORTED_MODULE_6__["QuestionbankviewPage"]
    }
];
var QuestionbankviewPageModule = /** @class */ (function () {
    function QuestionbankviewPageModule() {
    }
    QuestionbankviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_questionbankview_page__WEBPACK_IMPORTED_MODULE_6__["QuestionbankviewPage"]]
        })
    ], QuestionbankviewPageModule);
    return QuestionbankviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true, questionbankID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"card-bg\">\n    <ion-card-title style=\"margin: 10px;\">\n      <span [innerHTML]=\"questions?.question\"></span>\n    </ion-card-title>\n    <ion-radio-group>\n      <ng-container *ngIf=\"questions?.typeNumber == 3\">\n        <ng-container *ngFor=\"let answer of answers[questions.questionBankID]\">\n          <ion-item style=\"float: left\" lines=\"none\"><ion-radio mode=\"md\"  [checked]=\"true\" value=\"P\" style=\"height: 23px;width: 25px;\"></ion-radio><span style=\"margin-left: 10px; color: green;\">{{answer?.text}}</span></ion-item>\n        </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"questions?.typeNumber == 2 || questions?.typeNumber == 1\">\n        <ng-container *ngFor=\"let option of optionss[questions.questionBankID]\">\n          <ng-container *ngFor=\"let answer of answers[questions.questionBankID]\">\n            <ion-item style=\"float: left\" lines=\"none\" *ngIf=\"option.optionID == answer.optionID;else present_content\"><ion-radio mode=\"md\"  [checked]=\"true\" value=\"P\" style=\"height: 23px;width: 25px;\"></ion-radio><span style=\"margin-left: 10px; color: green;\">{{option?.name}}</span></ion-item>\n            <ng-template #present_content>\n              <ion-item style=\"float: left\" lines=\"none\"><ion-radio mode=\"md\"  value=\"P\" style=\"height: 23px;width: 25px;\"></ion-radio><span style=\"margin-left: 10px; color: green;\">{{option?.name}}</span></ion-item>\n            </ng-template>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </ion-radio-group>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb25saW5lZXhhbS9xdWVzdGlvbmJhbmsvcXVlc3Rpb25iYW5rdmlldy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxvbmxpbmVleGFtXFxxdWVzdGlvbmJhbmtcXHF1ZXN0aW9uYmFua3ZpZXdcXHF1ZXN0aW9uYmFua3ZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmxpbmVleGFtL3F1ZXN0aW9uYmFuay9xdWVzdGlvbmJhbmt2aWV3L3F1ZXN0aW9uYmFua3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cblxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6Izk4OWFhMjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuLmNhcmQtY2xhc3Mge1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: QuestionbankviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionbankviewPage", function() { return QuestionbankviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _service_onlineexam_onlineexamservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/onlineexam/onlineexamservice.service */ "./src/app/service/onlineexam/onlineexamservice.service.ts");








var QuestionbankviewPage = /** @class */ (function () {
    function QuestionbankviewPage(router, route, network, toastCtrl, onlineexamserviceService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.onlineexamserviceService = onlineexamserviceService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.questionbankID = this.route.snapshot.paramMap.get('questionbankID');
        this.doRefresh(false, false, this.questionbankID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["fileUrl"];
    }
    QuestionbankviewPage.prototype.ngOnInit = function () {
    };
    QuestionbankviewPage.prototype.presentToast = function () {
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
    QuestionbankviewPage.prototype.doRefresh = function (event, value, questionbankID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.onlineexamserviceService.getQuestionbankview(value, questionbankID)
            .then(function (data) {
            console.log(data);
            _this.questions = data.question;
            _this.optionss = data.options;
            _this.answers = data.answers;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'question_bank')
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
    QuestionbankviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questionbankview',
            template: __webpack_require__(/*! ./questionbankview.page.html */ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.html"),
            styles: [__webpack_require__(/*! ./questionbankview.page.scss */ "./src/app/pages/onlineexam/questionbank/questionbankview/questionbankview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_onlineexam_onlineexamservice_service__WEBPACK_IMPORTED_MODULE_7__["OnlineexamserviceService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], QuestionbankviewPage);
    return QuestionbankviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-onlineexam-questionbank-questionbankview-questionbankview-module.js.map