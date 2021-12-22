exports.id = "server";
exports.modules = {

/***/ "./src/client/_redux/reducers/counterReducer.ts":
/*!******************************************************!*\
  !*** ./src/client/_redux/reducers/counterReducer.ts ***!
  \******************************************************/
/*! exports provided: countSlice, incrementAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countSlice", function() { return countSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementAction", function() { return incrementAction; });
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
  reducers: {
    incrementAction: state => {
      state.count += 1;
    }
  },
  extraReducers: {
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["apiCall"].pending.type]: state => {
      state.loading = true;
    },
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["apiCall"].fulfilled.type]: (state, {
      payload
    }) => {
      const {
        count
      } = payload;
      state.count = count;
    },
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["apiCall"].rejected.type]: state => {
      state.loading = false;
    }
  }
});
const {
  incrementAction
} = countSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (countSlice.reducer);

/***/ })

};
//# sourceMappingURL=server.1107ab2f2ab975efd1da.hot-update.js.map