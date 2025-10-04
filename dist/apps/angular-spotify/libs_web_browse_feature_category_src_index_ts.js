"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_browse_feature_category_src_index_ts"],{

/***/ 77011:
/*!*******************************************************!*\
  !*** ./libs/web/browse/feature/category/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseCategoryModule: () => (/* reexport safe */ _lib_category_module__WEBPACK_IMPORTED_MODULE_0__.BrowseCategoryModule)
/* harmony export */ });
/* harmony import */ var _lib_category_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/category.module */ 87969);


/***/ }),

/***/ 51310:
/*!************************************************************************!*\
  !*** ./libs/web/browse/feature/category/src/lib/category.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryComponent: () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/browse/data-access */ 27415);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_ui_playlist_list_src_lib_playlist_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/playlist-list/src/lib/playlist-list.component */ 13517);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);











function CategoryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.name, " ");
  }
}
function CategoryComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "as-playlist-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const playlists_r1 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", !playlists_r1)("playlists", playlists_r1);
  }
}
class CategoryComponent {
  constructor(route, store) {
    this.route = route;
    this.store = store;
    this.categoryParams$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(params => params[_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.CategoryId]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(categoryId => !!categoryId));
    this.category$ = this.categoryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(categoryId => this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)((0,_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.getCategoryById)(categoryId)))));
    // TODO: find out why it is always false
    this.isLoadingPlaylists$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.getCategoryPlaylistsLoading));
    this.playlists$ = this.categoryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(categoryId => {
      this.store.dispatch((0,_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylists)({
        categoryId
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(categoryId => this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)((0,_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_0__.getCategoryPlaylistsById)(categoryId)))));
  }
  static #_ = this.ɵfac = function CategoryComponent_Factory(t) {
    return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CategoryComponent,
    selectors: [["as-category-detail"]],
    decls: 4,
    vars: 4,
    consts: [[1, "content-spacing"], [1, "mb-4", "text-heading"], [4, "ngrxLet"], [3, "isLoading", "playlists"]],
    template: function CategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CategoryComponent_Conditional_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CategoryComponent_ng_container_3_Template, 2, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.category$)) ? 1 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.playlists$);
      }
    },
    dependencies: [_shared_ui_playlist_list_src_lib_playlist_list_component__WEBPACK_IMPORTED_MODULE_2__.PlaylistListComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_10__.LetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2Jyb3dzZS9mZWF0dXJlL2NhdGVnb3J5L3NyYy9saWIvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 87969:
/*!*********************************************************************!*\
  !*** ./libs/web/browse/feature/category/src/lib/category.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseCategoryModule: () => (/* binding */ BrowseCategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component */ 51310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_spotify_web_shared_ui_playlist_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/playlist-list */ 89037);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);








class BrowseCategoryModule {
  static #_ = this.ɵfac = function BrowseCategoryModule_Factory(t) {
    return new (t || BrowseCategoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: BrowseCategoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_1__.SpinnerModule, _angular_spotify_web_shared_ui_playlist_list__WEBPACK_IMPORTED_MODULE_2__.PlaylistListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      component: _category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BrowseCategoryModule, {
    declarations: [_category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_1__.SpinnerModule, _angular_spotify_web_shared_ui_playlist_list__WEBPACK_IMPORTED_MODULE_2__.PlaylistListModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_6__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_6__.PushPipe, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_browse_feature_category_src_index_ts.js.map