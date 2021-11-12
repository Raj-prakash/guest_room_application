(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/add/add.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/add/add.page.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add New</ion-title>\n    <ion-button fill=\"clear\" slot=\"start\" class=\"back-button\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form\n    [formGroup]=\"addForm\"\n    (ngSubmit)=\"onSubmit()\"\n    enctype=\"multipart/form-data\"\n  >\n    <ion-card>\n      <ion-card-header> Owner Info </ion-card-header>\n      <ion-card-content>\n        <div formGroupName=\"ownerInfo\">\n          <ion-item>\n            <ion-label position=\"floating\">Owner Name</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"ownerName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Mobile 1</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"mobile1\"\n              required\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Mobile 2</ion-label>\n            <ion-input type=\"text\" formControlName=\"mobile2\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header> House Info </ion-card-header>\n      <ion-card-content>\n        <div formGroupName=\"houseInfo\">\n          <ion-item>\n            <ion-label position=\"floating\">Empty Room</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"emptyRoom\"\n              required\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Room Details</ion-label>\n            <ion-textarea\n              type=\"text\"\n              formControlName=\"roomDetails\"\n              required\n            ></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input type=\"text\" formControlName=\"price\" required></ion-input>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header> Address </ion-card-header>\n      <ion-card-content>\n        <div formGroupName=\"address\">\n          <ion-item>\n            <ion-label position=\"floating\">Street</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"street\"\n              required\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">City</ion-label>\n            <ion-input type=\"text\" formControlName=\"city\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">State</ion-label>\n            <ion-input type=\"text\" formControlName=\"state\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Zip Code</ion-label>\n            <ion-input type=\"text\" formControlName=\"zip\" required></ion-input>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header> Renter Info </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-checkbox\n            checked=\"false\"\n            formControlName=\"isChecked\"\n            color=\"secondary\"\n            slot=\"start\"\n            (click)=\"checkBox()\"\n            checked=\"{{checkedIt}}\"\n          ></ion-checkbox>\n          <ion-label>Is this house rented ?</ion-label>\n        </ion-item>\n        <div *ngIf=\"isRanted\" formGroupName=\"renterInfo\">\n          <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Mobile</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"mobile\"\n              required\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Office Address</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"officeAddress\"\n              required\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Permanent Address</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"permanentAddress\"\n              required\n            ></ion-input>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header> Images </ion-card-header>\n      <ion-card-content>\n        <ion-input\n          (change)=\"setImages($event)\"\n          type=\"file\"\n          id=\"inputGroupFile01\"\n          aria-describedby=\"inputGroupFileAddon01\"\n          multiple\n          required\n        ></ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-grid *ngIf=\"isImage\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let image of imageArray\">\n          <img src=\"{{imagePath + image}}\" />\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ng-template #notUpdate>\n      <ion-button\n        expand=\"full\"\n        size=\"large\"\n        fill=\"solid\"\n        type=\"submit\"\n        [disabled]=\"!addForm.valid\"\n        >Submit</ion-button\n      >\n    </ng-template>\n    <ion-button\n      *ngIf=\"isUpdate; else notUpdate\"\n      expand=\"full\"\n      size=\"large\"\n      fill=\"solid\"\n      type=\"submit\"\n      [disabled]=\"!addForm.valid\"\n      >Update</ion-button\n    >\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DatabaseService = class DatabaseService {
    constructor(httpClient, cookieService, route) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.route = route;
    }
    addUserFormToDatabase() {
        const tempFormData = new FormData();
        const img = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.imageArray.length; i++) {
            img.push(this.imageArray[i].name);
            tempFormData.append('images', this.imageArray[i]);
            tempFormData.append('imagePath', JSON.stringify(img));
        }
        tempFormData.append('ownerInfo', JSON.stringify(this.addForm.get('ownerInfo').value));
        tempFormData.append('houseInfo', JSON.stringify(this.addForm.get('houseInfo').value));
        tempFormData.append('address', JSON.stringify(this.addForm.get('address').value));
        tempFormData.append('isChecked', JSON.stringify(this.addForm.get('isChecked').value));
        tempFormData.append('renterInfo', JSON.stringify(this.addForm.get('renterInfo').value));
        tempFormData.append('email', JSON.stringify(this.cookieService.get('email')));
        this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].custom.ADD_USER_DATA, tempFormData, { observe: 'response' })
            .subscribe((response) => {
            if (response.body.status === 'ok') {
                // tost
                this.route.navigate(['/tabs']);
            }
        });
    }
    updateUserFormToDatabase() {
        const tempFormData = new FormData();
        const img = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.imageArray.length; i++) {
            img.push(this.imageArray[i].name);
            tempFormData.append('images', this.imageArray[i]);
            tempFormData.append('imagePath', JSON.stringify(img));
        }
        tempFormData.append('ownerInfo', JSON.stringify(this.addForm.get('ownerInfo').value));
        tempFormData.append('houseInfo', JSON.stringify(this.addForm.get('houseInfo').value));
        tempFormData.append('address', JSON.stringify(this.addForm.get('address').value));
        tempFormData.append('isChecked', JSON.stringify(this.addForm.get('isChecked').value));
        tempFormData.append('renterInfo', JSON.stringify(this.addForm.get('renterInfo').value));
        tempFormData.append('email', JSON.stringify(this.cookieService.get('email')));
        tempFormData.append('tempOldData', localStorage.getItem('tempOldData'));
        this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].custom.UPDATE_USER_DATA, tempFormData, { observe: 'response' })
            .subscribe((response) => {
            if (response.body.status === 'ok') {
                // tost
                this.route.navigate(['/tabs']);
            }
        });
    }
    set addImage(imageArray) {
        this.imageArray = imageArray;
    }
    set addOtherData(addForm) {
        this.addForm = addForm;
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], DatabaseService);



