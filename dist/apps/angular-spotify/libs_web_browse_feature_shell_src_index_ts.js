"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_browse_feature_shell_src_index_ts"],{

/***/ 27415:
/*!**************************************************!*\
  !*** ./libs/web/browse/data-access/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesEffect: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.CategoriesEffect),
/* harmony export */   CategoryPlaylistsEffect: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.CategoryPlaylistsEffect),
/* harmony export */   categoriesFeatureKey: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.categoriesFeatureKey),
/* harmony export */   categoriesReducer: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.categoriesReducer),
/* harmony export */   categoryPlaylistsFeatureKey: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.categoryPlaylistsFeatureKey),
/* harmony export */   categoryPlaylistsReducer: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.categoryPlaylistsReducer),
/* harmony export */   getCategories: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategories),
/* harmony export */   getCategoriesLoading: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoriesLoading),
/* harmony export */   getCategoriesMap: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoriesMap),
/* harmony export */   getCategoriesState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoriesState),
/* harmony export */   getCategoryById: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoryById),
/* harmony export */   getCategoryPlaylistsById: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoryPlaylistsById),
/* harmony export */   getCategoryPlaylistsLoading: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoryPlaylistsLoading),
/* harmony export */   getCategoryPlaylistsMap: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoryPlaylistsMap),
/* harmony export */   getCategoryPlaylistsState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getCategoryPlaylistsState),
/* harmony export */   loadCategories: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadCategories),
/* harmony export */   loadCategoriesSuccess: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess),
/* harmony export */   loadCategoryPlaylists: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylists),
/* harmony export */   loadCategoryPlaylistsSuccess: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylistsSuccess),
/* harmony export */   setCategoriesState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.setCategoriesState),
/* harmony export */   setCategoryPlaylistsState: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.setCategoryPlaylistsState)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ 49233);


/***/ }),

/***/ 68034:
/*!***********************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/categories/categories.action.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCategories: () => (/* binding */ loadCategories),
/* harmony export */   loadCategoriesSuccess: () => (/* binding */ loadCategoriesSuccess),
/* harmony export */   setCategoriesState: () => (/* binding */ setCategoriesState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse Page]/Load Categories', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCategoriesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse Page/Load Categories Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCategoriesState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse Page/Set Categories state status', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// TODO: Skip load error action, to integrate with toApiResponse operator

/***/ }),

/***/ 50049:
/*!***********************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/categories/categories.effect.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesEffect: () => (/* binding */ CategoriesEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _categories_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.action */ 68034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/auth/data-access */ 66859);
/* harmony import */ var _categories_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.selector */ 94249);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);












class CategoriesEffect {
  constructor(store, actions$, browseApi, authStore) {
    this.store = store;
    this.actions$ = actions$;
    this.browseApi = browseApi;
    this.authStore = authStore;
    this.loadCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_categories_action__WEBPACK_IMPORTED_MODULE_0__.loadCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_categories_selector__WEBPACK_IMPORTED_MODULE_3__.getCategories))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(([, categories]) => {
      if (categories) {
        this.store.dispatch((0,_categories_action__WEBPACK_IMPORTED_MODULE_0__.setCategoriesState)({
          status: 'success'
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(([, data]) => !data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.authStore.country$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([, country]) => this.browseApi.getAllCategories({
      country,
      limit: 50
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(response => (0,_categories_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess)({
      categories: response
    }))))));
  }
  static #_ = this.ɵfac = function CategoriesEffect_Factory(t) {
    return new (t || CategoriesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_1__.BrowseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_spotify_web_auth_data_access__WEBPACK_IMPORTED_MODULE_2__.AuthStore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: CategoriesEffect,
    factory: CategoriesEffect.ɵfac
  });
}

/***/ }),

/***/ 35714:
/*!************************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/categories/categories.reducer.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoriesFeatureKey: () => (/* binding */ categoriesFeatureKey),
/* harmony export */   categoriesReducer: () => (/* binding */ categoriesReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _categories_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.action */ 68034);


const categoriesFeatureKey = 'categories';
const initialState = {
  data: null,
  status: 'pending',
  error: null,
  map: new Map()
};
const categoriesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_categories_action__WEBPACK_IMPORTED_MODULE_0__.loadCategories, state => ({
  ...state,
  status: 'loading'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_categories_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess, (state, {
  categories
}) => {
  const {
    map
  } = state;
  categories.items.forEach(category => {
    map.set(category.id, category);
  });
  return {
    ...state,
    status: 'success',
    data: categories,
    map: new Map(map)
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_categories_action__WEBPACK_IMPORTED_MODULE_0__.setCategoriesState, (state, {
  status
}) => ({
  ...state,
  status
})));

/***/ }),

