"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _raf = _interopRequireDefault(require("raf"));

var _shared = require("../../utils/shared");

var _scrollTo = _interopRequireDefault(require("../../utils/scrollTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RouterScroller = (0, _reactRouterDom.withRouter)(
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset,
          hash = _this$props2.location.hash;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Do not scroll to top on initial page load if hash does not exist
      this.scrollToHash({
        orScrollToTop: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev) {
      if (prev.location.pathname !== this.props.location.pathname && !this.props.location.hash) {
        if (window.__noScrollTo) {
          window.__noScrollTo = false;
          return;
        }

        this.scrollToTop();
        return;
      }

      if (prev.location.hash !== this.props.location.hash) {
        this.scrollToHash();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _shared.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component));
var _default = RouterScroller;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/home/daniel/flattenedmonad/react-static/src/client/components/RouterScroller.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/client/components/RouterScroller.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZXJTY3JvbGxlci5qcyJdLCJuYW1lcyI6WyJSb3V0ZXJTY3JvbGxlciIsInByb3BzIiwiYXV0b1Njcm9sbFRvVG9wIiwic2Nyb2xsVG9Ub3BEdXJhdGlvbiIsImR1cmF0aW9uIiwib3JTY3JvbGxUb1RvcCIsInNjcm9sbFRvSGFzaER1cmF0aW9uIiwiYXV0b1Njcm9sbFRvSGFzaCIsInNjcm9sbFRvSGFzaE9mZnNldCIsImhhc2giLCJsb2NhdGlvbiIsInJlc29sdmVkSGFzaCIsInN1YnN0cmluZyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0Iiwic2Nyb2xsVG9IYXNoIiwicHJldiIsInBhdGhuYW1lIiwid2luZG93IiwiX19ub1Njcm9sbFRvIiwic2Nyb2xsVG9Ub3AiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSwwRkFzQkwsWUFBTTtBQUFBLHdCQUMrQixNQUFLQyxLQURwQztBQUFBLFVBQ1ZDLGVBRFUsZUFDVkEsZUFEVTtBQUFBLFVBQ09DLG1CQURQLGVBQ09BLG1CQURQOztBQUVsQixVQUFJRCxlQUFKLEVBQXFCO0FBQ25CLCtCQUFTLENBQVQsRUFBWTtBQUNWRSxvQkFBVUQ7QUFEQSxTQUFaO0FBR0Q7QUFDRixLQTdCa0I7O0FBQUEsMkZBOEJKLFlBQW1DO0FBQUEscUZBQVAsRUFBTztBQUFBLG9DQUFoQ0UsYUFBZ0M7QUFBQSxVQUFoQ0EsYUFBZ0MsbUNBQWhCLElBQWdCOztBQUFBLHlCQU01QyxNQUFLSixLQU51QztBQUFBLFVBRTlDSyxvQkFGOEMsZ0JBRTlDQSxvQkFGOEM7QUFBQSxVQUc5Q0MsZ0JBSDhDLGdCQUc5Q0EsZ0JBSDhDO0FBQUEsVUFJOUNDLGtCQUo4QyxnQkFJOUNBLGtCQUo4QztBQUFBLFVBS2xDQyxJQUxrQyxnQkFLOUNDLFFBTDhDLENBS2xDRCxJQUxrQzs7QUFPaEQsVUFBSSxDQUFDRixnQkFBTCxFQUF1QjtBQUNyQjtBQUNEOztBQUNELFVBQUlFLElBQUosRUFBVTtBQUNSLFlBQU1FLGVBQWVGLEtBQUtHLFNBQUwsQ0FBZSxDQUFmLENBQXJCOztBQUNBLFlBQUlELFlBQUosRUFBa0I7QUFDaEI7QUFDQSxjQUFNRSxVQUFVQyxTQUFTQyxjQUFULENBQXdCSixZQUF4QixDQUFoQjs7QUFDQSxjQUFJRSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLG1DQUFTQSxPQUFULEVBQWtCO0FBQ2hCVCx3QkFBVUUsb0JBRE07QUFFaEJVLHNCQUFRUjtBQUZRLGFBQWxCO0FBSUQsV0FMRCxNQUtPO0FBQ0wsOEJBQUksWUFBTTtBQUNSLGtCQUFNSyxVQUFVQyxTQUFTQyxjQUFULENBQXdCSixZQUF4QixDQUFoQjs7QUFDQSxrQkFBSUUsWUFBWSxJQUFoQixFQUFzQjtBQUNwQix1Q0FBU0EsT0FBVCxFQUFrQjtBQUNoQlQsNEJBQVVFLG9CQURNO0FBRWhCVSwwQkFBUVI7QUFGUSxpQkFBbEI7QUFJRDtBQUNGLGFBUkQ7QUFTRDtBQUNGO0FBQ0YsT0F0QkQsTUFzQk8sSUFBSUgsYUFBSixFQUFtQjtBQUN4QiwrQkFBUyxDQUFULEVBQVk7QUFDVkQsb0JBQVVFO0FBREEsU0FBWjtBQUdEO0FBQ0YsS0FuRWtCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdDQUVDO0FBQ2xCO0FBQ0EsV0FBS1csWUFBTCxDQUFrQjtBQUFFWix1QkFBZTtBQUFqQixPQUFsQjtBQUNEO0FBTGtCO0FBQUE7QUFBQSx1Q0FNQWEsSUFOQSxFQU1NO0FBQ3ZCLFVBQ0VBLEtBQUtSLFFBQUwsQ0FBY1MsUUFBZCxLQUEyQixLQUFLbEIsS0FBTCxDQUFXUyxRQUFYLENBQW9CUyxRQUEvQyxJQUNBLENBQUMsS0FBS2xCLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQkQsSUFGdkIsRUFHRTtBQUNBLFlBQUlXLE9BQU9DLFlBQVgsRUFBeUI7QUFDdkJELGlCQUFPQyxZQUFQLEdBQXNCLEtBQXRCO0FBQ0E7QUFDRDs7QUFDRCxhQUFLQyxXQUFMO0FBQ0E7QUFDRDs7QUFDRCxVQUFJSixLQUFLUixRQUFMLENBQWNELElBQWQsS0FBdUIsS0FBS1IsS0FBTCxDQUFXUyxRQUFYLENBQW9CRCxJQUEvQyxFQUFxRDtBQUNuRCxhQUFLUSxZQUFMO0FBQ0Q7QUFDRjtBQXJCa0I7QUFBQTtBQUFBLDZCQW9FVjtBQUNQLGFBQU8seUJBQVksS0FBS2hCLEtBQUwsQ0FBV3NCLFFBQXZCLENBQVA7QUFDRDtBQXRFa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQ1FDLGVBQU1DLFNBRGQsRUFBdkI7ZUEwRWV6QixjOzs7Ozs7Ozs7Ozs7OzswQkExRVRBLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBSQUYgZnJvbSAncmFmJ1xuLy9cbmltcG9ydCB7IHVud3JhcEFycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbFRvJ1xuXG5jb25zdCBSb3V0ZXJTY3JvbGxlciA9IHdpdGhSb3V0ZXIoXG4gIGNsYXNzIFJvdXRlclNjcm9sbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIERvIG5vdCBzY3JvbGwgdG8gdG9wIG9uIGluaXRpYWwgcGFnZSBsb2FkIGlmIGhhc2ggZG9lcyBub3QgZXhpc3RcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKHsgb3JTY3JvbGxUb1RvcDogZmFsc2UgfSlcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXYpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldi5sb2NhdGlvbi5wYXRobmFtZSAhPT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSAmJlxuICAgICAgICAhdGhpcy5wcm9wcy5sb2NhdGlvbi5oYXNoXG4gICAgICApIHtcbiAgICAgICAgaWYgKHdpbmRvdy5fX25vU2Nyb2xsVG8pIHtcbiAgICAgICAgICB3aW5kb3cuX19ub1Njcm9sbFRvID0gZmFsc2VcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAocHJldi5sb2NhdGlvbi5oYXNoICE9PSB0aGlzLnByb3BzLmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goKVxuICAgICAgfVxuICAgIH1cbiAgICBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgYXV0b1Njcm9sbFRvVG9wLCBzY3JvbGxUb1RvcER1cmF0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgICBpZiAoYXV0b1Njcm9sbFRvVG9wKSB7XG4gICAgICAgIHNjcm9sbFRvKDAsIHtcbiAgICAgICAgICBkdXJhdGlvbjogc2Nyb2xsVG9Ub3BEdXJhdGlvbixcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoID0gKHsgb3JTY3JvbGxUb1RvcCA9IHRydWUgfSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNjcm9sbFRvSGFzaER1cmF0aW9uLFxuICAgICAgICBhdXRvU2Nyb2xsVG9IYXNoLFxuICAgICAgICBzY3JvbGxUb0hhc2hPZmZzZXQsXG4gICAgICAgIGxvY2F0aW9uOiB7IGhhc2ggfSxcbiAgICAgIH0gPSB0aGlzLnByb3BzXG4gICAgICBpZiAoIWF1dG9TY3JvbGxUb0hhc2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaGFzaCkge1xuICAgICAgICBjb25zdCByZXNvbHZlZEhhc2ggPSBoYXNoLnN1YnN0cmluZygxKVxuICAgICAgICBpZiAocmVzb2x2ZWRIYXNoKSB7XG4gICAgICAgICAgLy8gV2UgbXVzdCBhdHRlbXB0IHRvIHNjcm9sbCBzeW5jaHJvbm91c2x5IG9yIHdlIHJpc2sgdGhlIGJyb3dzZXIgc2Nyb2xsaW5nIGZvciB1c1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXNvbHZlZEhhc2gpXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNjcm9sbFRvKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IHNjcm9sbFRvSGFzaER1cmF0aW9uLFxuICAgICAgICAgICAgICBvZmZzZXQ6IHNjcm9sbFRvSGFzaE9mZnNldCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFJBRigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXNvbHZlZEhhc2gpXG4gICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8oZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHNjcm9sbFRvSGFzaER1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBzY3JvbGxUb0hhc2hPZmZzZXQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3JTY3JvbGxUb1RvcCkge1xuICAgICAgICBzY3JvbGxUbygwLCB7XG4gICAgICAgICAgZHVyYXRpb246IHNjcm9sbFRvSGFzaER1cmF0aW9uLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdW53cmFwQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICB9XG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyU2Nyb2xsZXJcbiJdfQ==