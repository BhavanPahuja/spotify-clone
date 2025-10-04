"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["main"],{

/***/ 50957:
/*!*******************************************************!*\
  !*** ./apps/angular-spotify/src/app/app.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["angular-spotify-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n  position: relative;\n  isolation: isolate\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0E7QUFIQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBhcHBseSB3LWZ1bGwgaC1mdWxsO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci1zcG90aWZ5L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQTtBQUhBO0FBTUYsb2FBQW9hIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgdy1mdWxsIGgtZnVsbDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpc29sYXRpb246IGlzb2xhdGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 48464:
/*!****************************************************!*\
  !*** ./apps/angular-spotify/src/app/app.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 50957);
/* harmony import */ var _angular_spotify_web_shell_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shell/feature */ 35860);
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_spotify_web_auth_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/auth/util */ 79288);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 11619);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 46140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [(0,_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_2__.getAppConfigProvider)(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment), _angular_spotify_web_auth_util__WEBPACK_IMPORTED_MODULE_3__.authInterceptorProvider, _angular_spotify_web_auth_util__WEBPACK_IMPORTED_MODULE_3__.unauthorizedInterceptorProvider],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_spotify_web_shell_feature__WEBPACK_IMPORTED_MODULE_1__.WebShellModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_spotify_web_shell_feature__WEBPACK_IMPORTED_MODULE_1__.WebShellModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 11619:
/*!**************************************************************!*\
  !*** ./apps/angular-spotify/src/environments/environment.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  baseURL: 'https://api.spotify.com/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 798:
/*!******************************************!*\
  !*** ./apps/angular-spotify/src/main.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 48464);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 11619);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
// Sentry configuration disabled - configure with your own DSN if needed
// import * as Sentry from '@sentry/angular';
// Sentry.init({
//   dsn: 'YOUR_SENTRY_DSN',
//   integrations: [
//     new Sentry.BrowserTracing({
//       tracingOrigins: ['localhost', /^\//],
//       routingInstrumentation: Sentry.routingInstrumentation
//     })
//   ],
//   tracesSampleRate: 1.0
// });
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 69733:
/*!**************************************************!*\
  !*** ./libs/shared/view-transition/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentViewTransitionService: () => (/* reexport safe */ _lib_current_transition_service__WEBPACK_IMPORTED_MODULE_0__.CurrentViewTransitionService),
/* harmony export */   getViewTransitionParamValue: () => (/* reexport safe */ _lib_current_transition_service__WEBPACK_IMPORTED_MODULE_0__.getViewTransitionParamValue),
/* harmony export */   onViewTransitionCreated: () => (/* reexport safe */ _lib_current_transition_service__WEBPACK_IMPORTED_MODULE_0__.onViewTransitionCreated)
/* harmony export */ });
/* harmony import */ var _lib_current_transition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/current-transition.service */ 46819);


/***/ }),

/***/ 46819:
/*!***************************************************************************!*\
  !*** ./libs/shared/view-transition/src/lib/current-transition.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentViewTransitionService: () => (/* binding */ CurrentViewTransitionService),
/* harmony export */   getViewTransitionParamValue: () => (/* binding */ getViewTransitionParamValue),
/* harmony export */   onViewTransitionCreated: () => (/* binding */ onViewTransitionCreated)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class CurrentViewTransitionService {
  constructor() {
    this.currentTransition = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  }
  static #_ = this.ɵfac = function CurrentViewTransitionService_Factory(t) {
    return new (t || CurrentViewTransitionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CurrentViewTransitionService,
    factory: CurrentViewTransitionService.ɵfac,
    providedIn: 'root'
  });
}
function onViewTransitionCreated(info) {
  const currentTransitionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CurrentViewTransitionService);
  currentTransitionService.currentTransition.set(info);
  // Update current transition when animation finishes
  info.transition.finished.finally(() => {
    currentTransitionService.currentTransition.set(null);
  });
}
/*
  The reason for accessing the third firstChild is due to the route structure, for example when render AlbumComponent:
  AppComponent
    LayoutComponent
      /album (lazy loadChildren)
        /:albumId (lazy loadChildren)
  As a result, when receiving transition.from or transition.to, only the AppComponent route snapshot is received.
  Hence, accessing transition?.from.firstChild?.firstChild?.firstChild allows accessing the params.
*/
function getViewTransitionParamValue(transition, param) {
  if (!transition) {
    return null;
  }
  return transition.from.firstChild?.firstChild?.firstChild?.paramMap.get(param) || transition.to.firstChild?.firstChild?.firstChild?.paramMap.get(param);
}

/***/ }),

/***/ 66859:
/*!************************************************!*\
  !*** ./libs/web/auth/data-access/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthStore: () => (/* reexport safe */ _lib_store_auth_store__WEBPACK_IMPORTED_MODULE_0__.AuthStore)
/* harmony export */ });
/* harmony import */ var _lib_store_auth_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store/auth.store */ 61536);


/***/ }),

/***/ 85474:
/*!***********************************************************************!*\
  !*** ./libs/web/auth/data-access/src/lib/models/spotify-authorize.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotifyAuthorize: () => (/* binding */ SpotifyAuthorize)
