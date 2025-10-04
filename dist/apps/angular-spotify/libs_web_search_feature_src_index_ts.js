"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_search_feature_src_index_ts"],{

/***/ 77373:
/*!**************************************************!*\
  !*** ./libs/web/search/data-access/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchStore: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.SearchStore)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ 45687);


/***/ }),

/***/ 45687:
/*!************************************************************!*\
  !*** ./libs/web/search/data-access/src/lib/store/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchStore: () => (/* reexport safe */ _search_store__WEBPACK_IMPORTED_MODULE_0__.SearchStore)
/* harmony export */ });
/* harmony import */ var _search_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.store */ 4476);


/***/ }),

/***/ 4476:
/*!*******************************************************************!*\
  !*** ./libs/web/search/data-access/src/lib/store/search.store.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchStore: () => (/* binding */ SearchStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component-store */ 72743);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);






class SearchStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__.ComponentStore {
  constructor(searchApiService) {
    super({
      data: {}
    });
    this.searchApiService = searchApiService;
    this.data$ = this.select(s => s.data);
    this.status$ = this.select(s => s.status);
    this.error$ = this.select(s => s.error);
    this.isLoading$ = this.select(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.isLoading);
    this.vm$ = this.select(this.data$, this.error$, this.status$, (data, error, status) => ({
      data,
      error,
      status
    }), {
      debounce: true
    });
    this.search = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(term => !!term), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.patchState({
      status: 'loading',
      error: null
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(term => this.searchApiService.search(term, {
      limit: 8
    }).pipe((0,_ngrx_component_store__WEBPACK_IMPORTED_MODULE_6__.tapResponse)(data => {
      this.patchState({
        data,
        status: 'success',
        error: ''
      });
    }, error => this.patchState({
      status: 'error',
      error: error
    }))))));
  }
  static #_ = this.ɵfac = function SearchStore_Factory(t) {
    return new (t || SearchStore)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.SearchApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: SearchStore,
    factory: SearchStore.ɵfac
  });
}

/***/ }),

/***/ 79482:
/*!**********************************************!*\
  !*** ./libs/web/search/feature/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModule: () => (/* reexport safe */ _lib_search_module__WEBPACK_IMPORTED_MODULE_0__.SearchModule)
/* harmony export */ });
/* harmony import */ var _lib_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/search.module */ 44648);


/***/ }),

/***/ 52565:
/*!*************************************************************!*\
  !*** ./libs/web/search/feature/src/lib/search.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 37143);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_spotify_web_search_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/search/data-access */ 77373);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_input_src_lib_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/input/src/lib/input.component */ 59585);
/* harmony import */ var _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/spinner/src/lib/spinner.component */ 96101);
/* harmony import */ var _shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/media/src/lib/card.component */ 66285);
/* harmony import */ var _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ui/media-table/src/lib/media-table-header/media-table-header.component */ 44491);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _album_ui_album_track_src_lib_album_track_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../album/ui/album-track/src/lib/album-track.component */ 38123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);



















function SearchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "as-spinner", 3);
  }
}
function SearchComponent_Conditional_5_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "as-album-track", 9);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("track", item_r1)("contextUri", item_r1.album.uri)("index", idx_r2 + 1);
  }
}
function SearchComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "as-media-table-header")(4, "div", 5)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "svg-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](11, SearchComponent_Conditional_5_Conditional_0_For_12_Template, 1, 3, "as-album-track", 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("key", "clock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](data_r3 == null ? null : data_r3.tracks == null ? null : data_r3.tracks.items);
  }
}
function SearchComponent_Conditional_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "as-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("togglePlay", function SearchComponent_Conditional_5_Conditional_1_For_5_Template_as_card_togglePlay_0_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.togglePlay($event, item_r5.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", item_r5.name)("uri", item_r5.uri)("imageUrl", item_r5.images[0] == null ? null : item_r5.images[0].url)("routerUrl", "/artist/" + item_r5.id)("description", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 6, item_r5.type))("roundedImage", true);
  }
}
function SearchComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, SearchComponent_Conditional_5_Conditional_1_For_5_Template, 2, 8, "as-card", 11, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](data_r3 == null ? null : data_r3.artists == null ? null : data_r3.artists.items);
  }
}
function SearchComponent_Conditional_5_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "as-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("togglePlay", function SearchComponent_Conditional_5_Conditional_2_For_5_Template_as_card_togglePlay_0_listener($event) {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.togglePlay($event, item_r8.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", item_r8.name)("uri", item_r8.uri)("description", item_r8.artists[0].name)("imageUrl", item_r8.images[0] == null ? null : item_r8.images[0].url)("routerUrl", "/albums/" + item_r8.id);
  }
}
function SearchComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Albums");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, SearchComponent_Conditional_5_Conditional_2_For_5_Template, 1, 5, "as-card", 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](data_r3 == null ? null : data_r3.albums == null ? null : data_r3.albums.items);
  }
}
function SearchComponent_Conditional_5_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "as-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("togglePlay", function SearchComponent_Conditional_5_Conditional_3_For_5_Template_as_card_togglePlay_0_listener($event) {
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.togglePlay($event, item_r10.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", item_r10.name)("uri", item_r10.uri)("description", item_r10.description)("imageUrl", item_r10.images[0] == null ? null : item_r10.images[0].url)("routerUrl", "/playlist/" + item_r10.id);
  }
}
function SearchComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, SearchComponent_Conditional_5_Conditional_3_For_5_Template, 1, 5, "as-card", 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](data_r3 == null ? null : data_r3.playlists == null ? null : data_r3.playlists.items);
  }
}
function SearchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_Conditional_5_Conditional_0_Template, 13, 1, "div")(1, SearchComponent_Conditional_5_Conditional_1_Template, 6, 0, "div")(2, SearchComponent_Conditional_5_Conditional_2_Template, 6, 0, "div")(3, SearchComponent_Conditional_5_Conditional_3_Template, 6, 0, "div");
  }
  if (rf & 2) {
    const data_r3 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](0, (data_r3 == null ? null : data_r3.tracks == null ? null : data_r3.tracks.items == null ? null : data_r3.tracks.items.length) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, (data_r3 == null ? null : data_r3.artists == null ? null : data_r3.artists.items == null ? null : data_r3.artists.items.length) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](2, (data_r3 == null ? null : data_r3.albums == null ? null : data_r3.albums.items == null ? null : data_r3.albums.items.length) ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](3, (data_r3 == null ? null : data_r3.playlists == null ? null : data_r3.playlists.items == null ? null : data_r3.playlists.items.length) ? 3 : -1);
  }
}
let SearchComponent = class SearchComponent {
  constructor(router, store, playerApi, activatedRoute) {
    this.router = router;
    this.store = store;
    this.playerApi = playerApi;
    this.activatedRoute = activatedRoute;
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('');
    this.data$ = this.store.data$;
    this.isLoading$ = this.store.isLoading$;
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(term => term.length >= 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(term => {
      this.syncQueryParams(term);
      this.store.search(term);
    })).subscribe();
    // assign query param if available
    const queryParam = this.activatedRoute.snapshot.queryParams[_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.SearchQueryParam];
    if (queryParam) {
      this.searchControl.patchValue(queryParam);
    }
  }
  togglePlay(isPlaying, contextUri) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: contextUri
    }).subscribe();
  }
  syncQueryParams(term) {
    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        [_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouterUtil.Configuration.SearchQueryParam]: term
      },
      replaceUrl: true
    });
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_spotify_web_search_data_access__WEBPACK_IMPORTED_MODULE_1__.SearchStore), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["as-search"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_angular_spotify_web_search_data_access__WEBPACK_IMPORTED_MODULE_1__.SearchStore])],
    decls: 7,
    vars: 11,
    consts: [[1, "mb-6", "content-spacing"], [1, "search-input-container"], ["icon", "search", "placeholder", "Artists, songs, albums, or playlists", 1, "search-control", 3, "control", "iconSize", "autoFocus", "rounded", "enableClearButton"], [1, "ml-4"], [1, "mt-8", "mb-4", "text-heading"], [1, "album-tracks-grid"], [1, "text-xs", "uppercase", "ellipsis-one-line"], ["title", "Duration", 3, "key"], [1, "mb-8"], [3, "track", "contextUri", "index"], [1, "common-grid"], [3, "title", "uri", "imageUrl", "routerUrl", "description", "roundedImage"], [3, "togglePlay", "title", "uri", "imageUrl", "routerUrl", "description", "roundedImage"], [3, "title", "uri", "description", "imageUrl", "routerUrl"], [3, "togglePlay", "title", "uri", "description", "imageUrl", "routerUrl"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "as-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SearchComponent_Conditional_3_Template, 1, 0, "as-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SearchComponent_Conditional_5_Template, 4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.searchControl)("iconSize", "lg")("autoFocus", true)("rounded", true)("enableClearButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 7, ctx.isLoading$) ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](5, (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 9, ctx.data$)) ? 5 : -1, tmp_6_0);
      }
    },
    dependencies: [_shared_ui_input_src_lib_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent, _shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _shared_ui_media_table_src_lib_media_table_header_media_table_header_component__WEBPACK_IMPORTED_MODULE_6__.MediaTableHeaderComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_16__.SvgIconComponent, _album_ui_album_track_src_lib_album_track_component__WEBPACK_IMPORTED_MODULE_7__.AlbumTrackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.TitleCasePipe],
    styles: [".search-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  min-height: 56px;\n}\n.search-input-container[_ngcontent-%COMP%]   .search-control[_ngcontent-%COMP%] {\n  width: 364px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGFBQUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFDQTtBQURBO0FBR0E7RUFDRSxZQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xuICBAYXBwbHkgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBcbiAgLnNlYXJjaC1jb250cm9sIHtcbiAgICB3aWR0aDogMzY0cHg7XG4gIH0gIFxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NlYXJjaC9mZWF0dXJlL3NyYy9saWIvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsYUFBQTtFQUFBLGVBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FBREE7QUFHQTtFQUNFLFlBQUE7QUFDSjtBQUdBLGdmQUFnZiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgQGFwcGx5IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlcjtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgXG4gIC5zZWFyY2gtY29udHJvbCB7XG4gICAgd2lkdGg6IDM2NHB4O1xuICB9ICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
};
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)(), (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router, _angular_spotify_web_search_data_access__WEBPACK_IMPORTED_MODULE_1__.SearchStore, _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService, _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute])], SearchComponent);


