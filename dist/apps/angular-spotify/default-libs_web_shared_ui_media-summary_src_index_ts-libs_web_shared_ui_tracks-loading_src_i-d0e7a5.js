"use strict";
(self["webpackChunkangular_spotify"] = self["webpackChunkangular_spotify"] || []).push([["default-libs_web_shared_ui_media-summary_src_index_ts-libs_web_shared_ui_tracks-loading_src_i-d0e7a5"],{

/***/ 25557:
/*!*******************************************************!*\
  !*** ./libs/web/shared/ui/media-summary/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaSummaryModule: () => (/* reexport safe */ _lib_media_summary_module__WEBPACK_IMPORTED_MODULE_0__.MediaSummaryModule)
/* harmony export */ });
/* harmony import */ var _lib_media_summary_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/media-summary.module */ 75864);


/***/ }),

/***/ 52517:
/*!*****************************************************************************!*\
  !*** ./libs/web/shared/ui/media-summary/src/lib/media-summary.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaSummaryComponent: () => (/* binding */ MediaSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../media-cover/src/lib/media-cover.component */ 21341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



function MediaSummaryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.artist);
  }
}
function MediaSummaryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.likesCount, ctx_r0.likeMapping));
  }
}
function MediaSummaryComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.releaseDate, "yyyy"));
  }
}
function MediaSummaryComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.trackCount, ctx_r0.songMapping));
  }
}
function MediaSummaryComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.followerCount, ctx_r0.followerMapping));
  }
}
class MediaSummaryComponent {
  constructor() {
    this.likeMapping = {
      '=1': '# like',
      'other': '# likes'
    };
    this.songMapping = {
      '=1': '# song',
      'other': '# songs'
    };
    this.followerMapping = {
      '=1': '# follower',
      'other': '# followers'
    };
  }
  static #_ = this.ɵfac = function MediaSummaryComponent_Factory(t) {
    return new (t || MediaSummaryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MediaSummaryComponent,
    selectors: [["as-media-summary"]],
    inputs: {
      type: "type",
      title: "title",
      description: "description",
      artist: "artist",
      trackCount: "trackCount",
      likesCount: "likesCount",
      followerCount: "followerCount",
      imageUrl: "imageUrl",
      releaseDate: "releaseDate"
    },
    decls: 13,
    vars: 9,
    consts: [[3, "imageUrl"], [1, "flex", "flex-col"], [1, "text-sm", "text-white", "uppercase"], [1, "media-title", "ellipsis-one-line"], [1, "mt-3", "mb-2", "text-description", 3, "innerHTML"], [1, "flex"], [1, "text-sm", "font-bold", "text-white"], [1, "media-info"]],
    template: function MediaSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "as-media-cover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MediaSummaryComponent_Conditional_8_Template, 2, 1, "div", 6)(9, MediaSummaryComponent_Conditional_9_Template, 3, 4, "div", 7)(10, MediaSummaryComponent_Conditional_10_Template, 3, 4, "div", 7)(11, MediaSummaryComponent_Conditional_11_Template, 3, 4, "div", 7)(12, MediaSummaryComponent_Conditional_12_Template, 3, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageUrl", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, ctx.artist ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, ctx.likesCount ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](10, ctx.releaseDate ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](11, ctx.trackCount ? 11 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](12, ctx.followerCount ? 12 : -1);
      }
    },
    dependencies: [_media_cover_src_lib_media_cover_component__WEBPACK_IMPORTED_MODULE_0__.MediaCoverComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.I18nPluralPipe],
    styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  min-height: 250px;\n  max-height: 450px;\n  gap: 24px;\n  grid-template-columns: minmax(160px, 240px) 1fr;\n  align-items: flex-end;\n  display: grid;\n  padding-bottom: 1.5rem;\n}\n\n.media-title[_ngcontent-%COMP%]{\n  font-size: 3rem;\n  line-height: 1;\n  font-weight: 900;\n  --tw-text-opacity: 1;\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n  line-height: initial;\n}\n\n.media-info[_ngcontent-%COMP%]{\n  color: rgb(var(--text-baseline) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.7;\n}\n.media-info[_ngcontent-%COMP%]:not(:first-child):before {\n  content: \"\u2022\";\n  margin: 0px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUFBLHNCQUFBO0FBRUY7O0FBRUU7RUFBQSxlQUFBO0VBQUEsY0FBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSx5REFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSx5REFBQTtFQUFBO0FBQUE7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoibWVkaWEtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBnYXA6IDI0cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE2MHB4LCAyNDBweCkgMWZyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIEBhcHBseSBncmlkIHBiLTY7XG59XG5cbi5tZWRpYS10aXRsZSB7XG4gIEBhcHBseSBmb250LWJsYWNrIHRleHQtNXhsIHRleHQtd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4ubWVkaWEtaW5mbyB7XG4gIEBhcHBseSB0ZXh0LXdoaXRlIHRleHQtb3BhY2l0eS03MDtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgY29udGVudDogJ+KAoic7XG4gICAgbWFyZ2luOiAwcHggNHB4O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2ViL3NoYXJlZC91aS9tZWRpYS1zdW1tYXJ5L3NyYy9saWIvbWVkaWEtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQUEsc0JBQUE7QUFFRjs7QUFFRTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLHlEQUFBO0VBQ0Esb0JBQUE7QUFEQTs7QUFLQTtFQUFBLHlEQUFBO0VBQUEsc0JBQUE7QUFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFFSjtBQU9BLDRpQ0FBNGlDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG4gIGdhcDogMjRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTYwcHgsIDI0MHB4KSAxZnI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgQGFwcGx5IGdyaWQgcGItNjtcbn1cblxuLm1lZGlhLXRpdGxlIHtcbiAgQGFwcGx5IGZvbnQtYmxhY2sgdGV4dC01eGwgdGV4dC13aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG5cbi5tZWRpYS1pbmZvIHtcbiAgQGFwcGx5IHRleHQtd2hpdGUgdGV4dC1vcGFjaXR5LTcwO1xuXG4gICY6bm90KDpmaXJzdC1jaGlsZCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnw6LCgMKiJztcbiAgICBtYXJnaW46IDBweCA0cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 75864:
/*!**************************************************************************!*\
  !*** ./libs/web/shared/ui/media-summary/src/lib/media-summary.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaSummaryModule: () => (/* binding */ MediaSummaryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-spotify/web/shared/ui/media-cover */ 76874);
/* harmony import */ var _media_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-summary.component */ 52517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class MediaSummaryModule {
  static #_ = this.ɵfac = function MediaSummaryModule_Factory(t) {
    return new (t || MediaSummaryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MediaSummaryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_0__.MediaCoverModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaSummaryModule, {
    declarations: [_media_summary_component__WEBPACK_IMPORTED_MODULE_1__.MediaSummaryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_spotify_web_shared_ui_media_cover__WEBPACK_IMPORTED_MODULE_0__.MediaCoverModule],
    exports: [_media_summary_component__WEBPACK_IMPORTED_MODULE_1__.MediaSummaryComponent]
  });
})();