/* harmony export */ });
class SpotifyAuthorize {
  constructor() {
    this.SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
    this.CLIENT_ID = 'd06c09470bb646ebb33f27616fb151fb';
    this.SCOPES = [
    //Listening History
    'user-read-recently-played', 'user-top-read', 'user-read-playback-position',
    //Spotify Connect
    'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing',
    //Playback - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'streaming',
    //Playlists
    'playlist-modify-public', 'playlist-modify-private', 'playlist-read-private', 'playlist-read-collaborative',
    //Library
    'user-library-modify', 'user-library-read',
    //Users - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'user-read-email', 'user-read-private'];
  }
  createAuthorizeURL() {
    const params = new URLSearchParams({
      client_id: this.CLIENT_ID,
      redirect_uri: `${window.location.origin}/`,
      scope: this.SCOPES.join(' '),
      response_type: 'token'
    });
    return `${this.SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
  }
}

/***/ }),

/***/ 61536:
/*!***************************************************************!*\
  !*** ./libs/web/auth/data-access/src/lib/store/auth.store.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthStore: () => (/* binding */ AuthStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-init */ 3649);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 92590);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _models_spotify_authorize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/spotify-authorize */ 85474);
/* harmony import */ var _angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/settings/data-access */ 26608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 81383);
// MAGIC LINE - WITHOUT THIS WOULD CAUSE THE BUILD TO FAIL
/// <reference types="spotify-api" />












class AuthStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_4__.ComponentStore {
  constructor(router, route, spotify, store) {
    super({});
    this.router = router;
    this.route = route;
    this.spotify = spotify;
    this.store = store;
    this.token$ = this.select(s => s.accessToken).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(token => !!token));
    this.country$ = this.select(s => s.country);
    this.userName$ = this.select(s => s.display_name);
    this.userProduct$ = this.select(s => s.product);
    this.userAvatar$ = this.select(s => s.images && s.images[0]?.url || 'https://avatars.githubusercontent.com/u/66833983?s=200&v=4');
    this.getUserId = () => this.get().id;
    this.getToken = () => this.get().accessToken;
    this.setCurrentUser = this.updater((state, user) => {
      console.log(user);
      return {
        ...state,
        ...user
      };
    });
    this.init = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMapTo)(this.initAuth())));
  }
  redirectToAuthorize() {
    const spotifyAuthorize = new _models_spotify_authorize__WEBPACK_IMPORTED_MODULE_2__.SpotifyAuthorize();
    const url = spotifyAuthorize.createAuthorizeURL();
    window.location.href = url;
  }
  initAuth() {
    if (!window.location.hash) {
      _angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.setItem('PATH', window.location.pathname);
      this.redirectToAuthorize();
    }
    return this.route.fragment.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(fragment => !!fragment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(fragment => new URLSearchParams(fragment)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(params => ({
      accessToken: params.get('access_token'),
      tokenType: params.get('token_type'),
      expiresIn: Number(params.get('expires_in')),
      state: params.get('state')
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(params => {
      this.patchState(params);
      this.store.dispatch((0,_angular_spotify_web_shared_app_init__WEBPACK_IMPORTED_MODULE_0__.AuthReady)());
      console.info('[Angular Spotify] Authenticated!');
      this.setCurrentUser(this.spotify.getMe());
      this.router.navigate([_angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.initialState?.path || '/']);
    }));
  }
  static #_ = this.ɵfac = function AuthStore_Factory(t) {
    return new (t || AuthStore)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.SpotifyApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: AuthStore,
    factory: AuthStore.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 74567:
/*!**********************************************************!*\
  !*** ./libs/web/auth/ui/unauthorized-modal/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedModalComponent: () => (/* reexport safe */ _lib_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedModalComponent),
/* harmony export */   UnauthorizedModalModule: () => (/* reexport safe */ _lib_unauthorized_modal_module__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedModalModule)
/* harmony export */ });
/* harmony import */ var _lib_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/unauthorized-modal.component */ 96976);
/* harmony import */ var _lib_unauthorized_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/unauthorized-modal.module */ 36607);



/***/ }),

/***/ 96976:
/*!*************************************************************************************!*\
  !*** ./libs/web/auth/ui/unauthorized-modal/src/lib/unauthorized-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedModalComponent: () => (/* binding */ UnauthorizedModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ 35921);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 13774);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 45352);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 54943);








function UnauthorizedModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnauthorizedModalComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.authenticate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class UnauthorizedModalComponent {
  constructor(modal, store) {
    this.modal = modal;
    this.store = store;
  }
  authenticate() {
    this.store.redirectToAuthorize();
    this.modal.destroy();
  }
  static #_ = this.ɵfac = function UnauthorizedModalComponent_Factory(t) {
    return new (t || UnauthorizedModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UnauthorizedModalComponent,
    selectors: [["ng-component"]],
    decls: 4,
    vars: 0,
    consts: [[4, "nzModalFooter"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "nzShape", "round", 3, "click"]],
    template: function UnauthorizedModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " One access token is valid for only one hour. When clicked the Login button, I will try to authenticate you again with Spotify to get a new access token \uD83D\uDE06 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnauthorizedModalComponent_div_3_Template, 3, 0, "div", 0);
      }
    },
    dependencies: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalFooterDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmF1dGhvcml6ZWQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2F1dGgvdWkvdW5hdXRob3JpemVkLW1vZGFsL3NyYy9saWIvdW5hdXRob3JpemVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 36607:
/*!**********************************************************************************!*\
  !*** ./libs/web/auth/ui/unauthorized-modal/src/lib/unauthorized-modal.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedModalModule: () => (/* binding */ UnauthorizedModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unauthorized-modal.component */ 96976);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 35921);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 13774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);





class UnauthorizedModalModule {
  static #_ = this.ɵfac = function UnauthorizedModalModule_Factory(t) {
    return new (t || UnauthorizedModalModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: UnauthorizedModalModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnauthorizedModalModule, {
    declarations: [_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule],
    exports: [_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedModalComponent]
  });
})();

/***/ }),

/***/ 79288:
/*!*****************************************!*\
  !*** ./libs/web/auth/util/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* reexport safe */ _lib_interceptors__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor),
/* harmony export */   UnauthorizedInterceptor: () => (/* reexport safe */ _lib_interceptors__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedInterceptor),
/* harmony export */   authInterceptorProvider: () => (/* reexport safe */ _lib_interceptors__WEBPACK_IMPORTED_MODULE_0__.authInterceptorProvider),
/* harmony export */   unauthorizedInterceptorProvider: () => (/* reexport safe */ _lib_interceptors__WEBPACK_IMPORTED_MODULE_0__.unauthorizedInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _lib_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interceptors */ 31093);


/***/ }),

/***/ 57586:
/*!*********************************************************************!*\
  !*** ./libs/web/auth/util/src/lib/interceptors/auth.interceptor.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor),
/* harmony export */   authInterceptorProvider: () => (/* binding */ authInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






class AuthInterceptor {
  constructor(authStore) {
    this.authStore = authStore;
  }
  intercept(req, next) {
    return this.authStore.token$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return next.handle(req);
      }
      const headers = req.headers.set('Authorization', `Bearer ${token}`);
      const authReq = req.clone({
        headers
      });
      return next.handle(authReq);
    }));
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthStore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}
const authInterceptorProvider = {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

/***/ }),

/***/ 31093:
/*!**********************************************************!*\
  !*** ./libs/web/auth/util/src/lib/interceptors/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* reexport safe */ _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor),
/* harmony export */   UnauthorizedInterceptor: () => (/* reexport safe */ _unauthorized_interceptor__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedInterceptor),
/* harmony export */   authInterceptorProvider: () => (/* reexport safe */ _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.authInterceptorProvider),
/* harmony export */   unauthorizedInterceptorProvider: () => (/* reexport safe */ _unauthorized_interceptor__WEBPACK_IMPORTED_MODULE_1__.unauthorizedInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.interceptor */ 57586);
/* harmony import */ var _unauthorized_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unauthorized.interceptor */ 79666);



/***/ }),

/***/ 79666:
/*!*****************************************************************************!*\
  !*** ./libs/web/auth/util/src/lib/interceptors/unauthorized.interceptor.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedInterceptor: () => (/* binding */ UnauthorizedInterceptor),
/* harmony export */   unauthorizedInterceptorProvider: () => (/* binding */ unauthorizedInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 29314);




class UnauthorizedInterceptor {
  constructor(uiStore) {
    this.uiStore = uiStore;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        this.uiStore.showUnauthorizedModal();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err);
    }));
  }
}
const unauthorizedInterceptorProvider = {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
  useClass: UnauthorizedInterceptor,
  multi: true,
  deps: [_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.UIStore]
};

/***/ }),

/***/ 33675:
/*!****************************************************!*\
  !*** ./libs/web/playlist/data-access/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistStore: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.PlaylistStore),
/* harmony export */   PlaylistTracksEffect: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.PlaylistTracksEffect),
/* harmony export */   PlaylistsEffect: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.PlaylistsEffect),
/* harmony export */   getPlaylist: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylist),
/* harmony export */   getPlaylistTracksById: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistTracksById),
/* harmony export */   getPlaylistTracksLoading: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistTracksLoading),
/* harmony export */   getPlaylistTracksState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistTracksState),
/* harmony export */   getPlaylists: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylists),
/* harmony export */   getPlaylistsLoading: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsLoading),
/* harmony export */   getPlaylistsMap: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsMap),
/* harmony export */   getPlaylistsState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsState),
/* harmony export */   getPlaylistsWithRouteUrl: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsWithRouteUrl),
/* harmony export */   loadPlaylistSuccess: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistSuccess),
/* harmony export */   loadPlaylistTracks: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracks),
/* harmony export */   loadPlaylistTracksError: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracksError),
/* harmony export */   loadPlaylistTracksSuccess: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracksSuccess),
/* harmony export */   loadPlaylists: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylists),
/* harmony export */   loadPlaylistsError: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsError),
/* harmony export */   loadPlaylistsSuccess: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsSuccess),
/* harmony export */   playlistTrackFeatureKey: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.playlistTrackFeatureKey),
/* harmony export */   playlistTracksReducer: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.playlistTracksReducer),
/* harmony export */   playlistsFeatureKey: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.playlistsFeatureKey),
/* harmony export */   playlistsReducer: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.playlistsReducer),
/* harmony export */   setPlaylistTracksStateStatus: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.setPlaylistTracksStateStatus)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ 32085);


/***/ }),

/***/ 32085:
/*!**************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistStore: () => (/* reexport safe */ _playlist__WEBPACK_IMPORTED_MODULE_2__.PlaylistStore),
/* harmony export */   PlaylistTracksEffect: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.PlaylistTracksEffect),
/* harmony export */   PlaylistsEffect: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.PlaylistsEffect),
/* harmony export */   getPlaylist: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.getPlaylist),
/* harmony export */   getPlaylistTracksById: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.getPlaylistTracksById),
/* harmony export */   getPlaylistTracksLoading: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.getPlaylistTracksLoading),
/* harmony export */   getPlaylistTracksState: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.getPlaylistTracksState),
/* harmony export */   getPlaylists: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.getPlaylists),
/* harmony export */   getPlaylistsLoading: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsLoading),
/* harmony export */   getPlaylistsMap: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsMap),
/* harmony export */   getPlaylistsState: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsState),
/* harmony export */   getPlaylistsWithRouteUrl: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsWithRouteUrl),
/* harmony export */   loadPlaylistSuccess: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistSuccess),
/* harmony export */   loadPlaylistTracks: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.loadPlaylistTracks),
/* harmony export */   loadPlaylistTracksError: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.loadPlaylistTracksError),
/* harmony export */   loadPlaylistTracksSuccess: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.loadPlaylistTracksSuccess),
/* harmony export */   loadPlaylists: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.loadPlaylists),
/* harmony export */   loadPlaylistsError: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsError),
/* harmony export */   loadPlaylistsSuccess: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsSuccess),
/* harmony export */   playlistTrackFeatureKey: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.playlistTrackFeatureKey),
/* harmony export */   playlistTracksReducer: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.playlistTracksReducer),
/* harmony export */   playlistsFeatureKey: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.playlistsFeatureKey),
/* harmony export */   playlistsReducer: () => (/* reexport safe */ _playlists__WEBPACK_IMPORTED_MODULE_0__.playlistsReducer),
/* harmony export */   setPlaylistTracksStateStatus: () => (/* reexport safe */ _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__.setPlaylistTracksStateStatus)
/* harmony export */ });
/* harmony import */ var _playlists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists */ 55581);
/* harmony import */ var _playlist_tracks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist-tracks */ 27447);
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist */ 63416);




/***/ }),

/***/ 27447:
/*!******************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist-tracks/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTracksEffect: () => (/* reexport safe */ _playlist_tracks_effect__WEBPACK_IMPORTED_MODULE_1__.PlaylistTracksEffect),
/* harmony export */   getPlaylistTracksById: () => (/* reexport safe */ _playlist_tracks_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistTracksById),
/* harmony export */   getPlaylistTracksLoading: () => (/* reexport safe */ _playlist_tracks_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistTracksLoading),
/* harmony export */   getPlaylistTracksState: () => (/* reexport safe */ _playlist_tracks_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistTracksState),
/* harmony export */   loadPlaylistTracks: () => (/* reexport safe */ _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracks),
/* harmony export */   loadPlaylistTracksError: () => (/* reexport safe */ _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracksError),
/* harmony export */   loadPlaylistTracksSuccess: () => (/* reexport safe */ _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracksSuccess),
/* harmony export */   playlistTrackFeatureKey: () => (/* reexport safe */ _playlist_tracks_reducer__WEBPACK_IMPORTED_MODULE_3__.playlistTrackFeatureKey),
/* harmony export */   playlistTracksReducer: () => (/* reexport safe */ _playlist_tracks_reducer__WEBPACK_IMPORTED_MODULE_3__.playlistTracksReducer),
/* harmony export */   setPlaylistTracksStateStatus: () => (/* reexport safe */ _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.setPlaylistTracksStateStatus)
/* harmony export */ });
/* harmony import */ var _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist-tracks.action */ 65284);
/* harmony import */ var _playlist_tracks_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist-tracks.effect */ 3723);
/* harmony import */ var _playlist_tracks_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist-tracks.selector */ 79783);
/* harmony import */ var _playlist_tracks_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist-tracks.reducer */ 66520);





/***/ }),

/***/ 65284:
/*!***********************************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist-tracks/playlist-tracks.action.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPlaylistTracks: () => (/* binding */ loadPlaylistTracks),
/* harmony export */   loadPlaylistTracksError: () => (/* binding */ loadPlaylistTracksError),
/* harmony export */   loadPlaylistTracksSuccess: () => (/* binding */ loadPlaylistTracksSuccess),
/* harmony export */   setPlaylistTracksStateStatus: () => (/* binding */ setPlaylistTracksStateStatus)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadPlaylistTracks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlist Tracks/Load]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPlaylistTracksSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlist Tracks/Load Success]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPlaylistTracksError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlist Tracks/Load Error]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPlaylistTracksStateStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlist Tracks/Set Playlist Tracks Status]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 3723:
/*!***********************************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist-tracks/playlist-tracks.effect.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTracksEffect: () => (/* binding */ PlaylistTracksEffect)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _playlist_tracks_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist-tracks.selector */ 79783);
/* harmony import */ var _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist-tracks.action */ 65284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);











class PlaylistTracksEffect {
  constructor(actions$, playlistsApi, store) {
    this.actions$ = actions$;
    this.playlistsApi = playlistsApi;
    this.store = store;
    this.loadPlaylistTracks$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistTracks), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_playlist_tracks_selector__WEBPACK_IMPORTED_MODULE_1__.getPlaylistTracksState))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([{
      playlistId
    }, playlistTracks]) => {
      if (playlistTracks.data?.has(playlistId)) {
        this.store.dispatch((0,_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_2__.setPlaylistTracksStateStatus)({
          status: 'success'
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([{
      playlistId
    }, playlistTracks]) => {
      return !playlistTracks.data?.has(playlistId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([{
      playlistId
    }]) => this.playlistsApi.getTracks(playlistId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(playlistTracks => (0,_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistTracksSuccess)({
      playlistId,
      playlistTracks
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY)))));
  }
  static #_ = this.ɵfac = function PlaylistTracksEffect_Factory(t) {
    return new (t || PlaylistTracksEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlaylistApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: PlaylistTracksEffect,
    factory: PlaylistTracksEffect.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 66520:
/*!************************************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist-tracks/playlist-tracks.reducer.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playlistTrackFeatureKey: () => (/* binding */ playlistTrackFeatureKey),
/* harmony export */   playlistTracksReducer: () => (/* binding */ playlistTracksReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist-tracks.action */ 65284);


const playlistTrackFeatureKey = 'playlistTracks';
const initialState = {
  data: new Map(),
  status: 'pending',
  error: null
};
const playlistTracksReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracks, state => ({
  ...state,
  status: 'loading'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracksSuccess, (state, {
  playlistId,
  playlistTracks
}) => {
  const {
    data: map
  } = state;
  map?.set(playlistId, playlistTracks);
  return {
    ...state,
    data: map,
    status: 'success'
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistTracksError, (state, {
  error
}) => ({
  ...state,
  error,
  status: 'error'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlist_tracks_action__WEBPACK_IMPORTED_MODULE_0__.setPlaylistTracksStateStatus, (state, {
  status
}) => ({
  ...state,
  status
})));

/***/ }),

/***/ 79783:
/*!*************************************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist-tracks/playlist-tracks.selector.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlaylistTracksById: () => (/* binding */ getPlaylistTracksById),
/* harmony export */   getPlaylistTracksLoading: () => (/* binding */ getPlaylistTracksLoading),
/* harmony export */   getPlaylistTracksState: () => (/* binding */ getPlaylistTracksState)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _playlist_tracks_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist-tracks.reducer */ 66520);



const getPlaylistTracksState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_playlist_tracks_reducer__WEBPACK_IMPORTED_MODULE_1__.playlistTrackFeatureKey);
const getPlaylistTracksLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylistTracksState, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.SelectorUtil.isLoading);
const getPlaylistTracksById = playlistId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylistTracksState, ({
  data
}) => {
  return data?.get(playlistId);
});

/***/ }),

/***/ 63416:
/*!***********************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistStore: () => (/* reexport safe */ _playlist_store__WEBPACK_IMPORTED_MODULE_0__.PlaylistStore)
/* harmony export */ });
/* harmony import */ var _playlist_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist.store */ 52939);


/***/ }),

/***/ 52939:
/*!********************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlist/playlist.store.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistStore: () => (/* binding */ PlaylistStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/component-store */ 72743);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var _playlist_tracks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlist-tracks */ 27447);
/* harmony import */ var _playlists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../playlists */ 55581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);















class PlaylistStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_5__.ComponentStore {
  get playlistContextUri() {
    return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouteUtil.getPlaylistContextUri(this.get().playlistId);
  }
  constructor(playerApi, playlistsApi, route, store, playbackStore) {
    super({
      data: null,
      error: null,
      status: 'pending',
      playlistId: ''
    });
    this.playerApi = playerApi;
    this.playlistsApi = playlistsApi;
    this.route = route;
    this.store = store;
    this.playbackStore = playbackStore;
    this.playlistParams$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.playlistId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(playlistId => !!playlistId));
    this.isCurrentPlaylistLoading$ = this.select(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.SelectorUtil.isLoading);
    this.isPlaylistTracksLoading$ = this.store.select(_playlist_tracks__WEBPACK_IMPORTED_MODULE_3__.getPlaylistTracksLoading);
    this.playlist$ = this.playlistParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(playlistId => {
      this.patchState({
        playlistId
      });
      this.loadPlaylist({
        playlistId
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(playlistId => this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)((0,_playlists__WEBPACK_IMPORTED_MODULE_4__.getPlaylist)(playlistId)))));
    this.tracks$ = this.playlistParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(playlistId => {
      this.store.dispatch((0,_playlist_tracks__WEBPACK_IMPORTED_MODULE_3__.loadPlaylistTracks)({
        playlistId
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(playlistId => this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)((0,_playlist_tracks__WEBPACK_IMPORTED_MODULE_3__.getPlaylistTracksById)(playlistId)))));
    this.isPlaylistPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.SelectorUtil.getMediaPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.playlist$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(playlist => playlist?.uri)), this.playbackStore.playback$]));
    this.loadPlaylist = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.withLatestFrom)(this.store.select(_playlists__WEBPACK_IMPORTED_MODULE_4__.getPlaylistsState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([params, state]) => !state.map?.get(params.playlistId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => {
      this.patchState({
        status: 'loading',
        error: null
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([params]) => params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({
      playlistId
    }) => this.playlistsApi.getById(playlistId).pipe((0,_ngrx_component_store__WEBPACK_IMPORTED_MODULE_13__.tapResponse)(playlist => {
      this.store.dispatch((0,_playlists__WEBPACK_IMPORTED_MODULE_4__.loadPlaylistSuccess)({
        playlist
      }));
      this.patchState({
        status: 'success',
        error: null
      });
    }, e => {
      this.patchState({
        status: 'error',
        error: e
      });
    })))));
    this.togglePlaylist = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({
      isPlaying
    }) => this.playerApi.togglePlay(isPlaying, {
      context_uri: this.playlistContextUri
    }))));
    this.playTrack = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({
      position
    }) => this.playerApi.play({
      context_uri: this.playlistContextUri,
      offset: {
        position
      }
    }))));
    this.playlistId$ = this.select(s => s.playlistId);
  }
  static #_ = this.ɵfac = function PlaylistStore_Factory(t) {
    return new (t || PlaylistStore)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlaylistApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: PlaylistStore,
    factory: PlaylistStore.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55581:
/*!************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlists/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistsEffect: () => (/* reexport safe */ _playlists_effect__WEBPACK_IMPORTED_MODULE_1__.PlaylistsEffect),
/* harmony export */   getPlaylist: () => (/* reexport safe */ _playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylist),
/* harmony export */   getPlaylists: () => (/* reexport safe */ _playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylists),
/* harmony export */   getPlaylistsLoading: () => (/* reexport safe */ _playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistsLoading),
/* harmony export */   getPlaylistsMap: () => (/* reexport safe */ _playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistsMap),
/* harmony export */   getPlaylistsState: () => (/* reexport safe */ _playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistsState),
/* harmony export */   getPlaylistsWithRouteUrl: () => (/* reexport safe */ _playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistsWithRouteUrl),
/* harmony export */   loadPlaylistSuccess: () => (/* reexport safe */ _playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistSuccess),
/* harmony export */   loadPlaylists: () => (/* reexport safe */ _playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylists),
/* harmony export */   loadPlaylistsError: () => (/* reexport safe */ _playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsError),
/* harmony export */   loadPlaylistsSuccess: () => (/* reexport safe */ _playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsSuccess),
/* harmony export */   playlistsFeatureKey: () => (/* reexport safe */ _playlists_reducer__WEBPACK_IMPORTED_MODULE_3__.playlistsFeatureKey),
/* harmony export */   playlistsReducer: () => (/* reexport safe */ _playlists_reducer__WEBPACK_IMPORTED_MODULE_3__.playlistsReducer)
/* harmony export */ });
/* harmony import */ var _playlists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.action */ 74080);
/* harmony import */ var _playlists_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlists.effect */ 82519);
/* harmony import */ var _playlists_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlists.selector */ 42291);
/* harmony import */ var _playlists_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlists.reducer */ 91636);





/***/ }),

/***/ 74080:
/*!***********************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlists/playlists.action.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPlaylistSuccess: () => (/* binding */ loadPlaylistSuccess),
/* harmony export */   loadPlaylists: () => (/* binding */ loadPlaylists),
/* harmony export */   loadPlaylistsError: () => (/* binding */ loadPlaylistsError),
/* harmony export */   loadPlaylistsSuccess: () => (/* binding */ loadPlaylistsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadPlaylists = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlists Store/API]');
const loadPlaylistsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlists Store/API success]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPlaylistsError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlists Store/API error]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPlaylistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Playlists Store/Load Playlist By Id success]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 82519:
/*!***********************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlists/playlists.effect.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistsEffect: () => (/* binding */ PlaylistsEffect)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _playlists_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlists.action */ 74080);
/* harmony import */ var _playlists_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlists.selector */ 42291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);











class PlaylistsEffect {
  constructor(actions$, playlistsApi, store) {
    this.actions$ = actions$;
    this.playlistsApi = playlistsApi;
    this.store = store;
    this.loadPlaylists$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_playlists_action__WEBPACK_IMPORTED_MODULE_1__.loadPlaylists), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getPlaylistsState))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([, playlistState]) => !playlistState.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.playlistsApi.getUserSavedPlaylists().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(playlists => (0,_playlists_action__WEBPACK_IMPORTED_MODULE_1__.loadPlaylistsSuccess)({
      playlists
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY)))));
  }
  static #_ = this.ɵfac = function PlaylistsEffect_Factory(t) {
    return new (t || PlaylistsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlaylistApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: PlaylistsEffect,
    factory: PlaylistsEffect.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 91636:
/*!************************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlists/playlists.reducer.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playlistsFeatureKey: () => (/* binding */ playlistsFeatureKey),
/* harmony export */   playlistsReducer: () => (/* binding */ playlistsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _playlists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.action */ 74080);


const playlistsFeatureKey = 'playlists';
const initialState = {
  map: null,
  data: null,
  status: 'pending',
  error: null
};
const playlistsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylists, state => ({
  ...state,
  status: 'loading'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsSuccess, (state, {
  playlists
}) => {
  const {
    items
  } = playlists;
  const map = new Map();
  items.forEach(playlist => map.set(playlist.id, playlist));
  return {
    ...state,
    map: map,
    data: playlists,
    status: 'success',
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistsError, (state, {
  error
}) => ({
  ...state,
  error,
  status: 'error'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadPlaylistSuccess, (state, {
  playlist
}) => {
  state.map?.set(playlist.id, playlist);
  return {
    ...state,
    map: new Map(state.map)
  };
}));

/***/ }),

/***/ 42291:
/*!*************************************************************************************!*\
  !*** ./libs/web/playlist/data-access/src/lib/store/playlists/playlists.selector.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlaylist: () => (/* binding */ getPlaylist),
/* harmony export */   getPlaylists: () => (/* binding */ getPlaylists),
/* harmony export */   getPlaylistsLoading: () => (/* binding */ getPlaylistsLoading),
/* harmony export */   getPlaylistsMap: () => (/* binding */ getPlaylistsMap),
/* harmony export */   getPlaylistsState: () => (/* binding */ getPlaylistsState),
/* harmony export */   getPlaylistsWithRouteUrl: () => (/* binding */ getPlaylistsWithRouteUrl)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _playlists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlists.reducer */ 91636);



const getPlaylistsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__.playlistsFeatureKey);
const getPlaylists = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylistsState, state => state.data);
const getPlaylistsWithRouteUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylists, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.SelectorUtil.getPlaylistsWithRoute);
const getPlaylistsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylistsState, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.SelectorUtil.isLoading);
const getPlaylistsMap = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylistsState, state => state.map);
const getPlaylist = playlistId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getPlaylistsMap, map => map?.get(playlistId));

/***/ }),

/***/ 26608:
/*!****************************************************!*\
  !*** ./libs/web/settings/data-access/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService),
/* harmony export */   SETTINGS_FEATURE_KEY: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_FEATURE_KEY),
/* harmony export */   SETTINGS_KEY: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_KEY),
/* harmony export */   SettingsEffects: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.SettingsEffects),
/* harmony export */   SettingsFacade: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.SettingsFacade),
/* harmony export */   initialState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.initialState),
/* harmony export */   settingsReducer: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.settingsReducer)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ 68482);
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services */ 95761);



/***/ }),

/***/ 95761:
/*!*****************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/services/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* reexport safe */ _local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)
/* harmony export */ });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 75091);


/***/ }),

/***/ 75091:
/*!*********************************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/services/local-storage.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
const APP_PREFIX = 'AS-';
class LocalStorageService {
  /**
   * Returns all initial variables
   * from local storage
   *
   * @static
   * @return {any}
   */
  static get initialState() {
    return Object.keys(localStorage).reduce((state, storageKey) => {
      if (storageKey.startsWith(APP_PREFIX)) {
        const stateKeys = storageKey.replace(APP_PREFIX, '').toLowerCase().split('.').map(key => key.split('-').map((token, index) => index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)).join(''));
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }
  /**
   * Sets item in local storage
   *
   * @param {string} key
   * @param {*} value
   */
  static setItem(key, value) {
    try {
      localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    } catch (e) {
      localStorage.setItem(`${APP_PREFIX}${key}`, value);
    }
  }
  /**
   * Gets item from local storage by key
   *
   * @param {string} key
   * @return {*}  {*}
   */
  static getItem(key) {
    const value = localStorage.getItem(`${APP_PREFIX}${key}`);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  /**
   * Removes item from local storage by key
   *
   * @param {string} key
   */
  static removeItem(key) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }
}

/***/ }),

/***/ 68482:
/*!**************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/store/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SETTINGS_FEATURE_KEY: () => (/* reexport safe */ _settings_reducer__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_FEATURE_KEY),
/* harmony export */   SETTINGS_KEY: () => (/* reexport safe */ _settings_effects__WEBPACK_IMPORTED_MODULE_2__.SETTINGS_KEY),
/* harmony export */   SettingsEffects: () => (/* reexport safe */ _settings_effects__WEBPACK_IMPORTED_MODULE_2__.SettingsEffects),
/* harmony export */   SettingsFacade: () => (/* reexport safe */ _settings_facade__WEBPACK_IMPORTED_MODULE_1__.SettingsFacade),
/* harmony export */   initialState: () => (/* reexport safe */ _settings_reducer__WEBPACK_IMPORTED_MODULE_0__.initialState),
/* harmony export */   settingsReducer: () => (/* reexport safe */ _settings_reducer__WEBPACK_IMPORTED_MODULE_0__.settingsReducer)
/* harmony export */ });
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.reducer */ 82439);
/* harmony import */ var _settings_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.facade */ 54405);
/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.effects */ 71717);




/***/ }),

/***/ 10336:
/*!*************************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/store/settings.actions.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   persistVolume: () => (/* binding */ persistVolume)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const persistVolume = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Persist Volume', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 71717:
/*!*************************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/store/settings.effects.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SETTINGS_KEY: () => (/* binding */ SETTINGS_KEY),
/* harmony export */   SettingsEffects: () => (/* binding */ SettingsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 95761);
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.actions */ 10336);
/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.selectors */ 9789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);









const SETTINGS_KEY = 'SETTINGS';
class SettingsEffects {
  constructor(actions$, store) {
    this.actions$ = actions$;
    this.store = store;
    this.persistSettings = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_settings_actions__WEBPACK_IMPORTED_MODULE_1__.persistVolume), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getSettings))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([, settings]) => _services__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.setItem(SETTINGS_KEY, settings))), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function SettingsEffects_Factory(t) {
    return new (t || SettingsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: SettingsEffects,
    factory: SettingsEffects.ɵfac
  });
}

/***/ }),

/***/ 54405:
/*!************************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/store/settings.facade.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsFacade: () => (/* binding */ SettingsFacade)
/* harmony export */ });
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.actions */ 10336);
/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.selectors */ 9789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 81383);





class SettingsFacade {
  constructor(store) {
    this.store = store;
    this.settings$ = this.store.select(_settings_selectors__WEBPACK_IMPORTED_MODULE_1__.getSettings);
    this.volume$ = this.store.select(_settings_selectors__WEBPACK_IMPORTED_MODULE_1__.getSettingsVolume);
  }
  persistVolume(volume) {
    this.store.dispatch(_settings_actions__WEBPACK_IMPORTED_MODULE_0__.persistVolume({
      volume
    }));
  }
  static #_ = this.ɵfac = function SettingsFacade_Factory(t) {
    return new (t || SettingsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SettingsFacade,
    factory: SettingsFacade.ɵfac
  });
}

/***/ }),

/***/ 82439:
/*!*************************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/store/settings.reducer.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SETTINGS_FEATURE_KEY: () => (/* binding */ SETTINGS_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   settingsReducer: () => (/* binding */ settingsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.actions */ 10336);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 95761);



const SETTINGS_FEATURE_KEY = 'settings';
const initialState = _services__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.initialState?.settings ?? {};
const settingsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_settings_actions__WEBPACK_IMPORTED_MODULE_0__.persistVolume, (state, {
  volume
}) => ({
  ...state,
  volume
})));

/***/ }),

/***/ 9789:
/*!***************************************************************************!*\
  !*** ./libs/web/settings/data-access/src/lib/store/settings.selectors.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSettings: () => (/* binding */ getSettings),
/* harmony export */   getSettingsVolume: () => (/* binding */ getSettingsVolume)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.reducer */ 82439);


const getSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_settings_reducer__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_FEATURE_KEY);
const getSettingsVolume = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getSettings, state => state.volume || 0);

/***/ }),

/***/ 1527:
/*!************************************************!*\
  !*** ./libs/web/settings/feature/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* reexport safe */ _lib_settings_module__WEBPACK_IMPORTED_MODULE_0__.SettingsModule)
/* harmony export */ });
/* harmony import */ var _lib_settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/settings.module */ 2638);


/***/ }),

/***/ 2638:
/*!**************************************************************!*\
  !*** ./libs/web/settings/feature/src/lib/settings.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/settings/data-access */ 26608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class SettingsModule {
  static #_ = this.ɵfac = function SettingsModule_Factory(t) {
    return new (t || SettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_0__.SettingsFacade],
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_FEATURE_KEY, _angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_0__.settingsReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.EffectsModule.forFeature([_angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_0__.SettingsEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 25541:
/*!*************************************************!*\
  !*** ./libs/web/shared/app-config/src/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* reexport safe */ _lib_app_config_token__WEBPACK_IMPORTED_MODULE_1__.APP_CONFIG),
/* harmony export */   getAppConfigProvider: () => (/* reexport safe */ _lib_app_config_token__WEBPACK_IMPORTED_MODULE_1__.getAppConfigProvider)
/* harmony export */ });
/* harmony import */ var _lib_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/app.config */ 74908);
/* harmony import */ var _lib_app_config_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/app-config.token */ 92274);



/***/ }),

/***/ 92274:
/*!****************************************************************!*\
  !*** ./libs/web/shared/app-config/src/lib/app-config.token.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* binding */ APP_CONFIG),
/* harmony export */   getAppConfigProvider: () => (/* binding */ getAppConfigProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('angular-spotify.config');
const getAppConfigProvider = value => ({
  provide: APP_CONFIG,
  useValue: value
});

/***/ }),

/***/ 74908:
/*!**********************************************************!*\
  !*** ./libs/web/shared/app-config/src/lib/app.config.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3649:
/*!***********************************************!*\
  !*** ./libs/web/shared/app-init/src/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInit: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AppInit),
/* harmony export */   ApplicationEffects: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ApplicationEffects),
/* harmony export */   AuthReady: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AuthReady)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 7313);


/***/ }),

/***/ 91541:
/*!*************************************************************!*\
  !*** ./libs/web/shared/app-init/src/lib/app-init.action.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInit: () => (/* binding */ AppInit),
/* harmony export */   AuthReady: () => (/* binding */ AuthReady)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const AppInit = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Init');
const AuthReady = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Ready');

/***/ }),

/***/ 86571:
/*!*****************************************************************!*\
  !*** ./libs/web/shared/app-init/src/lib/application.effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationEffects: () => (/* binding */ ApplicationEffects)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var _angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/settings/data-access */ 26608);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _app_init_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-init.action */ 91541);
/* harmony import */ var _google_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-analytics.service */ 85726);
/* harmony import */ var _promp_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promp-update.service */ 1380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);


















class ApplicationEffects {
  constructor(actions$, authStore, playbackService, settingsFacade, router, googleAnalytics, promptUpdate) {
    this.actions$ = actions$;
    this.authStore = authStore;
    this.playbackService = playbackService;
    this.settingsFacade = settingsFacade;
    this.router = router;
    this.googleAnalytics = googleAnalytics;
    this.promptUpdate = promptUpdate;
    this.initAuth$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_init_action__WEBPACK_IMPORTED_MODULE_3__.AppInit), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
      this.authStore.init();
    })), {
      dispatch: false
    });
    this.initPlaybackSDK$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_init_action__WEBPACK_IMPORTED_MODULE_3__.AuthReady), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.authStore.token$, this.settingsFacade.volume$])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(([_, [token, volume]]) => {
      this.playbackService.initPlaybackSDK(token, volume);
    })), {
      dispatch: false
    });
    this.sendGoogleAnalyticPageView$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(event => {
      this.googleAnalytics.sendPageView(event.urlAfterRedirects);
    })), {
      dispatch: false
    });
    this.initForceUpdate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_init_action__WEBPACK_IMPORTED_MODULE_3__.AppInit), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.promptUpdate.forceUpdate())), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function ApplicationEffects_Factory(t) {
    return new (t || ApplicationEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthStore), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__.PlaybackService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_1__.SettingsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_google_analytics_service__WEBPACK_IMPORTED_MODULE_4__.GoogleAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_promp_update_service__WEBPACK_IMPORTED_MODULE_5__.PromptUpdateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: ApplicationEffects,
    factory: ApplicationEffects.ɵfac
  });
}

/***/ }),

/***/ 85726:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/app-init/src/lib/google-analytics.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleAnalyticsService: () => (/* binding */ GoogleAnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const GOOGLE_ANALYTICS_ID = 'G-24YF96FX0G';
class GoogleAnalyticsService {
  constructor() {
    this.sendEvent = (eventName, eventCategory, eventLabel, eventValue) => {
      if (!this.gtag) {
        return;
      }
      this.gtag('event', eventName, {
        /* eslint-disable @typescript-eslint/naming-convention */
        event_category: eventCategory,
        event_label: eventLabel,
        /* eslint-enable @typescript-eslint/naming-convention */
        value: eventValue
      });
    };
    if (typeof gtag !== 'undefined') {
      this.gtag = gtag;
    }
  }
  sendPageView(url) {
    if (!this.gtag) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.gtag('config', GOOGLE_ANALYTICS_ID, {
      page_path: url
    });
  }
  static #_ = this.ɵfac = function GoogleAnalyticsService_Factory(t) {
    return new (t || GoogleAnalyticsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GoogleAnalyticsService,
    factory: GoogleAnalyticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7313:
/*!***************************************************!*\
  !*** ./libs/web/shared/app-init/src/lib/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInit: () => (/* reexport safe */ _app_init_action__WEBPACK_IMPORTED_MODULE_0__.AppInit),
/* harmony export */   ApplicationEffects: () => (/* reexport safe */ _application_effects__WEBPACK_IMPORTED_MODULE_1__.ApplicationEffects),
/* harmony export */   AuthReady: () => (/* reexport safe */ _app_init_action__WEBPACK_IMPORTED_MODULE_0__.AuthReady)
/* harmony export */ });
/* harmony import */ var _app_init_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-init.action */ 91541);
/* harmony import */ var _application_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.effects */ 86571);



/***/ }),

/***/ 1380:
/*!******************************************************************!*\
  !*** ./libs/web/shared/app-init/src/lib/promp-update.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromptUpdateService: () => (/* binding */ PromptUpdateService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ 46140);






class PromptUpdateService {
  constructor(updates, document) {
    this.updates = updates;
    this.document = document;
  }
  forceUpdate() {
    if (!this.updates.isEnabled) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
    return this.updates.versionUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(evt => evt.type === 'VERSION_READY'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
      this.updates.activateUpdate().then(() => {
        if (confirm(`There is a new version of Angular Spotify available! Would you like to upgrade now?`)) {
          this.document.location.reload();
        }
      });
    }));
  }
  static #_ = this.ɵfac = function PromptUpdateService_Factory(t) {
    return new (t || PromptUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: PromptUpdateService,
    factory: PromptUpdateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 14489:
/*!*********************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolumeHighIcon: () => (/* reexport safe */ _lib_volume_icon__WEBPACK_IMPORTED_MODULE_1__.VolumeHighIcon),
/* harmony export */   VolumeIcon: () => (/* reexport safe */ _lib_volume_icon__WEBPACK_IMPORTED_MODULE_1__.VolumeIcon),
/* harmony export */   VolumeMediumIcon: () => (/* reexport safe */ _lib_volume_icon__WEBPACK_IMPORTED_MODULE_1__.VolumeMediumIcon),
/* harmony export */   VolumeMuteIcon: () => (/* reexport safe */ _lib_volume_icon__WEBPACK_IMPORTED_MODULE_1__.VolumeMuteIcon)
/* harmony export */ });
/* harmony import */ var _lib_nav_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/nav-item */ 43850);
/* harmony import */ var _lib_volume_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/volume-icon */ 20501);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/store */ 19635);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/api */ 67678);





/***/ }),

/***/ 86743:
/*!***********************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/audio-analysis-response.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Audio analysis crash course - Mark Koh
// https://www.youtube.com/watch?v=goUzHd7cTuA
// https://www.slideshare.net/MarkKoh9/audio-analysis-with-spotifys-web-api


/***/ }),

/***/ 67678:
/*!*****************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-request */ 64186);
/* harmony import */ var _user_recent_played_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-recent-played-track */ 83213);
/* harmony import */ var _audio_analysis_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio-analysis-response */ 86743);
/* harmony import */ var _playlists_with_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlists-with-route */ 90242);
/* harmony import */ var _track_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./track-extended */ 78967);
/* harmony import */ var _spotify_api_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spotify-api-params */ 23584);







/***/ }),

/***/ 64186:
/*!************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/play-request.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 90242:
/*!********************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/playlists-with-route.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 23584:
/*!******************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/spotify-api-params.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 78967:
/*!**************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/track-extended.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 83213:
/*!************************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/api/user-recent-played-track.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 43850:
/*!****************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/nav-item.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 86442:
/*!***************************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/store/generic-state.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 19635:
/*!*******************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/store/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generic_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-state */ 86442);


/***/ }),

/***/ 20501:
/*!*******************************************************************!*\
  !*** ./libs/web/shared/data-access/models/src/lib/volume-icon.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolumeHighIcon: () => (/* binding */ VolumeHighIcon),
/* harmony export */   VolumeIcon: () => (/* binding */ VolumeIcon),
/* harmony export */   VolumeMediumIcon: () => (/* binding */ VolumeMediumIcon),
/* harmony export */   VolumeMuteIcon: () => (/* binding */ VolumeMuteIcon)
/* harmony export */ });
class VolumeIcon {
  constructor(volume, icon, title) {
    this.volume = volume;
    this.icon = icon;
    this.title = title;
  }
}
class VolumeHighIcon extends VolumeIcon {
  constructor(volume) {
    super(volume, 'volume-high', 'Mute');
  }
}
class VolumeMediumIcon extends VolumeIcon {
  constructor(volume) {
    super(volume, 'volume-medium', 'Mute');
  }
}
class VolumeMuteIcon extends VolumeIcon {
  constructor() {
    super(0, 'volume-mute', 'Unmute');
  }
}

/***/ }),

/***/ 91856:
/*!**************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumApiService: () => (/* reexport safe */ _lib_album_api__WEBPACK_IMPORTED_MODULE_5__.AlbumApiService),
/* harmony export */   ArtistApiService: () => (/* reexport safe */ _lib_artist_api__WEBPACK_IMPORTED_MODULE_6__.ArtistApiService),
/* harmony export */   BrowseApiService: () => (/* reexport safe */ _lib_browse_api__WEBPACK_IMPORTED_MODULE_3__.BrowseApiService),
/* harmony export */   PlayerApiService: () => (/* reexport safe */ _lib_player_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService),
/* harmony export */   PlaylistApiService: () => (/* reexport safe */ _lib_playlist_api__WEBPACK_IMPORTED_MODULE_1__.PlaylistApiService),
/* harmony export */   SearchApiService: () => (/* reexport safe */ _lib_search_api__WEBPACK_IMPORTED_MODULE_7__.SearchApiService),
/* harmony export */   SpotifyApiService: () => (/* reexport safe */ _lib_spotify_api__WEBPACK_IMPORTED_MODULE_0__.SpotifyApiService),
/* harmony export */   TrackApiService: () => (/* reexport safe */ _lib_track_api__WEBPACK_IMPORTED_MODULE_4__.TrackApiService)
/* harmony export */ });
/* harmony import */ var _lib_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/spotify-api */ 77907);
/* harmony import */ var _lib_playlist_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/playlist-api */ 44373);
/* harmony import */ var _lib_player_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/player-api */ 84282);
/* harmony import */ var _lib_browse_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/browse-api */ 37977);
/* harmony import */ var _lib_track_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/track-api */ 60554);
/* harmony import */ var _lib_album_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/album-api */ 54770);
/* harmony import */ var _lib_artist_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/artist-api */ 16572);
/* harmony import */ var _lib_search_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/search-api */ 28715);









/***/ }),

/***/ 54770:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/album-api.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumApiService: () => (/* binding */ AlbumApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);




class AlbumApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }
  getUserSavedAlbums(params = {
    limit: 50
  }) {
    return this.http.get(`${this.appConfig.baseURL}/me/albums`, {
      params
    });
  }
  getAlbum(albumId) {
    return this.http.get(`${this.appConfig.baseURL}/albums/${albumId}`);
  }
  getTracks(albumId, params = {
    limit: 50
  }) {
    return this.http.get(`${this.appConfig.baseURL}/albums/${albumId}/tracks`, {
      params
    });
  }
  static #_ = this.ɵfac = function AlbumApiService_Factory(t) {
    return new (t || AlbumApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AlbumApiService,
    factory: AlbumApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16572:
/*!***********************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/artist-api.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistApiService: () => (/* binding */ ArtistApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);




class ArtistApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }
  getArtist(artistId) {
    return this.http.get(`${this.appConfig.baseURL}/artists/${artistId}`);
  }
  getArtistTopTracks(artistId, country) {
    return this.http.get(`${this.appConfig.baseURL}/artists/${artistId}/top-tracks?market=${country}`);
  }
  static #_ = this.ɵfac = function ArtistApiService_Factory(t) {
    return new (t || ArtistApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ArtistApiService,
    factory: ArtistApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 37977:
/*!***********************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/browse-api.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseApiService: () => (/* binding */ BrowseApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);





class BrowseApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
    this.browseUrl = `${this.appConfig.baseURL}/browse`;
  }
  getAllFeaturedPlaylists(params = {
    limit: 50
  }) {
    return this.http.get(`${this.browseUrl}/featured-playlists`, {
      params
    });
  }
  getAllCategories(params = {
    limit: 50
  }) {
    return this.http.get(`${this.browseUrl}/categories`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.categories));
  }
  getCategoryPlaylists(categoryId, params = {
    limit: 50
  }) {
    return this.http.get(`${this.browseUrl}/categories/${categoryId}/playlists`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.playlists));
  }
  static #_ = this.ɵfac = function BrowseApiService_Factory(t) {
    return new (t || BrowseApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BrowseApiService,
    factory: BrowseApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 84282:
/*!***********************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/player-api.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerApiService: () => (/* binding */ PlayerApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);




class PlayerApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
    this.playerUrl = `${this.appConfig.baseURL}/me/player`;
  }
  transferUserPlayback(deviceId) {
    return this.http.put(this.playerUrl, {
      device_ids: [deviceId]
      //play: true
    });
  }
  play(request) {
    return this.http.put(`${this.playerUrl}/play`, request);
  }
  pause() {
    return this.http.put(`${this.playerUrl}/pause`, {});
  }
  togglePlay(isPlaying, request) {
    if (isPlaying) {
      return this.pause();
    }
    return this.play(request);
  }
  next() {
    return this.http.post(`${this.playerUrl}/next`, {});
  }
  prev() {
    return this.http.post(`${this.playerUrl}/previous`, {});
  }
  seek(positionMs) {
    return this.http.put(`${this.playerUrl}/seek`, null, {
      params: {
        position_ms: `${positionMs}`
      }
    });
  }
  setVolume(volume) {
    return this.http.put(`${this.playerUrl}/volume`, null, {
      params: {
        volume_percent: `${volume}`
      }
    });
  }
  getRecentPlayedTracks(params = {
    limit: 50
  }) {
    return this.http.get(`${this.playerUrl}/recently-played`, {
      params: params // eslint-disable-line
    });
  }
  static #_ = this.ɵfac = function PlayerApiService_Factory(t) {
    return new (t || PlayerApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PlayerApiService,
    factory: PlayerApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 44373:
/*!*************************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/playlist-api.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistApiService: () => (/* binding */ PlaylistApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);




class PlaylistApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }
  getUserSavedPlaylists(params = {
    limit: 50
  }) {
    return this.http.get(`${this.appConfig.baseURL}/me/playlists`, {
      params
    });
  }
  getById(playlistId) {
    if (!playlistId) {
      throw new Error('Playlist Id is required');
    }
    return this.http.get(`${this.appConfig.baseURL}/playlists/${playlistId}`);
  }
  getTracks(playlistId) {
    if (!playlistId) {
      throw new Error('Playlist Id is required');
    }
    return this.http.get(`${this.appConfig.baseURL}/playlists/${playlistId}/tracks`);
  }
  static #_ = this.ɵfac = function PlaylistApiService_Factory(t) {
    return new (t || PlaylistApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PlaylistApiService,
    factory: PlaylistApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28715:
/*!***********************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/search-api.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchApiService: () => (/* binding */ SearchApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class SearchApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }
  /**
   * Search for tracks, artists, albums, and playlists
   *
   * @param {string} term
   * @param {SpotifyApiParams} [apiParams={ limit: 50 }]
   * @return {*}  {(Observable<SearchResponse>)}
   */
  search(term, apiParams = {
    limit: 50
  }) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
      fromObject: apiParams
    }).set('q', term).set('type', 'track,artist,album,playlist');
    return this.http.get(`${this.appConfig.baseURL}/search`, {
      params
    });
  }
  static #_ = this.ɵfac = function SearchApiService_Factory(t) {
    return new (t || SearchApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SearchApiService,
    factory: SearchApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 77907:
/*!************************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/spotify-api.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotifyApiService: () => (/* binding */ SpotifyApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);




class SpotifyApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }
  getMe() {
    return this.http.get(`${this.appConfig.baseURL}/me`);
  }
  static #_ = this.ɵfac = function SpotifyApiService_Factory(t) {
    return new (t || SpotifyApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SpotifyApiService,
    factory: SpotifyApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 60554:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/data-access/spotify-api/src/lib/track-api.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackApiService: () => (/* binding */ TrackApiService)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/app-config */ 25541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);




class TrackApiService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }
  getAudioAnalysis(trackId) {
    return this.http.get(`${this.appConfig.baseURL}/audio-analysis/${trackId}`);
  }
  getAudioFeatures(trackId) {
    return this.http.get(`${this.appConfig.baseURL}/audio-features/${trackId}`);
  }
  getUserSavedTracks(params = {
    limit: 50
  }) {
    return this.http.get(`${this.appConfig.baseURL}/me/tracks`, {
      params
    });
  }
  static #_ = this.ɵfac = function TrackApiService_Factory(t) {
    return new (t || TrackApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_spotify_web_shared_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TrackApiService,
    factory: TrackApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98138:
/*!********************************************************!*\
  !*** ./libs/web/shared/data-access/store/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackService: () => (/* reexport safe */ _lib_playback__WEBPACK_IMPORTED_MODULE_1__.PlaybackService),
/* harmony export */   PlaybackStore: () => (/* reexport safe */ _lib_playback__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore),
/* harmony export */   UIStore: () => (/* reexport safe */ _lib_ui__WEBPACK_IMPORTED_MODULE_0__.UIStore)
/* harmony export */ });
/* harmony import */ var _lib_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui */ 28541);
/* harmony import */ var _lib_playback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/playback */ 55674);



/***/ }),

/***/ 55674:
/*!*********************************************************************!*\
  !*** ./libs/web/shared/data-access/store/src/lib/playback/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackService: () => (/* reexport safe */ _playback_service__WEBPACK_IMPORTED_MODULE_1__.PlaybackService),
/* harmony export */   PlaybackStore: () => (/* reexport safe */ _playback_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore)
/* harmony export */ });
/* harmony import */ var _playback_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playback.store */ 13078);
/* harmony import */ var _playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playback.service */ 79084);



/***/ }),

/***/ 79084:
/*!********************************************************************************!*\
  !*** ./libs/web/shared/data-access/store/src/lib/playback/playback.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackService: () => (/* binding */ PlaybackService)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/settings/data-access */ 26608);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _playback_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playback.store */ 13078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 80436);










class PlaybackService {
  constructor(playbackStore, playerApi, titleService, settingsFacade) {
    this.playbackStore = playbackStore;
    this.playerApi = playerApi;
    this.titleService = titleService;
    this.settingsFacade = settingsFacade;
  }
  play() {
    this.playbackStore.player()?.togglePlay();
  }
  next() {
    this.playbackStore.player()?.nextTrack();
  }
  prev() {
    this.playbackStore.player()?.previousTrack();
  }
  seek(pos_ms) {
    this.playbackStore.player()?.seek(pos_ms);
  }
  setVolume(volume) {
    this.playbackStore.patchState({
      volume
    });
    this.settingsFacade.persistVolume(volume);
    return this.playerApi.setVolume(Math.floor(volume * 100));
  }
  initPlaybackSDK(token, volume) {
    var _this = this;
    return (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        Player
      } = yield _this.waitForSpotifyWebPlaybackSDKToLoad();
      const player = new Player({
        name: 'Angular Spotify Web Player',
        getOAuthToken: cb => {
          cb(token);
        },
        volume
      });
      player.addListener('initialization_error', ({
        message
      }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({
        message
      }) => {
        console.error(message);
      });
      player.addListener('account_error', ({
        message
      }) => {
        alert(`You account has to have Spotify Premium for playing music ${message}`);
      });
      player.addListener('playback_error', ({
        message
      }) => {
        console.error(message);
      });
      player.addListener('player_state_changed', /*#__PURE__*/function () {
        var _ref = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state) {
          console.log(state);
          if (!state) {
            console.info('[Angular Spotify] No player info!');
            return;
          }
          _this.setAppTitle(state);
          _this.playbackStore.patchState({
            data: state,
            volume: yield player.getVolume()
          });
          const currentTrackId = state.track_window?.current_track?.id;
          if (!state.paused && currentTrackId) {
            _this.playbackStore.loadTracksAnalytics({
              trackId: currentTrackId
            });
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      player.addListener('ready', ({
        device_id
      }) => {
        console.log('[Angular Spotify] Ready with Device ID', device_id);
        _this.playbackStore.patchState({
          deviceId: device_id
        });
        _this.playerApi.transferUserPlayback(device_id).subscribe();
      });
      player.addListener('not_ready', ({
        device_id
      }) => {
        console.log('[Angular Spotify] Device ID has gone offline', device_id);
      });
      yield player.connect();
      _this.playbackStore.patchState({
        player
      });
    })();
  }
  //TODO: move to an effect somewhere
  setAppTitle(state) {
    const currentTrack = state.track_window?.current_track;
    if (currentTrack) {
      const artistName = currentTrack.artists[0].name || '';
      this.titleService.setTitle(`Angular Spotify - ${currentTrack.name} ${artistName ? `- ${artistName}` : ''}`);
    }
  }
  waitForSpotifyWebPlaybackSDKToLoad() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.onSpotifyWebPlaybackSDKReady = () => {};
    return new Promise(resolve => {
      if (window.Spotify) {
        resolve(window.Spotify);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(window.Spotify);
        };
      }
    });
  }
  static #_ = this.ɵfac = function PlaybackService_Factory(t) {
    return new (t || PlaybackService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_playback_store__WEBPACK_IMPORTED_MODULE_3__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_spotify_web_settings_data_access__WEBPACK_IMPORTED_MODULE_1__.SettingsFacade));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PlaybackService,
    factory: PlaybackService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 13078:
/*!******************************************************************************!*\
  !*** ./libs/web/shared/data-access/store/src/lib/playback/playback.store.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackStore: () => (/* binding */ PlaybackStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);







class PlaybackStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__.ComponentStore {
  constructor(trackApi) {
    super({});
    this.trackApi = trackApi;
    this.playback$ = this.select(s => s.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(data => !!data));
    this.context$ = this.playback$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.context));
    this.currentTrack$ = this.playback$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(data => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      context,
      track_window
    }) => {
      const track = track_window.current_track;
      if (!track) {
        return null;
      }
      const {
        album
      } = track;
      const getPlaylistUrl = uri => {
        if (!uri) {
          return '';
        }
        const isPlaylist = uri.includes('playlist');
        return isPlaylist ? _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouteUtil.getPlaylistRouteUrl(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtil.getIdFromUri(uri)) : '';
      };
      const albumId = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtil.getIdFromUri(album.uri);
      const albumUrl = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouteUtil.getAlbumRouteUrl(albumId);
      const trackExtended = {
        ...track,
        albumUrl,
        playlistUrl: getPlaylistUrl(context.uri),
        artists: track.artists.map(artist => {
          const artistId = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtil.getIdFromUri(artist.uri);
          const artistUrl = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouteUtil.getArtistRouteUrl(artistId);
          return {
            ...artist,
            artistUrl
          };
        })
      };
      return trackExtended;
    }));
    this.position$ = this.playback$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data?.position));
    this.volume$ = this.select(s => s.volume);
    this.isPlaying$ = this.playback$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      if (!data) {
        return false;
      }
      return !data.paused;
    }));
    this.analysisInfo$ = this.select(s => ({
      trackAnalysisId: s.trackAnalysisId,
      isAnalysisLoading: s.isAnalysisLoading
    }));
    this.segments$ = this.select(s => ({
      isPlaying: s.data ? !s.data.paused : false,
      position: s.data?.position,
      segments: s.analysis?.segments
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(s => !!s.segments));
    this.player = () => this.get().player;
    this.loadTracksAnalytics = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.analysisInfo$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(([{
      trackId
    }, {
      isAnalysisLoading,
      trackAnalysisId
    }]) => !isAnalysisLoading && trackId !== trackAnalysisId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
      this.patchState({
        isAnalysisLoading: true
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([{
      trackId
    }]) => this.trackApi.getAudioAnalysis(trackId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(analysis => ({
      analysis,
      trackId
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
      this.patchState({
        isAnalysisLoading: false
      });
      return rxjs__WEBPACK_IMPORTED_MODULE_9__.EMPTY;
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      analysis,
      trackId
    }) => {
      analysis.segments = analysis.segments.map(segment => ({
        ...segment,
        start: segment.start * 1000,
        duration: segment.duration * 1000
      }));
      this.patchState({
        analysis: analysis,
        trackAnalysisId: trackId,
        isAnalysisLoading: false
      });
    })));
  }
  static #_ = this.ɵfac = function PlaybackStore_Factory(t) {
    return new (t || PlaybackStore)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.TrackApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: PlaybackStore,
    factory: PlaybackStore.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28541:
/*!***************************************************************!*\
  !*** ./libs/web/shared/data-access/store/src/lib/ui/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIStore: () => (/* reexport safe */ _ui_store__WEBPACK_IMPORTED_MODULE_0__.UIStore)
/* harmony export */ });
/* harmony import */ var _ui_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-store */ 2879);


/***/ }),

/***/ 2879:
/*!******************************************************************!*\
  !*** ./libs/web/shared/data-access/store/src/lib/ui/ui-store.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIStore: () => (/* binding */ UIStore)
/* harmony export */ });
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 92590);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_spotify_web_auth_ui_unauthorized_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/auth/ui/unauthorized-modal */ 74567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 35921);






class UIStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_1__.ComponentStore {
  constructor(modalService) {
    super({
      navItems: [{
        label: 'Home',
        path: '',
        exact: true,
        icon: 'house-door',
        iconSelected: 'house-door-fill'
      }, {
        label: 'Search',
        path: '/search',
        icon: 'search'
      }, {
        label: 'Browse',
        path: '/browse',
        icon: 'compass',
        iconSelected: 'compass-fill'
      }, {
        label: 'My Playlists',
        path: '/collection/playlists',
        icon: 'music-note-list',
        iconSelected: 'music-note-beamed'
      }, {
        label: 'My Albums',
        path: '/albums',
        icon: 'journal'
      }, {
        label: 'Liked songs',
        path: '/collection/tracks',
        icon: 'heart',
        iconSelected: 'heart-fill'
      }],
      isShowUnauthorizedModal: false
    });
    this.modalService = modalService;
    this.isShowUnauthorizedModal$ = this.select(s => s.isShowUnauthorizedModal);
    this.navItems$ = this.select(({
      navItems
    }) => navItems);
    this.showUnauthorizedModal = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMapTo)(this.isShowUnauthorizedModal$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(s => !s), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.patchState({
        isShowUnauthorizedModal: true
      });
      this.modalService.create({
        nzTitle: 'Your access token has expired!',
        nzContent: _angular_spotify_web_auth_ui_unauthorized_modal__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedModalComponent,
        nzClosable: false,
        nzKeyboard: false,
        nzMaskClosable: false
      });
    })));
  }
  static #_ = this.ɵfac = function UIStore_Factory(t) {
    return new (t || UIStore)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: UIStore,
    factory: UIStore.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78845:
/*!********************************************************************!*\
  !*** ./libs/web/shared/directives/data-size-observer/src/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSizeObserverDirective: () => (/* reexport safe */ _lib_data_size_observer_directive__WEBPACK_IMPORTED_MODULE_0__.DataSizeObserverDirective),
/* harmony export */   ResizableDirective: () => (/* reexport safe */ _lib_resizeable_directive__WEBPACK_IMPORTED_MODULE_1__.ResizableDirective)
/* harmony export */ });
/* harmony import */ var _lib_data_size_observer_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data-size-observer.directive */ 75301);
/* harmony import */ var _lib_resizeable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/resizeable.directive */ 57670);



/***/ }),

/***/ 75301:
/*!***********************************************************************************************!*\
  !*** ./libs/web/shared/directives/data-size-observer/src/lib/data-size-observer.directive.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSizeObserverDirective: () => (/* binding */ DataSizeObserverDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class DataSizeObserverDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.dataSizeObserverClass = 'data-size-observer';
    this.bottom = false;
    this.top = false;
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const {
          width
        } = entry.contentRect;
        this.elementRef.nativeElement.setAttribute('data-size', `${Number(width.toFixed(2))}px`);
      }
    });
  }
  ngOnInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    this.resizeObserver.unobserve(this.elementRef.nativeElement);
  }
  static #_ = this.ɵfac = function DataSizeObserverDirective_Factory(t) {
    return new (t || DataSizeObserverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DataSizeObserverDirective,
    selectors: [["", "dataSizeObserver", ""]],
    hostVars: 6,
    hostBindings: function DataSizeObserverDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.dataSizeObserverClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bottom", ctx.bottom)("top", ctx.top);
      }
    },
    inputs: {
      bottom: "bottom",
      top: "top"
    },
    standalone: true
  });
}

/***/ }),

/***/ 57670:
/*!***************************************************************************************!*\
  !*** ./libs/web/shared/directives/data-size-observer/src/lib/resizeable.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizableDirective: () => (/* binding */ ResizableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ResizableDirective {
  constructor() {
    this.className = 'overflow-auto resize-x';
  }
  static #_ = this.ɵfac = function ResizableDirective_Factory(t) {
    return new (t || ResizableDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ResizableDirective,
    selectors: [["", "resizable", ""]],
    hostVars: 2,
    hostBindings: function ResizableDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
      }
    },
    standalone: true
  });
}

/***/ }),

/***/ 65552:
/*!**********************************************************!*\
  !*** ./libs/web/shared/pipes/duration-pipe/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationPipeModule: () => (/* reexport safe */ _lib_duration_pipe_module__WEBPACK_IMPORTED_MODULE_0__.DurationPipeModule)
/* harmony export */ });
/* harmony import */ var _lib_duration_pipe_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/duration-pipe.module */ 20449);


/***/ }),

/***/ 20449:
/*!*****************************************************************************!*\
  !*** ./libs/web/shared/pipes/duration-pipe/src/lib/duration-pipe.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationPipeModule: () => (/* binding */ DurationPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration.pipe */ 37914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class DurationPipeModule {
  static #_ = this.ɵfac = function DurationPipeModule_Factory(t) {
    return new (t || DurationPipeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DurationPipeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DurationPipeModule, {
    declarations: [_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.DurationPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.DurationPipe]
  });
})();

/***/ }),

/***/ 37914:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/pipes/duration-pipe/src/lib/duration.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationPipe: () => (/* binding */ DurationPipe)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class DurationPipe {
  transform(durationInMs) {
    if (!durationInMs) {
      return '';
    }
    return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.TimeUtil.formatDuration(durationInMs);
  }
  static #_ = this.ɵfac = function DurationPipe_Factory(t) {
    return new (t || DurationPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "duration",
    type: DurationPipe,
    pure: true
  });
}

/***/ }),

/***/ 25383:
/*!**********************************************!*\
  !*** ./libs/web/shared/ui/icon/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconModule: () => (/* reexport safe */ _lib_icon_module__WEBPACK_IMPORTED_MODULE_0__.IconModule)
/* harmony export */ });
/* harmony import */ var _lib_icon_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/icon.module */ 30214);


/***/ }),

/***/ 30214:
/*!********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/icon.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconModule: () => (/* binding */ IconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _svg_audio_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/audio-animated */ 47220);
/* harmony import */ var _svg_caret_down_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/caret-down-fill */ 1318);
/* harmony import */ var _svg_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/clock */ 20788);
/* harmony import */ var _svg_compass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/compass */ 73830);
/* harmony import */ var _svg_compass_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/compass-fill */ 10130);
/* harmony import */ var _svg_cup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/cup */ 43462);
/* harmony import */ var _svg_cup_fill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/cup-fill */ 45458);
/* harmony import */ var _svg_cup_straw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/cup-straw */ 41524);
/* harmony import */ var _svg_emoji_heart_eyes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/emoji-heart-eyes */ 85636);
/* harmony import */ var _svg_expand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/expand */ 21816);
/* harmony import */ var _svg_github__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svg/github */ 24939);
/* harmony import */ var _svg_heart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg/heart */ 6586);
/* harmony import */ var _svg_heart_fill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/heart-fill */ 25982);
/* harmony import */ var _svg_home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svg/home */ 99911);
/* harmony import */ var _svg_house_door__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/house-door */ 68087);
/* harmony import */ var _svg_house_door_fill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/house-door-fill */ 4485);
/* harmony import */ var _svg_journal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svg/journal */ 91609);
/* harmony import */ var _svg_music_note_beamed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg/music-note-beamed */ 18109);
/* harmony import */ var _svg_music_note_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./svg/music-note-list */ 96023);
/* harmony import */ var _svg_pause__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/pause */ 20356);
/* harmony import */ var _svg_play__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./svg/play */ 96730);
/* harmony import */ var _svg_question_circle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./svg/question-circle */ 53981);
/* harmony import */ var _svg_search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./svg/search */ 47728);
/* harmony import */ var _svg_search_heart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./svg/search-heart */ 65121);
/* harmony import */ var _svg_shrink__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./svg/shrink */ 89953);
/* harmony import */ var _svg_step_backward__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./svg/step-backward */ 22426);
/* harmony import */ var _svg_step_forward__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./svg/step-forward */ 26309);
/* harmony import */ var _svg_times__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./svg/times */ 78940);
/* harmony import */ var _svg_twitter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./svg/twitter */ 45173);
/* harmony import */ var _svg_volume_high__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./svg/volume-high */ 29503);
/* harmony import */ var _svg_volume_medium__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./svg/volume-medium */ 6916);
/* harmony import */ var _svg_volume_mute__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./svg/volume-mute */ 24446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 37580);



































class IconModule {
  static #_ = this.ɵfac = function IconModule_Factory(t) {
    return new (t || IconModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({
    type: IconModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({
    providers: [(0,_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_33__.provideSvgIcons)([_svg_audio_animated__WEBPACK_IMPORTED_MODULE_0__.asAudioAnimatedIcon, _svg_caret_down_fill__WEBPACK_IMPORTED_MODULE_1__.asCaretDownFillIcon, _svg_clock__WEBPACK_IMPORTED_MODULE_2__.asClockIcon, _svg_compass_fill__WEBPACK_IMPORTED_MODULE_4__.asCompassFillIcon, _svg_compass__WEBPACK_IMPORTED_MODULE_3__.asCompassIcon, _svg_cup_fill__WEBPACK_IMPORTED_MODULE_6__.asCupFillIcon, _svg_cup__WEBPACK_IMPORTED_MODULE_5__.asCupIcon, _svg_cup_straw__WEBPACK_IMPORTED_MODULE_7__.asCupStrawIcon, _svg_emoji_heart_eyes__WEBPACK_IMPORTED_MODULE_8__.asEmojiHeartEyesIcon, _svg_expand__WEBPACK_IMPORTED_MODULE_9__.asExpandIcon, _svg_github__WEBPACK_IMPORTED_MODULE_10__.asGithubIcon, _svg_heart_fill__WEBPACK_IMPORTED_MODULE_12__.asHeartFillIcon, _svg_heart__WEBPACK_IMPORTED_MODULE_11__.asHeartIcon, _svg_home__WEBPACK_IMPORTED_MODULE_13__.asHomeIcon, _svg_house_door_fill__WEBPACK_IMPORTED_MODULE_15__.asHouseDoorFillIcon, _svg_house_door__WEBPACK_IMPORTED_MODULE_14__.asHouseDoorIcon, _svg_journal__WEBPACK_IMPORTED_MODULE_16__.asJournalIcon, _svg_music_note_beamed__WEBPACK_IMPORTED_MODULE_17__.asMusicNoteBeamedIcon, _svg_music_note_list__WEBPACK_IMPORTED_MODULE_18__.asMusicNoteListIcon, _svg_pause__WEBPACK_IMPORTED_MODULE_19__.asPauseIcon, _svg_play__WEBPACK_IMPORTED_MODULE_20__.asPlayIcon, _svg_question_circle__WEBPACK_IMPORTED_MODULE_21__.asQuestionCircleIcon, _svg_search_heart__WEBPACK_IMPORTED_MODULE_23__.asSearchHeartIcon, _svg_search__WEBPACK_IMPORTED_MODULE_22__.asSearchIcon, _svg_shrink__WEBPACK_IMPORTED_MODULE_24__.asShrinkIcon, _svg_step_backward__WEBPACK_IMPORTED_MODULE_25__.asStepBackwardIcon, _svg_step_forward__WEBPACK_IMPORTED_MODULE_26__.asStepForwardIcon, _svg_times__WEBPACK_IMPORTED_MODULE_27__.asTimesIcon, _svg_twitter__WEBPACK_IMPORTED_MODULE_28__.asTwitterIcon, _svg_volume_high__WEBPACK_IMPORTED_MODULE_29__.asVolumeHighIcon, _svg_volume_medium__WEBPACK_IMPORTED_MODULE_30__.asVolumeMediumIcon, _svg_volume_mute__WEBPACK_IMPORTED_MODULE_31__.asVolumeMuteIcon])],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_33__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](IconModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_33__.SvgIconComponent],
    exports: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_33__.SvgIconComponent]
  });
})();

/***/ }),

/***/ 47220:
/*!***************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/audio-animated.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asAudioAnimatedIcon: () => (/* binding */ asAudioAnimatedIcon)
/* harmony export */ });
const asAudioAnimatedIcon = {
  data: `<!--By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL--><svg viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill="#FFF"><g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"/></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"/></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"/></rect></g></svg>`,
  name: 'audio-animated'
};

/***/ }),

