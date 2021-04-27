/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((module, exports) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar __assign = void 0 && (void 0).__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nexports.__esModule = true;\n\nfunction isAxiosData(data) {\n  if (data !== null) return false;\n  if (data instanceof FormData) return false;\n  return _typeof(data) === 'object';\n}\n\nvar axios = {\n  defaults: {\n    baseUrl: '',\n    headers: {}\n  },\n  get: function get(url, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('GET', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      }); //   if (config?.headers) {\n      //     Object.keys(config.headers).map((key) => {\n      //       xhr.setRequestHeader(key, config.headers![key]);\n      //     });\n      //   }\n\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n      xhr.send();\n    });\n  },\n  \"delete\": function _delete(url, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('DELETE', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      });\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n      xhr.send();\n    });\n  },\n  head: function head(url, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('HEAD', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      });\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n      xhr.send();\n    });\n  },\n  options: function options(url, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('OPTIONS', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      });\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n      xhr.send();\n    });\n  },\n  post: function post(url, data, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('POST', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      });\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n\n      if (isAxiosData(data)) {\n        xhr.send(JSON.stringify(data));\n      } else {\n        xhr.send(data);\n      }\n    });\n  },\n  put: function put(url, data, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('PUT', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      });\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n\n      if (isAxiosData(data)) {\n        xhr.send(JSON.stringify(data));\n      } else {\n        xhr.send(data);\n      }\n    });\n  },\n  patch: function patch(url, data, config) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest(); //browser에서 쓰일 경우만 다룸\n\n      xhr.onload = function () {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        } else {\n          reject({\n            data: xhr.responseText,\n            status: xhr.status,\n            statusText: xhr.statusText\n          });\n        }\n      };\n\n      xhr.onerror = function () {\n        reject({\n          data: xhr.responseText,\n          status: xhr.status,\n          statusText: xhr.statusText\n        });\n      };\n\n      xhr.open('PATCH', axios.defaults.baseUrl + url);\n\n      var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);\n\n      Object.keys(headers).map(function (key) {\n        xhr.setRequestHeader(key, headers[key]);\n      });\n      xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;\n\n      if (isAxiosData(data)) {\n        xhr.send(JSON.stringify(data));\n      } else {\n        xhr.send(data);\n      }\n    });\n  }\n};\nexports.default = axios;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://axios/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});