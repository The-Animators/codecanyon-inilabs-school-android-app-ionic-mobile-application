(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payroll-overtime-overtime-module"],{

/***/ "./src/app/pages/payroll/overtime/overtime.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/payroll/overtime/overtime.module.ts ***!
  \***********************************************************/
/*! exports provided: OvertimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimePageModule", function() { return OvertimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtime.page */ "./src/app/pages/payroll/overtime/overtime.page.ts");







var routes = [
    {
        path: '',
        component: _overtime_page__WEBPACK_IMPORTED_MODULE_6__["OvertimePage"]
    }
];
var OvertimePageModule = /** @class */ (function () {
    function OvertimePageModule() {
    }
    OvertimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_overtime_page__WEBPACK_IMPORTED_MODULE_6__["OvertimePage"]]
        })
    ], OvertimePageModule);
    return OvertimePageModule;
}());



/***/ }),

/***/ "./src/app/pages/payroll/overtime/overtime.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/payroll/overtime/overtime.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event ,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"overtimes\">\n    <ion-card  class=\"card-student-css\" *ngFor=\"let overtime of overtimes\" >\n      <div style=\"margin: 8px;\">\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/boy.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.overtime_role}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{roles[overtime?.usertypeID]}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/teacher.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.overtime_user}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{allUsers[overtime?.usertypeID][overtime?.userID]?.name}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.overtime_date}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{overtime?.date | date: \"dd MMM yyyy\"}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/routine.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.overtime_hours}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{overtime?.hours}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-item-css\" >\n          <ion-avatar class=\"avatar-img\">\n            <img src=\"assets/plant.png\" />\n          </ion-avatar>\n          <ion-label>\n            <h4 class=\"ion-text-h\">{{language?.overtime_total_amount}}</h4>\n            <ion-text color=\"secondary\">\n              <p class=\"ion-text-p\">{{overtime?.amount}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/payroll/overtime/overtime.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/payroll/overtime/overtime.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-img {\n  width: 80%;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 15px; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.div-overflow-css {\n  overflow-x: scroll; }\n\n.div-margin-css {\n  margin-top: 10px; }\n\n.ion-card-span {\n  font-weight: bold; }\n\n.ion-icon-css {\n  float: right; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.card-header {\n  --background: #1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC9vdmVydGltZS9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwYXlyb2xsXFxvdmVydGltZVxcb3ZlcnRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDO0VBRzFDLG1EQUFtRCxFQUFBOztBQUVyRDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJDQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLDhCQUFhLEVBQUE7O0FBR2Y7RUFDRSxvQ0FBb0MsRUFBQTs7QUFJdEM7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQWEsRUFBQTs7QUFFZjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5cm9sbC9vdmVydGltZS9vdmVydGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN0dWRlbnQtaW1ne1xyXG4gIHdpZHRoOjgwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuLmF2YXRhci1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmlvbi1pdGVtLWNzc3tcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhZGFkYWZmYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1kaXYge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4udGV4dC1oIHtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnRleHQtcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uY2FyZC1zdHVkZW50LWNzcyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuXHJcbi5kaXYtb3ZlcmZsb3ctY3NzIHtcclxuICBvdmVyZmxvdy14OnNjcm9sbDtcclxufVxyXG4uZGl2LW1hcmdpbi1jc3Mge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmlvbi1jYXJkLXNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pb24taWNvbi1jc3Mge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uYmctY2xhc3N7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGl2LWJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5pb24taXRlbS1jc3N7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhci1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4udGV4dC1kaXYge1xyXG4gIHRleHQtYWxpZ246c3RhcnQ7XHJcbn1cclxuXHJcbi50ZXh0LWgge1xyXG4gIGZvbnQtc2l6ZToxN3B4O1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbi50ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnJlbGF0aXZlLWNhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogNTBweDtcclxufVxyXG4uaW1nY2FyZHtcclxuICBtYXJnaW46ICAxMHB4O1xyXG59XHJcbi5jYXJkLWJne1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG59XHJcbi5jYXJkLWhlYWRlcjF7XHJcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG4uY2FyZC1oZWFkZXIye1xyXG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzFEMjIzYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuLmltZzJ7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcbi5pb25ub3Rle1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLnJvdyBwIHtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4uaXRlbXtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTg5YWEyO1xyXG59XHJcbi5pdGVtLXAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG4udXNlcm5hbWV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uaGVkZGluZ3tcclxuICBsaW5lLWhlaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmlvbi10ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uaW9uLXRleHQtaCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/payroll/overtime/overtime.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payroll/overtime/overtime.page.ts ***!
  \*********************************************************/
/*! exports provided: OvertimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimePage", function() { return OvertimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _service_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/payroll/payroll.service */ "./src/app/service/payroll/payroll.service.ts");








var OvertimePage = /** @class */ (function () {
    function OvertimePage(payrollService, network, toastCtrl, langandpermissionService, route) {
        this.payrollService = payrollService;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.langandpermissionService = langandpermissionService;
        this.route = route;
        this.isRefresh = true;
        this.doRefresh(false, false);
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["fileUrl"];
    }
    OvertimePage.prototype.ngOnInit = function () {
    };
    OvertimePage.prototype.presentToast = function () {
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
    OvertimePage.prototype.doRefresh = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.payrollService.getOvertime(value)
            .then(function (data) {
            _this.overtimes = data.overtimes;
            _this.roles = data.roles;
            _this.allUsers = data.allUsers;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'overtime')
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
    OvertimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtime',
            template: __webpack_require__(/*! ./overtime.page.html */ "./src/app/pages/payroll/overtime/overtime.page.html"),
            styles: [__webpack_require__(/*! ./overtime.page.scss */ "./src/app/pages/payroll/overtime/overtime.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_7__["PayrollService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], OvertimePage);
    return OvertimePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payroll-overtime-overtime-module.js.map