/***/ 1318:
/*!****************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/caret-down-fill.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asCaretDownFillIcon: () => (/* binding */ asCaretDownFillIcon)
/* harmony export */ });
const asCaretDownFillIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`,
  name: 'caret-down-fill'
};

/***/ }),

/***/ 20788:
/*!******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/clock.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asClockIcon: () => (/* binding */ asClockIcon)
/* harmony export */ });
const asClockIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor"/></svg>`,
  name: 'clock'
};

/***/ }),

/***/ 10130:
/*!*************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/compass-fill.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asCompassFillIcon: () => (/* binding */ asCompassFillIcon)
/* harmony export */ });
const asCompassFillIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-compass-fill" viewBox="0 0 16 16"><path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/></svg>`,
  name: 'compass-fill'
};

/***/ }),

/***/ 73830:
/*!********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/compass.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asCompassIcon: () => (/* binding */ asCompassIcon)
/* harmony export */ });
const asCompassIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16"><path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/><path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/></svg>`,
  name: 'compass'
};

/***/ }),

/***/ 45458:
/*!*********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/cup-fill.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asCupFillIcon: () => (/* binding */ asCupFillIcon)
/* harmony export */ });
const asCupFillIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16"><path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/></svg>`,
  name: 'cup-fill'
};

/***/ }),

