"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["libs_web_future-responsive_src_lib_future-responsive_component_ts"],{

/***/ 84064:
/*!***************************************************************************!*\
  !*** ./libs/web/future-responsive/src/lib/content/flex-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexFormComponent: () => (/* binding */ FlexFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FlexFormComponent {
  static #_ = this.ɵfac = function FlexFormComponent_Factory(t) {
    return new (t || FlexFormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FlexFormComponent,
    selectors: [["as-flex-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 0,
    consts: [[1, "flex-form"], ["for", "name", 1, "name-field"], ["id", "name", "type", "name", "placeholder", "Your name", 1, "name-field"], ["for", "email", 1, "email-field"], ["id", "email", "type", "email", "placeholder", "example@domain.com", 1, "email-field"], [1, "submit"]],
    template: function FlexFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".flex-form[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: flex-end;\n        flex-wrap: wrap;\n        gap: 16px;\n      }\n\n      .name-field[_ngcontent-%COMP%] {\n        flex: 1 1 160px;\n      }\n\n      .email-field[_ngcontent-%COMP%] {\n        flex: 3 1 220px;\n      }\n\n      .button[_ngcontent-%COMP%] {\n        flex: 1 1 80px;\n      }\n\n      label[_ngcontent-%COMP%] {\n        font-weight: 600;\n        color: #fff\n      }\n      input[_ngcontent-%COMP%] {\n        --color-gray-700: hsl(210deg, 14%, 66%);\n        display: block;\n        width: 100%;\n        background: transparent;\n        border-top: none;\n        border-right: none;\n        border-left: none;\n        border-image: initial;\n        border-bottom: 2px solid var(--color-gray-700);\n        color: #fff;\n        height: 2.5rem;\n        border-radius: 2px;\n        outline-color: rgb(255, 221, 51);\n        outline-offset: 4px;\n        font-weight: 400\n      }\n\n      button[_ngcontent-%COMP%] {\n        --color-background: hsl(210deg, 30%, 12%);\n        flex: 1 1 80px;\n        height: 2.5rem;\n        background: rgb(230, 230, 230);\n        border: none;\n        color: var(--color-background);\n        border-radius: 4px;\n        font-weight: 700;\n        outline-color: rgb(255, 221, 51);\n        outline-offset: 4px;\n        padding: 1px 6px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXgtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsU0FBUztNQUNYOztNQUVBO1FBQ0UsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxjQUFjO01BQ2hCOztNQUVBO1FBQ0UsZ0JBQWdCO1FBQ2hCO01BQ0Y7TUFDQTtRQUNFLHVDQUF1QztRQUN2QyxjQUFjO1FBQ2QsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsOENBQThDO1FBQzlDLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdDQUFnQztRQUNoQyxtQkFBbUI7UUFDbkI7TUFDRjs7TUFFQTtRQUNFLHlDQUF5QztRQUN6QyxjQUFjO1FBQ2QsY0FBYztRQUNkLDhCQUE4QjtRQUM5QixZQUFZO1FBQ1osOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZ0NBQWdDO1FBQ2hDLG1CQUFtQjtRQUNuQixnQkFBZ0I7TUFDbEIiLCJmaWxlIjoiZmxleC1mb3JtLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmZsZXgtZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5uYW1lLWZpZWxkIHtcbiAgICAgICAgZmxleDogMSAxIDE2MHB4O1xuICAgICAgfVxuXG4gICAgICAuZW1haWwtZmllbGQge1xuICAgICAgICBmbGV4OiAzIDEgMjIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICBmbGV4OiAxIDEgODBweDtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICAtLWNvbG9yLWdyYXktNzAwOiBoc2woMjEwZGVnLCAxNCUsIDY2JSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktNzAwKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIG91dGxpbmUtY29sb3I6IHJnYigyNTUsIDIyMSwgNTEpO1xuICAgICAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwXG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3ItYmFja2dyb3VuZDogaHNsKDIxMGRlZywgMzAlLCAxMiUpO1xuICAgICAgICBmbGV4OiAxIDEgODBweDtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgb3V0bGluZS1jb2xvcjogcmdiKDI1NSwgMjIxLCA1MSk7XG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDFweCA2cHg7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2Z1dHVyZS1yZXNwb25zaXZlL3NyYy9saWIvY29udGVudC9mbGV4LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLFNBQVM7TUFDWDs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxlQUFlO01BQ2pCOztNQUVBO1FBQ0UsY0FBYztNQUNoQjs7TUFFQTtRQUNFLGdCQUFnQjtRQUNoQjtNQUNGO01BQ0E7UUFDRSx1Q0FBdUM7UUFDdkMsY0FBYztRQUNkLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLDhDQUE4QztRQUM5QyxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQ0FBZ0M7UUFDaEMsbUJBQW1CO1FBQ25CO01BQ0Y7O01BRUE7UUFDRSx5Q0FBeUM7UUFDekMsY0FBYztRQUNkLGNBQWM7UUFDZCw4QkFBOEI7UUFDOUIsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxtQkFBbUI7UUFDbkIsZ0JBQWdCO01BQ2xCOztBQUVOLGdnRkFBZ2dGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZmxleC1mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLm5hbWUtZmllbGQge1xuICAgICAgICBmbGV4OiAxIDEgMTYwcHg7XG4gICAgICB9XG5cbiAgICAgIC5lbWFpbC1maWVsZCB7XG4gICAgICAgIGZsZXg6IDMgMSAyMjBweDtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IDEgMSA4MHB4O1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIC0tY29sb3ItZ3JheS03MDA6IGhzbCgyMTBkZWcsIDE0JSwgNjYlKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JheS03MDApO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgb3V0bGluZS1jb2xvcjogcmdiKDI1NSwgMjIxLCA1MSk7XG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDBcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgLS1jb2xvci1iYWNrZ3JvdW5kOiBoc2woMjEwZGVnLCAzMCUsIDEyJSk7XG4gICAgICAgIGZsZXg6IDEgMSA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBvdXRsaW5lLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDUxKTtcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbiAgICAgICAgcGFkZGluZzogMXB4IDZweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 48702:
/*!************************************************************************************!*\
  !*** ./libs/web/future-responsive/src/lib/content/responsive-content.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _albums_mock_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveToContentComponent: () => (/* binding */ ResponsiveToContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _albums_mock_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../albums.mock.json */ 50302);
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _flex_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flex-form.component */ 84064);
/* harmony import */ var _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/directives/data-size-observer */ 78845);









const _c0 = a0 => ({
  albums: a0
});
function ResponsiveToContentComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ResponsiveToContentComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ResponsiveToContentComponent_ng_template_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "as-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("togglePlay", function ResponsiveToContentComponent_ng_template_21_For_1_Template_as_card_togglePlay_0_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.togglePlay($event, item_r2.album.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", item_r2.album.name)("uri", item_r2.album.uri)("description", item_r2.album.artists[0].name)("imageUrl", item_r2.album.images[0] == null ? null : item_r2.album.images[0].url)("routerUrl", item_r2.album.id);
  }
}
function ResponsiveToContentComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, ResponsiveToContentComponent_ng_template_21_For_1_Template, 1, 5, "as-card", 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const albums_r4 = ctx.albums;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](albums_r4);
  }
}
class ResponsiveToContentComponent {
  constructor() {
    this.response = /*#__PURE__*/ (_albums_mock_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_albums_mock_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_albums_mock_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
    this.topAlbums = this.response.items.slice(0, 8);
    this.featureAlbums = this.response.items.slice(8, 12);
    this.playerApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_2__.PlayerApiService);
  }
  togglePlay(isPlaying, contextUri) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: contextUri
    }).subscribe();
  }
  static #_ = this.ɵfac = function ResponsiveToContentComponent_Factory(t) {
    return new (t || ResponsiveToContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ResponsiveToContentComponent,
    selectors: [["as-responsive-to-content"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 9,
    consts: [["cards", ""], [1, "grid", "grid-cols-[2fr_1fr]", "gap-6"], [1, "top-albums"], [1, "section-header"], [1, "section-title"], ["href", "#", 1, "section-more"], [1, "py-2"], [1, "common-grid", "gap-6"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "feature-albums"], ["dataSizeObserver", "", "resizable", "", 1, "w-[632px]", "mx-auto", "py-10", "px-4", "mt-20", 3, "top"], [3, "title", "uri", "description", "imageUrl", "routerUrl"], [3, "togglePlay", "title", "uri", "description", "imageUrl", "routerUrl"]],
    template: function ResponsiveToContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Top Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ResponsiveToContentComponent_ng_container_9_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 3)(12, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Based on your listening history");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ResponsiveToContentComponent_ng_container_18_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "as-flex-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ResponsiveToContentComponent_ng_template_21_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const cards_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx.topAlbums));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx.featureAlbums));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("top", true);
      }
    },
    dependencies: [_angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _flex_form_component__WEBPACK_IMPORTED_MODULE_3__.FlexFormComponent, _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_4__.DataSizeObserverDirective, _angular_spotify_web_shared_directives_data_size_observer__WEBPACK_IMPORTED_MODULE_4__.ResizableDirective],
    styles: [".section-header[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n      }\n\n      .section-title[_ngcontent-%COMP%] {\n        font-size: 1.25rem;\n        line-height: 1.75rem;\n        --tw-text-opacity: 1;\n        color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n}\n\n      .section-more[_ngcontent-%COMP%] {\n        font-size: 1.125rem;\n        line-height: 1.75rem;\n        --tw-text-opacity: 1;\n        color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNpdmUtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLGVBQWU7UUFDZiw4QkFBOEI7TUFDaEM7O01BR0U7UUFBQSxrQkFBeUI7UUFBekIsb0JBQXlCO1FBQXpCLG9CQUF5QjtRQUF6QjtBQUF5Qjs7TUFJekI7UUFBQSxtQkFBNEI7UUFBNUIsb0JBQTRCO1FBQTVCLG9CQUE0QjtRQUE1QjtBQUE0QiIsImZpbGUiOiJyZXNwb25zaXZlLWNvbnRlbnQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBAYXBwbHkgdGV4dC13aGl0ZSB0ZXh0LXhsO1xuICAgICAgfVxuXG4gICAgICAuc2VjdGlvbi1tb3JlIHtcbiAgICAgICAgQGFwcGx5IHRleHQtZ3JheS0zMDAgdGV4dC1sZztcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2Z1dHVyZS1yZXNwb25zaXZlL3NyYy9saWIvY29udGVudC9yZXNwb25zaXZlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYixlQUFlO1FBQ2YsOEJBQThCO01BQ2hDOztNQUdFO1FBQUEsa0JBQXlCO1FBQXpCLG9CQUF5QjtRQUF6QixvQkFBeUI7UUFBekIseURBQUE7QUFBeUI7O01BSXpCO1FBQUEsbUJBQTRCO1FBQTVCLG9CQUE0QjtRQUE1QixvQkFBNEI7UUFBNUIsZ0RBQUE7QUFBNEI7O0FBU3BDLHd6QkFBd3pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBAYXBwbHkgdGV4dC13aGl0ZSB0ZXh0LXhsO1xuICAgICAgfVxuXG4gICAgICAuc2VjdGlvbi1tb3JlIHtcbiAgICAgICAgQGFwcGx5IHRleHQtZ3JheS0zMDAgdGV4dC1sZztcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 75782:
/*!***************************************************************************!*\
  !*** ./libs/web/future-responsive/src/lib/future-responsive.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FutureResponsiveComponent: () => (/* binding */ FutureResponsiveComponent)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 13774);
