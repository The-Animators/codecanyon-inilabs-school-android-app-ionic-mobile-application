(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-attendance-sattendanceadd-sattendanceadd-module"],{

/***/ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceadd/sattendanceadd.module.ts ***!
  \**************************************************************************/
/*! exports provided: SattendanceaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SattendanceaddPageModule", function() { return SattendanceaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */ "./node_modules/@logisticinfotech/ionic4-datepicker/fesm5/logisticinfotech-ionic4-datepicker.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sattendanceadd_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sattendanceadd.page */ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.ts");








var routes = [
    {
        path: '',
        component: _sattendanceadd_page__WEBPACK_IMPORTED_MODULE_7__["SattendanceaddPage"]
    }
];
var SattendanceaddPageModule = /** @class */ (function () {
    function SattendanceaddPageModule() {
    }
    SattendanceaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_5__["Ionic4DatepickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sattendanceadd_page__WEBPACK_IMPORTED_MODULE_7__["SattendanceaddPage"]]
        })
    ], SattendanceaddPageModule);
    return SattendanceaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title align=\"center\">{{language?.panel_title}}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"light\" *ngIf=\"classes\" style=\"margin-bottom: 10px;\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.attendance_classes}}</ion-label>\n          <ion-select placeholder=\"{{language?.attendance_select_classes}}\" #select [(ngModel)]=\"classesID\" (ionChange)=\"selectedClasses()\">\n            <ion-select-option  *ngFor=\"let class of classes\" value=\"{{class.classesID}}\">{{class.classes}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.sattendance_section}}</ion-label>\n          <ion-select placeholder=\"{{language?.attendance_select_section}}\" #select [(ngModel)]=\"sectionID\">\n            <ion-select-option  *ngFor=\"let section of sections\" value=\"{{section.sectionID}}\">{{section.section}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n      <ion-row *ngIf=\"attendanceType == 'subject'\">\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.sattendance_subject}}</ion-label>\n          <ion-select placeholder=\"{{language?.attendance_select_subject}}\" #select [(ngModel)]=\"subjectID\">\n            <ion-select-option  *ngFor=\"let subject of subjects\" value=\"{{subject.subjectID}}\">{{subject.subject}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-item>\n          <ion-label>{{language?.attendance_date}}</ion-label>\n          <li-ionic4-datepicker [(ngModel)]=\"myDate\" [inputDateConfig]=\"datePickerObj\"></li-ionic4-datepicker>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n      <ion-button (click)=\"addAttendance()\">Add</ion-button>\n     <ion-button style=\"float: right\" (click)=\"submitAttendance()\" *ngIf=\"submitbutton\">Submit</ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"bg-image no-scroll\">\n  <ion-card *ngIf=\"sattendanceinfo\" class=\"background-color card-bg1\">\n    <ion-card-header>\n      <div align=\"center\" class=\"div-p\">\n        <p>{{language?.attendance_classes}} : {{sattendanceinfo?.class}}</p>\n        <p>{{language?.sattendance_section}} : {{sattendanceinfo?.section}}</p>\n        <p>{{language?.attendance_day}} : {{sattendanceinfo?.day}}</p>\n        <p>{{language?.attendance_date}} : {{sattendanceinfo?.date}}</p>\n      </div>\n    </ion-card-header>\n  </ion-card>\n  <ng-container  *ngIf=\"students\">\n    <ion-card class=\"card-bg\" *ngFor=\"let student of students\">\n      <div class=\"card-class\">\n        <ion-item lines=\"none\" class=\"p-text ion-item-css\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{siteUrl}}uploads/images/{{student.photo}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{student.name}}</h2>\n            <p>{{language?.attendance_roll}} : {{student.roll}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <ion-radio-group>\n            <ion-item class=\"float-left\" lines=\"none\" *ngIf=\"Previesattendances[student.studentID][aday] == 'P';else present_content\"><span style=\"margin-right: 5px; color: green;\">P</span><ion-radio mode=\"md\"  [checked]=\"true\" (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'P')\" value=\"P\" style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            <ng-template #present_content>\n              <ion-item class=\"float-left\" lines=\"none\"><span style=\"margin-right: 5px; color: green;\">P</span><ion-radio mode=\"md\"  (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'P', $event)\" value=\"P\" style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            </ng-template>\n\n            <ion-item class=\"float-left\" lines=\"none\" *ngIf=\"Previesattendances[student.studentID][aday] == 'A';else a_content\" ><span style=\"margin-right: 5px; color: #d33939\">A</span><ion-radio mode=\"md\" value=\"A\" [checked]=\"true\" (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'A')\"  style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            <ng-template #a_content>\n              <ion-item class=\"float-left\" lines=\"none\"><span style=\"margin-right: 5px; color: #d33939\">A</span><ion-radio mode=\"md\" value=\"A\"  (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'A')\"  style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            </ng-template>\n\n            <ion-item class=\"float-left\" lines=\"none\" *ngIf=\"Previesattendances[student.studentID][aday] == 'L';else l_content\"><span style=\"margin-right: 5px; color: #1D223a\">L</span><ion-radio mode=\"md\"  value=\"L\"  [checked]=\"true\" (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'L')\"  style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            <ng-template #l_content>\n              <ion-item class=\"float-left\" lines=\"none\"><span style=\"margin-right: 5px; color: #1D223a\">L</span><ion-radio mode=\"md\"  value=\"L\" (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'L')\"  style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            </ng-template>\n\n            <ion-item class=\"float-left\" lines=\"none\"  *ngIf=\"Previesattendances[student.studentID][aday] == 'LA';else la_content\"><span style=\"margin-right: 5px; color: #1B9BFB\">LA</span><ion-radio mode=\"md\"  value=\"LA\" *ngIf=\"Previesattendances[student.studentID][aday] == 'LA';else la_content\" [checked]=\"true\" (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'LA')\" style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            <ng-template #la_content>\n              <ion-item class=\"float-left\" lines=\"none\"><span style=\"margin-right: 5px; color: #1B9BFB\">LA</span><ion-radio mode=\"md\"  value=\"LA\"  (ionSelect)=\"takeAttendance(Previesattendances[student.studentID].attendanceID, 'LA')\" style=\"height: 16px;width: 16px;\"></ion-radio></ion-item>\n            </ng-template>\n          </ion-radio-group>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  width: 54%;\n  --height: 60px;\n  --border-radius: 50%;\n  vertical-align: middle;\n  --padding-start: 10px;\n  --padding-end: 10px; }\n\n.card-bg {\n  --background: #ffff !important;\n  margin-top: 10px;\n  border-radius: 10px; }\n\n.card-bg1 {\n  margin: 0px !important;\n  border-radius: 0px !important; }\n\n.div-p {\n  font-weight: bold;\n  color: white; }\n\n.float-left {\n  float: left; }\n\n.card-header {\n  --background:#989aa2;\n  color: black; }\n\n.p-text p {\n  font-size: 13px;\n  color: #ffffff; }\n\n.p-text h2 {\n  font-size: 17px;\n  color: #ffffff; }\n\n.ion-item-css {\n  --ion-background-color:#adadaffc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXR0ZW5kYW5jZS9zYXR0ZW5kYW5jZWFkZC9EOlxcc2Nob29sQXBwXFxzY2hvb2xhcHAvc3JjXFxhcHBcXHBhZ2VzXFxhdHRlbmRhbmNlXFxzYXR0ZW5kYW5jZWFkZFxcc2F0dGVuZGFuY2VhZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQVM7RUFDVCxvQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHFCQUFnQjtFQUNoQixtQkFBYyxFQUFBOztBQUloQjtFQUNFLDhCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxpQkFBaUI7RUFDakIsWUFDRixFQUFBOztBQUNBO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usb0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBS2hCO0VBQ0UsMkNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdHRlbmRhbmNlL3NhdHRlbmRhbmNlYWRkL3NhdHRlbmRhbmNlYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJvdW5kIHtcbiAgd2lkdGg6IDU0JTtcbiAgLS1oZWlnaHQ6IDYwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cblxuLmNhcmQtYmd7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuLmNhcmQtYmcxIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlXG59XG4uZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNhcmQtaGVhZGVye1xuICAtLWJhY2tncm91bmQ6Izk4OWFhMjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnAtdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbn1cblxuXG4uaW9uLWl0ZW0tY3NzIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojYWRhZGFmZmMgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.ts ***!
  \************************************************************************/
