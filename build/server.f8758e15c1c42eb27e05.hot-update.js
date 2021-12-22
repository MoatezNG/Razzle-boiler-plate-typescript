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
var _jsxFileName = "C:\\Users\\moate\\OneDrive\\Desktop\\Tests\\Razzle-boiler-plate-typescript\\src\\client\\pages\\Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Home = () => {
  //   const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = Object(client_redux_app_store__WEBPACK_IMPORTED_MODULE_0__["useAppDispatch"])();
  return __jsx("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: () => dispatch(Object(client_redux_reducers_counterReducer__WEBPACK_IMPORTED_MODULE_1__["incrementAction"])()),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Display Even Numbers"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=server.f8758e15c1c42eb27e05.hot-update.js.map