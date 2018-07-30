"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getRoutesFromPages = exports.normalizeAllRoutes = exports.normalizeRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _path = _interopRequireDefault(require("path"));

var _chokidar = _interopRequireDefault(require("chokidar"));

var _utils = require("../utils");

var _shared = require("../utils/shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var watcher;
var routesCache;

var countRoutes = function countRoutes(routes) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  routes.forEach(function (route) {
    count += 1;

    if (routes.children) {
      countRoutes(route.children, count);
    }
  });
  return count;
};

var normalizeRoute = function normalizeRoute(route) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _parent$path = parent.path,
      parentPath = _parent$path === void 0 ? '/' : _parent$path;

  if (!route.path) {
    if (route.is404) {
      throw new Error("route.is404 has been deprecated. Use `path: '404'` instead! Route: ".concat(JSON.stringify(route)));
    }

    throw new Error("No path defined for route: ".concat(JSON.stringify(route)));
  }

  var originalRoutePath = (0, _shared.pathJoin)(route.path);
  var routePath = (0, _shared.pathJoin)(parentPath, route.path);

  if (typeof route.noIndex !== 'undefined') {
    console.warn("=> Warning: Route ".concat(route.path, " is using 'noIndex'. Did you mean 'noindex'?"));
  }

  var normalizedRoute = _objectSpread({}, route, {
    path: routePath,
    originalPath: originalRoutePath,
    noindex: typeof route.noindex !== 'undefined' ? route.noindex : parent.noindex,
    hasGetProps: !!route.getData
  });

  return normalizedRoute;
}; // We recursively loop through the routes and their children and
// return an array of normalised routes.
// Original routes array [{ path: 'path', children: { path: 'to' } }]
// These can be returned as flat routes eg. [{ path: 'path' }, { path: 'path/to' }]
// Or they can be returned nested routes eg. [{ path: 'path', children: { path: 'path/to' } }]


exports.normalizeRoute = normalizeRoute;

var normalizeAllRoutes = function normalizeAllRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var config = arguments.length > 1 ? arguments[1] : undefined;
  var existingRoutes = {};
  var hasIndex;
  var has404;

  var recurseRoute = function recurseRoute(route, parent) {
    // if structure is nested (tree === true) normalizedRoute will
    // have children otherwise we fall back to the original route children
    // Normalize the route
    var normalizedRoute = normalizeRoute(route, parent); // we check an array of paths to see
    // if route path already existings

    var existingRoute = existingRoutes[normalizedRoute.path];

    if (normalizedRoute.children) {
      normalizedRoute.children = normalizedRoute.children.map(function (childRoute) {
        return recurseRoute(childRoute, normalizedRoute);
      });
    } // If the route exists and is a page route, we need to decorate the
    // page route with this routes information


    if (existingRoute) {
      if (existingRoute.isPage) {
        Object.assign(existingRoute, _objectSpread({}, normalizedRoute, {
          component: existingRoute.component
        }));
        normalizedRoute = existingRoute;
      } else if (!config.disableDuplicateRoutesWarning) {
        // Otherwise, we shouldn't have duplicate routes
        console.warn('More than one route in static.config.js is defined for path:', normalizedRoute.path);
      }
    } // Keep track of the route existence


    existingRoutes[normalizedRoute.path] = normalizedRoute; // Keep track of index and 404 routes existence

    if (normalizedRoute.path === '/') {
      hasIndex = true;
    }

    if (normalizedRoute.path === '404') {
      has404 = true;
    }

    return normalizedRoute;
  };

  var normalizedRoutes = routes.map(function (route) {
    return recurseRoute(route);
  });

  if (!config.tree) {
    var flatRoutes = [];

    var _recurseRoute = function _recurseRoute(route) {
      flatRoutes.push(route);

      if (route.children) {
        route.children.forEach(_recurseRoute);
      }

      route.children = undefined;
    };

    normalizedRoutes.forEach(_recurseRoute);
    normalizedRoutes = flatRoutes;
  }

  return {
    routes: normalizedRoutes,
    hasIndex: hasIndex,
    has404: has404
  };
};

exports.normalizeAllRoutes = normalizeAllRoutes;

