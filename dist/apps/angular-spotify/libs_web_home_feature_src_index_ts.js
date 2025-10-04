"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_home_feature_src_index_ts"],{

/***/ 70982:
/*!************************************************!*\
  !*** ./libs/web/home/data-access/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturePlaylistsEffect: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.FeaturePlaylistsEffect),
/* harmony export */   RecentPlayedTracksEffect: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.RecentPlayedTracksEffect),
/* harmony export */   featuredPlaylistsFeatureKey: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.featuredPlaylistsFeatureKey),
/* harmony export */   featuredPlaylistsReducer: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.featuredPlaylistsReducer),
/* harmony export */   getFeaturePlaylistsState: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.getFeaturePlaylistsState),
/* harmony export */   getFeaturedPlaylists: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.getFeaturedPlaylists),
/* harmony export */   getFeaturedPlaylistsWithRouteUrl: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.getFeaturedPlaylistsWithRouteUrl),
/* harmony export */   getRecentPlayedTracks: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.getRecentPlayedTracks),
/* harmony export */   getRecentPlayedTracksLoading: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.getRecentPlayedTracksLoading),
/* harmony export */   getRecentPlayedTracksState: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.getRecentPlayedTracksState),
/* harmony export */   loadFeaturedPlaylists: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.loadFeaturedPlaylists),
/* harmony export */   loadFeaturedPlaylistsError: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.loadFeaturedPlaylistsError),
/* harmony export */   loadFeaturedPlaylistsSuccess: () => (/* reexport safe */ _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__.loadFeaturedPlaylistsSuccess),
/* harmony export */   loadRecentTracks: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracks),
/* harmony export */   loadRecentTracksError: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracksError),
/* harmony export */   loadRecentTracksSuccess: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracksSuccess),
/* harmony export */   recentFeatureTracksFeatureKey: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.recentFeatureTracksFeatureKey),
/* harmony export */   recentPlayedTracksReducer: () => (/* reexport safe */ _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__.recentPlayedTracksReducer)
/* harmony export */ });
/* harmony import */ var _lib_store_recent_played_tracks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store/recent-played-tracks */ 23369);
/* harmony import */ var _lib_store_feature_playlists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/store/feature-playlists */ 17647);



/***/ }),

/***/ 49127:
/*!***********************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/feature-playlists/feature-playlists.action.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFeaturedPlaylists: () => (/* binding */ loadFeaturedPlaylists),
/* harmony export */   loadFeaturedPlaylistsError: () => (/* binding */ loadFeaturedPlaylistsError),
/* harmony export */   loadFeaturedPlaylistsSuccess: () => (/* binding */ loadFeaturedPlaylistsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadFeaturedPlaylists = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home/Load Featured Playlists]');
const loadFeaturedPlaylistsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home/Load Featured Playlists Success]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadFeaturedPlaylistsError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home/Load Featured Playlists Error]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 26604:
/*!***********************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/feature-playlists/feature-playlists.effect.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturePlaylistsEffect: () => (/* binding */ FeaturePlaylistsEffect)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _feature_playlists_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-playlists.action */ 49127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);










class FeaturePlaylistsEffect {
  constructor(browseApi, actions$, authStore) {
    this.browseApi = browseApi;
    this.actions$ = actions$;
    this.authStore = authStore;
    this.loadFeaturedPlaylists$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_feature_playlists_action__WEBPACK_IMPORTED_MODULE_2__.loadFeaturedPlaylists), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.authStore.country$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(([_, country]) => this.browseApi.getAllFeaturedPlaylists({
      limit: 50,
      country: country || 'VN'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => (0,_feature_playlists_action__WEBPACK_IMPORTED_MODULE_2__.loadFeaturedPlaylistsSuccess)({
      response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY)))));
  }
  static #_ = this.ɵfac = function FeaturePlaylistsEffect_Factory(t) {
    return new (t || FeaturePlaylistsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.BrowseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthStore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: FeaturePlaylistsEffect,
    factory: FeaturePlaylistsEffect.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5449:
/*!************************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/feature-playlists/feature-playlists.reducer.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featuredPlaylistsFeatureKey: () => (/* binding */ featuredPlaylistsFeatureKey),
/* harmony export */   featuredPlaylistsReducer: () => (/* binding */ featuredPlaylistsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-playlists.action */ 49127);


