"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_container-queries_src_index_ts"],{

/***/ 12705:
/*!*************************************************!*\
  !*** ./libs/web/container-queries/src/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerQueriesComponent: () => (/* reexport safe */ _lib_container_queries_component__WEBPACK_IMPORTED_MODULE_0__.ContainerQueriesComponent),
/* harmony export */   containerQueriesDetailGuard: () => (/* reexport safe */ _lib_container_queries_routes__WEBPACK_IMPORTED_MODULE_1__.containerQueriesDetailGuard),
/* harmony export */   containerQueriesRoutes: () => (/* reexport safe */ _lib_container_queries_routes__WEBPACK_IMPORTED_MODULE_1__.containerQueriesRoutes)
/* harmony export */ });
/* harmony import */ var _lib_container_queries_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/container-queries.component */ 93998);
/* harmony import */ var _lib_container_queries_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/container-queries.routes */ 4955);



/***/ }),

/***/ 93998:
/*!***************************************************************************!*\
  !*** ./libs/web/container-queries/src/lib/container-queries.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _albums_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerQueriesComponent: () => (/* binding */ ContainerQueriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _albums_mock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.mock.json */ 41372);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 13774);








const _c0 = a0 => ({
  albums: a0
});
function ContainerQueriesComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ContainerQueriesComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ContainerQueriesComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ContainerQueriesComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ContainerQueriesComponent_ng_template_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "as-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("togglePlay", function ContainerQueriesComponent_ng_template_15_For_1_Template_as_card_togglePlay_0_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.togglePlay($event, item_r2.album.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r2.album.name)("uri", item_r2.album.uri)("description", item_r2.album.artists[0].name)("imageUrl", item_r2.album.images[0] == null ? null : item_r2.album.images[0].url)("routerUrl", item_r2.album.id);
  }
}
function ContainerQueriesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, ContainerQueriesComponent_ng_template_15_For_1_Template, 1, 5, "as-card", 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const albums_r4 = ctx.albums;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](albums_r4);
  }
}
class ContainerQueriesComponent {
  constructor() {
    this.response = /*#__PURE__*/ (_albums_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_albums_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_albums_mock_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
    this.singleAlbum = [this.response.items[1]];
    this.featureAlbumsTwo = this.response.items.slice(0, 2);
    this.featureAlbumsThree = this.response.items.slice(2, 5);
    this.albums = this.response.items.slice(6);
    this.playerApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService);
  }
  togglePlay(isPlaying, contextUri) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: contextUri
    }).subscribe();
  }
  static #_ = this.ɵfac = function ContainerQueriesComponent_Factory(t) {
    return new (t || ContainerQueriesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ContainerQueriesComponent,
    selectors: [["as-container-queries"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 16,
    consts: [["cards", ""], [1, "content-spacing"], [1, "text-3xl", "text-white"], [1, "grid", "gap-6"], [1, "featured-grid", "gap-6"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "common-grid", "gap-6"], [1, "text-3xl", "text-white", "my-8"], [1, "grid", "place-items-center", "min-h-[600px]"], [1, "min-w-[180px]", "resize-x", "overflow-auto"], [3, "title", "uri", "description", "imageUrl", "routerUrl"], [3, "togglePlay", "title", "uri", "description", "imageUrl", "routerUrl"]],
    template: function ContainerQueriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Container Queries Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ContainerQueriesComponent_ng_container_5_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ContainerQueriesComponent_ng_container_7_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ContainerQueriesComponent_ng_container_9_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Card Playground");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ContainerQueriesComponent_ng_container_14_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ContainerQueriesComponent_ng_template_15_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const cards_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.featureAlbumsTwo));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.featureAlbumsThree));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.albums));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.singleAlbum));
      }
    },
    dependencies: [_angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule],
    styles: [".featured-grid[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lci1xdWVyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsMkRBQTJEO01BQzdEIiwiZmlsZSI6ImNvbnRhaW5lci1xdWVyaWVzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmZlYXR1cmVkLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2NvbnRhaW5lci1xdWVyaWVzL3NyYy9saWIvY29udGFpbmVyLXF1ZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYiwyREFBMkQ7TUFDN0Q7O0FBRU4sb2RBQW9kIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZmVhdHVyZWQtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4955:
/*!************************************************************************!*\
  !*** ./libs/web/container-queries/src/lib/container-queries.routes.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerQueriesDetailGuard: () => (/* binding */ containerQueriesDetailGuard),
/* harmony export */   containerQueriesRoutes: () => (/* binding */ containerQueriesRoutes)
/* harmony export */ });
/* harmony import */ var _Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