var getRoutesFromPages =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref, cb) {
    var config, _ref$opts, opts, globExtensions, pagesGlob, handle, pages, routes;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = _ref.config, _ref$opts = _ref.opts, opts = _ref$opts === void 0 ? {} : _ref$opts;
            // Make a glob extension to get all pages with the set extensions from the pages directory
            globExtensions = config.extensions.map(function (ext) {
              return "".concat(ext.slice(1));
            }).join(',');
            pagesGlob = "".concat(config.paths.PAGES, "/**/*.{").concat(globExtensions, "}"); // Get the pages

            handle = function handle(pages) {
              // Turn each page into a route
              var routes = pages.map(function (page) {
                // Get the component path relative to ROOT
                var component = _path.default.relative(config.paths.ROOT, page); // Make sure the path is relative to the root of the site


                var path = page.replace("".concat(config.paths.PAGES), '').replace(/\..*/, ''); // Turn `/index` paths into roots`

                path = path.replace(/\/index$/, '/'); // Return the route

                return {
                  path: path,
                  component: component,
                  isPage: true // tag it with isPage, so we know its origin

                };
              });
              return routes;
            };

            if (opts.dev && !watcher) {
              watcher = _chokidar.default.watch(config.paths.PAGES, {
                ignoreInitial: true
              }).on('all', (0, _utils.debounce)(
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee(type, file) {
                  var filename, pages, routes;
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (['add', 'unlink'].includes(type)) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          filename = file.split('/').reverse()[0];

                          if (!filename.startsWith('.')) {
                            _context.next = 5;
                            break;
                          }

                          return _context.abrupt("return");

                        case 5:
                          _context.next = 7;
                          return (0, _utils.glob)(pagesGlob);

                        case 7:
                          pages = _context.sent;
                          routes = handle(pages);
                          routesCache = routes;
                          cb(routes);

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }()), 50);
            }

            if (!routesCache) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", cb(routesCache));

          case 7:
            _context2.next = 9;
            return (0, _utils.glob)(pagesGlob);

          case 9:
            pages = _context2.sent;
            routes = handle(pages);
            return _context2.abrupt("return", cb(routes));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRoutesFromPages(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}(); // At least ensure the index page is defined for export


exports.getRoutesFromPages = getRoutesFromPages;

var getRoutes =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(_ref4) {
    var config,
        opts,
        cb,
        _args4 = arguments;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            config = _ref4.config, opts = _ref4.opts;
            cb = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : function (d) {
              return d;
            };
            return _context4.abrupt("return", // We use the callback pattern here, because getRoutesFromPages is technically a subscription
            getRoutesFromPages({
              config: config,
              opts: opts
            },
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(pageRoutes) {
                var routes, allRoutes, _normalizeAllRoutes, allNormalizedRoutes, hasIndex, has404;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return config.getRoutes(opts);

                      case 2:
                        routes = _context3.sent;
                        allRoutes = _toConsumableArray(pageRoutes).concat(_toConsumableArray(routes));
                        _normalizeAllRoutes = normalizeAllRoutes(allRoutes, config), allNormalizedRoutes = _normalizeAllRoutes.routes, hasIndex = _normalizeAllRoutes.hasIndex, has404 = _normalizeAllRoutes.has404; // If no Index page was found, throw an error. This is required

                        if (hasIndex) {
                          _context3.next = 7;
                          break;
                        }

                        throw new Error('Could not find a route for the "index" page of your site! This is required. Please create a page or specify a route and template for this page.');

                      case 7:
                        if (has404) {
                          _context3.next = 9;
                          break;
                        }

                        throw new Error('Could not find a route for the "404" page of your site! This is required. Please create a page or specify a route and template for this page.');

                      case 9:
                        return _context3.abrupt("return", cb(allNormalizedRoutes));

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getRoutes(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = getRoutes;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(watcher, "watcher", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(routesCache, "routesCache", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(countRoutes, "countRoutes", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(normalizeRoute, "normalizeRoute", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(normalizeAllRoutes, "normalizeAllRoutes", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(getRoutesFromPages, "getRoutesFromPages", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(getRoutes, "getRoutes", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/getRoutes.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Um91dGVzLmpzIl0sIm5hbWVzIjpbIndhdGNoZXIiLCJyb3V0ZXNDYWNoZSIsImNvdW50Um91dGVzIiwicm91dGVzIiwiY291bnQiLCJmb3JFYWNoIiwiY2hpbGRyZW4iLCJyb3V0ZSIsIm5vcm1hbGl6ZVJvdXRlIiwicGFyZW50IiwicGF0aCIsInBhcmVudFBhdGgiLCJpczQwNCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsUm91dGVQYXRoIiwicm91dGVQYXRoIiwibm9JbmRleCIsImNvbnNvbGUiLCJ3YXJuIiwibm9ybWFsaXplZFJvdXRlIiwib3JpZ2luYWxQYXRoIiwibm9pbmRleCIsImhhc0dldFByb3BzIiwiZ2V0RGF0YSIsIm5vcm1hbGl6ZUFsbFJvdXRlcyIsImNvbmZpZyIsImV4aXN0aW5nUm91dGVzIiwiaGFzSW5kZXgiLCJoYXM0MDQiLCJyZWN1cnNlUm91dGUiLCJleGlzdGluZ1JvdXRlIiwibWFwIiwiY2hpbGRSb3V0ZSIsImlzUGFnZSIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudCIsImRpc2FibGVEdXBsaWNhdGVSb3V0ZXNXYXJuaW5nIiwibm9ybWFsaXplZFJvdXRlcyIsInRyZWUiLCJmbGF0Um91dGVzIiwicHVzaCIsInVuZGVmaW5lZCIsImdldFJvdXRlc0Zyb21QYWdlcyIsImNiIiwib3B0cyIsImdsb2JFeHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImV4dCIsInNsaWNlIiwiam9pbiIsInBhZ2VzR2xvYiIsInBhdGhzIiwiUEFHRVMiLCJoYW5kbGUiLCJwYWdlcyIsIm5vZGVQYXRoIiwicmVsYXRpdmUiLCJST09UIiwicGFnZSIsInJlcGxhY2UiLCJkZXYiLCJjaG9raWRhciIsIndhdGNoIiwiaWdub3JlSW5pdGlhbCIsIm9uIiwidHlwZSIsImZpbGUiLCJpbmNsdWRlcyIsImZpbGVuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwic3RhcnRzV2l0aCIsImdldFJvdXRlcyIsImQiLCJwYWdlUm91dGVzIiwiYWxsUm91dGVzIiwiYWxsTm9ybWFsaXplZFJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBSjtBQUNBLElBQUlDLFdBQUo7O0FBRUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBdUI7QUFBQSxNQUFkQyxLQUFjLHVFQUFOLENBQU07QUFDekNELFNBQU9FLE9BQVAsQ0FBZSxpQkFBUztBQUN0QkQsYUFBUyxDQUFUOztBQUNBLFFBQUlELE9BQU9HLFFBQVgsRUFBcUI7QUFDbkJKLGtCQUFZSyxNQUFNRCxRQUFsQixFQUE0QkYsS0FBNUI7QUFDRDtBQUNGLEdBTEQ7QUFNQSxTQUFPQSxLQUFQO0FBQ0QsQ0FSRDs7QUFVTyxJQUFNSSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNELEtBQUQsRUFBd0I7QUFBQSxNQUFoQkUsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLHFCQUNqQkEsTUFEaUIsQ0FDNUNDLElBRDRDO0FBQUEsTUFDdENDLFVBRHNDLDZCQUN6QixHQUR5Qjs7QUFHcEQsTUFBSSxDQUFDSixNQUFNRyxJQUFYLEVBQWlCO0FBQ2YsUUFBSUgsTUFBTUssS0FBVixFQUFpQjtBQUNmLFlBQU0sSUFBSUMsS0FBSiw4RUFDb0VDLEtBQUtDLFNBQUwsQ0FDdEVSLEtBRHNFLENBRHBFLEVBQU47QUFLRDs7QUFDRCxVQUFNLElBQUlNLEtBQUosc0NBQXdDQyxLQUFLQyxTQUFMLENBQWVSLEtBQWYsQ0FBeEMsRUFBTjtBQUNEOztBQUVELE1BQU1TLG9CQUFvQixzQkFBU1QsTUFBTUcsSUFBZixDQUExQjtBQUNBLE1BQU1PLFlBQVksc0JBQVNOLFVBQVQsRUFBcUJKLE1BQU1HLElBQTNCLENBQWxCOztBQUVBLE1BQUksT0FBT0gsTUFBTVcsT0FBYixLQUF5QixXQUE3QixFQUEwQztBQUN4Q0MsWUFBUUMsSUFBUiw2QkFFSWIsTUFBTUcsSUFGVjtBQUtEOztBQUVELE1BQU1XLG9DQUNEZCxLQURDO0FBRUpHLFVBQU1PLFNBRkY7QUFHSkssa0JBQWNOLGlCQUhWO0FBSUpPLGFBQ0UsT0FBT2hCLE1BQU1nQixPQUFiLEtBQXlCLFdBQXpCLEdBQXVDaEIsTUFBTWdCLE9BQTdDLEdBQXVEZCxPQUFPYyxPQUw1RDtBQU1KQyxpQkFBYSxDQUFDLENBQUNqQixNQUFNa0I7QUFOakIsSUFBTjs7QUFTQSxTQUFPSixlQUFQO0FBQ0QsQ0FuQ00sQyxDQXFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1LLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQXlCO0FBQUEsTUFBeEJ2QixNQUF3Qix1RUFBZixFQUFlO0FBQUEsTUFBWHdCLE1BQVc7QUFDekQsTUFBTUMsaUJBQWlCLEVBQXZCO0FBQ0EsTUFBSUMsUUFBSjtBQUNBLE1BQUlDLE1BQUo7O0FBRUEsTUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUN4QixLQUFELEVBQVFFLE1BQVIsRUFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsUUFBSVksa0JBQWtCYixlQUFlRCxLQUFmLEVBQXNCRSxNQUF0QixDQUF0QixDQUpzQyxDQU10QztBQUNBOztBQUNBLFFBQU11QixnQkFBZ0JKLGVBQWVQLGdCQUFnQlgsSUFBL0IsQ0FBdEI7O0FBRUEsUUFBSVcsZ0JBQWdCZixRQUFwQixFQUE4QjtBQUM1QmUsc0JBQWdCZixRQUFoQixHQUEyQmUsZ0JBQWdCZixRQUFoQixDQUF5QjJCLEdBQXpCLENBQTZCO0FBQUEsZUFDdERGLGFBQWFHLFVBQWIsRUFBeUJiLGVBQXpCLENBRHNEO0FBQUEsT0FBN0IsQ0FBM0I7QUFHRCxLQWRxQyxDQWdCdEM7QUFDQTs7O0FBQ0EsUUFBSVcsYUFBSixFQUFtQjtBQUNqQixVQUFJQSxjQUFjRyxNQUFsQixFQUEwQjtBQUN4QkMsZUFBT0MsTUFBUCxDQUFjTCxhQUFkLG9CQUNLWCxlQURMO0FBRUVpQixxQkFBV04sY0FBY007QUFGM0I7QUFJQWpCLDBCQUFrQlcsYUFBbEI7QUFDRCxPQU5ELE1BTU8sSUFBSSxDQUFDTCxPQUFPWSw2QkFBWixFQUEyQztBQUNoRDtBQUNBcEIsZ0JBQVFDLElBQVIsQ0FDRSw4REFERixFQUVFQyxnQkFBZ0JYLElBRmxCO0FBSUQ7QUFDRixLQWhDcUMsQ0FrQ3RDOzs7QUFDQWtCLG1CQUFlUCxnQkFBZ0JYLElBQS9CLElBQXVDVyxlQUF2QyxDQW5Dc0MsQ0FxQ3RDOztBQUNBLFFBQUlBLGdCQUFnQlgsSUFBaEIsS0FBeUIsR0FBN0IsRUFBa0M7QUFDaENtQixpQkFBVyxJQUFYO0FBQ0Q7O0FBQ0QsUUFBSVIsZ0JBQWdCWCxJQUFoQixLQUF5QixLQUE3QixFQUFvQztBQUNsQ29CLGVBQVMsSUFBVDtBQUNEOztBQUVELFdBQU9ULGVBQVA7QUFDRCxHQTlDRDs7QUFnREEsTUFBSW1CLG1CQUFtQnJDLE9BQU84QixHQUFQLENBQVc7QUFBQSxXQUFTRixhQUFheEIsS0FBYixDQUFUO0FBQUEsR0FBWCxDQUF2Qjs7QUFFQSxNQUFJLENBQUNvQixPQUFPYyxJQUFaLEVBQWtCO0FBQ2hCLFFBQU1DLGFBQWEsRUFBbkI7O0FBQ0EsUUFBTVgsZ0JBQWUsU0FBZkEsYUFBZSxRQUFTO0FBQzVCVyxpQkFBV0MsSUFBWCxDQUFnQnBDLEtBQWhCOztBQUNBLFVBQUlBLE1BQU1ELFFBQVYsRUFBb0I7QUFDbEJDLGNBQU1ELFFBQU4sQ0FBZUQsT0FBZixDQUF1QjBCLGFBQXZCO0FBQ0Q7O0FBQ0R4QixZQUFNRCxRQUFOLEdBQWlCc0MsU0FBakI7QUFDRCxLQU5EOztBQU9BSixxQkFBaUJuQyxPQUFqQixDQUF5QjBCLGFBQXpCO0FBQ0FTLHVCQUFtQkUsVUFBbkI7QUFDRDs7QUFFRCxTQUFPO0FBQ0x2QyxZQUFRcUMsZ0JBREg7QUFFTFgsc0JBRks7QUFHTEM7QUFISyxHQUFQO0FBS0QsQ0F6RU07Ozs7QUEyRUEsSUFBTWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFxQix3QkFBOEJDLEVBQTlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU25CLGtCQUFULFFBQVNBLE1BQVQsbUJBQWlCb0IsSUFBakIsRUFBaUJBLElBQWpCLDBCQUF3QixFQUF4QjtBQUNoQztBQUNNQywwQkFGMEIsR0FFVHJCLE9BQU9zQixVQUFQLENBQ3BCaEIsR0FEb0IsQ0FDaEI7QUFBQSwrQkFBVWlCLElBQUlDLEtBQUosQ0FBVSxDQUFWLENBQVY7QUFBQSxhQURnQixFQUVwQkMsSUFGb0IsQ0FFZixHQUZlLENBRlM7QUFLMUJDLHFCQUwwQixhQUtYMUIsT0FBTzJCLEtBQVAsQ0FBYUMsS0FMRixvQkFLaUJQLGNBTGpCLFFBTWhDOztBQUVNUSxrQkFSMEIsR0FRakIsU0FBVEEsTUFBUyxRQUFTO0FBQ3RCO0FBQ0Esa0JBQU1yRCxTQUFTc0QsTUFBTXhCLEdBQU4sQ0FBVSxnQkFBUTtBQUMvQjtBQUNBLG9CQUFNSyxZQUFZb0IsY0FBU0MsUUFBVCxDQUFrQmhDLE9BQU8yQixLQUFQLENBQWFNLElBQS9CLEVBQXFDQyxJQUFyQyxDQUFsQixDQUYrQixDQUcvQjs7O0FBQ0Esb0JBQUluRCxPQUFPbUQsS0FBS0MsT0FBTCxXQUFnQm5DLE9BQU8yQixLQUFQLENBQWFDLEtBQTdCLEdBQXNDLEVBQXRDLEVBQTBDTyxPQUExQyxDQUFrRCxNQUFsRCxFQUEwRCxFQUExRCxDQUFYLENBSitCLENBSy9COztBQUNBcEQsdUJBQU9BLEtBQUtvRCxPQUFMLENBQWEsVUFBYixFQUF5QixHQUF6QixDQUFQLENBTitCLENBTy9COztBQUNBLHVCQUFPO0FBQ0xwRCw0QkFESztBQUVMNEIsc0NBRks7QUFHTEgsMEJBQVEsSUFISCxDQUdTOztBQUhULGlCQUFQO0FBS0QsZUFiYyxDQUFmO0FBY0EscUJBQU9oQyxNQUFQO0FBQ0QsYUF6QitCOztBQTJCaEMsZ0JBQUk0QyxLQUFLZ0IsR0FBTCxJQUFZLENBQUMvRCxPQUFqQixFQUEwQjtBQUN4QkEsd0JBQVVnRSxrQkFDUEMsS0FETyxDQUNEdEMsT0FBTzJCLEtBQVAsQ0FBYUMsS0FEWixFQUNtQjtBQUN6QlcsK0JBQWU7QUFEVSxlQURuQixFQUlQQyxFQUpPLENBS04sS0FMTSxFQU1OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FBUyxpQkFBT0MsSUFBUCxFQUFhQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNGLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0JDLFFBQWxCLENBQTJCRixJQUEzQixDQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBSURHLGtDQUpDLEdBSVVGLEtBQUtHLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixHQUEwQixDQUExQixDQUpWOztBQUFBLCtCQUtIRixTQUFTRyxVQUFULENBQW9CLEdBQXBCLENBTEc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQVFhLGlCQUFLckIsU0FBTCxDQVJiOztBQUFBO0FBUURJLCtCQVJDO0FBU0R0RCxnQ0FUQyxHQVNRcUQsT0FBT0MsS0FBUCxDQVRSO0FBVVB4RCx3Q0FBY0UsTUFBZDtBQUNBMkMsNkJBQUczQyxNQUFIOztBQVhPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5NLEVBbUJOLEVBbkJNLENBQVY7QUFxQkQ7O0FBakQrQixpQkFrRDVCRixXQWxENEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBbUR2QjZDLEdBQUc3QyxXQUFILENBbkR1Qjs7QUFBQTtBQUFBO0FBQUEsbUJBcURaLGlCQUFLb0QsU0FBTCxDQXJEWTs7QUFBQTtBQXFEMUJJLGlCQXJEMEI7QUFzRDFCdEQsa0JBdEQwQixHQXNEakJxRCxPQUFPQyxLQUFQLENBdERpQjtBQUFBLDhDQXVEekJYLEdBQUczQyxNQUFILENBdkR5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOLEMsQ0EwRFA7Ozs7O0FBQ0EsSUFBTXdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU2hELGtCQUFULFNBQVNBLE1BQVQsRUFBaUJvQixJQUFqQixTQUFpQkEsSUFBakI7QUFBeUJELGNBQXpCLDhEQUE4QjtBQUFBLHFCQUFLOEIsQ0FBTDtBQUFBLGFBQTlCO0FBQUEsOENBQ2hCO0FBQ0EvQiwrQkFBbUI7QUFBRWxCLDRCQUFGO0FBQVVvQjtBQUFWLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FBcUMsa0JBQU04QixVQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNkbEQsT0FBT2dELFNBQVAsQ0FBaUI1QixJQUFqQixDQURjOztBQUFBO0FBQzdCNUMsOEJBRDZCO0FBRTdCMkUsaUNBRjZCLHNCQUViRCxVQUZhLDRCQUVFMUUsTUFGRjtBQUFBLDhDQU8vQnVCLG1CQUFtQm9ELFNBQW5CLEVBQThCbkQsTUFBOUIsQ0FQK0IsRUFJekJvRCxtQkFKeUIsdUJBSWpDNUUsTUFKaUMsRUFLakMwQixRQUxpQyx1QkFLakNBLFFBTGlDLEVBTWpDQyxNQU5pQyx1QkFNakNBLE1BTmlDLEVBUW5DOztBQVJtQyw0QkFTOUJELFFBVDhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhCQVUzQixJQUFJaEIsS0FBSixDQUNKLGlKQURJLENBVjJCOztBQUFBO0FBQUEsNEJBZTlCaUIsTUFmOEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOEJBZ0IzQixJQUFJakIsS0FBSixDQUNKLCtJQURJLENBaEIyQjs7QUFBQTtBQUFBLDBEQW9CNUJpQyxHQUFHaUMsbUJBQUgsQ0FwQjRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJDOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2VBeUJlSixTOzs7Ozs7Ozs7Ozs7OzswQkF0TlgzRSxPOzBCQUNBQyxXOzBCQUVFQyxXOzBCQVVPTSxjOzBCQTBDQWtCLGtCOzBCQTJFQW1CLGtCOzBCQTJEUDhCLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG5cbmltcG9ydCBub2RlUGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGNob2tpZGFyIGZyb20gJ2Nob2tpZGFyJ1xuXG5pbXBvcnQgeyBnbG9iLCBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgcGF0aEpvaW4gfSBmcm9tICcuLi91dGlscy9zaGFyZWQnXG5cbmxldCB3YXRjaGVyXG5sZXQgcm91dGVzQ2FjaGVcblxuY29uc3QgY291bnRSb3V0ZXMgPSAocm91dGVzLCBjb3VudCA9IDApID0+IHtcbiAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgIGNvdW50ICs9IDFcbiAgICBpZiAocm91dGVzLmNoaWxkcmVuKSB7XG4gICAgICBjb3VudFJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgY291bnQpXG4gICAgfVxuICB9KVxuICByZXR1cm4gY291bnRcbn1cblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVJvdXRlID0gKHJvdXRlLCBwYXJlbnQgPSB7fSkgPT4ge1xuICBjb25zdCB7IHBhdGg6IHBhcmVudFBhdGggPSAnLycgfSA9IHBhcmVudFxuXG4gIGlmICghcm91dGUucGF0aCkge1xuICAgIGlmIChyb3V0ZS5pczQwNCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgcm91dGUuaXM0MDQgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIFxcYHBhdGg6ICc0MDQnXFxgIGluc3RlYWQhIFJvdXRlOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHJvdXRlXG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBhdGggZGVmaW5lZCBmb3Igcm91dGU6ICR7SlNPTi5zdHJpbmdpZnkocm91dGUpfWApXG4gIH1cblxuICBjb25zdCBvcmlnaW5hbFJvdXRlUGF0aCA9IHBhdGhKb2luKHJvdXRlLnBhdGgpXG4gIGNvbnN0IHJvdXRlUGF0aCA9IHBhdGhKb2luKHBhcmVudFBhdGgsIHJvdXRlLnBhdGgpXG5cbiAgaWYgKHR5cGVvZiByb3V0ZS5ub0luZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGA9PiBXYXJuaW5nOiBSb3V0ZSAke1xuICAgICAgICByb3V0ZS5wYXRoXG4gICAgICB9IGlzIHVzaW5nICdub0luZGV4Jy4gRGlkIHlvdSBtZWFuICdub2luZGV4Jz9gXG4gICAgKVxuICB9XG5cbiAgY29uc3Qgbm9ybWFsaXplZFJvdXRlID0ge1xuICAgIC4uLnJvdXRlLFxuICAgIHBhdGg6IHJvdXRlUGF0aCxcbiAgICBvcmlnaW5hbFBhdGg6IG9yaWdpbmFsUm91dGVQYXRoLFxuICAgIG5vaW5kZXg6XG4gICAgICB0eXBlb2Ygcm91dGUubm9pbmRleCAhPT0gJ3VuZGVmaW5lZCcgPyByb3V0ZS5ub2luZGV4IDogcGFyZW50Lm5vaW5kZXgsXG4gICAgaGFzR2V0UHJvcHM6ICEhcm91dGUuZ2V0RGF0YSxcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemVkUm91dGVcbn1cblxuLy8gV2UgcmVjdXJzaXZlbHkgbG9vcCB0aHJvdWdoIHRoZSByb3V0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuIGFuZFxuLy8gcmV0dXJuIGFuIGFycmF5IG9mIG5vcm1hbGlzZWQgcm91dGVzLlxuLy8gT3JpZ2luYWwgcm91dGVzIGFycmF5IFt7IHBhdGg6ICdwYXRoJywgY2hpbGRyZW46IHsgcGF0aDogJ3RvJyB9IH1dXG4vLyBUaGVzZSBjYW4gYmUgcmV0dXJuZWQgYXMgZmxhdCByb3V0ZXMgZWcuIFt7IHBhdGg6ICdwYXRoJyB9LCB7IHBhdGg6ICdwYXRoL3RvJyB9XVxuLy8gT3IgdGhleSBjYW4gYmUgcmV0dXJuZWQgbmVzdGVkIHJvdXRlcyBlZy4gW3sgcGF0aDogJ3BhdGgnLCBjaGlsZHJlbjogeyBwYXRoOiAncGF0aC90bycgfSB9XVxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUFsbFJvdXRlcyA9IChyb3V0ZXMgPSBbXSwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nUm91dGVzID0ge31cbiAgbGV0IGhhc0luZGV4XG4gIGxldCBoYXM0MDRcblxuICBjb25zdCByZWN1cnNlUm91dGUgPSAocm91dGUsIHBhcmVudCkgPT4ge1xuICAgIC8vIGlmIHN0cnVjdHVyZSBpcyBuZXN0ZWQgKHRyZWUgPT09IHRydWUpIG5vcm1hbGl6ZWRSb3V0ZSB3aWxsXG4gICAgLy8gaGF2ZSBjaGlsZHJlbiBvdGhlcndpc2Ugd2UgZmFsbCBiYWNrIHRvIHRoZSBvcmlnaW5hbCByb3V0ZSBjaGlsZHJlblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgcm91dGVcbiAgICBsZXQgbm9ybWFsaXplZFJvdXRlID0gbm9ybWFsaXplUm91dGUocm91dGUsIHBhcmVudClcblxuICAgIC8vIHdlIGNoZWNrIGFuIGFycmF5IG9mIHBhdGhzIHRvIHNlZVxuICAgIC8vIGlmIHJvdXRlIHBhdGggYWxyZWFkeSBleGlzdGluZ3NcbiAgICBjb25zdCBleGlzdGluZ1JvdXRlID0gZXhpc3RpbmdSb3V0ZXNbbm9ybWFsaXplZFJvdXRlLnBhdGhdXG5cbiAgICBpZiAobm9ybWFsaXplZFJvdXRlLmNoaWxkcmVuKSB7XG4gICAgICBub3JtYWxpemVkUm91dGUuY2hpbGRyZW4gPSBub3JtYWxpemVkUm91dGUuY2hpbGRyZW4ubWFwKGNoaWxkUm91dGUgPT5cbiAgICAgICAgcmVjdXJzZVJvdXRlKGNoaWxkUm91dGUsIG5vcm1hbGl6ZWRSb3V0ZSlcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgcm91dGUgZXhpc3RzIGFuZCBpcyBhIHBhZ2Ugcm91dGUsIHdlIG5lZWQgdG8gZGVjb3JhdGUgdGhlXG4gICAgLy8gcGFnZSByb3V0ZSB3aXRoIHRoaXMgcm91dGVzIGluZm9ybWF0aW9uXG4gICAgaWYgKGV4aXN0aW5nUm91dGUpIHtcbiAgICAgIGlmIChleGlzdGluZ1JvdXRlLmlzUGFnZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGV4aXN0aW5nUm91dGUsIHtcbiAgICAgICAgICAuLi5ub3JtYWxpemVkUm91dGUsXG4gICAgICAgICAgY29tcG9uZW50OiBleGlzdGluZ1JvdXRlLmNvbXBvbmVudCxcbiAgICAgICAgfSlcbiAgICAgICAgbm9ybWFsaXplZFJvdXRlID0gZXhpc3RpbmdSb3V0ZVxuICAgICAgfSBlbHNlIGlmICghY29uZmlnLmRpc2FibGVEdXBsaWNhdGVSb3V0ZXNXYXJuaW5nKSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2Ugc2hvdWxkbid0IGhhdmUgZHVwbGljYXRlIHJvdXRlc1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ01vcmUgdGhhbiBvbmUgcm91dGUgaW4gc3RhdGljLmNvbmZpZy5qcyBpcyBkZWZpbmVkIGZvciBwYXRoOicsXG4gICAgICAgICAgbm9ybWFsaXplZFJvdXRlLnBhdGhcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIHJvdXRlIGV4aXN0ZW5jZVxuICAgIGV4aXN0aW5nUm91dGVzW25vcm1hbGl6ZWRSb3V0ZS5wYXRoXSA9IG5vcm1hbGl6ZWRSb3V0ZVxuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBpbmRleCBhbmQgNDA0IHJvdXRlcyBleGlzdGVuY2VcbiAgICBpZiAobm9ybWFsaXplZFJvdXRlLnBhdGggPT09ICcvJykge1xuICAgICAgaGFzSW5kZXggPSB0cnVlXG4gICAgfVxuICAgIGlmIChub3JtYWxpemVkUm91dGUucGF0aCA9PT0gJzQwNCcpIHtcbiAgICAgIGhhczQwNCA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFJvdXRlXG4gIH1cblxuICBsZXQgbm9ybWFsaXplZFJvdXRlcyA9IHJvdXRlcy5tYXAocm91dGUgPT4gcmVjdXJzZVJvdXRlKHJvdXRlKSlcblxuICBpZiAoIWNvbmZpZy50cmVlKSB7XG4gICAgY29uc3QgZmxhdFJvdXRlcyA9IFtdXG4gICAgY29uc3QgcmVjdXJzZVJvdXRlID0gcm91dGUgPT4ge1xuICAgICAgZmxhdFJvdXRlcy5wdXNoKHJvdXRlKVxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2gocmVjdXJzZVJvdXRlKVxuICAgICAgfVxuICAgICAgcm91dGUuY2hpbGRyZW4gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgbm9ybWFsaXplZFJvdXRlcy5mb3JFYWNoKHJlY3Vyc2VSb3V0ZSlcbiAgICBub3JtYWxpemVkUm91dGVzID0gZmxhdFJvdXRlc1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByb3V0ZXM6IG5vcm1hbGl6ZWRSb3V0ZXMsXG4gICAgaGFzSW5kZXgsXG4gICAgaGFzNDA0LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSb3V0ZXNGcm9tUGFnZXMgPSBhc3luYyAoeyBjb25maWcsIG9wdHMgPSB7fSB9LCBjYikgPT4ge1xuICAvLyBNYWtlIGEgZ2xvYiBleHRlbnNpb24gdG8gZ2V0IGFsbCBwYWdlcyB3aXRoIHRoZSBzZXQgZXh0ZW5zaW9ucyBmcm9tIHRoZSBwYWdlcyBkaXJlY3RvcnlcbiAgY29uc3QgZ2xvYkV4dGVuc2lvbnMgPSBjb25maWcuZXh0ZW5zaW9uc1xuICAgIC5tYXAoZXh0ID0+IGAke2V4dC5zbGljZSgxKX1gKVxuICAgIC5qb2luKCcsJylcbiAgY29uc3QgcGFnZXNHbG9iID0gYCR7Y29uZmlnLnBhdGhzLlBBR0VTfS8qKi8qLnske2dsb2JFeHRlbnNpb25zfX1gXG4gIC8vIEdldCB0aGUgcGFnZXNcblxuICBjb25zdCBoYW5kbGUgPSBwYWdlcyA9PiB7XG4gICAgLy8gVHVybiBlYWNoIHBhZ2UgaW50byBhIHJvdXRlXG4gICAgY29uc3Qgcm91dGVzID0gcGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgLy8gR2V0IHRoZSBjb21wb25lbnQgcGF0aCByZWxhdGl2ZSB0byBST09UXG4gICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlUGF0aC5yZWxhdGl2ZShjb25maWcucGF0aHMuUk9PVCwgcGFnZSlcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcGF0aCBpcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBvZiB0aGUgc2l0ZVxuICAgICAgbGV0IHBhdGggPSBwYWdlLnJlcGxhY2UoYCR7Y29uZmlnLnBhdGhzLlBBR0VTfWAsICcnKS5yZXBsYWNlKC9cXC4uKi8sICcnKVxuICAgICAgLy8gVHVybiBgL2luZGV4YCBwYXRocyBpbnRvIHJvb3RzYFxuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvaW5kZXgkLywgJy8nKVxuICAgICAgLy8gUmV0dXJuIHRoZSByb3V0ZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBpc1BhZ2U6IHRydWUsIC8vIHRhZyBpdCB3aXRoIGlzUGFnZSwgc28gd2Uga25vdyBpdHMgb3JpZ2luXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcm91dGVzXG4gIH1cblxuICBpZiAob3B0cy5kZXYgJiYgIXdhdGNoZXIpIHtcbiAgICB3YXRjaGVyID0gY2hva2lkYXJcbiAgICAgIC53YXRjaChjb25maWcucGF0aHMuUEFHRVMsIHtcbiAgICAgICAgaWdub3JlSW5pdGlhbDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICAub24oXG4gICAgICAgICdhbGwnLFxuICAgICAgICBkZWJvdW5jZShhc3luYyAodHlwZSwgZmlsZSkgPT4ge1xuICAgICAgICAgIGlmICghWydhZGQnLCAndW5saW5rJ10uaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUuc3BsaXQoJy8nKS5yZXZlcnNlKClbMF1cbiAgICAgICAgICBpZiAoZmlsZW5hbWUuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCBnbG9iKHBhZ2VzR2xvYilcbiAgICAgICAgICBjb25zdCByb3V0ZXMgPSBoYW5kbGUocGFnZXMpXG4gICAgICAgICAgcm91dGVzQ2FjaGUgPSByb3V0ZXNcbiAgICAgICAgICBjYihyb3V0ZXMpXG4gICAgICAgIH0pLFxuICAgICAgICA1MFxuICAgICAgKVxuICB9XG4gIGlmIChyb3V0ZXNDYWNoZSkge1xuICAgIHJldHVybiBjYihyb3V0ZXNDYWNoZSlcbiAgfVxuICBjb25zdCBwYWdlcyA9IGF3YWl0IGdsb2IocGFnZXNHbG9iKVxuICBjb25zdCByb3V0ZXMgPSBoYW5kbGUocGFnZXMpXG4gIHJldHVybiBjYihyb3V0ZXMpXG59XG5cbi8vIEF0IGxlYXN0IGVuc3VyZSB0aGUgaW5kZXggcGFnZSBpcyBkZWZpbmVkIGZvciBleHBvcnRcbmNvbnN0IGdldFJvdXRlcyA9IGFzeW5jICh7IGNvbmZpZywgb3B0cyB9LCBjYiA9IGQgPT4gZCkgPT5cbiAgLy8gV2UgdXNlIHRoZSBjYWxsYmFjayBwYXR0ZXJuIGhlcmUsIGJlY2F1c2UgZ2V0Um91dGVzRnJvbVBhZ2VzIGlzIHRlY2huaWNhbGx5IGEgc3Vic2NyaXB0aW9uXG4gIGdldFJvdXRlc0Zyb21QYWdlcyh7IGNvbmZpZywgb3B0cyB9LCBhc3luYyBwYWdlUm91dGVzID0+IHtcbiAgICBjb25zdCByb3V0ZXMgPSBhd2FpdCBjb25maWcuZ2V0Um91dGVzKG9wdHMpXG4gICAgY29uc3QgYWxsUm91dGVzID0gWy4uLnBhZ2VSb3V0ZXMsIC4uLnJvdXRlc11cbiAgICBjb25zdCB7XG4gICAgICByb3V0ZXM6IGFsbE5vcm1hbGl6ZWRSb3V0ZXMsXG4gICAgICBoYXNJbmRleCxcbiAgICAgIGhhczQwNCxcbiAgICB9ID0gbm9ybWFsaXplQWxsUm91dGVzKGFsbFJvdXRlcywgY29uZmlnKVxuICAgIC8vIElmIG5vIEluZGV4IHBhZ2Ugd2FzIGZvdW5kLCB0aHJvdyBhbiBlcnJvci4gVGhpcyBpcyByZXF1aXJlZFxuICAgIGlmICghaGFzSW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0NvdWxkIG5vdCBmaW5kIGEgcm91dGUgZm9yIHRoZSBcImluZGV4XCIgcGFnZSBvZiB5b3VyIHNpdGUhIFRoaXMgaXMgcmVxdWlyZWQuIFBsZWFzZSBjcmVhdGUgYSBwYWdlIG9yIHNwZWNpZnkgYSByb3V0ZSBhbmQgdGVtcGxhdGUgZm9yIHRoaXMgcGFnZS4nXG4gICAgICApXG4gICAgfVxuICAgIC8vIElmIG5vIDQwNCBwYWdlIHdhcyBmb3VuZCwgdGhyb3cgYW4gZXJyb3IuIFRoaXMgaXMgcmVxdWlyZWRcbiAgICBpZiAoIWhhczQwNCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ291bGQgbm90IGZpbmQgYSByb3V0ZSBmb3IgdGhlIFwiNDA0XCIgcGFnZSBvZiB5b3VyIHNpdGUhIFRoaXMgaXMgcmVxdWlyZWQuIFBsZWFzZSBjcmVhdGUgYSBwYWdlIG9yIHNwZWNpZnkgYSByb3V0ZSBhbmQgdGVtcGxhdGUgZm9yIHRoaXMgcGFnZS4nXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBjYihhbGxOb3JtYWxpemVkUm91dGVzKVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSb3V0ZXNcbiJdfQ==