const initialState = {
  data: null,
  status: 'pending',
  error: null
};
const featuredPlaylistsFeatureKey = 'feature-playlists';
const featuredPlaylistsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylists, state => ({
  ...state,
  status: 'loading'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylistsSuccess, (state, {
  response
}) => ({
  ...state,
  data: response,
  status: 'success',
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylistsError, (state, {
  error
}) => ({
  ...state,
  error,
  status: 'error'
})));

/***/ }),

/***/ 56416:
/*!*************************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/feature-playlists/feature-playlists.selector.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFeaturePlaylistsState: () => (/* binding */ getFeaturePlaylistsState),
/* harmony export */   getFeaturedPlaylists: () => (/* binding */ getFeaturedPlaylists),
/* harmony export */   getFeaturedPlaylistsWithRouteUrl: () => (/* binding */ getFeaturedPlaylistsWithRouteUrl)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _feature_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-playlists.reducer */ 5449);



const getFeaturePlaylistsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_feature_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__.featuredPlaylistsFeatureKey);
const getFeaturedPlaylists = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getFeaturePlaylistsState, ({
  data
}) => {
  return data;
});
const getFeaturedPlaylistsWithRouteUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getFeaturedPlaylists, featuredPlaylists => {
  if (featuredPlaylists) {
    return {
      ...featuredPlaylists,
      playlists: {
        ...featuredPlaylists.playlists,
        items: featuredPlaylists.playlists.items.map(item => ({
          ...item,
          routeUrl: _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.RouteUtil.getPlaylistRouteUrl(item.id)
        }))
      }
    };
  }
  return featuredPlaylists;
});

/***/ }),

/***/ 17647:
/*!****************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/feature-playlists/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturePlaylistsEffect: () => (/* reexport safe */ _feature_playlists_effect__WEBPACK_IMPORTED_MODULE_1__.FeaturePlaylistsEffect),
/* harmony export */   featuredPlaylistsFeatureKey: () => (/* reexport safe */ _feature_playlists_reducer__WEBPACK_IMPORTED_MODULE_2__.featuredPlaylistsFeatureKey),
/* harmony export */   featuredPlaylistsReducer: () => (/* reexport safe */ _feature_playlists_reducer__WEBPACK_IMPORTED_MODULE_2__.featuredPlaylistsReducer),
/* harmony export */   getFeaturePlaylistsState: () => (/* reexport safe */ _feature_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getFeaturePlaylistsState),
/* harmony export */   getFeaturedPlaylists: () => (/* reexport safe */ _feature_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getFeaturedPlaylists),
/* harmony export */   getFeaturedPlaylistsWithRouteUrl: () => (/* reexport safe */ _feature_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getFeaturedPlaylistsWithRouteUrl),
/* harmony export */   loadFeaturedPlaylists: () => (/* reexport safe */ _feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylists),
/* harmony export */   loadFeaturedPlaylistsError: () => (/* reexport safe */ _feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylistsError),
/* harmony export */   loadFeaturedPlaylistsSuccess: () => (/* reexport safe */ _feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylistsSuccess)
/* harmony export */ });
/* harmony import */ var _feature_playlists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-playlists.action */ 49127);
/* harmony import */ var _feature_playlists_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-playlists.effect */ 26604);
/* harmony import */ var _feature_playlists_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-playlists.reducer */ 5449);
/* harmony import */ var _feature_playlists_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-playlists.selector */ 56416);





/***/ }),

