exports.id = "server";
exports.modules = {

/***/ "./src/client/_redux/app/store.ts":
/*!****************************************!*\
  !*** ./src/client/_redux/app/store.ts ***!
  \****************************************/
/*! exports provided: useAppDispatch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_counterReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/counterReducer */ "./src/client/_redux/reducers/counterReducer.ts");



const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  counterReducer: _reducers_counterReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: rootReducer,
  //   middleware: new MiddlewareArray().concat(logger),
  devTools: true
});
const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

};
//# sourceMappingURL=server.a45792b1b48131d977ae.hot-update.js.map