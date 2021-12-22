exports.id = "server";
exports.modules = {

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! exports provided: renderApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var client_redux_app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/_redux/app/store */ "./src/client/_redux/app/store.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var server_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! server/routes */ "./src/server/routes/index.ts");
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/App */ "./src/client/App.tsx");
var _jsxFileName = "C:\\Users\\moate\\OneDrive\\Desktop\\Tests\\Razzle-boiler-plate-typescript\\src\\server.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








let assets;

const syncLoadAssets = () => {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
};

syncLoadAssets(); //@ts-ignore

const cssLinksFromAssets = (assets, entrypoint) => assets[entrypoint] ? assets[entrypoint].css ? assets[entrypoint].css //@ts-ignore
.map(asset => `<link rel="stylesheet" href="${asset}">`).join('') : '' : ''; //@ts-ignore


const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => assets[entrypoint] ? assets[entrypoint].js ? assets[entrypoint].js //@ts-ignore
.map(asset => `<script src="${asset}"${extra}></script>`).join('') : '' : '';

const renderApp = (req, res) => {
  const context = {};
  const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    context: context,
    location: req.url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: client_redux_app_store__WEBPACK_IMPORTED_MODULE_0__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_client_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }))));

  if (context.url) {
    return {
      redirect: context.url
    };
  }

  const html = // prettier-ignore
  `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;
  return {
    html
  };
};
const server = express__WEBPACK_IMPORTED_MODULE_1___default()();
server.use("/api/v1" || false, server_routes__WEBPACK_IMPORTED_MODULE_6__["default"]);
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static("C:\\Users\\moate\\OneDrive\\Desktop\\Tests\\Razzle-boiler-plate-typescript\\public")).get('/*', (req, res) => {
  const {
    html = '',
    redirect = false
  } = renderApp(req, res);

  if (redirect) {
    res.redirect(redirect);
  } else {
    res.send(html);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=server.5ab783181dde1ca0bd03.hot-update.js.map