/***/ 23369:
/*!*******************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/recent-played-tracks/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPlayedTracksEffect: () => (/* reexport safe */ _recent_played_tracks_effect__WEBPACK_IMPORTED_MODULE_1__.RecentPlayedTracksEffect),
/* harmony export */   getRecentPlayedTracks: () => (/* reexport safe */ _recent_played_tracks_selector__WEBPACK_IMPORTED_MODULE_3__.getRecentPlayedTracks),
/* harmony export */   getRecentPlayedTracksLoading: () => (/* reexport safe */ _recent_played_tracks_selector__WEBPACK_IMPORTED_MODULE_3__.getRecentPlayedTracksLoading),
/* harmony export */   getRecentPlayedTracksState: () => (/* reexport safe */ _recent_played_tracks_selector__WEBPACK_IMPORTED_MODULE_3__.getRecentPlayedTracksState),
/* harmony export */   loadRecentTracks: () => (/* reexport safe */ _recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracks),
/* harmony export */   loadRecentTracksError: () => (/* reexport safe */ _recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracksError),
/* harmony export */   loadRecentTracksSuccess: () => (/* reexport safe */ _recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracksSuccess),
/* harmony export */   recentFeatureTracksFeatureKey: () => (/* reexport safe */ _recent_played_tracks_reducer__WEBPACK_IMPORTED_MODULE_2__.recentFeatureTracksFeatureKey),
/* harmony export */   recentPlayedTracksReducer: () => (/* reexport safe */ _recent_played_tracks_reducer__WEBPACK_IMPORTED_MODULE_2__.recentPlayedTracksReducer)
/* harmony export */ });
/* harmony import */ var _recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recent-played-tracks.action */ 57489);
/* harmony import */ var _recent_played_tracks_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent-played-tracks.effect */ 89494);
/* harmony import */ var _recent_played_tracks_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recent-played-tracks.reducer */ 64631);
/* harmony import */ var _recent_played_tracks_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent-played-tracks.selector */ 32126);





/***/ }),

/***/ 57489:
/*!*****************************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/recent-played-tracks/recent-played-tracks.action.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadRecentTracks: () => (/* binding */ loadRecentTracks),
/* harmony export */   loadRecentTracksError: () => (/* binding */ loadRecentTracksError),
/* harmony export */   loadRecentTracksSuccess: () => (/* binding */ loadRecentTracksSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadRecentTracks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home/Load Recent Played Tracks]');
const loadRecentTracksSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home/Load Recent Played Tracks Success]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRecentTracksError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home/Load Recent Played Tracks Error]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 89494:
/*!*****************************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/recent-played-tracks/recent-played-tracks.effect.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPlayedTracksEffect: () => (/* binding */ RecentPlayedTracksEffect)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent-played-tracks.action */ 57489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);








class RecentPlayedTracksEffect {
  constructor(playerApi, actions$) {
    this.playerApi = playerApi;
    this.actions$ = actions$;
    this.loadRecentTracks$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_1__.loadRecentTracks), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.playerApi.getRecentPlayedTracks().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => (0,_recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_1__.loadRecentTracksSuccess)({
      response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY)))));
  }
  static #_ = this.ɵfac = function RecentPlayedTracksEffect_Factory(t) {
    return new (t || RecentPlayedTracksEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: RecentPlayedTracksEffect,
    factory: RecentPlayedTracksEffect.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 64631:
/*!******************************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/recent-played-tracks/recent-played-tracks.reducer.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recentFeatureTracksFeatureKey: () => (/* binding */ recentFeatureTracksFeatureKey),
/* harmony export */   recentPlayedTracksReducer: () => (/* binding */ recentPlayedTracksReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recent-played-tracks.action */ 57489);


const initialState = {
  data: null,
  status: 'pending',
  error: null
};
const recentFeatureTracksFeatureKey = 'recentTracks';
const recentPlayedTracksReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracks, state => ({
  ...state,
  status: 'loading'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracksSuccess, (state, {
  response
}) => ({
  ...state,
  data: response,
  status: 'success',
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recent_played_tracks_action__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracksError, (state, {
  error
}) => ({
  ...state,
  error,
  status: 'error'
})));

/***/ }),

/***/ 32126:
/*!*******************************************************************************************************!*\
  !*** ./libs/web/home/data-access/src/lib/store/recent-played-tracks/recent-played-tracks.selector.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRecentPlayedTracks: () => (/* binding */ getRecentPlayedTracks),
/* harmony export */   getRecentPlayedTracksLoading: () => (/* binding */ getRecentPlayedTracksLoading),
/* harmony export */   getRecentPlayedTracksState: () => (/* binding */ getRecentPlayedTracksState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _recent_played_tracks_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recent-played-tracks.reducer */ 64631);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);



const getRecentPlayedTracksState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_recent_played_tracks_reducer__WEBPACK_IMPORTED_MODULE_0__.recentFeatureTracksFeatureKey);
const getRecentPlayedTracksLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getRecentPlayedTracksState, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.isLoading);
const getRecentPlayedTracks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getRecentPlayedTracksState, ({
  data
}) => {
  if (!data) {
    return null;
  }
  return data.items.filter(({
    track
  }, idx, arr) => arr.findIndex(item => item.track.id === track.id) === idx).slice(0, 20);
});

