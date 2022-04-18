(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inventory-productpurchases-productpurchasesview-productpurchasesview-module"],{

/***/ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductpurchasesviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpurchasesviewPageModule", function() { return ProductpurchasesviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productpurchasesview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productpurchasesview.page */ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.ts");







var routes = [
    {
        path: '',
        component: _productpurchasesview_page__WEBPACK_IMPORTED_MODULE_6__["ProductpurchasesviewPage"]
    }
];
var ProductpurchasesviewPageModule = /** @class */ (function () {
    function ProductpurchasesviewPageModule() {
    }
    ProductpurchasesviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_productpurchasesview_page__WEBPACK_IMPORTED_MODULE_6__["ProductpurchasesviewPage"]]
        })
    ], ProductpurchasesviewPageModule);
    return ProductpurchasesviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true, productpurchaseID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div style=\"overflow-x:scroll;\">\n    <ion-row class=\"invoice-info\">\n      <ion-col [size]=\"8\" class=\" invoice-col\" style=\"font-size: 13px;\">\n        {{language?.productpurchase_from}}\n        <address>\n          <strong>{{productsupplier?.productsuppliercompanyname}}</strong><br>\n          {{productsupplier?.productsupplieraddress}}<br>\n          {{language?.productpurchase_phone}} : {{productsupplier?.productsupplierphone}}<br>\n          {{language?.productpurchase_email}} : {{productsupplier?.productsupplieremail}}<br>\n        </address>\n      </ion-col>\n      <ion-col [size]=\"4\" style=\"font-size: 13px;\">\n        <b>{{language?.productpurchase_referenceno}} : {{productpurchase?.productpurchasereferenceno}}</b><br>\n        {{language?.productpurchase_payment_status}} : <span class=\"text-green\" *ngIf=\"productpurchase?.productpurchasestatus==2\">{{language?.productpurchase_fully_paid}}</span><span class=\"text-green\" *ngIf=\"productpurchase?.productpurchasestatus==1\">{{language?.productpurchase_partial_paid}}</span><span class=\"text-green\" *ngIf=\"productpurchase?.productpurchasestatus==0\">{{language?.productpurchase_pending}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"\" style=\"font-size: 13px;\">\n        {{language?.productpurchase_to}}\n        <address>\n          <strong>{{language?.productpurchase_warehouse_name}} : {{productwarehouse?.productwarehousename}}</strong><br>\n           {{productwarehouse?.productwarehouseaddress}}<br>\n          {{productwarehouse?.productwarehousephone}}<br>\n          {{productwarehouse?.productwarehouseemail}}<br>\n        </address>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div style=\"overflow-x:scroll;\">\n      <table class=\"table table-bordered product-style\">\n        <thead>\n        <tr>\n          <th class=\"col-lg-2\">#</th>\n          <th class=\"col-lg-4\">{{language?.productpurchase_description}}</th>\n          <th class=\"col-lg-2\">{{language?.productpurchase_unit_price}}</th>\n          <th class=\"col-lg-2\">{{language?.productpurchase_quantity}}</th>\n          <th class=\"col-lg-2\">{{language?.productpurchase_subtotal}}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of productpurchaseitems let rowIndex = index\">\n          <td data-title=\"#\">{{rowIndex+1}}</td>\n          <td data-title=\"Description\">{{products[item.productID]}}</td>\n          <td data-title=\"unit price\">{{item.productpurchaseunitprice}}</td>\n          <td data-title=\"Quantity\">{{item.productpurchasequantity}}</td>\n          <td data-title=\"Subtotal\">{{item?.subtotal}} </td>\n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n          <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.productpurchase_total_amount}}</b></span></td>\n          <td><b>{{productpurchasepaid?.totalamount}}</b></td>\n        </tr>\n        <tr>\n          <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.productpurchase_paid}}</b></span></td>\n          <td><b>{{productpurchasepaid?.productpurchasepaidamount}}</b></td>\n        </tr>\n        <tr>\n          <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.productpurchase_balance}}</b></span></td>\n          <td><b>{{productpurchasepaid?.balanceamount}}</b></td>\n        </tr>\n        </tfoot>\n      </table>\n\n      <div class=\"col-sm-3 col-xs-12 pull-right\">\n        <div class=\"well well-sm\">\n          <p>\n            {{language?.productpurchase_create_by}} : {{createuser}} <br>\n            {{language?.productpurchase_date}} : {{productpurchase?.productpurchasedate |date: \"dd MMM yyyy\" }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  background: #fff;\n  border: 1px solid #f4f4f4; }\n\n.invoice {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  background: #fff;\n  border: 1px solid #f4f4f4; }\n\n.invoice-title {\n  margin-top: 0; }\n\n.text-red {\n  color: #f56954 !important; }\n\n.text-yellow {\n  color: #f39c12 !important; }\n\n.text-aqua {\n  color: #00c0ef !important; }\n\n.text-blue {\n  color: #0073b7 !important; }\n\n.text-black {\n  color: #222222 !important; }\n\n.text-light-blue {\n  color: #3c8dbc !important; }\n\n.text-green {\n  color: #00a65a !important; }\n\n.img-circle {\n  border-radius: 50%; }\n\nimg {\n  max-width: 100% !important; }\n\nimg {\n  vertical-align: middle; }\n\nimg {\n  border: 0; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.table-bordered {\n  border: 1px solid #E2E7EB; }\n\n.table-bordered > thead > tr > th {\n  border-bottom-width: 2px;\n  color: #1A2229;\n  font-weight: 300; }\n\n.table-bordered > tbody > tr > td {\n  color: #707070; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd; }\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 4px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.table.table-bordered.product-style > thead > tr > th, .table.table-bordered.product-style > tbody > tr > td, .table.table-bordered.product-style > tfoot > tr > td {\n  font-size: 14px;\n  text-align: center; }\n\n.table.table-bordered.product-style > thead > tr > th {\n  background-color: #00acac;\n  color: #fff;\n  font-weight: bold; }\n\n.table.table-bordered.product-style > thead > tr > th, .table.table-bordered.product-style > tbody > tr > td {\n  padding: 4px 4px !important;\n  line-height: 1.222; }\n\n.table.table-bordered.product-style > thead > tr > th > .form-control, .table.table-bordered.product-style > tbody > tr > td > .form-control {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50b3J5L3Byb2R1Y3RwdXJjaGFzZXMvcHJvZHVjdHB1cmNoYXNlc3ZpZXcvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcaW52ZW50b3J5XFxwcm9kdWN0cHVyY2hhc2VzXFxwcm9kdWN0cHVyY2hhc2Vzdmlld1xccHJvZHVjdHB1cmNoYXNlc3ZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCOztFQUVFLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCOzs7Ozs7RUFNRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCLEVBQUE7O0FBRS9COzs7Ozs7RUFNRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnRvcnkvcHJvZHVjdHB1cmNoYXNlcy9wcm9kdWN0cHVyY2hhc2Vzdmlldy9wcm9kdWN0cHVyY2hhc2Vzdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xufVxuXG4uaW52b2ljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xufVxuLmludm9pY2UtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnRleHQtcmVkIHtcbiAgY29sb3I6ICNmNTY5NTQgIWltcG9ydGFudDtcbn1cbi50ZXh0LXllbGxvdyB7XG4gIGNvbG9yOiAjZjM5YzEyICFpbXBvcnRhbnQ7XG59XG4udGV4dC1hcXVhIHtcbiAgY29sb3I6ICMwMGMwZWYgIWltcG9ydGFudDtcbn1cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzAwNzNiNyAhaW1wb3J0YW50O1xufVxuLnRleHQtYmxhY2sge1xuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xufVxuLnRleHQtbGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAjM2M4ZGJjICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMDBhNjVhICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMkU3RUI7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGNvbG9yOiAjMUEyMjI5O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQge1xuICBib3JkZXItY29sb3I6ICNFMkU3RUI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoLFxuLnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoLFxuLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoLFxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkLFxuLnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkLFxuLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnRhYmxlPnRoZWFkPnRyPnRoIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG59XG4udGFibGU+dGhlYWQ+dHI+dGgsXG4udGFibGU+dGJvZHk+dHI+dGgsXG4udGFibGU+dGZvb3Q+dHI+dGgsXG4udGFibGU+dGhlYWQ+dHI+dGQsXG4udGFibGU+dGJvZHk+dHI+dGQsXG4udGFibGU+dGZvb3Q+dHI+dGQge1xuICBwYWRkaW5nOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGhlYWQgPiB0ciA+IHRoLCAudGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0aGVhZCA+IHRyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2FjO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGhlYWQgPiB0ciA+IHRoLCAudGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDRweCA0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuMjIyO1xufVxuXG4udGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRoZWFkID4gdHIgPiB0aCA+IC5mb3JtLWNvbnRyb2wsIC50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGJvZHkgPiB0ciA+IHRkID4gLmZvcm0tY29udHJvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProductpurchasesviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpurchasesviewPage", function() { return ProductpurchasesviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _service_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/inventory/inventory.service */ "./src/app/service/inventory/inventory.service.ts");







