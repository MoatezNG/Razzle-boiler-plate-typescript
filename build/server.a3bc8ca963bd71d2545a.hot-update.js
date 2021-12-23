exports.id = "server";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server */ "./src/server.tsx");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-console */


const server = http__WEBPACK_IMPORTED_MODULE_1___default.a.createServer(server__WEBPACK_IMPORTED_MODULE_0__["default"]);
let currentApp = server__WEBPACK_IMPORTED_MODULE_0__["default"];
const port = "3001" || false;
const host = '0.0.0.0';

try {
  server.listen(port, host, () => {
    console.log(`> Server started on port ${port}.`);
  });
} catch (error) {
  if (error) console.log(error);
}

if (true) {
  console.log('✅  Server-side HMR Enabled!');
  module.hot.accept(/*! ./server */ "./src/server.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.tsx");
(() => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      server.removeListener('request', currentApp);
      server.on('request', server__WEBPACK_IMPORTED_MODULE_0__["default"]);
      currentApp = server__WEBPACK_IMPORTED_MODULE_0__["default"];
    } catch (error) {
      console.error(error);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}

/***/ })

};
//# sourceMappingURL=server.a3bc8ca963bd71d2545a.hot-update.js.map