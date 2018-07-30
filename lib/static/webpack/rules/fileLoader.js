"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
  return {
    loader: 'url-loader',
    exclude: [/\.js$/, /\.html$/, /\.json$/],
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]'
    }
  };
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/webpack/rules/fileLoader.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9maWxlTG9hZGVyLmpzIl0sIm5hbWVzIjpbImxvYWRlciIsImV4Y2x1ZGUiLCJxdWVyeSIsImxpbWl0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztlQUFlLG9CQUFXO0FBQ3hCLFNBQU87QUFDTEEsWUFBUSxZQURIO0FBRUxDLGFBQVMsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixTQUFyQixDQUZKO0FBR0xDLFdBQU87QUFDTEMsYUFBTyxLQURGO0FBRUxDLFlBQU07QUFGRDtBQUhGLEdBQVA7QUFRRCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgbG9hZGVyOiAndXJsLWxvYWRlcicsXG4gICAgZXhjbHVkZTogWy9cXC5qcyQvLCAvXFwuaHRtbCQvLCAvXFwuanNvbiQvXSxcbiAgICBxdWVyeToge1xuICAgICAgbGltaXQ6IDEwMDAwLFxuICAgICAgbmFtZTogJ3N0YXRpYy9bbmFtZV0uW2hhc2g6OF0uW2V4dF0nLFxuICAgIH0sXG4gIH1cbn1cbiJdfQ==