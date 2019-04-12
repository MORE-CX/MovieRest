(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".princ{\r\n    background-color:#fff;\r\n    padding: 30px;border:\r\n    solid 1px rgb(233, 233, 233);\r\n    border-radius: 4px;\r\n    margin: 100px auto;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container princ\" >\n<router-outlet></router-outlet></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cliente';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/peliculas/peliculas.component */ "./src/app/components/peliculas/peliculas.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detalles/detalles.component */ "./src/app/components/detalles/detalles.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var config = {
    apiKey: "AIzaSyDG8ZLwbJepb5vAFlj7EfEliFMOQwGloBc",
    authDomain: "muvierest.firebaseapp.com",
    databaseURL: "https://muvierest.firebaseio.com",
    projectId: "muvierest",
    storageBucket: "muvierest.appspot.com",
    messagingSenderId: "600551442706"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_3__["PeliculasComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_9__["DetallesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_route__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(config),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/peliculas/peliculas.component */ "./src/app/components/peliculas/peliculas.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detalles/detalles.component */ "./src/app/components/detalles/detalles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'peliculas', component: _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_2__["PeliculasComponent"] },
    { path: 'detalles/:id', component: _components_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_4__["DetallesComponent"] },
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: '**', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/detalles/detalles.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/detalles/detalles.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/detalles/detalles.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/detalles/detalles.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div style=\" padding:20px;border-radius: 5px;margin-bottom:40px \">\n\n    <div class=\"col-md-6\">\n      <h2>\n        {{pelicula.titulo}}\n      </h2>\n      <hr>\n      <p><b>Descripcion:</b> {{pelicula.descripcion}}</p>\n      <p><b>Fecha de Estreno:</b> {{pelicula.estreno}}</p>\n      <p><b>Generos:</b> {{pelicula.generos}}</p>\n      <p><b>Trailer:</b></p>\n      <iframe width=\"100%\" height=\"320\" [src]=\"transform(pelicula.trailer)\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <img src=\"{{pelicula.portada}}\" alt=\"Portada\" class=\"img-thumbnail\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/detalles/detalles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/detalles/detalles.component.ts ***!
  \***********************************************************/
/*! exports provided: DetallesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesComponent", function() { return DetallesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pelicula_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pelicula.service */ "./src/app/services/pelicula.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetallesComponent = /** @class */ (function () {
    function DetallesComponent(_route, peliculaService, sanitizer, router) {
        var _this = this;
        this._route = _route;
        this.peliculaService = peliculaService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.pelicula = {
            titulo: "",
            descripcion: "",
            portada: "",
            trailer: "",
            estreno: "",
            generos: ""
        };
        var idGet = this._route.snapshot.paramMap.get("id");
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.peliculaService.getUnaPelicula(idGet).subscribe(function (peli) {
            _this.pelicula = peli;
        });
    }
    DetallesComponent.prototype.ngOnInit = function () {
    };
    DetallesComponent.prototype.transform = function (url) {
        if (!url) {
            return '';
        }
        if (url) {
            url = url.replace('watch?v=', 'embed/');
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    DetallesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalles',
            template: __webpack_require__(/*! ./detalles.component.html */ "./src/app/components/detalles/detalles.component.html"),
            styles: [__webpack_require__(/*! ./detalles.component.css */ "./src/app/components/detalles/detalles.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_pelicula_service__WEBPACK_IMPORTED_MODULE_2__["PeliculaService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetallesComponent);
    return DetallesComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor{\r\n    cursor: pointer;\r\n}\r\n\r\n.zoom {\r\n    transition: -webkit-transform .25s;\r\n    transition: transform .25s;\r\n    transition: transform .25s, -webkit-transform .25s;\r\n}\r\n\r\n.zoom:hover {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05); \r\n}\r\n\r\n.iUnaPeli{\r\n    border:solid rgb(231, 231, 231) 1px; \r\n    padding:10px;min-height:322px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"col-md-10\">\r\n        <h2 style=\"margin:0px\">Ultimas Subidas</h2>\r\n\r\n    </div>\r\n    \r\n    <div class=\"col-md-2\">\r\n        <div class=\"dropdown\">\r\n            \r\n            <button class=\"btn btn-default btn-block dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Ver: {{genero}}\r\n                <span class=\"caret\"></span></button>\r\n\r\n            <ul class=\"dropdown-menu\">\r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Todo')\">Todo</a></li>\r\n                <li class=\"divider\"></li>\r\n                \r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Accion')\">Acción</a></li>\r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Intriga')\">Intriga</a></li>\r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Crimen')\">Crimen</a></li>\r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Robos')\">Robos</a></li>\r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Sci-Fi')\">Sci-Fi</a></li>\r\n                <li class=\"cursor\"><a (click)=\"cambiarGenero('Thriller')\">Thriller</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <hr>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"col-md-offset-1 col-md-10\">\r\n<div *ngFor=\"let pelicula of peliculas\" class=\"col-md-3 zoom\" style=\"padding:10px;cursor:pointer\">\r\n    <div class=\"iUnaPeli\" [routerLink]=\"['/detalles',pelicula._id]\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"{{pelicula.portada}}\" alt=\"Portada\" class=\"img-thumbnail\">\r\n        </div>\r\n        <h4>{{pelicula.titulo}}</h4>\r\n    </div>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pelicula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pelicula.service */ "./src/app/services/pelicula.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(peliculaService) {
        var _this = this;
        this.peliculaService = peliculaService;
        this.genero = "Genero";
        this.peliculaService.getPeliculas().subscribe(function (pelis) {
            _this.peliculas = pelis;
        });
    }
    ;
    IndexComponent.prototype.cambiarGenero = function (genero) {
        var _this = this;
        this.genero = genero;
        this.peliculaService.getPeliculaSegunGenero(genero).subscribe(function (pelis) {
            _this.peliculas = pelis;
        });
    };
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pelicula_service__WEBPACK_IMPORTED_MODULE_1__["PeliculaService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#resultados{\r\n    position: absolute;\r\n    margin-top: 45px;\r\n    border: solid 1px rgb(206, 206, 206);\r\n    padding: 5px 5px 0px 5px;\r\n    border-radius: 3px;\r\n    min-width: 226px;\r\n    background: #fff;\r\n    z-index: 200;\r\n}\r\n\r\n\r\n#unResultado{\r\n    cursor: pointer;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n    #resultados{\r\n        margin-top: 5px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n\r\n.navbar{\r\n    background: rgb(252, 252, 252);\r\n    box-shadow: 0px 0px 5px 0px rgba(206, 206, 206,0.5);\r\n    border-bottom: solid 1px rgb(221, 220, 220)\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-default  navbar-fixed-top\" style=\"border-radius:0px;\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\" style=\"padding:5px\">\n        <img src=\"https://image.ibb.co/cmCG9e/logo.png\" alt=\"logo\" height=\"100%\">\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          \n            <li><a routerLink=\"/peliculas\"><span class=\"glyphicon glyphicon-user\" ></span> Admin Movies</a></li>\n          </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"has-feedback\" style=\" padding-top: 8px\">\n          <label for=\"buscar\" class=\"sr-only\">Buscar peliculas...</label>\n          <input type=\"text\" (keyup)=\"buscar($event)\" class=\"form-control\" name=\"buscar\" id=\"buscar\" placeholder=\"Buscar peliculas...\">\n          <span class=\"glyphicon glyphicon-search form-control-feedback\" style=\" padding: 8px\"></span>\n        </li>\n\n        <li id=\"resultados\" style=\"display:none\">\n          <div *ngFor=\"let pelicula of peliculas\" routerLink=\"/detalles/{{pelicula._id}}\" (click)=\"vaciar()\" id=\"unResultado\">\n            <img [src]=\"pelicula.portada\" alt=\"\" style=\"height:30px\">\n            {{pelicula.titulo}}\n          </div>\n        </li>\n      </ul>\n\n\n\n\n\n\n      \n\n\n\n\n\n\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pelicula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pelicula.service */ "./src/app/services/pelicula.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(peliculaService) {
        this.peliculaService = peliculaService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#buscar").focusin(function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__("#buscar").val() != "") {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados").css("display", "");
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).on("click", function (e) {
                var container = jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados");
                if (!container.is(e.target) && !jquery__WEBPACK_IMPORTED_MODULE_2__("#buscar").is(e.target) && container.has(e.target).length === 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados").css("display", "none");
                }
            });
        });
    };
    NavbarComponent.prototype.vaciar = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados").css("display", "none");
        });
    };
    NavbarComponent.prototype.buscar = function (event) {
        var _this = this;
        if (event.target.value == "") {
            this.peliculas = [];
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados").css("display", "none");
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__("#buscar").val() != "") {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados").css("display", "");
                }
            });
            this.peliculaService.getBuscarPelicula(event.target.value).subscribe(function (res) {
                _this.peliculas = res;
                if (_this.peliculas.length == 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#resultados").html("<li style='padding-bottom:5px' >No se encontraron resultados<li>");
                    });
                }
            });
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pelicula_service__WEBPACK_IMPORTED_MODULE_1__["PeliculaService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/peliculas/peliculas.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/peliculas/peliculas.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/peliculas/peliculas.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/peliculas/peliculas.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"collapse col-md-12\">\n\n  <h3 id=\"editar\">Editar pelicula</h3>\n  <hr>\n  <div class=\"col-md-6\">\n    <form (submit)=\"updatePelicula($event)\">\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n        <label for=\"titulo\">Titulo:</label>\n        <input type=\"text\" name=\"titulo\" [(ngModel)]=\"peliAEditar.titulo\" placeholder=\"Titulo\" class=\"form-control\"\n          value=\"{{peliAEditar.titulo}}\">\n      </div>\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n        <label for=\"descripcion\">Descripcion:</label>\n        <input type=\"text\" name=\"descripcion\" [(ngModel)]=\"peliAEditar.descripcion\" placeholder=\"Descripcion\" class=\"form-control\"\n          value=\"{{peliAEditar.descripcion}}\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n          <label for=\"trailer\">Portada:</label>\n        <div style=\"position:relative;\">\n          <a class='btn btn-default form-control' style=\"color: #999999;text-align: left\" href='javascript:;'>\n            Elegir: Imagen de Portada\n            <input type=\"file\" name=\"portada\"  accept=\".png,.jpg\" (change)=\"uploadImg($event)\"\n              accept=\"image/png, image/jpeg\" style='position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";opacity:0;background-color:transparent;color:transparent;'\n              name=\"file_source\" size=\"40\" onchange='$(\"#upload-file-info\").html($(this).val());'>\n          </a>\n          &nbsp;\n          <span class='label label-info' id=\"upload-file-info\"></span>\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n        <label for=\"trailer\">Trailer:</label>\n        <input type=\"text\" name=\"trailer\" id=\"trailerE\" [(ngModel)]=\"peliAEditar.trailer\" (change)=\"esYoutubeUrl()\" placeholder=\"Trailer\" class=\"form-control\"\n          value=\"{{peliAEditar.trailer}}\" required>\n      </div>\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n        <label for=\"estreno\">Estreno:</label>\n        <input type=\"text\" name=\"estreno\" [(ngModel)]=\"peliAEditar.estreno\" placeholder=\"Estreno\" class=\"form-control\"\n          value=\"{{peliAEditar.estreno}}\">\n      </div>\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n        <label for=\"generos\">Generos:</label>\n        <input type=\"text\" name=\"generos\" [(ngModel)]=\"peliAEditar.generos\" placeholder=\"Generos\" class=\"form-control\"\n          value=\"{{peliAEditar.generos}}\">\n      </div>\n      <div class=\"form-group col-md-offset-2 col-md-8\">\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-right:3px\">\n          Guardar Cambios\n        </button>\n        <button class=\"btn btn-danger\" id=\"cancelarEdicion\" data-toggle=\"collapse\" data-target=\"#demo\">\n          Cancelar\n        </button>\n      </div>\n    </form>\n  </div>\n\n\n\n  <div *ngIf=\"estado==2\" class=\"col-md-6\">\n\n    <div style=\"border:solid rgb(168, 168, 168) 1px; padding:20px\">\n      <h3>{{peliAEditar.titulo}}</h3>\n      <div style=\"text-align:center\">\n        <img src=\"{{portadatemp}}\" alt=\"Portada\" class=\"img-thumbnail col-md-offset-2 col-md-8\">\n      </div>\n      <p><b>Descripcion:</b> {{peliAEditar.descripcion}}</p>\n      <p><b>Fecha de Estreno:</b> {{peliAEditar.estreno}}</p>\n      <p><b>Genero:</b> {{peliAEditar.generos}}</p>\n      <p><b>Trailer:</b></p>\n      <iframe width=\"100%\" height=\"320\" [src]=\"transform(peliAEditar.trailer)\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<div class=\"col-md-6\">\n\n\n\n\n  <div *ngIf=\"estado==1\">\n    <div style=\"border:solid rgb(168, 168, 168) 1px; padding:20px\">\n      <h3>{{titulo}}</h3>\n      <img src=\"{{portadatemp}}\" alt=\"Portada\">\n      <p><b>Descripcion:</b>{{descripcion}}</p>\n      <p><b>Fecha de Estreno:</b> {{estreno}}</p>\n      <p><b>Genero:</b> {{generos}}</p>\n      <p><b>Trailer:</b></p>\n      <iframe width=\"100%\" height=\"320\" [src]=\"transform(trailer)\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </div>\n\n\n\n  <div>\n    <h3>Administrar Peliculas</h3>\n    <hr>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Titulo</th>\n          <th>Acciones</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let pelicula of peliculas\">\n          <th>\n            {{pelicula.titulo}}\n          </th>\n          <th>\n            <button class=\"btn btn-info\" [routerLink]=\"['/detalles',pelicula._id]\" style=\"margin-right:3px\">Ver</button>\n            <button class=\"btn btn-info\" (click)=\"editarPelicula(pelicula)\" data-toggle=\"collapse\" data-target=\"#demo\"\n              style=\"margin-right:3px\">Modo\n              Edicion\n            </button>\n            <button class=\"btn btn-danger\" (click)=\"deletePelicula(pelicula._id)\">Eliminar</button>\n          </th>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<div class=\"col-md-6\">\n\n\n  <h3>Agregar pelicula</h3>\n  <hr>\n\n\n  <div class=\"col-md-12\" style=\"text-align:center\">\n    <img src=\"https://image.ibb.co/edpAKe/logo_min.png\" alt=\"Agregar Pelicula\" width=\"30%\" style=\"margin:20px\">\n    <form (submit)=\"addPelicula($event)\" id=\"addF\" (click)=\"estado=1\">\n      <div class=\"form-group col-md-6\">\n        <input type=\"text\" name=\"titulo\" [(ngModel)]=\"titulo\" placeholder=\"Titulo\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <input type=\"text\" name=\"descripcion\" [(ngModel)]=\"descripcion\" placeholder=\"Descripcion\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <input type=\"text\" name=\"trailer\" id=\"trailerN\" (change)=\"esYoutubeUrl()\" [(ngModel)]=\"trailer\" required\n          placeholder=\"Trailer\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <input type=\"text\" name=\"estreno\" [(ngModel)]=\"estreno\" placeholder=\"Estreno\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <input type=\"text\" name=\"generos\" [(ngModel)]=\"generos\" placeholder=\"Generos\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <div style=\"position:relative;\">\n          <a class='btn btn-default form-control' style=\"color: #999999;text-align: left\" href='javascript:;'>\n            Elegir: Imagen de Portada\n            <input type=\"file\" name=\"portada\" [(ngModel)]=\"portada\" accept=\".png,.jpg\" (change)=\"uploadImg($event)\"\n              accept=\"image/png, image/jpeg\" style='position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";opacity:0;background-color:transparent;color:transparent;'\n              name=\"file_source\" size=\"40\" onchange='$(\"#upload-file-info\").html($(this).val());'>\n          </a>\n          &nbsp;\n          <span class='label label-info' id=\"upload-file-info\"></span>\n        </div>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary\">\n          Agregar Pelicula\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/peliculas/peliculas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/peliculas/peliculas.component.ts ***!
  \*************************************************************/
/*! exports provided: PeliculasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasComponent", function() { return PeliculasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pelicula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pelicula.service */ "./src/app/services/pelicula.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PeliculasComponent = /** @class */ (function () {
    function PeliculasComponent(peliculaService, afStorage, sanitizer, titleService) {
        var _this = this;
        this.peliculaService = peliculaService;
        this.afStorage = afStorage;
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.portadatemp = "imagenes/portadas/";
        this.peliAEditar = {
            titulo: "",
            descripcion: "",
            portada: "",
            trailer: "",
            estreno: "",
            generos: "",
        };
        titleService.setTitle("MR Admin Movies");
        //Obtiene todas las peliculas
        this.peliculaService.getPeliculas().subscribe(function (pelis) {
            _this.peliculas = pelis;
            _this.estado = 0;
        });
    }
    PeliculasComponent.prototype.ngOnInit = function () { };
    //Agrega una pelicula 
    PeliculasComponent.prototype.addPelicula = function (event) {
        var _this = this;
        event.preventDefault();
        var newPelicula = {
            titulo: this.titulo,
            descripcion: this.descripcion,
            portada: this.portadatemp,
            trailer: this.trailer,
            estreno: this.estreno,
            generos: this.generos
        };
        this.peliculaService.addPeliculas(newPelicula).subscribe(function (peli) {
            _this.peliculas = peli;
        });
        this.estado = 0;
        this.portadatemp = "imagenes/portadas/";
        $("#addF").trigger("reset");
    };
    //Elimina una pelicula
    PeliculasComponent.prototype.deletePelicula = function (id) {
        var pelicula = this.peliculas;
        this.peliculaService.deletePelicula(id).subscribe(function (data) {
            for (var i = 0; i < pelicula.length; i++) {
                if (pelicula[i]._id == id) {
                    pelicula.splice(i, 1);
                }
            }
        });
    };
    //Actualiza una pelicula
    PeliculasComponent.prototype.updatePelicula = function (event) {
        $("#cancelarEdicion").click();
        event.preventDefault();
        var pelicula = {
            _id: this.peliAEditar._id,
            titulo: this.peliAEditar.titulo,
            descripcion: this.peliAEditar.descripcion,
            portada: this.portadatemp,
            trailer: this.peliAEditar.trailer,
            estreno: this.peliAEditar.estreno,
            generos: this.peliAEditar.generos
        };
        this.peliculaService.updatePelicula(pelicula).subscribe(function (res) {
        });
        this.portadatemp = "imagenes/portadas/";
    };
    //Habilita el modo edicion
    PeliculasComponent.prototype.editarPelicula = function (pelicula) {
        this.estado = 2;
        this.peliAEditar = pelicula;
        this.portadatemp = pelicula.portada;
    };
    //Sube la imagen al servidor 
    PeliculasComponent.prototype.uploadImgOffline = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var uploadData = new FormData();
        uploadData.append('portada', this.selectedFile, this.selectedFile.name);
        this.portadatemp = "imagenes/portadas/";
        this.peliculaService.addPortada(uploadData).subscribe(function (peli) {
            _this.portadatemp = _this.portadatemp + peli;
        });
    };
    //Transforma la url para que pueda ser agregada al iframe del trailer
    PeliculasComponent.prototype.transform = function (url) {
        if (!url) {
            return '';
        }
        if (url) {
            url = url.replace('watch?v=', 'embed/');
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    //Verifica que la url es de youtube
    PeliculasComponent.prototype.esYoutubeUrl = function () {
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (this.estado == 2) {
            if (this.peliAEditar.trailer.match(p)) {
                $("#trailerE").css("border-color", "#cccccc");
                $("#trailerE").attr("placeholder", "Trailer");
                return this.peliAEditar.trailer.match(p)[1];
            }
            this.peliAEditar.trailer = "";
            $("#trailerE").css("border-color", "red");
            $("#trailerE").attr("placeholder", "Trailer: Link invalido");
        }
        else {
            if (this.trailer.match(p)) {
                $("#trailerN").css("border-color", "#cccccc");
                $("#trailerN").attr("placeholder", "Trailer");
                return this.trailer.match(p)[1];
            }
            this.trailer = "";
            $("#trailerN").css("border-color", "red");
            $("#trailerN").attr("placeholder", "Trailer: Link invalido");
        }
        return false;
    };
    ;
    //Sube la imagen de la portada
    PeliculasComponent.prototype.uploadImg = function (event) {
        var _this = this;
        if (this.peliculaService.domain == "https://movierest.herokuapp.com") {
            var id = Math.random().toString(36).substring(2);
            this.ref = this.afStorage.ref(id);
            this.task = this.ref.put(event.target.files[0]);
            this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                _this.ref.getDownloadURL().subscribe(function (url) {
                    _this.portadatemp = url;
                });
            })).subscribe();
        }
        else {
            this.uploadImgOffline(event);
        }
    };
    PeliculasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-peliculas',
            template: __webpack_require__(/*! ./peliculas.component.html */ "./src/app/components/peliculas/peliculas.component.html"),
            styles: [__webpack_require__(/*! ./peliculas.component.css */ "./src/app/components/peliculas/peliculas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pelicula_service__WEBPACK_IMPORTED_MODULE_1__["PeliculaService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PeliculasComponent);
    return PeliculasComponent;
}());



