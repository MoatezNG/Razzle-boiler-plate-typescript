exports.id = "server";
exports.modules = {

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var client_redux_app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/_redux/app/store */ "./src/client/_redux/app/store.ts");
/* harmony import */ var client_redux_reducers_counterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/_redux/reducers/counterReducer */ "./src/client/_redux/reducers/counterReducer.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\moate\\OneDrive\\Desktop\\Tests\\Razzle-boiler-plate-typescript\\src\\client\\pages\\Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const Home = () => {
  const {
    count
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.counterReducer);
  const dispatch = Object(client_redux_app_store__WEBPACK_IMPORTED_MODULE_0__["useAppDispatch"])();
  return __jsx("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, `The count is: ${count}`), __jsx("button", {
    type: "button",
    onClick: () => dispatch(Object(client_redux_reducers_counterReducer__WEBPACK_IMPORTED_MODULE_1__["incrementAction"])()),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Display Even Numbers"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=server.1d00f47c181304ddc6ad.hot-update.js.map