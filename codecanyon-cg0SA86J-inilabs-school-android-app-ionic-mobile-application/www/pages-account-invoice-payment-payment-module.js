(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-invoice-payment-payment-module"],{

/***/ "./src/app/pages/account/invoice/payment/payment.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/invoice/payment/payment.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/account/invoice/payment/payment.page.ts");







var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/invoice/payment/payment.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/invoice/payment/payment.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"padding-css\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true,inivoiceID)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-card-content class=\" box-body box-profile\">\n      <div class=\"imgcard p-text\" align=\"center\">\n        <img src=\"{{siteUrl}}uploads/images/{{studentprofile?.photo}}\" class=\"img2\" align=\"center\">\n      </div>\n      <h3 class=\"profile-username text-center\">{{studentprofile?.srname}}</h3>\n      <p class=\"text-muted text-center\">{{usertype?.usertype}}</p>\n      <ul class=\"list-group list-group-unbordered\">\n        <li class=\"list-group-item\" style=\"background-color: #FFF\">\n          <b>Register NO</b> <a class=\"pull-right\">{{studentprofile?.srregisterNO}}</a>\n        </li>\n        <li class=\"list-group-item\" style=\"background-color: #FFF\">\n          <b>Roll</b> <a class=\"pull-right\">{{studentprofile?.srroll}}</a>\n        </li>\n        <li class=\"list-group-item\" style=\"background-color: #FFF\">\n          <b>Class</b> <a class=\"pull-right\">{{studentprofile?.srclasses}}</a>\n        </li>\n        <li class=\"list-group-item\" style=\"background-color: #FFF\">\n          <b>Section</b> <a class=\"pull-right\">{{studentprofile?.srsection}}</a>\n        </li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"div-overflow-css\">\n    <table class=\"table table-bordered product-style\">\n      <thead>\n      <tr>\n        <th class=\"col-lg-2\">#</th>\n        <th class=\"col-lg-4\">{{language?.invoice_feetype}}</th>\n        <th class=\"col-lg-2\">{{language?.invoice_amount}}</th>\n        <th class=\"col-lg-2\">{{language?.invoice_due}}</th>\n        <th class=\"col-lg-2\">{{language?.invoice_paid_amount}}</th>\n      </tr>\n      </thead>\n      <tbody id=\"inputContainer\">\n      <tr  *ngFor=\"let invoice of invoices let rowIndex = index\">\n        <td data-title=\"#\">{{rowIndex+1}}</td>\n        <td data-title=\"Fee Type\">{{invoice.feetype}}</td>\n        <td data-title=\"Amount\">{{invoice.amount}}</td>\n        <td data-title=\"Discount\">{{invoiceDue[invoice.invoiceID]}}</td>\n        <td data-title=\"Subtotal\"> <ion-input type=\"number\" (ionInput)=\"getSum()\" name=\"{{invoice.invoiceID}}\" placeholder=\"00.0\"></ion-input></td>\n      </tr>\n      </tbody>\n      <tfoot>\n      <tr>\n        <td colspan=\"2\"><span class=\"pull-right\"><b>{{language?.invoice_total}}</b></span></td>\n        <td><b>{{totalAmount}}</b></td>\n        <td><b>{{totalDue}}</b></td>\n        <td><b>{{paidAmount}}</b></td>\n      </tr>\n      </tfoot>\n    </table>\n  </div>\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" color=\"success\" *ngIf=\"paidPayment?.length > 0\" (click)=\"openDetailsWithQueryParams()\" >Stripe</ion-button>\n    </ion-col>\n<!--    <ion-col>-->\n<!--      <ion-button expand=\"full\" color=\"success\" *ngIf=\"paidPayment?.length > 0\" (click)=\"openDetailsWithRazorPay()\" >RazorPay</ion-button>-->\n<!--    </ion-col>-->\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/invoice/payment/payment.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/invoice/payment/payment.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  background: #fff;\n  border: 1px solid #f4f4f4; }\n\n.font-size {\n  font-size: 13px !important; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.invoice {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  background: #fff;\n  border: 1px solid #f4f4f4; }\n\n.invoice-title {\n  margin-top: 0; }\n\n.text-red {\n  color: #f56954 !important; }\n\n.text-yellow {\n  color: #f39c12 !important; }\n\n.text-aqua {\n  color: #00c0ef !important; }\n\n.text-blue {\n  color: #0073b7 !important; }\n\n.text-black {\n  color: #222222 !important; }\n\n.text-light-blue {\n  color: #3c8dbc !important; }\n\n.text-green {\n  color: #00a65a !important; }\n\n.img-circle {\n  border-radius: 50%; }\n\nimg {\n  max-width: 100% !important; }\n\nimg {\n  vertical-align: middle; }\n\nimg {\n  border: 0; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.table-bordered {\n  border: 1px solid #E2E7EB; }\n\n.table-bordered > thead > tr > th {\n  border-bottom-width: 2px;\n  color: #1A2229;\n  font-weight: 300; }\n\n.table-bordered > tbody > tr > td {\n  color: #707070; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd; }\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 4px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.table.table-bordered.product-style > thead > tr > th, .table.table-bordered.product-style > tbody > tr > td, .table.table-bordered.product-style > tfoot > tr > td {\n  font-size: 14px;\n  text-align: center; }\n\n.table.table-bordered.product-style > thead > tr > th {\n  background-color: #00acac;\n  color: #fff;\n  font-weight: bold; }\n\n.table.table-bordered.product-style > thead > tr > th, .table.table-bordered.product-style > tbody > tr > td {\n  padding: 4px 4px !important;\n  line-height: 1.222; }\n\n.table.table-bordered.product-style > thead > tr > th > .form-control, .table.table-bordered.product-style > tbody > tr > td > .form-control {\n  text-align: center; }\n\n.padding-css {\n  --padding-start: 8px !important;\n  --padding-end: 8px !important;\n  --padding-top: 8px !important;\n  --padding-bottom: 8px !important; }\n\n.img2 {\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n  margin: auto;\n  border: 3px solid #d2d6de;\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.imgcard {\n  margin: 5px; }\n\n.box {\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  width: 100%; }\n\n.box .box-header {\n  position: relative;\n  background-color: #23292F; }\n\n.box .box-body {\n  padding: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.profile-username {\n  font-size: 18px !important;\n  margin-top: 2px; }\n\n.text-center {\n  text-align: center; }\n\n.text-muted {\n  color: #999; }\n\np {\n  margin: 0 0 10px; }\n\n.list-group {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-bottom: 20px; }\n\nul, ol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #D9E0E7;\n  border: 1px solid #ddd; }\n\n.pull-right {\n  float: right !important; }\n\n.profile-user-img {\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  padding: 3px;\n  border: 3px solid #d2d6de; }\n\n.img-circle {\n  border-radius: 50%; }\n\n.card-content-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  font-size: 11px !important;\n  line-height: 1.2 !important; }\n\n.sc-ion-card-md-h {\n  -webkit-margin-start: 0px !important;\n          margin-inline-start: 0px !important;\n  -webkit-margin-end: 0px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9pbnZvaWNlL3BheW1lbnQvRDpcXHNjaG9vbEFwcFxcc2Nob29sYXBwL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcaW52b2ljZVxccGF5bWVudFxccGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7O0VBRUUscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7Ozs7OztFQU1FLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTs7QUFFL0I7Ozs7OztFQU1FLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwrQkFBZ0I7RUFDaEIsNkJBQWM7RUFDZCw2QkFBYztFQUNkLGdDQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFHekIsbURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UsV0FBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFHbkIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0Usb0NBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2ludm9pY2UvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xyXG59XHJcbi5mb250LXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXYtb3ZlcmZsb3ctY3NzIHtcclxuICBvdmVyZmxvdy14OnNjcm9sbDtcclxufVxyXG4uaW52b2ljZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcclxufVxyXG4uaW52b2ljZS10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4udGV4dC1yZWQge1xyXG4gIGNvbG9yOiAjZjU2OTU0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQteWVsbG93IHtcclxuICBjb2xvcjogI2YzOWMxMiAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWFxdWEge1xyXG4gIGNvbG9yOiAjMDBjMGVmICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtYmx1ZSB7XHJcbiAgY29sb3I6ICMwMDczYjcgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ibGFjayB7XHJcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1saWdodC1ibHVlIHtcclxuICBjb2xvcjogIzNjOGRiYyAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWdyZWVuIHtcclxuICBjb2xvcjogIzAwYTY1YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLWNpcmNsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaW1nIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTJFN0VCO1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIGNvbG9yOiAjMUEyMjI5O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXHJcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRTJFN0VCO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoLFxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsXHJcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aCxcclxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkLFxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXHJcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnRhYmxlPnRoZWFkPnRyPnRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG59XHJcbi50YWJsZT50aGVhZD50cj50aCxcclxuLnRhYmxlPnRib2R5PnRyPnRoLFxyXG4udGFibGU+dGZvb3Q+dHI+dGgsXHJcbi50YWJsZT50aGVhZD50cj50ZCxcclxuLnRhYmxlPnRib2R5PnRyPnRkLFxyXG4udGFibGU+dGZvb3Q+dHI+dGQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFjYWM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGhlYWQgPiB0ciA+IHRoLCAudGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgcGFkZGluZzogNHB4IDRweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjIyMjtcclxufVxyXG5cclxuLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0aGVhZCA+IHRyID4gdGggPiAuZm9ybS1jb250cm9sLCAudGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRib2R5ID4gdHIgPiB0ZCA+IC5mb3JtLWNvbnRyb2wge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZGRpbmctY3NzIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nMntcclxuICB3aWR0aDogODVweDtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZDJkNmRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmltZ2NhcmR7XHJcbiAgbWFyZ2luOiAgNXB4O1xyXG59XHJcbi5ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib3ggLmJveC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyOTJGO1xyXG59XHJcbi5ib3ggLmJveC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbn1cclxuLnByb2ZpbGUtdXNlcm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxudWwsIG9sIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlFMEU3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLnB1bGwtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItaW1nIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2QyZDZkZTtcclxufVxyXG5cclxuLmltZy1jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1tZCB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtbWFyZ2luLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/account/invoice/payment/payment.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/account/invoice/payment/payment.page.ts ***!
  \***************************************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/account/account.service */ "./src/app/service/account/account.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../config/config */ "./src/config/config.ts");








