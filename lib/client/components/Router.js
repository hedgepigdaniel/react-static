"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

var _createMemoryHistory = _interopRequireDefault(require("history/createMemoryHistory"));

var _createHashHistory = _interopRequireDefault(require("history/createHashHistory"));

var _reactRouterDom = require("react-router-dom");

var _shared = require("../../utils/shared");

var _methods = require("../methods");

var _RouterScroller = _interopRequireDefault(require("./RouterScroller"));

var _DevSpinner = _interopRequireDefault(require("./DevSpinner"));

var _ErrorWrapper = _interopRequireDefault(require("./ErrorWrapper"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/Router.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router(props, context) {
    var _this;

    _classCallCheck(this, Router);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Router).call(this)); // In SRR and production, synchronously register the templateID for the
    // initial path

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ready: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bootstrapRouteInfo", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var href, path, allProps, routeInfo;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof window !== 'undefined')) {
                  _context.next = 13;
                  break;
                }

                // Get the entry path from location
                href = decodeURIComponent(window.location.href);
                path = (0, _shared.cleanPath)(href); // Injest and cache the embedded routeInfo in the page if possible

                if (window.__routeInfo && window.__routeInfo.path === path) {
                  allProps = window.__routeInfo.allProps;
                  Object.keys(window.__routeInfo.sharedPropsHashes).forEach(function (propKey) {
                    _methods.propsByHash[window.__routeInfo.sharedPropsHashes[propKey]] = allProps[propKey];
                  });
                } // In dev mode, request the templateID and ready the router


                if (!(process.env.REACT_STATIC_ENV === 'development')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return (0, _methods.getRouteInfo)(path, {
                  priority: true
                });

              case 8:
                routeInfo = _context.sent;

                if (routeInfo) {
                  (0, _methods.registerTemplateIDForPath)(path, routeInfo.templateID);
                }

              case 10:
                _context.prev = 10;

                _this.setState({
                  ready: true
                });

                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5,, 10, 13]]);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "patchHistoryNavigation", function (resolvedHistory) {
      // Only patch navigation once
      if (_this.patchedNavigation) {
        return;
      } // Here, we patch the push and replace methods on history so we can
      // intercept them.


      ;
      ['push', 'replace'].forEach(function (method) {
        // Hold on to the original method, we will need it.
        var originalMethod = resolvedHistory[method]; // Replace it with our own patched version

        resolvedHistory[method] =
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var _len,
              args,
              _key,
              path,
              shouldPrefetch,
              _args2 = arguments;

          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = _args2[_key];
                  }

                  // Clean the path first
                  path = (0, _shared.cleanPath)(typeof args[0] === 'string' ? args[0] : args[0].path); // Notify a soft loading state

                  (0, _methods.setLoading)(1); // Determine as quickly as possible if we need to fetch data for this route

                  _context2.next = 5;
                  return (0, _methods.needsPrefetch)(path, {
                    priority: true
                  });

                case 5:
                  shouldPrefetch = _context2.sent;

                  if (!shouldPrefetch) {
                    _context2.next = 10;
                    break;
                  }

                  // Notify with a hard loading state
                  (0, _methods.setLoading)(2); // Prefetch any data or templates needed with a high priority

                  _context2.next = 10;
                  return (0, _methods.prefetch)(path, {
                    priority: true
                  });

                case 10:
                  // Notify we're done loading
                  (0, _methods.setLoading)(0); // Apply the original method and arguments as if nothing happened

                  originalMethod.apply(resolvedHistory, args);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }); // Only patch navigation once :)

      _this.patchedNavigation = true;
    });

    var _routeInfo = context.routeInfo;

    var _path = (0, _shared.cleanPath)(context.staticURL);

    if (typeof window !== 'undefined') {
      _routeInfo = window.__routeInfo;
      var href = decodeURIComponent(window.location.href);
      _path = (0, _shared.cleanPath)(href);
    }

    if (_routeInfo) {
      (0, _methods.registerTemplateIDForPath)(_path, _routeInfo.templateID);
    }

    return _this;
  }

  _createClass(Router, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bootstrapRouteInfo();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          history = _this$props.history,
          type = _this$props.type,
          children = _this$props.children,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          showErrorsInProduction = _this$props.showErrorsInProduction,
          rest = _objectWithoutProperties(_this$props, ["history", "type", "children", "autoScrollToTop", "autoScrollToHash", "scrollToTopDuration", "scrollToHashDuration", "scrollToHashOffset", "showErrorsInProduction"]);

      var staticURL = this.context.staticURL;
      var context = staticURL ? {} : undefined;
      var disableRoutePrefixing = process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING === 'true';
      var ready = this.state.ready;
      var ResolvedRouter;
      var resolvedHistory; // If statically rendering, use the static router

      if (staticURL) {
        ResolvedRouter = _reactRouterDom.StaticRouter;
        resolvedHistory = undefined;
      } else {
        ResolvedRouter = _reactRouterDom.Router;
        resolvedHistory = history || global.__reactStaticRouterHistory;

        if (!resolvedHistory) {
          if (type === 'memory') {
            resolvedHistory = (0, _createMemoryHistory.default)();
          } else if (type === 'hash') {
            resolvedHistory = (0, _createHashHistory.default)();
          } else {
            var options = disableRoutePrefixing ? {} : {
              basename: process.env.REACT_STATIC_BASE_PATH
            };
            resolvedHistory = (0, _createBrowserHistory.default)(options);
          }
        }

        global.__reactStaticRouterHistory = resolvedHistory;
        this.patchHistoryNavigation(resolvedHistory);
      }

      if (process.env.REACT_STATIC_ENV === 'development' && !ready) {
        return _react.default.createElement(_DevSpinner.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        });
      }

      return _react.default.createElement(_ErrorWrapper.default, {
        showErrorsInProduction: showErrorsInProduction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, _extends({
        history: resolvedHistory,
        location: staticURL,
        context: context,
        basename: disableRoutePrefixing ? '' : process.env.REACT_STATIC_BASE_PATH
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), _react.default.createElement(_RouterScroller.default, _extends({
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Router;
}(_react.default.Component);

exports.default = Router;

_defineProperty(Router, "defaultProps", {
  type: 'browser',
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0,
  showErrorsInProduction: false
});

_defineProperty(Router, "contextTypes", {
  staticURL: _propTypes.default.string,
  routeInfo: _propTypes.default.object
});

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Router, "Router", "/home/daniel/flattenedmonad/react-static/src/client/components/Router.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwicHJvcHMiLCJjb250ZXh0IiwicmVhZHkiLCJ3aW5kb3ciLCJocmVmIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRoIiwiX19yb3V0ZUluZm8iLCJhbGxQcm9wcyIsIk9iamVjdCIsImtleXMiLCJzaGFyZWRQcm9wc0hhc2hlcyIsImZvckVhY2giLCJwcm9wc0J5SGFzaCIsInByb3BLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOViIsInByaW9yaXR5Iiwicm91dGVJbmZvIiwidGVtcGxhdGVJRCIsInNldFN0YXRlIiwicGF0Y2hlZE5hdmlnYXRpb24iLCJvcmlnaW5hbE1ldGhvZCIsInJlc29sdmVkSGlzdG9yeSIsIm1ldGhvZCIsImFyZ3MiLCJzaG91bGRQcmVmZXRjaCIsImFwcGx5Iiwic3RhdGljVVJMIiwiYm9vdHN0cmFwUm91dGVJbmZvIiwiaGlzdG9yeSIsInR5cGUiLCJjaGlsZHJlbiIsImF1dG9TY3JvbGxUb1RvcCIsImF1dG9TY3JvbGxUb0hhc2giLCJzY3JvbGxUb1RvcER1cmF0aW9uIiwic2Nyb2xsVG9IYXNoRHVyYXRpb24iLCJzY3JvbGxUb0hhc2hPZmZzZXQiLCJzaG93RXJyb3JzSW5Qcm9kdWN0aW9uIiwicmVzdCIsInVuZGVmaW5lZCIsImRpc2FibGVSb3V0ZVByZWZpeGluZyIsIlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyIsInN0YXRlIiwiUmVzb2x2ZWRSb3V0ZXIiLCJTdGF0aWNSb3V0ZXIiLCJSZWFjdFJvdXRlciIsImdsb2JhbCIsIl9fcmVhY3RTdGF0aWNSb3V0ZXJIaXN0b3J5Iiwib3B0aW9ucyIsImJhc2VuYW1lIiwiUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCIsInBhdGNoSGlzdG9yeU5hdmlnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BU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QWMsZ0NBQXdCc0Msc0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsNkJBQUMsY0FBRDtBQUNFLGlCQUFTZixlQURYO0FBRUUsa0JBQVVLLFNBRlo7QUFHRSxpQkFBUzdCLE9BSFg7QUFJRSxrQkFDRTBDLHdCQUF3QixFQUF4QixHQUE2QjNCLFFBQVFDLEdBQVIsQ0FBWW9DO0FBTDdDLFNBT01aLElBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFTRSw2QkFBQyx1QkFBRCxXQUNNO0FBQ0ZOLHdDQURFO0FBRUZDLDBDQUZFO0FBR0ZDLGdEQUhFO0FBSUZDLGtEQUpFO0FBS0ZDO0FBTEUsT0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVNHTCxRQVRILENBVEYsQ0FERixDQURGO0FBeUJEOzs7Ozs7Ozs7OztFQXhMaUNxQixlQUFNQyxTOzs7O2dCQUFyQnpELE0sa0JBQ0c7QUFDcEJrQyxRQUFNLFNBRGM7QUFFcEJFLG1CQUFpQixJQUZHO0FBR3BCQyxvQkFBa0IsSUFIRTtBQUlwQkMsdUJBQXFCLENBSkQ7QUFLcEJDLHdCQUFzQixHQUxGO0FBTXBCQyxzQkFBb0IsQ0FOQTtBQU9wQkMsMEJBQXdCO0FBUEosQzs7Z0JBREh6QyxNLGtCQVVHO0FBQ3BCK0IsYUFBVzJCLG1CQUFVQyxNQUREO0FBRXBCdEMsYUFBV3FDLG1CQUFVRTtBQUZELEM7Ozs7Ozs7Ozs7Ozs7MEJBVkg1RCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknXG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZU1lbW9yeUhpc3RvcnknXG5pbXBvcnQgY3JlYXRlSGFzaEhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeSdcbmltcG9ydCB7IFJvdXRlciBhcyBSZWFjdFJvdXRlciwgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbi8vXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQnXG5pbXBvcnQge1xuICBnZXRSb3V0ZUluZm8sXG4gIHByb3BzQnlIYXNoLFxuICBuZWVkc1ByZWZldGNoLFxuICBwcmVmZXRjaCxcbiAgc2V0TG9hZGluZyxcbiAgcmVnaXN0ZXJUZW1wbGF0ZUlERm9yUGF0aCxcbn0gZnJvbSAnLi4vbWV0aG9kcydcbmltcG9ydCBSb3V0ZXJTY3JvbGxlciBmcm9tICcuL1JvdXRlclNjcm9sbGVyJ1xuaW1wb3J0IERldlNwaW5uZXIgZnJvbSAnLi9EZXZTcGlubmVyJ1xuaW1wb3J0IEVycm9yV3JhcHBlciBmcm9tICcuL0Vycm9yV3JhcHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnYnJvd3NlcicsXG4gICAgYXV0b1Njcm9sbFRvVG9wOiB0cnVlLFxuICAgIGF1dG9TY3JvbGxUb0hhc2g6IHRydWUsXG4gICAgc2Nyb2xsVG9Ub3BEdXJhdGlvbjogMCxcbiAgICBzY3JvbGxUb0hhc2hEdXJhdGlvbjogODAwLFxuICAgIHNjcm9sbFRvSGFzaE9mZnNldDogMCxcbiAgICBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uOiBmYWxzZSxcbiAgfVxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHN0YXRpY1VSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3V0ZUluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cbiAgc3RhdGUgPSB7XG4gICAgcmVhZHk6IGZhbHNlLFxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLy8gSW4gU1JSIGFuZCBwcm9kdWN0aW9uLCBzeW5jaHJvbm91c2x5IHJlZ2lzdGVyIHRoZSB0ZW1wbGF0ZUlEIGZvciB0aGVcbiAgICAvLyBpbml0aWFsIHBhdGhcbiAgICBsZXQgeyByb3V0ZUluZm8gfSA9IGNvbnRleHRcbiAgICBsZXQgcGF0aCA9IGNsZWFuUGF0aChjb250ZXh0LnN0YXRpY1VSTClcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcm91dGVJbmZvID0gd2luZG93Ll9fcm91dGVJbmZvXG4gICAgICBjb25zdCBocmVmID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgICAgcGF0aCA9IGNsZWFuUGF0aChocmVmKVxuICAgIH1cblxuICAgIGlmIChyb3V0ZUluZm8pIHtcbiAgICAgIHJlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgocGF0aCwgcm91dGVJbmZvLnRlbXBsYXRlSUQpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYm9vdHN0cmFwUm91dGVJbmZvKClcbiAgfVxuICBib290c3RyYXBSb3V0ZUluZm8gPSAoKSA9PlxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBlbnRyeSBwYXRoIGZyb20gbG9jYXRpb25cbiAgICAgICAgY29uc3QgaHJlZiA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgICAgY29uc3QgcGF0aCA9IGNsZWFuUGF0aChocmVmKVxuXG4gICAgICAgIC8vIEluamVzdCBhbmQgY2FjaGUgdGhlIGVtYmVkZGVkIHJvdXRlSW5mbyBpbiB0aGUgcGFnZSBpZiBwb3NzaWJsZVxuICAgICAgICBpZiAod2luZG93Ll9fcm91dGVJbmZvICYmIHdpbmRvdy5fX3JvdXRlSW5mby5wYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgY29uc3QgeyBhbGxQcm9wcyB9ID0gd2luZG93Ll9fcm91dGVJbmZvXG4gICAgICAgICAgT2JqZWN0LmtleXMod2luZG93Ll9fcm91dGVJbmZvLnNoYXJlZFByb3BzSGFzaGVzKS5mb3JFYWNoKHByb3BLZXkgPT4ge1xuICAgICAgICAgICAgcHJvcHNCeUhhc2hbd2luZG93Ll9fcm91dGVJbmZvLnNoYXJlZFByb3BzSGFzaGVzW3Byb3BLZXldXSA9XG4gICAgICAgICAgICAgIGFsbFByb3BzW3Byb3BLZXldXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIGRldiBtb2RlLCByZXF1ZXN0IHRoZSB0ZW1wbGF0ZUlEIGFuZCByZWFkeSB0aGUgcm91dGVyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IGdldFJvdXRlSW5mbyhwYXRoLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICAgICAgICBpZiAocm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgocGF0aCwgcm91dGVJbmZvLnRlbXBsYXRlSUQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkeTogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKClcbiAgcGF0Y2hIaXN0b3J5TmF2aWdhdGlvbiA9IHJlc29sdmVkSGlzdG9yeSA9PiB7XG4gICAgLy8gT25seSBwYXRjaCBuYXZpZ2F0aW9uIG9uY2VcbiAgICBpZiAodGhpcy5wYXRjaGVkTmF2aWdhdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIEhlcmUsIHdlIHBhdGNoIHRoZSBwdXNoIGFuZCByZXBsYWNlIG1ldGhvZHMgb24gaGlzdG9yeSBzbyB3ZSBjYW5cbiAgICAvLyBpbnRlcmNlcHQgdGhlbS5cbiAgICA7WydwdXNoJywgJ3JlcGxhY2UnXS5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gICAgICAvLyBIb2xkIG9uIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QsIHdlIHdpbGwgbmVlZCBpdC5cbiAgICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gcmVzb2x2ZWRIaXN0b3J5W21ldGhvZF1cbiAgICAgIC8vIFJlcGxhY2UgaXQgd2l0aCBvdXIgb3duIHBhdGNoZWQgdmVyc2lvblxuICAgICAgcmVzb2x2ZWRIaXN0b3J5W21ldGhvZF0gPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBDbGVhbiB0aGUgcGF0aCBmaXJzdFxuICAgICAgICBjb25zdCBwYXRoID0gY2xlYW5QYXRoKFxuICAgICAgICAgIHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyA/IGFyZ3NbMF0gOiBhcmdzWzBdLnBhdGhcbiAgICAgICAgKVxuICAgICAgICAvLyBOb3RpZnkgYSBzb2Z0IGxvYWRpbmcgc3RhdGVcbiAgICAgICAgc2V0TG9hZGluZygxKVxuICAgICAgICAvLyBEZXRlcm1pbmUgYXMgcXVpY2tseSBhcyBwb3NzaWJsZSBpZiB3ZSBuZWVkIHRvIGZldGNoIGRhdGEgZm9yIHRoaXMgcm91dGVcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBhd2FpdCBuZWVkc1ByZWZldGNoKHBhdGgsIHsgcHJpb3JpdHk6IHRydWUgfSlcblxuICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIGxvYWQuLi5cbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoKSB7XG4gICAgICAgICAgLy8gTm90aWZ5IHdpdGggYSBoYXJkIGxvYWRpbmcgc3RhdGVcbiAgICAgICAgICBzZXRMb2FkaW5nKDIpXG4gICAgICAgICAgLy8gUHJlZmV0Y2ggYW55IGRhdGEgb3IgdGVtcGxhdGVzIG5lZWRlZCB3aXRoIGEgaGlnaCBwcmlvcml0eVxuICAgICAgICAgIGF3YWl0IHByZWZldGNoKHBhdGgsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3RpZnkgd2UncmUgZG9uZSBsb2FkaW5nXG4gICAgICAgIHNldExvYWRpbmcoMClcblxuICAgICAgICAvLyBBcHBseSB0aGUgb3JpZ2luYWwgbWV0aG9kIGFuZCBhcmd1bWVudHMgYXMgaWYgbm90aGluZyBoYXBwZW5lZFxuICAgICAgICBvcmlnaW5hbE1ldGhvZC5hcHBseShyZXNvbHZlZEhpc3RvcnksIGFyZ3MpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIE9ubHkgcGF0Y2ggbmF2aWdhdGlvbiBvbmNlIDopXG4gICAgdGhpcy5wYXRjaGVkTmF2aWdhdGlvbiA9IHRydWVcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGlzdG9yeSxcbiAgICAgIHR5cGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGF1dG9TY3JvbGxUb1RvcCxcbiAgICAgIGF1dG9TY3JvbGxUb0hhc2gsXG4gICAgICBzY3JvbGxUb1RvcER1cmF0aW9uLFxuICAgICAgc2Nyb2xsVG9IYXNoRHVyYXRpb24sXG4gICAgICBzY3JvbGxUb0hhc2hPZmZzZXQsXG4gICAgICBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzdGF0aWNVUkwgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNvbnRleHQgPSBzdGF0aWNVUkwgPyB7fSA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IGRpc2FibGVSb3V0ZVByZWZpeGluZyA9XG4gICAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkcgPT09ICd0cnVlJ1xuXG4gICAgY29uc3QgeyByZWFkeSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IFJlc29sdmVkUm91dGVyXG4gICAgbGV0IHJlc29sdmVkSGlzdG9yeVxuXG4gICAgLy8gSWYgc3RhdGljYWxseSByZW5kZXJpbmcsIHVzZSB0aGUgc3RhdGljIHJvdXRlclxuICAgIGlmIChzdGF0aWNVUkwpIHtcbiAgICAgIFJlc29sdmVkUm91dGVyID0gU3RhdGljUm91dGVyXG4gICAgICByZXNvbHZlZEhpc3RvcnkgPSB1bmRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgUmVzb2x2ZWRSb3V0ZXIgPSBSZWFjdFJvdXRlclxuICAgICAgcmVzb2x2ZWRIaXN0b3J5ID0gaGlzdG9yeSB8fCBnbG9iYWwuX19yZWFjdFN0YXRpY1JvdXRlckhpc3RvcnlcbiAgICAgIGlmICghcmVzb2x2ZWRIaXN0b3J5KSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnbWVtb3J5Jykge1xuICAgICAgICAgIHJlc29sdmVkSGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoYXNoJykge1xuICAgICAgICAgIHJlc29sdmVkSGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gZGlzYWJsZVJvdXRlUHJlZml4aW5nXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHsgYmFzZW5hbWU6IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19CQVNFX1BBVEggfVxuICAgICAgICAgIHJlc29sdmVkSGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdsb2JhbC5fX3JlYWN0U3RhdGljUm91dGVySGlzdG9yeSA9IHJlc29sdmVkSGlzdG9yeVxuICAgICAgdGhpcy5wYXRjaEhpc3RvcnlOYXZpZ2F0aW9uKHJlc29sdmVkSGlzdG9yeSlcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiAhcmVhZHkpIHtcbiAgICAgIHJldHVybiA8RGV2U3Bpbm5lciAvPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JXcmFwcGVyIHNob3dFcnJvcnNJblByb2R1Y3Rpb249e3Nob3dFcnJvcnNJblByb2R1Y3Rpb259PlxuICAgICAgICA8UmVzb2x2ZWRSb3V0ZXJcbiAgICAgICAgICBoaXN0b3J5PXtyZXNvbHZlZEhpc3Rvcnl9XG4gICAgICAgICAgbG9jYXRpb249e3N0YXRpY1VSTH1cbiAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxuICAgICAgICAgIGJhc2VuYW1lPXtcbiAgICAgICAgICAgIGRpc2FibGVSb3V0ZVByZWZpeGluZyA/ICcnIDogcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0JBU0VfUEFUSFxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSb3V0ZXJTY3JvbGxlclxuICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbFRvVG9wLFxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsVG9IYXNoLFxuICAgICAgICAgICAgICBzY3JvbGxUb1RvcER1cmF0aW9uLFxuICAgICAgICAgICAgICBzY3JvbGxUb0hhc2hEdXJhdGlvbixcbiAgICAgICAgICAgICAgc2Nyb2xsVG9IYXNoT2Zmc2V0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Sb3V0ZXJTY3JvbGxlcj5cbiAgICAgICAgPC9SZXNvbHZlZFJvdXRlcj5cbiAgICAgIDwvRXJyb3JXcmFwcGVyPlxuICAgIClcbiAgfVxufVxuIl19