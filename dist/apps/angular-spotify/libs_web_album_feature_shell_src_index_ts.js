"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_album_feature_shell_src_index_ts"],{

/***/ 77854:
/*!*************************************************!*\
  !*** ./libs/web/album/data-access/src/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumStore: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.AlbumStore),
/* harmony export */   AlbumsEffect: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.AlbumsEffect),
/* harmony export */   albumsFeatureKey: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.albumsFeatureKey),
/* harmony export */   albumsReducer: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.albumsReducer),
/* harmony export */   getAlbums: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getAlbums),
/* harmony export */   getAlbumsLoading: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getAlbumsLoading),
/* harmony export */   getAlbumsState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getAlbumsState),
/* harmony export */   loadAlbums: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadAlbums),
/* harmony export */   loadAlbumsError: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsError),
/* harmony export */   loadAlbumsSuccess: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsSuccess)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ 70224);


/***/ }),

/***/ 69792:
/*!***********************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/album/album.store.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumStore: () => (/* binding */ AlbumStore)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component-store */ 45327);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component-store */ 72743);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 49852);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);











class AlbumStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_3__.ComponentStore {
  constructor(route, playbackStore, albumApi, playerApi) {
    super({});
    this.route = route;
    this.playbackStore = playbackStore;
    this.albumApi = albumApi;
    this.playerApi = playerApi;
    this.albumIdParams$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.pluck)(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.Configuration.AlbumId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(albumId => !!albumId));
    this.isCurrentAlbumLoading$ = this.select(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.SelectorUtil.isLoading);
    this.album$ = this.albumIdParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(albumId => {
      this.patchState({
        albumId
      });
      this.loadAlbum({
        albumId
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.select(s => s.data)));
    this.isAlbumPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.SelectorUtil.getMediaPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.album$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(album => album?.uri)), this.playbackStore.playback$]));
    this.loadAlbum = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
      this.patchState({
        status: 'loading',
        error: null
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({
      albumId
    }) => this.albumApi.getAlbum(albumId).pipe((0,_ngrx_component_store__WEBPACK_IMPORTED_MODULE_10__.tapResponse)(album => {
      this.patchState({
        data: album,
        status: 'success',
        error: ''
      });
    }, error => {
      this.patchState({
        status: 'error',
        error: error
      });
    })))));
    this.toggleAlbum = this.effect(params$ => params$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({
      isPlaying,
      uri
    }) => this.playerApi.togglePlay(isPlaying, {
      context_uri: uri
    }))));
  }
  static #_ = this.ɵfac = function AlbumStore_Factory(t) {
    return new (t || AlbumStore)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_1__.PlaybackStore), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.AlbumApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: AlbumStore,
    factory: AlbumStore.ɵfac
  });
}

/***/ }),

/***/ 49420:
/*!*****************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/album/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumStore: () => (/* reexport safe */ _album_store__WEBPACK_IMPORTED_MODULE_0__.AlbumStore)
/* harmony export */ });
/* harmony import */ var _album_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album.store */ 69792);


/***/ }),

/***/ 25825:
/*!**************************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/albums/albums.action.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAlbums: () => (/* binding */ loadAlbums),
/* harmony export */   loadAlbumsError: () => (/* binding */ loadAlbumsError),
/* harmony export */   loadAlbumsSuccess: () => (/* binding */ loadAlbumsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadAlbums = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Albums Page/API]');
const loadAlbumsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Albums Page/API success]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadAlbumsError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Albums Page/API error]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 69542:
/*!**************************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/albums/albums.effect.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumsEffect: () => (/* binding */ AlbumsEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _albums_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albums.action */ 25825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);








class AlbumsEffect {
  constructor(actions$, albumApi) {
    this.actions$ = actions$;
    this.albumApi = albumApi;
    this.loadAlbums$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_albums_action__WEBPACK_IMPORTED_MODULE_1__.loadAlbums), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.albumApi.getUserSavedAlbums().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(albums => (0,_albums_action__WEBPACK_IMPORTED_MODULE_1__.loadAlbumsSuccess)({
      albums
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY)))));
  }
  static #_ = this.ɵfac = function AlbumsEffect_Factory(t) {
    return new (t || AlbumsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.AlbumApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: AlbumsEffect,
    factory: AlbumsEffect.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28775:
/*!***************************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/albums/albums.reducer.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   albumsFeatureKey: () => (/* binding */ albumsFeatureKey),
/* harmony export */   albumsReducer: () => (/* binding */ albumsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _albums_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums.action */ 25825);


const initialState = {
  data: null,
  error: null,
  status: 'pending'
};
const albumsFeatureKey = 'albums';
const albumsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_albums_action__WEBPACK_IMPORTED_MODULE_0__.loadAlbums, state => ({
  ...state,
  status: 'loading',
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_albums_action__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsSuccess, (state, {
  albums
}) => ({
  ...state,
  data: albums,
  status: 'success',
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_albums_action__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsError, (state, {
  error
}) => ({
  ...state,
  status: 'error',
  error
})));

/***/ }),

