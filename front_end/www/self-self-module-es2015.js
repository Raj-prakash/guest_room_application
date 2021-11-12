(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["self-self-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/self/self.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/self/self.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"isNotNull\">\n    <div *ngFor=\"let sameOwnersData of userData.ownerInfo\">\n      <ion-card\n        *ngIf=\"!sameOwnersData.details.renterInfo.isChecked\"\n        (click)=\"onClick(sameOwnersData)\"\n      >\n        <img\n          src=\"{{imageURL + sameOwnersData.details.imagePath[0]}}\"\n          alt=\"{{sameOwnersData.details.imagePath[0]}}\"\n        />\n        <ion-card-header>\n          <ion-card-subtitle>\n            {{sameOwnersData.details.address.street}},\n            {{sameOwnersData.details.address.city}},\n            {{sameOwnersData.details.address.state}}-{{sameOwnersData.details.address.zip}}\n          </ion-card-subtitle>\n          <ion-card-title>{{sameOwnersData.personal.ownerName}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>\n            Number of Empty Rooms:\n            {{sameOwnersData.details.houseInfo.emptyRoom}}\n          </p>\n          <p>Price: {{sameOwnersData.details.houseInfo.price}}</p>\n          <p>Description: {{sameOwnersData.details.houseInfo.roomDetails}}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    routerLink=\"/tabs/add\"\n  >\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tabs/self/self-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/self/self-routing.module.ts ***!
  \**************************************************/
/*! exports provided: SelfPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfPageRoutingModule", function() { return SelfPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./self.page */ "./src/app/tabs/self/self.page.ts");




const routes = [
    {
        path: '',
        component: _self_page__WEBPACK_IMPORTED_MODULE_3__["SelfPage"],
    },
];
let SelfPageRoutingModule = class SelfPageRoutingModule {
};
SelfPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelfPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/self/self.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/self/self.module.ts ***!
  \******************************************/
/*! exports provided: SelfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfPageModule", function() { return SelfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _self_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./self-routing.module */ "./src/app/tabs/self/self-routing.module.ts");
/* harmony import */ var _self_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./self.page */ "./src/app/tabs/self/self.page.ts");







let SelfPageModule = class SelfPageModule {
};
SelfPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _self_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelfPageRoutingModule"]],
        declarations: [_self_page__WEBPACK_IMPORTED_MODULE_6__["SelfPage"]],
    })
], SelfPageModule);



/***/ }),

/***/ "./src/app/tabs/self/self.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/self/self.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VsZi9zZWxmLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tabs/self/self.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/self/self.page.ts ***!
  \****************************************/
/*! exports provided: SelfPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfPage", function() { return SelfPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SelfPage = class SelfPage {
    constructor(tabsService, route) {
        this.tabsService = tabsService;
        this.route = route;
        this.imageURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].custom.IMAGE_URL;
        this.tabsService.userData.subscribe((res) => {
            if (Object.keys(res).length === 0) {
                this.isNotNull = false;
            }
            else {
                this.isNotNull = true;
                this.userData = res[0];
            }
        });
    }
    onClick(sameOwnersData) {
        this.route.navigate(['tabs/add', JSON.stringify(sameOwnersData)]);
    }
};
SelfPage.ctorParameters = () => [
    { type: src_app_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SelfPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-self',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./self.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/self/self.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./self.page.scss */ "./src/app/tabs/self/self.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SelfPage);



/***/ })

}]);
//# sourceMappingURL=self-self-module-es2015.js.map