webpackHotUpdate(4,{

/***/ "./components/Rates.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Simbatronix\\Desktop\\AMBITION 2023\\Programming\\Traversy-Projects\\bitwatcher\\components\\Rates.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Rates =
/*#__PURE__*/
function (_Component) {
  _inherits(Rates, _Component);

  function Rates() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Rates);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Rates.__proto__ || Object.getPrototypeOf(Rates)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        currency: 'USD'
      }
    }), _temp));
  }

  _createClass(Rates, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = ''; //   if(this.state.currency === 'USD'){
      //   list=  <li className='list-group-item'>
      //         Bitcoin rate for {this.props.bpi.bpi.USD.description} : 
      //         <span className='badge badge-primary'>{this.props.bpi.bpi.USD.code}</span><strong>{this.props.bpi.bpi.USD.rate}</strong>
      //         </li>
      //   } else if (this.state.currency === 'GBP'){
      // list = <li className='list-group-item'>
      //         Bitcoin rate for {this.props.bpi.bpi.GBP.description} : 
      //         <span className='badge badge-primary'>{this.props.bpi.bpi.GBP.code}</span><strong>{this.props.bpi.bpi.GBP.rate}</strong>
      //         </li>
      //   } else if (this.state.currency === 'EUR') {
      // list =  <li className='list-group-item'>
      //         Bitcoin rate for {this.props.bpi.bpi.EUR.description} : 
      //         <span className='badge badge-primary'>{this.props.bpi.bpi.EUR.code}</span><strong>{this.props.bpi.bpi.EUR.rate}</strong>
      //         </li>
      //   }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, list), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "form-control",
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "USD"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "GBP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "GBP"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "EUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "EUR")));
    }
  }]);

  return Rates;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Rates);

/***/ })

})
//# sourceMappingURL=4.ac68d1c023d6ad950999.hot-update.js.map