var PaymentPage = /** @class */ (function () {
    function PaymentPage(router, route, network, toastCtrl, accountService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.accountService = accountService;
        this.langandpermissionService = langandpermissionService;
        this.paidAmount = '00.0';
        this.paidPayment = [];
        this.isRefresh = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
        this.inivoiceID = this.route.snapshot.paramMap.get('invoiceID');
        this.doRefresh(false, false, this.inivoiceID);
    }
    PaymentPage.prototype.ngOnInit = function () {
    };
    PaymentPage.prototype.presentToast = function () {
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
    PaymentPage.prototype.getSum = function () {
        var container = document.getElementById('inputContainer');
        var inputElements = container.getElementsByClassName('native-input');
        this.paidAmount = 0;
        var eachInput;
        this.paidPayment = [];
        for (var i = 0; i < inputElements.length; i++) {
            eachInput = inputElements.item(i);
            this.paidAmount += Number(eachInput.value);
            this.paidPayment.push({ 'invoiceID': eachInput.name, 'amount': Number(eachInput.value) });
        }
        console.log(this.paidPayment);
    };
    PaymentPage.prototype.openDetailsWithQueryParams = function () {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.paidPayment),
                totalAmount: this.paidAmount,
                mainInivoiceID: this.inivoiceID
            }
        };
        this.router.navigate(['stripe'], navigationExtras);
    };
    PaymentPage.prototype.openDetailsWithRazorPay = function () {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.paidPayment),
                totalAmount: this.paidAmount,
                mainInivoiceID: this.inivoiceID
            }
        };
        this.router.navigate(['razorpay'], navigationExtras);
    };
    PaymentPage.prototype.doRefresh = function (event, value, inivoiceID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.accountService.getInvoicePayment(value, inivoiceID)
            .then(function (data) {
            console.log(data);
            _this.usertype = data.usertype;
            _this.student = data.student;
            _this.studentprofile = data.studentprofile;
            _this.invoices = data.invoices;
            _this.invoiceDue = data.invoiceDue;
            _this.totalAmount = data.totalAmount;
            _this.totalDue = data.totalDue;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'invoice')
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
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.page.html */ "./src/app/pages/account/invoice/payment/payment.page.html"),
            styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/account/invoice/payment/payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_6__["LangandparmisionService"]])
    ], PaymentPage);
    return PaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-invoice-payment-payment-module.js.map