/* harmony import */ var _content_responsive_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/responsive-content.component */ 48702);
/* harmony import */ var _responsive_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive-container.component */ 96462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class FutureResponsiveComponent {
  static #_ = this.ɵfac = function FutureResponsiveComponent_Factory(t) {
    return new (t || FutureResponsiveComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FutureResponsiveComponent,
    selectors: [["as-future-responsive"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 0,
    consts: [[1, "content-spacing", "pb-[250px]"], [1, "text-3xl", "text-white"], [1, "block", "mb-20"]],
    template: function FutureResponsiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Future Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "as-responsive-to-content", 2)(4, "as-responsive-to-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, _content_responsive_content_component__WEBPACK_IMPORTED_MODULE_0__.ResponsiveToContentComponent, _responsive_container_component__WEBPACK_IMPORTED_MODULE_1__.ResponsiveToContainerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 96462:
/*!******************************************************************************!*\
  !*** ./libs/web/future-responsive/src/lib/responsive-container.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _albums_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveToContainerComponent: () => (/* binding */ ResponsiveToContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/spotify-api */ 91856);
/* harmony import */ var _angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media */ 39988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _albums_mock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.mock.json */ 50302);







const _c0 = a0 => ({
  albums: a0
});
function ResponsiveToContainerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ResponsiveToContainerComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ResponsiveToContainerComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ResponsiveToContainerComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ResponsiveToContainerComponent_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "as-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("togglePlay", function ResponsiveToContainerComponent_ng_template_12_For_1_Template_as_card_togglePlay_0_listener($event) {
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
function ResponsiveToContainerComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, ResponsiveToContainerComponent_ng_template_12_For_1_Template, 1, 5, "as-card", 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const albums_r4 = ctx.albums;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](albums_r4);
  }
}
class ResponsiveToContainerComponent {
  constructor() {
    this.response = /*#__PURE__*/ (_albums_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_albums_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_albums_mock_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
    this.singleAlbum = [this.response.items[1]];
    this.featureAlbumsTwo = this.response.items.slice(0, 2);
    this.featureAlbumsThree = this.response.items.slice(2, 5);
    this.albums = this.response.items;
    this.playerApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_spotify_web_shared_data_access_spotify_api__WEBPACK_IMPORTED_MODULE_0__.PlayerApiService);
  }
  togglePlay(isPlaying, contextUri) {
    this.playerApi.togglePlay(isPlaying, {
      context_uri: contextUri
    }).subscribe();
  }
  static #_ = this.ɵfac = function ResponsiveToContainerComponent_Factory(t) {
    return new (t || ResponsiveToContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ResponsiveToContainerComponent,
    selectors: [["as-responsive-to-container"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 16,
    consts: [["cards", ""], [1, "grid", "gap-6"], [1, "card-grid", "gap-6"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "common-grid", "gap-6"], [1, "text-3xl", "text-white", "my-8"], [1, "grid", "place-items-center", "min-h-[600px]"], [1, "min-w-[180px]", "resize-x", "overflow-auto"], [3, "title", "uri", "description", "imageUrl", "routerUrl"], [3, "togglePlay", "title", "uri", "description", "imageUrl", "routerUrl"]],
    template: function ResponsiveToContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ResponsiveToContainerComponent_ng_container_2_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ResponsiveToContainerComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ResponsiveToContainerComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Card Playground");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ResponsiveToContainerComponent_ng_container_11_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ResponsiveToContainerComponent_ng_template_12_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const cards_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.featureAlbumsTwo));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.featureAlbumsThree));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.albums));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cards_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.singleAlbum));
      }
    },
    dependencies: [_angular_spotify_web_shared_ui_media__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    styles: [".card-grid[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNpdmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsMkRBQTJEO01BQzdEIiwiZmlsZSI6InJlc3BvbnNpdmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL2Z1dHVyZS1yZXNwb25zaXZlL3NyYy9saWIvcmVzcG9uc2l2ZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYiwyREFBMkQ7TUFDN0Q7O0FBRU4sd2RBQXdkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuY2FyZC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50302:
/*!*************************************************************!*\
  !*** ./libs/web/future-responsive/src/lib/albums.mock.json ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"href":"https://api.spotify.com/v1/me/albums?offset=0&limit=20&locale=en","items":[{"album":{"name":"Red (Deluxe Edition)","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273254c8a09649551438b20f4c0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02254c8a09649551438b20f4c0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851254c8a09649551438b20f4c0","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"},"href":"https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02","id":"06HL4z0CvFAxyc27GXpf02","name":"Taylor Swift","type":"artist","uri":"spotify:artist:06HL4z0CvFAxyc27GXpf02"}],"uri":"spotify:album:1KVKqWeRuXsJDLTW0VuD29","id":"1KVKqWeRuXsJDLTW0VuD29"}},{"album":{"name":"Ghost Stories","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06831d17ae0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02f864bcdcc245f06831d17ae0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851f864bcdcc245f06831d17ae0","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"},"href":"https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU","id":"4gzpq5DPGxSnKTe4SA8HAU","name":"Coldplay","type":"artist","uri":"spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"}],"uri":"spotify:album:2G4AUqfwxcV1UdQjm2ouYr","id":"2G4AUqfwxcV1UdQjm2ouYr"}},{"album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"},"href":"https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V","id":"6eUKZXaKkcviH0Ku9w2n3V","name":"Ed Sheeran","type":"artist","uri":"spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"}],"uri":"spotify:album:3T4tUhGYeRNVUGevb0wThu","id":"3T4tUhGYeRNVUGevb0wThu"}},{"album":{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/41MozSoPIsD1dJM0CLPjZF"},"href":"https://api.spotify.com/v1/artists/41MozSoPIsD1dJM0CLPjZF","id":"41MozSoPIsD1dJM0CLPjZF","name":"BLACKPINK","type":"artist","uri":"spotify:artist:41MozSoPIsD1dJM0CLPjZF"}],"images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273580ac3ad7dfc81e509171120","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02580ac3ad7dfc81e509171120","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851580ac3ad7dfc81e509171120","width":64}],"name":"BORN PINK","uri":"spotify:album:0S4pP8MBY9p7ngFWIZQAJv","id":"0S4pP8MBY9p7ngFWIZQAJv"}},{"album":{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6gzXCdfYfFe5XKhPKkYqxV"},"href":"https://api.spotify.com/v1/artists/6gzXCdfYfFe5XKhPKkYqxV","id":"6gzXCdfYfFe5XKhPKkYqxV","name":"SUPER JUNIOR","type":"artist","uri":"spotify:artist:6gzXCdfYfFe5XKhPKkYqxV"}],"id":"3v5XUoZzxbmJbxs7vWTua3","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273fb6e8a26c2c4d9a23f888a94","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02fb6e8a26c2c4d9a23f888a94","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851fb6e8a26c2c4d9a23f888a94","width":64}],"name":"쏘리 쏘리 Sorry, Sorry - The 3rd Album","uri":"spotify:album:3v5XUoZzxbmJbxs7vWTua3"}},{"album":{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LEtM3AleYg1xabW6CRkpi"},"href":"https://api.spotify.com/v1/artists/1LEtM3AleYg1xabW6CRkpi","id":"1LEtM3AleYg1xabW6CRkpi","name":"Đen","type":"artist","uri":"spotify:artist:1LEtM3AleYg1xabW6CRkpi"}],"id":"3Z09WuEkWJTrQRJ7aFRY51","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273178c0bcd6f92107315535908","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02178c0bcd6f92107315535908","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851178c0bcd6f92107315535908","width":64}],"name":"dongvui harmony","uri":"spotify:album:3Z09WuEkWJTrQRJ7aFRY51"}},{"album":{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"},"href":"https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX","id":"3Nrfpe0tUJi4K4DXYWgMUX","name":"BTS","type":"artist","uri":"spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"}],"external_urls":{"spotify":"https://open.spotify.com/album/4NIqCxqP9o8Tp6tGLBqd8O"},"id":"4NIqCxqP9o8Tp6tGLBqd8O","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2738fbcf6544ff02a8959a81781","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e028fbcf6544ff02a8959a81781","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048518fbcf6544ff02a8959a81781","width":64}],"name":"Love Yourself 轉 \'Tear\'","uri":"spotify:album:4NIqCxqP9o8Tp6tGLBqd8O"}},{"album":{"name":"Millennium","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2732160c02bc56f192df0f4986b","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e022160c02bc56f192df0f4986b","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048512160c02bc56f192df0f4986b","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5rSXSAkZ67PYJSvpUpkOr7"},"href":"https://api.spotify.com/v1/artists/5rSXSAkZ67PYJSvpUpkOr7","id":"5rSXSAkZ67PYJSvpUpkOr7","name":"Backstreet Boys","type":"artist","uri":"spotify:artist:5rSXSAkZ67PYJSvpUpkOr7"}],"uri":"spotify:album:5ySxm9hxBNss01WCL7GLyQ","id":"5ySxm9hxBNss01WCL7GLyQ"}},{"album":{"name":"Westlife","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27344ead2b3b8073d06a23c8580","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0244ead2b3b8073d06a23c8580","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485144ead2b3b8073d06a23c8580","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY"},"href":"https://api.spotify.com/v1/artists/5Z1CCuBsyhEHngq3U5IraY","id":"5Z1CCuBsyhEHngq3U5IraY","name":"Westlife","type":"artist","uri":"spotify:artist:5Z1CCuBsyhEHngq3U5IraY"}],"uri":"spotify:album:03zaputfmJ3wwrKh6bHcTN","id":"03zaputfmJ3wwrKh6bHcTN"}},{"album":{"name":"All Is Violent, All Is Bright (2011 Remastered Edition)","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273f682220fac054e88a347a243","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02f682220fac054e88a347a243","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851f682220fac054e88a347a243","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/079svMEXkbT5nGU2kfoqO2"},"href":"https://api.spotify.com/v1/artists/079svMEXkbT5nGU2kfoqO2","id":"079svMEXkbT5nGU2kfoqO2","name":"God Is An Astronaut","type":"artist","uri":"spotify:artist:079svMEXkbT5nGU2kfoqO2"}],"uri":"spotify:album:1FNW2D6cUdpOWnV38xuGIT","id":"1FNW2D6cUdpOWnV38xuGIT"}},{"album":{"name":"For Long Tomorrow","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273218f23e309df278d5b04748c","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02218f23e309df278d5b04748c","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851218f23e309df278d5b04748c","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0rpKM0MniNkXM1SLSglYUZ"},"href":"https://api.spotify.com/v1/artists/0rpKM0MniNkXM1SLSglYUZ","id":"0rpKM0MniNkXM1SLSglYUZ","name":"toe","type":"artist","uri":"spotify:artist:0rpKM0MniNkXM1SLSglYUZ"}],"uri":"spotify:album:6li0rkNGD98cO8Gxf7nnSk","id":"6li0rkNGD98cO8Gxf7nnSk"}},{"album":{"name":"Young Mountain","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27339522c242d7f10c0b80eb9b9","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0239522c242d7f10c0b80eb9b9","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485139522c242d7f10c0b80eb9b9","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0MG4LXIw7n4x0wjDc6WYXk"},"href":"https://api.spotify.com/v1/artists/0MG4LXIw7n4x0wjDc6WYXk","id":"0MG4LXIw7n4x0wjDc6WYXk","name":"This Will Destroy You","type":"artist","uri":"spotify:artist:0MG4LXIw7n4x0wjDc6WYXk"}],"uri":"spotify:album:4In2V4QylBdWT8HJ0dLDw5","id":"4In2V4QylBdWT8HJ0dLDw5"}},{"album":{"name":"silence in everywhere","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27377f060a217c85b4bf4b05214","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0277f060a217c85b4bf4b05214","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485177f060a217c85b4bf4b05214","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/74AwyBNTnH9c1nqjkbeNIU"},"href":"https://api.spotify.com/v1/artists/74AwyBNTnH9c1nqjkbeNIU","id":"74AwyBNTnH9c1nqjkbeNIU","name":"Euphoria","type":"artist","uri":"spotify:artist:74AwyBNTnH9c1nqjkbeNIU"}],"uri":"spotify:album:42zcMh3vck6K7VueznXwjT","id":"42zcMh3vck6K7VueznXwjT"}},{"album":{"name":"Living Room Songs","images":[{"height":640,"url":"https://i.scdn.co/image/5741c5f8c54e042e4f8a6535293e564f6726467f","width":640},{"height":300,"url":"https://i.scdn.co/image/46de02335c00d14fc56b28eb10228b70430259b5","width":300},{"height":64,"url":"https://i.scdn.co/image/584b68d28583d6fa6a948aadd87ad43802664d55","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7E3BRXV9ZbCt5lQTCXMTia"},"href":"https://api.spotify.com/v1/artists/7E3BRXV9ZbCt5lQTCXMTia","id":"7E3BRXV9ZbCt5lQTCXMTia","name":"Ólafur Arnalds","type":"artist","uri":"spotify:artist:7E3BRXV9ZbCt5lQTCXMTia"}],"uri":"spotify:album:4zj4920hZrnQHYv4jGeyjp","id":"4zj4920hZrnQHYv4jGeyjp"}},{"album":{"name":"In Today Already Walks Tomorrow","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273b875183e9b9a6e4cd4f34f5e","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02b875183e9b9a6e4cd4f34f5e","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851b875183e9b9a6e4cd4f34f5e","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0EnDtiDrCgklr97QMJOSPv"},"href":"https://api.spotify.com/v1/artists/0EnDtiDrCgklr97QMJOSPv","id":"0EnDtiDrCgklr97QMJOSPv","name":"sleepmakeswaves","type":"artist","uri":"spotify:artist:0EnDtiDrCgklr97QMJOSPv"}],"uri":"spotify:album:0Z1zAw2LrGLl6Blp9AiYor","id":"0Z1zAw2LrGLl6Blp9AiYor"}},{"album":{"name":"There is a Tomorrow You Don\'t Know","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273dc2fbf2570d6821c4d4b3f7f","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02dc2fbf2570d6821c4d4b3f7f","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851dc2fbf2570d6821c4d4b3f7f","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0jZNuKQjHZqSJolXzi8kDV"},"href":"https://api.spotify.com/v1/artists/0jZNuKQjHZqSJolXzi8kDV","id":"0jZNuKQjHZqSJolXzi8kDV","name":"Paint The Sky Red","type":"artist","uri":"spotify:artist:0jZNuKQjHZqSJolXzi8kDV"}],"uri":"spotify:album:4YitvgQn2tb7W6hWveT3m2","id":"4YitvgQn2tb7W6hWveT3m2"}},{"album":{"name":"Reanimation","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27384bee8371225201e5258bc0f","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0284bee8371225201e5258bc0f","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485184bee8371225201e5258bc0f","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3ff1CmU6qfTqRAmdrq8EEG"},"href":"https://api.spotify.com/v1/artists/3ff1CmU6qfTqRAmdrq8EEG","id":"3ff1CmU6qfTqRAmdrq8EEG","name":"Lights & Motion","type":"artist","uri":"spotify:artist:3ff1CmU6qfTqRAmdrq8EEG"}],"uri":"spotify:album:6L0fhAi5G9zXbmFelO96Zy","id":"6L0fhAi5G9zXbmFelO96Zy"}},{"album":{"name":"The Earth Is Not a Cold Dead Place","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273be43a3cafaca1c258ec23730","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02be43a3cafaca1c258ec23730","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851be43a3cafaca1c258ec23730","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1uQWmt1OhuHGRKmZ2ZcL6p"},"href":"https://api.spotify.com/v1/artists/1uQWmt1OhuHGRKmZ2ZcL6p","id":"1uQWmt1OhuHGRKmZ2ZcL6p","name":"Explosions In The Sky","type":"artist","uri":"spotify:artist:1uQWmt1OhuHGRKmZ2ZcL6p"}],"uri":"spotify:album:3lLwFslntPTc7cBofBXXDp","id":"3lLwFslntPTc7cBofBXXDp"}},{"album":{"name":"( )","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273b86f9276199af632c42a90cc","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02b86f9276199af632c42a90cc","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851b86f9276199af632c42a90cc","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6UUrUCIZtQeOf8tC0WuzRy"},"href":"https://api.spotify.com/v1/artists/6UUrUCIZtQeOf8tC0WuzRy","id":"6UUrUCIZtQeOf8tC0WuzRy","name":"Sigur Rós","type":"artist","uri":"spotify:artist:6UUrUCIZtQeOf8tC0WuzRy"}],"uri":"spotify:album:3FR8CV7OSyZDnxneavnh8t","id":"3FR8CV7OSyZDnxneavnh8t"}},{"album":{"name":"Not All Who Wonder Are Lost","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2737d0f64771ec7f97c78d27041","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e027d0f64771ec7f97c78d27041","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048517d0f64771ec7f97c78d27041","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0jZNuKQjHZqSJolXzi8kDV"},"href":"https://api.spotify.com/v1/artists/0jZNuKQjHZqSJolXzi8kDV","id":"0jZNuKQjHZqSJolXzi8kDV","name":"Paint The Sky Red","type":"artist","uri":"spotify:artist:0jZNuKQjHZqSJolXzi8kDV"}],"uri":"spotify:album:5kgNmH2iCwRzSrsDpFuCFM","id":"5kgNmH2iCwRzSrsDpFuCFM"}},{"album":{"name":"Raising Your Voice...Trying to Stop an Echo","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273459164b1f709a4d04ef28855","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02459164b1f709a4d04ef28855","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851459164b1f709a4d04ef28855","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0VOR7Ie9xUSb45fzIIVJQ1"},"href":"https://api.spotify.com/v1/artists/0VOR7Ie9xUSb45fzIIVJQ1","id":"0VOR7Ie9xUSb45fzIIVJQ1","name":"Hammock","type":"artist","uri":"spotify:artist:0VOR7Ie9xUSb45fzIIVJQ1"}],"uri":"spotify:album:1xGZ70dEsN8UyiXvcXWwHI","id":"1xGZ70dEsN8UyiXvcXWwHI"}},{"album":{"name":"Mainland","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273832309e2c7de348c64aabfc8","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02832309e2c7de348c64aabfc8","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851832309e2c7de348c64aabfc8","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5Q3lzjdvj9nlwgsXWfhB1u"},"href":"https://api.spotify.com/v1/artists/5Q3lzjdvj9nlwgsXWfhB1u","id":"5Q3lzjdvj9nlwgsXWfhB1u","name":"Inspirative","type":"artist","uri":"spotify:artist:5Q3lzjdvj9nlwgsXWfhB1u"}],"uri":"spotify:album:50tMZ8jk3nABRMv7YCuW8n","id":"50tMZ8jk3nABRMv7YCuW8n"}},{"album":{"name":"Waking Season","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27391b892dac10cfddf96360129","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0291b892dac10cfddf96360129","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485191b892dac10cfddf96360129","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4SXj7TVoA3bgfR8AVssACa"},"href":"https://api.spotify.com/v1/artists/4SXj7TVoA3bgfR8AVssACa","id":"4SXj7TVoA3bgfR8AVssACa","name":"Caspian","type":"artist","uri":"spotify:artist:4SXj7TVoA3bgfR8AVssACa"}],"uri":"spotify:album:6enixSg09cdRYDBllZ8axv","id":"6enixSg09cdRYDBllZ8axv"}},{"album":{"name":"We Move Through Negative Spaces","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ab9db389bdf092a0198485ac","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ab9db389bdf092a0198485ac","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ab9db389bdf092a0198485ac","width":64}],"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/25e3YdiSF0mgqZN0jUHo8N"},"href":"https://api.spotify.com/v1/artists/25e3YdiSF0mgqZN0jUHo8N","id":"25e3YdiSF0mgqZN0jUHo8N","name":"Kontakte","type":"artist","uri":"spotify:artist:25e3YdiSF0mgqZN0jUHo8N"}],"uri":"spotify:album:0Vumehia107DXCobOe3OrJ","id":"0Vumehia107DXCobOe3OrJ"}}],"limit":20,"next":"https://api.spotify.com/v1/me/albums?offset=20&limit=20&locale=en","offset":0,"previous":null,"total":117}');

/***/ })

}]);
//# sourceMappingURL=libs_web_future-responsive_src_lib_future-responsive_component_ts.js.map