function containerQueriesDetailGuard(next) {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  const albumId = next.paramMap.get(_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.AlbumId);
  router.navigate([_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.Albums, albumId]);
  return true;
}
const containerQueriesRoutes = [{
  path: '',
  loadComponent: function () {
    var _ref = (0,_Users_bhavanpahuja_Documents_GitHub_angular_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./container-queries.component */ 93998))).ContainerQueriesComponent;
    });
    return function loadComponent() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: `:${_angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_1__.RouterUtil.Configuration.AlbumId}`,
  canActivate: [containerQueriesDetailGuard],
  children: []
}];

/***/ }),

/***/ 41372:
/*!*************************************************************!*\
  !*** ./libs/web/container-queries/src/lib/albums.mock.json ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"href":"https://api.spotify.com/v1/me/albums?offset=0&limit=20&locale=en","items":[{"album":{"name":"Red (Deluxe Edition)","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273254c8a09649551438b20f4c0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02254c8a09649551438b20f4c0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851254c8a09649551438b20f4c0","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"},"href":"https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02","id":"06HL4z0CvFAxyc27GXpf02","name":"Taylor Swift","type":"artist","uri":"spotify:artist:06HL4z0CvFAxyc27GXpf02"}],"uri":"spotify:album:1KVKqWeRuXsJDLTW0VuD29","id":"1KVKqWeRuXsJDLTW0VuD29"}},{"album":{"name":"Ghost Stories","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06831d17ae0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02f864bcdcc245f06831d17ae0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851f864bcdcc245f06831d17ae0","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"},"href":"https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU","id":"4gzpq5DPGxSnKTe4SA8HAU","name":"Coldplay","type":"artist","uri":"spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"}],"uri":"spotify:album:2G4AUqfwxcV1UdQjm2ouYr","id":"2G4AUqfwxcV1UdQjm2ouYr"}},{"album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"},"href":"https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V","id":"6eUKZXaKkcviH0Ku9w2n3V","name":"Ed Sheeran","type":"artist","uri":"spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"}],"uri":"spotify:album:3T4tUhGYeRNVUGevb0wThu","id":"3T4tUhGYeRNVUGevb0wThu"}},{"album":{"name":"Millennium","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2732160c02bc56f192df0f4986b","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e022160c02bc56f192df0f4986b","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048512160c02bc56f192df0f4986b","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5rSXSAkZ67PYJSvpUpkOr7"},"href":"https://api.spotify.com/v1/artists/5rSXSAkZ67PYJSvpUpkOr7","id":"5rSXSAkZ67PYJSvpUpkOr7","name":"Backstreet Boys","type":"artist","uri":"spotify:artist:5rSXSAkZ67PYJSvpUpkOr7"}],"uri":"spotify:album:5ySxm9hxBNss01WCL7GLyQ","id":"5ySxm9hxBNss01WCL7GLyQ"}},{"album":{"name":"Westlife","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27344ead2b3b8073d06a23c8580","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0244ead2b3b8073d06a23c8580","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485144ead2b3b8073d06a23c8580","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY"},"href":"https://api.spotify.com/v1/artists/5Z1CCuBsyhEHngq3U5IraY","id":"5Z1CCuBsyhEHngq3U5IraY","name":"Westlife","type":"artist","uri":"spotify:artist:5Z1CCuBsyhEHngq3U5IraY"}],"uri":"spotify:album:03zaputfmJ3wwrKh6bHcTN","id":"03zaputfmJ3wwrKh6bHcTN"}},{"album":{"name":"All Is Violent, All Is Bright (2011 Remastered Edition)","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273f682220fac054e88a347a243","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02f682220fac054e88a347a243","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851f682220fac054e88a347a243","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/079svMEXkbT5nGU2kfoqO2"},"href":"https://api.spotify.com/v1/artists/079svMEXkbT5nGU2kfoqO2","id":"079svMEXkbT5nGU2kfoqO2","name":"God Is An Astronaut","type":"artist","uri":"spotify:artist:079svMEXkbT5nGU2kfoqO2"}],"uri":"spotify:album:1FNW2D6cUdpOWnV38xuGIT","id":"1FNW2D6cUdpOWnV38xuGIT"}},{"album":{"name":"For Long Tomorrow","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273218f23e309df278d5b04748c","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02218f23e309df278d5b04748c","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851218f23e309df278d5b04748c","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0rpKM0MniNkXM1SLSglYUZ"},"href":"https://api.spotify.com/v1/artists/0rpKM0MniNkXM1SLSglYUZ","id":"0rpKM0MniNkXM1SLSglYUZ","name":"toe","type":"artist","uri":"spotify:artist:0rpKM0MniNkXM1SLSglYUZ"}],"uri":"spotify:album:6li0rkNGD98cO8Gxf7nnSk","id":"6li0rkNGD98cO8Gxf7nnSk"}},{"album":{"name":"Young Mountain","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27339522c242d7f10c0b80eb9b9","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0239522c242d7f10c0b80eb9b9","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485139522c242d7f10c0b80eb9b9","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0MG4LXIw7n4x0wjDc6WYXk"},"href":"https://api.spotify.com/v1/artists/0MG4LXIw7n4x0wjDc6WYXk","id":"0MG4LXIw7n4x0wjDc6WYXk","name":"This Will Destroy You","type":"artist","uri":"spotify:artist:0MG4LXIw7n4x0wjDc6WYXk"}],"uri":"spotify:album:4In2V4QylBdWT8HJ0dLDw5","id":"4In2V4QylBdWT8HJ0dLDw5"}},{"album":{"name":"silence in everywhere","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27377f060a217c85b4bf4b05214","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0277f060a217c85b4bf4b05214","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485177f060a217c85b4bf4b05214","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/74AwyBNTnH9c1nqjkbeNIU"},"href":"https://api.spotify.com/v1/artists/74AwyBNTnH9c1nqjkbeNIU","id":"74AwyBNTnH9c1nqjkbeNIU","name":"Euphoria","type":"artist","uri":"spotify:artist:74AwyBNTnH9c1nqjkbeNIU"}],"uri":"spotify:album:42zcMh3vck6K7VueznXwjT","id":"42zcMh3vck6K7VueznXwjT"}},{"album":{"name":"Living Room Songs","images":[{"height":640,"url":"https://i.scdn.co/image/5741c5f8c54e042e4f8a6535293e564f6726467f","width":640},{"height":300,"url":"https://i.scdn.co/image/46de02335c00d14fc56b28eb10228b70430259b5","width":300},{"height":64,"url":"https://i.scdn.co/image/584b68d28583d6fa6a948aadd87ad43802664d55","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7E3BRXV9ZbCt5lQTCXMTia"},"href":"https://api.spotify.com/v1/artists/7E3BRXV9ZbCt5lQTCXMTia","id":"7E3BRXV9ZbCt5lQTCXMTia","name":"Ólafur Arnalds","type":"artist","uri":"spotify:artist:7E3BRXV9ZbCt5lQTCXMTia"}],"uri":"spotify:album:4zj4920hZrnQHYv4jGeyjp","id":"4zj4920hZrnQHYv4jGeyjp"}},{"album":{"name":"In Today Already Walks Tomorrow","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273b875183e9b9a6e4cd4f34f5e","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02b875183e9b9a6e4cd4f34f5e","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851b875183e9b9a6e4cd4f34f5e","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0EnDtiDrCgklr97QMJOSPv"},"href":"https://api.spotify.com/v1/artists/0EnDtiDrCgklr97QMJOSPv","id":"0EnDtiDrCgklr97QMJOSPv","name":"sleepmakeswaves","type":"artist","uri":"spotify:artist:0EnDtiDrCgklr97QMJOSPv"}],"uri":"spotify:album:0Z1zAw2LrGLl6Blp9AiYor","id":"0Z1zAw2LrGLl6Blp9AiYor"}},{"album":{"name":"There is a Tomorrow You Don\'t Know","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273dc2fbf2570d6821c4d4b3f7f","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02dc2fbf2570d6821c4d4b3f7f","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851dc2fbf2570d6821c4d4b3f7f","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0jZNuKQjHZqSJolXzi8kDV"},"href":"https://api.spotify.com/v1/artists/0jZNuKQjHZqSJolXzi8kDV","id":"0jZNuKQjHZqSJolXzi8kDV","name":"Paint The Sky Red","type":"artist","uri":"spotify:artist:0jZNuKQjHZqSJolXzi8kDV"}],"uri":"spotify:album:4YitvgQn2tb7W6hWveT3m2","id":"4YitvgQn2tb7W6hWveT3m2"}},{"album":{"name":"Reanimation","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27384bee8371225201e5258bc0f","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0284bee8371225201e5258bc0f","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485184bee8371225201e5258bc0f","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3ff1CmU6qfTqRAmdrq8EEG"},"href":"https://api.spotify.com/v1/artists/3ff1CmU6qfTqRAmdrq8EEG","id":"3ff1CmU6qfTqRAmdrq8EEG","name":"Lights & Motion","type":"artist","uri":"spotify:artist:3ff1CmU6qfTqRAmdrq8EEG"}],"uri":"spotify:album:6L0fhAi5G9zXbmFelO96Zy","id":"6L0fhAi5G9zXbmFelO96Zy"}},{"album":{"name":"The Earth Is Not a Cold Dead Place","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273be43a3cafaca1c258ec23730","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02be43a3cafaca1c258ec23730","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851be43a3cafaca1c258ec23730","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1uQWmt1OhuHGRKmZ2ZcL6p"},"href":"https://api.spotify.com/v1/artists/1uQWmt1OhuHGRKmZ2ZcL6p","id":"1uQWmt1OhuHGRKmZ2ZcL6p","name":"Explosions In The Sky","type":"artist","uri":"spotify:artist:1uQWmt1OhuHGRKmZ2ZcL6p"}],"uri":"spotify:album:3lLwFslntPTc7cBofBXXDp","id":"3lLwFslntPTc7cBofBXXDp"}},{"album":{"name":"( )","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273b86f9276199af632c42a90cc","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02b86f9276199af632c42a90cc","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851b86f9276199af632c42a90cc","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6UUrUCIZtQeOf8tC0WuzRy"},"href":"https://api.spotify.com/v1/artists/6UUrUCIZtQeOf8tC0WuzRy","id":"6UUrUCIZtQeOf8tC0WuzRy","name":"Sigur Rós","type":"artist","uri":"spotify:artist:6UUrUCIZtQeOf8tC0WuzRy"}],"uri":"spotify:album:3FR8CV7OSyZDnxneavnh8t","id":"3FR8CV7OSyZDnxneavnh8t"}},{"album":{"name":"Not All Who Wonder Are Lost","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2737d0f64771ec7f97c78d27041","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e027d0f64771ec7f97c78d27041","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048517d0f64771ec7f97c78d27041","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0jZNuKQjHZqSJolXzi8kDV"},"href":"https://api.spotify.com/v1/artists/0jZNuKQjHZqSJolXzi8kDV","id":"0jZNuKQjHZqSJolXzi8kDV","name":"Paint The Sky Red","type":"artist","uri":"spotify:artist:0jZNuKQjHZqSJolXzi8kDV"}],"uri":"spotify:album:5kgNmH2iCwRzSrsDpFuCFM","id":"5kgNmH2iCwRzSrsDpFuCFM"}},{"album":{"name":"Raising Your Voice...Trying to Stop an Echo","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273459164b1f709a4d04ef28855","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02459164b1f709a4d04ef28855","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851459164b1f709a4d04ef28855","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0VOR7Ie9xUSb45fzIIVJQ1"},"href":"https://api.spotify.com/v1/artists/0VOR7Ie9xUSb45fzIIVJQ1","id":"0VOR7Ie9xUSb45fzIIVJQ1","name":"Hammock","type":"artist","uri":"spotify:artist:0VOR7Ie9xUSb45fzIIVJQ1"}],"uri":"spotify:album:1xGZ70dEsN8UyiXvcXWwHI","id":"1xGZ70dEsN8UyiXvcXWwHI"}},{"album":{"name":"Mainland","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273832309e2c7de348c64aabfc8","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02832309e2c7de348c64aabfc8","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851832309e2c7de348c64aabfc8","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5Q3lzjdvj9nlwgsXWfhB1u"},"href":"https://api.spotify.com/v1/artists/5Q3lzjdvj9nlwgsXWfhB1u","id":"5Q3lzjdvj9nlwgsXWfhB1u","name":"Inspirative","type":"artist","uri":"spotify:artist:5Q3lzjdvj9nlwgsXWfhB1u"}],"uri":"spotify:album:50tMZ8jk3nABRMv7YCuW8n","id":"50tMZ8jk3nABRMv7YCuW8n"}},{"album":{"name":"Waking Season","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27391b892dac10cfddf96360129","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0291b892dac10cfddf96360129","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485191b892dac10cfddf96360129","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4SXj7TVoA3bgfR8AVssACa"},"href":"https://api.spotify.com/v1/artists/4SXj7TVoA3bgfR8AVssACa","id":"4SXj7TVoA3bgfR8AVssACa","name":"Caspian","type":"artist","uri":"spotify:artist:4SXj7TVoA3bgfR8AVssACa"}],"uri":"spotify:album:6enixSg09cdRYDBllZ8axv","id":"6enixSg09cdRYDBllZ8axv"}},{"album":{"name":"We Move Through Negative Spaces","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ab9db389bdf092a0198485ac","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ab9db389bdf092a0198485ac","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ab9db389bdf092a0198485ac","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/25e3YdiSF0mgqZN0jUHo8N"},"href":"https://api.spotify.com/v1/artists/25e3YdiSF0mgqZN0jUHo8N","id":"25e3YdiSF0mgqZN0jUHo8N","name":"Kontakte","type":"artist","uri":"spotify:artist:25e3YdiSF0mgqZN0jUHo8N"}],"uri":"spotify:album:0Vumehia107DXCobOe3OrJ","id":"0Vumehia107DXCobOe3OrJ"}}],"limit":20,"next":"https://api.spotify.com/v1/me/albums?offset=20&limit=20&locale=en","offset":0,"previous":null,"total":117}');

/***/ })

}]);
//# sourceMappingURL=libs_web_container-queries_src_index_ts.js.map