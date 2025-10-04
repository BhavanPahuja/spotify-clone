"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd"],{

/***/ 65129:
/*!*****************************************************!*\
  !*** ./libs/web/shared/ui/media-order/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaOrderModule: () => (/* reexport safe */ _lib_media_order_module__WEBPACK_IMPORTED_MODULE_0__.MediaOrderModule)
/* harmony export */ });
/* harmony import */ var _lib_media_order_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/media-order.module */ 27636);


/***/ }),

/***/ 81553:
/*!*************************************************************************!*\
  !*** ./libs/web/shared/ui/media-order/src/lib/media-order.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaOrderComponent: () => (/* binding */ MediaOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../play-button/src/lib/play-button.component */ 9261);



function MediaOrderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 2);
  }
}
function MediaOrderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.index);
  }
}
class MediaOrderComponent {
  constructor() {
    this.togglePlay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  static #_ = this.ɵfac = function MediaOrderComponent_Factory(t) {
    return new (t || MediaOrderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MediaOrderComponent,
    selectors: [["as-media-order"]],
    inputs: {
      index: "index",
      isPlaying: "isPlaying"
    },
    outputs: {
      togglePlay: "togglePlay"
    },
    decls: 5,
    vars: 3,
    consts: [[1, "flex", "group"], [1, "flex", "group-hover:hidden", "track-order"], ["src", "/assets/images/equaliser-animated-green.gif", "alt", "Playing", 1, "animated-equalizer"], [1, "hidden", "pt-1", "group-hover:block", "track-play-button", 3, "togglePlay", "flatIcon", "isPlaying"], [1, "text-description"]],
    template: function MediaOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MediaOrderComponent_Conditional_2_Template, 1, 0, "img", 2)(3, MediaOrderComponent_Conditional_3_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "as-play-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("togglePlay", function MediaOrderComponent_Template_as_play_button_togglePlay_4_listener($event) {
          return ctx.togglePlay.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx.isPlaying ? 2 : 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flatIcon", true)("isPlaying", ctx.isPlaying);
      }
    },
    dependencies: [_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_0__.PlayButtonComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.animated-equalizer[_ngcontent-%COMP%] {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6Im1lZGlhLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFuaW1hdGVkLWVxdWFsaXplciB7XG4gIHdpZHRoOiAxNnB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9tZWRpYS1vcmRlci9zcmMvbGliL21lZGlhLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0Esb1lBQW9ZIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFuaW1hdGVkLWVxdWFsaXplciB7XG4gIHdpZHRoOiAxNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 27636:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/ui/media-order/src/lib/media-order.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaOrderModule: () => (/* binding */ MediaOrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _media_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-order.component */ 81553);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/play-button */ 79225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class MediaOrderModule {
  static #_ = this.ɵfac = function MediaOrderModule_Factory(t) {
    return new (t || MediaOrderModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MediaOrderModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__.PlayButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaOrderModule, {
    declarations: [_media_order_component__WEBPACK_IMPORTED_MODULE_0__.MediaOrderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_4__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_4__.PushPipe, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_1__.PlayButtonModule],
    exports: [_media_order_component__WEBPACK_IMPORTED_MODULE_0__.MediaOrderComponent]
  });
})();

/***/ }),

/***/ 30461:
/*!*****************************************************!*\
  !*** ./libs/web/shared/ui/media-table/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaTableModule: () => (/* reexport safe */ _lib_media_table_module__WEBPACK_IMPORTED_MODULE_0__.MediaTableModule)
/* harmony export */ });
/* harmony import */ var _lib_media_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/media-table.module */ 12216);


/***/ }),

/***/ 44491:
/*!***************************************************************************************************!*\
  !*** ./libs/web/shared/ui/media-table/src/lib/media-table-header/media-table-header.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaTableHeaderComponent: () => (/* binding */ MediaTableHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const _c0 = ["*"];