/***/ }),

/***/ "./src/app/services/pelicula.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/pelicula.service.ts ***!
  \**********************************************/
/*! exports provided: PeliculaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculaService", function() { return PeliculaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeliculaService = /** @class */ (function () {
    function PeliculaService(http) {
        this.http = http;
        //domain: String = "http://localhost:8080";
        this.domain = "https://movierest.herokuapp.com";
        this.key = "67f4da3fd50b5f030400d2f3527b608e";
    }
    PeliculaService.prototype.ngOnInit = function () {
    };
    //Obtiene todas las peliculas de la api y las retorna
    PeliculaService.prototype.getPeliculas = function () {
        return this.http.get(this.domain + "/api/peliculas/" + this.key).map(function (res) { return res; });
    };
    //Envia el id de una pelicula y retorna su resultado
    PeliculaService.prototype.getUnaPelicula = function (id) {
        return this.http.get(this.domain + "/api/peliculas/detalles/" + this.key + "&" + id).map(function (res) { return res; });
    };
    //Envia el genero a la api y retorna los resultados
    PeliculaService.prototype.getPeliculaSegunGenero = function (genero) {
        return this.http.get(this.domain + "/api/peliculas/genero/" + this.key + "&" + genero).map(function (res) { return res; });
    };
    //Envia el titulo a la api y retorna los resultados
    PeliculaService.prototype.getBuscarPelicula = function (titulo) {
        return this.http.get(this.domain + "/api/peliculas/buscar/" + this.key + "&" + titulo).map(function (res) { return res; });
    };
    //Agrega una pelicula a la base a traves de la api
    PeliculaService.prototype.addPeliculas = function (pelicula) {
        return this.http.post(this.domain + "/api/peliculas/" + this.key, pelicula).map(function (res) { return res; });
    };
    //Agrega una portada de pelicula y retorna su localizacion
    PeliculaService.prototype.addPortada = function (portada) {
        return this.http.post(this.domain + "/api/subirportada/" + this.key, portada).map(function (res) { return res; });
    };
    //Actualiza una pelicula y la retorna
    PeliculaService.prototype.updatePelicula = function (nuevaPelicula) {
        return this.http.put(this.domain + "/api/peliculas/" + this.key, nuevaPelicula).map(function (res) { return res; });
    };
    //Elimina una pelicula y retorna las restantes
    PeliculaService.prototype.deletePelicula = function (id) {
        return this.http.delete(this.domain + "/api/peliculas/" + this.key + "&" + id).map(function (res) { return res; });
    };
    PeliculaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeliculaService);
    return PeliculaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mcx/Trabajo/Proyectos/MovieRest/public/cliente/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map