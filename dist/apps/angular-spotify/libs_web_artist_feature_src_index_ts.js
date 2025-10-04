"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_artist_feature_src_index_ts"],{

/***/ 34482:
/*!**************************************************!*\
  !*** ./libs/web/artist/data-access/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistStore: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.ArtistStore),
/* harmony export */   ArtistTopTracksStore: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTracksStore)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ 70020);


/***/ }),

/***/ 92063:
/*!******************************************************************************!*\
  !*** ./libs/web/artist/data-access/src/lib/store/artist-top-tracks.store.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTracksStore: () => (/* binding */ ArtistTopTracksStore)
/* harmony export */ });
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component-store */ 72743);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var _artist_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist.store */ 68562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);









class ArtistTopTracksStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_3__.ComponentStore {
  constructor(artistStore, authStore, artistApi) {
    super({});
    this.artistStore = artistStore;
    this.authStore = authStore;
    this.artistApi = artistApi;
    this.data$ = this.select(s => s.data);
    this.status$ = this.select(s => s.status);
    this.error$ = this.select(s => s.error);
    this.vm$ = this.select(this.data$, this.error$, this.status$, (data, error, status) => ({
      data,
      error,
      status
    }), {
      debounce: true
    });
    this.loadArtistTopTracks = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(artistId => !!artistId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.patchState({
      status: 'loading',
      error: null
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.withLatestFrom)(this.authStore.country$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([artistId, country]) => this.artistApi.getArtistTopTracks(artistId, country).pipe((0,_ngrx_component_store__WEBPACK_IMPORTED_MODULE_8__.tapResponse)(data => {
      this.patchState({
        data,
        status: 'success',
        error: ''
      });
    }, error => this.patchState({
      status: 'error',
      error: error
    }))))));
    this.loadArtistTopTracks(this.artistStore.artistIdParams$);
  }
  static #_ = this.ɵfac = function ArtistTopTracksStore_Factory(t) {
    return new (t || ArtistTopTracksStore)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_artist_store__WEBPACK_IMPORTED_MODULE_2__.ArtistStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_1__.AuthStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.ArtistApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: ArtistTopTracksStore,
    factory: ArtistTopTracksStore.ɵfac
  });
}

/***/ }),

/***/ 68562:
/*!*******************************************************************!*\
  !*** ./libs/web/artist/data-access/src/lib/store/artist.store.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistStore: () => (/* binding */ ArtistStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component-store */ 72743);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 49852);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);








class ArtistStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__.ComponentStore {
  constructor(route, artistApi) {
    super({});
    this.route = route;
    this.artistApi = artistApi;
    this.artistIdParams$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.pluck)(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.ArtistId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(artistId => !!artistId));
    this.isArtistLoading$ = this.select(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.isLoading);
    this.artist$ = this.artistIdParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(artistId => {
      this.patchState({
        artistId
      });
      this.loadArtist({
        artistId
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.select(s => s.data)));
    this.loadArtist = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      this.patchState({
        status: 'loading',
        error: null
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      artistId
    }) => this.artistApi.getArtist(artistId).pipe((0,_ngrx_component_store__WEBPACK_IMPORTED_MODULE_7__.tapResponse)(artist => {
      this.patchState({
        data: artist,
        status: 'success',
        error: ''
      });
    }, error => {
      this.patchState({
        status: 'error',
        error: error
      });
    })))));
  }
  static #_ = this.ɵfac = function ArtistStore_Factory(t) {
    return new (t || ArtistStore)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.ArtistApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: ArtistStore,
    factory: ArtistStore.ɵfac
  });
}

/***/ }),

/***/ 70020:
/*!************************************************************!*\
  !*** ./libs/web/artist/data-access/src/lib/store/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistStore: () => (/* reexport safe */ _artist_store__WEBPACK_IMPORTED_MODULE_0__.ArtistStore),
/* harmony export */   ArtistTopTracksStore: () => (/* reexport safe */ _artist_top_tracks_store__WEBPACK_IMPORTED_MODULE_1__.ArtistTopTracksStore)
/* harmony export */ });
/* harmony import */ var _artist_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist.store */ 68562);
/* harmony import */ var _artist_top_tracks_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist-top-tracks.store */ 92063);



/***/ }),