class MediaTableHeaderComponent {
  static #_ = this.ɵfac = function MediaTableHeaderComponent_Factory(t) {
    return new (t || MediaTableHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MediaTableHeaderComponent,
    selectors: [["as-media-table-header"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [[1, "pb-4"], [1, "playlist-tracks-header"]],
    template: function MediaTableHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".playlist-tracks-header[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  z-index: 2;\n  margin-bottom: 1rem;\n  border-color: rgb(var(--text-baseline) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.1;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXRhYmxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFBQSxrRUFBQTtFQUFBLHdCQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0FBQ0YiLCJmaWxlIjoibWVkaWEtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlsaXN0LXRyYWNrcy1oZWFkZXIge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICB6LWluZGV4OiAyO1xuICBAYXBwbHkgYm9yZGVyLXdoaXRlIGJvcmRlci1vcGFjaXR5LTEwIHBiLTQgcHgtNCBtYi00O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9tZWRpYS10YWJsZS9zcmMvbGliL21lZGlhLXRhYmxlLWhlYWRlci9tZWRpYS10YWJsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQUEsa0VBQUE7RUFBQSx3QkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtBQUNGO0FBTUEsb21CQUFvbUIiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3QtdHJhY2tzLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIHotaW5kZXg6IDI7XG4gIEBhcHBseSBib3JkZXItd2hpdGUgYm9yZGVyLW9wYWNpdHktMTAgcGItNCBweC00IG1iLTQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 46355:
/*!*********************************************************************************************!*\
  !*** ./libs/web/shared/ui/media-table/src/lib/media-table-row/media-table-row.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaTableRowComponent: () => (/* binding */ MediaTableRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const _c0 = ["*"];
class MediaTableRowComponent {
  static #_ = this.ɵfac = function MediaTableRowComponent_Factory(t) {
    return new (t || MediaTableRowComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MediaTableRowComponent,
    selectors: [["as-media-table-row"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MediaTableRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n    height: 3.5rem;\n    cursor: pointer;\n    align-items: center;\n    padding-left: 1rem;\n    padding-right: 1rem\n}\n[_nghost-%COMP%]:hover {\n    background-color: rgb(var(--text-baseline) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.1\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtJQUFBLGNBQUE7SUFBQSxlQUFBO0lBQUEsbUJBQUE7SUFBQSxrQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBLGtFQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJtZWRpYS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBhcHBseSBpdGVtcy1jZW50ZXIgcHgtNCBjdXJzb3ItcG9pbnRlciBoLTE0IGhvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktMTA7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9tZWRpYS10YWJsZS9zcmMvbGliL21lZGlhLXRhYmxlLXJvdy9tZWRpYS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7SUFBQSxjQUFBO0lBQUEsZUFBQTtJQUFBLG1CQUFBO0lBQUEsa0JBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQSxrRUFBQTtJQUFBO0FBQUE7QUFVRixvZUFBb2UiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBhcHBseSBpdGVtcy1jZW50ZXIgcHgtNCBjdXJzb3ItcG9pbnRlciBoLTE0IGhvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktMTA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 12216:
/*!**********************************************************************!*\
  !*** ./libs/web/shared/ui/media-table/src/lib/media-table.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaTableModule: () => (/* binding */ MediaTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-table-header/media-table-header.component */ 44491);
/* harmony import */ var _media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-table-row/media-table-row.component */ 46355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class MediaTableModule {
  static #_ = this.ɵfac = function MediaTableModule_Factory(t) {
    return new (t || MediaTableModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MediaTableModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaTableModule, {
    declarations: [_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_0__.MediaTableHeaderComponent, _media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_1__.MediaTableRowComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_0__.MediaTableHeaderComponent, _media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_1__.MediaTableRowComponent]
  });
})();

/***/ }),

/***/ 6310:
/*!*********************************************************!*\
  !*** ./libs/web/shared/ui/track-main-info/src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackMainInfoModule: () => (/* reexport safe */ _lib_track_main_info_module__WEBPACK_IMPORTED_MODULE_0__.TrackMainInfoModule)
/* harmony export */ });
/* harmony import */ var _lib_track_main_info_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/track-main-info.module */ 45296);


/***/ }),

