"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_album_feature_list_src_index_ts"],{

/***/ 43332:
/*!**************************************************!*\
  !*** ./libs/web/album/feature/list/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumsModule: () => (/* reexport safe */ _lib_albums_module__WEBPACK_IMPORTED_MODULE_0__.AlbumsModule)
/* harmony export */ });
/* harmony import */ var _lib_albums_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/albums.module */ 22930);


/***/ }),

/***/ 22659:
/*!*****************************************************************!*\
  !*** ./libs/web/album/feature/list/src/lib/albums.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumsComponent: () => (/* binding */ AlbumsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/album/data-access */ 77854);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/shared/view-transition */ 69733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/media/src/lib/card.component */ 66285);
/* harmony import */ var _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ui/spinner/src/lib/spinner.component */ 96101);












function AlbumsComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "as-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("togglePlay", function AlbumsComponent_Conditional_1_For_2_Template_as_card_togglePlay_0_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.togglePlay($event, item_r2.album.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.viewTransitionName(item_r2))("title", item_r2.album.name)("uri", item_r2.album.uri)("description", item_r2.album.artists[0].name)("imageUrl", item_r2.album.images[0] == null ? null : item_r2.album.images[0].url)("routerUrl", item_r2.album.id);
  }
}
function AlbumsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, AlbumsComponent_Conditional_1_For_2_Template, 1, 6, "as-card", 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.items);
  }
}
function AlbumsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "as-spinner");
  }
}
class AlbumsComponent {
  constructor(store, playerApi) {
    this.store = store;
    this.playerApi = playerApi;
    this.albums$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__.getAlbums));
    this.isLoading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__.getAlbumsLoading));
    this.transitionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_3__.CurrentViewTransitionService);
  }
  ngOnInit() {
    this.store.dispatch((0,_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__.loadAlbums)());
  }
  togglePlay(isPlaying, contextUri) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: contextUri
    }).subscribe();
  }
  /*
    When transitioning to or from the detail page, include the `with-view-transition` transition name.
    This enables the browser to animate between the cover photo image in the list and its image on the detail page.
  */
  viewTransitionName(item) {
    const transition = this.transitionService.currentTransition();
    const transitionAlbumId = (0,_angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_3__.getViewTransitionParamValue)(transition, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.Configuration.AlbumId);
    const withViewTransition = transitionAlbumId === item.album.id;
    return withViewTransition ? 'with-view-transition' : '';
  }
  static #_ = this.ɵfac = function AlbumsComponent_Factory(t) {
    return new (t || AlbumsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AlbumsComponent,
    selectors: [["as-albums"]],
    decls: 5,
    vars: 6,
    consts: [[1, "content-spacing"], [1, "common-grid"], [3, "ngClass", "title", "uri", "description", "imageUrl", "routerUrl"], [3, "togglePlay", "ngClass", "title", "uri", "description", "imageUrl", "routerUrl"]],
    template: function AlbumsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AlbumsComponent_Conditional_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AlbumsComponent_Conditional_3_Template, 1, 0, "as-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.albums$)) ? 1 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, ctx.isLoading$) ? 3 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhbGJ1bXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2FsYnVtL2ZlYXR1cmUvbGlzdC9zcmMvbGliL2FsYnVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLGdTQUFnUyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 22930:
/*!**************************************************************!*\
  !*** ./libs/web/album/feature/list/src/lib/albums.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumsModule: () => (/* binding */ AlbumsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums.component */ 22659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);







class AlbumsModule {
  static #_ = this.ɵfac = function AlbumsModule_Factory(t) {
    return new (t || AlbumsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AlbumsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      component: _albums_component__WEBPACK_IMPORTED_MODULE_0__.AlbumsComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlbumsModule, {
    declarations: [_albums_component__WEBPACK_IMPORTED_MODULE_0__.AlbumsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_album_feature_list_src_index_ts.js.map