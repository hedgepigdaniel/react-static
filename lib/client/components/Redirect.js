"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/Redirect.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//
var Redirect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Redirect).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          _this$props$delay = _this$props.delay,
          delay = _this$props$delay === void 0 ? 0 : _this$props$delay,
          fromPath = _this$props.fromPath,
          rest = _objectWithoutProperties(_this$props, ["to", "delay", "fromPath"]);

      if (typeof document === 'undefined') {
        var resolvedTo = _typeof(to) === 'object' ? to.pathname : to;

        if (!resolvedTo.includes('//')) {
          resolvedTo = "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(resolvedTo === '/' ? '' : resolvedTo);
        }

        return (// ReactRouterRedirect
          _react.default.createElement(_reactHelmet.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, fromPath && _react.default.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(fromPath === '/' ? '' : fromPath)), _react.default.createElement("link", {
            rel: "canonical",
            href: resolvedTo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }), _react.default.createElement("meta", {
            name: "robots",
            content: "noindex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "content-type",
            content: "text/html; charset=utf-8",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "refresh",
            content: "".concat(delay, "; url=").concat(resolvedTo),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }))
        );
      }

      return _react.default.createElement(_reactRouterDom.Redirect, _extends({
        to: to
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Redirect;
}(_react.default.Component);

exports.default = Redirect;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Redirect, "Redirect", "/home/daniel/flattenedmonad/react-static/src/client/components/Redirect.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9SZWRpcmVjdC5qcyJdLCJuYW1lcyI6WyJSZWRpcmVjdCIsInByb3BzIiwidG8iLCJkZWxheSIsImZyb21QYXRoIiwicmVzdCIsImRvY3VtZW50IiwicmVzb2x2ZWRUbyIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSx3QkFDc0MsS0FBS0MsS0FEM0M7QUFBQSxVQUNDQyxFQURELGVBQ0NBLEVBREQ7QUFBQSwwQ0FDS0MsS0FETDtBQUFBLFVBQ0tBLEtBREwsa0NBQ2EsQ0FEYjtBQUFBLFVBQ2dCQyxRQURoQixlQUNnQkEsUUFEaEI7QUFBQSxVQUM2QkMsSUFEN0I7O0FBRVAsVUFBSSxPQUFPQyxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFlBQUlDLGFBQWEsUUFBT0wsRUFBUCxNQUFjLFFBQWQsR0FBeUJBLEdBQUdNLFFBQTVCLEdBQXVDTixFQUF4RDs7QUFDQSxZQUFJLENBQUNLLFdBQVdFLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBTCxFQUFnQztBQUM5QkYsaUNBQWdCRyxRQUFRQyxHQUFSLENBQVlDLHdCQUE1QixTQUNFTCxlQUFlLEdBQWYsR0FBcUIsRUFBckIsR0FBMEJBLFVBRDVCO0FBR0Q7O0FBQ0QsZUFDRTtBQUNBLHVDQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0dILFlBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ01NLFFBQVFDLEdBQVIsQ0FBWUMsd0JBRGxCLFNBRUlSLGFBQWEsR0FBYixHQUFtQixFQUFuQixHQUF3QkEsUUFGNUIsRUFGSixFQVFFO0FBQU0saUJBQUksV0FBVjtBQUFzQixrQkFBTUcsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQVNFO0FBQU0sa0JBQUssUUFBWDtBQUFvQixxQkFBUSxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBVUU7QUFBTSx1QkFBVSxjQUFoQjtBQUErQixxQkFBUSwwQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdFO0FBQU0sdUJBQVUsU0FBaEI7QUFBMEIsK0JBQVlKLEtBQVosbUJBQTBCSSxVQUExQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBRkY7QUFnQkQ7O0FBQ0QsYUFBTyw2QkFBQyx3QkFBRDtBQUFxQixZQUFJTDtBQUF6QixTQUFpQ0csSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDtBQUNEOzs7Ozs7Ozs7OztFQTVCbUNRLGVBQU1DLFM7Ozs7Ozs7Ozs7Ozs7OzBCQUF2QmQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlZGlyZWN0IGFzIFJlYWN0Um91dGVyUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEhlYWQgZnJvbSAncmVhY3QtaGVsbWV0J1xuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkaXJlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0bywgZGVsYXkgPSAwLCBmcm9tUGF0aCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgcmVzb2x2ZWRUbyA9IHR5cGVvZiB0byA9PT0gJ29iamVjdCcgPyB0by5wYXRobmFtZSA6IHRvXG4gICAgICBpZiAoIXJlc29sdmVkVG8uaW5jbHVkZXMoJy8vJykpIHtcbiAgICAgICAgcmVzb2x2ZWRUbyA9IGAke3Byb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSH0ke1xuICAgICAgICAgIHJlc29sdmVkVG8gPT09ICcvJyA/ICcnIDogcmVzb2x2ZWRUb1xuICAgICAgICB9YFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgLy8gUmVhY3RSb3V0ZXJSZWRpcmVjdFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7ZnJvbVBhdGggJiYgKFxuICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICB7YCR7cHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIfSR7XG4gICAgICAgICAgICAgICAgZnJvbVBhdGggPT09ICcvJyA/ICcnIDogZnJvbVBhdGhcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17cmVzb2x2ZWRUb30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cImNvbnRlbnQtdHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cInJlZnJlc2hcIiBjb250ZW50PXtgJHtkZWxheX07IHVybD0ke3Jlc29sdmVkVG99YH0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gPFJlYWN0Um91dGVyUmVkaXJlY3QgdG89e3RvfSB7Li4ucmVzdH0gLz5cbiAgfVxufVxuIl19