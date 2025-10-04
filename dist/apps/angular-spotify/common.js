"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["common"],{

/***/ 95039:
/*!****************************************************!*\
  !*** ./libs/web/album/ui/album-track/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumTrackModule: () => (/* reexport safe */ _lib_album_track_module__WEBPACK_IMPORTED_MODULE_0__.AlbumTrackModule)
/* harmony export */ });
/* harmony import */ var _lib_album_track_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/album-track.module */ 60490);


/***/ }),

/***/ 38123:
/*!************************************************************************!*\
  !*** ./libs/web/album/ui/album-track/src/lib/album-track.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumTrackComponent: () => (/* binding */ AlbumTrackComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/media-table/src/lib/media-table-row/media-table-row.component */ 46355);
/* harmony import */ var _shared_ui_media_order_src_lib_media_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/media-order/src/lib/media-order.component */ 81553);
/* harmony import */ var _shared_ui_track_main_info_src_lib_track_main_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ui/track-main-info/src/lib/track-main-info.component */ 49997);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/pipes/duration-pipe/src/lib/duration.pipe */ 37914);












function AlbumTrackComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "as-media-order", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("togglePlay", function AlbumTrackComponent_ng_container_1_Template_as_media_order_togglePlay_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.togglePlayTrack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "as-track-main-info", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const isPlaying_r3 = ctx.ngrxLet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("index", ctx_r1.trackIndex)("isPlaying", isPlaying_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("track", ctx_r1.track)("isPlaying", isPlaying_r3);
  }
}
class AlbumTrackComponent {
  get trackIndex() {
    return this.index === undefined ? this.track.track_number : this.index;
  }
  constructor(playbackStore, playerApi) {
    this.playbackStore = playbackStore;
    this.playerApi = playerApi;
  }
  ngOnInit() {
    this.isTrackPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.getTrackPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.track.id), this.playbackStore.playback$]));
  }
  togglePlayTrack(isPlaying) {
    if (!this.contextUri) {
      return;
    }
    this.playerApi.togglePlay(isPlaying, {
      context_uri: this.contextUri,
      offset: {
        position: this.track.track_number - 1
      }
    }).subscribe(); //TODO: Refactor with component store live stream
  }
  static #_ = this.ɵfac = function AlbumTrackComponent_Factory(t) {
    return new (t || AlbumTrackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AlbumTrackComponent,
    selectors: [["as-album-track"]],
    inputs: {
      track: "track",
      contextUri: "contextUri",
      index: "index"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "album-tracks-grid", "track-row", 3, "dblclick"], [4, "ngrxLet"], [1, "text-description"], [3, "togglePlay", "index", "isPlaying"], [3, "track", "isPlaying"]],
    template: function AlbumTrackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "as-media-table-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dblclick", function AlbumTrackComponent_Template_as_media_table_row_dblclick_0_listener() {
          return ctx.togglePlayTrack(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AlbumTrackComponent_ng_container_1_Template, 3, 4, "ng-container", 1);
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
    dependencies: [_shared_ui_media_table_src_lib_media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_3__.MediaTableRowComponent, _shared_ui_media_order_src_lib_media_order_component__WEBPACK_IMPORTED_MODULE_4__.MediaOrderComponent, _shared_ui_track_main_info_src_lib_track_main_info_component__WEBPACK_IMPORTED_MODULE_5__.TrackMainInfoComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_10__.LetDirective, _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DurationPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS10cmFjay5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2FsYnVtL3VpL2FsYnVtLXRyYWNrL3NyYy9saWIvYWxidW0tdHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 60490:
/*!*********************************************************************!*\
  !*** ./libs/web/album/ui/album-track/src/lib/album-track.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumTrackModule: () => (/* binding */ AlbumTrackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _album_track_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-track.component */ 38123);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-order */ 65129);
/* harmony import */ var _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/track-main-info */ 6310);
/* harmony import */ var _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/pipes/duration-pipe */ 65552);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