/***/ }),

/***/ "./src/app/tabs/add/add-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/add/add-routing.module.ts ***!
  \************************************************/
/*! exports provided: AddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function() { return AddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.page */ "./src/app/tabs/add/add.page.ts");




const routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"],
    },
];
let AddPageRoutingModule = class AddPageRoutingModule {
};
AddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/add/add.module.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/add/add.module.ts ***!
  \****************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-routing.module */ "./src/app/tabs/add/add-routing.module.ts");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add.page */ "./src/app/tabs/add/add.page.ts");







let AddPageModule = class AddPageModule {
};
AddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]],
    })
], AddPageModule);



/***/ }),

/***/ "./src/app/tabs/add/add.page.scss":
/*!****************************************!*\
  !*** ./src/app/tabs/add/add.page.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvYWRkL2FkZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/add/add.page.ts":
/*!**************************************!*\
  !*** ./src/app/tabs/add/add.page.ts ***!
  \**************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AddPage = class AddPage {
    constructor(fromBuilder, databaseService, route, activatedRouter) {
        this.fromBuilder = fromBuilder;
        this.databaseService = databaseService;
        this.route = route;
        this.activatedRouter = activatedRouter;
        this.imagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].custom.IMAGE_URL;
        this.addForm = this.fromBuilder.group({
            ownerInfo: this.fromBuilder.group({
                ownerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile1: [''],
                mobile2: [''],
            }),
            houseInfo: this.fromBuilder.group({
                emptyRoom: [''],
                roomDetails: [''],
                price: [''],
            }),
            address: this.fromBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                zip: [''],
            }),
            renterInfo: this.fromBuilder.group({
                name: [''],
                mobile: [''],
                officeAddress: [''],
                permanentAddress: [''],
            }),
            isChecked: [''],
        });
        this.isImage = false;
        this.isUpdate = false;
        this.isRanted = false;
        this.checkedIt = false;
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            if (Object.keys(params).length > 0) {
                this.addForm
                    .get('ownerInfo.ownerName')
                    .setValue(JSON.parse(params.sameOwnersData).personal.ownerName);
                this.addForm
                    .get('ownerInfo.mobile1')
                    .setValue(JSON.parse(params.sameOwnersData).personal.mobile1);
                this.addForm
                    .get('ownerInfo.mobile2')
                    .setValue(JSON.parse(params.sameOwnersData).personal.mobile2);
                this.addForm
                    .get('houseInfo.emptyRoom')
                    .setValue(JSON.parse(params.sameOwnersData).details.houseInfo.emptyRoom);
                this.addForm
                    .get('houseInfo.roomDetails')
                    .setValue(JSON.parse(params.sameOwnersData).details.houseInfo.roomDetails);
                this.addForm
                    .get('houseInfo.price')
                    .setValue(JSON.parse(params.sameOwnersData).details.houseInfo.price);
                this.addForm
                    .get('address.street')
                    .setValue(JSON.parse(params.sameOwnersData).details.address.street);
                this.addForm
                    .get('address.city')
                    .setValue(JSON.parse(params.sameOwnersData).details.address.city);
                this.addForm
                    .get('address.state')
                    .setValue(JSON.parse(params.sameOwnersData).details.address.state);
                this.addForm
                    .get('address.zip')
                    .setValue(JSON.parse(params.sameOwnersData).details.address.zip);
                this.addForm
                    .get('isChecked')
                    .setValue(JSON.parse(params.sameOwnersData).details.renterInfo.isChecked);
                this.addForm
                    .get('renterInfo.name')
                    .setValue(JSON.parse(params.sameOwnersData).details.renterInfo.renterInfo.name);
                this.addForm
                    .get('renterInfo.mobile')
                    .setValue(JSON.parse(params.sameOwnersData).details.renterInfo.renterInfo
                    .mobile);
                this.addForm
                    .get('renterInfo.officeAddress')
                    .setValue(JSON.parse(params.sameOwnersData).details.renterInfo.renterInfo
                    .officeAddress);
                this.addForm
                    .get('renterInfo.permanentAddress')
                    .setValue(JSON.parse(params.sameOwnersData).details.renterInfo.renterInfo
                    .permanentAddress);
                if (JSON.parse(params.sameOwnersData).details.renterInfo.isChecked ===
                    true) {
                    this.checkedIt = 'true';
                    this.isRanted = true;
                }
                if (JSON.parse(params.sameOwnersData).details.imagePath.length > 0) {
                    this.imageArray = JSON.parse(params.sameOwnersData).details.imagePath;
                    this.isImage = true;
                    this.isUpdate = true;
                }
                localStorage.setItem('tempOldData', JSON.stringify(this.addForm.value));
            }
        });
    }
    onSubmit() {
        if (!this.isUpdate) {
            this.databaseService.addImage = this.imageArray;
            this.databaseService.addOtherData = this.addForm;
            this.databaseService.addUserFormToDatabase();
            this.route.navigate(['/tabs']);
        }
        else {
            this.databaseService.addImage = this.imageArray;
            this.databaseService.addOtherData = this.addForm;
            this.databaseService.updateUserFormToDatabase();
            this.route.navigate(['/tabs']);
        }
    }
    setImages(event) {
        if (event.target.files.length > 0) {
            this.imageArray = event.target.files;
        }
    }
    checkBox() {
        if (!this.addForm.get('isChecked').value || '') {
            this.isRanted = true;
        }
        else {
            this.isRanted = false;
        }
    }
};
AddPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/add/add.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.page.scss */ "./src/app/tabs/add/add.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], AddPage);



/***/ })

}]);
//# sourceMappingURL=add-add-module-es2015.js.map