/***/ }),

/***/ 14237:
/*!********************************************!*\
  !*** ./libs/web/home/feature/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* reexport safe */ _lib_home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule)
/* harmony export */ });
/* harmony import */ var _lib_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/home.module */ 75966);


/***/ }),

/***/ 48863:
/*!*********************************************************!*\
  !*** ./libs/web/home/feature/src/lib/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/home/data-access */ 70982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _ui_greeting_src_lib_greeting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/greeting/src/lib/greeting.component */ 42593);
/* harmony import */ var _ui_recent_played_src_lib_recent_played_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/recent-played/src/lib/recent-played.component */ 35655);
/* harmony import */ var _ui_featured_playlists_src_lib_featured_playlists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/featured-playlists/src/lib/featured-playlists.component */ 16007);







class HomeComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.store.dispatch((0,_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__.loadRecentTracks)());
    this.store.dispatch((0,_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__.loadFeaturedPlaylists)());
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["as-home"]],
    decls: 4,
    vars: 0,
    consts: [[1, "content-spacing"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "as-greeting")(2, "as-recent-played")(3, "as-featured-playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ui_greeting_src_lib_greeting_component__WEBPACK_IMPORTED_MODULE_1__.GreetingComponent, _ui_recent_played_src_lib_recent_played_component__WEBPACK_IMPORTED_MODULE_2__.RecentPlayedComponent, _ui_featured_playlists_src_lib_featured_playlists_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedPlaylistsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2hvbWUvZmVhdHVyZS9zcmMvbGliL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 75966:
/*!******************************************************!*\
  !*** ./libs/web/home/feature/src/lib/home.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 48863);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/home/data-access */ 70982);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _angular_spotify_web_home_ui_greeting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/home/ui/greeting */ 66239);
/* harmony import */ var _angular_spotify_web_home_ui_featured_playlists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/home/ui/featured-playlists */ 69024);
/* harmony import */ var _angular_spotify_web_home_ui_recent_played__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/home/ui/recent-played */ 2271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);













class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__.recentFeatureTracksFeatureKey, _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__.recentPlayedTracksReducer), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__.featuredPlaylistsFeatureKey, _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__.featuredPlaylistsReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsModule.forFeature([_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__.RecentPlayedTracksEffect, _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_1__.FeaturePlaylistsEffect]), _angular_spotify_web_home_ui_greeting__WEBPACK_IMPORTED_MODULE_2__.GreetingModule, _angular_spotify_web_home_ui_recent_played__WEBPACK_IMPORTED_MODULE_4__.RecentPlayedModule, _angular_spotify_web_home_ui_featured_playlists__WEBPACK_IMPORTED_MODULE_3__.FeaturedPlaylistsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsFeatureModule, _angular_spotify_web_home_ui_greeting__WEBPACK_IMPORTED_MODULE_2__.GreetingModule, _angular_spotify_web_home_ui_recent_played__WEBPACK_IMPORTED_MODULE_4__.RecentPlayedModule, _angular_spotify_web_home_ui_featured_playlists__WEBPACK_IMPORTED_MODULE_3__.FeaturedPlaylistsModule],
    exports: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent]
  });
})();

/***/ }),

/***/ 69024:
/*!**********************************************************!*\
  !*** ./libs/web/home/ui/featured-playlists/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedPlaylistsModule: () => (/* reexport safe */ _lib_featured_playlists_module__WEBPACK_IMPORTED_MODULE_0__.FeaturedPlaylistsModule)
/* harmony export */ });
/* harmony import */ var _lib_featured_playlists_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/featured-playlists.module */ 86326);


/***/ }),

/***/ 16007:
/*!*************************************************************************************!*\
  !*** ./libs/web/home/ui/featured-playlists/src/lib/featured-playlists.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedPlaylistsComponent: () => (/* binding */ FeaturedPlaylistsComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/home/data-access */ 70982);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/media/src/lib/card.component */ 66285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);








function FeaturedPlaylistsComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "as-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("togglePlay", function FeaturedPlaylistsComponent_Conditional_0_For_4_Template_as_card_togglePlay_0_listener($event) {
      const playlist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.togglePlay($event, playlist_r2.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", playlist_r2.name)("description", playlist_r2.description)("imageUrl", playlist_r2.images[0] == null ? null : playlist_r2.images[0].url)("uri", playlist_r2.uri)("routerUrl", playlist_r2.routeUrl);
  }
}
function FeaturedPlaylistsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](3, FeaturedPlaylistsComponent_Conditional_0_For_4_Template, 1, 5, "as-card", 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](data_r4.playlists.items);
  }
}
class FeaturedPlaylistsComponent {
  constructor(store, playerApi) {
    this.store = store;
    this.playerApi = playerApi;
    this.featuredPlaylists$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__.getFeaturedPlaylistsWithRouteUrl));
  }
  togglePlay(isPlaying, playlistUri) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: playlistUri
    }).subscribe();
  }
  static #_ = this.ɵfac = function FeaturedPlaylistsComponent_Factory(t) {
    return new (t || FeaturedPlaylistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeaturedPlaylistsComponent,
    selectors: [["as-featured-playlists"]],
    decls: 2,
    vars: 3,
    consts: [[1, "mt-8", "mb-4", "text-heading"], [1, "common-grid"], [3, "title", "description", "imageUrl", "uri", "routerUrl"], [3, "togglePlay", "title", "description", "imageUrl", "uri", "routerUrl"]],
    template: function FeaturedPlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FeaturedPlaylistsComponent_Conditional_0_Template, 5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.featuredPlaylists$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlZC1wbGF5bGlzdHMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2hvbWUvdWkvZmVhdHVyZWQtcGxheWxpc3RzL3NyYy9saWIvZmVhdHVyZWQtcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 86326:
/*!**********************************************************************************!*\
  !*** ./libs/web/home/ui/featured-playlists/src/lib/featured-playlists.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedPlaylistsModule: () => (/* binding */ FeaturedPlaylistsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _featured_playlists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featured-playlists.component */ 16007);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class FeaturedPlaylistsModule {
  static #_ = this.ɵfac = function FeaturedPlaylistsModule_Factory(t) {
    return new (t || FeaturedPlaylistsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: FeaturedPlaylistsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeaturedPlaylistsModule, {
    declarations: [_featured_playlists_component__WEBPACK_IMPORTED_MODULE_0__.FeaturedPlaylistsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
    exports: [_featured_playlists_component__WEBPACK_IMPORTED_MODULE_0__.FeaturedPlaylistsComponent]
  });
})();

/***/ }),

/***/ 66239:
/*!************************************************!*\
  !*** ./libs/web/home/ui/greeting/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreetingModule: () => (/* reexport safe */ _lib_greeting_module__WEBPACK_IMPORTED_MODULE_0__.GreetingModule)
/* harmony export */ });
/* harmony import */ var _lib_greeting_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/greeting.module */ 36516);


/***/ }),

/***/ 42593:
/*!*****************************************************************!*\
  !*** ./libs/web/home/ui/greeting/src/lib/greeting.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreetingComponent: () => (/* binding */ GreetingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class GreetingComponent {
  get message() {
    const now = new Date();
    const hours = now.getHours();
    const text = hours < 12 ? 'Morning 🌞' : hours < 18 ? 'Afternoon 🌤' : 'Evening 🌙';
    return `Good ${text} ${randomEmoji()}`;
  }
  static #_ = this.ɵfac = function GreetingComponent_Factory(t) {
    return new (t || GreetingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GreetingComponent,
    selectors: [["as-greeting"]],
    decls: 2,
    vars: 1,
    consts: [[1, "text-3xl", "text-white"]],
    template: function GreetingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyZWV0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImdyZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2hvbWUvdWkvZ3JlZXRpbmcvc3JjL2xpYi9ncmVldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBLHdTQUF3UyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}
function randomEmoji() {
  const emojis = ["😘", "🤓", "😜", "🤪", "😎", "🤩", "🥳", "🤘", "🎉", "🔥"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

/***/ }),

/***/ 36516:
/*!**************************************************************!*\
  !*** ./libs/web/home/ui/greeting/src/lib/greeting.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreetingModule: () => (/* binding */ GreetingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _greeting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.component */ 42593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class GreetingModule {
  static #_ = this.ɵfac = function GreetingModule_Factory(t) {
    return new (t || GreetingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: GreetingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GreetingModule, {
    declarations: [_greeting_component__WEBPACK_IMPORTED_MODULE_0__.GreetingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_greeting_component__WEBPACK_IMPORTED_MODULE_0__.GreetingComponent]
  });
})();