/***/ 41524:
/*!**********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/cup-straw.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asCupStrawIcon: () => (/* binding */ asCupStrawIcon)
/* harmony export */ });
const asCupStrawIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16"><path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0l-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/></svg>`,
  name: 'cup-straw'
};

/***/ }),

/***/ 43462:
/*!****************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/cup.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asCupIcon: () => (/* binding */ asCupIcon)
/* harmony export */ });
const asCupIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16"><path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/></svg>`,
  name: 'cup'
};

/***/ }),

/***/ 85636:
/*!*****************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/emoji-heart-eyes.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asEmojiHeartEyesIcon: () => (/* binding */ asEmojiHeartEyesIcon)
/* harmony export */ });
const asEmojiHeartEyesIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/></svg>`,
  name: 'emoji-heart-eyes'
};

/***/ }),

/***/ 21816:
/*!*******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/expand.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asExpandIcon: () => (/* binding */ asExpandIcon)
/* harmony export */ });
const asExpandIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="m26.586 34.586-14.586 14.586v-5.172c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0z"/><path d="m54 8h-10c-1.104 0-2 .896-2 2s.896 2 2 2h5.172l-14.586 14.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586l14.586-14.586v5.172c0 1.104.896 2 2 2s2-.896 2-2v-10c0-1.104-.896-2-2-2z"/></svg>`,
  name: 'expand'
};

/***/ }),

/***/ 24939:
/*!*******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/github.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asGithubIcon: () => (/* binding */ asGithubIcon)
/* harmony export */ });
const asGithubIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`,
  name: 'github'
};

/***/ }),

/***/ 25982:
/*!***********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/heart-fill.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asHeartFillIcon: () => (/* binding */ asHeartFillIcon)
/* harmony export */ });
const asHeartFillIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`,
  name: 'heart-fill'
};

/***/ }),

/***/ 6586:
/*!******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/heart.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asHeartIcon: () => (/* binding */ asHeartIcon)
/* harmony export */ });
const asHeartIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>`,
  name: 'heart'
};

/***/ }),

/***/ 99911:
/*!*****************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/home.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asHomeIcon: () => (/* binding */ asHomeIcon)
/* harmony export */ });
const asHomeIcon = {
  data: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"/></svg>`,
  name: 'home'
};

/***/ }),

/***/ 4485:
/*!****************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/house-door-fill.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asHouseDoorFillIcon: () => (/* binding */ asHouseDoorFillIcon)
/* harmony export */ });
const asHouseDoorFillIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/></svg>`,
  name: 'house-door-fill'
};

/***/ }),

/***/ 68087:
/*!***********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/house-door.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asHouseDoorIcon: () => (/* binding */ asHouseDoorIcon)
/* harmony export */ });
const asHouseDoorIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>`,
  name: 'house-door'
};

/***/ }),

/***/ 91609:
/*!********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/journal.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asJournalIcon: () => (/* binding */ asJournalIcon)
/* harmony export */ });
const asJournalIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-journal" viewBox="0 0 16 16"><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg>`,
  name: 'journal'
};

/***/ }),

/***/ 18109:
/*!******************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/music-note-beamed.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asMusicNoteBeamedIcon: () => (/* binding */ asMusicNoteBeamedIcon)
/* harmony export */ });
const asMusicNoteBeamedIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16"><path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/><path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/></svg>`,
  name: 'music-note-beamed'
};

/***/ }),

/***/ 96023:
/*!****************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/music-note-list.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asMusicNoteListIcon: () => (/* binding */ asMusicNoteListIcon)
/* harmony export */ });
const asMusicNoteListIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg>`,
  name: 'music-note-list'
};

/***/ }),

/***/ 20356:
/*!******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/pause.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asPauseIcon: () => (/* binding */ asPauseIcon)
/* harmony export */ });
const asPauseIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h16v16H0z"/><path d="M3 2h3v12H3zM10 2h3v12h-3z"/></svg>`,
  name: 'pause'
};

/***/ }),

/***/ 96730:
/*!*****************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/play.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asPlayIcon: () => (/* binding */ asPlayIcon)
/* harmony export */ });
const asPlayIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.018 14L14.41 8 4.018 2z"/></svg>`,
  name: 'play'
};

/***/ }),

/***/ 53981:
/*!****************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/question-circle.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asQuestionCircleIcon: () => (/* binding */ asQuestionCircleIcon)
/* harmony export */ });
const asQuestionCircleIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>`,
  name: 'question-circle'
};

/***/ }),

/***/ 65121:
/*!*************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/search-heart.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asSearchHeartIcon: () => (/* binding */ asSearchHeartIcon)
/* harmony export */ });
const asSearchHeartIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16"><path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/><path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/></svg>`,
  name: 'search-heart'
};

/***/ }),

/***/ 47728:
/*!*******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/search.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asSearchIcon: () => (/* binding */ asSearchIcon)
/* harmony export */ });
const asSearchIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>`,
  name: 'search'
};

/***/ }),

/***/ 89953:
/*!*******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/shrink.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asShrinkIcon: () => (/* binding */ asShrinkIcon)
/* harmony export */ });
const asShrinkIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="m52.586 8.586-14.586 14.586v-5.172c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828s-2.047-.781-2.828 0z"/><path d="m10 56c.512 0 1.023-.195 1.414-.586l14.586-14.586v5.172c0 1.104.896 2 2 2s2-.896 2-2v-10c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2s.896 2 2 2h5.172l-14.586 14.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586z"/></svg>`,
  name: 'shrink'
};

/***/ }),

/***/ 22426:
/*!**************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/step-backward.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asStepBackwardIcon: () => (/* binding */ asStepBackwardIcon)
/* harmony export */ });
const asStepBackwardIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13 2.5-8 4.619v-4.119h-2v10h2v-4.119l8 4.619z"/></svg>`,
  name: 'step-backward'
};

/***/ }),

/***/ 26309:
/*!*************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/step-forward.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asStepForwardIcon: () => (/* binding */ asStepForwardIcon)
/* harmony export */ });
const asStepForwardIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"/></svg>`,
  name: 'step-forward'
};

/***/ }),

/***/ 78940:
/*!******************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/times.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asTimesIcon: () => (/* binding */ asTimesIcon)
/* harmony export */ });
const asTimesIcon = {
  data: `<svg viewBox="0 0 24 24"><path d="M12 10.586L6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586z" fill="currentColor"/></svg>`,
  name: 'times'
};

/***/ }),

/***/ 45173:
/*!********************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/twitter.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asTwitterIcon: () => (/* binding */ asTwitterIcon)
/* harmony export */ });
const asTwitterIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>`,
  name: 'twitter'
};

/***/ }),

/***/ 29503:
/*!************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/volume-high.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asVolumeHighIcon: () => (/* binding */ asVolumeHighIcon)
/* harmony export */ });
const asVolumeHighIcon = {
  data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"/></svg>`,
  name: 'volume-high'
};

/***/ }),

/***/ 6916:
/*!**************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/volume-medium.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asVolumeMediumIcon: () => (/* binding */ asVolumeMediumIcon)
/* harmony export */ });
const asVolumeMediumIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"/></svg>`,
  name: 'volume-medium'
};

/***/ }),

/***/ 24446:
/*!************************************************************!*\
  !*** ./libs/web/shared/ui/icon/src/lib/svg/volume-mute.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asVolumeMuteIcon: () => (/* binding */ asVolumeMuteIcon)
/* harmony export */ });
const asVolumeMuteIcon = {
  data: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"/></svg>`,
  name: 'volume-mute'
};

/***/ }),

/***/ 76874:
/*!*****************************************************!*\
  !*** ./libs/web/shared/ui/media-cover/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaCoverModule: () => (/* reexport safe */ _lib_media_cover_module__WEBPACK_IMPORTED_MODULE_0__.MediaCoverModule)
/* harmony export */ });
/* harmony import */ var _lib_media_cover_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/media-cover.module */ 78944);


/***/ }),

/***/ 21341:
/*!*************************************************************************!*\
  !*** ./libs/web/shared/ui/media-cover/src/lib/media-cover.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaCoverComponent: () => (/* binding */ MediaCoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class MediaCoverComponent {
  set imageUrl(url) {
    this.backgroundUrl = url && `url(${url})`;
  }
  set roundedImage(isRounded) {
    this.borderRadius = isRounded ? '50%' : 'initial';
  }
  static #_ = this.ɵfac = function MediaCoverComponent_Factory(t) {
    return new (t || MediaCoverComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MediaCoverComponent,
    selectors: [["as-media-cover"]],
    hostVars: 4,
    hostBindings: function MediaCoverComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.backgroundUrl)("border-radius", ctx.borderRadius);
      }
    },
    inputs: {
      imageUrl: "imageUrl",
      roundedImage: "roundedImage"
    },
    decls: 0,
    vars: 0,
    template: function MediaCoverComponent_Template(rf, ctx) {},
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  padding-bottom: 100%;\n  position: relative;\n  background-color: #333;\n  background-position: center;\n  background-size: cover;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWNvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQUNGIiwiZmlsZSI6Im1lZGlhLWNvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYigwIDAgMCAvIDUwJSk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9tZWRpYS1jb3Zlci9zcmMvbGliL21lZGlhLWNvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQUNGO0FBQ0EsZ25CQUFnbkIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiKDAgMCAwIC8gNTAlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 78944:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/ui/media-cover/src/lib/media-cover.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaCoverModule: () => (/* binding */ MediaCoverModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _media_cover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-cover.component */ 21341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class MediaCoverModule {
  static #_ = this.ɵfac = function MediaCoverModule_Factory(t) {
    return new (t || MediaCoverModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MediaCoverModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MediaCoverModule, {
    declarations: [_media_cover_component__WEBPACK_IMPORTED_MODULE_0__.MediaCoverComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_media_cover_component__WEBPACK_IMPORTED_MODULE_0__.MediaCoverComponent]
  });
})();

/***/ }),

/***/ 79225:
/*!*****************************************************!*\
  !*** ./libs/web/shared/ui/play-button/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButtonModule: () => (/* reexport safe */ _lib_play_button_module__WEBPACK_IMPORTED_MODULE_0__.PlayButtonModule)
/* harmony export */ });
/* harmony import */ var _lib_play_button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/play-button.module */ 16528);


/***/ }),

/***/ 9261:
/*!*************************************************************************!*\
  !*** ./libs/web/shared/ui/play-button/src/lib/play-button.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButtonComponent: () => (/* binding */ PlayButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);




function PlayButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r0.svgSize);
  }
}
class PlayButtonComponent {
  constructor() {
    this.primary = false;
    this.large = false;
    this.flatIcon = false;
    this.isShowVolumeIcon = false;
    this.togglePlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get buttonClass() {
    if (this.flatIcon) {
      return ['flex'];
    }
    const baseClass = 'flex play-button control-button';
    const sizeClass = this.large ? 'large' : '';
    return [baseClass, sizeClass, this.primary ? 'text-white bg-primary' : 'text-black bg-white'];
  }
  get svgSize() {
    return this.large ? 'lg' : 'md';
  }
  static #_ = this.ɵfac = function PlayButtonComponent_Factory(t) {
    return new (t || PlayButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PlayButtonComponent,
    selectors: [["as-play-button"]],
    hostVars: 2,
    hostBindings: function PlayButtonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-show-volume", ctx.isShowVolumeIcon);
      }
    },
    inputs: {
      isPlaying: "isPlaying",
      primary: "primary",
      large: "large",
      flatIcon: "flatIcon",
      isShowVolumeIcon: "isShowVolumeIcon"
    },
    outputs: {
      togglePlay: "togglePlay"
    },
    decls: 3,
    vars: 5,
    consts: [["aria-roledescription", "button", 3, "click", "title", "ngClass"], [1, "play-icon", 3, "key", "size"], ["key", "volume-high", 1, "volume-icon", 3, "size"]],
    template: function PlayButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayButtonComponent_Template_button_click_0_listener() {
          return ctx.togglePlay.emit(ctx.isPlaying);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayButtonComponent_Conditional_2_Template, 1, 1, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isPlaying ? "Pause" : "Play")("ngClass", ctx.buttonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx.isPlaying ? "pause" : "play")("size", ctx.svgSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.isShowVolumeIcon ? 2 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconComponent],
    styles: [".is-show-volume[_nghost-%COMP%]   .volume-icon[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n}\n.is-show-volume[_nghost-%COMP%]   .play-icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n[_nghost-%COMP%]:hover.is-show-volume   .volume-icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n[_nghost-%COMP%]:hover.is-show-volume   .play-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n}\n\n.play-button[_ngcontent-%COMP%] {\n  transition: all 33ms cubic-bezier(0.3, 0, 0.7, 1);\n  border: none;\n  border-radius: 50%;\n}\n.play-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.play-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXktYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFETjtBQUlJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFGTjtBQU9JO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFMTjtBQVFJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFOTjs7QUFXQTtFQUNFLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUkY7QUFVRTtFQUNFLHNCQUFBO0FBUko7QUFXRTtFQUNFLHNCQUFBO0FBVEoiLCJmaWxlIjoicGxheS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICYuaXMtc2hvdy12b2x1bWUge1xuICAgIC52b2x1bWUtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLnBsYXktaWNvbiB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyLmlzLXNob3ctdm9sdW1lIHtcbiAgICAudm9sdW1lLWljb24ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBsYXktaWNvbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi5wbGF5LWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAzM21zIGN1YmljLWJlemllcigwLjMsIDAsIDAuNywgMSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9wbGF5LWJ1dHRvbi9zcmMvbGliL3BsYXktYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFETjtBQUlJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFGTjtBQU9JO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFMTjtBQVFJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFOTjs7QUFXQTtFQUNFLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUkY7QUFVRTtFQUNFLHNCQUFBO0FBUko7QUFXRTtFQUNFLHNCQUFBO0FBVEo7QUFDQSx3dUNBQXd1QyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgJi5pcy1zaG93LXZvbHVtZSB7XG4gICAgLnZvbHVtZS1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAucGxheS1pY29uIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIuaXMtc2hvdy12b2x1bWUge1xuICAgIC52b2x1bWUtaWNvbiB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucGxheS1pY29uIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLnBsYXktYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDMzbXMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC43LCAxKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 16528:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/ui/play-button/src/lib/play-button.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButtonModule: () => (/* binding */ PlayButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _play_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-button.component */ 9261);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);





class PlayButtonModule {
  static #_ = this.ɵfac = function PlayButtonModule_Factory(t) {
    return new (t || PlayButtonModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PlayButtonModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlayButtonModule, {
    declarations: [_play_button_component__WEBPACK_IMPORTED_MODULE_0__.PlayButtonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_4__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_4__.PushPipe],
    exports: [_play_button_component__WEBPACK_IMPORTED_MODULE_0__.PlayButtonComponent]
  });
})();

/***/ }),

/***/ 13925:
/*!*************************************************!*\
  !*** ./libs/web/shared/ui/spinner/src/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerModule: () => (/* reexport safe */ _lib_spinner_module__WEBPACK_IMPORTED_MODULE_0__.SpinnerModule)
/* harmony export */ });
/* harmony import */ var _lib_spinner_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/spinner.module */ 27192);


/***/ }),

/***/ 96101:
/*!*****************************************************************!*\
  !*** ./libs/web/shared/ui/spinner/src/lib/spinner.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);


class SpinnerComponent {
  constructor() {
    this.size = "xl";
  }
  static #_ = this.ɵfac = function SpinnerComponent_Factory(t) {
    return new (t || SpinnerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpinnerComponent,
    selectors: [["as-spinner"]],
    inputs: {
      size: "size"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "grid", "py-3", "place-items-center"], ["key", "audio-animated", 3, "size"]],
    template: function SpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.size);
      }
    },
    dependencies: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9zcGlubmVyL3NyYy9saWIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLG9TQUFvUyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 27192:
/*!**************************************************************!*\
  !*** ./libs/web/shared/ui/spinner/src/lib/spinner.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerModule: () => (/* binding */ SpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 96101);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class SpinnerModule {
  static #_ = this.ɵfac = function SpinnerModule_Factory(t) {
    return new (t || SpinnerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SpinnerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpinnerModule, {
    declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent],
    exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent]
  });
})();

/***/ }),

/***/ 70112:
/*!************************************************************!*\
  !*** ./libs/web/shared/ui/track-current-info/src/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackCurrentInfoModule: () => (/* reexport safe */ _lib_track_current_info_module__WEBPACK_IMPORTED_MODULE_0__.TrackCurrentInfoModule)
/* harmony export */ });
/* harmony import */ var _lib_track_current_info_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/track-current-info.module */ 35444);


/***/ }),

/***/ 22353:
/*!***************************************************************************************!*\
  !*** ./libs/web/shared/ui/track-current-info/src/lib/track-current-info.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackCurrentInfoComponent: () => (/* binding */ TrackCurrentInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../media-cover/src/lib/media-cover.component */ 21341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);




function TrackCurrentInfoComponent_Conditional_0_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TrackCurrentInfoComponent_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrackCurrentInfoComponent_Conditional_0_For_8_Conditional_0_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const artist_r1 = ctx.$implicit;
    const idx_r2 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, idx_r2 !== 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", artist_r1.artistUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", artist_r1.name, " ");
  }
}
function TrackCurrentInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "as-media-cover", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](7, TrackCurrentInfoComponent_Conditional_0_For_8_Template, 3, 3, "a", 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r2.track.playlistUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageUrl", ctx_r2.track.album.images[0] == null ? null : ctx_r2.track.album.images[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r2.track.albumUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.track.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 4, ctx_r2.track.artists, 0, 2));
  }
}
class TrackCurrentInfoComponent {
  static #_ = this.ɵfac = function TrackCurrentInfoComponent_Factory(t) {
    return new (t || TrackCurrentInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TrackCurrentInfoComponent,
    selectors: [["as-track-current-info"]],
    inputs: {
      track: "track"
    },
    decls: 1,
    vars: 1,
    consts: [[1, "cursor-pointer", "track-cover", 3, "routerLink"], [3, "imageUrl"], [1, "flex", "flex-col"], [1, "ellipsis-one-line"], [1, "text-white", "hover:underline", 3, "routerLink"], [1, "flex"], [1, "text-description", "link-subtle", "ellipsis-one-line", "hover:underline", 3, "routerLink"], [1, "mr-1"]],
    template: function TrackCurrentInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrackCurrentInfoComponent_Conditional_0_Template, 10, 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.track ? 0 : -1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_0__.MediaCoverComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.track-cover[_ngcontent-%COMP%] {\n  width: 40px;\n  display: flex;\n  flex-shrink: 0;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-right: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLWN1cnJlbnQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsYUFBd0I7RUFBeEI7QUFBd0I7O0FBRzFCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixrQkFBVztBQUNiIiwiZmlsZSI6InRyYWNrLWN1cnJlbnQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XG59XG5cbi50cmFjay1jb3ZlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIEBhcHBseSBtci00O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS90cmFjay1jdXJyZW50LWluZm8vc3JjL2xpYi90cmFjay1jdXJyZW50LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGFBQXdCO0VBQXhCLG1CQUFBO0FBQXdCOztBQUcxQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsa0JBQVc7QUFDYjs7QUFJQSxvbEJBQW9sQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyO1xufVxuXG4udHJhY2stY292ZXIge1xuICB3aWR0aDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAYXBwbHkgbXItNDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 35444:
/*!************************************************************************************!*\
  !*** ./libs/web/shared/ui/track-current-info/src/lib/track-current-info.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackCurrentInfoModule: () => (/* binding */ TrackCurrentInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _track_current_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-current-info.component */ 22353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-cover */ 76874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class TrackCurrentInfoModule {
  static #_ = this.ɵfac = function TrackCurrentInfoModule_Factory(t) {
    return new (t || TrackCurrentInfoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TrackCurrentInfoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__.MediaCoverModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrackCurrentInfoModule, {
    declarations: [_track_current_info_component__WEBPACK_IMPORTED_MODULE_0__.TrackCurrentInfoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__.MediaCoverModule],
    exports: [_track_current_info_component__WEBPACK_IMPORTED_MODULE_0__.TrackCurrentInfoComponent]
  });
})();

/***/ }),

