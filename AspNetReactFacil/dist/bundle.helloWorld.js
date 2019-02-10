/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Scripts/HelloWorld/HelloWorld.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Scripts/HelloWorld/Header.tsx":
/*!***************************************!*\
  !*** ./Scripts/HelloWorld/Header.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        return _super.call(this, props) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("h1", null, this.props.text));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ }),

/***/ "./Scripts/HelloWorld/HelloWorld.tsx":
/*!*******************************************!*\
  !*** ./Scripts/HelloWorld/HelloWorld.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Header_1 = __webpack_require__(/*! ./Header */ "./Scripts/HelloWorld/Header.tsx");
var Ajax = __webpack_require__(/*! ./utils */ "./Scripts/HelloWorld/utils.ts");
function ListItem(props) {
    //return (<li>hola</li>);
    var someData = props.someData;
    return (React.createElement("li", { key: someData.Text, style: { cursor: 'pointer' }, onClick: function () { return props.onClick(someData.Text); } }, someData.Text));
}
function UnorderedList(props) {
    if (props.result) {
        return (React.createElement("ul", null, props.result.map(function (someData) {
            return React.createElement(ListItem, { someData: someData, onClick: props.onClick });
        })));
    }
    return null;
}
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (value) {
            _this.setState({ selectedValue: value });
        };
        _this.state = {
            result: null,
            selectedValue: null
        };
        return _this;
    }
    HelloWorld.prototype.componentDidMount = function () {
        var _this = this;
        Ajax.ajax({ url: '/Home/SomeData' }).then(function (result) {
            _this.setState({ result: result });
        });
    };
    HelloWorld.prototype.render = function () {
        var selectedValue = this.state.selectedValue && React.createElement("h2", null,
            "SelectedValue: ",
            this.state.selectedValue);
        return (this.props.show &&
            React.createElement("div", null,
                React.createElement(Header_1.Header, { text: "GROZO MANZ UltraZ!" }),
                React.createElement("div", null, "Hello world Mostro!"),
                React.createElement(UnorderedList, { result: this.state.result, onClick: this.handleClick.bind(this) }),
                selectedValue));
    };
    return HelloWorld;
}(React.Component));
ReactDOM.render(React.createElement(HelloWorld, { show: true }), document.getElementById('aquireact'));


/***/ }),

/***/ "./Scripts/HelloWorld/utils.ts":
/*!*************************************!*\
  !*** ./Scripts/HelloWorld/utils.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function objectToQueryString(params) {
    if (params) {
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(function (k) { return esc(k) + '=' + esc(params[k]); })
            .join('&');
        return query;
    }
}
function ajax(options) {
    var method = options.method != null ? 'GET' : options.method;
    var body = method == 'GET' ? null : JSON.stringify(options.data);
    var queryString = method == 'GET' ? "" : objectToQueryString(options.data);
    var url = queryString == null ? options.url : options.url + "?" + queryString;
    // Default options are marked with *
    return fetch(url, {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: body,
    }).then(function (response) { return response.json(); }); // parses response to JSON
}
exports.ajax = ajax;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.helloWorld.js.map