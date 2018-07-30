"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorUI = _interopRequireDefault(require("./ErrorUI"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/ErrorCatcher.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ErrorCatcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorCatcher, _React$Component);

  function ErrorCatcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorCatcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorCatcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: null,
      errorInfo: null
    });

    return _this;
  }

  _createClass(ErrorCatcher, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any child components and re-renders with an error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error; // Fallback UI if an error occurs

      if (error) {
        return _react.default.createElement(_ErrorUI.default, _extends({}, this.state, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }));
      }

      return _react.default.Children.only(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorCatcher;
}(_react.default.Component);

exports.default = ErrorCatcher;

_defineProperty(ErrorCatcher, "propTypes", {
  children: _propTypes.default.node.isRequired
});

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorCatcher, "ErrorCatcher", "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/ErrorCatcher.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvcldyYXBwZXIvRXJyb3JDYXRjaGVyLmpzIl0sIm5hbWVzIjpbIkVycm9yQ2F0Y2hlciIsImVycm9yIiwiZXJyb3JJbmZvIiwic2V0U3RhdGUiLCJzdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJvbmx5IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFLWDtBQUNOQyxhQUFPLElBREQ7QUFFTkMsaUJBQVc7QUFGTCxLOzs7Ozs7O3NDQUtVRCxLLEVBQU9DLFMsRUFBVztBQUNsQztBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixvQkFEWTtBQUVaQztBQUZZLE9BQWQ7QUFJRDs7OzZCQUVRO0FBQUEsVUFDQ0QsS0FERCxHQUNXLEtBQUtHLEtBRGhCLENBQ0NILEtBREQsRUFHUDs7QUFDQSxVQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUFPLDZCQUFDLGdCQUFELGVBQWEsS0FBS0csS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNEOztBQUVELGFBQU9DLGVBQU1DLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixLQUFLQyxLQUFMLENBQVdDLFFBQS9CLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7RUEzQnVDSixlQUFNSyxTOzs7O2dCQUEzQlYsWSxlQUNBO0FBQ2pCUyxZQUFVRSxtQkFBVUMsSUFBVixDQUFlQztBQURSLEM7Ozs7Ozs7Ozs7Ozs7MEJBREFiLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRXJyb3JVSSBmcm9tICcuL0Vycm9yVUknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQ2F0Y2hlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbCxcbiAgICBlcnJvckluZm86IG51bGwsXG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgLy8gQ2F0Y2ggZXJyb3JzIGluIGFueSBjaGlsZCBjb21wb25lbnRzIGFuZCByZS1yZW5kZXJzIHdpdGggYW4gZXJyb3IgbWVzc2FnZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3IsXG4gICAgICBlcnJvckluZm8sXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyBGYWxsYmFjayBVSSBpZiBhbiBlcnJvciBvY2N1cnNcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiA8RXJyb3JVSSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuICB9XG59XG4iXX0=