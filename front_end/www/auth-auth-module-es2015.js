(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"overflow: hidden\">\n  <form\n    [formGroup]=\"loginForm\"\n    (ngSubmit)=\"checkLogin()\"\n    *ngIf=\"isRegistered; else notRegistered\"\n  >\n    <ion-card style=\"margin-top: 25vh; margin-bottom: 25vh\">\n      <ion-card>\n        <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\">Email Address</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input\n              type=\"password\"\n              formControlName=\"password\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-button\n        expand=\"full\"\n        size=\"large\"\n        fill=\"solid\"\n        type=\"submit\"\n        [disabled]=\"!loginForm.valid\"\n        >Sign in</ion-button\n      >\n      <p style=\"text-align: center\" (click)=\"toRegister()\">\n        <u>Go to register!</u>\n      </p>\n    </ion-card>\n  </form>\n  <ng-template #notRegistered>\n    <form\n      [formGroup]=\"registerForm\"\n      (ngSubmit)=\"checkRegister()\"\n      enctype=\"multipart/form-data\"\n    >\n      <ion-card style=\"margin-top: 15vh; margin-bottom: 15vh\">\n        <ion-card>\n          <ion-card-content>\n            <ion-item>\n              <ion-label position=\"floating\">User Name</ion-label>\n              <ion-input\n                type=\"text\"\n                formControlName=\"userName\"\n                required\n              ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Email Address</ion-label>\n              <ion-input\n                type=\"email\"\n                formControlName=\"email\"\n                required\n              ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                type=\"password\"\n                formControlName=\"password\"\n                required\n              ></ion-input>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header> Profile Photo </ion-card-header>\n          <ion-card-content>\n            <ion-input\n              (change)=\"setImages($event)\"\n              type=\"file\"\n              id=\"inputGroupFile01\"\n              aria-describedby=\"inputGroupFileAddon01\"\n              required\n            ></ion-input>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-button\n          expand=\"full\"\n          size=\"large\"\n          fill=\"solid\"\n          type=\"submit\"\n          [disabled]=\"!registerForm.valid\"\n          >Sign up</ion-button\n        >\n        <p style=\"text-align: center\" (click)=\"toLogin()\">\n          <u>Go to login!</u>\n        </p>\n      </ion-card>\n    </form>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"],
    },
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]],
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AuthPage = class AuthPage {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: [''],
        });
        this.registerForm = this.formBuilder.group({
            userName: [''],
            email: [''],
            password: [''],
        });
        this.isRegistered = false;
    }
    toRegister() {
        this.isRegistered = false;
    }
    toLogin() {
        this.isRegistered = true;
    }
    checkLogin() {
        const loginData = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        };
        this.authService.login(loginData);
    }
    checkRegister() {
        this.authService.register(this.registerForm, this.profilePhoto);
    }
    setImages(event) {
        if (event.target.files.length > 0) {
            this.profilePhoto = event.target.files;
        }
    }
};
AuthPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], AuthPage);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(httpClient, cookieService, route) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.route = route;
    }
    register(registerForm, profilePhoto) {
        const tempFormData = new FormData();
        const img = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < profilePhoto.length; i++) {
            img.push(profilePhoto[i].name);
            tempFormData.append('images', profilePhoto[i]);
            tempFormData.append('imagePath', JSON.stringify(img));
        }
        console.log(tempFormData);
        tempFormData.append('userName', JSON.stringify(registerForm.get('userName').value));
        tempFormData.append('email', JSON.stringify(registerForm.get('email').value));
        tempFormData.append('password', JSON.stringify(registerForm.get('password').value));
        this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].custom.REGISTER_URL, tempFormData, {
            observe: 'response',
        })
            .subscribe((response) => {
            if (response.body.status === 'ok') {
                if (this.cookieService.check('email')) {
                    this.cookieService.deleteAll();
                }
                this.cookieService.set('email', response.body.email);
                this.cookieService.set('isLoggedIn', 'true');
                this.route.navigate(['/tabs']);
            }
            else {
                // toast
            }
        });
    }
    login(loginData) {
        this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].custom.LOGIN_URL, loginData, {
            observe: 'response',
        })
            .subscribe((response) => {
            if (response.body.status === 'ok') {
                if (this.cookieService.check('email')) {
                    this.cookieService.deleteAll();
                }
                this.cookieService.set('email', response.body.email, 30000, '', 'localhost', false, 'Strict');
                this.cookieService.set('isLoggedIn', 'true', 30000, '', 'localhost', false, 'Strict');
                this.route.navigate(['/tabs']);
            }
            else {
                // toast
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AuthService);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map