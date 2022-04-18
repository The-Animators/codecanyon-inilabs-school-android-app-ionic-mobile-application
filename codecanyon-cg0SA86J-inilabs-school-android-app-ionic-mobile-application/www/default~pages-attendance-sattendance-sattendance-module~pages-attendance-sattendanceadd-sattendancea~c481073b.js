(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-attendance-sattendance-sattendance-module~pages-attendance-sattendanceadd-sattendancea~c481073b"],{

/***/ "./src/app/service/attendance/attendance.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/attendance/attendance.service.ts ***!
  \**********************************************************/
/*! exports provided: AttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceService", function() { return AttendanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");







var AttendanceService = /** @class */ (function () {
    function AttendanceService(http, storage, loadingCtrl, network, alertCtrl) {
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.alertCtrl = alertCtrl;
    }
    AttendanceService.prototype.presentLoading = function () {
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
    AttendanceService.prototype.dismiss = function () {
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
    AttendanceService.prototype.getSattendance = function (classID, boolean, loginuserID, usertypeID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'sattendance' + classID;
            if (boolean) {
                if (classID) {
                    if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                    }
                    else {
                        _this.presentLoading();
                        _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/index/' + classID).subscribe(function (data) {
                            _this.storage.set(storageKey, data.data);
                            resolve(data.data);
                            _this.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.dismiss();
                        });
                    }
                }
                else if (classID == null && usertypeID == 3) {
                    var storeProfileKey_1 = 'sattendance_profile' + loginuserID;
                    if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                    }
                    else {
                        _this.presentLoading();
                        _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/index/' + classID).subscribe(function (data) {
                            _this.storage.set(storeProfileKey_1, data.data);
                            resolve(data.data);
                            _this.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.dismiss();
                        });
                    }
                }
            }
            else {
                if (classID == null && usertypeID == null) {
                    _this.storage.get(storageKey).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/index/' + classID).subscribe(function (data) {
                                    _this.storage.set(storageKey, data.data);
                                    resolve(data.data);
                                    _this.dismiss();
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (classID) {
                    _this.storage.get(storageKey).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/index/' + classID).subscribe(function (data) {
                                    _this.storage.set(storageKey, data.data);
                                    resolve(data.data);
                                    _this.dismiss();
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (classID == null && usertypeID == 3) {
                    var storeProfileKey_2 = 'sattendance_profile' + loginuserID;
                    _this.storage.get(storeProfileKey_2).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/index/' + classID).subscribe(function (data) {
                                    _this.storage.set(storeProfileKey_2, data.data);
                                    resolve(data.data);
                                    _this.dismiss();
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        });
    };
    AttendanceService.prototype.getSattendanceView = function (studentID, classID, boolean) {
        var _this = this;
        return new Promise(function (resolve) {
            var storeProfileKey = 'sattendance_profile' + studentID + classID;
            if (boolean) {
                if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                }
                else {
                    _this.presentLoading();
                    _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/view/' + studentID + '/' + classID).subscribe(function (data) {
                        _this.storage.set(storeProfileKey, data.data);
                        resolve(data.data);
                        _this.dismiss();
                    }, function (err) {
                        console.log(err);
                        _this.dismiss();
                    });
                }
            }
            else {
                _this.storage.get(storeProfileKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/view/' + studentID + '/' + classID).subscribe(function (data) {
                                _this.storage.set(storeProfileKey, data.data);
                                resolve(data.data);
                                _this.dismiss();
                            }, function (err) {
                                console.log(err);
                                _this.dismiss();
                            });
                        }
                    }
                    else {
                        resolve(val);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AttendanceService.prototype.PostSattendance = function (allData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/add', allData).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AttendanceService.prototype.SaveSattendance = function (allData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'sattendance/saveattendance', allData).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AttendanceService.prototype.getTattendance = function (boolean, loginuserID, usertypeID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'tattendance';
            var storageProfileKey = 'tattendanceProfile' + loginuserID + usertypeID;
            if (boolean) {
                if (loginuserID && usertypeID) {
                    if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                    }
                    else {
                        _this.presentLoading();
                        _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/index').subscribe(function (data) {
                            _this.storage.set(storageProfileKey, data.data);
                            resolve(data.data);
                            _this.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.dismiss();
                        });
                    }
                }
                else {
                    if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                    }
                    else {
                        _this.presentLoading();
                        _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/index').subscribe(function (data) {
                            _this.storage.set(storageKey, data.data);
                            resolve(data.data);
                            _this.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.dismiss();
                        });
                    }
                }
            }
            else {
                if (loginuserID && usertypeID) {
                    _this.storage.get(storageProfileKey).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/index').subscribe(function (data) {
                                    _this.storage.set(storageProfileKey, data.data);
                                    _this.dismiss();
                                    resolve(data.data);
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.storage.get(storageKey).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/index').subscribe(function (data) {
                                    _this.storage.set(storageKey, data.data);
                                    resolve(data.data);
                                    _this.dismiss();
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        });
    };
    AttendanceService.prototype.getTattendanceView = function (boolean, techearID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageviewKey = 'tattendanceview' + techearID;
            if (boolean) {
                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/view/' + techearID).subscribe(function (data) {
                    _this.storage.set(storageviewKey, data.data);
                    resolve(data.data);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.storage.get(storageviewKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/view/' + techearID).subscribe(function (data) {
                                _this.storage.set(storageviewKey, data.data);
                                resolve(data.data);
                                _this.dismiss();
                            }, function (err) {
                                console.log(err);
                                _this.dismiss();
                            });
                        }
                    }
                    else {
                        resolve(val);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AttendanceService.prototype.PostTattendance = function (allData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/add', allData).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AttendanceService.prototype.SaveTattendance = function (allData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'tattendance/saveattendance', allData).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AttendanceService.prototype.getUattendance = function (boolean, loginuserID, usertypeID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'uattendance';
            var storageProfileKey = 'uattendanceProfile' + loginuserID + usertypeID;
            if (boolean) {
                if (loginuserID && usertypeID) {
                    if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                    }
                    else {
                        _this.presentLoading();
                        _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/index').subscribe(function (data) {
                            _this.storage.set(storageProfileKey, data.data);
                            resolve(data.data);
                            _this.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.dismiss();
                        });
                    }
                }
                else {
                    if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                    }
                    else {
                        _this.presentLoading();
                        _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/index').subscribe(function (data) {
                            _this.storage.set(storageKey, data.data);
                            resolve(data.data);
                            _this.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.dismiss();
                        });
                    }
                }
            }
            else {
                if (loginuserID && usertypeID) {
                    _this.storage.get(storageProfileKey).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/index').subscribe(function (data) {
                                    _this.storage.set(storageProfileKey, data.data);
                                    _this.dismiss();
                                    resolve(data.data);
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.storage.get(storageKey).then(function (val) {
                        if (val == null) {
                            if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                            }
                            else {
                                _this.presentLoading();
                                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/index').subscribe(function (data) {
                                    _this.storage.set(storageKey, data.data);
                                    resolve(data.data);
                                    _this.dismiss();
                                }, function (err) {
                                    console.log(err);
                                    _this.dismiss();
                                });
                            }
                        }
                        else {
                            resolve(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        });
    };
    AttendanceService.prototype.getUattendanceView = function (boolean, userID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageviewKey = 'uattendanceview' + userID;
            if (boolean) {
                _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/view/' + userID).subscribe(function (data) {
                    _this.storage.set(storageviewKey, data.data);
                    resolve(data.data);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.storage.get(storageviewKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/view/' + userID).subscribe(function (data) {
                                _this.storage.set(storageviewKey, data.data);
                                resolve(data.data);
                                _this.dismiss();
                            }, function (err) {
                                console.log(err);
                                _this.dismiss();
                            });
                        }
                    }
                    else {
                        resolve(val);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AttendanceService.prototype.PostUattendance = function (allData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/add', allData).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AttendanceService.prototype.SaveUattendance = function (allData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"] + 'uattendance/saveattendance', allData).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AttendanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], AttendanceService);
    return AttendanceService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-attendance-sattendance-sattendance-module~pages-attendance-sattendanceadd-sattendancea~c481073b.js.map