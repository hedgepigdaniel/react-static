"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePageRoutes;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function makePageRoutes(_ref) {
  var items = _ref.items,
      pageSize = _ref.pageSize,
      _ref$pageToken = _ref.pageToken,
      pageToken = _ref$pageToken === void 0 ? 'page' : _ref$pageToken,
      route = _ref.route,
      decorate = _ref.decorate;

  var itemsCopy = _toConsumableArray(items); // Make a copy of the items


  var pages = []; // Make an array for all of the different pages

  while (itemsCopy.length) {
    // Splice out all of the items into separate pages using a set pageSize
    pages.push(itemsCopy.splice(0, pageSize));
  }

  var totalPages = pages.length; // Move the first page out of pagination. This is so page one doesn't require a page number.

  var firstPage = pages[0];
  var routes = [_objectSpread({}, route, decorate(firstPage, 1, totalPages))].concat(_toConsumableArray(pages.map(function (page, i) {
    return _objectSpread({}, route, {
      // route defaults
      path: "".concat(route.path, "/").concat(pageToken, "/").concat(i + 1)
    }, decorate(page, i + 1, totalPages));
  })));
  return routes;
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(makePageRoutes, "makePageRoutes", "/home/daniel/flattenedmonad/react-static/src/node/makePageRoutes.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ha2VQYWdlUm91dGVzLmpzIl0sIm5hbWVzIjpbIm1ha2VQYWdlUm91dGVzIiwiaXRlbXMiLCJwYWdlU2l6ZSIsInBhZ2VUb2tlbiIsInJvdXRlIiwiZGVjb3JhdGUiLCJpdGVtc0NvcHkiLCJwYWdlcyIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ0b3RhbFBhZ2VzIiwiZmlyc3RQYWdlIiwicm91dGVzIiwibWFwIiwicGFnZSIsImkiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsY0FBVCxPQU1aO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsUUFJQyxRQUpEQSxRQUlDO0FBQUEsNEJBSERDLFNBR0M7QUFBQSxNQUhEQSxTQUdDLCtCQUhXLE1BR1g7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7O0FBQ0QsTUFBTUMsK0JBQWdCTCxLQUFoQixDQUFOLENBREMsQ0FDNEI7OztBQUM3QixNQUFNTSxRQUFRLEVBQWQsQ0FGQyxDQUVnQjs7QUFFakIsU0FBT0QsVUFBVUUsTUFBakIsRUFBeUI7QUFDdkI7QUFDQUQsVUFBTUUsSUFBTixDQUFXSCxVQUFVSSxNQUFWLENBQWlCLENBQWpCLEVBQW9CUixRQUFwQixDQUFYO0FBQ0Q7O0FBRUQsTUFBTVMsYUFBYUosTUFBTUMsTUFBekIsQ0FUQyxDQVdEOztBQUNBLE1BQU1JLFlBQVlMLE1BQU0sQ0FBTixDQUFsQjtBQUVBLE1BQU1NLDRCQUVDVCxLQUZELEVBR0NDLFNBQVNPLFNBQVQsRUFBb0IsQ0FBcEIsRUFBdUJELFVBQXZCLENBSEQsNkJBTURKLE1BQU1PLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw2QkFDUlosS0FEUTtBQUNEO0FBQ1ZhLHNCQUFTYixNQUFNYSxJQUFmLGNBQXVCZCxTQUF2QixjQUFvQ2EsSUFBSSxDQUF4QztBQUZXLE9BR1JYLFNBQVNVLElBQVQsRUFBZUMsSUFBSSxDQUFuQixFQUFzQkwsVUFBdEIsQ0FIUTtBQUFBLEdBQVYsQ0FOQyxFQUFOO0FBYUEsU0FBT0UsTUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7OzBCQWxDdUJiLGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUGFnZVJvdXRlcyh7XG4gIGl0ZW1zLFxuICBwYWdlU2l6ZSxcbiAgcGFnZVRva2VuID0gJ3BhZ2UnLFxuICByb3V0ZSxcbiAgZGVjb3JhdGUsXG59KSB7XG4gIGNvbnN0IGl0ZW1zQ29weSA9IFsuLi5pdGVtc10gLy8gTWFrZSBhIGNvcHkgb2YgdGhlIGl0ZW1zXG4gIGNvbnN0IHBhZ2VzID0gW10gLy8gTWFrZSBhbiBhcnJheSBmb3IgYWxsIG9mIHRoZSBkaWZmZXJlbnQgcGFnZXNcblxuICB3aGlsZSAoaXRlbXNDb3B5Lmxlbmd0aCkge1xuICAgIC8vIFNwbGljZSBvdXQgYWxsIG9mIHRoZSBpdGVtcyBpbnRvIHNlcGFyYXRlIHBhZ2VzIHVzaW5nIGEgc2V0IHBhZ2VTaXplXG4gICAgcGFnZXMucHVzaChpdGVtc0NvcHkuc3BsaWNlKDAsIHBhZ2VTaXplKSlcbiAgfVxuXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBwYWdlcy5sZW5ndGhcblxuICAvLyBNb3ZlIHRoZSBmaXJzdCBwYWdlIG91dCBvZiBwYWdpbmF0aW9uLiBUaGlzIGlzIHNvIHBhZ2Ugb25lIGRvZXNuJ3QgcmVxdWlyZSBhIHBhZ2UgbnVtYmVyLlxuICBjb25zdCBmaXJzdFBhZ2UgPSBwYWdlc1swXVxuXG4gIGNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAuLi5yb3V0ZSxcbiAgICAgIC4uLmRlY29yYXRlKGZpcnN0UGFnZSwgMSwgdG90YWxQYWdlcyksIC8vIGFuZCBvbmx5IHBhc3MgdGhlIGZpcnN0IHBhZ2UgYXMgZGF0YVxuICAgIH0sXG4gICAgLy8gbWFwIG92ZXIgZWFjaCBwYWdlIHRvIGNyZWF0ZSBhbiBhcnJheSBvZiBwYWdlIHJvdXRlcywgYW5kIHNwcmVhZCBpdCFcbiAgICAuLi5wYWdlcy5tYXAoKHBhZ2UsIGkpID0+ICh7XG4gICAgICAuLi5yb3V0ZSwgLy8gcm91dGUgZGVmYXVsdHNcbiAgICAgIHBhdGg6IGAke3JvdXRlLnBhdGh9LyR7cGFnZVRva2VufS8ke2kgKyAxfWAsXG4gICAgICAuLi5kZWNvcmF0ZShwYWdlLCBpICsgMSwgdG90YWxQYWdlcyksXG4gICAgfSkpLFxuICBdXG5cbiAgcmV0dXJuIHJvdXRlc1xufVxuIl19