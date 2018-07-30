"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _bundle = _interopRequireDefault(require("./bundle"));

var _export = _interopRequireDefault(require("./export"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _build = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(args) {
    var config;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _bundle.default)(args);

          case 2:
            config = _context.sent;
            return _context.abrupt("return", (0, _export.default)(_objectSpread({}, args, {
              config: config,
              isBuild: true
            })));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function build(_x) {
    return _build.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9idWlsZC5qcyJdLCJuYW1lcyI6WyJhcmdzIiwiY29uZmlnIiwiaXNCdWlsZCIsImJ1aWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRWdCLGlCQUFxQkEsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTyxxQkFBT0EsSUFBUCxDQURQOztBQUFBO0FBQ1JDLGtCQURRO0FBQUEsNkNBRVAsdUNBQWNELElBQWQ7QUFBb0JDLDRCQUFwQjtBQUE0QkMsdUJBQVM7QUFBckMsZUFGTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZUMsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidW5kbGUgZnJvbSAnLi9idW5kbGUnXG5pbXBvcnQgZXhwb3J0ZXIgZnJvbSAnLi9leHBvcnQnXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBidWlsZChhcmdzKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGJ1bmRsZShhcmdzKVxuICByZXR1cm4gZXhwb3J0ZXIoeyAuLi5hcmdzLCBjb25maWcsIGlzQnVpbGQ6IHRydWUgfSlcbn0pXG4iXX0=