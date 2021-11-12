(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["others-others-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/others/others.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/others/others.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngFor=\"let ownersData of allData\">\n    <div *ngFor=\"let sameOwnersData of ownersData.ownerInfo\">\n      <ion-card\n        *ngIf=\"!sameOwnersData.details.renterInfo.isChecked\"\n        (click)=\"presentModal(sameOwnersData)\"\n      >\n        <img\n          src=\"{{imageURL + sameOwnersData.details.imagePath[0]}}\"\n          alt=\"{{sameOwnersData.details.imagePath[0]}}\"\n        />\n        <ion-card-header>\n          <ion-card-subtitle>\n            {{sameOwnersData.details.address.street}},\n            {{sameOwnersData.details.address.city}},\n            {{sameOwnersData.details.address.state}}-{{sameOwnersData.details.address.zip}}\n          </ion-card-subtitle>\n          <ion-card-title>{{sameOwnersData.personal.ownerName}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>\n            Number of Empty Rooms:\n            {{sameOwnersData.details.houseInfo.emptyRoom}}\n          </p>\n          <p>Price: {{sameOwnersData.details.houseInfo.price}}</p>\n          <p>Description: {{sameOwnersData.details.houseInfo.roomDetails}}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tabs/others/others-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/others/others-routing.module.ts ***!
  \******************************************************/
/*! exports provided: OthersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersPageRoutingModule", function() { return OthersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _others_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./others.page */ "./src/app/tabs/others/others.page.ts");




const routes = [
    {
        path: '',
        component: _others_page__WEBPACK_IMPORTED_MODULE_3__["OthersPage"],
    },
];
let OthersPageRoutingModule = class OthersPageRoutingModule {
};
OthersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OthersPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/others/others.module.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/others/others.module.ts ***!
  \**********************************************/
/*! exports provided: OthersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersPageModule", function() { return OthersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _others_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./others-routing.module */ "./src/app/tabs/others/others-routing.module.ts");
/* harmony import */ var _others_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./others.page */ "./src/app/tabs/others/others.page.ts");







let OthersPageModule = class OthersPageModule {
};
OthersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _others_routing_module__WEBPACK_IMPORTED_MODULE_5__["OthersPageRoutingModule"]],
        declarations: [_others_page__WEBPACK_IMPORTED_MODULE_6__["OthersPage"]],
    })
], OthersPageModule);



/***/ }),

/***/ "./src/app/tabs/others/others.page.scss":
/*!**********************************************!*\
  !*** ./src/app/tabs/others/others.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvb3RoZXJzL290aGVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/others/others.page.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/others/others.page.ts ***!
  \********************************************/
/*! exports provided: OthersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersPage", function() { return OthersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/server.service */ "./src/app/server.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _details_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../details/details.page */ "./src/app/tabs/details/details.page.ts");






let OthersPage = class OthersPage {
    constructor(tabsService, modalController) {
        this.tabsService = tabsService;
        this.modalController = modalController;
        this.imageURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].custom.IMAGE_URL;
        this.tabsService.allData.subscribe((res) => {
            this.allData = res;
        });
    }
    presentModal(sameOwnersData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _details_details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"],
                componentProps: sameOwnersData,
            });
            return yield modal.present();
        });
    }
};
OthersPage.ctorParameters = () => [
    { type: src_app_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
OthersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-others',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./others.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/others/others.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./others.page.scss */ "./src/app/tabs/others/others.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], OthersPage);



/***/ })

}]);
//# sourceMappingURL=others-others-module-es2015.js.map