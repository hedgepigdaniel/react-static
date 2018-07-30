"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _DevSpinner = _interopRequireDefault(require("./DevSpinner"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/SiteData.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var siteDataPromise;

var SiteData =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      siteData: false
    });

    return _this;
  }

  _createClass(SiteData, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _ref, siteData;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(process.env.REACT_STATIC_ENV === 'development')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 3;
                return function () {
                  if (siteDataPromise) {
                    return siteDataPromise;
                  }

                  siteDataPromise = _axios.default.get('/__react-static__/siteData');
                  return siteDataPromise;
                }();

              case 3:
                _ref = _context.sent;
                siteData = _ref.data;

                if (!this.unmounting) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                this.setState({
                  siteData: siteData
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounting = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          render = _this$props.render,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["component", "render", "children"]);

      var siteData; // Get siteInfo from window

      if (typeof window !== 'undefined') {
        if (window.__routeInfo) {
          siteData = window.__routeInfo.siteData;
        }
      } // Get siteInfo from context (SSR)


      if (!siteData && this.context.routeInfo && this.context.routeInfo.siteData) {
        siteData = this.context.routeInfo && this.context.routeInfo.siteData;
      } // Get siteInfo from request


      if (!siteData && this.state.siteData) {
        siteData = this.state.siteData;
      }

      if (!siteData) {
        if (process.env.REACT_STATIC_ENV === 'development') {
          return _react.default.createElement(_DevSpinner.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          });
        }

        return null;
      }

      var finalProps = _objectSpread({}, rest, siteData);

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component);

exports.default = SiteData;

_defineProperty(SiteData, "contextTypes", {
  routeInfo: _propTypes.default.object
});

