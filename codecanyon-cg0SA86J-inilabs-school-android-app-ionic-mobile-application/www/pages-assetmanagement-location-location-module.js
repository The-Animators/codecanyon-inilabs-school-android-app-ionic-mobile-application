(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assetmanagement-location-location-module"],{

/***/ "./src/app/pages/assetmanagement/location/location.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/assetmanagement/location/location.module.ts ***!
  \*******************************************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/pages/assetmanagement/location/location.page.ts");







var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/assetmanagement/location/location.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/assetmanagement/location/location.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container  *ngIf=\"locations\">\n      <ion-card class=\"card-bg\" *ngFor=\"let location of locations\">\n        <ion-card-header align=\"center\" class=\"book-header\">{{location.location}}</ion-card-header>\n        <ion-item class=\"p-text\" *ngIf=\"location.description\">\n          <div class=\"item-note\" slot=\"start\">\n            <h4>{{location.description}}</h4>\n          </div>\n        </ion-item>\n      </ion-card>\n  </ng-container>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/assetmanagement/location/location.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/assetmanagement/location/location.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bg {\n  --background: white !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.p-text p {\n  font-size: 13px;\n  color: #666; }\n\n.p-text h4 {\n  font-size: 13px;\n  color: #000000; }\n\n.book-header {\n  --background:#1D223a;\n  color: #ffffff;\n  font-size: 17px;\n  margin-bottom: 5px;\n  text-align: start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXRtYW5hZ2VtZW50L2xvY2F0aW9uL0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXGFzc2V0bWFuYWdlbWVudFxcbG9jYXRpb25cXGxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3NldG1hbmFnZW1lbnQvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cblxuLnAtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wLXRleHQgaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYm9vay1oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/assetmanagement/location/location.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/assetmanagement/location/location.page.ts ***!
  \*****************************************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_assetmanagement_assetmanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/assetmanagement/assetmanagement.service */ "./src/app/service/assetmanagement/assetmanagement.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var LocationPage = /** @class */ (function () {
    function LocationPage(router, route, network, toastCtrl, assetmanagementService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.assetmanagementService = assetmanagementService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
    }
    LocationPage.prototype.ngOnInit = function () {
    };
    LocationPage.prototype.presentToast = function () {
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
    LocationPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.assetmanagementService.getLocation(value)
            .then(function (data) {
            _this.locations = data.locations;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'location')
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
    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.page.html */ "./src/app/pages/assetmanagement/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/pages/assetmanagement/location/location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_assetmanagement_assetmanagement_service__WEBPACK_IMPORTED_MODULE_3__["AssetmanagementService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-assetmanagement-location-location-module.js.map