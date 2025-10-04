"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_album_feature_detail_src_index_ts"],{

/***/ 41025:
/*!****************************************************!*\
  !*** ./libs/web/album/feature/detail/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumModule: () => (/* reexport safe */ _lib_album_module__WEBPACK_IMPORTED_MODULE_0__.AlbumModule)
/* harmony export */ });
/* harmony import */ var _lib_album_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/album.module */ 52922);


/***/ }),

/***/ 28731:
/*!******************************************************************!*\
  !*** ./libs/web/album/feature/detail/src/lib/album.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumComponent: () => (/* binding */ AlbumComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/album/data-access */ 77854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/ui/tracks-loading/src/lib/tracks-loading.component */ 95495);
/* harmony import */ var _shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/media-summary/src/lib/media-summary.component */ 52517);
/* harmony import */ var _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/play-button/src/lib/play-button.component */ 9261);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/media-table/src/lib/media-table-header/media-table-header.component */ 44491);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _ui_album_track_src_lib_album_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/album-track/src/lib/album-track.component */ 38123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);










function AlbumComponent_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "as-album-track", 9);
  }
  if (rf & 2) {
    const track_r4 = ctx.$implicit;
    const album_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("contextUri", album_r2.uri)("track", track_r4);
  }
}
function AlbumComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "as-media-summary", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3)(2, "as-play-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("togglePlay", function AlbumComponent_Conditional_1_Template_as_play_button_togglePlay_2_listener($event) {
      const album_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.toggleAlbum($event, album_r2 == null ? null : album_r2.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "as-media-table-header")(5, "div", 5)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "svg-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](12, AlbumComponent_Conditional_1_For_13_Template, 1, 2, "as-album-track", 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const album_r2 = ctx;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", album_r2.name)("imageUrl", album_r2.images[0] == null ? null : album_r2.images[0].url)("artist", album_r2.artists[0] == null ? null : album_r2.artists[0].name)("trackCount", album_r2.tracks.total)("releaseDate", album_r2.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("large", true)("primary", true)("isPlaying", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 9, ctx_r2.isAlbumPlaying$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("key", "clock");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](album_r2.tracks.items);
  }
}
function AlbumComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "as-tracks-loading", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("avatar", true);
  }
}
class AlbumComponent {
  constructor(store) {
    this.store = store;
    this.album$ = this.store.album$;
    this.isAlbumLoading$ = this.store.isCurrentAlbumLoading$;
    this.isAlbumPlaying$ = this.store.isAlbumPlaying$;
  }
  toggleAlbum(isPlaying, uri) {
    this.store.toggleAlbum({
      isPlaying,
      uri
    });
  }
  static #_ = this.ɵfac = function AlbumComponent_Factory(t) {
    return new (t || AlbumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__.AlbumStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AlbumComponent,
    selectors: [["as-album"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_0__.AlbumStore])],
    decls: 5,
    vars: 6,
    consts: [[1, "content-spacing"], [1, "px-8", "mb-5", "album-loading"], ["type", "Album", 1, "with-view-transition", 3, "title", "imageUrl", "artist", "trackCount", "releaseDate"], [1, "pt-0", "pb-6"], [3, "togglePlay", "large", "primary", "isPlaying"], [1, "album-tracks-grid"], [1, "text-xs", "uppercase", "ellipsis-one-line"], ["title", "duration", 3, "key"], [1, "mb-8"], [3, "contextUri", "track"], [3, "avatar"]],
    template: function AlbumComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AlbumComponent_Conditional_1_Template, 14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AlbumComponent_Conditional_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.album$)) ? 1 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, ctx.isAlbumLoading$) ? 3 : -1);
      }
    },
    dependencies: [_shared_ui_tracks_loading_src_lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_1__.TracksLoadingComponent, _shared_ui_media_summary_src_lib_media_summary_component__WEBPACK_IMPORTED_MODULE_2__.MediaSummaryComponent, _shared_ui_play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_3__.PlayButtonComponent, _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_4__.MediaTableHeaderComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__.SvgIconComponent, _ui_album_track_src_lib_album_track_component__WEBPACK_IMPORTED_MODULE_5__.AlbumTrackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO01BQ2hCIiwiZmlsZSI6ImFsYnVtLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2FsYnVtL2ZlYXR1cmUvZGV0YWlsL3NyYy9saWIvYWxidW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7TUFDaEI7O0FBRU4sNFRBQTRUIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 52922:
/*!***************************************************************!*\
  !*** ./libs/web/album/feature/detail/src/lib/album.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumModule: () => (/* binding */ AlbumModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _album_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album.component */ 28731);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/tracks-loading */ 94091);
/* harmony import */ var _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-summary */ 25557);
/* harmony import */ var _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/play-button */ 79225);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_spotify_web_album_ui_album_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-spotify/web/album/ui/album-track */ 95039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);











class AlbumModule {
  static #_ = this.ɵfac = function AlbumModule_Factory(t) {
    return new (t || AlbumModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AlbumModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_2__.MediaSummaryModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_3__.PlayButtonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_4__.MediaTableModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _angular_spotify_web_album_ui_album_track__WEBPACK_IMPORTED_MODULE_5__.AlbumTrackModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
      path: '',
      component: _album_component__WEBPACK_IMPORTED_MODULE_0__.AlbumComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AlbumModule, {
    declarations: [_album_component__WEBPACK_IMPORTED_MODULE_0__.AlbumComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_tracks_loading__WEBPACK_IMPORTED_MODULE_1__.TracksLoadingComponent, _angular_spotify_web_shared_ui_media_summary__WEBPACK_IMPORTED_MODULE_2__.MediaSummaryModule, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_3__.PlayButtonModule, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_4__.MediaTableModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _angular_spotify_web_album_ui_album_track__WEBPACK_IMPORTED_MODULE_5__.AlbumTrackModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_album_feature_detail_src_index_ts.js.map