/***/ }),

/***/ 94091:
/*!********************************************************!*\
  !*** ./libs/web/shared/ui/tracks-loading/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonComponent: () => (/* reexport safe */ _lib_skeleton_component__WEBPACK_IMPORTED_MODULE_1__.SkeletonComponent),
/* harmony export */   TracksLoadingComponent: () => (/* reexport safe */ _lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_0__.TracksLoadingComponent)
/* harmony export */ });
/* harmony import */ var _lib_tracks_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tracks-loading.component */ 95495);
/* harmony import */ var _lib_skeleton_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/skeleton.component */ 36141);



/***/ }),

/***/ 36141:
/*!*************************************************************************!*\
  !*** ./libs/web/shared/ui/tracks-loading/src/lib/skeleton.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonComponent: () => (/* binding */ SkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const _c0 = ["*"];
class SkeletonComponent {
  constructor() {
    this.pulse = true;
    this.class = `bg-highlight text-transparent rounded-sm block`;
  }
  static #_ = this.ɵfac = function SkeletonComponent_Factory(t) {
    return new (t || SkeletonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkeletonComponent,
    selectors: [["as-skeleton"]],
    hostVars: 2,
    hostBindings: function SkeletonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
      }
    },
    inputs: {
      pulse: "pulse"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 95495:
/*!*******************************************************************************!*\
  !*** ./libs/web/shared/ui/tracks-loading/src/lib/tracks-loading.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracksLoadingComponent: () => (/* binding */ TracksLoadingComponent)
/* harmony export */ });
/* harmony import */ var _skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.component */ 36141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


function TracksLoadingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "as-skeleton", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "as-skeleton", 4)(4, "as-skeleton", 5)(5, "as-skeleton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function TracksLoadingComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "as-skeleton", 4);
  }
}
function TracksLoadingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, TracksLoadingComponent_Conditional_1_For_2_Template, 1, 0, "as-skeleton", 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.skeletonRows);
  }
}
class TracksLoadingComponent {
  constructor() {
    this.skeletonRows = Array.from({
      length: 5
    });
    this.avatar = false;
  }
  set rows(value) {
    this.skeletonRows = Array.from({
      length: value
    });
  }
  static #_ = this.ɵfac = function TracksLoadingComponent_Factory(t) {
    return new (t || TracksLoadingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TracksLoadingComponent,
    selectors: [["as-tracks-loading"]],
    inputs: {
      avatar: "avatar",
      rows: "rows"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[1, "flex", "gap-8"], [1, "flex", "flex-col", "gap-4"], [1, "w-32", "h-32", "flex-shrink-0"], [1, "flex", "flex-col", "flex-1", "gap-4"], [1, "w-full", "h-8"], [1, "w-full", "h-12"]],
    template: function TracksLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TracksLoadingComponent_Conditional_0_Template, 6, 0, "div", 0)(1, TracksLoadingComponent_Conditional_1_Template, 3, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.avatar ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, !ctx.avatar ? 1 : -1);
      }
    },
    dependencies: [_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.SkeletonComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ })

}]);
//# sourceMappingURL=default-libs_web_shared_ui_media-summary_src_index_ts-libs_web_shared_ui_tracks-loading_src_i-d0e7a5.js.map