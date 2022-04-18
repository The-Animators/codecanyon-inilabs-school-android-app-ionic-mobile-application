(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parents-parents-module"],{

/***/ "./src/app/pages/parents/parents.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/parents/parents.module.ts ***!
  \*************************************************/
/*! exports provided: ParentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsPageModule", function() { return ParentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parents.page */ "./src/app/pages/parents/parents.page.ts");







var routes = [
    {
        path: '',
        component: _parents_page__WEBPACK_IMPORTED_MODULE_6__["ParentsPage"]
    }
];
var ParentsPageModule = /** @class */ (function () {
    function ParentsPageModule() {
    }
    ParentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_parents_page__WEBPACK_IMPORTED_MODULE_6__["ParentsPage"]]
        })
    ], ParentsPageModule);
    return ParentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parents/parents.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/parents/parents.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"bg-image no-scroll\" *ngIf=\"!myProfile\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card  class=\"card-parent-css\" *ngFor=\"let parent of parents\" routerLink=\"/parentsview/{{parent.parentsID}}\">\n    <div class=\"div-margin\" >\n      <ion-row>\n        <ion-col size=\"4\">\n          <img class=\"parent-img\" src=\"{{siteUrl}}uploads/images/{{parent.photo}}\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"text-div\">\n            <h3 class=\"h-text\">{{parent.name}}</h3>\n            <p class=\"p-text\">{{language?.parents_phone}}: {{parent.phone}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"ion-item-css\" >\n        <ion-avatar class=\"avatar-img\">\n          <img src=\"assets/email.png\" />\n        </ion-avatar>\n        <ion-label>\n          <h4 class=\"ion-text-h\">{{language?.parents_email}}</h4>\n          <ion-text color=\"secondary\">\n            <p class=\"ion-text-p\">{{parent.email}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item-css\" >\n        <ion-avatar class=\"avatar-img\">\n          <img src=\"assets/boy.png\" />\n        </ion-avatar>\n        <ion-label>\n          <h4 class=\"ion-text-h\">{{language?.parents_username}}</h4>\n          <ion-text color=\"secondary\">\n            <p class=\"ion-text-p\">{{parent.username}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>\n<ion-content padding *ngIf=\"myProfile\"  class=\"bg-image no-scroll\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshProfile($event,true)\" *ngIf=\"isRefresh\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"imgcard\" align=\"center\" *ngIf=\"parentsprofile\">\n    <img  color=\"secondary\" *ngIf=\"parentsprofile\" src=\"{{siteUrl}}uploads/images/{{parentsprofile?.photo}}\" class=\"img2\" align=\"center\">\n  </div>\n  <ng-container  *ngIf=\"parentsprofile\">\n    <ion-card class=\"card-bg\">\n      <ion-card-header class=\"card-header2\" (click)=\"isCollapsed(false)\" *ngIf=\"parentitems;else other_content\">\n        <span style=\"font-weight: bold\">{{language?.parentss_information}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #other_content>\n        <ion-card-header class=\"card-header2\" (click)=\"isCollapsed(true)\">\n          <span style=\"font-weight: bold\">{{language?.parentss_information}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ion-list  class=\"card-bg\" *ngIf=\"!parentitems\" >\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.name\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.name}}</ion-note>\n        </ion-item>\n\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.father_name\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_father_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{parentsprofile?.father_name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.mother_name\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_mother_name}}</p>\n          </ion-label>\n          <ion-note slot=\"end\"  class=\"ionnote\">{{parentsprofile?.mother_name}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.father_profession\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_father_profession}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{parentsprofile?.father_profession}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.mother_profession\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_mother_profession}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" style=\"color: black;font-size: 12px;\">{{parentsprofile?.mother_profession}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.email\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.email}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.phone\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_phone}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.phone}}</ion-note>\n        </ion-item>\n        <ion-item class=\"item-p\" *ngIf=\"parentsprofile?.address\">\n          <ion-label>\n            <p align=\"left\">{{language?.parents_address}}</p>\n          </ion-label>\n          <ion-note slot=\"end\" class=\"ionnote\">{{parentsprofile?.address}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <ng-container *ngIf=\"(permission.parents_add == 'yes' && permission.parents_delete == 'yes') || (loginuser.usertypeID == parentsprofile.usertypeID && loginuser.loginuserID == parentsprofile.parentsID)\">\n      <!--Parents Information-->\n      <ion-card-header class=\"card-header\" (click)=\"isCollapsedParent(false)\" *ngIf=\"studentitems;else parent_content\">\n        <span style=\"font-weight: bold\">{{language?.parents_children}}</span>\n        <ion-icon style=\"float: right;\" name=\"add\"></ion-icon>\n      </ion-card-header>\n      <ng-template #parent_content>\n        <ion-card-header class=\"card-header1\" (click)=\"isCollapsedParent(true)\">\n          <span style=\"font-weight: bold\">{{language?.parents_children}}</span>\n          <ion-icon style=\"float: right;\" name=\"remove\"></ion-icon>\n        </ion-card-header>\n      </ng-template>\n      <ng-container *ngIf=\"!studentitems\">\n        <ion-card  class=\"card-student-css\" *ngFor=\"let student of childrens\">\n          <div style=\"margin: 8px;\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <img class=\"student-img\" src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"text-div\">\n                  <h3 class=\"text-h\">{{student.name}}</h3>\n                  <p class=\"text-p\">{{language?.parents_roll}}: {{student.roll}}</p>\n                  <p class=\"text-p\">{{language?.parents_classes}}: {{student.srclasses}} ({{student.srsection}})</p>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-item class=\"ion-item-css\" >\n              <ion-avatar class=\"avatar-img\">\n                <img src=\"assets/boy.png\" />\n              </ion-avatar>\n              <ion-label>\n                <h4 class=\"ion-text-h\">{{language?.parents_username}}</h4>\n                <ion-text color=\"secondary\">\n                  <p class=\"ion-text-p\">{{student.username}}</p>\n                </ion-text>\n              </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-item-css\" >\n              <ion-avatar class=\"avatar-img\">\n                <img src=\"assets/sms.png\" />\n              </ion-avatar>\n              <ion-label>\n                <h4 class=\"ion-text-h\">{{language?.parents_phone}}</h4>\n                <ion-text color=\"secondary\">\n                  <p class=\"ion-text-p\">{{student.phone}}</p>\n                </ion-text>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-card>\n      </ng-container>\n      </ng-container>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/parents/parents.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/parents/parents.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-margin {\n  margin: 8px; }\n\n.parent-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.h-text {\n  font-size: 17px;\n  color: #000000;\n  line-height: 10px; }\n\n.ion-text-p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.ion-text-h {\n  font-size: 17px;\n  color: #ffffff; }\n\n.p-text {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.ion-card-css {\n  margin: 0px;\n  margin-bottom: 10px; }\n\n.card-parent-css {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.bg-class {\n  --background: #ffff !important; }\n\n.div-bg {\n  background-color: #ef1961 !important; }\n\n.card-student-css {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.student-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n.avatar-img {\n  margin-right: 8px; }\n\n.text-div {\n  text-align: start; }\n\n.text-h {\n  line-height: 10px;\n  font-size: 17px;\n  color: #000000; }\n\n.text-p {\n  font-size: 13px;\n  margin: 2px;\n  color: #000000; }\n\n.relative-card {\n  position: relative;\n  bottom: 50px; }\n\n.imgcard {\n  margin: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin: 0px;\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.card-header2 {\n  --background:#1D223a;\n  color: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.card-header1 {\n  --background:#1D223a;\n  color: #ffffff;\n  margin-top: 1px; }\n\n.card-header {\n  --background:#1D223a;\n  color: #ffffff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  margin-top: 1px; }\n\n.img2 {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: auto;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75); }\n\n.ionnote {\n  color: black;\n  font-size: 12px; }\n\n.row {\n  border: 1px solid; }\n\n.row p {\n  color: black; }\n\n.item {\n  border-bottom-color: #989aa2; }\n\n.item-p {\n  font-size: 13px;\n  color: #666; }\n\n.username {\n  font-size: 14px;\n  margin: 0px;\n  color: white; }\n\n.hedding {\n  line-height: 0px;\n  font-size: 17px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFyZW50cy9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwYXJlbnRzXFxwYXJlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEM7RUFHMUMsbURBQW1ELEVBQUE7O0FBRXJEO0VBQ0UsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVTtFQUNWLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDhCQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFPckI7RUFDRSw4QkFBYSxFQUFBOztBQUdmO0VBQ0Usb0NBQW9DLEVBQUE7O0FBSXRDO0VBQ0UsOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSwyQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBYSxFQUFBOztBQUVmO0VBQ0UsOEJBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxvQkFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usb0JBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUcxQyxtREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFyZW50cy9wYXJlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRpdi1tYXJnaW4ge1xuICBtYXJnaW46IDhweDtcbn1cbi5wYXJlbnQtaW1ne1xuICB3aWR0aDo4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuXG4udGV4dC1kaXYge1xuICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4uaC10ZXh0IHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uaW9uLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uLXRleHQtaCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5wLXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxufVxuXG4uaW9uLWNhcmQtY3NzIHtcbiAgbWFyZ2luOjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtcGFyZW50LWNzcyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuXG5cblxuLmJnLWNsYXNze1xuICAtLWJhY2tncm91bmQ6ICNmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjE5NjEgIWltcG9ydGFudDtcblxufVxuXG4uY2FyZC1zdHVkZW50LWNzcyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnN0dWRlbnQtaW1ne1xuICB3aWR0aDo4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbi1pdGVtLWNzc3tcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cblxuLmF2YXRhci1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnRleHQtZGl2IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi50ZXh0LWgge1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnJlbGF0aXZlLWNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xufVxuLmltZ2NhcmR7XG4gIG1hcmdpbjogIDEwcHg7XG59XG4uY2FyZC1iZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuLmNhcmQtaGVhZGVyMntcbiAgLS1iYWNrZ3JvdW5kOiMxRDIyM2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cbi5jYXJkLWhlYWRlcjF7XG4gIC0tYmFja2dyb3VuZDojMUQyMjNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IzFEMjIzYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5pbWcye1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlvbm5vdGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLnJvdyBwIHtcbiAgY29sb3I6YmxhY2s7XG59XG4uaXRlbXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk4OWFhMjtcbn1cbi5pdGVtLXAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnVzZXJuYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmhlZGRpbmd7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6d2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/parents/parents.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/parents/parents.page.ts ***!
  \***********************************************/
