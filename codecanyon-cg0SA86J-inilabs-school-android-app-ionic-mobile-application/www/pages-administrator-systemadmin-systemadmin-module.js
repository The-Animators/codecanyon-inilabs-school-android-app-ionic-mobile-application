(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-administrator-systemadmin-systemadmin-module"],{

/***/ "./src/app/pages/administrator/systemadmin/systemadmin.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/administrator/systemadmin/systemadmin.module.ts ***!
  \***********************************************************************/
/*! exports provided: SystemadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemadminPageModule", function() { return SystemadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _systemadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systemadmin.page */ "./src/app/pages/administrator/systemadmin/systemadmin.page.ts");







var routes = [
    {
        path: '',
        component: _systemadmin_page__WEBPACK_IMPORTED_MODULE_6__["SystemadminPage"]
    }
];
var SystemadminPageModule = /** @class */ (function () {
    function SystemadminPageModule() {
    }
    SystemadminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_systemadmin_page__WEBPACK_IMPORTED_MODULE_6__["SystemadminPage"]]
        })
    ], SystemadminPageModule);
    return SystemadminPageModule;
}());



/***/ }),

/***/ "./src/app/pages/administrator/systemadmin/systemadmin.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/administrator/systemadmin/systemadmin.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\" >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"systemadmins\">\n    <ion-card  class=\"card-student-css\" *ngFor=\"let user of systemadmins\" routerLink=\"/systemadminview/{{user.systemadminID}}\">\n      <div style=\"margin: 8px;\" *ngIf=\"user.systemadminID != 1\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{user.photo}}\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"text-div\">\n              <h3 class=\"text-h\">{{user.name}}</h3>\n              <p class=\"text-p\">{{user.usertype}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/email.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.systemadmin_email}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{user.email}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/sms.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.systemadmin_phone}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{user.phone}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/administrator/systemadmin/systemadmin.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/administrator/systemadmin/systemadmin.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9zeXN0ZW1hZG1pbi9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhZG1pbmlzdHJhdG9yXFxzeXN0ZW1hZG1pblxcc3lzdGVtYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxvQ0FBb0MsRUFBQTs7QUFJdEM7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQWEsRUFBQTs7QUFFZjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9zeXN0ZW1hZG1pbi9zeXN0ZW1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zdHVkZW50LWltZ3tcbiAgd2lkdGg6ODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnRleHQtaCB7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2FyZC1zdHVkZW50LWNzcyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuXG4uZGl2LW92ZXJmbG93LWNzcyB7XG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xufVxuLmRpdi1tYXJnaW4tY3NzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pb24tY2FyZC1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW9uLWljb24tY3NzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcblxufVxuXG4uaW9uLWl0ZW0tY3Nze1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4udGV4dC1oIHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xufVxuLmltZ2NhcmR7XG4gIG1hcmdpbjogIDEwcHg7XG59XG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4uY2FyZC1oZWFkZXIxe1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLmNhcmQtaGVhZGVyMntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uaW1nMntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5pb25ub3Rle1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5yb3cgcCB7XG4gIGNvbG9yOmJsYWNrO1xufVxuLml0ZW17XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5ODlhYTI7XG59XG4uaXRlbS1wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VybmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oZWRkaW5ne1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/administrator/systemadmin/systemadmin.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/administrator/systemadmin/systemadmin.page.ts ***!
  \*********************************************************************/
/*! exports provided: SystemadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemadminPage", function() { return SystemadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/administrator/administrator.service */ "./src/app/service/administrator/administrator.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








var SystemadminPage = /** @class */ (function () {
    function SystemadminPage(router, route, network, toastCtrl, administratorService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.administratorService = administratorService;
        this.langandpermissionService = langandpermissionService;
        this.isRefresh = true;
        this.doRefresh(false, false);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["fileUrl"];
    }
    SystemadminPage.prototype.ngOnInit = function () {
    };
    SystemadminPage.prototype.presentToast = function () {
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
    SystemadminPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.administratorService.getSystemAdmin(value)
            .then(function (data) {
            _this.systemadmins = data.systemadmins;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'systemadmin')
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
    SystemadminPage.prototype.getSystemadminView = function (adminID) {
        this.router.navigate(['/systemadminview', adminID]);
    };
    SystemadminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-systemadmin',
            template: __webpack_require__(/*! ./systemadmin.page.html */ "./src/app/pages/administrator/systemadmin/systemadmin.page.html"),
            styles: [__webpack_require__(/*! ./systemadmin.page.scss */ "./src/app/pages/administrator/systemadmin/systemadmin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _service_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], SystemadminPage);
    return SystemadminPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-administrator-systemadmin-systemadmin-module.js.map