/***/ }),

/***/ 2271:
/*!*****************************************************!*\
  !*** ./libs/web/home/ui/recent-played/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPlayedModule: () => (/* reexport safe */ _lib_recent_played_module__WEBPACK_IMPORTED_MODULE_0__.RecentPlayedModule)
/* harmony export */ });
/* harmony import */ var _lib_recent_played_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/recent-played.module */ 91222);


/***/ }),

/***/ 35655:
/*!***************************************************************************!*\
  !*** ./libs/web/home/ui/recent-played/src/lib/recent-played.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPlayedComponent: () => (/* binding */ RecentPlayedComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/home/data-access */ 70982);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/ui/media/src/lib/card.component */ 66285);
/* harmony import */ var _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/spinner/src/lib/spinner.component */ 96101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);










function RecentPlayedComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "as-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("togglePlay", function RecentPlayedComponent_Conditional_2_For_2_Template_as_card_togglePlay_0_listener($event) {
      const historyObject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.togglePlayTrack($event, historyObject_r2.track.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const historyObject_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", historyObject_r2.track.name)("description", historyObject_r2.track.artists[0] == null ? null : historyObject_r2.track.artists[0].name)("imageUrl", historyObject_r2.track.album.images[0] == null ? null : historyObject_r2.track.album.images[0].url)("routerUrl", ctx_r2.getAlbumUrl(historyObject_r2.track.album.id))("uri", historyObject_r2.track.uri);
  }
}
function RecentPlayedComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, RecentPlayedComponent_Conditional_2_For_2_Template, 1, 5, "as-card", 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx);
  }
}
function RecentPlayedComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "as-spinner");
  }
}
class RecentPlayedComponent {
  constructor(store, playerApi) {
    this.store = store;
    this.playerApi = playerApi;
    this.recentTracks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__.getRecentPlayedTracks));
    this.isLoading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_angular_spotify_web_home_data_access__WEBPACK_IMPORTED_MODULE_0__.getRecentPlayedTracksLoading));
  }
  togglePlayTrack(isPlaying, trackUri) {
    this.playerApi.togglePlay(isPlaying, {
      uris: [trackUri]
    }).subscribe();
  }
  getAlbumUrl(albumId) {
    return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_2__.RouteUtil.getAlbumRouteUrl(albumId);
  }
  static #_ = this.ɵfac = function RecentPlayedComponent_Factory(t) {
    return new (t || RecentPlayedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.PlayerApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RecentPlayedComponent,
    selectors: [["as-recent-played"]],
    decls: 6,
    vars: 6,
    consts: [[1, "mt-8", "mb-4", "text-heading"], [1, "common-grid"], [3, "title", "description", "imageUrl", "routerUrl", "uri"], [3, "togglePlay", "title", "description", "imageUrl", "routerUrl", "uri"]],
    template: function RecentPlayedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Recently Played");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RecentPlayedComponent_Conditional_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RecentPlayedComponent_Conditional_4_Template, 1, 0, "as-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, ctx.recentTracks$)) ? 2 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, ctx.isLoading$) ? 4 : -1);
      }
    },
    dependencies: [_shared_ui_media_src_lib_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _shared_ui_spinner_src_lib_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlbnQtcGxheWVkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2hvbWUvdWkvcmVjZW50LXBsYXllZC9zcmMvbGliL3JlY2VudC1wbGF5ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 91222:
/*!************************************************************************!*\
  !*** ./libs/web/home/ui/recent-played/src/lib/recent-played.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPlayedModule: () => (/* binding */ RecentPlayedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _recent_played_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recent-played.component */ 35655);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/spinner */ 13925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class RecentPlayedModule {
  static #_ = this.ɵfac = function RecentPlayedModule_Factory(t) {
    return new (t || RecentPlayedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RecentPlayedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RecentPlayedModule, {
    declarations: [_recent_played_component__WEBPACK_IMPORTED_MODULE_0__.RecentPlayedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_spotify_web_shared_ui_spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule],
    exports: [_recent_played_component__WEBPACK_IMPORTED_MODULE_0__.RecentPlayedComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_home_feature_src_index_ts.js.map