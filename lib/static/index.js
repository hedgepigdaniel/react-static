"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "buildXMLandRSS", {
  enumerable: true,
  get: function get() {
    return _buildXML.default;
  }
});
exports.exportRoutes = exports.fetchRoutes = exports.exportSharedRouteData = exports.fetchSiteData = exports.prepareRoutes = exports.extractTemplates = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _shorthash = _interopRequireDefault(require("shorthash"));

var _chalk = _interopRequireDefault(require("chalk"));

var _os = _interopRequireDefault(require("os"));

var _child_process = require("child_process");

var _generateRoutes = _interopRequireDefault(require("./generateRoutes"));

var _getRoutes = _interopRequireDefault(require("./getRoutes"));

var _buildXML = _interopRequireDefault(require("./buildXML"));

var _utils = require("../utils");

var _shared = require("../utils/shared");

var _exporter = _interopRequireDefault(require("./exporter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cores = Math.max(_os.default.cpus().length, 1);

var extractTemplates =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(config) {
    var templates;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('=> Building Templates');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Templates Built")); // Dedupe all templates into an array

            templates = [];
            config.routes.forEach(function (route) {
              if (!route.component) {
                return;
              } // Check if the template has already been added


              var index = templates.indexOf(route.component);

              if (index === -1) {
                // If it's new, add it
                templates.push(route.component); // Assign the templateID

                route.templateID = templates.length - 1;
              } else {
                // Assign the existing templateID
                route.templateID = index;
              }
            });
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Templates Built"));
            config.templates = templates;
            _context.next = 8;
            return (0, _generateRoutes.default)({
              config: config
            });

          case 8:
            return _context.abrupt("return", templates);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function extractTemplates(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.extractTemplates = extractTemplates;

var prepareRoutes =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(_ref2) {
    var config,
        opts,
        silent,
        cb,
        _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            config = _ref2.config, opts = _ref2.opts, silent = _ref2.silent;
            cb = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : function (d) {
              return d;
            };
            if (!silent) console.log('=> Building Routes...'); // set the static routes

            process.env.REACT_STATIC_ROUTES_PATH = _path.default.join(config.paths.DIST, 'react-static-routes.js');
            if (!silent) (0, _utils.time)(_chalk.default.green("=> [\u2713] Routes Built"));
            return _context3.abrupt("return", (0, _getRoutes.default)({
              config: config,
              opts: opts
            },
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(routes) {
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!silent) (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Routes Built"));
                        config.routes = routes;
                        config.templates = extractTemplates(config);
                        return _context2.abrupt("return", cb(config));

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function prepareRoutes(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.prepareRoutes = prepareRoutes;

var fetchSiteData =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(config) {
    var siteData;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('=> Fetching Site Data...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Site Data Downloaded")); // Get the site data

            _context4.next = 4;
            return config.getSiteData({
              dev: false
            });

          case 4:
            siteData = _context4.sent;
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Site Data Downloaded"));
            return _context4.abrupt("return", siteData);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function fetchSiteData(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.fetchSiteData = fetchSiteData;

var exportSharedRouteData =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(config, sharedProps) {
    var sharedPropsArr, jsonProgress;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // Write all shared props to file
            sharedPropsArr = Array.from(sharedProps);

            if (!sharedPropsArr.length) {
              _context6.next = 8;
              break;
            }

            console.log('=> Exporting Shared Route Data...');
            jsonProgress = (0, _utils.progress)(sharedPropsArr.length);
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Shared Route Data Exported"));
            _context6.next = 7;
            return (0, _shared.poolAll)(sharedPropsArr.map(function (cachedProp) {
              return (
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee5() {
                  return _regenerator.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _fsExtra.default.outputFile(_path.default.join(config.paths.STATIC_DATA, "".concat(cachedProp[1].hash, ".json")), cachedProp[1].jsonString || '{}');

                        case 2:
                          jsonProgress.tick();

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }))
              );
            }), Number(config.outputFileRate));

          case 7:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Shared Route Data Exported"));

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function exportSharedRouteData(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.exportSharedRouteData = exportSharedRouteData;

var fetchRoutes =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9(config) {
    var seenProps, sharedProps, dataProgress, downloadTasks, _loop, i, dataWriteProgress, writeTasks, _loop2;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            // Set up some scaffolding for automatic data splitting
            seenProps = new Map();
            sharedProps = new Map();
            console.log('=> Fetching Route Data...');
            dataProgress = (0, _utils.progress)(config.routes.length);
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Route Data Downloaded")); // Use a traditional for loop here for perf

            downloadTasks = [];

            _loop = function _loop(i) {
              var route = config.routes[i];
              downloadTasks.push(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee7() {
                return _regenerator.default.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.t0 = !!route.getData;

                        if (!_context7.t0) {
                          _context7.next = 5;
                          break;
                        }

                        _context7.next = 4;
                        return route.getData({
                          route: route,
                          dev: false
                        });

                      case 4:
                        _context7.t0 = _context7.sent;

                      case 5:
                        route.allProps = _context7.t0;

                        // Default allProps (must be an object)
                        if (!route.allProps) {
                          route.allProps = {};
                        } // TODO: check if route.allProps is indeed an object
                        // Loop through the props to find shared props between routes
                        // TODO: expose knobs to tweak these settings, perform them manually,
                        // or simply just turn them off.


                        Object.keys(route.allProps).map(function (k) {
                          return route.allProps[k];
                        }).forEach(function (prop) {
                          // Don't split small strings
                          if (typeof prop === 'string' && prop.length < 100) {
                            return;
                          } // Don't split booleans or undefineds


                          if (['boolean', 'number', 'undefined'].includes(_typeof(prop))) {
                            return;
                          } // Should be an array or object at this point
                          // Have we seen this prop before?


                          if (seenProps.get(prop)) {
                            // Only cache each shared prop once
                            if (sharedProps.get(prop)) {
                              return;
                            } // Cache the prop


                            var jsonString = JSON.stringify(prop);
                            sharedProps.set(prop, {
                              jsonString: jsonString,
                              hash: _shorthash.default.unique(jsonString)
                            });
                          } else {
                            // Mark the prop as seen
                            seenProps.set(prop, true);
                          }
                        });
                        dataProgress.tick();

                      case 9:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              })));
            };

            for (i = 0; i < config.routes.length; i++) {
              _loop(i);
            }

            _context9.next = 10;
            return (0, _shared.poolAll)(downloadTasks, Number(config.outputFileRate));

          case 10:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Route Data Downloaded"));
            console.log('=> Exporting Route Data...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Route Data Exported"));
            dataWriteProgress = (0, _utils.progress)(config.routes.length); // Use a traditional for loop for perf here

            writeTasks = [];

            _loop2 = function _loop2(i) {
              var route = config.routes[i];
              writeTasks.push(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee8() {
                return _regenerator.default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        // Loop through the props and build the prop maps
                        route.localProps = {};
                        route.sharedPropsHashes = {};
                        Object.keys(route.allProps).forEach(function (key) {
                          var value = route.allProps[key];
                          var cached = sharedProps.get(value);

                          if (cached) {
                            route.sharedPropsHashes[key] = cached.hash;
                          } else {
                            route.localProps[key] = value;
                          }
                        });
                        dataWriteProgress.tick();

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              })));
            };

            for (i = 0; i < config.routes.length; i++) {
              _loop2(i);
            }

            _context9.next = 19;
            return (0, _shared.poolAll)(writeTasks, Number(config.outputFileRate));

          case 19:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Route Data Exported"));
            return _context9.abrupt("return", exportSharedRouteData(config, sharedProps));

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function fetchRoutes(_x7) {
    return _ref8.apply(this, arguments);
  };
}();

exports.fetchRoutes = fetchRoutes;

var buildHTML =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(_ref11) {
    var oldConfig, siteData, clientStats, routes, config, threads, htmlProgress, exporters, i, exporterRoutes;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            oldConfig = _ref11.config, siteData = _ref11.siteData, clientStats = _ref11.clientStats;
            routes = oldConfig.routes, config = _objectWithoutProperties(oldConfig, ["routes"]);
            (0, _utils.time)(_chalk.default.green("=> [\u2713] HTML Exported")); // Single threaded export

            if (!(config.maxThreads <= 1)) {
              _context10.next = 9;
              break;
            }

            console.log('=> Exporting HTML...');
            _context10.next = 7;
            return (0, _exporter.default)({
              config: config,
              routes: routes,
              siteData: siteData,
              clientStats: clientStats
            });

          case 7:
            _context10.next = 18;
            break;

          case 9:
            // Multi-threaded export
            threads = Math.min(cores, config.maxThreads);
            htmlProgress = (0, _utils.progress)(routes.length);
            console.log("=> Exporting HTML across ".concat(cores, " threads..."));
            exporters = [];

            for (i = 0; i < threads; i++) {
              exporters.push((0, _child_process.fork)(require.resolve('./threadedExporter'), [], {
                env: _objectSpread({}, process.env, {
                  REACT_STATIC_SLAVE: 'true'
                }),
                stdio: 'inherit'
              }));
            }

            exporterRoutes = exporters.map(function () {
              return [];
            });
            routes.forEach(function (route, i) {
              exporterRoutes[i % exporterRoutes.length].push(route);
            });
            _context10.next = 18;
            return Promise.all(exporters.map(function (exporter, i) {
              var routes = exporterRoutes[i];
              return new Promise(function (resolve, reject) {
                exporter.send({
                  config: config,
                  routes: routes,
                  siteData: siteData,
                  clientStats: clientStats
                });
                exporter.on('message', function (_ref13) {
                  var type = _ref13.type,
                      payload = _ref13.payload;

                  if (type === 'error') {
                    reject(payload);
                  }

                  if (type === 'log') {
                    var _console;

                    (_console = console).log.apply(_console, _toConsumableArray(payload));
                  }

                  if (type === 'tick') {
                    htmlProgress.tick();
                  }

                  if (type === 'done') {
                    resolve();
                  }
                });
              });
            }));

          case 18:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] HTML Exported"));

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function buildHTML(_x8) {
    return _ref12.apply(this, arguments);
  };
}(); // Exporting route HTML and JSON happens here. It's a big one.


var exportRoutes =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(_ref14) {
    var config, clientStats, siteData;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            config = _ref14.config, clientStats = _ref14.clientStats;
            _context11.next = 3;
            return fetchSiteData(config);

          case 3:
            siteData = _context11.sent;
            _context11.next = 6;
            return fetchRoutes(config);

          case 6:
            _context11.next = 8;
            return buildHTML({
              config: config,
              siteData: siteData,
              clientStats: clientStats
            });

          case 8:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function exportRoutes(_x9) {
    return _ref15.apply(this, arguments);
  };
}();

exports.exportRoutes = exportRoutes;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cores, "cores", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(extractTemplates, "extractTemplates", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(prepareRoutes, "prepareRoutes", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(fetchSiteData, "fetchSiteData", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(exportSharedRouteData, "exportSharedRouteData", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(fetchRoutes, "fetchRoutes", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(buildHTML, "buildHTML", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  reactHotLoader.register(exportRoutes, "exportRoutes", "/home/daniel/flattenedmonad/react-static/src/static/index.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvaW5kZXguanMiXSwibmFtZXMiOlsiY29yZXMiLCJNYXRoIiwibWF4IiwiT1MiLCJjcHVzIiwibGVuZ3RoIiwiZXh0cmFjdFRlbXBsYXRlcyIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImdyZWVuIiwidGVtcGxhdGVzIiwicm91dGVzIiwiZm9yRWFjaCIsInJvdXRlIiwiY29tcG9uZW50IiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInRlbXBsYXRlSUQiLCJwcmVwYXJlUm91dGVzIiwib3B0cyIsInNpbGVudCIsImNiIiwiZCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfUk9VVEVTX1BBVEgiLCJwYXRoIiwiam9pbiIsInBhdGhzIiwiRElTVCIsImZldGNoU2l0ZURhdGEiLCJnZXRTaXRlRGF0YSIsImRldiIsInNpdGVEYXRhIiwiZXhwb3J0U2hhcmVkUm91dGVEYXRhIiwic2hhcmVkUHJvcHMiLCJzaGFyZWRQcm9wc0FyciIsIkFycmF5IiwiZnJvbSIsImpzb25Qcm9ncmVzcyIsIm1hcCIsImZzIiwib3V0cHV0RmlsZSIsIlNUQVRJQ19EQVRBIiwiY2FjaGVkUHJvcCIsImhhc2giLCJqc29uU3RyaW5nIiwidGljayIsIk51bWJlciIsIm91dHB1dEZpbGVSYXRlIiwiZmV0Y2hSb3V0ZXMiLCJzZWVuUHJvcHMiLCJNYXAiLCJkYXRhUHJvZ3Jlc3MiLCJkb3dubG9hZFRhc2tzIiwiaSIsImdldERhdGEiLCJhbGxQcm9wcyIsIk9iamVjdCIsImtleXMiLCJrIiwicHJvcCIsImluY2x1ZGVzIiwiZ2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldCIsInNob3J0aGFzaCIsInVuaXF1ZSIsImRhdGFXcml0ZVByb2dyZXNzIiwid3JpdGVUYXNrcyIsImxvY2FsUHJvcHMiLCJzaGFyZWRQcm9wc0hhc2hlcyIsInZhbHVlIiwia2V5IiwiY2FjaGVkIiwiYnVpbGRIVE1MIiwib2xkQ29uZmlnIiwiY2xpZW50U3RhdHMiLCJtYXhUaHJlYWRzIiwidGhyZWFkcyIsIm1pbiIsImh0bWxQcm9ncmVzcyIsImV4cG9ydGVycyIsInJlcXVpcmUiLCJyZXNvbHZlIiwiUkVBQ1RfU1RBVElDX1NMQVZFIiwic3RkaW8iLCJleHBvcnRlclJvdXRlcyIsIlByb21pc2UiLCJhbGwiLCJleHBvcnRlciIsInJlamVjdCIsInNlbmQiLCJvbiIsInR5cGUiLCJwYXlsb2FkIiwiZXhwb3J0Um91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxRQUFRQyxLQUFLQyxHQUFMLENBQVNDLFlBQUdDLElBQUgsR0FBVUMsTUFBbkIsRUFBMkIsQ0FBM0IsQ0FBZDs7QUFFTyxJQUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQW1CLGlCQUFNQyxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkMsb0JBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLDZCQUFLQyxlQUFNQyxLQUFOLENBQVksNkJBQVosQ0FBTCxFQUY4QixDQUk5Qjs7QUFDTUMscUJBTHdCLEdBS1osRUFMWTtBQU85QkwsbUJBQU9NLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixpQkFBUztBQUM3QixrQkFBSSxDQUFDQyxNQUFNQyxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0QsZUFINEIsQ0FJN0I7OztBQUNBLGtCQUFNQyxRQUFRTCxVQUFVTSxPQUFWLENBQWtCSCxNQUFNQyxTQUF4QixDQUFkOztBQUNBLGtCQUFJQyxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQjtBQUNBTCwwQkFBVU8sSUFBVixDQUFlSixNQUFNQyxTQUFyQixFQUZnQixDQUdoQjs7QUFDQUQsc0JBQU1LLFVBQU4sR0FBbUJSLFVBQVVQLE1BQVYsR0FBbUIsQ0FBdEM7QUFDRCxlQUxE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QUE7QUFBQSxtQkFNcEJ3RSxVQUFVO0FBQ2R4RSw0QkFEYztBQUVkNkIsZ0NBRmM7QUFHZDZDO0FBSGMsYUFBVixDQU5vQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47Ozs7Ozs7Ozs7Ozs7OzBCQTdQRGpGLEs7MEJBRU9NLGdCOzBCQWtDQWUsYTswQkF1QkFZLGE7MEJBU0FJLHFCOzBCQXVCQWdCLFc7MEJBMkZQMEIsUzswQkF1RU9xQixZIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR5bmFtaWMtcmVxdWlyZSwgcmVhY3Qvbm8tZGFuZ2VyICovXG5cbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgc2hvcnRoYXNoIGZyb20gJ3Nob3J0aGFzaCdcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBPUyBmcm9tICdvcydcbmltcG9ydCB7IGZvcmsgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuXG5pbXBvcnQgZ2VuZXJhdGVSb3V0ZXMgZnJvbSAnLi9nZW5lcmF0ZVJvdXRlcydcbmltcG9ydCBnZXRSb3V0ZXMgZnJvbSAnLi9nZXRSb3V0ZXMnXG5pbXBvcnQgYnVpbGRYTUxhbmRSU1MgZnJvbSAnLi9idWlsZFhNTCdcbmltcG9ydCB7IHByb2dyZXNzLCB0aW1lLCB0aW1lRW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBwb29sQWxsIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IGV4cG9ydGVyIGZyb20gJy4vZXhwb3J0ZXInXG5cbmV4cG9ydCB7IGJ1aWxkWE1MYW5kUlNTIH1cblxuY29uc3QgY29yZXMgPSBNYXRoLm1heChPUy5jcHVzKCkubGVuZ3RoLCAxKVxuXG5leHBvcnQgY29uc3QgZXh0cmFjdFRlbXBsYXRlcyA9IGFzeW5jIGNvbmZpZyA9PiB7XG4gIGNvbnNvbGUubG9nKCc9PiBCdWlsZGluZyBUZW1wbGF0ZXMnKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gVGVtcGxhdGVzIEJ1aWx0JykpXG5cbiAgLy8gRGVkdXBlIGFsbCB0ZW1wbGF0ZXMgaW50byBhbiBhcnJheVxuICBjb25zdCB0ZW1wbGF0ZXMgPSBbXVxuXG4gIGNvbmZpZy5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgaWYgKCFyb3V0ZS5jb21wb25lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgdGVtcGxhdGUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZFxuICAgIGNvbnN0IGluZGV4ID0gdGVtcGxhdGVzLmluZGV4T2Yocm91dGUuY29tcG9uZW50KVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIElmIGl0J3MgbmV3LCBhZGQgaXRcbiAgICAgIHRlbXBsYXRlcy5wdXNoKHJvdXRlLmNvbXBvbmVudClcbiAgICAgIC8vIEFzc2lnbiB0aGUgdGVtcGxhdGVJRFxuICAgICAgcm91dGUudGVtcGxhdGVJRCA9IHRlbXBsYXRlcy5sZW5ndGggLSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgZXhpc3RpbmcgdGVtcGxhdGVJRFxuICAgICAgcm91dGUudGVtcGxhdGVJRCA9IGluZGV4XG4gICAgfVxuICB9KVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gVGVtcGxhdGVzIEJ1aWx0JykpXG5cbiAgY29uZmlnLnRlbXBsYXRlcyA9IHRlbXBsYXRlc1xuXG4gIGF3YWl0IGdlbmVyYXRlUm91dGVzKHtcbiAgICBjb25maWcsXG4gIH0pXG5cbiAgcmV0dXJuIHRlbXBsYXRlc1xufVxuXG5leHBvcnQgY29uc3QgcHJlcGFyZVJvdXRlcyA9IGFzeW5jICh7IGNvbmZpZywgb3B0cywgc2lsZW50IH0sIGNiID0gZCA9PiBkKSA9PiB7XG4gIGlmICghc2lsZW50KSBjb25zb2xlLmxvZygnPT4gQnVpbGRpbmcgUm91dGVzLi4uJylcbiAgLy8gc2V0IHRoZSBzdGF0aWMgcm91dGVzXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ST1VURVNfUEFUSCA9IHBhdGguam9pbihcbiAgICBjb25maWcucGF0aHMuRElTVCxcbiAgICAncmVhY3Qtc3RhdGljLXJvdXRlcy5qcydcbiAgKVxuXG4gIGlmICghc2lsZW50KSB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUm91dGVzIEJ1aWx0JykpXG4gIHJldHVybiBnZXRSb3V0ZXMoXG4gICAge1xuICAgICAgY29uZmlnLFxuICAgICAgb3B0cyxcbiAgICB9LFxuICAgIGFzeW5jIHJvdXRlcyA9PiB7XG4gICAgICBpZiAoIXNpbGVudCkgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFJvdXRlcyBCdWlsdCcpKVxuICAgICAgY29uZmlnLnJvdXRlcyA9IHJvdXRlc1xuICAgICAgY29uZmlnLnRlbXBsYXRlcyA9IGV4dHJhY3RUZW1wbGF0ZXMoY29uZmlnKVxuICAgICAgcmV0dXJuIGNiKGNvbmZpZylcbiAgICB9XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2l0ZURhdGEgPSBhc3luYyBjb25maWcgPT4ge1xuICBjb25zb2xlLmxvZygnPT4gRmV0Y2hpbmcgU2l0ZSBEYXRhLi4uJylcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFNpdGUgRGF0YSBEb3dubG9hZGVkJykpXG4gIC8vIEdldCB0aGUgc2l0ZSBkYXRhXG4gIGNvbnN0IHNpdGVEYXRhID0gYXdhaXQgY29uZmlnLmdldFNpdGVEYXRhKHsgZGV2OiBmYWxzZSB9KVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gU2l0ZSBEYXRhIERvd25sb2FkZWQnKSlcbiAgcmV0dXJuIHNpdGVEYXRhXG59XG5cbmV4cG9ydCBjb25zdCBleHBvcnRTaGFyZWRSb3V0ZURhdGEgPSBhc3luYyAoY29uZmlnLCBzaGFyZWRQcm9wcykgPT4ge1xuICAvLyBXcml0ZSBhbGwgc2hhcmVkIHByb3BzIHRvIGZpbGVcbiAgY29uc3Qgc2hhcmVkUHJvcHNBcnIgPSBBcnJheS5mcm9tKHNoYXJlZFByb3BzKVxuXG4gIGlmIChzaGFyZWRQcm9wc0Fyci5sZW5ndGgpIHtcbiAgICBjb25zb2xlLmxvZygnPT4gRXhwb3J0aW5nIFNoYXJlZCBSb3V0ZSBEYXRhLi4uJylcbiAgICBjb25zdCBqc29uUHJvZ3Jlc3MgPSBwcm9ncmVzcyhzaGFyZWRQcm9wc0Fyci5sZW5ndGgpXG4gICAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFNoYXJlZCBSb3V0ZSBEYXRhIEV4cG9ydGVkJykpXG5cbiAgICBhd2FpdCBwb29sQWxsKFxuICAgICAgc2hhcmVkUHJvcHNBcnIubWFwKGNhY2hlZFByb3AgPT4gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmcy5vdXRwdXRGaWxlKFxuICAgICAgICAgIHBhdGguam9pbihjb25maWcucGF0aHMuU1RBVElDX0RBVEEsIGAke2NhY2hlZFByb3BbMV0uaGFzaH0uanNvbmApLFxuICAgICAgICAgIGNhY2hlZFByb3BbMV0uanNvblN0cmluZyB8fCAne30nXG4gICAgICAgIClcbiAgICAgICAganNvblByb2dyZXNzLnRpY2soKVxuICAgICAgfSksXG4gICAgICBOdW1iZXIoY29uZmlnLm91dHB1dEZpbGVSYXRlKVxuICAgIClcbiAgICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gU2hhcmVkIFJvdXRlIERhdGEgRXhwb3J0ZWQnKSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hSb3V0ZXMgPSBhc3luYyBjb25maWcgPT4ge1xuICAvLyBTZXQgdXAgc29tZSBzY2FmZm9sZGluZyBmb3IgYXV0b21hdGljIGRhdGEgc3BsaXR0aW5nXG4gIGNvbnN0IHNlZW5Qcm9wcyA9IG5ldyBNYXAoKVxuICBjb25zdCBzaGFyZWRQcm9wcyA9IG5ldyBNYXAoKVxuXG4gIGNvbnNvbGUubG9nKCc9PiBGZXRjaGluZyBSb3V0ZSBEYXRhLi4uJylcbiAgY29uc3QgZGF0YVByb2dyZXNzID0gcHJvZ3Jlc3MoY29uZmlnLnJvdXRlcy5sZW5ndGgpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBSb3V0ZSBEYXRhIERvd25sb2FkZWQnKSlcblxuICAvLyBVc2UgYSB0cmFkaXRpb25hbCBmb3IgbG9vcCBoZXJlIGZvciBwZXJmXG4gIGNvbnN0IGRvd25sb2FkVGFza3MgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5yb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZXNbaV1cbiAgICBkb3dubG9hZFRhc2tzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gRmV0Y2ggYWxsUHJvcHMgZnJvbSBlYWNoIHJvdXRlXG4gICAgICByb3V0ZS5hbGxQcm9wcyA9XG4gICAgICAgICEhcm91dGUuZ2V0RGF0YSAmJiAoYXdhaXQgcm91dGUuZ2V0RGF0YSh7IHJvdXRlLCBkZXY6IGZhbHNlIH0pKVxuICAgICAgLy8gRGVmYXVsdCBhbGxQcm9wcyAobXVzdCBiZSBhbiBvYmplY3QpXG4gICAgICBpZiAoIXJvdXRlLmFsbFByb3BzKSB7XG4gICAgICAgIHJvdXRlLmFsbFByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogY2hlY2sgaWYgcm91dGUuYWxsUHJvcHMgaXMgaW5kZWVkIGFuIG9iamVjdFxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHByb3BzIHRvIGZpbmQgc2hhcmVkIHByb3BzIGJldHdlZW4gcm91dGVzXG4gICAgICAvLyBUT0RPOiBleHBvc2Uga25vYnMgdG8gdHdlYWsgdGhlc2Ugc2V0dGluZ3MsIHBlcmZvcm0gdGhlbSBtYW51YWxseSxcbiAgICAgIC8vIG9yIHNpbXBseSBqdXN0IHR1cm4gdGhlbSBvZmYuXG4gICAgICBPYmplY3Qua2V5cyhyb3V0ZS5hbGxQcm9wcylcbiAgICAgICAgLm1hcChrID0+IHJvdXRlLmFsbFByb3BzW2tdKVxuICAgICAgICAuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAvLyBEb24ndCBzcGxpdCBzbWFsbCBzdHJpbmdzXG4gICAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJyAmJiBwcm9wLmxlbmd0aCA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIERvbid0IHNwbGl0IGJvb2xlYW5zIG9yIHVuZGVmaW5lZHNcbiAgICAgICAgICBpZiAoWydib29sZWFuJywgJ251bWJlcicsICd1bmRlZmluZWQnXS5pbmNsdWRlcyh0eXBlb2YgcHJvcCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaG91bGQgYmUgYW4gYXJyYXkgb3Igb2JqZWN0IGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAvLyBIYXZlIHdlIHNlZW4gdGhpcyBwcm9wIGJlZm9yZT9cbiAgICAgICAgICBpZiAoc2VlblByb3BzLmdldChwcm9wKSkge1xuICAgICAgICAgICAgLy8gT25seSBjYWNoZSBlYWNoIHNoYXJlZCBwcm9wIG9uY2VcbiAgICAgICAgICAgIGlmIChzaGFyZWRQcm9wcy5nZXQocHJvcCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYWNoZSB0aGUgcHJvcFxuICAgICAgICAgICAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHByb3ApXG4gICAgICAgICAgICBzaGFyZWRQcm9wcy5zZXQocHJvcCwge1xuICAgICAgICAgICAgICBqc29uU3RyaW5nLFxuICAgICAgICAgICAgICBoYXNoOiBzaG9ydGhhc2gudW5pcXVlKGpzb25TdHJpbmcpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFyayB0aGUgcHJvcCBhcyBzZWVuXG4gICAgICAgICAgICBzZWVuUHJvcHMuc2V0KHByb3AsIHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgZGF0YVByb2dyZXNzLnRpY2soKVxuICAgIH0pXG4gIH1cbiAgYXdhaXQgcG9vbEFsbChkb3dubG9hZFRhc2tzLCBOdW1iZXIoY29uZmlnLm91dHB1dEZpbGVSYXRlKSlcbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFJvdXRlIERhdGEgRG93bmxvYWRlZCcpKVxuXG4gIGNvbnNvbGUubG9nKCc9PiBFeHBvcnRpbmcgUm91dGUgRGF0YS4uLicpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBSb3V0ZSBEYXRhIEV4cG9ydGVkJykpXG4gIGNvbnN0IGRhdGFXcml0ZVByb2dyZXNzID0gcHJvZ3Jlc3MoY29uZmlnLnJvdXRlcy5sZW5ndGgpXG4gIC8vIFVzZSBhIHRyYWRpdGlvbmFsIGZvciBsb29wIGZvciBwZXJmIGhlcmVcbiAgY29uc3Qgd3JpdGVUYXNrcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLnJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlc1tpXVxuICAgIHdyaXRlVGFza3MucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHByb3BzIGFuZCBidWlsZCB0aGUgcHJvcCBtYXBzXG4gICAgICByb3V0ZS5sb2NhbFByb3BzID0ge31cbiAgICAgIHJvdXRlLnNoYXJlZFByb3BzSGFzaGVzID0ge31cbiAgICAgIE9iamVjdC5rZXlzKHJvdXRlLmFsbFByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcm91dGUuYWxsUHJvcHNba2V5XVxuICAgICAgICBjb25zdCBjYWNoZWQgPSBzaGFyZWRQcm9wcy5nZXQodmFsdWUpXG4gICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICByb3V0ZS5zaGFyZWRQcm9wc0hhc2hlc1trZXldID0gY2FjaGVkLmhhc2hcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZS5sb2NhbFByb3BzW2tleV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgZGF0YVdyaXRlUHJvZ3Jlc3MudGljaygpXG4gICAgfSlcbiAgfVxuICBhd2FpdCBwb29sQWxsKHdyaXRlVGFza3MsIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpKVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUm91dGUgRGF0YSBFeHBvcnRlZCcpKVxuXG4gIHJldHVybiBleHBvcnRTaGFyZWRSb3V0ZURhdGEoY29uZmlnLCBzaGFyZWRQcm9wcylcbn1cblxuY29uc3QgYnVpbGRIVE1MID0gYXN5bmMgKHsgY29uZmlnOiBvbGRDb25maWcsIHNpdGVEYXRhLCBjbGllbnRTdGF0cyB9KSA9PiB7XG4gIGNvbnN0IHsgcm91dGVzLCAuLi5jb25maWcgfSA9IG9sZENvbmZpZ1xuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gSFRNTCBFeHBvcnRlZCcpKVxuXG4gIC8vIFNpbmdsZSB0aHJlYWRlZCBleHBvcnRcbiAgaWYgKGNvbmZpZy5tYXhUaHJlYWRzIDw9IDEpIHtcbiAgICBjb25zb2xlLmxvZygnPT4gRXhwb3J0aW5nIEhUTUwuLi4nKVxuICAgIGF3YWl0IGV4cG9ydGVyKHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJvdXRlcyxcbiAgICAgIHNpdGVEYXRhLFxuICAgICAgY2xpZW50U3RhdHMsXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBNdWx0aS10aHJlYWRlZCBleHBvcnRcbiAgICBjb25zdCB0aHJlYWRzID0gTWF0aC5taW4oY29yZXMsIGNvbmZpZy5tYXhUaHJlYWRzKVxuICAgIGNvbnN0IGh0bWxQcm9ncmVzcyA9IHByb2dyZXNzKHJvdXRlcy5sZW5ndGgpXG4gICAgY29uc29sZS5sb2coYD0+IEV4cG9ydGluZyBIVE1MIGFjcm9zcyAke2NvcmVzfSB0aHJlYWRzLi4uYClcblxuICAgIGNvbnN0IGV4cG9ydGVycyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHJlYWRzOyBpKyspIHtcbiAgICAgIGV4cG9ydGVycy5wdXNoKFxuICAgICAgICBmb3JrKHJlcXVpcmUucmVzb2x2ZSgnLi90aHJlYWRlZEV4cG9ydGVyJyksIFtdLCB7XG4gICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAuLi5wcm9jZXNzLmVudixcbiAgICAgICAgICAgIFJFQUNUX1NUQVRJQ19TTEFWRTogJ3RydWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RkaW86ICdpbmhlcml0JyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRlclJvdXRlcyA9IGV4cG9ydGVycy5tYXAoKCkgPT4gW10pXG5cbiAgICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGkpID0+IHtcbiAgICAgIGV4cG9ydGVyUm91dGVzW2kgJSBleHBvcnRlclJvdXRlcy5sZW5ndGhdLnB1c2gocm91dGUpXG4gICAgfSlcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZXhwb3J0ZXJzLm1hcCgoZXhwb3J0ZXIsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVzID0gZXhwb3J0ZXJSb3V0ZXNbaV1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBleHBvcnRlci5zZW5kKHtcbiAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgIHJvdXRlcyxcbiAgICAgICAgICAgIHNpdGVEYXRhLFxuICAgICAgICAgICAgY2xpZW50U3RhdHMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBleHBvcnRlci5vbignbWVzc2FnZScsICh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xvZycpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4ucGF5bG9hZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGljaycpIHtcbiAgICAgICAgICAgICAgaHRtbFByb2dyZXNzLnRpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkb25lJykge1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gSFRNTCBFeHBvcnRlZCcpKVxufVxuXG4vLyBFeHBvcnRpbmcgcm91dGUgSFRNTCBhbmQgSlNPTiBoYXBwZW5zIGhlcmUuIEl0J3MgYSBiaWcgb25lLlxuZXhwb3J0IGNvbnN0IGV4cG9ydFJvdXRlcyA9IGFzeW5jICh7IGNvbmZpZywgY2xpZW50U3RhdHMgfSkgPT4ge1xuICAvLyB3ZSBtb2RpZnkgY29uZmlnIGluIGZldGNoU2l0ZURhdGFcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBmZXRjaFNpdGVEYXRhKGNvbmZpZylcbiAgLy8gd2UgbW9kaWZ5IGNvbmZpZyBpbiBmZXRjaFJvdXRlc1xuICBhd2FpdCBmZXRjaFJvdXRlcyhjb25maWcpXG5cbiAgYXdhaXQgYnVpbGRIVE1MKHtcbiAgICBjb25maWcsXG4gICAgc2l0ZURhdGEsXG4gICAgY2xpZW50U3RhdHMsXG4gIH0pXG59XG4iXX0=