class AlbumTrackModule {
  static #_ = this.ɵfac = function AlbumTrackModule_Factory(t) {
    return new (t || AlbumTrackModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AlbumTrackModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_2__.MediaOrderModule, _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__.TrackMainInfoModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DurationPipeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AlbumTrackModule, {
    declarations: [_album_track_component__WEBPACK_IMPORTED_MODULE_0__.AlbumTrackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_2__.MediaOrderModule, _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__.TrackMainInfoModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DurationPipeModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_7__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_7__.PushPipe],
    exports: [_album_track_component__WEBPACK_IMPORTED_MODULE_0__.AlbumTrackComponent]
  });
})();

/***/ }),

/***/ 24513:
/*!**********************************************************!*\
  !*** ./libs/web/playlist/ui/playlist-track/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTrackModule: () => (/* reexport safe */ _lib_playlist_track_module__WEBPACK_IMPORTED_MODULE_0__.PlaylistTrackModule)
/* harmony export */ });
/* harmony import */ var _lib_playlist_track_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/playlist-track.module */ 46091);


/***/ }),

/***/ 58364:
/*!*********************************************************************************!*\
  !*** ./libs/web/playlist/ui/playlist-track/src/lib/playlist-track.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTrackComponent: () => (/* binding */ PlaylistTrackComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/media-table/src/lib/media-table-row/media-table-row.component */ 46355);
/* harmony import */ var _shared_ui_track_main_info_src_lib_track_main_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/track-main-info/src/lib/track-main-info.component */ 49997);
/* harmony import */ var _shared_ui_media_order_src_lib_media_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ui/media-order/src/lib/media-order.component */ 81553);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/pipes/duration-pipe/src/lib/duration.pipe */ 37914);














function PlaylistTrackComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "as-media-order", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("togglePlay", function PlaylistTrackComponent_Conditional_0_ng_container_1_Template_as_media_order_togglePlay_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.togglePlayTrack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "as-track-main-info", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const isPlaying_r3 = ctx.ngrxLet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("index", ctx_r1.index + 1)("isPlaying", isPlaying_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("track", ctx_r1.item.track)("isPlaying", isPlaying_r3);
  }
}
function PlaylistTrackComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "as-media-table-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PlaylistTrackComponent_Conditional_0_ng_container_1_Template, 3, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngrxLet", ctx_r1.isTrackPlaying$);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.albumRouteUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.item.track.album == null ? null : ctx_r1.item.track.album.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 6, ctx_r1.item.added_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 9, ctx_r1.item.added_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 11, ctx_r1.item.track.duration_ms), " ");
  }
}
class PlaylistTrackComponent {
  get item() {
    return this._item;
  }
  set item(value) {
    this._item = value;
    if (value?.track) {
      this.albumRouteUrl = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouteUtil.getAlbumRouteUrl(value.track.album.id);
    }
  }
  constructor(playbackStore, playerApi) {
    this.playbackStore = playbackStore;
    this.playerApi = playerApi;
    this.type = 'PLAYLIST';
  }
  ngOnInit() {
    this.isTrackPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.SelectorUtil.getTrackPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this._item?.track.id), this.playbackStore.playback$]));
  }
  togglePlayTrack(isPlaying) {
    if (!this.contextUri) {
      return;
    }
    this.playerApi.togglePlay(isPlaying, {
      context_uri: this.contextUri,
      offset: {
        position: this.type === 'PLAYLIST' ? this.index : this.item.track.track_number - 1
      }
    }).subscribe(); //TODO: Refactor with component store live stream
  }
  getAlbumRouteUrl(album) {
    return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouteUtil.getAlbumRouteUrl(album.id);
  }
  static #_ = this.ɵfac = function PlaylistTrackComponent_Factory(t) {
    return new (t || PlaylistTrackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PlaylistTrackComponent,
    selectors: [["as-playlist-track"]],
    inputs: {
      item: "item",
      index: "index",
      contextUri: "contextUri",
      type: "type"
    },
    decls: 1,
    vars: 1,
    consts: [[1, "playlist-tracks-grid", "track-row"], [4, "ngrxLet"], [1, "text-description", "link-subtle", "hover:underline", 3, "routerLink"], [1, "text-description", 3, "title"], [1, "text-description"], [3, "togglePlay", "index", "isPlaying"], [3, "track", "isPlaying"]],
    template: function PlaylistTrackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PlaylistTrackComponent_Conditional_0_Template, 11, 13, "as-media-table-row", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, ctx.item ? 0 : -1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_ui_media_table_src_lib_media_table_row_media_table_row_component__WEBPACK_IMPORTED_MODULE_3__.MediaTableRowComponent, _shared_ui_track_main_info_src_lib_track_main_info_component__WEBPACK_IMPORTED_MODULE_4__.TrackMainInfoComponent, _shared_ui_media_order_src_lib_media_order_component__WEBPACK_IMPORTED_MODULE_5__.MediaOrderComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _shared_pipes_duration_pipe_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DurationPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5bGlzdC10cmFjay5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3BsYXlsaXN0L3VpL3BsYXlsaXN0LXRyYWNrL3NyYy9saWIvcGxheWxpc3QtdHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 46091:
/*!******************************************************************************!*\
  !*** ./libs/web/playlist/ui/playlist-track/src/lib/playlist-track.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTrackModule: () => (/* binding */ PlaylistTrackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _playlist_track_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist-track.component */ 58364);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/pipes/duration-pipe */ 65552);
