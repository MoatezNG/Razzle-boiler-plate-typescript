exports.id = "server";
exports.modules = {

/***/ "./src/client/actions/counterAction.ts":
/*!*********************************************!*\
  !*** ./src/client/actions/counterAction.ts ***!
  \*********************************************/
/*! exports provided: apiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCall", function() { return apiCall; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const apiCall = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('count/increment', async ({
  anyArgs
}, {
  rejectWithValue
}) => {
  try {
    return anyArgs;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

/***/ })

};
//# sourceMappingURL=server.9fb8fe561455eac0b248.hot-update.js.map