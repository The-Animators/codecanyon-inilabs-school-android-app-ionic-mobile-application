(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assetmanagement-asset-assetview-assetview-module"],{

/***/ "./src/app/pages/assetmanagement/asset/assetview/assetview.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/asset/assetview/assetview.module.ts ***!
  \***************************************************************************/
/*! exports provided: AssetviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetviewPageModule", function() { return AssetviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assetview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assetview.page */ "./src/app/pages/assetmanagement/asset/assetview/assetview.page.ts");







var routes = [
    {
        path: '',
        component: _assetview_page__WEBPACK_IMPORTED_MODULE_6__["AssetviewPage"]
    }
];
var AssetviewPageModule = /** @class */ (function () {
    function AssetviewPageModule() {
    }
    AssetviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_assetview_page__WEBPACK_IMPORTED_MODULE_6__["AssetviewPage"]]
        })
    ], AssetviewPageModule);
    return AssetviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/assetmanagement/asset/assetview/assetview.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/asset/assetview/assetview.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}} {{language?.view}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true, assetID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"asset\">\n    <ion-card class=\"card-bg\">\n      <div class=\"card-class\">\n        <h3 class=\"text-color-h\">{{language?.asset_asset_information}}</h3>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_serial}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset?.serial}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_description}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset?.adescription}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_categoryID}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset?.category}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/address.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_locationID}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset?.location}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_create_date}}</h4>\n            <ion-text color=\"secondary\">\n              <p>{{asset?.acreate_date | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_status}}</h4>\n            <ion-text color=\"secondary\">\n              <p *ngIf=\"asset.status == 2\">{{language?.asset_status_checked_in}}</p>\n              <p *ngIf=\"asset.status == 1\">{{language?.asset_status_checked_out}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"p-text ion-item-css\">\n          <ion-avatar style=\"margin-right: 10px\">\n            <img src=\"assets/assets.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4>{{language?.asset_condition}}</h4>\n            <ion-text color=\"secondary\">\n              <p *ngIf=\"asset.asset_condition == 1\">{{language?.asset_condition_new}}</p>\n              <p *ngIf=\"asset.asset_condition == 2\">{{language?.asset_condition_used}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/assetmanagement/asset/assetview/assetview.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/asset/assetview/assetview.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h4 {\n  font-size: 16px;\n  color: #ffffff; }\n\n.card-class {\n  margin: 8px; }\n\n.card-class .text-color-h {\n  text-align: start;\n  font-size: 17px;\n  color: #000000; }\n\n.card-class .text-color-p {\n  text-align: start;\n  color: #000000;\n  font-size: 13px;\n  line-height: 0px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.notice-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXRtYW5hZ2VtZW50L2Fzc2V0L2Fzc2V0dmlldy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhc3NldG1hbmFnZW1lbnRcXGFzc2V0XFxhc3NldHZpZXdcXGFzc2V0dmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFLckI7RUFDRSxvQkFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXRtYW5hZ2VtZW50L2Fzc2V0L2Fzc2V0dmlldy9hc3NldHZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cblxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6Izk4OWFhMjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnAtdGV4dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuLmNhcmQtY2xhc3Mge1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWNsYXNzIC50ZXh0LWNvbG9yLWh7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtY2xhc3MgLnRleHQtY29sb3ItcCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLm5vdGljZS1pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/assetmanagement/asset/assetview/assetview.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/assetmanagement/asset/assetview/assetview.page.ts ***!
  \*************************************************************************/
/*! exports provided: AssetviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetviewPage", function() { return AssetviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_assetmanagement_assetmanagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/assetmanagement/assetmanagement.service */ "./src/app/service/assetmanagement/assetmanagement.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../config/config */ "./src/config/config.ts");








var AssetviewPage = /** @class */ (function () {
    function AssetviewPage(assetmanagementService, network, toastCtrl, langandpermissionService, route) {
        this.assetmanagementService = assetmanagementService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.assetID = this.route.snapshot.paramMap.get('assetID');
        this.doRefresh(false, false, this.assetID);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    AssetviewPage.prototype.ngOnInit = function () { };
    AssetviewPage.prototype.presentToast = function () {
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
    AssetviewPage.prototype.doRefresh = function (event, value, assetID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.assetmanagementService.getAssetView(value, assetID)
            .then(function (data) {
            _this.asset = data.asset;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'asset')
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
    AssetviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assetview',
            template: __webpack_require__(/*! ./assetview.page.html */ "./src/app/pages/assetmanagement/asset/assetview/assetview.page.html"),
            styles: [__webpack_require__(/*! ./assetview.page.scss */ "./src/app/pages/assetmanagement/asset/assetview/assetview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_assetmanagement_assetmanagement_service__WEBPACK_IMPORTED_MODULE_2__["AssetmanagementService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AssetviewPage);
    return AssetviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-assetmanagement-asset-assetview-assetview-module.js.map