/***/ 56940:
/*!********************************************!*\
  !*** ./libs/web/shared/utils/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteUtil: () => (/* reexport safe */ _lib_route_util__WEBPACK_IMPORTED_MODULE_1__.RouteUtil),
/* harmony export */   RouterUtil: () => (/* reexport safe */ _lib_router_util__WEBPACK_IMPORTED_MODULE_0__.RouterUtil),
/* harmony export */   SelectorUtil: () => (/* reexport safe */ _lib_selector_util__WEBPACK_IMPORTED_MODULE_4__.SelectorUtil),
/* harmony export */   StringUtil: () => (/* reexport safe */ _lib_string_util__WEBPACK_IMPORTED_MODULE_3__.StringUtil),
/* harmony export */   TimeUtil: () => (/* reexport safe */ _lib_time_util__WEBPACK_IMPORTED_MODULE_2__.TimeUtil),
/* harmony export */   redirectAlbumDetailGuard: () => (/* reexport safe */ _lib_guards__WEBPACK_IMPORTED_MODULE_5__.redirectAlbumDetailGuard)
/* harmony export */ });
/* harmony import */ var _lib_router_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/router-util */ 34476);
/* harmony import */ var _lib_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/route-util */ 56178);
/* harmony import */ var _lib_time_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/time-util */ 70328);
/* harmony import */ var _lib_string_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/string-util */ 83260);
/* harmony import */ var _lib_selector_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/selector-util */ 28768);
/* harmony import */ var _lib_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/guards */ 97144);







/***/ }),

/***/ 97144:
/*!*************************************************!*\
  !*** ./libs/web/shared/utils/src/lib/guards.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redirectAlbumDetailGuard: () => (/* binding */ redirectAlbumDetailGuard)
/* harmony export */ });
/* harmony import */ var _router_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-util */ 34476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



function redirectAlbumDetailGuard(next) {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const albumId = next.paramMap.get(_router_util__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.AlbumId);
  router.navigate([_router_util__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Albums, albumId]);
  return true;
}

/***/ }),

/***/ 56178:
/*!*****************************************************!*\
  !*** ./libs/web/shared/utils/src/lib/route-util.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteUtil: () => (/* binding */ RouteUtil)
/* harmony export */ });
/* harmony import */ var _router_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-util */ 34476);

class RouteUtil {
  static getAlbumRouteUrl(albumId) {
    return `/${_router_util__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Albums}/${albumId}`;
  }
  static getArtistRouteUrl(artistId) {
    return `/${_router_util__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Artist}/${artistId}`;
  }
  static getPlaylistRouteUrl(playlistId) {
    return `/${_router_util__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Playlist}/${playlistId}`;
  }
  static getPlaylistContextUri(playlistId) {
    return `spotify:playlist:${playlistId}`;
  }
}

/***/ }),

/***/ 34476:
/*!******************************************************!*\
  !*** ./libs/web/shared/utils/src/lib/router-util.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterUtil: () => (/* binding */ RouterUtil)
/* harmony export */ });
class RouterUtil {
  static #_ = this.Configuration = {
    Playlist: 'playlist',
    PlaylistId: 'playlistId',
    Albums: 'albums',
    AlbumId: 'albumId',
    Artist: 'artist',
    ArtistId: 'artistId',
    Visualizer: 'visualizer',
    Browse: 'browse',
    CategoryId: 'categoryId',
    SearchQueryParam: 'q'
  };
}

/***/ }),

/***/ 28768:
/*!********************************************************!*\
  !*** ./libs/web/shared/utils/src/lib/selector-util.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorUtil: () => (/* binding */ SelectorUtil)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var _route_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-util */ 56178);


class SelectorUtil {
  static getMediaPlayingState(obs$) {
    return obs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(([uri, playback]) => {
      const hasContextUri = !!playback.context?.uri;
      const hasTrackPlaying = !!playback.track_window.current_track;
      if (hasContextUri) {
        const isCurrentPlaylistInContext = uri === playback.context?.uri;
        if (isCurrentPlaylistInContext) {
          return !playback.paused;
        }
      } else if (hasTrackPlaying) {
        const isCurrentTrackPlaying = uri === playback.track_window.current_track.uri;
        if (isCurrentTrackPlaying) {
          return !playback.paused;
        }
      }
      return false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(false));
  }
  static getTrackPlayingState(obs$) {
    return obs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(([trackId, playback]) => {
      const track = playback?.track_window?.current_track;
      if (!trackId || !track) {
        return false;
      }
      if (trackId !== track.id) {
        return false;
      }
      return !playback.paused;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(false));
  }
  static isLoading({
    status
  }) {
    return status === 'loading';
  }
  static isDone({
    status
  }) {
    return status === 'success' || status === 'error';
  }
  static getPlaylistsWithRoute(playlists) {
    if (playlists) {
      return {
        ...playlists,
        items: playlists.items.map(item => ({
          ...item,
          routeUrl: _route_util__WEBPACK_IMPORTED_MODULE_0__.RouteUtil.getPlaylistRouteUrl(item.id)
        }))
      };
    }
    return playlists;
  }
}

/***/ }),

/***/ 83260:
/*!******************************************************!*\
  !*** ./libs/web/shared/utils/src/lib/string-util.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringUtil: () => (/* binding */ StringUtil)
/* harmony export */ });
class StringUtil {
  static getIdFromUri(uri) {
    const ids = uri.split(':');
    return ids[ids.length - 1];
  }
}

/***/ }),

/***/ 70328:
/*!****************************************************!*\
  !*** ./libs/web/shared/utils/src/lib/time-util.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeUtil: () => (/* binding */ TimeUtil)
/* harmony export */ });
class TimeUtil {
  static pad(num, length = 2) {
    return `${num}`.padStart(length, '0');
  }
  static formatDuration(durationInMs) {
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = Math.floor(durationInMs % 60000 / 1000);
    if (seconds === 60) {
      return `${minutes + 1}:00`;
    }
    return `${minutes}:${this.pad(seconds)}`;
  }
}

/***/ }),

/***/ 35860:
/*!*********************************************!*\
  !*** ./libs/web/shell/feature/src/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebShellModule: () => (/* reexport safe */ _lib_web_shell_module__WEBPACK_IMPORTED_MODULE_0__.WebShellModule)
/* harmony export */ });
/* harmony import */ var _lib_web_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-shell.module */ 58211);


/***/ }),

/***/ 28171:
/*!*****************************************************************!*\
  !*** ./libs/web/shell/feature/src/lib/build-specifics/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extModules: () => (/* binding */ extModules)
/* harmony export */ });
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store-devtools */ 11925);

const extModules = [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__.StoreDevtoolsModule.instrument({
  maxAge: 25,
  connectInZone: true
})];

/***/ }),

/***/ 58211:
/*!************************************************************!*\
  !*** ./libs/web/shell/feature/src/lib/web-shell.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebShellModule: () => (/* binding */ WebShellModule)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_settings_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/settings/feature */ 1527);
/* harmony import */ var _angular_spotify_web_shared_app_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/app-init */ 3649);
/* harmony import */ var _angular_spotify_web_shared_ui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/icon */ 25383);
/* harmony import */ var _angular_spotify_web_shell_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/layout */ 81167);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sentry/angular */ 75027);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 91774);
/* harmony import */ var _web_shell_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-shell.routes */ 8077);
/* harmony import */ var _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/playlist/data-access */ 33675);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ 39032);
/* harmony import */ var _build_specifics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./build-specifics */ 28171);
/* harmony import */ var _angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-spotify/shared/view-transition */ 69733);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ 11925);













/** config angular i18n **/









(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__["default"]);
const rootReducers = {
  [_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__.playlistsFeatureKey]: _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__.playlistsReducer,
  [_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__.playlistTrackFeatureKey]: _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__.playlistTracksReducer
};
class WebShellModule {
  static #_ = this.ɵfac = function WebShellModule_Factory(t) {
    return new (t || WebShellModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: WebShellModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__.NZ_I18N,
      useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__.en_US
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ErrorHandler,
      useValue: _sentry_angular__WEBPACK_IMPORTED_MODULE_12__.createErrorHandler({
        showDialog: true
      })
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.APP_INITIALIZER,
      useFactory: store => () => {
        store.dispatch((0,_angular_spotify_web_shared_app_init__WEBPACK_IMPORTED_MODULE_1__.AppInit)());
      },
      multi: true,
      deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store]
    }, (0,_angular_router__WEBPACK_IMPORTED_MODULE_14__.provideRouter)(_web_shell_routes__WEBPACK_IMPORTED_MODULE_4__.webShellRoutes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_14__.withViewTransitions)({
      onViewTransitionCreated: _angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_7__.onViewTransitionCreated
    }))],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_spotify_web_shell_ui_layout__WEBPACK_IMPORTED_MODULE_3__.WebLayoutModule, _angular_spotify_web_shared_ui_icon__WEBPACK_IMPORTED_MODULE_2__.IconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.NoopAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forRoot(rootReducers), _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsModule.forRoot([_angular_spotify_web_shared_app_init__WEBPACK_IMPORTED_MODULE_1__.ApplicationEffects, _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__.PlaylistsEffect, _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_5__.PlaylistTracksEffect]), _angular_spotify_web_settings_feature__WEBPACK_IMPORTED_MODULE_0__.SettingsModule, _build_specifics__WEBPACK_IMPORTED_MODULE_6__.extModules, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WebShellModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_spotify_web_shell_ui_layout__WEBPACK_IMPORTED_MODULE_3__.WebLayoutModule, _angular_spotify_web_shared_ui_icon__WEBPACK_IMPORTED_MODULE_2__.IconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.NoopAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsRootModule, _angular_spotify_web_settings_feature__WEBPACK_IMPORTED_MODULE_0__.SettingsModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__.StoreDevtoolsModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 8077:
/*!************************************************************!*\
  !*** ./libs/web/shell/feature/src/lib/web-shell.routes.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   webShellRoutes: () => (/* binding */ webShellRoutes)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_spotify_web_shell_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/layout */ 81167);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);



const webShellRoutes = [{
  path: '',
  component: _angular_spotify_web_shell_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  children: [{
    path: '',
    loadChildren: function () {
      var _ref = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("libs_web_home_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/home/feature */ 14237))).HomeModule;
      });
      return function loadChildren() {
        return _ref.apply(this, arguments);
      };
    }()
  }, {
    path: 'browse',
    loadChildren: function () {
      var _ref2 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield __webpack_require__.e(/*! import() */ "libs_web_browse_feature_shell_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/browse/feature/shell */ 50925))).BrowseShellModule;
      });
      return function loadChildren() {
        return _ref2.apply(this, arguments);
      };
    }()
  }, {
    path: 'search',
    loadChildren: function () {
      var _ref3 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_search_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/search/feature */ 79482))).SearchModule;
      });
      return function loadChildren() {
        return _ref3.apply(this, arguments);
      };
    }()
  }, {
    path: 'collection/playlists',
    loadChildren: function () {
      var _ref4 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_playlist_feature_list_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/playlist/feature/list */ 86751))).PlaylistsModule;
      });
      return function loadChildren() {
        return _ref4.apply(this, arguments);
      };
    }()
  }, {
    path: 'collection/tracks',
    loadChildren: function () {
      var _ref5 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd"), __webpack_require__.e("default-libs_web_shared_ui_media-summary_src_index_ts-libs_web_shared_ui_tracks-loading_src_i-d0e7a5"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_tracks_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/tracks/feature */ 84730))).TracksModule;
      });
      return function loadChildren() {
        return _ref5.apply(this, arguments);
      };
    }()
  }, {
    path: `playlist`,
    loadChildren: function () {
      var _ref6 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd"), __webpack_require__.e("default-libs_web_shared_ui_media-summary_src_index_ts-libs_web_shared_ui_tracks-loading_src_i-d0e7a5"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_playlist_feature_detail_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/playlist/feature/detail */ 20850))).PlaylistModule;
      });
      return function loadChildren() {
        return _ref6.apply(this, arguments);
      };
    }()
  }, {
    path: `albums`,
    loadChildren: function () {
      var _ref7 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield __webpack_require__.e(/*! import() */ "libs_web_album_feature_shell_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/album/feature/shell */ 2232))).AlbumShellModule;
      });
      return function loadChildren() {
        return _ref7.apply(this, arguments);
      };
    }()
  }, {
    path: `artist`,
    loadChildren: function () {
      var _ref8 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd"), __webpack_require__.e("default-libs_web_shared_ui_media-summary_src_index_ts-libs_web_shared_ui_tracks-loading_src_i-d0e7a5"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_artist_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/artist/feature */ 44734))).ArtistModule;
      });
      return function loadChildren() {
        return _ref8.apply(this, arguments);
      };
    }()
  }, {
    path: 'container-queries',
    loadChildren: function () {
      var _ref9 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("libs_web_container-queries_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/container-queries */ 12705))).containerQueriesRoutes;
      });
      return function loadChildren() {
        return _ref9.apply(this, arguments);
      };
    }()
  }, {
    path: 'future-responsive',
    loadChildren: function () {
      var _ref10 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield __webpack_require__.e(/*! import() */ "libs_web_future-responsive_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/future-responsive */ 19827))).futureResponsiveRoutes;
      });
      return function loadChildren() {
        return _ref10.apply(this, arguments);
      };
    }()
  }, {
    path: _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.Configuration.Visualizer,
    loadChildren: function () {
      var _ref11 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (yield __webpack_require__.e(/*! import() */ "libs_web_visualizer_feature_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/visualizer/feature */ 86818))).VisualizerModule;
      });
      return function loadChildren() {
        return _ref11.apply(this, arguments);
      };
    }()
  }, {
    path: 'collection',
    redirectTo: 'collection/playlists',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: 'collection',
  pathMatch: 'full'
}];

/***/ }),

/***/ 29471:
/*!**********************************************************!*\
  !*** ./libs/web/shell/ui/album-art-overlay/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumArtOverlayModule: () => (/* reexport safe */ _lib_album_art_overlay_module__WEBPACK_IMPORTED_MODULE_0__.AlbumArtOverlayModule)
/* harmony export */ });
/* harmony import */ var _lib_album_art_overlay_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/album-art-overlay.module */ 31611);


/***/ }),

/***/ 52300:
/*!************************************************************************************!*\
  !*** ./libs/web/shell/ui/album-art-overlay/src/lib/album-art-overlay.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumArtOverlayComponent: () => (/* binding */ AlbumArtOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


const _c0 = ["canvas"];
class AlbumArtOverlayComponent {
  set imageUrl(url) {
    this.zone.runOutsideAngular(() => {
      if (!this.context) {
        this.initCanvas();
      }
      this.drawImageToCanvas(url);
    });
  }
  constructor(zone) {
    this.zone = zone;
  }
  drawImageToCanvas(imageUrl) {
    const imageObj = new Image();
    imageObj.src = imageUrl;
    imageObj.onload = () => {
      if (this.context) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(imageObj, 0, 0);
      }
    };
  }
  initCanvas() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.filter = 'blur(15px)';
    this.context.globalAlpha = 0.07;
  }
  static #_ = this.ɵfac = function AlbumArtOverlayComponent_Factory(t) {
    return new (t || AlbumArtOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AlbumArtOverlayComponent,
    selectors: [["as-album-art-overlay"]],
    viewQuery: function AlbumArtOverlayComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      imageUrl: "imageUrl"
    },
    decls: 2,
    vars: 0,
    consts: [["canvas", ""], ["id", "bg-overlay"]],
    template: function AlbumArtOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 1, 0);
      }
    },
    styles: ["#bg-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10000;\n  overflow: hidden;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLWFydC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6ImFsYnVtLWFydC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL2FsYnVtLWFydC1vdmVybGF5L3NyYy9saWIvYWxidW0tYXJ0LW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDQSw0a0JBQTRrQiIsInNvdXJjZXNDb250ZW50IjpbIiNiZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 31611:
/*!*********************************************************************************!*\
  !*** ./libs/web/shell/ui/album-art-overlay/src/lib/album-art-overlay.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumArtOverlayModule: () => (/* binding */ AlbumArtOverlayModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _album_art_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-art-overlay.component */ 52300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class AlbumArtOverlayModule {
  static #_ = this.ɵfac = function AlbumArtOverlayModule_Factory(t) {
    return new (t || AlbumArtOverlayModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AlbumArtOverlayModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlbumArtOverlayModule, {
    declarations: [_album_art_overlay_component__WEBPACK_IMPORTED_MODULE_0__.AlbumArtOverlayComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_album_art_overlay_component__WEBPACK_IMPORTED_MODULE_0__.AlbumArtOverlayComponent]
  });
})();

/***/ }),

/***/ 81167:
/*!***********************************************!*\
  !*** ./libs/web/shell/ui/layout/src/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* reexport safe */ _lib_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent),
/* harmony export */   WebLayoutModule: () => (/* reexport safe */ _lib_web_layout_module__WEBPACK_IMPORTED_MODULE_0__.WebLayoutModule)
/* harmony export */ });
/* harmony import */ var _lib_web_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-layout.module */ 88404);
/* harmony import */ var _lib_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/layout.component */ 48836);



/***/ }),

/***/ 48836:
/*!**************************************************************!*\
  !*** ./libs/web/shell/ui/layout/src/lib/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/playlist/data-access */ 33675);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/visualizer/data-access */ 21685);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _nav_bar_src_lib_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../nav-bar/src/lib/nav-bar.component */ 7696);
/* harmony import */ var _top_bar_src_lib_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../top-bar/src/lib/top-bar.component */ 34264);
/* harmony import */ var _main_view_src_lib_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main-view/src/lib/main-view.component */ 29852);
/* harmony import */ var _now_playing_bar_src_lib_now_playing_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../now-playing-bar/src/lib/now-playing-bar.component */ 54580);
/* harmony import */ var _album_art_overlay_src_lib_album_art_overlay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../album-art-overlay/src/lib/album-art-overlay.component */ 52300);
/* harmony import */ var _visualizer_ui_src_lib_web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../visualizer/ui/src/lib/web-visualizer-ui.component */ 32795);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
















function LayoutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "as-album-art-overlay", 0);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("imageUrl", ctx);
  }
}
function LayoutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "as-web-visualizer-ui", 1);
  }
}
class LayoutComponent {
  constructor(playbackStore, store, visualizerStore) {
    this.playbackStore = playbackStore;
    this.store = store;
    this.visualizerStore = visualizerStore;
    this.showPiPVisualizer$ = this.visualizerStore.showPiPVisualizer$;
    this.currentAlbumCoverUrl$ = this.playbackStore.currentTrack$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(track => track?.album?.images[0]?.url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(imageUrl => !!imageUrl));
  }
  ngOnInit() {
    this.store.dispatch((0,_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.loadPlaylists)());
  }
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_2__.VisualizerStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["as-layout"]],
    decls: 8,
    vars: 6,
    consts: [[3, "imageUrl"], ["id", "pip-visualizer"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "as-nav-bar")(1, "as-top-bar")(2, "as-main-view")(3, "as-now-playing-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LayoutComponent_Conditional_4_Template, 1, 1, "as-album-art-overlay", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LayoutComponent_Conditional_6_Template, 1, 0, "as-web-visualizer-ui", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](4, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 2, ctx.currentAlbumCoverUrl$)) ? 4 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 4, ctx.showPiPVisualizer$) ? 6 : -1);
      }
    },
    dependencies: [_nav_bar_src_lib_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavBarComponent, _top_bar_src_lib_top_bar_component__WEBPACK_IMPORTED_MODULE_4__.TopBarComponent, _main_view_src_lib_main_view_component__WEBPACK_IMPORTED_MODULE_5__.MainViewComponent, _now_playing_bar_src_lib_now_playing_bar_component__WEBPACK_IMPORTED_MODULE_6__.NowPlayingBarComponent, _album_art_overlay_src_lib_album_art_overlay_component__WEBPACK_IMPORTED_MODULE_7__.AlbumArtOverlayComponent, _visualizer_ui_src_lib_web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_8__.WebVisualizerUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: grid;\n  gap: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.5rem;\n  grid-template-rows: 1fr auto;\n  grid-template-columns: auto 1fr;\n  grid-template-areas: \"nav-bar         main-view      \" \"now-playing-bar now-playing-bar\";\n}\n\n#pip-visualizer[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 95px;\n  z-index: 10;\n  height: 225px;\n  width: 400px;\n  overflow: hidden;\n  border-radius: 4px;\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFBQSxXQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdGQUNFO0FBQUo7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkVBQUE7RUFBQSxpR0FBQTtFQUFBLHVHQUFBO0FBREYiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBhcHBseSBncmlkIGdhcC0yIHB0LTIgcHgtMjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnbmF2LWJhciAgICAgICAgIG1haW4tdmlldyAgICAgICdcbiAgICAnbm93LXBsYXlpbmctYmFyIG5vdy1wbGF5aW5nLWJhcic7XG59XG5cbiNwaXAtdmlzdWFsaXplciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogOTVweDtcbiAgei1pbmRleDogMTA7XG4gIGhlaWdodDogMjI1cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBAYXBwbHkgc2hhZG93LW1kO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL2xheW91dC9zcmMvbGliL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFBQSxXQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdGQUNFO0FBQUo7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkVBQUE7RUFBQSxpR0FBQTtFQUFBLHVHQUFBO0FBREY7QUFPQSxvc0NBQW9zQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAYXBwbHkgZ3JpZCBnYXAtMiBwdC0yIHB4LTI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ25hdi1iYXIgICAgICAgICBtYWluLXZpZXcgICAgICAnXG4gICAgJ25vdy1wbGF5aW5nLWJhciBub3ctcGxheWluZy1iYXInO1xufVxuXG4jcGlwLXZpc3VhbGl6ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDk1cHg7XG4gIHotaW5kZXg6IDEwO1xuICBoZWlnaHQ6IDIyNXB4O1xuICB3aWR0aDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgQGFwcGx5IHNoYWRvdy1tZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 88404:
/*!***************************************************************!*\
  !*** ./libs/web/shell/ui/layout/src/lib/web-layout.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebLayoutModule: () => (/* binding */ WebLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 48836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shell_ui_nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/nav-bar */ 64776);
/* harmony import */ var _angular_spotify_web_shell_ui_top_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/top-bar */ 86010);
/* harmony import */ var _angular_spotify_web_shell_ui_main_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/main-view */ 53240);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_spotify_web_shell_ui_now_playing_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/now-playing-bar */ 50394);
/* harmony import */ var _angular_spotify_web_auth_ui_unauthorized_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/auth/ui/unauthorized-modal */ 74567);
/* harmony import */ var _angular_spotify_web_shell_ui_album_art_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/album-art-overlay */ 29471);
/* harmony import */ var _angular_spotify_web_visualizer_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-spotify/web/visualizer/ui */ 61760);
/* harmony import */ var _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-spotify/web/shared/directives/data-size-observer */ 78845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);













class WebLayoutModule {
  static #_ = this.ɵfac = function WebLayoutModule_Factory(t) {
    return new (t || WebLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: WebLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_spotify_web_shell_ui_nav_bar__WEBPACK_IMPORTED_MODULE_1__.NavBarModule, _angular_spotify_web_shell_ui_top_bar__WEBPACK_IMPORTED_MODULE_2__.TopBarModule, _angular_spotify_web_shell_ui_main_view__WEBPACK_IMPORTED_MODULE_3__.MainViewModule, _angular_spotify_web_shell_ui_now_playing_bar__WEBPACK_IMPORTED_MODULE_4__.NowPlayingBarModule, _angular_spotify_web_auth_ui_unauthorized_modal__WEBPACK_IMPORTED_MODULE_5__.UnauthorizedModalModule, _angular_spotify_web_shell_ui_album_art_overlay__WEBPACK_IMPORTED_MODULE_6__.AlbumArtOverlayModule, _angular_spotify_web_visualizer_ui__WEBPACK_IMPORTED_MODULE_7__.WebVisualizerUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](WebLayoutModule, {
    declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_spotify_web_shell_ui_nav_bar__WEBPACK_IMPORTED_MODULE_1__.NavBarModule, _angular_spotify_web_shell_ui_top_bar__WEBPACK_IMPORTED_MODULE_2__.TopBarModule, _angular_spotify_web_shell_ui_main_view__WEBPACK_IMPORTED_MODULE_3__.MainViewModule, _angular_spotify_web_shell_ui_now_playing_bar__WEBPACK_IMPORTED_MODULE_4__.NowPlayingBarModule, _angular_spotify_web_auth_ui_unauthorized_modal__WEBPACK_IMPORTED_MODULE_5__.UnauthorizedModalModule, _angular_spotify_web_shell_ui_album_art_overlay__WEBPACK_IMPORTED_MODULE_6__.AlbumArtOverlayModule, _angular_spotify_web_visualizer_ui__WEBPACK_IMPORTED_MODULE_7__.WebVisualizerUiModule, _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_8__.DataSizeObserverDirective],
    exports: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent]
  });
})();