var ProductpurchasesviewPage = /** @class */ (function () {
    function ProductpurchasesviewPage(router, route, network, toastCtrl, inventoryService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.inventoryService = inventoryService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.productpurchaseID = this.route.snapshot.paramMap.get('purchaseID');
        this.doRefresh(false, false, this.productpurchaseID);
    }
    ProductpurchasesviewPage.prototype.ngOnInit = function () {
    };
    ProductpurchasesviewPage.prototype.presentToast = function () {
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
    ProductpurchasesviewPage.prototype.doRefresh = function (event, value, productpurchaseID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.inventoryService.getProductPurchasesView(value, productpurchaseID)
            .then(function (data) {
            _this.productpurchase = data.productpurchase;
            _this.products = data.products;
            _this.productpurchaseitems = data.productpurchaseitems;
            _this.productpurchasepaid = data.productpurchasepaid;
            _this.productsupplier = data.productsupplier;
            _this.productwarehouse = data.productwarehouse;
            _this.createuser = data.createuser;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'productpurchase')
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
    ProductpurchasesviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productpurchasesview',
            template: __webpack_require__(/*! ./productpurchasesview.page.html */ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.html"),
            styles: [__webpack_require__(/*! ./productpurchasesview.page.scss */ "./src/app/pages/inventory/productpurchases/productpurchasesview/productpurchasesview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_6__["InventoryService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], ProductpurchasesviewPage);
    return ProductpurchasesviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inventory-productpurchases-productpurchasesview-productpurchasesview-module.js.map