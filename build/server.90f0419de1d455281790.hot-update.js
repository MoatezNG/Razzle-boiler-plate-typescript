exports.id = "server";
exports.modules = {

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
  reducers: {
    incrementAction: state => {
      state.count += 1;
    }
  },
  extraReducers: {
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["apiCall"].pending.type]: state => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["apiCall"].fulfilled.type]: (state, {
      payload
    }) => {
      const {
        count
      } = payload; // eslint-disable-next-line no-param-reassign

      state.count = count;
    },
    [client_actions_counterAction__WEBPACK_IMPORTED_MODULE_1__["apiCall"].rejected.type]: state => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (countSlice.reducer);

/***/ })

};
//# sourceMappingURL=server.90f0419de1d455281790.hot-update.js.map