/* harmony import */ var _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/track-main-info */ 6310);
/* harmony import */ var _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-order */ 65129);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);









class PlaylistTrackModule {
  static #_ = this.ɵfac = function PlaylistTrackModule_Factory(t) {
    return new (t || PlaylistTrackModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PlaylistTrackModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_2__.DurationPipeModule, _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__.TrackMainInfoModule, _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_4__.MediaOrderModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PlaylistTrackModule, {
    declarations: [_playlist_track_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistTrackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_2__.DurationPipeModule, _angular_spotify_web_shared_ui_track_main_info__WEBPACK_IMPORTED_MODULE_3__.TrackMainInfoModule, _angular_spotify_web_shared_ui_media_order__WEBPACK_IMPORTED_MODULE_4__.MediaOrderModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_8__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_8__.PushPipe],
    exports: [_playlist_track_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistTrackComponent]
  });
})();

/***/ }),

/***/ 89037:
/*!*******************************************************!*\
  !*** ./libs/web/shared/ui/playlist-list/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistListModule: () => (/* reexport safe */ _lib_playlist_list_module__WEBPACK_IMPORTED_MODULE_0__.PlaylistListModule)
/* harmony export */ });
/* harmony import */ var _lib_playlist_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/playlist-list.module */ 42608);


/***/ }),

/***/ 13517:
/*!*****************************************************************************!*\
  !*** ./libs/web/shared/ui/playlist-list/src/lib/playlist-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistListComponent: () => (/* binding */ PlaylistListComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/shared/view-transition */ 69733);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../media/src/lib/card.component */ 66285);
/* harmony import */ var _spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../spinner/src/lib/spinner.component */ 96101);









function PlaylistListComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "as-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("togglePlay", function PlaylistListComponent_Conditional_0_For_2_Template_as_card_togglePlay_0_listener($event) {
      const playlist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.togglePlay($event, playlist_r2.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.viewTransitionName(playlist_r2))("title", playlist_r2.name)("uri", playlist_r2.uri)("description", playlist_r2.description)("imageUrl", playlist_r2.images[0] == null ? null : playlist_r2.images[0].url)("routerUrl", playlist_r2.routeUrl);
  }
}
function PlaylistListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, PlaylistListComponent_Conditional_0_For_2_Template, 1, 6, "as-card", 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.playlists.items);
  }
}
function PlaylistListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "as-spinner");
  }
}
class PlaylistListComponent {
  constructor(playerApi) {
    this.playerApi = playerApi;
    this.transitionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_0__.CurrentViewTransitionService);
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
    const transitionAlbumId = (0,_angular_spotify_shared_view_transition__WEBPACK_IMPORTED_MODULE_0__.getViewTransitionParamValue)(transition, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.Configuration.PlaylistId);
    const withViewTransition = transitionAlbumId === item.id;
    return withViewTransition ? 'with-view-transition' : '';
  }
  static #_ = this.ɵfac = function PlaylistListComponent_Factory(t) {
    return new (t || PlaylistListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PlaylistListComponent,
    selectors: [["as-playlist-list"]],
    inputs: {
      playlists: "playlists",
      isLoading: "isLoading"
    },
    decls: 2,
    vars: 2,
    consts: [[1, "common-grid"], [3, "ngClass", "title", "uri", "description", "imageUrl", "routerUrl"], [3, "togglePlay", "ngClass", "title", "uri", "description", "imageUrl", "routerUrl"]],
    template: function PlaylistListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PlaylistListComponent_Conditional_0_Template, 3, 0, "div", 0)(1, PlaylistListComponent_Conditional_1_Template, 1, 0, "as-spinner");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, ctx.playlists ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](1, ctx.isLoading ? 1 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlsaXN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicGxheWxpc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9wbGF5bGlzdC1saXN0L3NyYy9saWIvcGxheWxpc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLG9UQUFvVCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 42608:
/*!**************************************************************************!*\
  !*** ./libs/web/shared/ui/playlist-list/src/lib/playlist-list.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistListModule: () => (/* binding */ PlaylistListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _playlist_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist-list.component */ 13517);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class PlaylistListModule {
  static #_ = this.ɵfac = function PlaylistListModule_Factory(t) {
    return new (t || PlaylistListModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PlaylistListModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlaylistListModule, {
    declarations: [_playlist_list_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule],
    exports: [_playlist_list_component__WEBPACK_IMPORTED_MODULE_0__.PlaylistListComponent]
  });
})();

/***/ }),

/***/ 65691:
/*!**********************************************************!*\
  !*** ./libs/web/shared/ui/work-in-progress/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkInProgressModule: () => (/* reexport safe */ _lib_work_in_progress_module__WEBPACK_IMPORTED_MODULE_0__.WorkInProgressModule)
/* harmony export */ });
/* harmony import */ var _lib_work_in_progress_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/work-in-progress.module */ 21418);


/***/ }),

/***/ 34763:
/*!***********************************************************************************!*\
  !*** ./libs/web/shared/ui/work-in-progress/src/lib/work-in-progress.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkInProgressComponent: () => (/* binding */ WorkInProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class WorkInProgressComponent {
  constructor() {
    this.featureName = '';
  }
  static #_ = this.ɵfac = function WorkInProgressComponent_Factory(t) {
    return new (t || WorkInProgressComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WorkInProgressComponent,
    selectors: [["as-work-in-progress"]],
    inputs: {
      featureName: "featureName"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "text-3xl", "text-white"], [1, "mt-3", "text-white", "text-opacity-90"]],
    template: function WorkInProgressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDEA7 Work in Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " is currently under development.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("font-bold", !!ctx.featureName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featureName || "feature");
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstaW4tcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoid29yay1pbi1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS93b3JrLWluLXByb2dyZXNzL3NyYy9saWIvd29yay1pbi1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLDRUQUE0VCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 21418:
/*!********************************************************************************!*\
  !*** ./libs/web/shared/ui/work-in-progress/src/lib/work-in-progress.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkInProgressModule: () => (/* binding */ WorkInProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _work_in_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-in-progress.component */ 34763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class WorkInProgressModule {
  static #_ = this.ɵfac = function WorkInProgressModule_Factory(t) {
    return new (t || WorkInProgressModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: WorkInProgressModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WorkInProgressModule, {
    declarations: [_work_in_progress_component__WEBPACK_IMPORTED_MODULE_0__.WorkInProgressComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_work_in_progress_component__WEBPACK_IMPORTED_MODULE_0__.WorkInProgressComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=common.js.map