/***/ 44734:
/*!**********************************************!*\
  !*** ./libs/web/artist/feature/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistModule: () => (/* reexport safe */ _lib_artist_module__WEBPACK_IMPORTED_MODULE_0__.ArtistModule)
/* harmony export */ });
/* harmony import */ var _lib_artist_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/artist.module */ 69678);


/***/ }),

/***/ 41935:
/*!*************************************************************!*\
  !*** ./libs/web/artist/feature/src/lib/artist.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistComponent: () => (/* binding */ ArtistComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_artist_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/artist/data-access */ 34482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/media-summary/src/lib/media-summary.component */ 52517);
/* harmony import */ var _shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/tracks-loading/src/lib/tracks-loading.component */ 95495);
/* harmony import */ var _ui_artist_top_tracks_src_lib_artist_top_tracks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/artist-top-tracks/src/lib/artist-top-tracks.component */ 13455);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function ArtistComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "as-tracks-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("avatar", true);
  }
}
function ArtistComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "as-media-summary", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ArtistComponent_Conditional_0_Conditional_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "as-artist-top-tracks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const artist_r1 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", "Artist")("title", artist_r1.name)("imageUrl", artist_r1.images[0] == null ? null : artist_r1.images[0].url)("followerCount", artist_r1.followers.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx_r1.isArtistLoading$) ? 2 : -1);
  }
}
class ArtistComponent {
  constructor(artistStore) {
    this.artistStore = artistStore;
    this.artist$ = this.artistStore.artist$;
    this.isArtistLoading$ = this.artistStore.isArtistLoading$;
  }
  static #_ = this.ɵfac = function ArtistComponent_Factory(t) {
    return new (t || ArtistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_spotify_web_artist_data_access__WEBPACK_IMPORTED_MODULE_0__.ArtistStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ArtistComponent,
    selectors: [["as-artist"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_spotify_web_artist_data_access__WEBPACK_IMPORTED_MODULE_0__.ArtistStore])],
    decls: 2,
    vars: 3,
    consts: [[1, "content-spacing"], [3, "type", "title", "imageUrl", "followerCount"], [1, "px-8", "mb-5"], [3, "avatar"]],
    template: function ArtistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ArtistComponent_Conditional_0_Template, 5, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.artist$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_1__.MediaSummaryComponent, _shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_2__.TracksLoadingComponent, _ui_artist_top_tracks_src_lib_artist_top_tracks_component__WEBPACK_IMPORTED_MODULE_3__.ArtistTopTracksComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhcnRpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2FydGlzdC9mZWF0dXJlL3NyYy9saWIvYXJ0aXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0EsZ1NBQWdTIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 69678:
/*!**********************************************************!*\
  !*** ./libs/web/artist/feature/src/lib/artist.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistModule: () => (/* binding */ ArtistModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _artist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist.component */ 41935);
/* harmony import */ var _angular_spotify_web_shared_ui_work_in_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/work-in-progress */ 65691);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-summary */ 25557);
/* harmony import */ var _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/tracks-loading */ 94091);
/* harmony import */ var _angular_spotify_web_artist_ui_artist_top_tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/artist/ui/artist-top-tracks */ 76398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);










class ArtistModule {
  static #_ = this.ɵfac = function ArtistModule_Factory(t) {
    return new (t || ArtistModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ArtistModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_work_in_progress__WEBPACK_IMPORTED_MODULE_1__.WorkInProgressModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: `:${_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.Configuration.ArtistId}`,
      component: _artist_component__WEBPACK_IMPORTED_MODULE_0__.ArtistComponent
    }]), _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_3__.MediaSummaryModule, _angular_spotify_web_artist_ui_artist_top_tracks__WEBPACK_IMPORTED_MODULE_5__.ArtistTopTracksModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ArtistModule, {
    declarations: [_artist_component__WEBPACK_IMPORTED_MODULE_0__.ArtistComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_work_in_progress__WEBPACK_IMPORTED_MODULE_1__.WorkInProgressModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_3__.MediaSummaryModule, _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_4__.TracksLoadingComponent, _angular_spotify_web_artist_ui_artist_top_tracks__WEBPACK_IMPORTED_MODULE_5__.ArtistTopTracksModule],
    exports: [_artist_component__WEBPACK_IMPORTED_MODULE_0__.ArtistComponent]
  });
})();

