(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assetmanagement-assetassignmentview-assetassignmentview-module"],{

/***/ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AssetassignmentviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetassignmentviewPageModule", function() { return AssetassignmentviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assetassignmentview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assetassignmentview.page */ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.ts");







var routes = [
    {
        path: '',
        component: _assetassignmentview_page__WEBPACK_IMPORTED_MODULE_6__["AssetassignmentviewPage"]
    }
];
var AssetassignmentviewPageModule = /** @class */ (function () {
    function AssetassignmentviewPageModule() {
    }
    AssetassignmentviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_assetassignmentview_page__WEBPACK_IMPORTED_MODULE_6__["AssetassignmentviewPage"]]
        })
    ], AssetassignmentviewPageModule);
    return AssetassignmentviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,assetassignmentID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"asset_assignment\">\n    <ion-card class=\"card-bg\" *ngIf=\"user\">\n      <div class=\"card-class\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ng-container *ngIf=\"user.photo;else img_content\">\n              <img class=\"notice-img\" src=\"{{siteUrl}}uploads/images/{{user.photo}}\">\n            </ng-container>\n            <ng-template #img_content>\n              <img class=\"notice-img\" src=\"assets/boy.png\">\n            </ng-template>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h4 class=\"text-color-h\"> {{user.name}}</h4>\n              <p class=\"text-color-p\"> {{usertype}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_dob}}</h4>\n            <ion-text>\n              <p>{{user?.dob | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/sms.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_phone}}</h4>\n            <ion-text>\n              <p>{{user?.phone}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\">{{language?.asset_assignment_asset_assignment}}</h3>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_assetID}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset_assignment?.description}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_assigned_quantity}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset_assignment?.assigned_quantity}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_due_date}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset_assignment?.due_date | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_check_out_date}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset_assignment?.check_out_date | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_check_in_date}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset_assignment?.check_in_date | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/address.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_assignment_location}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset_assignment?.location}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.notice-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXRtYW5hZ2VtZW50L2Fzc2V0YXNzaWdubWVudHZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYXNzZXRtYW5hZ2VtZW50XFxhc3NldGFzc2lnbm1lbnR2aWV3XFxhc3NldGFzc2lnbm1lbnR2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLG9CQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3NldG1hbmFnZW1lbnQvYXNzZXRhc3NpZ25tZW50dmlldy9hc3NldGFzc2lnbm1lbnR2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG5cbi5jYXJkLWhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiM5ODlhYTI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5jYXJkLWNsYXNzIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY2FyZC1jbGFzcyAudGV4dC1jb2xvci1oe1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLXAge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmlvbi1pdGVtLWNzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RpY2UtaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.ts ***!
  \***************************************************************************************/
/*! exports provided: AssetassignmentviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetassignmentviewPage", function() { return AssetassignmentviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_assetmanagement_assetmanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/assetmanagement/assetmanagement.service */ "./src/app/service/assetmanagement/assetmanagement.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var AssetassignmentviewPage = /** @class */ (function () {
    function AssetassignmentviewPage(assetmanagementService, network, toastCtrl, langandpermissionService, route) {
        this.assetmanagementService = assetmanagementService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.assetassignmentID = this.route.snapshot.paramMap.get('assetassignmentID');
        this.doRefresh(false, false, this.assetassignmentID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    AssetassignmentviewPage.prototype.ngOnInit = function () { };
    AssetassignmentviewPage.prototype.presentToast = function () {
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
    AssetassignmentviewPage.prototype.doRefresh = function (event, value, assetassignmentID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.assetmanagementService.getAssetAssignmentView(value, assetassignmentID)
            .then(function (data) {
            _this.asset_assignment = data.asset_assignment;
            _this.user = data.user;
            if (_this.user) {
                _this.usertype = data.usertypes[_this.user.usertypeID];
            }
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'asset_assignment')
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
    AssetassignmentviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assetassignmentview',
            template: __webpack_require__(/*! ./assetassignmentview.page.html */ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.html"),
            styles: [__webpack_require__(/*! ./assetassignmentview.page.scss */ "./src/app/pages/assetmanagement/assetassignmentview/assetassignmentview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_assetmanagement_assetmanagement_service__WEBPACK_IMPORTED_MODULE_3__["AssetmanagementService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AssetassignmentviewPage);
    return AssetassignmentviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-assetmanagement-assetassignmentview-assetassignmentview-module.js.map