/***/ }),

/***/ 44648:
/*!**********************************************************!*\
  !*** ./libs/web/search/feature/src/lib/search.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModule: () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_ui_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/input */ 33100);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-table */ 30461);
/* harmony import */ var _angular_spotify_web_album_ui_album_track__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/album/ui/album-track */ 95039);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component */ 52565);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);











class SearchModule {
  static #_ = this.ɵfac = function SearchModule_Factory(t) {
    return new (t || SearchModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SearchModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_input__WEBPACK_IMPORTED_MODULE_0__.InputModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_1__.SpinnerModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_3__.MediaTableModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _angular_spotify_web_album_ui_album_track__WEBPACK_IMPORTED_MODULE_4__.AlbumTrackModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
      path: '',
      component: _search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SearchModule, {
    declarations: [_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_spotify_web_shared_ui_input__WEBPACK_IMPORTED_MODULE_0__.InputModule, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_1__.SpinnerModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _angular_spotify_web_shared_ui_media_table__WEBPACK_IMPORTED_MODULE_3__.MediaTableModule, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _angular_spotify_web_album_ui_album_track__WEBPACK_IMPORTED_MODULE_4__.AlbumTrackModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent]
  });
})();

/***/ }),

/***/ 33100:
/*!***********************************************!*\
  !*** ./libs/web/shared/ui/input/src/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputModule: () => (/* reexport safe */ _lib_input_module__WEBPACK_IMPORTED_MODULE_0__.InputModule)
/* harmony export */ });
/* harmony import */ var _lib_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/input.module */ 51524);


/***/ }),

/***/ 59585:
/*!*************************************************************!*\
  !*** ./libs/web/shared/ui/input/src/lib/input.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconSizesInPx: () => (/* binding */ IconSizesInPx),
/* harmony export */   InputComponent: () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/svg-icon */ 18279);






