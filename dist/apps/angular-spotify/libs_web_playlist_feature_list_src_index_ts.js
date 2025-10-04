"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_playlist_feature_list_src_index_ts"],{

/***/ 86751:
/*!*****************************************************!*\
  !*** ./libs/web/playlist/feature/list/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistsModule: () => (/* reexport safe */ _lib_playlists_module__WEBPACK_IMPORTED_MODULE_0__.PlaylistsModule),
/* harmony export */   playlistsRoutes: () => (/* reexport safe */ _lib_playlists_module__WEBPACK_IMPORTED_MODULE_0__.playlistsRoutes)
/* harmony export */ });
/* harmony import */ var _lib_playlists_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/playlists.module */ 42152);


/***/ }),

/***/ 23637:
/*!***********************************************************************!*\
  !*** ./libs/web/playlist/feature/list/src/lib/playlists.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistsComponent: () => (/* binding */ PlaylistsComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/playlist/data-access */ 33675);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_playlist_list_src_lib_playlist_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/ui/playlist-list/src/lib/playlist-list.component */ 13517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






class PlaylistsComponent {
  constructor(store) {
    this.store = store;
    this.playlists$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsWithRouteUrl));
    this.isPlaylistsLoading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.getPlaylistsLoading));
  }
  static #_ = this.ɵfac = function PlaylistsComponent_Factory(t) {
    return new (t || PlaylistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PlaylistsComponent,
    selectors: [["as-playlists"]],
    decls: 4,
    vars: 6,
    consts: [[1, "content-spacing"], [3, "isLoading", "playlists"]],
    template: function PlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "as-playlist-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.isPlaylistsLoading$))("playlists", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.playlists$));
      }
    },
    dependencies: [_shared_ui_playlist_list_src_lib_playlist_list_component__WEBPACK_IMPORTED_MODULE_1__.PlaylistListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlsaXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJwbGF5bGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3BsYXlsaXN0L2ZlYXR1cmUvbGlzdC9zcmMvbGliL3BsYXlsaXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLHdTQUF3UyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 42152:
/*!********************************************************************!*\
  !*** ./libs/web/playlist/feature/list/src/lib/playlists.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistsModule: () => (/* binding */ PlaylistsModule),
/* harmony export */   playlistsRoutes: () => (/* binding */ playlistsRoutes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _playlists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.component */ 23637);
/* harmony import */ var _angular_spotify_web_shared_ui_playlist_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/playlist-list */ 89037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);






const playlistsRoutes = [];
class PlaylistsModule {
  static #_ = this.ɵfac = function PlaylistsModule_Factory(t) {
    return new (t || PlaylistsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PlaylistsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: '',
      component: _playlists_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistsComponent
    }]), _angular_spotify_web_shared_ui_playlist_list__WEBPACK_IMPORTED_MODULE_1__.PlaylistListModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlaylistsModule, {
    declarations: [_playlists_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_spotify_web_shared_ui_playlist_list__WEBPACK_IMPORTED_MODULE_1__.PlaylistListModule],
    exports: [_playlists_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistsComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_playlist_feature_list_src_index_ts.js.map