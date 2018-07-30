"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _methods = require("../methods");

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/PrefetchWhenSeen.js";

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

var ioIsSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window;

var handleIntersection = function handleIntersection(element, callback) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
};

var PrefetchWhenSeen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PrefetchWhenSeen, _React$Component);

  function PrefetchWhenSeen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PrefetchWhenSeen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrefetchWhenSeen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, type, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad, type = _this$props.type;
                cleanedPath = (0, _shared.cleanPath)(path);
                _context.next = 4;
                return (0, _methods.prefetch)(cleanedPath, {
                  type: type
                });

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (ref) {
      if (ioIsSupported && ref) {
        handleIntersection(ref, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(PrefetchWhenSeen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!ioIsSupported) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          component = _this$props2.component,
          render = _this$props2.render,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["component", "render", "children"]);

      if (component) {
        return _react.default.createElement(component, {
          handleRef: this.handleRef
        });
      }

      if (render) {
        return render({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PrefetchWhenSeen;
}(_react.default.Component);

exports.default = PrefetchWhenSeen;

_defineProperty(PrefetchWhenSeen, "defaultProps", {
  children: null,
  path: null,
  className: null,
  type: null,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ioIsSupported, "ioIsSupported", "/home/daniel/flattenedmonad/react-static/src/client/components/PrefetchWhenSeen.js");
  reactHotLoader.register(handleIntersection, "handleIntersection", "/home/daniel/flattenedmonad/react-static/src/client/components/PrefetchWhenSeen.js");
  reactHotLoader.register(PrefetchWhenSeen, "PrefetchWhenSeen", "/home/daniel/flattenedmonad/react-static/src/client/components/PrefetchWhenSeen.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9QcmVmZXRjaFdoZW5TZWVuLmpzIl0sIm5hbWVzIjpbImlvSXNTdXBwb3J0ZWQiLCJ3aW5kb3ciLCJoYW5kbGVJbnRlcnNlY3Rpb24iLCJlbGVtZW50IiwiY2FsbGJhY2siLCJpbyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsIlByZWZldGNoV2hlblNlZW4iLCJwcm9wcyIsInBhdGgiLCJvbkxvYWQiLCJ0eXBlIiwiY2xlYW5lZFBhdGgiLCJkYXRhIiwicmVmIiwicnVuUHJlZmV0Y2giLCJjb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYW5kbGVSZWYiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFDSixPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLDBCQUEwQkEsTUFEN0Q7O0FBRUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ2hELE1BQU1DLEtBQUssSUFBSUosT0FBT0ssb0JBQVgsQ0FBZ0MsbUJBQVc7QUFDcERDLFlBQVFDLE9BQVIsQ0FBZ0IsaUJBQVM7QUFDdkI7QUFDQSxVQUNFTCxZQUFZTSxNQUFNQyxNQUFsQixLQUNDRCxNQUFNRSxjQUFOLElBQXdCRixNQUFNRyxpQkFBTixHQUEwQixDQURuRCxDQURGLEVBR0U7QUFDQVAsV0FBR1EsU0FBSCxDQUFhVixPQUFiO0FBQ0FFLFdBQUdTLFVBQUg7QUFDQVY7QUFDRDtBQUNGLEtBVkQ7QUFXRCxHQVpVLENBQVg7QUFjQUMsS0FBR1UsT0FBSCxDQUFXWixPQUFYO0FBQ0QsQ0FoQkQ7O0lBa0JxQmEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswRkFlTDtBQUFBLGFBQ1o7QUFBQTtBQUFBLGdDQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDZ0MsTUFBS0MsS0FEckMsRUFDU0MsSUFEVCxlQUNTQSxJQURULEVBQ2VDLE1BRGYsZUFDZUEsTUFEZixFQUN1QkMsSUFEdkIsZUFDdUJBLElBRHZCO0FBRU9DLDJCQUZQLEdBRXFCLHVCQUFVSCxJQUFWLENBRnJCO0FBQUE7QUFBQSx1QkFHb0IsdUJBQVNHLFdBQVQsRUFBc0I7QUFBRUQ7QUFBRixpQkFBdEIsQ0FIcEI7O0FBQUE7QUFHT0Usb0JBSFA7QUFJQ0gsdUJBQU9HLElBQVAsRUFBYUQsV0FBYjs7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFELElBRFk7QUFBQSxLOzt3RkFRRixlQUFPO0FBQ2pCLFVBQUlyQixpQkFBaUJ1QixHQUFyQixFQUEwQjtBQUN4QnJCLDJCQUFtQnFCLEdBQW5CLEVBQXdCLE1BQUtDLFdBQTdCO0FBQ0Q7QUFDRixLOzs7Ozs7O3dDQWxCbUI7QUFDbEIsVUFBSSxDQUFDeEIsYUFBTCxFQUFvQjtBQUNsQixhQUFLd0IsV0FBTDtBQUNEO0FBQ0Y7Ozs2QkFnQlE7QUFBQSx5QkFDMEMsS0FBS1AsS0FEL0M7QUFBQSxVQUNDUSxTQURELGdCQUNDQSxTQUREO0FBQUEsVUFDWUMsTUFEWixnQkFDWUEsTUFEWjtBQUFBLFVBQ29CQyxRQURwQixnQkFDb0JBLFFBRHBCO0FBQUEsVUFDaUNDLElBRGpDOztBQUVQLFVBQUlILFNBQUosRUFBZTtBQUNiLGVBQU9JLGVBQU1DLGFBQU4sQ0FBb0JMLFNBQXBCLEVBQStCO0FBQ3BDTSxxQkFBVyxLQUFLQTtBQURvQixTQUEvQixDQUFQO0FBR0Q7O0FBQ0QsVUFBSUwsTUFBSixFQUFZO0FBQ1YsZUFBT0EsT0FBTztBQUFFSyxxQkFBVyxLQUFLQTtBQUFsQixTQUFQLENBQVA7QUFDRDs7QUFDRCxhQUNFO0FBQUssYUFBSyxLQUFLQTtBQUFmLFNBQThCSCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNHRCxRQURILENBREY7QUFLRDs7Ozs7Ozs7Ozs7RUE1QzJDRSxlQUFNRyxTOzs7O2dCQUEvQmhCLGdCLGtCQUNHO0FBQ3BCVyxZQUFVLElBRFU7QUFFcEJULFFBQU0sSUFGYztBQUdwQmUsYUFBVyxJQUhTO0FBSXBCYixRQUFNLElBSmM7QUFLcEJELFVBQVEsa0JBQU0sQ0FBRTtBQUxJLEM7Ozs7Ozs7Ozs7Ozs7MEJBckJsQm5CLGE7MEJBRUFFLGtCOzBCQWtCZWMsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZCdcbmltcG9ydCB7IHByZWZldGNoIH0gZnJvbSAnLi4vbWV0aG9kcydcblxuY29uc3QgaW9Jc1N1cHBvcnRlZCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93XG5jb25zdCBoYW5kbGVJbnRlcnNlY3Rpb24gPSAoZWxlbWVudCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgaW8gPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBpc0ludGVyc2VjdGluZy4gaW50ZXJzZWN0aW9uUmF0aW8gPiAwIHdvcmtzIGFzIGEgZmFsbGJhY2tcbiAgICAgIGlmIChcbiAgICAgICAgZWxlbWVudCA9PT0gZW50cnkudGFyZ2V0ICYmXG4gICAgICAgIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApXG4gICAgICApIHtcbiAgICAgICAgaW8udW5vYnNlcnZlKGVsZW1lbnQpXG4gICAgICAgIGlvLmRpc2Nvbm5lY3QoKVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBpby5vYnNlcnZlKGVsZW1lbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWZldGNoV2hlblNlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIHBhdGg6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgb25Mb2FkOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghaW9Jc1N1cHBvcnRlZCkge1xuICAgICAgdGhpcy5ydW5QcmVmZXRjaCgpXG4gICAgfVxuICB9XG5cbiAgcnVuUHJlZmV0Y2ggPSAoKSA9PlxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGgsIG9uTG9hZCwgdHlwZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgY2xlYW5lZFBhdGggPSBjbGVhblBhdGgocGF0aClcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmVmZXRjaChjbGVhbmVkUGF0aCwgeyB0eXBlIH0pXG4gICAgICBvbkxvYWQoZGF0YSwgY2xlYW5lZFBhdGgpXG4gICAgfSkoKVxuXG4gIGhhbmRsZVJlZiA9IHJlZiA9PiB7XG4gICAgaWYgKGlvSXNTdXBwb3J0ZWQgJiYgcmVmKSB7XG4gICAgICBoYW5kbGVJbnRlcnNlY3Rpb24ocmVmLCB0aGlzLnJ1blByZWZldGNoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbXBvbmVudCwgcmVuZGVyLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwge1xuICAgICAgICBoYW5kbGVSZWY6IHRoaXMuaGFuZGxlUmVmLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlbmRlcih7IGhhbmRsZVJlZjogdGhpcy5oYW5kbGVSZWYgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLmhhbmRsZVJlZn0gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==