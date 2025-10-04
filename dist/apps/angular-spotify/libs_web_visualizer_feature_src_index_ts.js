"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_visualizer_feature_src_index_ts"],{

/***/ 86818:
/*!**************************************************!*\
  !*** ./libs/web/visualizer/feature/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizerModule: () => (/* reexport safe */ _lib_visualizer_module__WEBPACK_IMPORTED_MODULE_0__.VisualizerModule)
/* harmony export */ });
/* harmony import */ var _lib_visualizer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/visualizer.module */ 51576);


/***/ }),

/***/ 25477:
/*!*********************************************************************!*\
  !*** ./libs/web/visualizer/feature/src/lib/visualizer.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizerComponent: () => (/* binding */ VisualizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_src_lib_web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/src/lib/web-visualizer-ui.component */ 32795);


class VisualizerComponent {
  static #_ = this.ɵfac = function VisualizerComponent_Factory(t) {
    return new (t || VisualizerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VisualizerComponent,
    selectors: [["as-visualizer"]],
    decls: 1,
    vars: 0,
    template: function VisualizerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "as-web-visualizer-ui");
      }
    },
    dependencies: [_ui_src_lib_web_visualizer_ui_component__WEBPACK_IMPORTED_MODULE_0__.WebVisualizerUiComponent],
    styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3Zpc3VhbGl6ZXIvZmVhdHVyZS9zcmMvbGliL3Zpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0EsZ1RBQWdUIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 51576:
/*!******************************************************************!*\
  !*** ./libs/web/visualizer/feature/src/lib/visualizer.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizerModule: () => (/* binding */ VisualizerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _visualizer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer.component */ 25477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_visualizer_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/visualizer/ui */ 61760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);






class VisualizerModule {
  static #_ = this.ɵfac = function VisualizerModule_Factory(t) {
    return new (t || VisualizerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: VisualizerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_visualizer_ui__WEBPACK_IMPORTED_MODULE_1__.WebVisualizerUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: '',
      component: _visualizer_component__WEBPACK_IMPORTED_MODULE_0__.VisualizerComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VisualizerModule, {
    declarations: [_visualizer_component__WEBPACK_IMPORTED_MODULE_0__.VisualizerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_visualizer_ui__WEBPACK_IMPORTED_MODULE_1__.WebVisualizerUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_visualizer_component__WEBPACK_IMPORTED_MODULE_0__.VisualizerComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_visualizer_feature_src_index_ts.js.map