function withSiteData(Comp) {
  return function ConnectedSiteData(props) {
    return _react.default.createElement(SiteData, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }));
  };
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/home/daniel/flattenedmonad/react-static/src/client/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/home/daniel/flattenedmonad/react-static/src/client/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/home/daniel/flattenedmonad/react-static/src/client/components/SiteData.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TaXRlRGF0YS5qcyJdLCJuYW1lcyI6WyJzaXRlRGF0YVByb21pc2UiLCJTaXRlRGF0YSIsInNpdGVEYXRhIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19FTlYiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1bm1vdW50aW5nIiwic2V0U3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudCIsInJlbmRlciIsImNoaWxkcmVuIiwicmVzdCIsIndpbmRvdyIsIl9fcm91dGVJbmZvIiwiY29udGV4dCIsInJvdXRlSW5mbyIsInN0YXRlIiwiZmluYWxQcm9wcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsIndpdGhTaXRlRGF0YSIsIkNvbXAiLCJDb25uZWN0ZWRTaXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBSUEsZUFBSjs7SUFFcUJDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFJWDtBQUNOQyxnQkFBVTtBQURKLEs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUlGQyxRQUFRQyxHQUFSLENBQVlDLGdCQUFaLEtBQWlDLGE7Ozs7Ozt1QkFDRCxZQUFNO0FBQ3RDLHNCQUFJTCxlQUFKLEVBQXFCO0FBQ25CLDJCQUFPQSxlQUFQO0FBQ0Q7O0FBQ0RBLG9DQUFrQk0sZUFBTUMsR0FBTixDQUFVLDRCQUFWLENBQWxCO0FBQ0EseUJBQU9QLGVBQVA7QUFDRCxpQkFOZ0MsRTs7OztBQUFuQkUsd0IsUUFBTk0sSTs7cUJBT0osS0FBS0MsVTs7Ozs7Ozs7QUFHVCxxQkFBS0MsUUFBTCxDQUFjO0FBQ1pSO0FBRFksaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBS21CO0FBQ3JCLFdBQUtPLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7OzZCQUNRO0FBQUEsd0JBQzBDLEtBQUtFLEtBRC9DO0FBQUEsVUFDQ0MsU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsTUFEWixlQUNZQSxNQURaO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUFBLFVBQ2lDQyxJQURqQzs7QUFFUCxVQUFJYixRQUFKLENBRk8sQ0FJUDs7QUFDQSxVQUFJLE9BQU9jLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsWUFBSUEsT0FBT0MsV0FBWCxFQUF3QjtBQUN0QmYscUJBQVdjLE9BQU9DLFdBQVAsQ0FBbUJmLFFBQTlCO0FBQ0Q7QUFDRixPQVRNLENBV1A7OztBQUNBLFVBQ0UsQ0FBQ0EsUUFBRCxJQUNBLEtBQUtnQixPQUFMLENBQWFDLFNBRGIsSUFFQSxLQUFLRCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJqQixRQUh6QixFQUlFO0FBQ0FBLG1CQUFXLEtBQUtnQixPQUFMLENBQWFDLFNBQWIsSUFBMEIsS0FBS0QsT0FBTCxDQUFhQyxTQUFiLENBQXVCakIsUUFBNUQ7QUFDRCxPQWxCTSxDQW9CUDs7O0FBQ0EsVUFBSSxDQUFDQSxRQUFELElBQWEsS0FBS2tCLEtBQUwsQ0FBV2xCLFFBQTVCLEVBQXNDO0FBQ3BDQSxtQkFBVyxLQUFLa0IsS0FBTCxDQUFXbEIsUUFBdEI7QUFDRDs7QUFFRCxVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLFlBQUlDLFFBQVFDLEdBQVIsQ0FBWUMsZ0JBQVosS0FBaUMsYUFBckMsRUFBb0Q7QUFDbEQsaUJBQU8sNkJBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1nQiwrQkFDRE4sSUFEQyxFQUVEYixRQUZDLENBQU47O0FBSUEsVUFBSVUsU0FBSixFQUFlO0FBQ2IsZUFBT1UsZUFBTUMsYUFBTixDQUFvQlgsU0FBcEIsRUFBK0JTLFVBQS9CLEVBQTJDUCxRQUEzQyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUQsTUFBSixFQUFZO0FBQ1YsZUFBT0EsT0FBT1EsVUFBUCxDQUFQO0FBQ0Q7O0FBQ0QsYUFBT1AsU0FBU08sVUFBVCxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7O0VBdEVtQ0MsZUFBTUUsUzs7OztnQkFBdkJ2QixRLGtCQUNHO0FBQ3BCa0IsYUFBV00sbUJBQVVDO0FBREQsQzs7QUF3RWpCLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU8sU0FBU0MsaUJBQVQsQ0FBMkJsQixLQUEzQixFQUFrQztBQUN2QyxXQUFPLDZCQUFDLFFBQUQ7QUFBVSxpQkFBV2lCO0FBQXJCLE9BQStCakIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBRkQ7QUFHRDs7Ozs7Ozs7Ozs7OzswQkEvRUdYLGU7MEJBRWlCQyxROzBCQXlFTDBCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vL1xuaW1wb3J0IERldlNwaW5uZXIgZnJvbSAnLi9EZXZTcGlubmVyJ1xuXG4vL1xuXG5sZXQgc2l0ZURhdGFQcm9taXNlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpdGVEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICByb3V0ZUluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cbiAgc3RhdGUgPSB7XG4gICAgc2l0ZURhdGE6IGZhbHNlLFxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc3QgeyBkYXRhOiBzaXRlRGF0YSB9ID0gYXdhaXQgKCgpID0+IHtcbiAgICAgICAgaWYgKHNpdGVEYXRhUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiBzaXRlRGF0YVByb21pc2VcbiAgICAgICAgfVxuICAgICAgICBzaXRlRGF0YVByb21pc2UgPSBheGlvcy5nZXQoJy9fX3JlYWN0LXN0YXRpY19fL3NpdGVEYXRhJylcbiAgICAgICAgcmV0dXJuIHNpdGVEYXRhUHJvbWlzZVxuICAgICAgfSkoKVxuICAgICAgaWYgKHRoaXMudW5tb3VudGluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaXRlRGF0YSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5tb3VudGluZyA9IHRydWVcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wb25lbnQsIHJlbmRlciwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgc2l0ZURhdGFcblxuICAgIC8vIEdldCBzaXRlSW5mbyBmcm9tIHdpbmRvd1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHdpbmRvdy5fX3JvdXRlSW5mbykge1xuICAgICAgICBzaXRlRGF0YSA9IHdpbmRvdy5fX3JvdXRlSW5mby5zaXRlRGF0YVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBzaXRlSW5mbyBmcm9tIGNvbnRleHQgKFNTUilcbiAgICBpZiAoXG4gICAgICAhc2l0ZURhdGEgJiZcbiAgICAgIHRoaXMuY29udGV4dC5yb3V0ZUluZm8gJiZcbiAgICAgIHRoaXMuY29udGV4dC5yb3V0ZUluZm8uc2l0ZURhdGFcbiAgICApIHtcbiAgICAgIHNpdGVEYXRhID0gdGhpcy5jb250ZXh0LnJvdXRlSW5mbyAmJiB0aGlzLmNvbnRleHQucm91dGVJbmZvLnNpdGVEYXRhXG4gICAgfVxuXG4gICAgLy8gR2V0IHNpdGVJbmZvIGZyb20gcmVxdWVzdFxuICAgIGlmICghc2l0ZURhdGEgJiYgdGhpcy5zdGF0ZS5zaXRlRGF0YSkge1xuICAgICAgc2l0ZURhdGEgPSB0aGlzLnN0YXRlLnNpdGVEYXRhXG4gICAgfVxuXG4gICAgaWYgKCFzaXRlRGF0YSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIDxEZXZTcGlubmVyIC8+XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGZpbmFsUHJvcHMgPSB7XG4gICAgICAuLi5yZXN0LFxuICAgICAgLi4uc2l0ZURhdGEsXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgZmluYWxQcm9wcywgY2hpbGRyZW4pXG4gICAgfVxuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIHJldHVybiByZW5kZXIoZmluYWxQcm9wcylcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuKGZpbmFsUHJvcHMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTaXRlRGF0YShDb21wKSB7XG4gIHJldHVybiBmdW5jdGlvbiBDb25uZWN0ZWRTaXRlRGF0YShwcm9wcykge1xuICAgIHJldHVybiA8U2l0ZURhdGEgY29tcG9uZW50PXtDb21wfSB7Li4ucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==