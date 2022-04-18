(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-sponsorship-candidate-candidate-module~pages-sponsorship-candidateview-candidateview-m~f3938645"],{

/***/ "./src/app/service/sponsorship/sponsorship.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/sponsorship/sponsorship.service.ts ***!
  \************************************************************/
/*! exports provided: SponsorshipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorshipService", function() { return SponsorshipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");







var SponsorshipService = /** @class */ (function () {
    function SponsorshipService(http, storage, loadingCtrl, network, alertCtrl) {
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.alertCtrl = alertCtrl;
    }
    SponsorshipService.prototype.presentLoading = function () {
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
    SponsorshipService.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.dismiss({ 'dismissed': true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SponsorshipService.prototype.getCandidate = function (boolean) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'candidateID';
            if (boolean) {
                if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                }
                else {
                    _this.presentLoading();
                    _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'candidate/index').subscribe(function (data) {
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
                _this.storage.get(storageKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'candidate/index').subscribe(function (data) {
                                _this.storage.set(storageKey, data.data);
                                console.log(data.data);
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
    SponsorshipService.prototype.getCandidateView = function (boolean, candidateID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'candidateview' + candidateID;
            if (boolean) {
                if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                }
                else {
                    _this.presentLoading();
                    _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'candidate/view/' + candidateID).subscribe(function (data) {
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
                _this.storage.get(storageKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'candidate/view/' + candidateID).subscribe(function (data) {
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
        });
    };
    SponsorshipService.prototype.getSponsor = function (boolean) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'sponsorID';
            if (boolean) {
                if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                }
                else {
                    _this.presentLoading();
                    _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'sponsor/index').subscribe(function (data) {
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
                _this.storage.get(storageKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'sponsor/index').subscribe(function (data) {
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
        });
    };
    SponsorshipService.prototype.getSponsorView = function (boolean, sponsorID) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'sponsorview' + sponsorID;
            if (boolean) {
                if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                }
                else {
                    _this.presentLoading();
                    _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'sponsor/view/' + sponsorID).subscribe(function (data) {
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
                _this.storage.get(storageKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'sponsor/view' + sponsorID).subscribe(function (data) {
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
        });
    };
    SponsorshipService.prototype.getSponsorship = function (boolean) {
        var _this = this;
        return new Promise(function (resolve) {
            var storageKey = 'sponsorshipID';
            if (boolean) {
                if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                }
                else {
                    _this.presentLoading();
                    _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'sponsorship/index').subscribe(function (data) {
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
                _this.storage.get(storageKey).then(function (val) {
                    if (val == null) {
                        if (_this.network.type === 'none' || _this.network.type === 'unknown') {
                        }
                        else {
                            _this.presentLoading();
                            _this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndPoint"] + 'sponsorship/index').subscribe(function (data) {
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
        });
    };
    SponsorshipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], SponsorshipService);
    return SponsorshipService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-sponsorship-candidate-candidate-module~pages-sponsorship-candidateview-candidateview-m~f3938645.js.map