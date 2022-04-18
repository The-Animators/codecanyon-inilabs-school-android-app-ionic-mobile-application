(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-invoice-invoiceview-invoiceview-module"],{

/***/ "./src/app/pages/account/invoice/invoiceview/invoiceview.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/invoice/invoiceview/invoiceview.module.ts ***!
  \*************************************************************************/
/*! exports provided: InvoiceviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceviewPageModule", function() { return InvoiceviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoiceview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoiceview.page */ "./src/app/pages/account/invoice/invoiceview/invoiceview.page.ts");







var routes = [
    {
        path: '',
        component: _invoiceview_page__WEBPACK_IMPORTED_MODULE_6__["InvoiceviewPage"]
    }
];
var InvoiceviewPageModule = /** @class */ (function () {
    function InvoiceviewPageModule() {
    }
    InvoiceviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invoiceview_page__WEBPACK_IMPORTED_MODULE_6__["InvoiceviewPage"]]
        })
    ], InvoiceviewPageModule);
    return InvoiceviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/invoice/invoiceview/invoiceview.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/invoice/invoiceview/invoiceview.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-overflow-css\">\n    <ion-row class=\"invoice-info\">\n      <ion-col [size]=\"8\" class=\" invoice-col font-size\" >\n          {{language?.invoice_from}}\n          <address>\n          <strong>{{siteinfos?.sname}}</strong><br>\n          {{siteinfos?.address}}<br>\n          {{language?.invoice_phone}} : {{siteinfos?.phone}}<br>\n            {{language?.invoice_email}} : {{siteinfos?.email}}<br>\n        </address>\n      </ion-col>\n      <ion-col [size]=\"4\" class=\"font-size\">\n        <b>{{language?.invoice_invoice}}{{maininvoice?.maininvoiceID}}</b><br>\n        {{language?.invoice_status}} : <span class=\"text-green\" *ngIf=\"maininvoice?.maininvoicestatus==2\">{{language?.invoice_fully_paid}}</span><span class=\"text-green\" *ngIf=\"maininvoice?.maininvoicestatus==1\">{{language?.invoice_partially_paid}}</span><span class=\"text-green\" *ngIf=\"maininvoice?.maininvoicestatus==0\">{{language?.invoice_notpaid}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"font-size\" >\n        {{language?.invoice_to}}\n        <address>\n        <strong>{{maininvoice?.srname}}</strong><br>\n        {{language?.invoice_roll}} : {{maininvoice?.srroll}}<br>\n        {{language?.invoice_class}} : {{maininvoice?.srclasses}}<br>\n        {{language?.invoice_registerno}} :{{maininvoice?.registerNO}}<br>\n      </address>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div class=\"div-overflow-css\">\n          <table class=\"table table-bordered product-style\">\n            <thead>\n            <tr>\n              <th class=\"col-lg-2\">#</th>\n              <th class=\"col-lg-4\">{{language?.invoice_feetype}}</th>\n              <th class=\"col-lg-2\">{{language?.invoice_amount}}</th>\n              <th class=\"col-lg-2\">{{language?.invoice_discount}}</th>\n              <th class=\"col-lg-2\">{{language?.invoice_subtotal}}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let invoice of invoices let rowIndex = index\">\n              <td data-title=\"#\">{{rowIndex+1}}</td>\n              <td data-title=\"Fee Type\">{{invoice.feetype}}</td>\n              <td data-title=\"Amount\">{{invoice.amount}}</td>\n              <td data-title=\"Discount\">{{invoice?.dicountamount}}</td>\n              <td data-title=\"Subtotal\">{{invoice?.subtotal}} </td>\n            </tr>\n            </tbody>\n            <tfoot>\n            <tr>\n              <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.invoice_totalamount}}</b></span></td>\n              <td><b>{{grandtotalandpayment?.totalamount}}</b></td>\n            </tr>\n            <tr>\n              <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.invoice_totalpaid}}</b></span></td>\n              <td><b>{{grandtotalandpayment?.totalpayment}}</b></td>\n            </tr>\n            <tr>\n              <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.invoice_totalweaver}}</b></span></td>\n              <td><b>{{grandtotalandpayment?.totalweaver}}</b></td>\n            </tr>\n            <tr>\n              <td colspan=\"4\"><span class=\"pull-right\"><b>Balance (USD)</b></span></td>\n              <td><b>{{grandtotalandpayment?.balanceamount}}</b></td>\n            </tr>\n            <tr>\n              <td colspan=\"4\"><span class=\"pull-right\"><b>{{language?.invoice_fine}}</b></span></td>\n              <td><b>{{grandtotalandpayment?.totalfine}}</b></td>\n            </tr>\n            </tfoot>\n          </table>\n\n      <div class=\"col-sm-3 col-xs-12 pull-right\">\n        <div class=\"well well-sm\">\n          <p>\n            {{language?.invoice_create_by}} : {{createuser}} <br>\n            {{language?.invoice_date}} : {{maininvoice?.maininvoicedate |date: \"dd MMM yyyy\" }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/invoice/invoiceview/invoiceview.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/invoice/invoiceview/invoiceview.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  background: #fff;\n  border: 1px solid #f4f4f4; }\n\n.font-size {\n  font-size: 13px !important; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.invoice {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  background: #fff;\n  border: 1px solid #f4f4f4; }\n\n.invoice-title {\n  margin-top: 0; }\n\n.text-red {\n  color: #f56954 !important; }\n\n.text-yellow {\n  color: #f39c12 !important; }\n\n.text-aqua {\n  color: #00c0ef !important; }\n\n.text-blue {\n  color: #0073b7 !important; }\n\n.text-black {\n  color: #222222 !important; }\n\n.text-light-blue {\n  color: #3c8dbc !important; }\n\n.text-green {\n  color: #00a65a !important; }\n\n.img-circle {\n  border-radius: 50%; }\n\nimg {\n  max-width: 100% !important; }\n\nimg {\n  vertical-align: middle; }\n\nimg {\n  border: 0; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.table-bordered {\n  border: 1px solid #E2E7EB; }\n\n.table-bordered > thead > tr > th {\n  border-bottom-width: 2px;\n  color: #1A2229;\n  font-weight: 300; }\n\n.table-bordered > tbody > tr > td {\n  color: #707070; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd; }\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 4px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.table.table-bordered.product-style > thead > tr > th, .table.table-bordered.product-style > tbody > tr > td, .table.table-bordered.product-style > tfoot > tr > td {\n  font-size: 14px;\n  text-align: center; }\n\n.table.table-bordered.product-style > thead > tr > th {\n  background-color: #00acac;\n  color: #fff;\n  font-weight: bold; }\n\n.table.table-bordered.product-style > thead > tr > th, .table.table-bordered.product-style > tbody > tr > td {\n  padding: 4px 4px !important;\n  line-height: 1.222; }\n\n.table.table-bordered.product-style > thead > tr > th > .form-control, .table.table-bordered.product-style > tbody > tr > td > .form-control {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9pbnZvaWNlL2ludm9pY2V2aWV3L0Q6XFxzY2hvb2xBcHBcXHNjaG9vbGFwcC9zcmNcXGFwcFxccGFnZXNcXGFjY291bnRcXGludm9pY2VcXGludm9pY2V2aWV3XFxpbnZvaWNldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7O0VBRUUscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7Ozs7OztFQU1FLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTs7QUFFL0I7Ozs7OztFQU1FLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvaW52b2ljZS9pbnZvaWNldmlldy9pbnZvaWNldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xufVxuLmZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuLmRpdi1vdmVyZmxvdy1jc3Mge1xuICBvdmVyZmxvdy14OnNjcm9sbDtcbn1cbi5pbnZvaWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XG59XG4uaW52b2ljZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4udGV4dC1yZWQge1xuICBjb2xvcjogI2Y1Njk1NCAhaW1wb3J0YW50O1xufVxuLnRleHQteWVsbG93IHtcbiAgY29sb3I6ICNmMzljMTIgIWltcG9ydGFudDtcbn1cbi50ZXh0LWFxdWEge1xuICBjb2xvcjogIzAwYzBlZiAhaW1wb3J0YW50O1xufVxuLnRleHQtYmx1ZSB7XG4gIGNvbG9yOiAjMDA3M2I3ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ibGFjayB7XG4gIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XG59XG4udGV4dC1saWdodC1ibHVlIHtcbiAgY29sb3I6ICMzYzhkYmMgIWltcG9ydGFudDtcbn1cbi50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMwMGE2NWEgIWltcG9ydGFudDtcbn1cblxuLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW1nIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTdFQjtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgY29sb3I6ICMxQTIyMjk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQge1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCxcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1jb2xvcjogI0UyRTdFQjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGgsXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQsXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXG4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGU+dGhlYWQ+dHI+dGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbn1cbi50YWJsZT50aGVhZD50cj50aCxcbi50YWJsZT50Ym9keT50cj50aCxcbi50YWJsZT50Zm9vdD50cj50aCxcbi50YWJsZT50aGVhZD50cj50ZCxcbi50YWJsZT50Ym9keT50cj50ZCxcbi50YWJsZT50Zm9vdD50cj50ZCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRmb290ID4gdHIgPiB0ZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGUudGFibGUtYm9yZGVyZWQucHJvZHVjdC1zdHlsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFjYWM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogNHB4IDRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS4yMjI7XG59XG5cbi50YWJsZS50YWJsZS1ib3JkZXJlZC5wcm9kdWN0LXN0eWxlID4gdGhlYWQgPiB0ciA+IHRoID4gLmZvcm0tY29udHJvbCwgLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnByb2R1Y3Qtc3R5bGUgPiB0Ym9keSA+IHRyID4gdGQgPiAuZm9ybS1jb250cm9sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/account/invoice/invoiceview/invoiceview.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/invoice/invoiceview/invoiceview.page.ts ***!
  \***********************************************************************/