/***/ }),

/***/ 78675:
/*!**********************************************************!*\
  !*** ./libs/web/artist/ui/artist-top-track/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTrackModule: () => (/* reexport safe */ _lib_artist_top_track_module__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTrackModule)
/* harmony export */ });
/* harmony import */ var _lib_artist_top_track_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/artist-top-track.module */ 37368);


/***/ }),

/***/ 20421:
/*!***********************************************************************************!*\
  !*** ./libs/web/artist/ui/artist-top-track/src/lib/artist-top-track.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTrackComponent: () => (/* binding */ ArtistTopTrackComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/media-table/src/lib/media-table-row/media-table-row.component */ 46355);
/* harmony import */ var _shared_ui_media_order_src_lib_media_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/media-order/src/lib/media-order.component */ 81553);
/* harmony import */ var _shared_ui_track_main_info_src_lib_track_main_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ui/track-main-info/src/lib/track-main-info.component */ 49997);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/pipes/duration-pipe/src/lib/duration.pipe */ 37914);













function ArtistTopTrackComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "as-media-order", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("togglePlay", function ArtistTopTrackComponent_ng_container_1_Template_as_media_order_togglePlay_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.togglePlayTrack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "as-track-main-info", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const isPlaying_r3 = ctx.ngrxLet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("index", ctx_r1.order)("isPlaying", isPlaying_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("track", ctx_r1.track)("isShowArtist", false)("isPlaying", isPlaying_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.albumRouteUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.track.album.name, " ");
  }
}
class ArtistTopTrackComponent {
  get track() {
    return this._track;
  }
  set track(value) {
    this._track = value;
    if (value) {
      this.albumRouteUrl = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouteUtil.getAlbumRouteUrl(value.album.id);
    }
  }
  constructor(playbackStore, playerApi) {
    this.playbackStore = playbackStore;
    this.playerApi = playerApi;
  }
  ngOnInit() {
    this.isTrackPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.SelectorUtil.getTrackPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.track?.id), this.playbackStore.playback$]));
  }
  togglePlayTrack(isPlaying) {
    if (!this.track?.uri) {
      return;
    }
    this.playerApi.togglePlay(isPlaying, {
      context_uri: this.track.album.uri,
      offset: {
        position: this.track.track_number - 1 || 0
      }
    }).subscribe(); //TODO: Refactor with component store live stream
  }
  static #_ = this.ɵfac = function ArtistTopTrackComponent_Factory(t) {
    return new (t || ArtistTopTrackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ArtistTopTrackComponent,
    selectors: [["as-artist-top-track"]],
    inputs: {
      order: "order",
      track: "track"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "artist-top-tracks-grid", "track-row", 3, "dblclick"], [4, "ngrxLet"], [1, "text-description"], [3, "togglePlay", "index", "isPlaying"], [3, "track", "isShowArtist", "isPlaying"], [1, "text-description", "link-subtle", "hover:underline", 3, "routerLink"]],
    template: function ArtistTopTrackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "as-media-table-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dblclick", function ArtistTopTrackComponent_Template_as_media_table_row_dblclick_0_listener() {
          return ctx.togglePlayTrack(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ArtistTopTrackComponent_ng_container_1_Template, 5, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngrxLet", ctx.isTrackPlaying$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, ctx.track.duration_ms), " ");
      }
    },
    dependencies: [_shared_ui_media_table_src_lib_media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_3__.MediaTableRowComponent, _shared_ui_media_order_src_lib_media_order_component__WEBPACK_IMPORTED_MODULE_4__.MediaOrderComponent, _shared_ui_track_main_info_src_lib_track_main_info_component__WEBPACK_IMPORTED_MODULE_5__.TrackMainInfoComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_10__.LetDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DurationPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpc3QtdG9wLXRyYWNrLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2FydGlzdC91aS9hcnRpc3QtdG9wLXRyYWNrL3NyYy9saWIvYXJ0aXN0LXRvcC10cmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 37368:
/*!********************************************************************************!*\
  !*** ./libs/web/artist/ui/artist-top-track/src/lib/artist-top-track.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTrackModule: () => (/* binding */ ArtistTopTrackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _artist_top_track_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist-top-track.component */ 20421);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-order */ 65129);
/* harmony import */ var _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/track-main-info */ 6310);
/* harmony import */ var _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/pipes/duration-pipe */ 65552);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);









class ArtistTopTrackModule {
  static #_ = this.ɵfac = function ArtistTopTrackModule_Factory(t) {
    return new (t || ArtistTopTrackModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ArtistTopTrackModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_2__.MediaOrderModule, _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__.TrackMainInfoModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DurationPipeModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ArtistTopTrackModule, {
    declarations: [_artist_top_track_component__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTrackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_2__.MediaOrderModule, _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__.TrackMainInfoModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DurationPipeModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_8__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_8__.PushPipe, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_artist_top_track_component__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTrackComponent]
  });
})();

/***/ }),

/***/ 76398:
/*!***********************************************************!*\
  !*** ./libs/web/artist/ui/artist-top-tracks/src/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTracksModule: () => (/* reexport safe */ _lib_artist_top_tracks_module__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTracksModule)
/* harmony export */ });
/* harmony import */ var _lib_artist_top_tracks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/artist-top-tracks.module */ 56814);


/***/ }),

/***/ 13455:
/*!*************************************************************************************!*\
  !*** ./libs/web/artist/ui/artist-top-tracks/src/lib/artist-top-tracks.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTracksComponent: () => (/* binding */ ArtistTopTracksComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_artist_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/artist/data-access */ 34482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _artist_top_track_src_lib_artist_top_track_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../artist-top-track/src/lib/artist-top-track.component */ 20421);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);





function ArtistTopTracksComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "as-artist-top-track", 1);
  }
  if (rf & 2) {
    const track_r1 = ctx.$implicit;
    const idx_r2 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("order", idx_r2 + 1)("track", track_r1);
  }
}
function ArtistTopTracksComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, ArtistTopTracksComponent_Conditional_2_For_1_Template, 1, 2, "as-artist-top-track", 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](vm_r3.data == null ? null : vm_r3.data.tracks);
  }
}
class ArtistTopTracksComponent {
  constructor(store) {
    this.store = store;
    this.vm$ = this.store.vm$;
  }
  static #_ = this.ɵfac = function ArtistTopTracksComponent_Factory(t) {
    return new (t || ArtistTopTracksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_spotify_web_artist_data_access__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTracksStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ArtistTopTracksComponent,
    selectors: [["as-artist-top-tracks"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_spotify_web_artist_data_access__WEBPACK_IMPORTED_MODULE_0__.ArtistTopTracksStore])],
    decls: 4,
    vars: 3,
    consts: [[1, "text-heading", "mt-2", "mb-4"], [3, "order", "track"]],
    template: function ArtistTopTracksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArtistTopTracksComponent_Conditional_2_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.vm$)) ? 2 : -1, tmp_0_0);
      }
    },
    dependencies: [_artist_top_track_src_lib_artist_top_track_component__WEBPACK_IMPORTED_MODULE_1__.ArtistTopTrackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 56814:
/*!**********************************************************************************!*\
  !*** ./libs/web/artist/ui/artist-top-tracks/src/lib/artist-top-tracks.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistTopTracksModule: () => (/* binding */ ArtistTopTracksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/pipes/duration-pipe */ 65552);
/* harmony import */ var _artist_top_tracks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist-top-tracks.component */ 13455);
/* harmony import */ var _angular_spotify_web_artist_ui_artist_top_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/artist/ui/artist-top-track */ 78675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class ArtistTopTracksModule {
  static #_ = this.ɵfac = function ArtistTopTracksModule_Factory(t) {
    return new (t || ArtistTopTracksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ArtistTopTracksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.DurationPipeModule, _angular_spotify_web_artist_ui_artist_top_track__WEBPACK_IMPORTED_MODULE_2__.ArtistTopTrackModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ArtistTopTracksModule, {
    declarations: [_artist_top_tracks_component__WEBPACK_IMPORTED_MODULE_1__.ArtistTopTracksComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.DurationPipeModule, _angular_spotify_web_artist_ui_artist_top_track__WEBPACK_IMPORTED_MODULE_2__.ArtistTopTrackModule],
    exports: [_artist_top_tracks_component__WEBPACK_IMPORTED_MODULE_1__.ArtistTopTracksComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_artist_feature_src_index_ts.js.map