webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./src/pages/article/[id].js":
/*!***********************************!*\
  !*** ./src/pages/article/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_metaDecartor_metaDecartor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/metaDecartor/metaDecartor */ "./src/components/metaDecartor/metaDecartor.js");
/* harmony import */ var _styles_article_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/article.module.css */ "./src/styles/article.module.css");
/* harmony import */ var _styles_article_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_article_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "F:\\projects\\Training\\webdevnews\\src\\pages\\article\\[id].js",
    _this = undefined;





var article = function article(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_metaDecartor_metaDecartor__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "".concat(data.title, "-spaceFlight news"),
      description: data.summary,
      imgUrl: data.imageUrl,
      imgAlt: "".concat(data.title, "-spaceFlight news")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_article_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: data.imageUrl,
        alt: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: data.url,
        target: "_blank",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: data.summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _styles_article_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.home_link,
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (article); // export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://www.spaceflightnewsapi.net/api/v2/articles/${context.params.id}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGUvLmpzIl0sIm5hbWVzIjpbImFydGljbGUiLCJkYXRhIiwidGl0bGUiLCJzdW1tYXJ5IiwiaW1hZ2VVcmwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1cmwiLCJob21lX2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM1QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDZFQUFEO0FBQ0UsV0FBSyxZQUFLQSxJQUFJLENBQUNDLEtBQVYsc0JBRFA7QUFFRSxpQkFBVyxFQUFFRCxJQUFJLENBQUNFLE9BRnBCO0FBR0UsWUFBTSxFQUFFRixJQUFJLENBQUNHLFFBSGY7QUFJRSxZQUFNLFlBQUtILElBQUksQ0FBQ0MsS0FBVjtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQVMsZUFBUyxFQUFFRyxpRUFBTSxDQUFDQyxTQUEzQjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFTCxJQUFJLENBQUNHLFFBQWY7QUFBeUIsV0FBRyxFQUFFSCxJQUFJLENBQUNDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsWUFBSSxFQUFFRCxJQUFJLENBQUNNLEdBQWQ7QUFBbUIsY0FBTSxFQUFDLFFBQTFCO0FBQUEsK0JBQ0U7QUFBQSxvQkFBS04sSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRTtBQUFBLGtCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBT0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUUsaUVBQU0sQ0FBQ0csU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQXFCRCxDQXRCRDs7O0FBd0JlUixzRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlL1tpZF0uMzQwNzAzODlmNmMyYjhiZDdkMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWV0YURlY2FydG9yL21ldGFEZWNhcnRvclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYXJ0aWNsZS5tb2R1bGUuY3NzXCI7XHJcbmNvbnN0IGFydGljbGUgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1ldGFcclxuICAgICAgICB0aXRsZT17YCR7ZGF0YS50aXRsZX0tc3BhY2VGbGlnaHQgbmV3c2B9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuc3VtbWFyeX1cclxuICAgICAgICBpbWdVcmw9e2RhdGEuaW1hZ2VVcmx9XHJcbiAgICAgICAgaW1nQWx0PXtgJHtkYXRhLnRpdGxlfS1zcGFjZUZsaWdodCBuZXdzYH1cclxuICAgICAgLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZVVybH0gYWx0PXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDxhIGhyZWY9e2RhdGEudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8cD57ZGF0YS5zdW1tYXJ5fTwvcD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9saW5rfT5HbyBiYWNrPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFydGljbGU7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuLy8gICAgIGBodHRwczovL3d3dy5zcGFjZWZsaWdodG5ld3NhcGkubmV0L2FwaS92Mi9hcnRpY2xlcy8ke2NvbnRleHQucGFyYW1zLmlkfWBcclxuLy8gICApO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBkYXRhLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vd3d3LnNwYWNlZmxpZ2h0bmV3c2FwaS5uZXQvYXBpL3YyL2FydGljbGVzLyR7Y29udGV4dC5wYXJhbXMuaWR9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vd3d3LnNwYWNlZmxpZ2h0bmV3c2FwaS5uZXQvYXBpL3YyL2FydGljbGVzXCIpO1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBpZHMgPSBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IGFydGljbGUuaWQpO1xyXG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=