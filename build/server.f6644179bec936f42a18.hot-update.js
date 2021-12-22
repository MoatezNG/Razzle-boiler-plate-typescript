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
  devTools: true
});
const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/client/_redux/reducers/counterReducer.ts":
/*!******************************************************!*\
  !*** ./src/client/_redux/reducers/counterReducer.ts ***!
  \******************************************************/
/*! exports provided: countSlice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countSlice", function() { return countSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/actions/counterAction */ "./src/client/actions/counterAction.ts");


const initialState = {
  count: 0,
  loading: false
};
const countSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'count',
  initialState,
  reducers: {},
  extraReducers: {
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["countCalc"].pending.type]: state => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["countCalc"].fulfilled.type]: (state, {
      payload
    }) => {
      const {
        count
      } = payload; // eslint-disable-next-line no-param-reassign

      state.count = count;
    },
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["countCalc"].rejected.type]: state => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (countSlice.reducer);

/***/ }),

/***/ "./src/client/actions/counterAction.ts":
/*!*********************************************!*\
  !*** ./src/client/actions/counterAction.ts ***!
  \*********************************************/
/*! exports provided: countCalc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countCalc", function() { return countCalc; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const countCalc = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('count/increment', async ({
  count
}, {
  rejectWithValue
}) => {
  try {
    return count + 1;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

/***/ }),

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var client_actions_counterAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/actions/counterAction */ "./src/client/actions/counterAction.ts");
/* harmony import */ var client_redux_app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/_redux/app/store */ "./src/client/_redux/app/store.ts");
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
  const dispatch = Object(client_redux_app_store__WEBPACK_IMPORTED_MODULE_1__["useAppDispatch"])();
  return __jsx("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, " The count is: ", count), __jsx("button", {
    onClick: () => dispatch(Object(client_actions_counterAction__WEBPACK_IMPORTED_MODULE_0__["countCalc"])()),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Display Even Numbers"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

};
//# sourceMappingURL=server.f6644179bec936f42a18.hot-update.js.map