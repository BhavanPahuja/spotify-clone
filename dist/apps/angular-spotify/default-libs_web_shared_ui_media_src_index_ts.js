"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["default-libs_web_shared_ui_media_src_index_ts"],{

/***/ 19238:
/*!************************************************************************!*\
  !*** ./libs/web/shared/directives/click-stop-propagation/src/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagationModule: () => (/* reexport safe */ _lib_click_stop_propagation_module__WEBPACK_IMPORTED_MODULE_0__.ClickStopPropagationModule)
/* harmony export */ });
/* harmony import */ var _lib_click_stop_propagation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/click-stop-propagation.module */ 57832);


/***/ }),

/***/ 97479:
/*!*******************************************************************************************************!*\
  !*** ./libs/web/shared/directives/click-stop-propagation/src/lib/click-stop-propagation.directive.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagationDirective: () => (/* binding */ ClickStopPropagationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ClickStopPropagationDirective {
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  static #_ = this.ɵfac = function ClickStopPropagationDirective_Factory(t) {
    return new (t || ClickStopPropagationDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ClickStopPropagationDirective,
    selectors: [["", "asClickStopPropagation", ""]],
    hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }
  });
}

/***/ }),

/***/ 57832:
/*!****************************************************************************************************!*\
  !*** ./libs/web/shared/directives/click-stop-propagation/src/lib/click-stop-propagation.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagationModule: () => (/* binding */ ClickStopPropagationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-stop-propagation.directive */ 97479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class ClickStopPropagationModule {
  static #_ = this.ɵfac = function ClickStopPropagationModule_Factory(t) {
    return new (t || ClickStopPropagationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ClickStopPropagationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClickStopPropagationModule, {
    declarations: [_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__.ClickStopPropagationDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_0__.ClickStopPropagationDirective]
  });
})();

/***/ }),

/***/ 39988:
/*!***********************************************!*\
  !*** ./libs/web/shared/ui/media/src/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* reexport safe */ _lib_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent)
/* harmony export */ });
/* harmony import */ var _lib_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/card.component */ 66285);


/***/ }),

/***/ 66285:
/*!************************************************************!*\
  !*** ./libs/web/shared/ui/media/src/lib/card.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/data-access/store */ 98138);
/* harmony import */ var _angular_spotify_web_shared_directives_click_stop_propagation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-spotify/web/shared/directives/click-stop-propagation */ 19238);
/* harmony import */ var _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-cover */ 76874);
/* harmony import */ var _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/play-button */ 79225);
/* harmony import */ var _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-spotify/web/shared/utils */ 56940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/component */ 5519);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../media-cover/src/lib/media-cover.component */ 21341);
/* harmony import */ var _play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../play-button/src/lib/play-button.component */ 9261);
/* harmony import */ var _directives_click_stop_propagation_src_lib_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../directives/click-stop-propagation/src/lib/click-stop-propagation.directive */ 97479);















function CardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "as-media-cover", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "as-play-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("togglePlay", function CardComponent_div_1_Template_as_play_button_togglePlay_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.togglePlay.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const isPlaying_r3 = ctx.ngrxLet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-playing", isPlaying_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("imageUrl", ctx_r1.imageUrl)("roundedImage", ctx_r1.roundedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("primary", true)("large", true)("isPlaying", isPlaying_r3);
  }
}
class CardComponent {
  constructor(playbackStore) {
    this.playbackStore = playbackStore;
    this.roundedImage = false;
    this.togglePlay = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  ngOnInit() {
    this.isMediaPlaying$ = _angular_spotify_web_shared_utils__WEBPACK_IMPORTED_MODULE_4__.SelectorUtil.getMediaPlayingState((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.uri), this.playbackStore.playback$]));
  }
  static #_ = this.ɵfac = function CardComponent_Factory(t) {
    return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_spotify_web_shared_data_access_store__WEBPACK_IMPORTED_MODULE_0__.PlaybackStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CardComponent,
    selectors: [["as-card"]],
    inputs: {
      imageUrl: "imageUrl",
      title: "title",
      description: "description",
      routerUrl: "routerUrl",
      uri: "uri",
      roundedImage: "roundedImage"
    },
    outputs: {
      togglePlay: "togglePlay"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 4,
    consts: [[1, "card", 3, "routerLink"], ["class", "card-cover", 3, "is-playing", 4, "ngrxLet"], [1, "card-body"], [1, "card-title", "font-bold", "text-white", "ellipsis-one-line"], [1, "card-description", "text-description"], [1, "card-cover"], [3, "imageUrl", "roundedImage"], ["asClickStopPropagation", "", 1, "play-button-overlay", 3, "togglePlay", "primary", "large", "isPlaying"]],
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CardComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx.routerUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngrxLet", ctx.isMediaPlaying$);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _ngrx_component__WEBPACK_IMPORTED_MODULE_12__.LetDirective, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_2__.MediaCoverModule, _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_5__.MediaCoverComponent, _angular_spotify_web_shared_ui_play_button__WEBPACK_IMPORTED_MODULE_3__.PlayButtonModule, _play_button_src_lib_play_button_component__WEBPACK_IMPORTED_MODULE_6__.PlayButtonComponent, _angular_spotify_web_shared_directives_click_stop_propagation__WEBPACK_IMPORTED_MODULE_1__.ClickStopPropagationModule, _directives_click_stop_propagation_src_lib_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_7__.ClickStopPropagationDirective],
    styles: ["[_nghost-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.7;\n  container: card/inline-size;\n}\n[_nghost-%COMP%]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--background-highlight) / var(--tw-bg-opacity));\n}\n[_nghost-%COMP%]:hover   .play-button-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(10px);\n}\n\n.play-button-overlay[_ngcontent-%COMP%] {\n  right: 10px;\n  bottom: 25px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n  transform: translateY(0);\n  position: absolute;\n}\n\n.card-cover[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n.card-cover.is-playing[_ngcontent-%COMP%]   .play-button-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(10px);\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n@container card (min-width: 282px) {\n  .play-button-overlay[_ngcontent-%COMP%] {\n    right: 9px;\n    bottom: 17px;\n  }\n  .card[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    --size: clamp(16px, 8cqw, 32px);\n    font-size: var(--size);\n    word-break: break-word;\n  }\n  .card-description[_ngcontent-%COMP%] {\n    --size: clamp(14px, 5cqw, 26px);\n    font-size: var(--size);\n    word-break: break-word;\n    line-height: normal;\n  }\n  .card-cover[_ngcontent-%COMP%] {\n    flex: 0 0 64px;\n  }\n}\n@container card (min-width: 350px) {\n  .card-cover[_ngcontent-%COMP%] {\n    flex: 0 0 112px;\n  }\n}\n@container card (min-width: 450px) {\n  .card[_ngcontent-%COMP%] {\n    min-height: 450px;\n    align-items: flex-start;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    z-index: 2;\n  }\n  .card-cover[_ngcontent-%COMP%] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx5RUFBQTtFQUFBLG9CQUFBO0VBWUEsMkJBQUE7QUFYRjtBQUVJO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUNOOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFPRTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQUdFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFKTjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBUkY7RUFXQTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7RUFURjtFQVlBO0lBQ0UsK0JBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0VBVkY7RUFhQTtJQUNFLCtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBWEY7RUFjQTtJQUNFLGNBQUE7RUFaRjtBQUNGO0FBZUE7RUFDRTtJQUNFLGVBQUE7RUFiRjtBQUNGO0FBZ0JBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0VBZEY7RUFpQkE7SUFDRSxVQUFBO0VBZkY7RUFrQkE7SUFDRSxPQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQWhCRjtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAYXBwbHkgYmctaGlnaGxpZ2h0IGJnLW9wYWNpdHktNzA7XG5cbiAgJjpob3ZlciB7XG4gICAgQGFwcGx5IGJnLWhpZ2hsaWdodDtcblxuICAgIC5wbGF5LWJ1dHRvbi1vdmVybGF5IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lcjogY2FyZCAvIGlubGluZS1zaXplO1xufVxuXG4ucGxheS1idXR0b24tb3ZlcmxheSB7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDI1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgQGFwcGx5IGFic29sdXRlO1xufVxuXG4uY2FyZC1jb3ZlciB7XG4gIEBhcHBseSBmbGV4IHJlbGF0aXZlO1xuXG4gICYuaXMtcGxheWluZyB7XG4gICAgLnBsYXktYnV0dG9uLW92ZXJsYXkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFdEQyAyMDIzXG4vLyBDYXJkIExheW91dCBhbmQgQ29udGFpbmVyIFF1ZXJpZXNcbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5AY29udGFpbmVyIGNhcmQgKG1pbi13aWR0aDogMjgycHgpIHtcbiAgLnBsYXktYnV0dG9uLW92ZXJsYXkge1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgYm90dG9tOiAxN3B4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICAtLXNpemU6IGNsYW1wKDE2cHgsIDhjcXcsIDMycHgpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZSk7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICAtLXNpemU6IGNsYW1wKDE0cHgsIDVjcXcsIDI2cHgpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZSk7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLmNhcmQtY292ZXIge1xuICAgIGZsZXg6IDAgMCA2NHB4O1xuICB9XG59XG5cbkBjb250YWluZXIgY2FyZCAobWluLXdpZHRoOiAzNTBweCkge1xuICAuY2FyZC1jb3ZlciB7XG4gICAgZmxleDogMCAwIDExMnB4O1xuICB9XG59XG5cbkBjb250YWluZXIgY2FyZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogNDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAuY2FyZC1ib2R5IHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLmNhcmQtY292ZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9tZWRpYS9zcmMvbGliL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx5RUFBQTtFQUFBLG9CQUFBO0VBWUEsMkJBQUE7QUFYRjtBQUVJO0VBQUEsa0JBQUE7RUFBQSx5RUFBQTtBQUFBO0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUNOOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFPRTtFQUFBLGtCQUFBO0VBQUEsYUFBQTtBQUFBO0FBR0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUpOOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFSRjs7QUFXQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUFSRjtFQVdBO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtFQVRGO0VBWUE7SUFDRSwrQkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7RUFWRjtFQWFBO0lBQ0UsK0JBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFYRjtFQWNBO0lBQ0UsY0FBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFO0lBQ0UsZUFBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsdUJBQUE7RUFkRjtFQWlCQTtJQUNFLFVBQUE7RUFmRjtFQWtCQTtJQUNFLE9BQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBaEJGO0FBQ0Y7QUFJQSxvOUdBQW85RyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIEBhcHBseSBiZy1oaWdobGlnaHQgYmctb3BhY2l0eS03MDtcblxuICAmOmhvdmVyIHtcbiAgICBAYXBwbHkgYmctaGlnaGxpZ2h0O1xuXG4gICAgLnBsYXktYnV0dG9uLW92ZXJsYXkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyOiBjYXJkIC8gaW5saW5lLXNpemU7XG59XG5cbi5wbGF5LWJ1dHRvbi1vdmVybGF5IHtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMjVweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBAYXBwbHkgYWJzb2x1dGU7XG59XG5cbi5jYXJkLWNvdmVyIHtcbiAgQGFwcGx5IGZsZXggcmVsYXRpdmU7XG5cbiAgJi5pcy1wbGF5aW5nIHtcbiAgICAucGxheS1idXR0b24tb3ZlcmxheSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gV0RDIDIwMjNcbi8vIENhcmQgTGF5b3V0IGFuZCBDb250YWluZXIgUXVlcmllc1xuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbkBjb250YWluZXIgY2FyZCAobWluLXdpZHRoOiAyODJweCkge1xuICAucGxheS1idXR0b24tb3ZlcmxheSB7XG4gICAgcmlnaHQ6IDlweDtcbiAgICBib3R0b206IDE3cHg7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIC0tc2l6ZTogY2xhbXAoMTZweCwgOGNxdywgMzJweCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplKTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNhcmQtZGVzY3JpcHRpb24ge1xuICAgIC0tc2l6ZTogY2xhbXAoMTRweCwgNWNxdywgMjZweCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplKTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAuY2FyZC1jb3ZlciB7XG4gICAgZmxleDogMCAwIDY0cHg7XG4gIH1cbn1cblxuQGNvbnRhaW5lciBjYXJkIChtaW4td2lkdGg6IDM1MHB4KSB7XG4gIC5jYXJkLWNvdmVyIHtcbiAgICBmbGV4OiAwIDAgMTEycHg7XG4gIH1cbn1cblxuQGNvbnRhaW5lciBjYXJkIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAuY2FyZC1jb3ZlciB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ })

}]);
//# sourceMappingURL=default-libs_web_shared_ui_media_src_index_ts.js.map