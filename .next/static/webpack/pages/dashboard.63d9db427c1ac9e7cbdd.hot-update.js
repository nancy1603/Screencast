webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LeadTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LeadTable */ \"./components/LeadTable.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Timeline */ \"./components/Timeline.js\");\n/* harmony import */ var _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/dashboard.module.css */ \"./styles/dashboard.module.css\");\n/* harmony import */ var _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/ruchika/Desktop/Testing2/Screencast/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction dashboard() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userlevel = _useState[0],\n      setUserlevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      level = _useState2[0],\n      setLevel = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      loaded = _useState3[0],\n      setloaded = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isLoggedin = _useState4[0],\n      setIsLoggedin = _useState4[1];\n\n  var checkLogin = function checkLogin() {\n    if (localStorage.getItem('token') === null) {\n      setIsLoggedin(false);\n      console.log(\"1\");\n    } else {\n      setIsLoggedin(true);\n      console.log(\"2\");\n      console.log(\"dashboard\");\n      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://screencast.weblikate.com\" + \"/api/status\").then(function (response) {\n        setLevel(response.data.round_questions);\n      });\n      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://screencast.weblikate.com\" + \"/api/timeline\", {\n        headers: {\n          Authorization: \"Bearer \" + localStorage.getItem(\"token\")\n        }\n      }).then(function (response) {\n        setUserlevel(response.data.current_question);\n      }).then(function () {\n        setloaded(true);\n      });\n    }\n  };\n\n  var handleLevel = function handleLevel() {\n    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://screencast.weblikate.com\" + \"/api/status\").then(function (response) {\n      setLevel(response.data.round_questions);\n    });\n    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://screencast.weblikate.com\" + \"/api/timeline\", {\n      headers: {\n        Authorization: \"Bearer \" + localStorage.getItem(\"token\")\n      }\n    }).then(function (response) {\n      setUserlevel(response.data.current_question);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    checkLogin(); // console.log(\"dashboard\");\n    //   axios\n    //   .get(process.env.api + \"/api/status\")\n    //   .then((response)=>{\n    //    setLevel(response.data.round_questions)\n    //   })\n    //   axios\n    //   .get(process.env.api + \"/api/timeline\",{\n    //    headers: {\n    //      Authorization: \"Bearer \" + localStorage.getItem(\"token\"),\n    //    },\n    //   })\n    //   .then((response)=>{\n    //     setUserlevel(response.data.current_question)\n    //   })\n    //   .then(() => {\n    //    setloaded(true);\n    //  });\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.TimelineContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, isLoggedin ? __jsx(_components_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    level: level,\n    userlevel: userlevel,\n    loaded: loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 28\n    }\n  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"head\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"container neon-box\",\n    style: {\n      textAlign: \"center\",\n      fontSize: \"25px\",\n      fontFamily: \"'Russo One', sans-serif\" // color:\"white\"\n\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"flicker\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, \"TIMELINE\"))), __jsx(\"div\", {\n    className: _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.show,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 14\n    }\n  }, __jsx(\"div\", {\n    className: \"flicker\",\n    style: {\n      fontSize: \"30px\",\n      alignItems: \"center\",\n      display: \"inline-flex\",\n      position: \"absolute\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 16\n    }\n  }, \"PLEASE LOGIN FIRST!\")))), __jsx(\"div\", {\n    className: _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.MainContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, isLoggedin ? __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    level: level,\n    userlevel: userlevel,\n    loaded: loaded,\n    handleLevel: handleLevel,\n    isLoggedin: isLoggedin,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 29\n    }\n  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"head\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 16\n    }\n  }, __jsx(\"div\", {\n    className: \"container neon-box\",\n    style: {\n      textAlign: \"center\",\n      fontSize: \"29px\",\n      fontFamily: \"'Russo One', sans-serif\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 16\n    }\n  }, __jsx(\"span\", {\n    className: \"flicker\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 14\n    }\n  }, \"SCREENCAST\"))), __jsx(\"div\", {\n    className: \"show\",\n    style: {\n      margin: \"25px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 15\n    }\n  }, __jsx(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    isLoggedin: isLoggedin,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.LeadtableContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, __jsx(_components_LeadTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 56\n    }\n  }))));\n}\n\n_s(dashboard, \"PHtEhuLDTLhI8wtglX/RZAfERvc=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dashboard);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwidXNlU3RhdGUiLCJ1c2VybGV2ZWwiLCJzZXRVc2VybGV2ZWwiLCJsZXZlbCIsInNldExldmVsIiwibG9hZGVkIiwic2V0bG9hZGVkIiwiaXNMb2dnZWRpbiIsInNldElzTG9nZ2VkaW4iLCJjaGVja0xvZ2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicm91bmRfcXVlc3Rpb25zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjdXJyZW50X3F1ZXN0aW9uIiwiaGFuZGxlTGV2ZWwiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJDb250YWluZXIiLCJjb250IiwiVGltZWxpbmVDb250YWluZXIiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJzaG93IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIk1haW5Db250YWluZXIiLCJtYXJnaW4iLCJMZWFkdGFibGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLEVBQUQsQ0FEeEI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSkMsUUFGSTs7QUFBQSxtQkFHU0osc0RBQVEsQ0FBQyxLQUFELENBSGpCO0FBQUEsTUFHVkssTUFIVTtBQUFBLE1BR0hDLFNBSEc7O0FBQUEsbUJBSWdCTixzREFBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxN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QUhQLEtBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1GO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkUsQ0FEQSxDQURBLEVBV0Q7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUNBLFNBQUssRUFBRTtBQUFDTSxZQUFNLEVBQUM7QUFBUixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQSxNQUFDLHlEQUFEO0FBQU8sY0FBVSxFQUFFL0IsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLENBWEMsQ0FGSCxDQW5CQSxFQXdDQTtBQUFLLGFBQVMsRUFBRW1CLG1FQUFNLENBQUNhLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEzQyxDQXhDQSxDQURKLENBRkw7QUFnREY7O0dBbElReEMsUzs7QUFvSU1BLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZUVmZmVjdH1mcm9tICdyZWFjdCdcbmltcG9ydCBMZWFkVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9MZWFkVGFibGUnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVsaW5lJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2Rhc2hib2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuXG5mdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgW3VzZXJsZXZlbCwgc2V0VXNlcmxldmVsXT0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xldmVsLHNldExldmVsXT0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvYWRlZCxzZXRsb2FkZWRdPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9nZ2VkaW4sc2V0SXNMb2dnZWRpbl09dXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgY2hlY2tMb2dpbiA9ICgpPT57XG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA9PT0gbnVsbCApe1xuICAgICAgICBzZXRJc0xvZ2dlZGluKGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIik7XG4gICAgICAgIFxuICAgICAgfWVsc2V7XG4gICAgICAgICAgc2V0SXNMb2dnZWRpbih0cnVlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiMlwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRhc2hib2FyZFwiKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChwcm9jZXNzLmVudi5hcGkgKyBcIi9hcGkvc3RhdHVzXCIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgICAgIHNldExldmVsKHJlc3BvbnNlLmRhdGEucm91bmRfcXVlc3Rpb25zKVxuICAgICAgICB9KVxuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KHByb2Nlc3MuZW52LmFwaSArIFwiL2FwaS90aW1lbGluZVwiLHtcbiAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICAgIHNldFVzZXJsZXZlbChyZXNwb25zZS5kYXRhLmN1cnJlbnRfcXVlc3Rpb24pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgIHNldGxvYWRlZCh0cnVlKTtcbiAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgXG4gICAgXG4gICAgY29uc3QgaGFuZGxlTGV2ZWwgPSAoKT0+e1xuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KHByb2Nlc3MuZW52LmFwaSArIFwiL2FwaS9zdGF0dXNcIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICAgXG4gICAgICAgICBzZXRMZXZlbChyZXNwb25zZS5kYXRhLnJvdW5kX3F1ZXN0aW9ucylcbiAgICAgXG4gICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChwcm9jZXNzLmVudi5hcGkgKyBcIi9hcGkvdGltZWxpbmVcIix7XG4gICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgICAgICBzZXRVc2VybGV2ZWwocmVzcG9uc2UuZGF0YS5jdXJyZW50X3F1ZXN0aW9uKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICAgIGNoZWNrTG9naW4oKTtcblxuICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRhc2hib2FyZFwiKTtcbiAgICAgIC8vICAgYXhpb3NcbiAgICAgIC8vICAgLmdldChwcm9jZXNzLmVudi5hcGkgKyBcIi9hcGkvc3RhdHVzXCIpXG4gICAgICAvLyAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgIC8vICAgIHNldExldmVsKHJlc3BvbnNlLmRhdGEucm91bmRfcXVlc3Rpb25zKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICBheGlvc1xuICAgICAgLy8gICAuZ2V0KHByb2Nlc3MuZW52LmFwaSArIFwiL2FwaS90aW1lbGluZVwiLHtcbiAgICAgIC8vICAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgLy8gICAgfSxcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgLy8gICAgIHNldFVzZXJsZXZlbChyZXNwb25zZS5kYXRhLmN1cnJlbnRfcXVlc3Rpb24pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKCgpID0+IHtcbiAgICAgIC8vICAgIHNldGxvYWRlZCh0cnVlKTtcbiAgICAgIC8vICB9KTtcbiAgICAgICBcbiAgICAgICB9LFtdKTtcbiAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UaW1lbGluZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAge2lzTG9nZ2VkaW4/ICg8VGltZWxpbmUgbGV2ZWw9e2xldmVsfSB1c2VybGV2ZWw9e3VzZXJsZXZlbH0gbG9hZGVkPXtsb2FkZWR9Lz4pOig8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBuZW9uLWJveFwiIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAvLyBjb2xvcjpcIndoaXRlXCJcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj5USU1FTElORTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3d9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlja2VyXCIgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBkaXNwbGF5OlwiaW5saW5lLWZsZXhcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwifX0+XG4gICAgICAgICAgICAgUExFQVNFIExPR0lOIEZJUlNUIVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PjwvPil9XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW5Db250YWluZXJ9PlxuICAgICAgICAgICAgICB7aXNMb2dnZWRpbj8gKDxNYWluIGxldmVsPXtsZXZlbH0gdXNlcmxldmVsPXt1c2VybGV2ZWx9IGxvYWRlZD17bG9hZGVkfSBoYW5kbGVMZXZlbD17aGFuZGxlTGV2ZWx9IGlzTG9nZ2VkaW49e2lzTG9nZ2VkaW59Lz4pOihcbiAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG5lb24tYm94XCJcbiAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjlweFwiLFxuICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj5TQ1JFRU5DQVNUPC9zcGFuPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dcIlxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjpcIjI1cHhcIn19PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxMb2dpbiBpc0xvZ2dlZGluPXtpc0xvZ2dlZGlufS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGVhZHRhYmxlQ29udGFpbmVyfT48TGVhZFRhYmxlLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})