"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _glob = _interopRequireDefault(require("glob"));

var _path = _interopRequireDefault(require("path"));

var _RootComponents = require("./RootComponents");

var _shared = require("../utils/shared");

var _exportRoute = _interopRequireDefault(require("./exportRoute"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable import/first, import/no-dynamic-require */
require('../utils/binHelper');

var _default =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref) {
    var config, routes, siteData, clientStats, htmlProgress, Comp, DocumentTemplate, tasks, _loop, i;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = _ref.config, routes = _ref.routes, siteData = _ref.siteData, clientStats = _ref.clientStats;
            htmlProgress = (0, _utils.progress)(routes.length); // Use the node version of the app created with webpack

            Comp = require(_glob.default.sync(_path.default.resolve(config.paths.ASSETS, 'static.*.js'))[0]).default; // Retrieve the document template

            DocumentTemplate = config.Document || _RootComponents.DefaultDocument;
            tasks = [];

            _loop = function _loop(i) {
              var route = routes[i]; // eslint-disable-next-line

              tasks.push(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee() {
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _exportRoute.default)({
                          config: config,
                          Comp: Comp,
                          DocumentTemplate: DocumentTemplate,
                          route: route,
                          siteData: siteData,
                          clientStats: clientStats
                        });

                      case 2:
                        htmlProgress.tick();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              })));
            };

            for (i = 0; i < routes.length; i++) {
              _loop(i);
            }

            _context2.next = 9;
            return (0, _shared.poolAll)(tasks, Number(config.outputFileRate));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function _default(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/exporter.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsInJvdXRlcyIsInNpdGVEYXRhIiwiY2xpZW50U3RhdHMiLCJodG1sUHJvZ3Jlc3MiLCJsZW5ndGgiLCJDb21wIiwiZ2xvYiIsInN5bmMiLCJwYXRoIiwicmVzb2x2ZSIsInBhdGhzIiwiQVNTRVRTIiwiZGVmYXVsdCIsIkRvY3VtZW50VGVtcGxhdGUiLCJEb2N1bWVudCIsIkRlZmF1bHREb2N1bWVudCIsInRhc2tzIiwiaSIsInJvdXRlIiwicHVzaCIsInRpY2siLCJOdW1iZXIiLCJvdXRwdXRGaWxlUmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBVkE7QUFFQUEsUUFBUSxvQkFBUjs7Ozs7Ozs0QkFVZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGtCQUFULFFBQVNBLE1BQVQsRUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQixFQUF5QkMsUUFBekIsUUFBeUJBLFFBQXpCLEVBQW1DQyxXQUFuQyxRQUFtQ0EsV0FBbkM7QUFDUEMsd0JBRE8sR0FDUSxxQkFBU0gsT0FBT0ksTUFBaEIsQ0FEUixFQUViOztBQUNNQyxnQkFITyxHQUdBUCxRQUFRUSxjQUFLQyxJQUFMLENBQ25CQyxjQUFLQyxPQUFMLENBQWFWLE9BQU9XLEtBQVAsQ0FBYUMsTUFBMUIsRUFBa0MsYUFBbEMsQ0FEbUIsRUFFbkIsQ0FGbUIsQ0FBUixFQUVQQyxPQUxPLEVBTWI7O0FBQ01DLDRCQVBPLEdBT1lkLE9BQU9lLFFBQVAsSUFBbUJDLCtCQVAvQjtBQVNQQyxpQkFUTyxHQVNDLEVBVEQ7O0FBQUEsbUNBVUpDLENBVkk7QUFXWCxrQkFBTUMsUUFBUWxCLE9BQU9pQixDQUFQLENBQWQsQ0FYVyxDQVlYOztBQUNBRCxvQkFBTUcsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNILDBCQUFZO0FBQ2hCcEIsd0NBRGdCO0FBRWhCTSxvQ0FGZ0I7QUFHaEJRLDREQUhnQjtBQUloQkssc0NBSmdCO0FBS2hCakIsNENBTGdCO0FBTWhCQztBQU5nQix5QkFBWixDQURHOztBQUFBO0FBU1RDLHFDQUFhaUIsSUFBYjs7QUFUUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFYO0FBYlc7O0FBVWIsaUJBQVNILENBQVQsR0FBYSxDQUFiLEVBQWdCQSxJQUFJakIsT0FBT0ksTUFBM0IsRUFBbUNhLEdBQW5DLEVBQXdDO0FBQUEsb0JBQS9CQSxDQUErQjtBQWN2Qzs7QUF4Qlk7QUFBQSxtQkF5QlAscUJBQVFELEtBQVIsRUFBZUssT0FBT3RCLE9BQU91QixjQUFkLENBQWYsQ0F6Qk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9maXJzdCwgaW1wb3J0L25vLWR5bmFtaWMtcmVxdWlyZSAqL1xuXG5yZXF1aXJlKCcuLi91dGlscy9iaW5IZWxwZXInKVxuXG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgRGVmYXVsdERvY3VtZW50IH0gZnJvbSAnLi9Sb290Q29tcG9uZW50cydcbmltcG9ydCB7IHBvb2xBbGwgfSBmcm9tICcuLi91dGlscy9zaGFyZWQnXG5pbXBvcnQgZXhwb3J0Um91dGUgZnJvbSAnLi9leHBvcnRSb3V0ZSdcbmltcG9ydCB7IHByb2dyZXNzIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IGNvbmZpZywgcm91dGVzLCBzaXRlRGF0YSwgY2xpZW50U3RhdHMgfSkgPT4ge1xuICBjb25zdCBodG1sUHJvZ3Jlc3MgPSBwcm9ncmVzcyhyb3V0ZXMubGVuZ3RoKVxuICAvLyBVc2UgdGhlIG5vZGUgdmVyc2lvbiBvZiB0aGUgYXBwIGNyZWF0ZWQgd2l0aCB3ZWJwYWNrXG4gIGNvbnN0IENvbXAgPSByZXF1aXJlKGdsb2Iuc3luYyhcbiAgICBwYXRoLnJlc29sdmUoY29uZmlnLnBhdGhzLkFTU0VUUywgJ3N0YXRpYy4qLmpzJylcbiAgKVswXSkuZGVmYXVsdFxuICAvLyBSZXRyaWV2ZSB0aGUgZG9jdW1lbnQgdGVtcGxhdGVcbiAgY29uc3QgRG9jdW1lbnRUZW1wbGF0ZSA9IGNvbmZpZy5Eb2N1bWVudCB8fCBEZWZhdWx0RG9jdW1lbnRcblxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbaV1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0YXNrcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGV4cG9ydFJvdXRlKHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBDb21wLFxuICAgICAgICBEb2N1bWVudFRlbXBsYXRlLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgc2l0ZURhdGEsXG4gICAgICAgIGNsaWVudFN0YXRzLFxuICAgICAgfSlcbiAgICAgIGh0bWxQcm9ncmVzcy50aWNrKClcbiAgICB9KVxuICB9XG4gIGF3YWl0IHBvb2xBbGwodGFza3MsIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpKVxufVxuIl19