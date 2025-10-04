"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_tracks_feature_src_index_ts"],{

/***/ 47677:
/*!**************************************************!*\
  !*** ./libs/web/tracks/data-access/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksStore: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TracksStore)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 43677);


/***/ }),

/***/ 43677:
/*!******************************************************!*\
  !*** ./libs/web/tracks/data-access/src/lib/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.TracksStore)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ 43895);


/***/ }),

/***/ 43895:
/*!************************************************************!*\
  !*** ./libs/web/tracks/data-access/src/lib/store/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksStore: () => (/* reexport safe */ _tracks_store__WEBPACK_IMPORTED_MODULE_0__.TracksStore)
/* harmony export */ });
/* harmony import */ var _tracks_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracks.store */ 77096);


/***/ }),

/***/ 77096:
/*!*******************************************************************!*\
  !*** ./libs/web/tracks/data-access/src/lib/store/tracks.store.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksStore: () => (/* binding */ TracksStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component-store */ 72743);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);






class TracksStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__.ComponentStore {
  constructor(trackApi, playerApi) {
    super({});
    this.trackApi = trackApi;
    this.playerApi = playerApi;
    this.loadTracks = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.patchState({
        status: 'loading',
        error: null
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.trackApi.getUserSavedTracks().pipe((0,_ngrx_component_store__WEBPACK_IMPORTED_MODULE_5__.tapResponse)(response => {
      this.patchState({
        data: response,
        status: 'success',
        error: ''
      });
    }, error => {
      this.patchState({
        status: 'error',
        error: error
      });
    })))));
    this.playTrack = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({
      track
    }) => this.playerApi.play({
      context_uri: track.album.uri,
      offset: {
        position: track.track_number - 1
      }
    }))));
    this.vm$ = this.select(s => ({
      ...s,
      isLoading: _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.isLoading(s)
    }));
  }
  static #_ = this.ɵfac = function TracksStore_Factory(t) {
    return new (t || TracksStore)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.TrackApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: TracksStore,
    factory: TracksStore.ɵfac
  });
}

/***/ }),

/***/ 84730:
/*!**********************************************!*\
  !*** ./libs/web/tracks/feature/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksModule: () => (/* reexport safe */ _lib_tracks_module__WEBPACK_IMPORTED_MODULE_0__.TracksModule)
/* harmony export */ });
/* harmony import */ var _lib_tracks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tracks.module */ 80540);


/***/ }),

/***/ 73097:
/*!*************************************************************!*\
  !*** ./libs/web/tracks/feature/src/lib/tracks.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksComponent: () => (/* binding */ TracksComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_tracks_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/tracks/data-access */ 47677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/tracks-loading/src/lib/tracks-loading.component */ 95495);
/* harmony import */ var _shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/media-summary/src/lib/media-summary.component */ 52517);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/media-table/src/lib/media-table-header/media-table-header.component */ 44491);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _playlist_ui_playlist_track_src_lib_playlist_track_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../playlist/ui/playlist-track/src/lib/playlist-track.component */ 58364);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);









function TracksComponent_Conditional_1_For_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "as-playlist-track", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function TracksComponent_Conditional_1_For_14_Conditional_0_Template_as_playlist_track_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.playTrack(item_r2.track));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const item_r2 = ctx_r3.$implicit;
    const idx_r5 = ctx_r3.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", item_r2)("index", idx_r5)("contextUri", item_r2.track.album.uri);
  }
}
function TracksComponent_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TracksComponent_Conditional_1_For_14_Conditional_0_Template, 1, 3, "as-playlist-track", 7);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, item_r2.track ? 0 : -1);
  }
}
function TracksComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "as-tracks-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("avatar", true);
  }
}
function TracksComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "as-media-summary", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "as-media-table-header")(2, "div", 2)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Album");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Date added");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](13, TracksComponent_Conditional_1_For_14_Template, 1, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TracksComponent_Conditional_1_Conditional_15_Template, 2, 1, "div", 6);
  }
  if (rf & 2) {
    const vm_r6 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imageUrl", "/assets/images/totoro.jpg")("title", "Liked Songs")("trackCount", vm_r6.data == null ? null : vm_r6.data.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("key", "clock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](vm_r6.data == null ? null : vm_r6.data.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](15, vm_r6.isLoading ? 15 : -1);
  }
}
class TracksComponent {
  constructor(store) {
    this.store = store;
    this.vm$ = this.store.vm$;
  }
  ngOnInit() {
    this.store.loadTracks();
  }
  playTrack(track) {
    this.store.playTrack({
      track
    });
  }
  static #_ = this.ɵfac = function TracksComponent_Factory(t) {
    return new (t || TracksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_spotify_web_tracks_data_access__WEBPACK_IMPORTED_MODULE_0__.TracksStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TracksComponent,
    selectors: [["as-tracks"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_spotify_web_tracks_data_access__WEBPACK_IMPORTED_MODULE_0__.TracksStore])],
    decls: 3,
    vars: 3,
    consts: [[1, "content-spacing"], ["type", "Playlist", 3, "imageUrl", "title", "trackCount"], [1, "playlist-tracks-grid"], [1, "text-xs", "uppercase", "ellipsis-one-line"], ["title", "duration", 3, "key"], [1, "mb-8"], [1, "px-8", "mb-5", "album-loading"], ["type", "LIKE_SONGS", 3, "item", "index", "contextUri"], ["type", "LIKE_SONGS", 3, "dblclick", "item", "index", "contextUri"], [3, "avatar"]],
    template: function TracksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TracksComponent_Conditional_1_Template, 16, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx.vm$)) ? 1 : -1, tmp_0_0);
      }
    },
    dependencies: [_shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_1__.TracksLoadingComponent, _shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_2__.MediaSummaryComponent, _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_3__.MediaTableHeaderComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent, _playlist_ui_playlist_track_src_lib_playlist_track_component__WEBPACK_IMPORTED_MODULE_4__.PlaylistTrackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFja3MuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3RyYWNrcy9mZWF0dXJlL3NyYy9saWIvdHJhY2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 80540:
/*!**********************************************************!*\
  !*** ./libs/web/tracks/feature/src/lib/tracks.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksModule: () => (/* binding */ TracksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _tracks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracks.component */ 73097);
/* harmony import */ var _angular_spotify_web_shared_ui_work_in_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/work-in-progress */ 65691);
/* harmony import */ var _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/tracks-loading */ 94091);
/* harmony import */ var _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-summary */ 25557);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_spotify_web_playlist_ui_playlist_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/playlist/ui/playlist-track */ 24513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);











class TracksModule {
  static #_ = this.ɵfac = function TracksModule_Factory(t) {
    return new (t || TracksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: TracksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_work_in_progress__WEBPACK_IMPORTED_MODULE_1__.WorkInProgressModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: '',
      component: _tracks_component__WEBPACK_IMPORTED_MODULE_0__.TracksComponent
    }]), _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_3__.MediaSummaryModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_4__.MediaTableModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconComponent, _angular_spotify_web_playlist_ui_playlist_track__WEBPACK_IMPORTED_MODULE_5__.PlaylistTrackModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TracksModule, {
    declarations: [_tracks_component__WEBPACK_IMPORTED_MODULE_0__.TracksComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_work_in_progress__WEBPACK_IMPORTED_MODULE_1__.WorkInProgressModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_2__.TracksLoadingComponent, _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_3__.MediaSummaryModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_4__.MediaTableModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconComponent, _angular_spotify_web_playlist_ui_playlist_track__WEBPACK_IMPORTED_MODULE_5__.PlaylistTrackModule],
    exports: [_tracks_component__WEBPACK_IMPORTED_MODULE_0__.TracksComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_tracks_feature_src_index_ts.js.map