/***/ 94249:
/*!*************************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/categories/categories.selector.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCategories: () => (/* binding */ getCategories),
/* harmony export */   getCategoriesLoading: () => (/* binding */ getCategoriesLoading),
/* harmony export */   getCategoriesMap: () => (/* binding */ getCategoriesMap),
/* harmony export */   getCategoriesState: () => (/* binding */ getCategoriesState),
/* harmony export */   getCategoryById: () => (/* binding */ getCategoryById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _categories_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.reducer */ 35714);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);



const getCategoriesState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_categories_reducer__WEBPACK_IMPORTED_MODULE_0__.categoriesFeatureKey);
const getCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoriesState, s => s.data);
const getCategoriesMap = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoriesState, s => s.map);
const getCategoriesLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoriesState, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.SelectorUtil.isLoading);
const getCategoryById = categoryId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoriesMap, map => map.get(categoryId));

/***/ }),

/***/ 1170:
/*!***********************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/categories/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesEffect: () => (/* reexport safe */ _categories_effect__WEBPACK_IMPORTED_MODULE_2__.CategoriesEffect),
/* harmony export */   categoriesFeatureKey: () => (/* reexport safe */ _categories_reducer__WEBPACK_IMPORTED_MODULE_1__.categoriesFeatureKey),
/* harmony export */   categoriesReducer: () => (/* reexport safe */ _categories_reducer__WEBPACK_IMPORTED_MODULE_1__.categoriesReducer),
/* harmony export */   getCategories: () => (/* reexport safe */ _categories_selector__WEBPACK_IMPORTED_MODULE_3__.getCategories),
/* harmony export */   getCategoriesLoading: () => (/* reexport safe */ _categories_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoriesLoading),
/* harmony export */   getCategoriesMap: () => (/* reexport safe */ _categories_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoriesMap),
/* harmony export */   getCategoriesState: () => (/* reexport safe */ _categories_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoriesState),
/* harmony export */   getCategoryById: () => (/* reexport safe */ _categories_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoryById),
/* harmony export */   loadCategories: () => (/* reexport safe */ _categories_action__WEBPACK_IMPORTED_MODULE_0__.loadCategories),
/* harmony export */   loadCategoriesSuccess: () => (/* reexport safe */ _categories_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess),
/* harmony export */   setCategoriesState: () => (/* reexport safe */ _categories_action__WEBPACK_IMPORTED_MODULE_0__.setCategoriesState)
/* harmony export */ });
/* harmony import */ var _categories_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.action */ 68034);
/* harmony import */ var _categories_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.reducer */ 35714);
/* harmony import */ var _categories_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.effect */ 50049);
/* harmony import */ var _categories_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.selector */ 94249);





/***/ }),

/***/ 3690:
/*!***************************************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/category-playlists/category-playlists.action.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCategoryPlaylists: () => (/* binding */ loadCategoryPlaylists),
/* harmony export */   loadCategoryPlaylistsSuccess: () => (/* binding */ loadCategoryPlaylistsSuccess),
/* harmony export */   setCategoryPlaylistsState: () => (/* binding */ setCategoryPlaylistsState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const loadCategoryPlaylists = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse Page]/Load Category Playlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCategoryPlaylistsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse Page/Load Category Playlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCategoryPlaylistsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse Page/Set Category Playlist state status', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// TODO: Skip load error action, to integrate with toApiResponse operator

/***/ }),

/***/ 33433:
/*!***************************************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/category-playlists/category-playlists.effect.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryPlaylistsEffect: () => (/* binding */ CategoryPlaylistsEffect)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 89006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _category_playlists_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-playlists.action */ 3690);
/* harmony import */ var _category_playlists_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-playlists.selector */ 25505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);