/***/ }),

/***/ 53240:
/*!**************************************************!*\
  !*** ./libs/web/shell/ui/main-view/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainViewModule: () => (/* reexport safe */ _lib_main_view_module__WEBPACK_IMPORTED_MODULE_0__.MainViewModule)
/* harmony export */ });
/* harmony import */ var _lib_main_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/main-view.module */ 77323);


/***/ }),

/***/ 29852:
/*!********************************************************************!*\
  !*** ./libs/web/shell/ui/main-view/src/lib/main-view.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainViewComponent: () => (/* binding */ MainViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class MainViewComponent {
  static #_ = this.ɵfac = function MainViewComponent_Factory(t) {
    return new (t || MainViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainViewComponent,
    selectors: [["as-main-view"]],
    decls: 3,
    vars: 0,
    consts: [[1, "sticky-top-scroll"], [1, "main-view"]],
    template: function MainViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n  grid-area: main-view;\n  width: 100%;\n  transition: background 1s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--background-baseline) / var(--tw-bg-opacity));\n}\n\n.sticky-top-scroll[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  height: 60px;\n}\n\n.main-view[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUFBLHNCQUFBO0VBQUEsY0FBQTtFQUFBLHFCQUFBO0VBQUEsa0JBQUE7RUFBQSx3RUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQUEsWUFBQTtFQUFBLHNCQUFBO0VBQUEsY0FBQTtBQUNGIiwiZmlsZSI6Im1haW4tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZ3JpZC1hcmVhOiBtYWluLXZpZXc7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGVhc2U7XG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWF1dG8gYmctYmFzZWxpbmUgcm91bmRlZC1sZztcbn1cblxuLnN0aWNreS10b3Atc2Nyb2xsIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBAYXBwbHkgaC10b3BCYXI7XG59XG5cbi5tYWluLXZpZXcge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgQGFwcGx5IGZsZXggZmxleC1jb2wgZmxleC0xIG92ZXJmbG93LWF1dG87XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL21haW4tdmlldy9zcmMvbGliL21haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUFBLHNCQUFBO0VBQUEsY0FBQTtFQUFBLHFCQUFBO0VBQUEsa0JBQUE7RUFBQSx3RUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQUEsWUFBQTtFQUFBLHNCQUFBO0VBQUEsY0FBQTtBQUNGO0FBU0EsNDZCQUE0NkIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGdyaWQtYXJlYTogbWFpbi12aWV3O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBlYXNlO1xuICBAYXBwbHkgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1hdXRvIGJnLWJhc2VsaW5lIHJvdW5kZWQtbGc7XG59XG5cbi5zdGlja3ktdG9wLXNjcm9sbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgQGFwcGx5IGgtdG9wQmFyO1xufVxuXG4ubWFpbi12aWV3IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIGZsZXgtMSBvdmVyZmxvdy1hdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 77323:
/*!*****************************************************************!*\
  !*** ./libs/web/shell/ui/main-view/src/lib/main-view.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainViewModule: () => (/* binding */ MainViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _main_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-view.component */ 29852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class MainViewModule {
  static #_ = this.ɵfac = function MainViewModule_Factory(t) {
    return new (t || MainViewModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MainViewModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainViewModule, {
    declarations: [_main_view_component__WEBPACK_IMPORTED_MODULE_0__.MainViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_main_view_component__WEBPACK_IMPORTED_MODULE_0__.MainViewComponent]
  });
})();

/***/ }),

/***/ 64776:
/*!************************************************!*\
  !*** ./libs/web/shell/ui/nav-bar/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarModule: () => (/* reexport safe */ _lib_nav_bar_module__WEBPACK_IMPORTED_MODULE_0__.NavBarModule)
/* harmony export */ });
/* harmony import */ var _lib_nav_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/nav-bar.module */ 67199);


/***/ }),

/***/ 7696:
/*!****************************************************************!*\
  !*** ./libs/web/shell/ui/nav-bar/src/lib/nav-bar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nav_links_src_lib_nav_links_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../nav-links/src/lib/nav-links.component */ 92136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);







const _c0 = a0 => ({
  exact: a0
});
function NavBarComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "a", 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "svg-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r1.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, item_r1.exact));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", "lg")("key", link_r2.isActive && item_r1.iconSelected ? item_r1.iconSelected : item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
  }
}
function NavBarComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 8)(1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Angular Spotify");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class NavBarComponent {
  constructor(uiStore) {
    this.uiStore = uiStore;
    this.navItems$ = this.uiStore.navItems$;
  }
  static #_ = this.ɵfac = function NavBarComponent_Factory(t) {
    return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.UIStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavBarComponent,
    selectors: [["as-nav-bar"]],
    decls: 9,
    vars: 3,
    consts: [["logoTmpl", ""], ["link", "routerLinkActive"], ["routerLink", "/", 1, "flex", "px-6", "py-0", "mb-4", "text-white"], [3, "ngTemplateOutlet"], [1, "m-0"], [1, "nav-link-container"], ["routerLinkActive", "active", 1, "flex", "gap-4", "items-center", "px-6", "nav-link", "link-subtle", "transition-all", 3, "routerLink", "routerLinkActiveOptions"], ["title", "duration", 1, "transition-all", 3, "size", "key"], ["viewBox", "0 0 1134 340", 1, "h-10"], ["fill", "currentColor", "d", "M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"]],
    template: function NavBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](3, NavBarComponent_For_4_Template, 5, 7, "li", 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "as-nav-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavBarComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const logoTmpl_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", logoTmpl_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx.navItems$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _nav_links_src_lib_nav_links_component__WEBPACK_IMPORTED_MODULE_1__.NavLinksComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  grid-area: nav-bar;\n  z-index: 3;\n  min-height: 0;\n  resize: horizontal;\n  overflow-x: auto;\n  min-width: 200px;\n  display: flex;\n  width: 280px;\n  flex-direction: column;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--background-baseline) / var(--tw-bg-opacity));\n  padding-top: 1rem;\n}\n\n.nav-link-container[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 40px;\n}\n.nav-link-container[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxzQkFBQTtFQUFBLHFCQUFBO0VBQUEsa0JBQUE7RUFBQSx3RUFBQTtFQUFBLGlCQUFBO0FBQUY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFESjtBQUlNO0VBQUEsa0JBQUE7RUFBQSx5RUFBQTtFQUFBLG9CQUFBO0VBQUEseURBQUE7RUFDQTtBQURBIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGdyaWQtYXJlYTogbmF2LWJhcjtcbiAgei1pbmRleDogMztcbiAgbWluLWhlaWdodDogMDtcbiAgcmVzaXplOiBob3Jpem9udGFsO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuXG4gIEBhcHBseSB3LW5hdkJhciBmbGV4IGZsZXgtY29sIHB0LTQgYmctYmFzZWxpbmUgcm91bmRlZC1sZztcbn1cblxuLm5hdi1saW5rLWNvbnRhaW5lciB7XG4gIC5uYXYtbGluayB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIEBhcHBseSB0ZXh0LXdoaXRlIGJnLWhpZ2hsaWdodDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL25hdi1iYXIvc3JjL2xpYi9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFBQSxZQUFBO0VBQUEsc0JBQUE7RUFBQSxxQkFBQTtFQUFBLGtCQUFBO0VBQUEsd0VBQUE7RUFBQSxpQkFBQTtBQUFGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBREo7QUFJTTtFQUFBLGtCQUFBO0VBQUEseUVBQUE7RUFBQSxvQkFBQTtFQUFBLHlEQUFBO0VBQ0EsZ0JBQUE7QUFEQTtBQVVOLHdoQ0FBd2hDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBncmlkLWFyZWE6IG5hdi1iYXI7XG4gIHotaW5kZXg6IDM7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHJlc2l6ZTogaG9yaXpvbnRhbDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWluLXdpZHRoOiAyMDBweDtcblxuICBAYXBwbHkgdy1uYXZCYXIgZmxleCBmbGV4LWNvbCBwdC00IGJnLWJhc2VsaW5lIHJvdW5kZWQtbGc7XG59XG5cbi5uYXYtbGluay1jb250YWluZXIge1xuICAubmF2LWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBAYXBwbHkgdGV4dC13aGl0ZSBiZy1oaWdobGlnaHQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 67199:
/*!*************************************************************!*\
  !*** ./libs/web/shell/ui/nav-bar/src/lib/nav-bar.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarModule: () => (/* binding */ NavBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.component */ 7696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shell_ui_nav_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/nav-links */ 92032);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);






class NavBarModule {
  static #_ = this.ɵfac = function NavBarModule_Factory(t) {
    return new (t || NavBarModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NavBarModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shell_ui_nav_links__WEBPACK_IMPORTED_MODULE_1__.NavLinksModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NavBarModule, {
    declarations: [_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shell_ui_nav_links__WEBPACK_IMPORTED_MODULE_1__.NavLinksModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent],
    exports: [_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent]
  });
})();

/***/ }),

/***/ 92032:
/*!**************************************************!*\
  !*** ./libs/web/shell/ui/nav-links/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLinksModule: () => (/* reexport safe */ _lib_nav_links_module__WEBPACK_IMPORTED_MODULE_0__.NavLinksModule)
/* harmony export */ });
/* harmony import */ var _lib_nav_links_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/nav-links.module */ 32167);


/***/ }),

/***/ 86476:
/*!****************************************************************************!*\
  !*** ./libs/web/shell/ui/nav-links/src/lib/nav-link/nav-link.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLinkComponent: () => (/* binding */ NavLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/ui/play-button/src/lib/play-button.component */ 9261);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _shared_ui_media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/ui/media-cover/src/lib/media-cover.component */ 21341);












const _c0 = a0 => ({
  "nav-link link-subtle": true,
  "!text-primary": a0
});
const _c1 = a0 => ({
  "ellipsis-one-line": true,
  "pr-6": a0
});
function NavLinkComponent_a_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "as-play-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("togglePlay", function NavLinkComponent_a_0_Conditional_4_Template_as_play_button_togglePlay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.togglePlaylist($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isPlaying_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("flatIcon", true)("isShowVolumeIcon", true)("isPlaying", isPlaying_r3);
  }
}
function NavLinkComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "as-media-cover", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NavLinkComponent_a_0_Conditional_4_Template, 1, 3, "as-play-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isPlaying_r3 = ctx.ngrxLet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.playlistWithRoute.routeUrl)("title", ctx_r1.playlistWithRoute.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, isPlaying_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imageUrl", ctx_r1.playlistWithRoute.images[0] == null ? null : ctx_r1.playlistWithRoute.images[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, isPlaying_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.playlistWithRoute.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](4, isPlaying_r3 ? 4 : -1);
  }
}
class NavLinkComponent {
  set playlist(value) {
    this.playlistWithRoute = {
      ...value,
      routeUrl: _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouteUtil.getPlaylistRouteUrl(value.id)
    };
  }
  constructor(playbackStore, playerApi) {
    this.playbackStore = playbackStore;
    this.playerApi = playerApi;
  }
  ngOnInit() {
    this.isPlaylistPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.SelectorUtil.getMediaPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.playlistWithRoute?.uri), this.playbackStore.playback$]));
  }
  togglePlaylist(isPlaying) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: this.playlistWithRoute?.uri
    }).subscribe(); //TODO: Refactor with component store live stream
  }
  static #_ = this.ɵfac = function NavLinkComponent_Factory(t) {
    return new (t || NavLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NavLinkComponent,
    selectors: [["as-nav-link"]],
    inputs: {
      playlist: "playlist"
    },
    decls: 1,
    vars: 1,
    consts: [["routerLinkActive", "active", 3, "routerLink", "title", "ngClass", 4, "ngrxLet"], ["routerLinkActive", "active", 3, "routerLink", "title", "ngClass"], [3, "imageUrl"], [1, "absolute", "right-2", 3, "flatIcon", "isShowVolumeIcon", "isPlaying"], [1, "absolute", "right-2", 3, "togglePlay", "flatIcon", "isShowVolumeIcon", "isPlaying"]],
    template: function NavLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NavLinkComponent_a_0_Template, 5, 12, "a", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx.isPlaylistPlaying$);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_3__.PlayButtonComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_10__.LetDirective, _shared_ui_media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_4__.MediaCoverComponent],
    styles: [".nav-link[_ngcontent-%COMP%] {\n    position: relative;\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    align-items: center;\n    gap: 1rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity))\n}\n.nav-link.active[_ngcontent-%COMP%] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgb(var(--text-baseline) / var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0lBQUEsa0JBQUE7SUFBQSxhQUFBO0lBQUEsK0JBQUE7SUFBQSxtQkFBQTtJQUFBLFNBQUE7SUFBQSxvQkFBQTtJQUFBLHFCQUFBO0lBQUEsbUJBQUE7SUFBQSxzQkFBQTtJQUFBLHdCQUFBO0lBQUEsd0RBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQSxrQkFBQTtJQUFBO0FBQUE7QUFHRTtJQUFBLGtCQUFBO0lBQUEseUVBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUEiLCJmaWxlIjoibmF2LWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICBAYXBwbHkgcmVsYXRpdmUgcHgtNiBweS0yIGdyaWQgZ3JpZC1jb2xzLVs0MHB4XzFmcl0gZ2FwLTQgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWhpZ2hsaWdodCB0cmFuc2l0aW9uLWFsbDtcblxuICAmLmFjdGl2ZSB7XG4gICAgQGFwcGx5IHRleHQtd2hpdGUgYmctaGlnaGxpZ2h0O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL25hdi1saW5rcy9zcmMvbGliL25hdi1saW5rL25hdi1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0lBQUEsa0JBQUE7SUFBQSxhQUFBO0lBQUEsK0JBQUE7SUFBQSxtQkFBQTtJQUFBLFNBQUE7SUFBQSxvQkFBQTtJQUFBLHFCQUFBO0lBQUEsbUJBQUE7SUFBQSxzQkFBQTtJQUFBLHdCQUFBO0lBQUEsd0RBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQSxrQkFBQTtJQUFBO0FBQUE7QUFHRTtJQUFBLGtCQUFBO0lBQUEseUVBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFvQkosNHVCQUE0dUIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICBAYXBwbHkgcmVsYXRpdmUgcHgtNiBweS0yIGdyaWQgZ3JpZC1jb2xzLVs0MHB4XzFmcl0gZ2FwLTQgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWhpZ2hsaWdodCB0cmFuc2l0aW9uLWFsbDtcblxuICAmLmFjdGl2ZSB7XG4gICAgQGFwcGx5IHRleHQtd2hpdGUgYmctaGlnaGxpZ2h0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 92136:
/*!********************************************************************!*\
  !*** ./libs/web/shell/ui/nav-links/src/lib/nav-links.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLinksComponent: () => (/* binding */ NavLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/playlist/data-access */ 33675);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/ui/spinner/src/lib/spinner.component */ 96101);
/* harmony import */ var _nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-link/nav-link.component */ 86476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function NavLinksComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "as-nav-link", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("playlist", playlist_r1);
  }
}
function NavLinksComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, NavLinksComponent_Conditional_1_For_2_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.items);
  }
}
function NavLinksComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "as-spinner", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", "lg");
  }
}
class NavLinksComponent {
  constructor(store) {
    this.store = store;
    this.playlists$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.getPlaylists));
    this.isPlaylistsLoading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsLoading));
  }
  static #_ = this.ɵfac = function NavLinksComponent_Factory(t) {
    return new (t || NavLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NavLinksComponent,
    selectors: [["as-nav-links"]],
    decls: 5,
    vars: 6,
    consts: [[1, "mx-6", "bg-highlight", "border-none", "h-[1px]", "min-h-[1px]"], [1, "pt-2", "pb-1", "px-0", "overflow-auto"], [3, "size"], [3, "playlist"]],
    template: function NavLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavLinksComponent_Conditional_1_Template, 3, 0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NavLinksComponent_Conditional_3_Template, 1, 1, "as-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.playlists$)) ? 1 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.isPlaylistsLoading$) ? 3 : -1);
      }
    },
    dependencies: [_shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_2__.NavLinkComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n    display: flex;\n    min-height: 0px;\n    flex-direction: column;\n    padding-top: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtJQUFBLGFBQUE7SUFBQSxlQUFBO0lBQUEsc0JBQUE7SUFBQTtBQUFBIiwiZmlsZSI6Im5hdi1saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGFwcGx5IHB0LTQgZmxleCBmbGV4LWNvbCBtaW4taC0wO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL25hdi1saW5rcy9zcmMvbGliL25hdi1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtJQUFBLGFBQUE7SUFBQSxlQUFBO0lBQUEsc0JBQUE7SUFBQTtBQUFBO0FBS0Ysb1dBQW9XIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgcHQtNCBmbGV4IGZsZXgtY29sIG1pbi1oLTA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 32167:
/*!*****************************************************************!*\
  !*** ./libs/web/shell/ui/nav-links/src/lib/nav-links.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLinksModule: () => (/* binding */ NavLinksModule)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-cover */ 76874);
/* harmony import */ var _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/play-button */ 79225);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _nav_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-links.component */ 92136);
/* harmony import */ var _nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-link/nav-link.component */ 86476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);









class NavLinksModule {
  static #_ = this.ɵfac = function NavLinksModule_Factory(t) {
    return new (t || NavLinksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: NavLinksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__.PlayButtonModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_0__.MediaCoverModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NavLinksModule, {
    declarations: [_nav_links_component__WEBPACK_IMPORTED_MODULE_3__.NavLinksComponent, _nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_4__.NavLinkComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__.PlayButtonModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_8__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_8__.PushPipe, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_0__.MediaCoverModule],
    exports: [_nav_links_component__WEBPACK_IMPORTED_MODULE_3__.NavLinksComponent]
  });
})();

/***/ }),

/***/ 50394:
/*!********************************************************!*\
  !*** ./libs/web/shell/ui/now-playing-bar/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NowPlayingBarModule: () => (/* reexport safe */ _lib_now_playing_bar_module__WEBPACK_IMPORTED_MODULE_0__.NowPlayingBarModule)
/* harmony export */ });
/* harmony import */ var _lib_now_playing_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/now-playing-bar.module */ 67219);


/***/ }),

/***/ 54580:
/*!********************************************************************************!*\
  !*** ./libs/web/shell/ui/now-playing-bar/src/lib/now-playing-bar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NowPlayingBarComponent: () => (/* binding */ NowPlayingBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _player_controls_src_lib_player_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../player-controls/src/lib/player-controls.component */ 24812);
/* harmony import */ var _player_playback_src_lib_player_playback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../player-playback/src/lib/player-playback.component */ 79564);
/* harmony import */ var _shared_ui_track_current_info_src_lib_track_current_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/track-current-info/src/lib/track-current-info.component */ 22353);
/* harmony import */ var _player_volume_src_lib_player_volume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../player-volume/src/lib/player-volume.component */ 7540);
/* harmony import */ var _visualization_toggle_src_lib_visualization_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../visualization-toggle/src/lib/visualization-toggle.component */ 70262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);









function NowPlayingBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "as-track-current-info", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("track", ctx);
  }
}
class NowPlayingBarComponent {
  constructor(playbackStore) {
    this.playbackStore = playbackStore;
    this.currentTrack$ = this.playbackStore.currentTrack$;
  }
  static #_ = this.ɵfac = function NowPlayingBarComponent_Factory(t) {
    return new (t || NowPlayingBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NowPlayingBarComponent,
    selectors: [["as-now-playing-bar"]],
    decls: 10,
    vars: 3,
    consts: [[1, "now-playing-bar-container"], [1, "now-playing-bar-left"], [3, "track"], [1, "now-playing-bar-center"], [1, "flex", "gap-4", "items-center", "justify-end"]],
    template: function NowPlayingBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NowPlayingBarComponent_Conditional_2_Template, 1, 1, "as-track-current-info", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "as-player-controls")(6, "as-player-playback");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "as-visualization-toggle")(9, "as-player-volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](2, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx.currentTrack$)) ? 2 : -1, tmp_0_0);
      }
    },
    dependencies: [_player_controls_src_lib_player_controls_component__WEBPACK_IMPORTED_MODULE_1__.PlayerControlsComponent, _player_playback_src_lib_player_playback_component__WEBPACK_IMPORTED_MODULE_2__.PlayerPlaybackComponent, _shared_ui_track_current_info_src_lib_track_current_info_component__WEBPACK_IMPORTED_MODULE_3__.TrackCurrentInfoComponent, _player_volume_src_lib_player_volume_component__WEBPACK_IMPORTED_MODULE_4__.PlayerVolumeComponent, _visualization_toggle_src_lib_visualization_toggle_component__WEBPACK_IMPORTED_MODULE_5__.VisualizationToggleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  grid-area: now-playing-bar;\n  width: 100%;\n  z-index: 4;\n}\n\n.now-playing-bar-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(180px, 3fr) minmax(200px, 4fr) minmax(240px, 3fr);\n  height: 72px;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdy1wbGF5aW5nLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwrRUFBQTtFQUNBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7QUFDRiIsImZpbGUiOiJub3ctcGxheWluZy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGdyaWQtYXJlYTogbm93LXBsYXlpbmctYmFyO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNDtcbn1cblxuLm5vdy1wbGF5aW5nLWJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxODBweCwgM2ZyKSBtaW5tYXgoMjAwcHgsIDRmcikgbWlubWF4KDI0MHB4LCAzZnIpO1xuICBAYXBwbHkgcHgtNCBpdGVtcy1jZW50ZXIgaC1ub3dQbGF5aW5nQmFyO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL25vdy1wbGF5aW5nLWJhci9zcmMvbGliL25vdy1wbGF5aW5nLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwrRUFBQTtFQUNBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7QUFDRjtBQUlBLG91QkFBb3VCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBncmlkLWFyZWE6IG5vdy1wbGF5aW5nLWJhcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5ub3ctcGxheWluZy1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTgwcHgsIDNmcikgbWlubWF4KDIwMHB4LCA0ZnIpIG1pbm1heCgyNDBweCwgM2ZyKTtcbiAgQGFwcGx5IHB4LTQgaXRlbXMtY2VudGVyIGgtbm93UGxheWluZ0Jhcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 67219:
/*!*****************************************************************************!*\
  !*** ./libs/web/shell/ui/now-playing-bar/src/lib/now-playing-bar.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NowPlayingBarModule: () => (/* binding */ NowPlayingBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _now_playing_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now-playing-bar.component */ 54580);
/* harmony import */ var _angular_spotify_web_shell_ui_player_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/player-controls */ 78759);
/* harmony import */ var _angular_spotify_web_shared_ui_track_current_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/track-current-info */ 70112);
/* harmony import */ var _angular_spotify_web_shell_ui_player_playback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/player-playback */ 92364);
/* harmony import */ var _angular_spotify_web_shell_ui_player_volume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/player-volume */ 21511);
/* harmony import */ var _angular_spotify_web_shell_ui_visualization_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/visualization-toggle */ 31310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);








class NowPlayingBarModule {
  static #_ = this.ɵfac = function NowPlayingBarModule_Factory(t) {
    return new (t || NowPlayingBarModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: NowPlayingBarModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shell_ui_player_controls__WEBPACK_IMPORTED_MODULE_1__.PlayerControlsModule, _angular_spotify_web_shell_ui_player_playback__WEBPACK_IMPORTED_MODULE_3__.PlayerPlaybackModule, _angular_spotify_web_shared_ui_track_current_info__WEBPACK_IMPORTED_MODULE_2__.TrackCurrentInfoModule, _angular_spotify_web_shell_ui_player_volume__WEBPACK_IMPORTED_MODULE_4__.PlayerVolumeModule, _angular_spotify_web_shell_ui_visualization_toggle__WEBPACK_IMPORTED_MODULE_5__.VisualizationToggleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NowPlayingBarModule, {
    declarations: [_now_playing_bar_component__WEBPACK_IMPORTED_MODULE_0__.NowPlayingBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shell_ui_player_controls__WEBPACK_IMPORTED_MODULE_1__.PlayerControlsModule, _angular_spotify_web_shell_ui_player_playback__WEBPACK_IMPORTED_MODULE_3__.PlayerPlaybackModule, _angular_spotify_web_shared_ui_track_current_info__WEBPACK_IMPORTED_MODULE_2__.TrackCurrentInfoModule, _angular_spotify_web_shell_ui_player_volume__WEBPACK_IMPORTED_MODULE_4__.PlayerVolumeModule, _angular_spotify_web_shell_ui_visualization_toggle__WEBPACK_IMPORTED_MODULE_5__.VisualizationToggleModule],
    exports: [_now_playing_bar_component__WEBPACK_IMPORTED_MODULE_0__.NowPlayingBarComponent]
  });
})();