/*! exports provided: InvoiceviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceviewPage", function() { return InvoiceviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/account/account.service */ "./src/app/service/account/account.service.ts");







var InvoiceviewPage = /** @class */ (function () {
    function InvoiceviewPage(router, route, network, toastCtrl, accountService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.accountService = accountService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.inivoiceID = this.route.snapshot.paramMap.get('invoiceID');
        this.doRefresh(false, false, this.inivoiceID);
    }
    InvoiceviewPage.prototype.ngOnInit = function () {
    };
    InvoiceviewPage.prototype.presentToast = function () {
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
    InvoiceviewPage.prototype.doRefresh = function (event, value, inivoiceID) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.accountService.getInvoiceView(value, inivoiceID)
            .then(function (data) {
            _this.student = data.student;
            _this.invoices = data.invoices;
            _this.grandtotalandpayment = data.grandtotalandpayment;
            _this.createuser = data.createuser;
            _this.maininvoice = data.maininvoice;
            _this.siteinfos = data.siteinfos;
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
    InvoiceviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoiceview',
            template: __webpack_require__(/*! ./invoiceview.page.html */ "./src/app/pages/account/invoice/invoiceview/invoiceview.page.html"),
            styles: [__webpack_require__(/*! ./invoiceview.page.scss */ "./src/app/pages/account/invoice/invoiceview/invoiceview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _service_account_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_5__["LangandparmisionService"]])
    ], InvoiceviewPage);
    return InvoiceviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-invoice-invoiceview-invoiceview-module.js.map