class CategoryPlaylistsEffect {
  constructor(browseApi, actions, store) {
    this.browseApi = browseApi;
    this.actions = actions;
    this.store = store;
    this.loadCategoryPlaylists$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_category_playlists_action__WEBPACK_IMPORTED_MODULE_1__.loadCategoryPlaylists), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_category_playlists_selector__WEBPACK_IMPORTED_MODULE_2__.getCategoryPlaylistsMap))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([{
      categoryId
    }, map]) => {
      if (map?.has(categoryId)) {
        this.store.dispatch((0,_category_playlists_action__WEBPACK_IMPORTED_MODULE_1__.setCategoryPlaylistsState)({
          status: 'success'
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([{
      categoryId
    }, map]) => {
      return !map?.has(categoryId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([{
      categoryId
    }]) => this.browseApi.getCategoryPlaylists(categoryId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(playlists => (0,_category_playlists_action__WEBPACK_IMPORTED_MODULE_1__.loadCategoryPlaylistsSuccess)({
      categoryId,
      playlists
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY)))));
  }
  static #_ = this.ɵfac = function CategoryPlaylistsEffect_Factory(t) {
    return new (t || CategoryPlaylistsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.BrowseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: CategoryPlaylistsEffect,
    factory: CategoryPlaylistsEffect.ɵfac
  });
}

/***/ }),

/***/ 57738:
/*!****************************************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/category-playlists/category-playlists.reducer.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryPlaylistsFeatureKey: () => (/* binding */ categoryPlaylistsFeatureKey),
/* harmony export */   categoryPlaylistsReducer: () => (/* binding */ categoryPlaylistsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _category_playlists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-playlists.action */ 3690);


const categoryPlaylistsFeatureKey = 'categoryPlaylists';
const initialState = {
  status: 'pending',
  data: new Map(),
  error: null
};
const categoryPlaylistsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_category_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylists, state => ({
  ...state,
  status: 'loading'
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_category_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylistsSuccess, (state, {
  categoryId,
  playlists
}) => {
  const {
    data: map
  } = state;
  map?.set(categoryId, playlists);
  return {
    ...state,
    data: new Map(map),
    status: 'success'
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_category_playlists_action__WEBPACK_IMPORTED_MODULE_0__.setCategoryPlaylistsState, (state, {
  status
}) => ({
  ...state,
  status
})));

/***/ }),

/***/ 25505:
/*!*****************************************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/category-playlists/category-playlists.selector.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCategoryPlaylistsById: () => (/* binding */ getCategoryPlaylistsById),
/* harmony export */   getCategoryPlaylistsLoading: () => (/* binding */ getCategoryPlaylistsLoading),
/* harmony export */   getCategoryPlaylistsMap: () => (/* binding */ getCategoryPlaylistsMap),
/* harmony export */   getCategoryPlaylistsState: () => (/* binding */ getCategoryPlaylistsState)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _category_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-playlists.reducer */ 57738);



const getCategoryPlaylistsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_category_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__.categoryPlaylistsFeatureKey);
const getCategoryPlaylistsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoryPlaylistsState, _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.SelectorUtil.isLoading);
const getCategoryPlaylistsMap = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoryPlaylistsState, s => s.data);
const getCategoryPlaylistsById = categoryId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getCategoryPlaylistsMap, map => {
  const playlists = map?.get(categoryId);
  return _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_0__.SelectorUtil.getPlaylistsWithRoute(playlists);
});

/***/ }),

/***/ 93844:
/*!*******************************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/category-playlists/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryPlaylistsEffect: () => (/* reexport safe */ _category_playlists_effect__WEBPACK_IMPORTED_MODULE_2__.CategoryPlaylistsEffect),
/* harmony export */   categoryPlaylistsFeatureKey: () => (/* reexport safe */ _category_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__.categoryPlaylistsFeatureKey),
/* harmony export */   categoryPlaylistsReducer: () => (/* reexport safe */ _category_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__.categoryPlaylistsReducer),
/* harmony export */   getCategoryPlaylistsById: () => (/* reexport safe */ _category_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoryPlaylistsById),
/* harmony export */   getCategoryPlaylistsLoading: () => (/* reexport safe */ _category_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoryPlaylistsLoading),
/* harmony export */   getCategoryPlaylistsMap: () => (/* reexport safe */ _category_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoryPlaylistsMap),
/* harmony export */   getCategoryPlaylistsState: () => (/* reexport safe */ _category_playlists_selector__WEBPACK_IMPORTED_MODULE_3__.getCategoryPlaylistsState),
/* harmony export */   loadCategoryPlaylists: () => (/* reexport safe */ _category_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylists),
/* harmony export */   loadCategoryPlaylistsSuccess: () => (/* reexport safe */ _category_playlists_action__WEBPACK_IMPORTED_MODULE_0__.loadCategoryPlaylistsSuccess),
/* harmony export */   setCategoryPlaylistsState: () => (/* reexport safe */ _category_playlists_action__WEBPACK_IMPORTED_MODULE_0__.setCategoryPlaylistsState)
/* harmony export */ });
/* harmony import */ var _category_playlists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-playlists.action */ 3690);
/* harmony import */ var _category_playlists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-playlists.reducer */ 57738);
/* harmony import */ var _category_playlists_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-playlists.effect */ 33433);
/* harmony import */ var _category_playlists_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-playlists.selector */ 25505);