/***/ }),

/***/ 78759:
/*!********************************************************!*\
  !*** ./libs/web/shell/ui/player-controls/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerControlsModule: () => (/* reexport safe */ _lib_player_controls_module__WEBPACK_IMPORTED_MODULE_0__.PlayerControlsModule)
/* harmony export */ });
/* harmony import */ var _lib_player_controls_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/player-controls.module */ 78843);


/***/ }),

/***/ 24812:
/*!********************************************************************************!*\
  !*** ./libs/web/shell/ui/player-controls/src/lib/player-controls.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerControlsComponent: () => (/* binding */ PlayerControlsComponent)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/play-button/src/lib/play-button.component */ 9261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);








class PlayerControlsComponent {
  constructor(playbackStore, playbackService) {
    this.playbackStore = playbackStore;
    this.playbackService = playbackService;
    this.isPlaying$ = this.playbackStore.isPlaying$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(false));
  }
  togglePlay() {
    var _this = this;
    return (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.playbackService.play();
    })();
  }
  next() {
    var _this2 = this;
    return (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.playbackService.next();
    })();
  }
  prev() {
    var _this3 = this;
    return (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.playbackService.prev();
    })();
  }
  static #_ = this.ɵfac = function PlayerControlsComponent_Factory(t) {
    return new (t || PlayerControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PlayerControlsComponent,
    selectors: [["as-player-controls"]],
    decls: 7,
    vars: 3,
    consts: [[1, "flex", "justify-center"], [1, "control-button", "hover:text-white", 3, "click"], ["key", "step-backward"], [1, "mx-4", 3, "togglePlay", "isPlaying"], ["key", "step-forward"]],
    template: function PlayerControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PlayerControlsComponent_Template_div_click_1_listener() {
          return ctx.prev();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "as-play-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("togglePlay", function PlayerControlsComponent_Template_as_play_button_togglePlay_3_listener() {
          return ctx.togglePlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PlayerControlsComponent_Template_div_click_5_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaying", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx.isPlaying$));
      }
    },
    dependencies: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_2__.PlayButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJwbGF5ZXItY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3BsYXllci1jb250cm9scy9zcmMvbGliL3BsYXllci1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLHdUQUF3VCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 78843:
/*!*****************************************************************************!*\
  !*** ./libs/web/shell/ui/player-controls/src/lib/player-controls.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerControlsModule: () => (/* binding */ PlayerControlsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _player_controls_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-controls.component */ 24812);
/* harmony import */ var _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/play-button */ 79225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class PlayerControlsModule {
  static #_ = this.ɵfac = function PlayerControlsModule_Factory(t) {
    return new (t || PlayerControlsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PlayerControlsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__.PlayButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlayerControlsModule, {
    declarations: [_player_controls_component__WEBPACK_IMPORTED_MODULE_0__.PlayerControlsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__.PlayButtonModule],
    exports: [_player_controls_component__WEBPACK_IMPORTED_MODULE_0__.PlayerControlsComponent]
  });
})();

/***/ }),

/***/ 92364:
/*!********************************************************!*\
  !*** ./libs/web/shell/ui/player-playback/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerPlaybackModule: () => (/* reexport safe */ _lib_player_playback_module__WEBPACK_IMPORTED_MODULE_0__.PlayerPlaybackModule)
/* harmony export */ });
/* harmony import */ var _lib_player_playback_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/player-playback.module */ 10363);


/***/ }),

/***/ 79564:
/*!********************************************************************************!*\
  !*** ./libs/web/shell/ui/player-playback/src/lib/player-playback.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerPlaybackComponent: () => (/* binding */ PlayerPlaybackComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26320);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/slider */ 35509);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/pipes/duration-pipe/src/lib/duration.pipe */ 37914);









class PlayerPlaybackComponent {
  constructor(playbackStore, playbackService) {
    this.playbackStore = playbackStore;
    this.playbackService = playbackService;
    this.isSliderMoving$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.progress$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.playbackStore.playback$, this.isSliderMoving$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(20), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(([{
      paused,
      position
    }, isMoving]) => {
      if (paused || isMoving) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(position);
      }
      const progressTimer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(0, 1000);
      return progressTimer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x * 1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x + position));
    }));
    this.max$ = this.playbackStore.playback$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(({
      duration
    }) => duration));
  }
  seek(positions) {
    if (Array.isArray(positions)) {
      const lastPosition = positions[positions.length - 1];
      this.playbackService.seek(lastPosition);
    }
    if (typeof positions === 'number') {
      this.playbackService.seek(positions);
    }
    this.isSliderMoving$.next(false);
  }
  onChange() {
    this.isSliderMoving$.next(true);
  }
  static #_ = this.ɵfac = function PlayerPlaybackComponent_Factory(t) {
    return new (t || PlayerPlaybackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: PlayerPlaybackComponent,
    selectors: [["as-player-playback"]],
    decls: 11,
    vars: 17,
    consts: [[1, "timer-duration"], [1, "flex-1", "mx-2", 3, "nzOnAfterChange", "ngModelChange", "ngModel", "nzMax", "nzTooltipVisible"]],
    template: function PlayerPlaybackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzOnAfterChange", function PlayerPlaybackComponent_Template_nz_slider_nzOnAfterChange_4_listener($event) {
          return ctx.seek($event);
        })("ngModelChange", function PlayerPlaybackComponent_Template_nz_slider_ngModelChange_4_listener() {
          return ctx.onChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx.progress$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 9, ctx.progress$))("nzMax", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 11, ctx.max$))("nzTooltipVisible", "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 13, ctx.max$)), "\n");
      }
    },
    dependencies: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_10__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.DurationPipe],
    styles: ["[_nghost-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.timer-duration[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1wbGF5YmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEseURBQUE7RUFBQSxzQkFBQTtBQUNGIiwiZmlsZSI6InBsYXllci1wbGF5YmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC00O1xufVxuXG4udGltZXItZHVyYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgQGFwcGx5IHRleHQteHMgdGV4dC13aGl0ZSB0ZXh0LW9wYWNpdHktNjA7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3BsYXllci1wbGF5YmFjay9zcmMvbGliL3BsYXllci1wbGF5YmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSw4QkFBQTtBQUFBOztBQUdGO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEseURBQUE7RUFBQSxzQkFBQTtBQUNGO0FBUUEsNG1CQUE0bUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtNDtcbn1cblxuLnRpbWVyLWR1cmF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIEBhcHBseSB0ZXh0LXhzIHRleHQtd2hpdGUgdGV4dC1vcGFjaXR5LTYwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 10363:
/*!*****************************************************************************!*\
  !*** ./libs/web/shell/ui/player-playback/src/lib/player-playback.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerPlaybackModule: () => (/* binding */ PlayerPlaybackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _player_playback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-playback.component */ 79564);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/slider */ 35509);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/pipes/duration-pipe */ 65552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);






class PlayerPlaybackModule {
  static #_ = this.ɵfac = function PlayerPlaybackModule_Factory(t) {
    return new (t || PlayerPlaybackModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PlayerPlaybackModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_4__.NzSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.DurationPipeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlayerPlaybackModule, {
    declarations: [_player_playback_component__WEBPACK_IMPORTED_MODULE_0__.PlayerPlaybackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_4__.NzSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.DurationPipeModule],
    exports: [_player_playback_component__WEBPACK_IMPORTED_MODULE_0__.PlayerPlaybackComponent]
  });
})();

/***/ }),

/***/ 21511:
/*!******************************************************!*\
  !*** ./libs/web/shell/ui/player-volume/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerVolumeModule: () => (/* reexport safe */ _lib_player_volume_module__WEBPACK_IMPORTED_MODULE_0__.PlayerVolumeModule)
/* harmony export */ });
/* harmony import */ var _lib_player_volume_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/player-volume.module */ 75699);


/***/ }),

/***/ 7540:
/*!****************************************************************************!*\
  !*** ./libs/web/shell/ui/player-volume/src/lib/player-volume.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerVolumeComponent: () => (/* binding */ PlayerVolumeComponent)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_spotify_web_shared_data_access_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/models */ 14489);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 37143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/slider */ 35509);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);













function PlayerVolumeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayerVolumeComponent_Conditional_0_Template_svg_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleMute());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const volumeIcon_r3 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("key", volumeIcon_r3.icon)("title", volumeIcon_r3.title);
  }
}
let PlayerVolumeComponent = class PlayerVolumeComponent {
  constructor(playbackStore, playbackService) {
    this.playbackStore = playbackStore;
    this.playbackService = playbackService;
    this.volume$ = this.playbackStore.volume$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(volume => this._volume = volume));
    this.setVolume$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.volumeIcon$ = this.volume$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(volume => volume * 100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(volume => {
      if (volume >= 70) {
        return new _angular_spotify_web_shared_data_access_models__WEBPACK_IMPORTED_MODULE_1__.VolumeHighIcon(volume);
      }
      if (volume > 0) {
        return new _angular_spotify_web_shared_data_access_models__WEBPACK_IMPORTED_MODULE_1__.VolumeMediumIcon(volume);
      }
      return new _angular_spotify_web_shared_data_access_models__WEBPACK_IMPORTED_MODULE_1__.VolumeMuteIcon();
    }));
    this.setVolume$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(volume => this.playbackService.setVolume(volume)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe();
  }
  toggleMute() {
    if (this._volume > 0) {
      this._beforeMutedVolume = this._volume;
      this.setVolume$.next(0);
    } else {
      this.setVolume$.next(this._beforeMutedVolume);
    }
  }
  changeVolume(positions) {
    var _this = this;
    return (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof positions === 'number') {
        _this.setVolume$.next(positions);
      }
      if (Array.isArray(positions)) {
        _this.setVolume$.next(positions[positions.length - 1]);
      }
    })();
  }
  static #_ = this.ɵfac = function PlayerVolumeComponent_Factory(t) {
    return new (t || PlayerVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__.PlaybackService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PlayerVolumeComponent,
    selectors: [["as-player-volume"]],
    decls: 4,
    vars: 10,
    consts: [[1, "control-button", "hover:text-white", 3, "key", "title"], [1, "flex-1", "mx-2", "volume-slider", 3, "ngModelChange", "ngModel", "nzMin", "nzMax", "nzStep", "nzTooltipVisible"], [1, "control-button", "hover:text-white", 3, "click", "key", "title"]],
    template: function PlayerVolumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlayerVolumeComponent_Conditional_0_Template, 1, 2, "svg-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PlayerVolumeComponent_Template_nz_slider_ngModelChange_2_listener($event) {
          return ctx.changeVolume($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 6, ctx.volumeIcon$)) ? 0 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, ctx.volume$))("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("nzTooltipVisible", "never");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__.NzSliderComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.volume-slider[_ngcontent-%COMP%] {\n  max-width: 120px;\n  min-width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci12b2x1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxhQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJwbGF5ZXItdm9sdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XG59XG5cbi52b2x1bWUtc2xpZGVyIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3BsYXllci12b2x1bWUvc3JjL2xpYi9wbGF5ZXItdm9sdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsYUFBQTtFQUFBLG1CQUFBO0FBQUE7O0FBR0Y7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQSw0Y0FBNGMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcbn1cblxuLnZvbHVtZS1zbGlkZXIge1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
};
PlayerVolumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)(), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__.PlaybackStore, _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_2__.PlaybackService])], PlayerVolumeComponent);


/***/ }),

/***/ 75699:
/*!*************************************************************************!*\
  !*** ./libs/web/shell/ui/player-volume/src/lib/player-volume.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerVolumeModule: () => (/* binding */ PlayerVolumeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _player_volume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-volume.component */ 7540);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/slider */ 35509);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class PlayerVolumeModule {
  static #_ = this.ɵfac = function PlayerVolumeModule_Factory(t) {
    return new (t || PlayerVolumeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PlayerVolumeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_4__.NzSliderModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlayerVolumeModule, {
    declarations: [_player_volume_component__WEBPACK_IMPORTED_MODULE_0__.PlayerVolumeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_4__.NzSliderModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent],
    exports: [_player_volume_component__WEBPACK_IMPORTED_MODULE_0__.PlayerVolumeComponent]
  });
})();

/***/ }),

/***/ 62628:
/*!*****************************************************!*\
  !*** ./libs/web/shell/ui/social-share/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialShareModule: () => (/* reexport safe */ _lib_social_share_module__WEBPACK_IMPORTED_MODULE_0__.SocialShareModule)
/* harmony export */ });
/* harmony import */ var _lib_social_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/social-share.module */ 60373);


/***/ }),

/***/ 88498:
/*!**************************************************************************!*\
  !*** ./libs/web/shell/ui/social-share/src/lib/social-share.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialShareComponent: () => (/* binding */ SocialShareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class SocialShareComponent {
  static #_ = this.ɵfac = function SocialShareComponent_Factory(t) {
    return new (t || SocialShareComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SocialShareComponent,
    selectors: [["as-social-share"]],
    decls: 1,
    vars: 0,
    consts: [[1, "social-share-container"]],
    template: function SocialShareComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.social-share-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  container-type: inline-size;\n}\n\n.btn-with-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 0.5rem;\n}\n\n@container (max-width: 486px) {\n  .btn-with-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@container (max-width: 207px) {\n  .btn-with-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbn1cblxuLnNvY2lhbC1zaGFyZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XG59XG5cbi5idG4td2l0aC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGdhcDogMC41cmVtO1xufVxuXG5AY29udGFpbmVyIChtYXgtd2lkdGg6IDQ4NnB4KSB7XG4gIC5idG4td2l0aC1pY29uIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQGNvbnRhaW5lciAobWF4LXdpZHRoOiAyMDdweCkge1xuICAuYnRuLXdpdGgtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3NvY2lhbC1zaGFyZS9zcmMvbGliL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFBRjtBQUNGO0FBQ0EsZ2tDQUFna0MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5zb2NpYWwtc2hhcmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xufVxuXG4uYnRuLXdpdGgtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuQGNvbnRhaW5lciAobWF4LXdpZHRoOiA0ODZweCkge1xuICAuYnRuLXdpdGgtaWNvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBjb250YWluZXIgKG1heC13aWR0aDogMjA3cHgpIHtcbiAgLmJ0bi13aXRoLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 60373:
/*!***********************************************************************!*\
  !*** ./libs/web/shell/ui/social-share/src/lib/social-share.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialShareModule: () => (/* binding */ SocialShareModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _social_share_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-share.component */ 88498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 13774);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);





class SocialShareModule {
  static #_ = this.ɵfac = function SocialShareModule_Factory(t) {
    return new (t || SocialShareModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SocialShareModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocialShareModule, {
    declarations: [_social_share_component__WEBPACK_IMPORTED_MODULE_0__.SocialShareComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule],
    exports: [_social_share_component__WEBPACK_IMPORTED_MODULE_0__.SocialShareComponent]
  });
})();

/***/ }),

/***/ 86010:
/*!************************************************!*\
  !*** ./libs/web/shell/ui/top-bar/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopBarModule: () => (/* reexport safe */ _lib_top_bar_module__WEBPACK_IMPORTED_MODULE_0__.TopBarModule)
/* harmony export */ });
/* harmony import */ var _lib_top_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/top-bar.module */ 6455);


/***/ }),

/***/ 34264:
/*!****************************************************************!*\
  !*** ./libs/web/shell/ui/top-bar/src/lib/top-bar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopBarComponent: () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _user_dropdown_src_lib_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../user-dropdown/src/lib/user-dropdown.component */ 14884);
/* harmony import */ var _social_share_src_lib_social_share_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../social-share/src/lib/social-share.component */ 88498);





class TopBarComponent {
  constructor(location) {
    this.location = location;
  }
  back() {
    this.location.back();
  }
  forward() {
    this.location.forward();
  }
  static #_ = this.ɵfac = function TopBarComponent_Factory(t) {
    return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TopBarComponent,
    selectors: [["as-top-bar"]],
    decls: 9,
    vars: 0,
    consts: [[1, "flex", "gap-3"], ["title", "Go back", 1, "arrow-button", 3, "click"], ["role", "img", "focusable", "false", "height", "24", "width", "24", "viewBox", "0 0 24 24"], ["points", "16 4 7 12 16 20", "fill", "none", "stroke", "currentColor"], ["title", "Go forward", 1, "arrow-button", 3, "click"], ["points", "8 4 17 12 8 20", "fill", "none", "stroke", "currentColor"]],
    template: function TopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_1_listener() {
          return ctx.back();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "polyline", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_4_listener() {
          return ctx.forward();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "polyline", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "as-social-share")(8, "as-user-dropdown");
      }
    },
    dependencies: [_user_dropdown_src_lib_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.UserDropdownComponent, _social_share_src_lib_social_share_component__WEBPACK_IMPORTED_MODULE_1__.SocialShareComponent],
    styles: ["[_nghost-%COMP%] {\n  grid-area: main-view;\n  z-index: 1;\n  display: flex;\n  height: 60px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.arrow-button[_ngcontent-%COMP%] {\n  border: none;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.7;\n  color: rgb(var(--text-baseline) / 0.7);\n}\n\n.arrow-button[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n}\n\n.arrow-button[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsOEJBQUE7RUFBQSxTQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQVZLO0VBV0wsV0FYSztFQVlMLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEseUVBQUE7RUFBQSxvQkFBQTtFQUFBLHNDQUFBO0FBREY7O0FBQ0U7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBWEY7RUFZRSxvQkFBQTtBQUZGIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2l6ZTogMzJweDtcblxuOmhvc3Qge1xuICBncmlkLWFyZWE6IG1haW4tdmlldztcbiAgei1pbmRleDogMTtcbiAgQGFwcGx5IHB4LTggcHktNCBmbGV4IGdhcC00IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaC10b3BCYXI7XG59XG5cbi5hcnJvdy1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogJHNpemU7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIEBhcHBseSBiZy1oaWdobGlnaHQgYmctb3BhY2l0eS03MCBob3ZlcjpiZy1oaWdobGlnaHQgdGV4dC13aGl0ZS83MDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3RvcC1iYXIvc3JjL2xpYi90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLDhCQUFBO0VBQUEsU0FBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFWSztFQVdMLFdBWEs7RUFZTCxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHlFQUFBO0VBQUEsb0JBQUE7RUFBQSxzQ0FBQTtBQURGOztBQUNFO0VBQUEsa0JBQUE7RUFBQSx5RUFBQTtBQUFBOztBQVhGO0VBWUUsb0JBQUE7QUFGRjtBQW1CQSxndUNBQWd1QyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiAzMnB4O1xuXG46aG9zdCB7XG4gIGdyaWQtYXJlYTogbWFpbi12aWV3O1xuICB6LWluZGV4OiAxO1xuICBAYXBwbHkgcHgtOCBweS00IGZsZXggZ2FwLTQganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLXRvcEJhcjtcbn1cblxuLmFycm93LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAkc2l6ZTtcbiAgd2lkdGg6ICRzaXplO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQGFwcGx5IGJnLWhpZ2hsaWdodCBiZy1vcGFjaXR5LTcwIGhvdmVyOmJnLWhpZ2hsaWdodCB0ZXh0LXdoaXRlLzcwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6455:
/*!*************************************************************!*\
  !*** ./libs/web/shell/ui/top-bar/src/lib/top-bar.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopBarModule: () => (/* binding */ TopBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar.component */ 34264);
/* harmony import */ var _angular_spotify_web_shell_ui_user_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/user-dropdown */ 76882);
/* harmony import */ var _angular_spotify_web_shell_ui_social_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shell/ui/social-share */ 62628);
/* harmony import */ var _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/directives/data-size-observer */ 78845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class TopBarModule {
  static #_ = this.ɵfac = function TopBarModule_Factory(t) {
    return new (t || TopBarModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: TopBarModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_spotify_web_shell_ui_user_dropdown__WEBPACK_IMPORTED_MODULE_1__.UserDropdownModule, _angular_spotify_web_shell_ui_social_share__WEBPACK_IMPORTED_MODULE_2__.SocialShareModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TopBarModule, {
    declarations: [_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_spotify_web_shell_ui_user_dropdown__WEBPACK_IMPORTED_MODULE_1__.UserDropdownModule, _angular_spotify_web_shell_ui_social_share__WEBPACK_IMPORTED_MODULE_2__.SocialShareModule, _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_3__.DataSizeObserverDirective],
    exports: [_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent]
  });
})();

/***/ }),

/***/ 76882:
/*!******************************************************!*\
  !*** ./libs/web/shell/ui/user-dropdown/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDropdownModule: () => (/* reexport safe */ _lib_user_dropdown_module__WEBPACK_IMPORTED_MODULE_0__.UserDropdownModule)
/* harmony export */ });
/* harmony import */ var _lib_user_dropdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/user-dropdown.module */ 57731);


/***/ }),

/***/ 14884:
/*!****************************************************************************!*\
  !*** ./libs/web/shell/ui/user-dropdown/src/lib/user-dropdown.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDropdownComponent: () => (/* binding */ UserDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ 6911);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 29845);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);








function UserDropdownComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Upgrade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserDropdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserDropdownComponent_Conditional_1_Conditional_0_Template, 2, 0, "a", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx !== "premium" ? 0 : -1);
  }
}
class UserDropdownComponent {
  constructor(store) {
    this.store = store;
    this.userName$ = this.store.userName$;
    this.userAvatar$ = this.store.userAvatar$;
    this.userProduct$ = this.store.userProduct$;
  }
  static #_ = this.ɵfac = function UserDropdownComponent_Factory(t) {
    return new (t || UserDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserDropdownComponent,
    selectors: [["as-user-dropdown"]],
    decls: 27,
    vars: 15,
    consts: [["menu", "nzDropdownMenu"], [1, "user-info"], ["nz-dropdown", "", 1, "user-dropdown", 3, "nzDropdownMenu", "nzPlacement"], [1, "w-7", "h-7", 3, "title"], ["alt", "User Avatar", 1, "rounded-img", 3, "src"], [1, "w-16", "ml-2", "text-xs", "text-white", "truncate"], [1, "mr-2", 3, "key"], ["nz-menu", "", 1, "dropdown-container"], ["nz-menu-item", "", 1, "dropdown-item"], ["routerLink", "/future-responsive", 1, "text-description"], ["routerLink", "/container-queries", 1, "text-description"], ["href", "https://www.spotify.com/account/", "target", "_blank", 1, "text-description"], ["href", "https://www.spotify.com/account/apps/", "target", "_blank", 1, "text-description"], ["href", "https://www.spotify.com/us/premium/", "target", "_blank", "aria-roledescription", "upgrade-button", 1, "btn-upgrade"]],
    template: function UserDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDropdownComponent_Conditional_1_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "svg-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-dropdown-menu", null, 0)(14, "ul", 7)(15, "li", 8)(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F Hello London ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 8)(19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "WDC 2023 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 8)(22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 8)(25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Remove Access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, ctx.userProduct$)) ? 1 : -1, tmp_1_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", menu_r1)("nzPlacement", "bottomRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, ctx.userName$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 11, ctx.userAvatar$), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.userName$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("key", "caret-down-fill");
      }
    },
    dependencies: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzMenuItemDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__.NzDropdownMenuComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: [".user-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-dropdown[_ngcontent-%COMP%] {\n  border-radius: 23px;\n  display: flex;\n  height: 2rem;\n  min-width: 32px;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-width: 0px;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.7;\n  padding: 2px;\n  --tw-text-opacity: 1;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n}\n\n.user-dropdown[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 1;\n}\n.user-dropdown[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.rounded-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.dropdown-container[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.dropdown-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.dropdown-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--background-baseline) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.7;\n}\n.dropdown-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.8;\n}\n.dropdown-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.btn-upgrade[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.7019607843);\n  border-radius: 100vh;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  padding: 5px 32px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 33ms ease;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n}\n.btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUFBLFlBQUE7RUFBQSxlQUFBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxpQkFBQTtFQUFBLHlFQUFBO0VBQUEsb0JBQUE7RUFBQSxZQUFBO0VBQUEsb0JBQUE7RUFBQSx5REFBQTtBQUNGOztBQURFO0VBQUE7QUFBQTtBQUVBO0VBQ0UsU0FBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBSUU7RUFBQSxrQkFBQTtFQUFBLHlFQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBO0FBR0U7RUFBQTtBQUFBO0FBQUE7RUFBQSx3RUFBQTtFQUFBO0FBQUE7QUFHRTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEseURBQUE7RUFBQTtBQUFBO0FBR0Y7RUFDRSxxQkFBQTtBQUROOztBQU1BO0VBQ0UsbURBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUFBLG1EQUFBO0VBQUEsb0JBQUE7RUFBQSx5REFBQTtBQUhGO0FBS0U7RUFDRSxzQkFBQTtBQUhKIiwiZmlsZSI6InVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlci1kcm9wZG93biB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIEBhcHBseSBiZy1oaWdobGlnaHQgdGV4dC13aGl0ZSBiZy1vcGFjaXR5LTcwIGhvdmVyOmJnLW9wYWNpdHktMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCBtaW4tdy1bMzJweF0gY3Vyc29yLXBvaW50ZXIgcC1bMnB4XSBib3JkZXItMDtcblxuICBmaWd1cmUge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucm91bmRlZC1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZHJvcGRvd24tY29udGFpbmVyIHtcbiAgQGFwcGx5IGJnLWhpZ2hsaWdodCB0ZXh0LWxnO1xuXG4gIC5kcm9wZG93bi1pdGVtIHtcbiAgICBAYXBwbHkgcC0wIGhvdmVyOmJnLWJhc2VsaW5lIGhvdmVyOmJnLW9wYWNpdHktNzA7XG5cbiAgICBhIHtcbiAgICAgIEBhcHBseSBweS0zIHB4LTQgdGV4dC13aGl0ZSB0ZXh0LW9wYWNpdHktODA7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5idG4tdXBncmFkZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZiMztcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmc6IDVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMzbXMgY3ViaWMtYmV6aWVyKC4zLCAwLCAwLCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDMzbXMgZWFzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgQGFwcGx5IHRleHQtd2hpdGUgYmctYmxhY2s7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3VzZXItZHJvcGRvd24vc3JjL2xpYi91c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxZQUFBO0VBQUEsZUFBQTtFQUFBLGVBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsaUJBQUE7RUFBQSx5RUFBQTtFQUFBLG9CQUFBO0VBQUEsWUFBQTtFQUFBLG9CQUFBO0VBQUEseURBQUE7QUFDRjs7QUFERTtFQUFBLGtCQUFBO0FBQUE7QUFFQTtFQUNFLFNBQUE7QUFDSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlFO0VBQUEsa0JBQUE7RUFBQSx5RUFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUdFO0VBQUEsWUFBQTtBQUFBO0FBQUE7RUFBQSx3RUFBQTtFQUFBLG9CQUFBO0FBQUE7QUFHRTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEseURBQUE7RUFBQSxzQkFBQTtBQUFBO0FBR0Y7RUFDRSxxQkFBQTtBQUROOztBQU1BO0VBQ0UsbURBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUFBLG1EQUFBO0VBQUEsb0JBQUE7RUFBQSx5REFBQTtBQUhGO0FBS0U7RUFDRSxzQkFBQTtBQUhKO0FBOEJBLGdsRkFBZ2xGIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXItZHJvcGRvd24ge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBAYXBwbHkgYmctaGlnaGxpZ2h0IHRleHQtd2hpdGUgYmctb3BhY2l0eS03MCBob3ZlcjpiZy1vcGFjaXR5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTggbWluLXctWzMycHhdIGN1cnNvci1wb2ludGVyIHAtWzJweF0gYm9yZGVyLTA7XG5cbiAgZmlndXJlIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnJvdW5kZWQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gIEBhcHBseSBiZy1oaWdobGlnaHQgdGV4dC1sZztcblxuICAuZHJvcGRvd24taXRlbSB7XG4gICAgQGFwcGx5IHAtMCBob3ZlcjpiZy1iYXNlbGluZSBob3ZlcjpiZy1vcGFjaXR5LTcwO1xuXG4gICAgYSB7XG4gICAgICBAYXBwbHkgcHktMyBweC00IHRleHQtd2hpdGUgdGV4dC1vcGFjaXR5LTgwO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLXVwZ3JhZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYjM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nOiA1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzM21zIGN1YmljLWJlemllciguMywgMCwgMCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAzM21zIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIEBhcHBseSB0ZXh0LXdoaXRlIGJnLWJsYWNrO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 57731:
/*!*************************************************************************!*\
  !*** ./libs/web/shell/ui/user-dropdown/src/lib/user-dropdown.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDropdownModule: () => (/* binding */ UserDropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-dropdown.component */ 14884);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 29845);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class UserDropdownModule {
  static #_ = this.ɵfac = function UserDropdownModule_Factory(t) {
    return new (t || UserDropdownModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: UserDropdownModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__.NzDropDownModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserDropdownModule, {
    declarations: [_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.UserDropdownComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__.NzDropDownModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.UserDropdownComponent]
  });
})();

/***/ }),

/***/ 31310:
/*!*************************************************************!*\
  !*** ./libs/web/shell/ui/visualization-toggle/src/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizationToggleModule: () => (/* reexport safe */ _lib_visualization_toggle_module__WEBPACK_IMPORTED_MODULE_0__.VisualizationToggleModule)
/* harmony export */ });
/* harmony import */ var _lib_visualization_toggle_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/visualization-toggle.module */ 59321);


/***/ }),

/***/ 70262:
/*!******************************************************************************************!*\
  !*** ./libs/web/shell/ui/visualization-toggle/src/lib/visualization-toggle.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizationToggleComponent: () => (/* binding */ VisualizationToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/visualizer/data-access */ 21685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 44254);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 75579);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);











function VisualizationToggleComponent_div_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "svg-icon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("key", "audio-animated");
  }
}
function VisualizationToggleComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const isOn_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Turn ", isOn_r3 ? "off" : "on", " the cool visualizer! ");
  }
}
function VisualizationToggleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VisualizationToggleComponent_div_0_Conditional_1_Template, 1, 1, "svg-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-switch", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VisualizationToggleComponent_div_0_Template_nz_switch_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VisualizationToggleComponent_div_0_ng_template_4_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isOn_r3 = ctx.ngrxLet;
    const titleTmpl_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", titleTmpl_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, ctx_r1.isPlaying$) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", isOn_r3);
  }
}
class VisualizationToggleComponent {
  constructor(visualizerStore, playbackStore) {
    this.visualizerStore = visualizerStore;
    this.playbackStore = playbackStore;
    this.isVisualizationOn$ = this.visualizerStore.isVisible$;
    this.isPlaying$ = this.playbackStore.isPlaying$;
  }
  toggle(isVisible) {
    this.visualizerStore.setVisibility({
      isVisible
    });
  }
  static #_ = this.ɵfac = function VisualizationToggleComponent_Factory(t) {
    return new (t || VisualizationToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_1__.VisualizerStore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VisualizationToggleComponent,
    selectors: [["as-visualization-toggle"]],
    decls: 1,
    vars: 1,
    consts: [["titleTmpl", ""], ["nz-tooltip", "", "class", "flex items-center gap-2", 3, "nzTooltipTitle", 4, "ngrxLet"], ["nz-tooltip", "", 1, "flex", "items-center", "gap-2", 3, "nzTooltipTitle"], [1, "text-primary", 3, "key"], [3, "ngModelChange", "ngModel"]],
    template: function VisualizationToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VisualizationToggleComponent_div_0_Template, 6, 5, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx.isVisualizationOn$);
      }
    },
    dependencies: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__.NzTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ngrx_component__WEBPACK_IMPORTED_MODULE_6__.LetDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXN1YWxpemF0aW9uLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoZWxsL3VpL3Zpc3VhbGl6YXRpb24tdG9nZ2xlL3NyYy9saWIvdmlzdWFsaXphdGlvbi10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 59321:
/*!***************************************************************************************!*\
  !*** ./libs/web/shell/ui/visualization-toggle/src/lib/visualization-toggle.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizationToggleModule: () => (/* binding */ VisualizationToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 44254);
/* harmony import */ var _visualization_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualization-toggle.component */ 70262);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 75579);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








class VisualizationToggleModule {
  static #_ = this.ɵfac = function VisualizationToggleModule_Factory(t) {
    return new (t || VisualizationToggleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: VisualizationToggleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__.NzToolTipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisualizationToggleModule, {
    declarations: [_visualization_toggle_component__WEBPACK_IMPORTED_MODULE_0__.VisualizationToggleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__.NzToolTipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_7__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_7__.PushPipe, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent],
    exports: [_visualization_toggle_component__WEBPACK_IMPORTED_MODULE_0__.VisualizationToggleComponent]
  });
})();

/***/ }),

/***/ 21685:
/*!******************************************************!*\
  !*** ./libs/web/visualizer/data-access/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioAnalyser: () => (/* reexport safe */ _lib_audio_context__WEBPACK_IMPORTED_MODULE_0__.AudioAnalyser),
/* harmony export */   VisualizerStore: () => (/* reexport safe */ _lib_store_visualizer_store__WEBPACK_IMPORTED_MODULE_1__.VisualizerStore),
/* harmony export */   initVisualizer: () => (/* reexport safe */ _lib_audio_context__WEBPACK_IMPORTED_MODULE_0__.initVisualizer)
/* harmony export */ });
/* harmony import */ var _lib_audio_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/audio-context */ 39346);
/* harmony import */ var _lib_store_visualizer_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/store/visualizer.store */ 50184);



/***/ }),

/***/ 39346:
/*!******************************************************************!*\
  !*** ./libs/web/visualizer/data-access/src/lib/audio-context.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioAnalyser: () => (/* binding */ AudioAnalyser),
/* harmony export */   initVisualizer: () => (/* binding */ initVisualizer)
/* harmony export */ });
/* harmony import */ var sketch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-js */ 40755);
/* harmony import */ var sketch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle */ 80139);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 53183);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ 90978);
// Audio visualization originally created by Justin Windle (@soulwire)
// as seen on https://codepen.io/soulwire/pen/Dscga
// also seen on https://github.com/koel/core/blob/master/js/utils/visualizer.ts by @phanan
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../typings/sketch-js.d.ts" />




class AudioAnalyser {
  constructor(numBands = _const__WEBPACK_IMPORTED_MODULE_2__.NUM_BANDS, smoothing = _const__WEBPACK_IMPORTED_MODULE_2__.SMOOTHING) {
    this.numBands = numBands;
    this.smoothing = smoothing;
  }
}
const initVisualizer = container => {
  // setup the audio analyser
  const analyser = new AudioAnalyser();
  const sketch = sketch_js__WEBPACK_IMPORTED_MODULE_0__.create({
    container,
    particles: [],
    autopause: false,
    setup() {
      // generate some particles
      for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_2__.NUM_PARTICLES; i++) {
        const particle = new _particle__WEBPACK_IMPORTED_MODULE_1__.Particle((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this.width), (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this.height));
        particle.energy = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(particle.band / 256);
        this.particles.push(particle);
      }
      // update particles based on fft transformed audio frequencies
      analyser.onUpdate = num => this.particles.map(particle => {
        particle.energy = num; //bands[particle.band] / 256;
        return particle;
      });
    },
    draw() {
      this.globalCompositeOperation = 'lighter';
      return this.particles.map(particle => {
        if (particle.y < -particle.size * particle.level * particle.scale * 2) {
          particle.reset();
          particle.x = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this.width);
          particle.y = this.height + particle.size * particle.scale * particle.level * 2;
        }
        particle.move();
        return particle.draw(this);
      });
    }
  });
  return {
    sketch,
    analyser
  };
};

/***/ }),

/***/ 90978:
/*!**********************************************************!*\
  !*** ./libs/web/visualizer/data-access/src/lib/const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALPHA: () => (/* binding */ ALPHA),
/* harmony export */   COLORS: () => (/* binding */ COLORS),
/* harmony export */   NUM_BANDS: () => (/* binding */ NUM_BANDS),
/* harmony export */   NUM_PARTICLES: () => (/* binding */ NUM_PARTICLES),
/* harmony export */   SCALE: () => (/* binding */ SCALE),
/* harmony export */   SIZE: () => (/* binding */ SIZE),
/* harmony export */   SMOOTHING: () => (/* binding */ SMOOTHING),
/* harmony export */   SPEED: () => (/* binding */ SPEED),
/* harmony export */   SPIN: () => (/* binding */ SPIN),
/* harmony export */   TWO_PI: () => (/* binding */ TWO_PI)
/* harmony export */ });
const NUM_PARTICLES = 128;
const NUM_BANDS = 128;
const SMOOTHING = 0.5;
const SCALE = {
  MIN: 5.0,
  MAX: 80.0
};
const SPEED = {
  MIN: 0.2,
  MAX: 1.0
};
const ALPHA = {
  MIN: 0.5,
  MAX: 0.9
};
const SPIN = {
  MIN: 0.001,
  MAX: 0.005
};
const SIZE = {
  MIN: 0.5,
  MAX: 1.25
};
const COLORS = ['#69D2E7', '#1B676B', '#BEF202', '#EBE54D', '#00CDAC', '#1693A5', '#F9D423', '#FF4E50', '#E7204E', '#0CCABA', '#FF006F', '#EDE7D9', '#E0607E', '#f6c5af', '#453643', '#03CEA4', '#45CB85'];
const TWO_PI = Math.PI * 2;

/***/ }),

/***/ 80139:
/*!*************************************************************!*\
  !*** ./libs/web/visualizer/data-access/src/lib/particle.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Particle: () => (/* binding */ Particle)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 53183);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 22870);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ 90978);


class Particle {
  constructor(x = 0, y = 0) {
    this.smoothedScale = 0;
    this.smoothedAlpha = 0;
    this.decayScale = 0;
    this.decayAlpha = 0;
    this.rotation = 0;
    this.energy = 0;
    this.x = x;
    this.y = y;
    this.reset();
  }
  reset() {
    this.level = 1 + Math.floor((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(4));
    this.scale = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.SCALE.MIN, _const__WEBPACK_IMPORTED_MODULE_0__.SCALE.MAX);
    this.alpha = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.ALPHA.MIN, _const__WEBPACK_IMPORTED_MODULE_0__.ALPHA.MAX);
    this.speed = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.SPEED.MIN, _const__WEBPACK_IMPORTED_MODULE_0__.SPEED.MAX);
    this.color = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.COLORS);
    this.size = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.SIZE.MIN, _const__WEBPACK_IMPORTED_MODULE_0__.SIZE.MAX);
    this.spin = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.SPIN.MAX, _const__WEBPACK_IMPORTED_MODULE_0__.SPIN.MAX);
    this.band = Math.floor((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.NUM_BANDS));
    if (Math.random() < 0.5) {
      this.spin = -this.spin;
    }
    this.smoothedScale = 0.0;
    this.smoothedAlpha = 0.0;
    this.decayScale = 0.0;
    this.decayAlpha = 0.0;
    this.rotation = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__.TWO_PI);
    this.energy = 0.0;
    return this.energy;
  }
  move() {
    this.rotation += this.spin;
    this.y -= this.speed * this.level;
    return this.y;
  }
  draw(ctx) {
    const power = Math.exp(this.energy);
    const scale = this.scale * power;
    const alpha = this.alpha * this.energy * 2;
    this.decayScale = Math.max(this.decayScale, scale);
    this.decayAlpha = Math.max(this.decayAlpha, alpha);
    this.smoothedScale += (this.decayScale - this.smoothedScale) * 0.3;
    this.smoothedAlpha += (this.decayAlpha - this.smoothedAlpha) * 0.3;
    this.decayScale *= 0.985;
    this.decayAlpha *= 0.975;
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x + Math.cos(this.rotation * this.speed) * 250, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(this.smoothedScale * this.level, this.smoothedScale * this.level);
    ctx.moveTo(this.size * 0.5, 0);
    ctx.lineTo(this.size * -0.5, 0);
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.globalAlpha = this.smoothedAlpha / this.level;
    ctx.strokeStyle = this.color;
    ctx.stroke();
    return ctx.restore();
  }
}

/***/ }),

/***/ 50184:
/*!***************************************************************************!*\
  !*** ./libs/web/visualizer/data-access/src/lib/store/visualizer.store.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizerStore: () => (/* binding */ VisualizerStore)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);








class VisualizerStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_1__.ComponentStore {
  constructor(router, location) {
    super({
      isVisible: false,
      isShownAsPiP: false,
      isFirstTime: true
    });
    this.router = router;
    this.location = location;
    this.isShownAsPiP$ = this.select(s => s.isShownAsPiP);
    this.isVisible$ = this.select(s => s.isVisible);
    this.showPiPVisualizer$ = this.select(s => s.isVisible && s.isShownAsPiP);
    this.showVisualizerAsPiP$ = this.effect(() => this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(e => e.urlAfterRedirects.includes(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Visualizer)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.state$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([isAtVisualizerRoute, state]) => {
      if (isAtVisualizerRoute) {
        this.setState({
          isFirstTime: false,
          isVisible: true,
          isShownAsPiP: false
        });
      }
      if (!isAtVisualizerRoute && !state.isFirstTime) {
        this.setState({
          ...state,
          isShownAsPiP: true
        });
      }
    })));
    this.setVisibility = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(({
      isVisible
    }) => {
      this.patchState({
        isVisible,
        isFirstTime: !isVisible
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.get()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(state => this.handleStateChange(state))));
    this.togglePiP = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.isShownAsPiP$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([, isShownAsPiP]) => {
      this.patchState({
        isShownAsPiP: !isShownAsPiP
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.get()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(state => this.handleStateChange(state))));
    this.showVisualizerAsPiP$();
  }
  handleStateChange({
    isVisible,
    isShownAsPiP
  }) {
    if (!isVisible) {
      this.patchState({
        isFirstTime: true,
        isShownAsPiP: false,
        isVisible: false
      });
    }
    if (isVisible && !isShownAsPiP) {
      this.router.navigate(['/', _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Visualizer]);
    }
    if (isVisible && isShownAsPiP || !isVisible && !isShownAsPiP) {
      if (this.location.path().includes(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.Visualizer)) {
        this.location.back();
      }
    }
  }
  static #_ = this.ɵfac = function VisualizerStore_Factory(t) {
    return new (t || VisualizerStore)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: VisualizerStore,
    factory: VisualizerStore.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61760:
/*!*********************************************!*\
  !*** ./libs/web/visualizer/ui/src/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebVisualizerUiModule: () => (/* reexport safe */ _lib_web_visualizer_ui_module__WEBPACK_IMPORTED_MODULE_0__.WebVisualizerUiModule)
/* harmony export */ });
/* harmony import */ var _lib_web_visualizer_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-visualizer-ui.module */ 78650);


/***/ }),

/***/ 32795:
/*!***********************************************************************!*\
  !*** ./libs/web/visualizer/ui/src/lib/web-visualizer-ui.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebVisualizerUiComponent: () => (/* binding */ WebVisualizerUiComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/visualizer/data-access */ 21685);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 37143);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 11069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26320);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 5519);














const _c0 = ["visualizer"];
function WebVisualizerUiComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebVisualizerUiComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.togglePiP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isShownAsPiP_r4 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", isShownAsPiP_r4 ? "Expand" : "Shrink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("key", isShownAsPiP_r4 ? "expand" : "shrink");
  }
}
const INTERVAL = 100;
let WebVisualizerUiComponent = class WebVisualizerUiComponent {
  constructor(playbackStore, document, visualizerStore) {
    this.playbackStore = playbackStore;
    this.document = document;
    this.visualizerStore = visualizerStore;
    this.isFullscreen = false;
    this.isVisualizerShownAsPiP$ = this.visualizerStore.isShownAsPiP$;
  }
  ngOnInit() {
    const {
      sketch,
      analyser
    } = (0,_angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_1__.initVisualizer)(this.visualizer.nativeElement);
    this.sketch = sketch;
    this.analyser = analyser;
    this.init();
  }
  init() {
    this.playbackStore.segments$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(data => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(num => ({
      num,
      data
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(({
      num,
      data
    }) => {
      const {
        position,
        isPlaying,
        segments
      } = data;
      if (!isPlaying) {
        return;
      }
      const currentPos = (position || 0) + num * INTERVAL;
      const segment = segments.find(segment => segment.start >= currentPos);
      if (segment) {
        const avgPitch = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(segment?.pitches);
        this.analyser.onUpdate(avgPitch / 2);
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe();
  }
  toggleFullscreen() {
    if (this.isFullscreen) {
      this.document.exitFullscreen();
    } else {
      this.visualizer.nativeElement.requestFullscreen();
    }
    this.isFullscreen = !this.isFullscreen;
  }
  togglePiP() {
    this.visualizerStore.togglePiP();
  }
  close() {
    this.visualizerStore.setVisibility({
      isVisible: false
    });
  }
  ngOnDestroy() {
    this.sketch.destroy();
  }
  static #_ = this.ɵfac = function WebVisualizerUiComponent_Factory(t) {
    return new (t || WebVisualizerUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_1__.VisualizerStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: WebVisualizerUiComponent,
    selectors: [["as-web-visualizer-ui"]],
    viewQuery: function WebVisualizerUiComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.visualizer = _t.first);
      }
    },
    decls: 6,
    vars: 2,
    consts: [["visualizer", ""], [1, "visualizer-actions-wrapper"], ["class", "action-btn", 3, "title", "click", 4, "ngrxLet"], ["title", "Close", 1, "action-btn", 3, "click"], [3, "key"], ["id", "visualizer", 3, "dblclick"], [1, "action-btn", 3, "click", "title"]],
    template: function WebVisualizerUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WebVisualizerUiComponent_button_1_Template, 2, 2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebVisualizerUiComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function WebVisualizerUiComponent_Template_div_dblclick_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleFullscreen());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx.isVisualizerShownAsPiP$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("key", "times");
      }
    },
    dependencies: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_10__.SvgIconComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective],
    styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n}\n\n#visualizer[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/noise.png\");\n  overflow: hidden;\n}\n\n.visualizer-actions-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 0.5rem;\n  right: 0px;\n}\n.visualizer-actions-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  border: none;\n  border-radius: 50%;\n  height: 2rem;\n  width: 2rem;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.7;\n  color: #fff;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n.visualizer-actions-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi12aXN1YWxpemVyLXVpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsZUFBQTtFQUNBO0FBREE7QUFJRTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUFBLFdBQUE7RUFBQSxtREFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0E7QUFUQTtBQVlFO0VBQUE7QUFBQSIsImZpbGUiOiJ3ZWItdmlzdWFsaXplci11aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3Zpc3VhbGl6ZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL25vaXNlLnBuZycpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlzdWFsaXplci1hY3Rpb25zLXdyYXBwZXIge1xuICBAYXBwbHkgYWJzb2x1dGUgcC0yO1xuICByaWdodDogMHB4O1xuXG4gIC5hY3Rpb24tYnRuIHtcbiAgICBAYXBwbHkgbWwtMjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIEBhcHBseSBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIHctOCBoLTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBAYXBwbHkgYmctb3BhY2l0eS00MDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3Zpc3VhbGl6ZXIvdWkvc3JjL2xpYi93ZWItdmlzdWFsaXplci11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0U7RUFBQSxrQkFBQTtFQUFBLGVBQUE7RUFDQSxVQUFBO0FBREE7QUFJRTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUFBLFdBQUE7RUFBQSxtREFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVRBO0FBWUU7RUFBQSxvQkFBQTtBQUFBO0FBTU4sd3dDQUF3d0MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiN2aXN1YWxpemVyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9ub2lzZS5wbmcnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZpc3VhbGl6ZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgQGFwcGx5IGFic29sdXRlIHAtMjtcbiAgcmlnaHQ6IDBweDtcblxuICAuYWN0aW9uLWJ0biB7XG4gICAgQGFwcGx5IG1sLTI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBAYXBwbHkgYmctYmxhY2sgYmctb3BhY2l0eS03MCB3LTggaC04O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgQGFwcGx5IGJnLW9wYWNpdHktNDA7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
};
WebVisualizerUiComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)(), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore, Document, _angular_spotify_web_visualizer_data_access__WEBPACK_IMPORTED_MODULE_1__.VisualizerStore])], WebVisualizerUiComponent);


/***/ }),

/***/ 78650:
/*!********************************************************************!*\
  !*** ./libs/web/visualizer/ui/src/lib/web-visualizer-ui.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebVisualizerUiModule: () => (/* binding */ WebVisualizerUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-visualizer-ui.component */ 32795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);





class WebVisualizerUiModule {
  static #_ = this.ɵfac = function WebVisualizerUiModule_Factory(t) {
    return new (t || WebVisualizerUiModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: WebVisualizerUiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebVisualizerUiModule, {
    declarations: [_web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_0__.WebVisualizerUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_4__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_4__.PushPipe],
    exports: [_web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_0__.WebVisualizerUiComponent]
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(798)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map