"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getStagedRules = void 0;

var _jsLoader = _interopRequireDefault(require("./jsLoader"));

var _cssLoader = _interopRequireDefault(require("./cssLoader"));

var _fileLoader = _interopRequireDefault(require("./fileLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var getStagedRules = function getStagedRules(args) {
  return {
    jsLoader: (0, _jsLoader.default)(args),
    cssLoader: (0, _cssLoader.default)(args),
    fileLoader: (0, _fileLoader.default)(args)
  };
};

exports.getStagedRules = getStagedRules;

var _default = function _default(args) {
  return [{
    oneOf: [(0, _jsLoader.default)(args), (0, _cssLoader.default)(args), (0, _fileLoader.default)(args)]
  }];
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getStagedRules, "getStagedRules", "/home/daniel/flattenedmonad/react-static/src/static/webpack/rules/index.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/webpack/rules/index.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRTdGFnZWRSdWxlcyIsImpzTG9hZGVyIiwiYXJncyIsImNzc0xvYWRlciIsImZpbGVMb2FkZXIiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQVM7QUFDckNDLGNBQVUsdUJBQVNDLElBQVQsQ0FEMkI7QUFFckNDLGVBQVcsd0JBQVVELElBQVYsQ0FGMEI7QUFHckNFLGdCQUFZLHlCQUFXRixJQUFYO0FBSHlCLEdBQVQ7QUFBQSxDQUF2Qjs7OztlQU1RO0FBQUEsU0FBUSxDQUNyQjtBQUNFRyxXQUFPLENBQUMsdUJBQVNILElBQVQsQ0FBRCxFQUFpQix3QkFBVUEsSUFBVixDQUFqQixFQUFrQyx5QkFBV0EsSUFBWCxDQUFsQztBQURULEdBRHFCLENBQVI7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7MEJBTkZGLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganNMb2FkZXIgZnJvbSAnLi9qc0xvYWRlcidcbmltcG9ydCBjc3NMb2FkZXIgZnJvbSAnLi9jc3NMb2FkZXInXG5pbXBvcnQgZmlsZUxvYWRlciBmcm9tICcuL2ZpbGVMb2FkZXInXG5cbmV4cG9ydCBjb25zdCBnZXRTdGFnZWRSdWxlcyA9IGFyZ3MgPT4gKHtcbiAganNMb2FkZXI6IGpzTG9hZGVyKGFyZ3MpLFxuICBjc3NMb2FkZXI6IGNzc0xvYWRlcihhcmdzKSxcbiAgZmlsZUxvYWRlcjogZmlsZUxvYWRlcihhcmdzKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFyZ3MgPT4gW1xuICB7XG4gICAgb25lT2Y6IFtqc0xvYWRlcihhcmdzKSwgY3NzTG9hZGVyKGFyZ3MpLCBmaWxlTG9hZGVyKGFyZ3MpXSxcbiAgfSxcbl1cbiJdfQ==