/***/ }),

/***/ 49233:
/*!************************************************************!*\
  !*** ./libs/web/browse/data-access/src/lib/store/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesEffect: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.CategoriesEffect),
/* harmony export */   CategoryPlaylistsEffect: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.CategoryPlaylistsEffect),
/* harmony export */   categoriesFeatureKey: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.categoriesFeatureKey),
/* harmony export */   categoriesReducer: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.categoriesReducer),
/* harmony export */   categoryPlaylistsFeatureKey: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.categoryPlaylistsFeatureKey),
/* harmony export */   categoryPlaylistsReducer: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.categoryPlaylistsReducer),
/* harmony export */   getCategories: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.getCategories),
/* harmony export */   getCategoriesLoading: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.getCategoriesLoading),
/* harmony export */   getCategoriesMap: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.getCategoriesMap),
/* harmony export */   getCategoriesState: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.getCategoriesState),
/* harmony export */   getCategoryById: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.getCategoryById),
/* harmony export */   getCategoryPlaylistsById: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.getCategoryPlaylistsById),
/* harmony export */   getCategoryPlaylistsLoading: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.getCategoryPlaylistsLoading),
/* harmony export */   getCategoryPlaylistsMap: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.getCategoryPlaylistsMap),
/* harmony export */   getCategoryPlaylistsState: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.getCategoryPlaylistsState),
/* harmony export */   loadCategories: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.loadCategories),
/* harmony export */   loadCategoriesSuccess: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess),
/* harmony export */   loadCategoryPlaylists: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.loadCategoryPlaylists),
/* harmony export */   loadCategoryPlaylistsSuccess: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.loadCategoryPlaylistsSuccess),
/* harmony export */   setCategoriesState: () => (/* reexport safe */ _categories__WEBPACK_IMPORTED_MODULE_0__.setCategoriesState),
/* harmony export */   setCategoryPlaylistsState: () => (/* reexport safe */ _category_playlists__WEBPACK_IMPORTED_MODULE_1__.setCategoryPlaylistsState)
/* harmony export */ });
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ 1170);
/* harmony import */ var _category_playlists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-playlists */ 93844);



/***/ }),

/***/ 50925:
/*!****************************************************!*\
  !*** ./libs/web/browse/feature/shell/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseShellModule: () => (/* reexport safe */ _lib_browse_shell_module__WEBPACK_IMPORTED_MODULE_0__.BrowseShellModule)
/* harmony export */ });
/* harmony import */ var _lib_browse_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/browse-shell.module */ 81244);


/***/ }),

/***/ 81244:
/*!**********************************************************************!*\
  !*** ./libs/web/browse/feature/shell/src/lib/browse-shell.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseShellModule: () => (/* binding */ BrowseShellModule)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/browse/data-access */ 27415);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);











class BrowseShellModule {
  static #_ = this.ɵfac = function BrowseShellModule_Factory(t) {
    return new (t || BrowseShellModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: BrowseShellModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      loadChildren: function () {
        var _ref = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return (yield __webpack_require__.e(/*! import() */ "libs_web_browse_feature_categories_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/browse/feature/categories */ 16279))).BrowseCategoriesModule;
        });
        return function loadChildren() {
          return _ref.apply(this, arguments);
        };
      }()
    }, {
      path: `:${_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.CategoryId}`,
      loadChildren: function () {
        var _ref2 = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return (yield Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_ui_media_src_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("libs_web_browse_feature_category_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @angular-spotify/web/browse/feature/category */ 77011))).BrowseCategoryModule;
        });
        return function loadChildren() {
          return _ref2.apply(this, arguments);
        };
      }()
    }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature(_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__.categoriesFeatureKey, _angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__.categoriesReducer), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature(_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__.categoryPlaylistsFeatureKey, _angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__.categoryPlaylistsReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forFeature([_angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__.CategoriesEffect, _angular_spotify_web_browse_data_access__WEBPACK_IMPORTED_MODULE_2__.CategoryPlaylistsEffect])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BrowseShellModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsFeatureModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=libs_web_browse_feature_shell_src_index_ts.js.map