const _c0 = ["input"];
const _c1 = a0 => ["input-container", a0];
function InputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.iconContainerWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.icon)("size", ctx_r0.iconSize);
  }
}
function InputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_Conditional_4_Template_svg_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.iconContainerWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", "times")("size", ctx_r0.iconSize);
  }
}
const IconSizesInPx = {
  xs: 8,
  // 0.5rem
  sm: 12,
  // 0.75rem
  md: 16,
  // 1rem
  lg: 24,
  // 1.5rem
  xl: 32,
  // 2rem
  xxl: 40 // 2.5rem
};
class InputComponent {
  constructor() {
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    this.containerClassName = '';
    this.icon = '';
    this.iconSize = 'md';
    this.placeholder = '';
    this.rounded = false;
    this.enableClearButton = false;
    this.autoFocus = false;
  }
  get iconContainerWidth() {
    return IconSizesInPx[this.iconSize] * 2;
  }
  get inputContainerHeight() {
    return IconSizesInPx[this.iconSize] * 1.8;
  }
  get showClearButton() {
    return this.enableClearButton && !!this.control?.value;
  }
  clear() {
    this.control.patchValue('');
    this.inputRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    if (this.autoFocus && this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }
  static #_ = this.ɵfac = function InputComponent_Factory(t) {
    return new (t || InputComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputComponent,
    selectors: [["as-input"]],
    viewQuery: function InputComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
      }
    },
    inputs: {
      control: "control",
      containerClassName: "containerClassName",
      icon: "icon",
      iconSize: "iconSize",
      placeholder: "placeholder",
      rounded: "rounded",
      enableClearButton: "enableClearButton",
      autoFocus: "autoFocus"
    },
    decls: 5,
    vars: 15,
    consts: [["input", ""], [3, "ngClass"], [1, "input-icon-container", 3, "width"], [3, "formControl", "placeholder"], [1, "input-icon-container", "right", 3, "width"], [1, "input-icon-container"], ["color", "black", 3, "key", "size"], [1, "input-icon-container", "right"], ["color", "black", 3, "click", "key", "size"]],
    template: function InputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_Conditional_1_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_Conditional_4_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.inputContainerHeight, "px")("border-radius", ctx.rounded ? "500px" : "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.containerClassName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.icon ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx.icon ? ctx.iconContainerWidth : 4, "px")("padding-right", ctx.showClearButton ? ctx.iconContainerWidth : 4, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx.showClearButton ? 4 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent],
    styles: [".input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 32px;\n  width: 100%;\n  overflow: hidden;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: none;\n  background: #fff;\n  color: #000;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border: none;\n  box-shadow: none;\n  background: #fff;\n  outline: 0;\n}\n\n.invalid[_ngcontent-%COMP%], .invalid[_ngcontent-%COMP%]:focus {\n  border: 1px solid #e13c3c;\n  box-shadow: none;\n}\n\n.input-icon-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-icon-container.right[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQU47O0FBTUU7RUFFRSx5QkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxGO0FBT0U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFMSiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uaW52YWxpZCB7XG4gICYsXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMTNjM2M7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4uaW5wdXQtaWNvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICYucmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9pbnB1dC9zcmMvbGliL2lucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQU47O0FBTUU7RUFFRSx5QkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxGO0FBT0U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFMSjtBQUNBLG9qREFBb2pEIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgaW5wdXQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcblxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICB9XG59XG5cbi5pbnZhbGlkIHtcbiAgJixcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxM2MzYztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbi5pbnB1dC1pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJi5yaWdodCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 51524:
/*!**********************************************************!*\
  !*** ./libs/web/shared/ui/input/src/lib/input.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputModule: () => (/* binding */ InputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_spotify_web_shared_ui_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/icon */ 25383);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component */ 59585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class InputModule {
  static #_ = this.ɵfac = function InputModule_Factory(t) {
    return new (t || InputModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: InputModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_spotify_web_shared_ui_icon__WEBPACK_IMPORTED_MODULE_0__.IconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InputModule, {
    declarations: [_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_spotify_web_shared_ui_icon__WEBPACK_IMPORTED_MODULE_0__.IconModule],
    exports: [_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_search_feature_src_index_ts.js.map