(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CPSConnectUI\cps-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_school_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/school-info.service */ "IgHO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MainPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_8_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeSchoolAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.schoolAtert, " ");
} }
function MainPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2706");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schoolProfile_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schoolProfile_r4.SchoolShortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" " + schoolProfile_r4.Phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schoolProfile_r4.AddressStreet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schoolProfile_r4.AddressCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schoolProfile_r4.AddressState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schoolProfile_r4.AddressZipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", schoolProfile_r4.Introduction, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://schoolinfo.cps.edu/schoolprofile/SchoolDetails.aspx?SchoolId=", schoolProfile_r4.SchoolID, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MainPageComponent {
    constructor(schoolInfoService) {
        this.schoolInfoService = schoolInfoService;
        this.schoolProfiles = [];
        this.isSchoolAlertVisible = true;
        this.currentYear = 1980;
    }
    ngOnInit() {
        this.currentYear = (new Date()).getFullYear();
        this.schoolAtert = "Schools will be closed on Memmorial Day, Monday, May 31, " + this.currentYear;
        this.schoolInfoService.getSchoolInfo().subscribe(response => {
            this.schoolProfiles = response;
            this.schoolProfiles.forEach(element => {
                if (element.Introduction != undefined && element.Introduction != null) {
                    if (element.Introduction.length > 200) {
                        element.Introduction = element.Introduction.substr(0, 200) + "...";
                    }
                }
            });
        });
    }
    closeSchoolAlert() {
        this.isSchoolAlertVisible = false;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_school_info_service__WEBPACK_IMPORTED_MODULE_1__["SchoolInfoService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 19, vars: 3, consts: [[1, "container-sm", "container-margin"], [1, "row", "bgColorlightgray"], [1, "col-sm-6"], [1, "heading-font"], [1, "col-sm-6", "hide-image", 2, "text-align", "right"], ["src", "../../assets/e000.jpg", "height", "100%", "width", "100%"], ["class", "row", "style", "background-color:darkgrey;color:blue; font-size: 22px;", 4, "ngIf"], [1, "row"], ["class", "col-md-4 nopadding", 4, "ngFor", "ngForOf"], [1, "video-container"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/3CSLLRgFeS8"), "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "row", 2, "height", "100px", "text-align", "center", "background-color", "lightgray"], [1, "col-sm-2"], [1, "col-sm-8"], [2, "margin-top", "20px", "font-size", "14pt"], [1, "row", 2, "background-color", "darkgrey", "color", "blue", "font-size", "22px"], [1, "col-md-2"], [1, "col-md-6", 2, "text-align", "center"], [1, "col-md-4", 2, "text-align", "right", "vertical-align", "middle"], ["href", "#", "data-dismiss", "alert", "aria-label", "close", 1, "close", 3, "click"], [1, "col-md-4", "nopadding"], [1, "bgColorNavy", "gutterSpacingRight", "block-font", "col-block-margin"], [1, "block-heading"], [1, "block-margin", "glyphicon", "glyphicon-earphone"], ["href", "tel:schoolProfile.Phone"], [1, "block-margin"], [1, "Item-margin"], [1, "block-margin", 2, "height", "20px"], [1, "block-margin", "col-block-height"], [3, "innerHTML"], [2, "text-align", "center"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Chicago Students Continue to Make Progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainPageComponent_div_8_Template, 8, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainPageComponent_div_10_Template, 28, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSchoolAlertVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schoolProfiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.currentYear, " Chicago Public Schools");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container-margin[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 1%;margin-bottom: 1%;margin-left: 2%;margin-right: 1% ;\r\n}\r\n.container-margin-inner[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 1%;margin-bottom: 1%;margin-left: 1%;margin-right: 1% ;\r\n}\r\n.bgColorAqa[_ngcontent-%COMP%]\r\n{\r\n    background-color: aqua;\r\n}\r\n.bgColorNavy[_ngcontent-%COMP%]\r\n{\r\n    background-color:#171C61    ;\r\n}\r\n.bgColorGreen[_ngcontent-%COMP%]\r\n{\r\n    background-color:green;\r\n}\r\n.bgColorlightgray[_ngcontent-%COMP%]\r\n{\r\n    background-color:lightgray;\r\n}\r\n.heading-font[_ngcontent-%COMP%]\r\n{\r\n    font-family:  Roboto Regular;\r\n     font-size: 48px;\r\n     line-height: 52px;\r\n}\r\n.nopadding[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n }\r\n.gutterSpacingRight[_ngcontent-%COMP%]\r\n {\r\n     margin-right: 20px;\r\n }\r\n.gutterSpacingLeft[_ngcontent-%COMP%]\r\n {\r\n     margin-left: 13px;\r\n }\r\n.gutterSpacingLeftAndRight[_ngcontent-%COMP%]\r\n {\r\n    margin-left: 7px;\r\n     margin-right: 7px;\r\n }\r\n\r\n.block-font[_ngcontent-%COMP%]\r\n  {\r\n      color: white;\r\n      font-family:  Roboto Regular;\r\n  }\r\n.block-heading[_ngcontent-%COMP%]\r\n  {\r\n      text-align: center;\r\n      font-size: 32px;\r\n      line-height: 36px;\r\n      margin-top: 30px;\r\n  }\r\n.block-margin[_ngcontent-%COMP%]\r\n  {\r\n      margin-left: 30px;\r\n  }\r\n.Item-margin[_ngcontent-%COMP%]\r\n  {\r\n      margin-left: 5px;\r\n  }\r\n.video-container[_ngcontent-%COMP%] {\r\n    margin-left: 0%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    width:100%;\r\n}\r\n.video-container[_ngcontent-%COMP%]::after {\r\n    padding-top: 56.25%;\r\n    display: block;\r\n    content: '';\r\n}\r\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.col-block-margin[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 50px;margin-bottom: 50px;    \r\n}\r\n@media (max-width: 450px) { \r\n     .hide-image[_ngcontent-%COMP%]\r\n     {\r\n        display: none;\r\n     }\r\n     .col-block-margin[_ngcontent-%COMP%]\r\n      {\r\n        margin-top: 50px;margin-bottom: 50px;    \r\n      }\r\n}\r\n@media (min-width: 450.01px) and (max-width: 575.98px) {  \r\n    .col-block-height[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n      } \r\n      .col-block-margin[_ngcontent-%COMP%]\r\n      {\r\n        margin-top:10px;margin-bottom: 10px;    \r\n      }\r\n }\r\n@media (min-width: 576px) and (max-width: 767.98px) { \r\n    .col-block-height[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n      } \r\n      .col-block-margin[_ngcontent-%COMP%]\r\n      {\r\n        margin-top:10px;margin-bottom: 10px;    \r\n      }\r\n }\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n    .col-block-height[_ngcontent-%COMP%] {\r\n        height: 200px;\r\n      } \r\n }\r\n@media (min-width: 992px) and (max-width: 1199.98px) {\r\n    .col-block-height[_ngcontent-%COMP%] {\r\n        height: 150px;\r\n      } \r\n }\r\n@media (min-width: 1200px) { \r\n    .col-block-height[_ngcontent-%COMP%] {\r\n        height: 100px;\r\n      } \r\n     \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCO0FBQ3RFO0FBQ0E7O0lBRUksY0FBYyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUI7QUFDdEU7QUFHQTs7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSw0QkFBNEI7S0FDM0IsZUFBZTtLQUNmLGlCQUFpQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtDQUN2QjtBQUNBOztLQUVJLGtCQUFrQjtDQUN0QjtBQUNBOztLQUVJLGlCQUFpQjtDQUNyQjtBQUNBOztJQUVHLGdCQUFnQjtLQUNmLGlCQUFpQjtDQUNyQjtBQUNEOzs7OztLQUtLO0FBQ0g7O01BRUksWUFBWTtNQUNaLDRCQUE0QjtFQUNoQztBQUNBOztNQUVJLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtFQUNwQjtBQUNBOztNQUVJLGlCQUFpQjtFQUNyQjtBQUNBOztNQUVJLGdCQUFnQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0IsQ0FBQyxtQkFBbUI7QUFDdEM7QUFDQztLQUNJOztRQUVHLGFBQWE7S0FDaEI7S0FDQTs7UUFFRyxnQkFBZ0IsQ0FBQyxtQkFBbUI7TUFDdEM7QUFDTjtBQUNBO0lBQ0k7UUFDSSxhQUFhO01BQ2Y7TUFDQTs7UUFFRSxlQUFlLENBQUMsbUJBQW1CO01BQ3JDO0NBQ0w7QUFDQTtJQUNHO1FBQ0ksWUFBWTtNQUNkO01BQ0E7O1FBRUUsZUFBZSxDQUFDLG1CQUFtQjtNQUNyQztDQUNMO0FBQ0Q7SUFDSTtRQUNJLGFBQWE7TUFDZjtDQUNMO0FBR0Q7SUFDSTtRQUNJLGFBQWE7TUFDZjtDQUNMO0FBRUQ7SUFDSTtRQUNJLGFBQWE7TUFDZjs7SUFFRiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbWFyZ2luXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDElO21hcmdpbi1ib3R0b206IDElO21hcmdpbi1sZWZ0OiAyJTttYXJnaW4tcmlnaHQ6IDElIDtcclxufVxyXG4uY29udGFpbmVyLW1hcmdpbi1pbm5lclxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxJTttYXJnaW4tYm90dG9tOiAxJTttYXJnaW4tbGVmdDogMSU7bWFyZ2luLXJpZ2h0OiAxJSA7XHJcbn1cclxuXHJcblxyXG4uYmdDb2xvckFxYVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcbi5iZ0NvbG9yTmF2eVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNzFDNjEgICAgO1xyXG59XHJcbi5iZ0NvbG9yR3JlZW5cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxufVxyXG4uYmdDb2xvcmxpZ2h0Z3JheVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtcclxufVxyXG4uaGVhZGluZy1mb250XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAgUm9ib3RvIFJlZ3VsYXI7XHJcbiAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG59XHJcbi5ub3BhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZ3V0dGVyU3BhY2luZ1JpZ2h0XHJcbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gfVxyXG4gLmd1dHRlclNwYWNpbmdMZWZ0XHJcbiB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiB9XHJcbiAuZ3V0dGVyU3BhY2luZ0xlZnRBbmRSaWdodFxyXG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuIH1cclxuLyogLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9ICovXHJcbiAgLmJsb2NrLWZvbnRcclxuICB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICBSb2JvdG8gUmVndWxhcjtcclxuICB9XHJcbiAgLmJsb2NrLWhlYWRpbmdcclxuICB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmJsb2NrLW1hcmdpblxyXG4gIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5JdGVtLW1hcmdpblxyXG4gIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnZpZGVvLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDU2LjI1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXIgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uY29sLWJsb2NrLW1hcmdpblxyXG57XHJcbiAgbWFyZ2luLXRvcDogNTBweDttYXJnaW4tYm90dG9tOiA1MHB4OyAgICBcclxufVxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7IFxyXG4gICAgIC5oaWRlLWltYWdlXHJcbiAgICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgfVxyXG4gICAgIC5jb2wtYmxvY2stbWFyZ2luXHJcbiAgICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O21hcmdpbi1ib3R0b206IDUwcHg7ICAgIFxyXG4gICAgICB9XHJcbn0gXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0NTAuMDFweCkgYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7ICBcclxuICAgIC5jb2wtYmxvY2staGVpZ2h0e1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIH0gXHJcbiAgICAgIC5jb2wtYmxvY2stbWFyZ2luXHJcbiAgICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbTogMTBweDsgICAgXHJcbiAgICAgIH1cclxuIH0gXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkgeyBcclxuICAgIC5jb2wtYmxvY2staGVpZ2h0e1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgfSBcclxuICAgICAgLmNvbC1ibG9jay1tYXJnaW5cclxuICAgICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOiAxMHB4OyAgICBcclxuICAgICAgfVxyXG4gfSBcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXHJcbiAgICAuY29sLWJsb2NrLWhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgfSBcclxuIH1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAgIC5jb2wtYmxvY2staGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB9IFxyXG4gfSBcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgXHJcbiAgICAuY29sLWJsb2NrLWhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgfSBcclxuICAgICBcclxuICAgIH1cclxuICAgICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return [{ type: _services_school_info_service__WEBPACK_IMPORTED_MODULE_1__["SchoolInfoService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IgHO":
/*!*************************************************!*\
  !*** ./src/app/services/school-info.service.ts ***!
  \*************************************************/
/*! exports provided: SchoolInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolInfoService", function() { return SchoolInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SchoolInfoService {
    constructor(http) {
        this.http = http;
    }
    getSchoolInfo() {
        return this.http.get("https://api.cps.edu/schoolprofile/CPS/SchoolComparison?SchoolIDs=609720,609755,609726");
    }
}
SchoolInfoService.ɵfac = function SchoolInfoService_Factory(t) { return new (t || SchoolInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SchoolInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchoolInfoService, factory: SchoolInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchoolInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");



class AppComponent {
    constructor() {
        this.title = 'cps-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
    } }, directives: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map