/*! exports provided: ParentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsPage", function() { return ParentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_parents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/parents.service */ "./src/app/service/parents.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");









var ParentsPage = /** @class */ (function () {
    function ParentsPage(router, route, storage, network, toastCtrl, alertCtrl, parentsService, langandpermissionService) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.parentsService = parentsService;
        this.langandpermissionService = langandpermissionService;
        this.myProfile = false;
        this.isRefresh = true;
        this.parentitems = false;
        this.studentitems = true;
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["fileUrl"];
        this.getParents();
    }
    ParentsPage.prototype.isCollapsed = function (value) {
        this.studentitems = true;
        this.parentitems = value;
    };
    ParentsPage.prototype.isCollapsedParent = function (value) {
        this.parentitems = true;
        this.studentitems = value;
    };
    ParentsPage.prototype.ngOnInit = function () {
        this.Profile();
    };
    ParentsPage.prototype.presentToast = function () {
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
    ParentsPage.prototype.Profile = function () {
        var _this = this;
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
    };
    ParentsPage.prototype.doRefresh = function (event, value) {
        var _this = this;
        this.parentsService.getParents(value, '', '')
            .then(function (data) {
            _this.parents = data.parents;
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    ParentsPage.prototype.getParentsView = function (partentsID) {
        this.router.navigate(['/parentsview', partentsID]);
    };
    ParentsPage.prototype.getParents = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'parents')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            if (_this.loginuser.usertypeID == 4) {
                _this.parentsService.getParents(false, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.parents_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 4 && _this.myProfile) {
                        _this.parentsprofile = data.profile;
                        _this.childrens = data.childrens;
                        _this.usertype = data.usertypes[_this.parentsprofile.usertypeID];
                    }
                    else {
                        _this.parents = data.parents;
                    }
                });
            }
            else {
                _this.parentsService.getParents(false, '', '')
                    .then(function (data) {
                    _this.parents = data.parents;
                });
            }
        });
    };
    ParentsPage.prototype.doRefreshProfile = function (event, value) {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.presentToast();
        }
        this.storage.get('Profile').then(function (response) {
            _this.loginuser = response;
        });
        this.langandpermissionService.getLangandPermissionCall(value, 'parents')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
            if (_this.loginuser.usertypeID == 4) {
                _this.parentsService.getParents(value, _this.loginuser.loginuserID, _this.loginuser.usertypeID)
                    .then(function (data) {
                    if (_this.permission.parents_view == 'no') {
                        _this.myProfile = true;
                    }
                    if (_this.loginuser.usertypeID == 4 && _this.myProfile) {
                        _this.parentsprofile = data.profile;
                        _this.childrens = data.childrens;
                        _this.usertype = data.usertypes[_this.parentsprofile.usertypeID];
                    }
                    else {
                        _this.parents = data.parents;
                    }
                });
            }
            else {
                _this.parentsService.getParents(value, '', '')
                    .then(function (data) {
                    _this.parents = data.parents;
                });
            }
        });
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    ParentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parents',
            template: __webpack_require__(/*! ./parents.page.html */ "./src/app/pages/parents/parents.page.html"),
            styles: [__webpack_require__(/*! ./parents.page.scss */ "./src/app/pages/parents/parents.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _service_parents_service__WEBPACK_IMPORTED_MODULE_3__["ParentsService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_4__["LangandparmisionService"]])
    ], ParentsPage);
    return ParentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parents-parents-module.js.map