/***/ 49997:
/*!*********************************************************************************!*\
  !*** ./libs/web/shared/ui/track-main-info/src/lib/track-main-info.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackMainInfoComponent: () => (/* binding */ TrackMainInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../media-cover/src/lib/media-cover.component */ 21341);





const _c0 = a0 => ["ellipsis-one-line", "text-base", a0];
function TrackMainInfoComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "as-media-cover", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("imageUrl", ctx_r0.track.album.images[0] == null ? null : ctx_r0.track.album.images[0].url);
  }
}
function TrackMainInfoComponent_Conditional_0_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TrackMainInfoComponent_Conditional_0_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TrackMainInfoComponent_Conditional_0_Conditional_4_For_2_Conditional_0_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const artist_r2 = ctx.$implicit;
    const idx_r3 = ctx.$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, idx_r3 !== 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.getArtistRouteUrl(artist_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", artist_r2.name, " ");
  }
}
function TrackMainInfoComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, TrackMainInfoComponent_Conditional_0_Conditional_4_For_2_Template, 3, 3, "a", 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 0, ctx_r0.track.artists, 0, 2));
  }
}
function TrackMainInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TrackMainInfoComponent_Conditional_0_Conditional_0_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TrackMainInfoComponent_Conditional_0_Conditional_4_Template, 4, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r0.track.album ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r0.isPlaying ? "text-primary" : "text-white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.track.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx_r0.isShowArtist ? 4 : -1);
  }
}
class TrackMainInfoComponent {
  constructor() {
    this.isShowArtist = true;
  }
  getArtistRouteUrl(artist) {
    return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouteUtil.getArtistRouteUrl(artist.id);
  }
  static #_ = this.ɵfac = function TrackMainInfoComponent_Factory(t) {
    return new (t || TrackMainInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TrackMainInfoComponent,
    selectors: [["as-track-main-info"]],
    inputs: {
      track: "track",
      isPlaying: "isPlaying",
      isShowArtist: "isShowArtist"
    },
    decls: 1,
    vars: 1,
    consts: [[1, "flex", "flex-col"], [1, "track-cover"], [3, "ngClass"], [1, "flex"], [3, "imageUrl"], [1, "text-description", "link-subtle", "ellipsis-one-line", "hover:underline", 3, "routerLink"], [1, "mr-1", "comma-separator"]],
    template: function TrackMainInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TrackMainInfoComponent_Conditional_0_Template, 5, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx.track ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_1__.MediaCoverComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.track-cover[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  width: 40px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.comma-separator[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLW1haW4taW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0YiLCJmaWxlIjoidHJhY2stbWFpbi1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQ7XG59XG5cbi50cmFjay1jb3ZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jb21tYS1zZXBhcmF0b3Ige1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS90cmFjay1tYWluLWluZm8vc3JjL2xpYi90cmFjay1tYWluLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxTQUFBO0FBQUE7O0FBR0Y7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7QUFLQSxvcUJBQW9xQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGdhcC00O1xufVxuXG4udHJhY2stY292ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29tbWEtc2VwYXJhdG9yIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 45296:
/*!******************************************************************************!*\
  !*** ./libs/web/shared/ui/track-main-info/src/lib/track-main-info.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackMainInfoModule: () => (/* binding */ TrackMainInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _track_main_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-main-info.component */ 49997);
/* harmony import */ var _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-cover */ 76874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class TrackMainInfoModule {
  static #_ = this.ɵfac = function TrackMainInfoModule_Factory(t) {
    return new (t || TrackMainInfoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TrackMainInfoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__.MediaCoverModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrackMainInfoModule, {
    declarations: [_track_main_info_component__WEBPACK_IMPORTED_MODULE_0__.TrackMainInfoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__.MediaCoverModule],
    exports: [_track_main_info_component__WEBPACK_IMPORTED_MODULE_0__.TrackMainInfoComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd.js.map