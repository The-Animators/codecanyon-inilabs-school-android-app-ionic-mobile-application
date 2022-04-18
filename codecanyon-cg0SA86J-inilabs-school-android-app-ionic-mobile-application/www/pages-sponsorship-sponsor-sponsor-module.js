(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sponsorship-sponsor-sponsor-module"],{

/***/ "./src/app/pages/sponsorship/sponsor/sponsor.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsor/sponsor.module.ts ***!
  \*************************************************************/
/*! exports provided: SponsorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorPageModule", function() { return SponsorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sponsor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsor.page */ "./src/app/pages/sponsorship/sponsor/sponsor.page.ts");







var routes = [
    {
        path: '',
        component: _sponsor_page__WEBPACK_IMPORTED_MODULE_6__["SponsorPage"]
    }
];
var SponsorPageModule = /** @class */ (function () {
    function SponsorPageModule() {
    }
    SponsorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sponsor_page__WEBPACK_IMPORTED_MODULE_6__["SponsorPage"]]
        })
    ], SponsorPageModule);
    return SponsorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sponsorship/sponsor/sponsor.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsor/sponsor.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"sponsors\">\n    <ion-card  class=\"card-student-css\" *ngFor=\"let sponsor of sponsors\" routerLink=\"/sponsorview/{{sponsor.sponsorID}}\" >\n      <div style=\"margin: 8px;\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{sponsor.photo}}\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h3 class=\"text-h\">{{sponsor.name}}</h3>\n              <p class=\"text-p\">{{language?.sponsor_phone}}: {{sponsor.phone}}</p>\n              <p class=\"text-p\">{{language?.sponsor_country}}: {{allcountry[sponsor?.country]}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/boy.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.sponsor_secondary_field}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{sponsor.organisation_name}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sponsorship/sponsor/sponsor.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsor/sponsor.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BvbnNvcnNoaXAvc3BvbnNvci9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzcG9uc29yc2hpcFxcc3BvbnNvclxcc3BvbnNvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxVQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMkNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsOEJBQWEsRUFBQTs7QUFHZjtFQUNFLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcG9uc29yc2hpcC9zcG9uc29yL3Nwb25zb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdHVkZW50LWltZ3tcclxuICB3aWR0aDo4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcbi5hdmF0YXItaW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pb24taXRlbS1jc3N7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZGl2IHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLnRleHQtaCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmNhcmQtc3R1ZGVudC1jc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uZGl2LW92ZXJmbG93LWNzcyB7XHJcbiAgb3ZlcmZsb3cteDpzY3JvbGw7XHJcbn1cclxuLmRpdi1tYXJnaW4tY3NzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5pb24tY2FyZC1zcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW9uLWljb24tY3NzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJnLWNsYXNze1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdi1iZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYxOTYxICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaW9uLWl0ZW0tY3Nze1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkYWRhZmZjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXItaW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRleHQtZGl2IHtcclxuICB0ZXh0LWFsaWduOnN0YXJ0O1xyXG59XHJcblxyXG4udGV4dC1oIHtcclxuICBmb250LXNpemU6MTdweDtcclxuICBjb2xvcjojMDAwMDAwO1xyXG59XHJcblxyXG4udGV4dC1wIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZS1jYXJke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDUwcHg7XHJcbn1cclxuLmltZ2NhcmR7XHJcbiAgbWFyZ2luOiAgMTBweDtcclxufVxyXG4uY2FyZC1iZ3tcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxufVxyXG4uY2FyZC1oZWFkZXIxe1xyXG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyMntcclxuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICMxRDIyM2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbi5pbWcye1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uaW9ubm90ZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yb3cge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5yb3cgcCB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuLml0ZW17XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcclxufVxyXG4uaXRlbS1wIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuLnVzZXJuYW1le1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmhlZGRpbmd7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1wIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmlvbi10ZXh0LWgge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/sponsorship/sponsor/sponsor.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sponsorship/sponsor/sponsor.page.ts ***!
  \***********************************************************/
/*! exports provided: SponsorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorPage", function() { return SponsorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_sponsorship_sponsorship_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/sponsorship/sponsorship.service */ "./src/app/service/sponsorship/sponsorship.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");









var SponsorPage = /** @class */ (function () {
    function SponsorPage(router, route, sponsorshipService, network, toastCtrl, loadingCtrl, alertCtrl, menuCtrl, storage, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.sponsorshipService = sponsorshipService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"];
        this.getCandidate();
    }
    SponsorPage.prototype.ngOnInit = function () { };
    SponsorPage.prototype.presentToast = function () {
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
    SponsorPage.prototype.getCandidateView = function (sponsorID) {
        this.router.navigate(['/sponsorview', sponsorID]);
    };
    SponsorPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.sponsorshipService.getSponsor(value)
                .then(function (data) {
                _this.sponsors = data.sponsors;
                _this.allcountry = data.allcountry;
            });
            this.langandpermissionService.getLangandPermissionCall(value, 'sponsor')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
            });
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    SponsorPage.prototype.getCandidate = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        else {
            this.langandpermissionService.getLangandPermissionCall(false, 'sponsor')
                .then(function (data) {
                _this.permission = data.permission;
                _this.language = data.language;
                _this.sponsorshipService.getSponsor(false).then(function (data) {
                    _this.sponsors = data.sponsors;
                    _this.allcountry = data.allcountry;
                });
            });
        }
    };
    SponsorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sponsor',
            template: __webpack_require__(/*! ./sponsor.page.html */ "./src/app/pages/sponsorship/sponsor/sponsor.page.html"),
            styles: [__webpack_require__(/*! ./sponsor.page.scss */ "./src/app/pages/sponsorship/sponsor/sponsor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_sponsorship_sponsorship_service__WEBPACK_IMPORTED_MODULE_3__["SponsorshipService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_7__["LangandparmisionService"]])
    ], SponsorPage);
    return SponsorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sponsorship-sponsor-sponsor-module.js.map