/*! exports provided: SattendanceaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SattendanceaddPage", function() { return SattendanceaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/attendance/attendance.service */ "./src/app/service/attendance/attendance.service.ts");
/* harmony import */ var _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/langandparmision.service */ "./src/app/service/langandparmision.service.ts");
/* harmony import */ var _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/academic/class.service */ "./src/app/service/academic/class.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_academic_section_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/academic/section.service */ "./src/app/service/academic/section.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_academic_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/academic/subject.service */ "./src/app/service/academic/subject.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");










var SattendanceaddPage = /** @class */ (function () {
    function SattendanceaddPage(attendanceService, langandpermissionService, sectionService, classService, datepipe, modalCtrl, loadingCtrl, toastController, subjectService) {
        this.attendanceService = attendanceService;
        this.langandpermissionService = langandpermissionService;
        this.sectionService = sectionService;
        this.classService = classService;
        this.datepipe = datepipe;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.subjectService = subjectService;
        this.classesID = '';
        this.sectionID = '';
        this.subjectID = '';
        this.calenderdisableweekdays = [];
        this.attendancearray = {};
        this.submitbutton = false;
        this.datePickerObj = {};
        this.siteUrl = _config_config__WEBPACK_IMPORTED_MODULE_9__["fileUrl"];
    }
    SattendanceaddPage.prototype.ngOnInit = function () {
        this.getAddattendance();
    };
    SattendanceaddPage.prototype.takeAttendance = function (id, value) {
        this.submitbutton = true;
        this.attendancearray['attendance' + id] = value;
    };
    SattendanceaddPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                            spinner: 'crescent',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SattendanceaddPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your attendance have been saved.',
                            duration: 3000
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
    SattendanceaddPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({
                            'dismissed': true
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SattendanceaddPage.prototype.selectedClasses = function () {
        var _this = this;
        var classID = this.classesID;
        this.sectionService.getSection(false, classID)
            .then(function (data) {
            _this.sections = data.sections;
        });
        if (this.attendanceType === 'subject') {
            this.subjectService.getSubjectAttendance(false, classID)
                .then(function (data) {
                _this.subjects = data.subjects;
            });
        }
    };
    SattendanceaddPage.prototype.addAttendance = function () {
        var _this = this;
        var allData = {
            classesID: this.classesID,
            sectionID: this.sectionID,
            subjectID: this.subjectID,
            date: this.myDate
        };
        if (this.attendanceType === 'subject') {
            if (allData.classesID && allData.sectionID && allData.date && allData.subjectID) {
                this.attendanceService.PostSattendance(allData)
                    .then(function (data) {
                    _this.students = data.students;
                    _this.Previesattendances = data.attendances;
                    _this.aday = 'a' + data.day;
                    _this.sattendanceinfo = data.sattendanceinfo;
                    _this.attsubjectID = data.subjectID;
                    _this.attsectionID = data.sectionID;
                    _this.attmonthyear = data.monthyear;
                    _this.attclassesID = data.classesID;
                    _this.attday = data.day;
                });
            }
        }
        else {
            if (allData.classesID && allData.sectionID && allData.date) {
                this.attendanceService.PostSattendance(allData)
                    .then(function (data) {
                    _this.students = data.students;
                    _this.Previesattendances = data.attendances;
                    _this.aday = 'a' + data.day;
                    _this.sattendanceinfo = data.sattendanceinfo;
                    _this.attsubjectID = data.subjectID;
                    _this.attsectionID = data.sectionID;
                    _this.attmonthyear = data.monthyear;
                    _this.attclassesID = data.classesID;
                    _this.attday = data.day;
                });
            }
        }
    };
    SattendanceaddPage.prototype.submitAttendance = function () {
        var _this = this;
        this.presentLoading();
        var allData = {
            classesID: this.attclassesID,
            sectionID: this.attsectionID,
            subjectID: this.attsubjectID,
            monthyear: this.attmonthyear,
            day: this.attday,
            attendance: JSON.stringify(this.attendancearray)
        };
        this.attendanceService.SaveSattendance(allData)
            .then(function (data) {
            _this.dismiss();
            _this.presentToast();
            _this.submitbutton = false;
        });
    };
    SattendanceaddPage.prototype.getAddattendance = function () {
        var _this = this;
        this.attendanceService.PostSattendance(null)
            .then(function (data) {
            _this.classes = data.classes;
            _this.attendanceType = data.attendanceType;
            _this.calenderdisabledates = data.calenderdisabledates;
            _this.calenderfromdate = data.calenderfromdate;
            _this.calendertodate = data.calendertodate;
            var disableweekdays = data.calenderdisableweekdays;
            var disableweekArray = [];
            Object.keys(disableweekdays).forEach(function (key) {
                disableweekArray.push(Number(disableweekdays[key].replace()));
            });
            _this.datePickerObj = {
                fromDate: _this.calenderfromdate,
                toDate: _this.calendertodate,
                showTodayButton: false,
                closeOnSelect: true,
                disableWeekDays: disableweekArray,
                mondayFirst: true,
                setLabel: 'S',
                todayLabel: 'Today',
                closeLabel: 'Close',
                disabledDates: _this.calenderdisabledates,
                titleLabel: 'Select a Date',
                monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                weeksList: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                dateFormat: 'DD-MM-YYYY',
                clearButton: false,
                momentLocale: 'pt-BR',
                yearInAscending: true,
                btnCloseSetInReverse: true,
                btnProperties: {
                    expand: 'block',
                    fill: '',
                    size: '',
                    disabled: '',
                    strong: '',
                    color: '',
                },
                arrowNextPrev: {
                    nextArrowSrc: 'assets/img/right-arrow.svg',
                    prevArrowSrc: 'assets/img/left.svg'
                }
            };
        });
        this.langandpermissionService.getLangandPermissionCall(false, 'sattendance')
            .then(function (data) {
            _this.permission = data.permission;
            _this.language = data.language;
        });
    };
    SattendanceaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sattendanceadd',
            template: __webpack_require__(/*! ./sattendanceadd.page.html */ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.html"),
            styles: [__webpack_require__(/*! ./sattendanceadd.page.scss */ "./src/app/pages/attendance/sattendanceadd/sattendanceadd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_2__["AttendanceService"],
            _service_langandparmision_service__WEBPACK_IMPORTED_MODULE_3__["LangandparmisionService"],
            _service_academic_section_service__WEBPACK_IMPORTED_MODULE_6__["SectionService"],
            _service_academic_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _service_academic_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"]])
    ], SattendanceaddPage);
    return SattendanceaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-attendance-sattendanceadd-sattendanceadd-module.js.map