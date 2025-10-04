"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_browse_feature_categories_src_index_ts"],{

/***/ 16279:
/*!*********************************************************!*\
  !*** ./libs/web/browse/feature/categories/src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseCategoriesModule: () => (/* reexport safe */ _lib_categories_module__WEBPACK_IMPORTED_MODULE_0__.BrowseCategoriesModule)
/* harmony export */ });
/* harmony import */ var _lib_categories_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/categories.module */ 77589);


/***/ }),

/***/ 78642:
/*!****************************************************************************!*\
  !*** ./libs/web/browse/feature/categories/src/lib/categories.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesComponent: () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/browse/data-access */ 27415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_category_cover_src_lib_category_cover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/category-cover/src/lib/category-cover.component */ 75468);
/* harmony import */ var _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/spinner/src/lib/spinner.component */ 96101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function CategoriesComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "as-category-cover", 2);
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("category", category_r1);
  }
}
function CategoriesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, CategoriesComponent_Conditional_1_For_2_Template, 1, 1, "as-category-cover", 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.items);
  }
}
function CategoriesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "as-spinner");
  }
}
class CategoriesComponent {
  constructor(store) {
    this.store = store;
    this.isLoading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.getCategoriesLoading));
    this.categories$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.getCategories));
    this.store.dispatch((0,_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.loadCategories)({}));
  }
  static #_ = this.ɵfac = function CategoriesComponent_Factory(t) {
    return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CategoriesComponent,
    selectors: [["as-categories"]],
    decls: 5,
    vars: 6,
    consts: [[1, "mb-6", "content-spacing"], [1, "common-grid"], [3, "category"]],
    template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CategoriesComponent_Conditional_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CategoriesComponent_Conditional_3_Template, 1, 0, "as-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.categories$)) ? 1 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.isLoading$) ? 3 : -1);
      }
    },
    dependencies: [_ui_category_cover_src_lib_category_cover_component__WEBPACK_IMPORTED_MODULE_1__.CategoryCoverComponent, _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: [".categories-container[_ngcontent-%COMP%] {\n  gap: --media-cover-gap;\n  grid-template-columns: --media-grid;\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6ImNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllcy1jb250YWluZXIge1xuICBnYXA6IC0tbWVkaWEtY292ZXItZ2FwO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC0tbWVkaWEtZ3JpZDtcbiAgQGFwcGx5IGdyaWQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2Jyb3dzZS9mZWF0dXJlL2NhdGVnb3JpZXMvc3JjL2xpYi9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNBLG9iQUFvYiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XG4gIGdhcDogLS1tZWRpYS1jb3Zlci1nYXA7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLS1tZWRpYS1ncmlkO1xuICBAYXBwbHkgZ3JpZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 77589:
/*!*************************************************************************!*\
  !*** ./libs/web/browse/feature/categories/src/lib/categories.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseCategoriesModule: () => (/* binding */ BrowseCategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ 78642);
/* harmony import */ var _angular_spotify_web_browse_ui_category_cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/browse/ui/category-cover */ 56867);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);







class BrowseCategoriesModule {
  static #_ = this.ɵfac = function BrowseCategoriesModule_Factory(t) {
    return new (t || BrowseCategoriesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: BrowseCategoriesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      component: _categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent
    }]), _angular_spotify_web_browse_ui_category_cover__WEBPACK_IMPORTED_MODULE_1__.CategoryCoverModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BrowseCategoriesModule, {
    declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_spotify_web_browse_ui_category_cover__WEBPACK_IMPORTED_MODULE_1__.CategoryCoverModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule],
    exports: [_categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent]
  });
})();

/***/ }),

/***/ 56867:
/*!********************************************************!*\
  !*** ./libs/web/browse/ui/category-cover/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryCoverModule: () => (/* reexport safe */ _lib_category_cover_module__WEBPACK_IMPORTED_MODULE_0__.CategoryCoverModule)
/* harmony export */ });
/* harmony import */ var _lib_category_cover_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/category-cover.module */ 47579);


/***/ }),

/***/ 75468:
/*!*******************************************************************************!*\
  !*** ./libs/web/browse/ui/category-cover/src/lib/category-cover.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryCoverComponent: () => (/* binding */ CategoryCoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/ui/media-cover/src/lib/media-cover.component */ 21341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class CategoryCoverComponent {
  static #_ = this.ɵfac = function CategoryCoverComponent_Factory(t) {
    return new (t || CategoryCoverComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CategoryCoverComponent,
    selectors: [["as-category-cover"]],
    inputs: {
      category: "category"
    },
    decls: 4,
    vars: 4,
    consts: [[1, "category-cover-container", 3, "routerLink"], [3, "imageUrl"], [1, "category-name", "ellipsis-one-line", 3, "title"]],
    template: function CategoryCoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "as-media-cover", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.category.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageUrl", ctx.category.icons[0] == null ? null : ctx.category.icons[0].url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.category.name, " ");
      }
    },
    dependencies: [_shared_ui_media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_0__.MediaCoverComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".category-cover-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n.category-cover-container[_ngcontent-%COMP%]:hover   .category-name[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.category-name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWNvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFTTtFQUFBO0FBQUE7O0FBS047RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLHlEQUFBO0FBREYiLCJmaWxlIjoiY2F0ZWdvcnktY292ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktY292ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmhvdmVyIHtcbiAgICAuY2F0ZWdvcnktbmFtZSB7XG4gICAgICBAYXBwbHkgdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4uY2F0ZWdvcnktbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgQGFwcGx5IHRleHQtd2hpdGUgdGV4dC1iYXNlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2Jyb3dzZS91aS9jYXRlZ29yeS1jb3Zlci9zcmMvbGliL2NhdGVnb3J5LWNvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFTTtFQUFBLCtCQUFBO0FBQUE7O0FBS047RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLHlEQUFBO0FBREY7QUFJQSw0eUJBQTR5QiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1jb3Zlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIC5jYXRlZ29yeS1uYW1lIHtcbiAgICAgIEBhcHBseSB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG59XG5cbi5jYXRlZ29yeS1uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBAYXBwbHkgdGV4dC13aGl0ZSB0ZXh0LWJhc2U7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 47579:
/*!****************************************************************************!*\
  !*** ./libs/web/browse/ui/category-cover/src/lib/category-cover.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryCoverModule: () => (/* binding */ CategoryCoverModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _category_cover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-cover.component */ 75468);
/* harmony import */ var _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-cover */ 76874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class CategoryCoverModule {
  static #_ = this.ɵfac = function CategoryCoverModule_Factory(t) {
    return new (t || CategoryCoverModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CategoryCoverModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__.MediaCoverModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategoryCoverModule, {
    declarations: [_category_cover_component__WEBPACK_IMPORTED_MODULE_0__.CategoryCoverComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_1__.MediaCoverModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_category_cover_component__WEBPACK_IMPORTED_MODULE_0__.CategoryCoverComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_browse_feature_categories_src_index_ts.js.map