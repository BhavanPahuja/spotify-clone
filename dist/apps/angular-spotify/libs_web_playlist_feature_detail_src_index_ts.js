"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_playlist_feature_detail_src_index_ts"],{

/***/ 20850:
/*!*******************************************************!*\
  !*** ./libs/web/playlist/feature/detail/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistModule: () => (/* reexport safe */ _lib_playlist_module__WEBPACK_IMPORTED_MODULE_0__.PlaylistModule)
/* harmony export */ });
/* harmony import */ var _lib_playlist_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/playlist.module */ 58110);


/***/ }),

/***/ 98815:
/*!************************************************************************!*\
  !*** ./libs/web/playlist/feature/detail/src/lib/playlist.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistComponent: () => (/* binding */ PlaylistComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/playlist/data-access */ 33675);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/media-summary/src/lib/media-summary.component */ 52517);
/* harmony import */ var _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/play-button/src/lib/play-button.component */ 9261);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/media-table/src/lib/media-table-header/media-table-header.component */ 44491);
/* harmony import */ var _ui_playlist_track_src_lib_playlist_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/playlist-track/src/lib/playlist-track.component */ 58364);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/ui/tracks-loading/src/lib/tracks-loading.component */ 95495);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);











function PlaylistComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "as-media-summary", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 8)(3, "as-play-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("togglePlay", function PlaylistComponent_Conditional_0_Template_as_play_button_togglePlay_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.togglePlaylist($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const playlist_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", playlist_r3.name)("imageUrl", playlist_r3.images[0] == null ? null : playlist_r3.images[0].url)("description", playlist_r3.description)("artist", playlist_r3.owner.display_name)("trackCount", playlist_r3.tracks.total)("likesCount", playlist_r3 == null ? null : playlist_r3.followers == null ? null : playlist_r3.followers.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("large", true)("primary", true)("isPlaying", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 9, ctx_r1.isPlaylistPlaying$));
  }
}
function PlaylistComponent_Conditional_14_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "as-playlist-track", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dblclick", function PlaylistComponent_Conditional_14_For_2_Conditional_0_Template_as_playlist_track_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const idx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.playTrack(idx_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r7 = ctx_r5.$implicit;
    const idx_r5 = ctx_r5.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7)("index", idx_r5)("contextUri", ctx_r1.getPlaylistContextUri(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, ctx_r1.playlistId$)));
  }
}
function PlaylistComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PlaylistComponent_Conditional_14_For_2_Conditional_0_Template, 2, 5, "as-playlist-track", 10);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, item_r7.track ? 0 : -1);
  }
}
function PlaylistComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, PlaylistComponent_Conditional_14_For_2_Template, 1, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.items);
  }
}
function PlaylistComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "as-tracks-loading", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("avatar", true);
  }
}
function PlaylistComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "as-tracks-loading", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", 10);
  }
}
class PlaylistComponent {
  constructor(store) {
    this.store = store;
    this.playlistId$ = this.store.playlistId$;
    this.playlist$ = this.store.playlist$;
    this.isPlaylistPlaying$ = this.store.isPlaylistPlaying$;
    this.isCurrentPlaylistLoading$ = this.store.isCurrentPlaylistLoading$;
    this.tracks$ = this.store.tracks$;
    this.isPlaylistTracksLoading$ = this.store.isPlaylistTracksLoading$;
  }
  togglePlaylist(isPlaying) {
    this.store.togglePlaylist({
      isPlaying
    });
  }
  playTrack(position) {
    this.store.playTrack({
      position
    });
  }
  getPlaylistContextUri(playlistId) {
    return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouteUtil.getPlaylistContextUri(playlistId || '');
  }
  static #_ = this.ɵfac = function PlaylistComponent_Factory(t) {
    return new (t || PlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.PlaylistStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PlaylistComponent,
    selectors: [["as-playlist"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_angular_spotify_web_playlist_data_access__WEBPACK_IMPORTED_MODULE_0__.PlaylistStore])],
    decls: 20,
    vars: 13,
    consts: [[1, "content-spacing"], [1, "px-8"], [1, "playlist-tracks-grid"], [1, "text-xs", "uppercase", "ellipsis-one-line"], ["title", "duration", 3, "key"], [1, "mb-8"], [1, "px-8", "mb-5"], ["type", "Playlist", 1, "with-view-transition", 3, "title", "imageUrl", "description", "artist", "trackCount", "likesCount"], [1, "pt-0", "pb-6", "playlist-action"], [3, "togglePlay", "large", "primary", "isPlaying"], [3, "item", "index", "contextUri"], [3, "dblclick", "item", "index", "contextUri"], [3, "avatar"], [3, "rows"]],
    template: function PlaylistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PlaylistComponent_Conditional_0_Template, 5, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "as-media-table-header")(4, "div", 2)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Album");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Date added");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, PlaylistComponent_Conditional_14_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, PlaylistComponent_Conditional_16_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PlaylistComponent_Conditional_18_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 5, ctx.playlist$)) ? 0 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("key", "clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](14, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 7, ctx.tracks$)) ? 14 : -1, tmp_2_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 9, ctx.isCurrentPlaylistLoading$) ? 16 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 11, ctx.isPlaylistTracksLoading$) ? 18 : -1);
      }
    },
    dependencies: [_shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_2__.MediaSummaryComponent, _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_3__.PlayButtonComponent, _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_4__.MediaTableHeaderComponent, _ui_playlist_track_src_lib_playlist_track_component__WEBPACK_IMPORTED_MODULE_5__.PlaylistTrackComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_6__.TracksLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO01BQ2hCIiwiZmlsZSI6InBsYXlsaXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3BsYXlsaXN0L2ZlYXR1cmUvZGV0YWlsL3NyYy9saWIvcGxheWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7TUFDaEI7O0FBRU4sb1VBQW9VIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 58110:
/*!*********************************************************************!*\
  !*** ./libs/web/playlist/feature/detail/src/lib/playlist.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistModule: () => (/* binding */ PlaylistModule)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-summary */ 25557);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/play-button */ 79225);
/* harmony import */ var _angular_spotify_web_playlist_ui_playlist_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/playlist/ui/playlist-track */ 24513);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist.component */ 98815);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/tracks-loading */ 94091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);













class PlaylistModule {
  static #_ = this.ɵfac = function PlaylistModule_Factory(t) {
    return new (t || PlaylistModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: PlaylistModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_0__.MediaSummaryModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_2__.PlayButtonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_playlist_ui_playlist_track__WEBPACK_IMPORTED_MODULE_3__.PlaylistTrackModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
      path: `:${_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_5__.RouterUtil.Configuration.PlaylistId}`,
      component: _playlist_component__WEBPACK_IMPORTED_MODULE_4__.PlaylistComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PlaylistModule, {
    declarations: [_playlist_component__WEBPACK_IMPORTED_MODULE_4__.PlaylistComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_0__.MediaSummaryModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_2__.PlayButtonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_1__.MediaTableModule, _angular_spotify_web_playlist_ui_playlist_track__WEBPACK_IMPORTED_MODULE_3__.PlaylistTrackModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.PushPipe, _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_6__.TracksLoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_playlist_component__WEBPACK_IMPORTED_MODULE_4__.PlaylistComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_playlist_feature_detail_src_index_ts.js.map