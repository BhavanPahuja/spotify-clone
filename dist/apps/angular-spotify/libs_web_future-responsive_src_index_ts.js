"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_future-responsive_src_index_ts"],{

/***/ 19827:
/*!*************************************************!*\
  !*** ./libs/web/future-responsive/src/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   futureResponsiveRoutes: () => (/* reexport safe */ _lib_future_responsive_routes__WEBPACK_IMPORTED_MODULE_0__.futureResponsiveRoutes)
/* harmony export */ });
/* harmony import */ var _lib_future_responsive_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/future-responsive.routes */ 69891);


/***/ }),

/***/ 69891:
/*!************************************************************************!*\
  !*** ./libs/web/future-responsive/src/lib/future-responsive.routes.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   futureResponsiveRoutes: () => (/* binding */ futureResponsiveRoutes)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);


const futureResponsiveRoutes = [{
  path: '',
  loadComponent: function () {
    var _ref = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("libs_web_future-responsive_src_lib_future-responsive_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./future-responsive.component */ 75782))).FutureResponsiveComponent;
    });
    return function loadComponent() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: `:${_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.AlbumId}`,
  canActivate: [_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.redirectAlbumDetailGuard],
  children: []
}];

/***/ })

}]);
//# sourceMappingURL=libs_web_future-responsive_src_index_ts.js.map