/***/ 41966:
/*!****************************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/albums/albums.selector.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlbums: () => (/* binding */ getAlbums),
/* harmony export */   getAlbumsLoading: () => (/* binding */ getAlbumsLoading),
/* harmony export */   getAlbumsState: () => (/* binding */ getAlbumsState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _albums_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums.reducer */ 28775);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);



const getAlbumsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_albums_reducer__WEBPACK_IMPORTED_MODULE_0__.albumsFeatureKey);
const getAlbums = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getAlbumsState, s => s.data);
const getAlbumsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getAlbumsState, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.isLoading);

/***/ }),

/***/ 83865:
/*!******************************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/albums/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumsEffect: () => (/* reexport safe */ _albums_effect__WEBPACK_IMPORTED_MODULE_2__.AlbumsEffect),
/* harmony export */   albumsFeatureKey: () => (/* reexport safe */ _albums_reducer__WEBPACK_IMPORTED_MODULE_1__.albumsFeatureKey),
/* harmony export */   albumsReducer: () => (/* reexport safe */ _albums_reducer__WEBPACK_IMPORTED_MODULE_1__.albumsReducer),
/* harmony export */   getAlbums: () => (/* reexport safe */ _albums_selector__WEBPACK_IMPORTED_MODULE_3__.getAlbums),
/* harmony export */   getAlbumsLoading: () => (/* reexport safe */ _albums_selector__WEBPACK_IMPORTED_MODULE_3__.getAlbumsLoading),
/* harmony export */   getAlbumsState: () => (/* reexport safe */ _albums_selector__WEBPACK_IMPORTED_MODULE_3__.getAlbumsState),
/* harmony export */   loadAlbums: () => (/* reexport safe */ _albums_action__WEBPACK_IMPORTED_MODULE_0__.loadAlbums),
/* harmony export */   loadAlbumsError: () => (/* reexport safe */ _albums_action__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsError),
/* harmony export */   loadAlbumsSuccess: () => (/* reexport safe */ _albums_action__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsSuccess)
/* harmony export */ });
/* harmony import */ var _albums_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums.action */ 25825);
/* harmony import */ var _albums_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albums.reducer */ 28775);
/* harmony import */ var _albums_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.effect */ 69542);
/* harmony import */ var _albums_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums.selector */ 41966);





/***/ }),

/***/ 70224:
/*!***********************************************************!*\
  !*** ./libs/web/album/data-access/src/lib/store/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumStore: () => (/* reexport safe */ _album__WEBPACK_IMPORTED_MODULE_1__.AlbumStore),
/* harmony export */   AlbumsEffect: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.AlbumsEffect),
/* harmony export */   albumsFeatureKey: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.albumsFeatureKey),
/* harmony export */   albumsReducer: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.albumsReducer),
/* harmony export */   getAlbums: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.getAlbums),
/* harmony export */   getAlbumsLoading: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.getAlbumsLoading),
/* harmony export */   getAlbumsState: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.getAlbumsState),
/* harmony export */   loadAlbums: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.loadAlbums),
/* harmony export */   loadAlbumsError: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsError),
/* harmony export */   loadAlbumsSuccess: () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_0__.loadAlbumsSuccess)
/* harmony export */ });
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums */ 83865);
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ 49420);



/***/ }),

/***/ 2232:
/*!***************************************************!*\
  !*** ./libs/web/album/feature/shell/src/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumShellModule: () => (/* reexport safe */ _lib_album_shell_module__WEBPACK_IMPORTED_MODULE_0__.AlbumShellModule)
/* harmony export */ });
/* harmony import */ var _lib_album_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/album-shell.module */ 92064);


/***/ }),

/***/ 92064:
/*!********************************************************************!*\
  !*** ./libs/web/album/feature/shell/src/lib/album-shell.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumShellModule: () => (/* binding */ AlbumShellModule)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/album/data-access */ 77854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);











class AlbumShellModule {
  static #_ = this.ɵfac = function AlbumShellModule_Factory(t) {
    return new (t || AlbumShellModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AlbumShellModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      loadChildren: function () {
        var _ref = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("libs_web_album_feature_list_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/album/feature/list */ 43332))).AlbumsModule;
        });
        return function loadChildren() {
          return _ref.apply(this, arguments);
        };
      }()
    }, {
      path: `:${_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.AlbumId}`,
      loadChildren: function () {
        var _ref2 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media-order_src_index_ts-libs_web_shared_ui_media-table_src_index_-f5aefd"), __webpack_require__.e("default-libs_web_shared_ui_media-summary_src_index_ts-libs_web_shared_ui_tracks-loading_src_i-d0e7a5"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_album_feature_detail_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/album/feature/detail */ 41025))).AlbumModule;
        });
        return function loadChildren() {
          return _ref2.apply(this, arguments);
        };
      }()
    }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature(_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_2__.albumsFeatureKey, _angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_2__.albumsReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forFeature([_angular_spotify_web_album_data_access__WEBPACK_IMPORTED_MODULE_2__.AlbumsEffect])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlbumShellModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsFeatureModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_album_feature_shell_src_index_ts.js.map