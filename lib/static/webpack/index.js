"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpackConfig = webpackConfig;
exports.buildCompiler = buildCompiler;
exports.startDevServer = startDevServer;
exports.buildProductionBundles = buildProductionBundles;
exports.reloadRoutes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _webpack = _interopRequireDefault(require("webpack"));

var _path = _interopRequireDefault(require("path"));

var _formatWebpackMessages = _interopRequireDefault(require("react-dev-utils/formatWebpackMessages"));

var _chalk = _interopRequireDefault(require("chalk"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _socket = _interopRequireDefault(require("socket.io"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _rules = require("./rules");

var _utils = require("../../utils");

var _shared = require("../../utils/shared");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var resolvedReloadRoutes;
var reloadWebpackRoutes;
var devServer;

var reloadRoutes = function reloadRoutes() {
  if (!resolvedReloadRoutes) {
    // Not ready yet, so just wait
    return;
  }

  resolvedReloadRoutes.apply(void 0, arguments);
};

exports.reloadRoutes = reloadRoutes;

// Builds a compiler using a stage preset, then allows extension via
// webpackConfigurator
function webpackConfig(_ref) {
  var config = _ref.config,
      stage = _ref.stage;
  var webpackConfig;

  if (stage === 'dev') {
    webpackConfig = require('./webpack.config.dev').default({
      config: config
    });
  } else if (stage === 'prod') {
    webpackConfig = require('./webpack.config.prod').default({
      config: config
    });
  } else if (stage === 'node') {
    webpackConfig = require('./webpack.config.prod').default({
      config: config,
      isNode: true
    });
  } else {
    throw new Error('A stage is required when building a compiler.');
  }

  var defaultLoaders = (0, _rules.getStagedRules)({
    config: config,
    stage: stage
  });
  var transformers = (0, _utils.getConfigPluginHooks)(config, 'webpack').reduce(function (all, curr) {
    if (Array.isArray(curr)) {
      return _toConsumableArray(all).concat(_toConsumableArray(curr));
    }

    return _toConsumableArray(all).concat([curr]);
  }, []);
  transformers.forEach(function (transformer) {
    var modifiedConfig = transformer(webpackConfig, {
      stage: stage,
      defaultLoaders: defaultLoaders
    });

    if (modifiedConfig) {
      webpackConfig = modifiedConfig;
    }
  });
  return webpackConfig;
}

function buildCompiler(_x) {
  return _buildCompiler.apply(this, arguments);
} // Starts the development server


function _buildCompiler() {
  _buildCompiler = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref2) {
    var config, stage;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref2.config, stage = _ref2.stage;
            return _context.abrupt("return", (0, _webpack.default)(webpackConfig({
              config: config,
              stage: stage
            })));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _buildCompiler.apply(this, arguments);
}

function startDevServer(_x2) {
  return _startDevServer.apply(this, arguments);
}

function _startDevServer() {
  _startDevServer = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(_ref3) {
    var config, devCompiler, intendedPort, port, messagePort, host, devServerConfig, first, socket;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            config = _ref3.config;

            if (!devServer) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", devServer);

          case 3:
            _context7.next = 5;
            return buildCompiler({
              config: config,
              stage: 'dev'
            });

          case 5:
            devCompiler = _context7.sent;
            // Default to localhost:3000, or use a custom combo if defined in static.config.js
            // or environment variables
            intendedPort = config.devServer && config.devServer.port || process.env.PORT || 3000;
            _context7.next = 9;
            return (0, _utils.findAvailablePort)(Number(intendedPort));

          case 9:
            port = _context7.sent;
            _context7.next = 12;
            return (0, _utils.findAvailablePort)(4000, [port]);

          case 12:
            messagePort = _context7.sent;

            if (intendedPort !== port) {
              (0, _utils.time)(_chalk.default.red("=> Warning! Port ".concat(intendedPort, " is not available. Using port ").concat(_chalk.default.green(intendedPort), " instead!")));
            }

            host = config.devServer && config.devServer.host || process.env.HOST || 'http://localhost';
            devServerConfig = _objectSpread({
              hot: true,
              disableHostCheck: true,
              contentBase: [config.paths.PUBLIC, config.paths.DIST],
              publicPath: '/',
              historyApiFallback: true,
              compress: false,
              quiet: true
            }, config.devServer, {
              watchOptions: _objectSpread({
                ignored: 'node_modules'
              }, config.devServer ? config.devServer.watchOptions || {} : {}),
              before: function before(app) {
                // Serve the site data
                app.get('/__react-static__/getMessagePort',
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee2(req, res) {
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            res.json({
                              port: messagePort
                            });

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x4, _x5) {
                    return _ref5.apply(this, arguments);
                  };
                }());
                app.get('/__react-static__/siteData',
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(req, res, next) {
                    var siteData;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return config.getSiteData({
                              dev: true
                            });

                          case 3:
                            siteData = _context3.sent;
                            res.json(siteData);
                            _context3.next = 12;
                            break;

                          case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3["catch"](0);
                            res.status(500);
                            res.json(_context3.t0);
                            next(_context3.t0);

                          case 12:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this, [[0, 7]]);
                  }));

                  return function (_x6, _x7, _x8) {
                    return _ref6.apply(this, arguments);
                  };
                }()); // Since routes may change during dev, this function can rebuild all of the config
                // routes. It also references the original config when possible, to make sure it
                // uses any up to date getData callback generated from new or replacement routes.

                reloadWebpackRoutes = function reloadWebpackRoutes(config) {
                  // Serve each routes data
                  config.routes.forEach(function (_ref7) {
                    var routePath = _ref7.path;
                    app.get("/__react-static__/routeInfo/".concat(encodeURI(routePath === '/' ? '' : routePath)),
                    /*#__PURE__*/
                    function () {
                      var _ref8 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regenerator.default.mark(function _callee4(req, res, next) {
                        var route, allProps;
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                // Make sure we have the most up to date route from the config, not
                                // an out of dat object.
                                route = config.routes.find(function (d) {
                                  return d.path === routePath;
                                });
                                _context4.prev = 1;

                                if (route) {
                                  _context4.next = 4;
                                  break;
                                }

                                throw new Error('Route could not be found!');

                              case 4:
                                if (!route.getData) {
                                  _context4.next = 10;
                                  break;
                                }

                                _context4.next = 7;
                                return route.getData({
                                  dev: true
                                });

                              case 7:
                                _context4.t0 = _context4.sent;
                                _context4.next = 11;
                                break;

                              case 10:
                                _context4.t0 = {};

                              case 11:
                                allProps = _context4.t0;
                                res.json(_objectSpread({}, route, {
                                  allProps: allProps
                                }));
                                _context4.next = 19;
                                break;

                              case 15:
                                _context4.prev = 15;
                                _context4.t1 = _context4["catch"](1);
                                res.status(500);
                                next(_context4.t1);

                              case 19:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this, [[1, 15]]);
                      }));

                      return function (_x9, _x10, _x11) {
                        return _ref8.apply(this, arguments);
                      };
                    }());
                  });
                };

                reloadWebpackRoutes(config);

                if (config.devServer && config.devServer.before) {
                  config.devServer.before(app);
                }
              },
              port: port,
              host: host
            });
            first = true;
            console.log('=> Building App Bundle...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Build Complete"));
            devCompiler.hooks.invalid.tap({
              name: 'React-Static'
            }, function (file) {
              console.log('=> File changed:', file.replace(config.paths.ROOT, ''));
              console.log('=> Updating build...');
              (0, _utils.time)(_chalk.default.green("=> [\u2713] Build Updated"));
            });
            devCompiler.hooks.done.tap({
              name: 'React-Static'
            }, function (stats) {
              var messages = (0, _formatWebpackMessages.default)(stats.toJson({}, true));
              var isSuccessful = !messages.errors.length && !messages.warnings.length;

              if (isSuccessful) {
                if (first) {
                  (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Build Complete"));
                  console.log(_chalk.default.green("=> [\u2713] App serving at"), "".concat(host, ":").concat(port));
                } else {
                  (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Build Updated"));
                }

                if (first && config.onStart) {
                  config.onStart({
                    devServerConfig: devServerConfig
                  });
                }
              }

              first = false;

              if (messages.errors.length) {
                console.log(_chalk.default.red('Failed to build! Fix any errors and try again!'));
                messages.errors.forEach(function (message) {
                  console.log(message);
                  console.log();
                });
              }

              if (messages.warnings.length) {
                console.log(_chalk.default.yellow('Build complete with warnings.'));
                console.log();
                messages.warnings.forEach(function (message) {
                  console.log(message);
                  console.log();
                });
              }
            }); // Start the webpack dev server

            devServer = new _webpackDevServer.default(devCompiler, devServerConfig); // Start the messages socket

            socket = (0, _socket.default)();
            socket.listen(messagePort);

            resolvedReloadRoutes =
            /*#__PURE__*/
            function () {
              var _ref9 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee6(paths) {
                return _regenerator.default.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return (0, _.prepareRoutes)({
                          config: config,
                          opts: {
                            dev: true
                          },
                          silent: true
                        },
                        /*#__PURE__*/
                        function () {
                          var _ref10 = _asyncToGenerator(
                          /*#__PURE__*/
                          _regenerator.default.mark(function _callee5(config) {
                            return _regenerator.default.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    if (!paths) {
                                      paths = config.routes.map(function (route) {
                                        return route.path;
                                      });
                                    }

                                    paths = paths.map(_shared.cleanPath);
                                    reloadWebpackRoutes(config);
                                    socket.emit('message', {
                                      type: 'reloadRoutes',
                                      paths: paths
                                    });

                                  case 4:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));

                          return function (_x13) {
                            return _ref10.apply(this, arguments);
                          };
                        }());

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              return function resolvedReloadRoutes(_x12) {
                return _ref9.apply(this, arguments);
              };
            }();

            _context7.next = 27;
            return new Promise(function (resolve, reject) {
              devServer.listen(port, null, function (err) {
                if (err) {
                  return reject(err);
                }

                resolve();
              });
            });

          case 27:
            return _context7.abrupt("return", devServer);

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _startDevServer.apply(this, arguments);
}

function buildProductionBundles(_x3) {
  return _buildProductionBundles.apply(this, arguments);
}

function _buildProductionBundles() {
  _buildProductionBundles = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(_ref4) {
    var config;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            config = _ref4.config;
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              (0, _webpack.default)([webpackConfig({
                config: config,
                stage: 'prod'
              }), webpackConfig({
                config: config,
                stage: 'node'
              })]).run(function (err, stats) {
                if (err) {
                  console.log(_chalk.default.red(err.stack || err));

                  if (err.details) {
                    console.log(_chalk.default.red(err.details));
                  }

                  return reject(err);
                }

                stats.toJson('verbose');

                var _stats$stats = _slicedToArray(stats.stats, 2),
                    prodStats = _stats$stats[0],
                    nodeStats = _stats$stats[1];

                checkBuildStats('prod', prodStats);
                checkBuildStats('node', nodeStats);

                function checkBuildStats(stage, stageStats) {
                  var buildErrors = stageStats.hasErrors();
                  var buildWarnings = stageStats.hasWarnings();

                  if (buildErrors || buildWarnings) {
                    console.log(stageStats.toString({
                      context: config.context,
                      performance: false,
                      hash: false,
                      timings: true,
                      entrypoints: false,
                      chunkOrigins: false,
                      chunkModules: false,
                      colors: true
                    }));

                    if (buildErrors) {
                      console.log(_chalk.default.red.bold("\n                => There were ERRORS during the ".concat(stage, " build stage! :(\n                => Fix them and try again!\n              ")));
                    } else if (buildWarnings) {
                      console.log(_chalk.default.yellow("\n=> There were WARNINGS during the ".concat(stage, " build stage. Your site will still function, but you may achieve better performance by addressing the warnings above.\n")));
                    }
                  }
                }

                var prodStatsJson = prodStats.toJson();

                _fsExtra.default.outputFileSync(_path.default.join(config.paths.TEMP, 'client-stats.json'), JSON.stringify(prodStatsJson, null, 2));

                _fsExtra.default.outputFileSync(_path.default.join(config.paths.TEMP, 'bundle-environment.json'), JSON.stringify(process.env, null, 2));

                resolve(prodStatsJson);
              });
            }));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _buildProductionBundles.apply(this, arguments);
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(resolvedReloadRoutes, "resolvedReloadRoutes", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(reloadWebpackRoutes, "reloadWebpackRoutes", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(devServer, "devServer", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(reloadRoutes, "reloadRoutes", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(webpackConfig, "webpackConfig", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(buildCompiler, "buildCompiler", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(startDevServer, "startDevServer", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  reactHotLoader.register(buildProductionBundles, "buildProductionBundles", "/home/daniel/flattenedmonad/react-static/src/static/webpack/index.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlZFJlbG9hZFJvdXRlcyIsInJlbG9hZFdlYnBhY2tSb3V0ZXMiLCJkZXZTZXJ2ZXIiLCJyZWxvYWRSb3V0ZXMiLCJ3ZWJwYWNrQ29uZmlnIiwiY29uZmlnIiwic3RhZ2UiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImlzTm9kZSIsIkVycm9yIiwiZGVmYXVsdExvYWRlcnMiLCJ0cmFuc2Zvcm1lcnMiLCJyZWR1Y2UiLCJhbGwiLCJjdXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZGlmaWVkQ29uZmlnIiwidHJhbnNmb3JtZXIiLCJidWlsZENvbXBpbGVyIiwic3RhcnREZXZTZXJ2ZXIiLCJkZXZDb21waWxlciIsImludGVuZGVkUG9ydCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsIk51bWJlciIsIm1lc3NhZ2VQb3J0IiwiY2hhbGsiLCJyZWQiLCJncmVlbiIsImhvc3QiLCJIT1NUIiwiZGV2U2VydmVyQ29uZmlnIiwiaG90IiwiZGlzYWJsZUhvc3RDaGVjayIsImNvbnRlbnRCYXNlIiwicGF0aHMiLCJQVUJMSUMiLCJESVNUIiwicHVibGljUGF0aCIsImhpc3RvcnlBcGlGYWxsYmFjayIsImNvbXByZXNzIiwicXVpZXQiLCJ3YXRjaE9wdGlvbnMiLCJpZ25vcmVkIiwiYmVmb3JlIiwiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIm5leHQiLCJnZXRTaXRlRGF0YSIsImRldiIsInNpdGVEYXRhIiwic3RhdHVzIiwicm91dGVzIiwicm91dGVQYXRoIiwicGF0aCIsImVuY29kZVVSSSIsInJvdXRlIiwiZmluZCIsImQiLCJnZXREYXRhIiwiYWxsUHJvcHMiLCJmaXJzdCIsImNvbnNvbGUiLCJsb2ciLCJob29rcyIsImludmFsaWQiLCJ0YXAiLCJuYW1lIiwiZmlsZSIsInJlcGxhY2UiLCJST09UIiwiZG9uZSIsIm1lc3NhZ2VzIiwic3RhdHMiLCJ0b0pzb24iLCJpc1N1Y2Nlc3NmdWwiLCJlcnJvcnMiLCJsZW5ndGgiLCJ3YXJuaW5ncyIsIm9uU3RhcnQiLCJtZXNzYWdlIiwieWVsbG93IiwiV2VicGFja0RldlNlcnZlciIsInNvY2tldCIsImxpc3RlbiIsIm9wdHMiLCJzaWxlbnQiLCJtYXAiLCJjbGVhblBhdGgiLCJlbWl0IiwidHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiYnVpbGRQcm9kdWN0aW9uQnVuZGxlcyIsInJ1biIsInN0YWNrIiwiZGV0YWlscyIsInByb2RTdGF0cyIsIm5vZGVTdGF0cyIsImNoZWNrQnVpbGRTdGF0cyIsInN0YWdlU3RhdHMiLCJidWlsZEVycm9ycyIsImhhc0Vycm9ycyIsImJ1aWxkV2FybmluZ3MiLCJoYXNXYXJuaW5ncyIsInRvU3RyaW5nIiwiY29udGV4dCIsInBlcmZvcm1hbmNlIiwiaGFzaCIsInRpbWluZ3MiLCJlbnRyeXBvaW50cyIsImNodW5rT3JpZ2lucyIsImNodW5rTW9kdWxlcyIsImNvbG9ycyIsImJvbGQiLCJwcm9kU3RhdHNKc29uIiwiZnMiLCJvdXRwdXRGaWxlU3luYyIsImpvaW4iLCJURU1QIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQU1BOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsb0JBQUo7QUFDQSxJQUFJQyxtQkFBSjtBQUVBLElBQUlDLFNBQUo7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLEdBQWE7QUFDaEMsTUFBSSxDQUFDSCxvQkFBTCxFQUEyQjtBQUN6QjtBQUNBO0FBQ0Q7O0FBQ0RBO0FBQ0QsQ0FORDs7OztBQVVBO0FBQ0E7QUFDTyxTQUFTSSxhQUFULE9BQTBDO0FBQUEsTUFBakJDLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLE1BQVRD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STtBQU9sQkMsb0NBQWMsS0FQSTtBQVFsQkMsOEJBQVE7QUFSVSxxQkFBcEIsQ0FERjs7QUFZQSx3QkFBSVosV0FBSixFQUFpQjtBQUNmekMsOEJBQVFDLEdBQVIsQ0FDRXhDLGVBQU1DLEdBQU4sQ0FBVTRGLElBQVYsNkRBQ29DdEgsS0FEcEMsa0ZBREY7QUFNRCxxQkFQRCxNQU9PLElBQUkyRyxhQUFKLEVBQW1CO0FBQ3hCM0MsOEJBQVFDLEdBQVIsQ0FDRXhDLGVBQU0wRCxNQUFOLCtDQUNzQm5GLEtBRHRCLDZIQURGO0FBS0Q7QUFDRjtBQUNGOztBQUVELG9CQUFNdUgsZ0JBQWdCbEIsVUFBVXpCLE1BQVYsRUFBdEI7O0FBRUE0QyxpQ0FBR0MsY0FBSCxDQUNFakUsY0FBS2tFLElBQUwsQ0FBVTNILE9BQU9tQyxLQUFQLENBQWF5RixJQUF2QixFQUE2QixtQkFBN0IsQ0FERixFQUVFQyxLQUFLQyxTQUFMLENBQWVOLGFBQWYsRUFBOEIsSUFBOUIsRUFBb0MsQ0FBcEMsQ0FGRjs7QUFLQUMsaUNBQUdDLGNBQUgsQ0FDRWpFLGNBQUtrRSxJQUFMLENBQVUzSCxPQUFPbUMsS0FBUCxDQUFheUYsSUFBdkIsRUFBNkIseUJBQTdCLENBREYsRUFFRUMsS0FBS0MsU0FBTCxDQUFlekcsUUFBUUMsR0FBdkIsRUFBNEIsSUFBNUIsRUFBa0MsQ0FBbEMsQ0FGRjs7QUFLQXlFLHdCQUFReUIsYUFBUjtBQUNELGVBbEVEO0FBbUVELGFBcEVNLENBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7OzBCQXBRSDdILG9COzBCQUNBQyxtQjswQkFFQUMsUzswQkFFRUMsWTswQkFZVUMsYTswQkF5Q01pQixhOzBCQUtBQyxjOzBCQXFNQWlGLHNCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR5bmFtaWMtcmVxdWlyZSwgcmVhY3Qvbm8tZGFuZ2VyLCBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmb3JtYXRXZWJwYWNrTWVzc2FnZXMgZnJvbSAncmVhY3QtZGV2LXV0aWxzL2Zvcm1hdFdlYnBhY2tNZXNzYWdlcydcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBXZWJwYWNrRGV2U2VydmVyIGZyb20gJ3dlYnBhY2stZGV2LXNlcnZlcidcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8nXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG4vLyBpbXBvcnQgZXJyb3JPdmVybGF5TWlkZGxld2FyZSBmcm9tICdyZWFjdC1kZXYtdXRpbHMvZXJyb3JPdmVybGF5TWlkZGxld2FyZSdcbi8vXG5pbXBvcnQgeyBnZXRTdGFnZWRSdWxlcyB9IGZyb20gJy4vcnVsZXMnXG5pbXBvcnQge1xuICBmaW5kQXZhaWxhYmxlUG9ydCxcbiAgdGltZSxcbiAgdGltZUVuZCxcbiAgZ2V0Q29uZmlnUGx1Z2luSG9va3MsXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IHsgcHJlcGFyZVJvdXRlcyB9IGZyb20gXCIuLlwiXG5cbmxldCByZXNvbHZlZFJlbG9hZFJvdXRlc1xubGV0IHJlbG9hZFdlYnBhY2tSb3V0ZXNcblxubGV0IGRldlNlcnZlclxuXG5jb25zdCByZWxvYWRSb3V0ZXMgPSAoLi4uYXJncykgPT4ge1xuICBpZiAoIXJlc29sdmVkUmVsb2FkUm91dGVzKSB7XG4gICAgLy8gTm90IHJlYWR5IHlldCwgc28ganVzdCB3YWl0XG4gICAgcmV0dXJuXG4gIH1cbiAgcmVzb2x2ZWRSZWxvYWRSb3V0ZXMoLi4uYXJncylcbn1cblxuZXhwb3J0IHsgcmVsb2FkUm91dGVzIH1cblxuLy8gQnVpbGRzIGEgY29tcGlsZXIgdXNpbmcgYSBzdGFnZSBwcmVzZXQsIHRoZW4gYWxsb3dzIGV4dGVuc2lvbiB2aWFcbi8vIHdlYnBhY2tDb25maWd1cmF0b3JcbmV4cG9ydCBmdW5jdGlvbiB3ZWJwYWNrQ29uZmlnKHsgY29uZmlnLCBzdGFnZSB9KSB7XG4gIGxldCB3ZWJwYWNrQ29uZmlnXG4gIGlmIChzdGFnZSA9PT0gJ2RldicpIHtcbiAgICB3ZWJwYWNrQ29uZmlnID0gcmVxdWlyZSgnLi93ZWJwYWNrLmNvbmZpZy5kZXYnKS5kZWZhdWx0KHsgY29uZmlnIH0pXG4gIH0gZWxzZSBpZiAoc3RhZ2UgPT09ICdwcm9kJykge1xuICAgIHdlYnBhY2tDb25maWcgPSByZXF1aXJlKCcuL3dlYnBhY2suY29uZmlnLnByb2QnKS5kZWZhdWx0KHtcbiAgICAgIGNvbmZpZyxcbiAgICB9KVxuICB9IGVsc2UgaWYgKHN0YWdlID09PSAnbm9kZScpIHtcbiAgICB3ZWJwYWNrQ29uZmlnID0gcmVxdWlyZSgnLi93ZWJwYWNrLmNvbmZpZy5wcm9kJykuZGVmYXVsdCh7XG4gICAgICBjb25maWcsXG4gICAgICBpc05vZGU6IHRydWUsXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc3RhZ2UgaXMgcmVxdWlyZWQgd2hlbiBidWlsZGluZyBhIGNvbXBpbGVyLicpXG4gIH1cblxuICBjb25zdCBkZWZhdWx0TG9hZGVycyA9IGdldFN0YWdlZFJ1bGVzKHsgY29uZmlnLCBzdGFnZSB9KVxuXG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IGdldENvbmZpZ1BsdWdpbkhvb2tzKGNvbmZpZywgJ3dlYnBhY2snKS5yZWR1Y2UoXG4gICAgKGFsbCwgY3VycikgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycikpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hbGwsIC4uLmN1cnJdXG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLmFsbCwgY3Vycl1cbiAgICB9LFxuICAgIFtdXG4gIClcblxuICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgY29uc3QgbW9kaWZpZWRDb25maWcgPSB0cmFuc2Zvcm1lcih3ZWJwYWNrQ29uZmlnLCB7XG4gICAgICBzdGFnZSxcbiAgICAgIGRlZmF1bHRMb2FkZXJzLFxuICAgIH0pXG4gICAgaWYgKG1vZGlmaWVkQ29uZmlnKSB7XG4gICAgICB3ZWJwYWNrQ29uZmlnID0gbW9kaWZpZWRDb25maWdcbiAgICB9XG4gIH0pXG4gIHJldHVybiB3ZWJwYWNrQ29uZmlnXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZENvbXBpbGVyKHsgY29uZmlnLCBzdGFnZSB9KSB7XG4gIHJldHVybiB3ZWJwYWNrKHdlYnBhY2tDb25maWcoeyBjb25maWcsIHN0YWdlIH0pKVxufVxuXG4vLyBTdGFydHMgdGhlIGRldmVsb3BtZW50IHNlcnZlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0RGV2U2VydmVyKHsgY29uZmlnIH0pIHtcbiAgaWYgKGRldlNlcnZlcikge1xuICAgIHJldHVybiBkZXZTZXJ2ZXJcbiAgfVxuXG4gIGNvbnN0IGRldkNvbXBpbGVyID0gYXdhaXQgYnVpbGRDb21waWxlcih7IGNvbmZpZywgc3RhZ2U6ICdkZXYnIH0pXG5cbiAgLy8gRGVmYXVsdCB0byBsb2NhbGhvc3Q6MzAwMCwgb3IgdXNlIGEgY3VzdG9tIGNvbWJvIGlmIGRlZmluZWQgaW4gc3RhdGljLmNvbmZpZy5qc1xuICAvLyBvciBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgY29uc3QgaW50ZW5kZWRQb3J0ID1cbiAgICAoY29uZmlnLmRldlNlcnZlciAmJiBjb25maWcuZGV2U2VydmVyLnBvcnQpIHx8IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxuICBjb25zdCBwb3J0ID0gYXdhaXQgZmluZEF2YWlsYWJsZVBvcnQoTnVtYmVyKGludGVuZGVkUG9ydCkpXG4gIC8vIEZpbmQgYW4gYXZhaWxhYmxlIHBvcnQgZm9yIG1lc3NhZ2VzLCBhcyBsb25nIGFzIGl0J3Mgbm90IHRoZSBkZXZTZXJ2ZXIgcG9ydFxuICBjb25zdCBtZXNzYWdlUG9ydCA9IGF3YWl0IGZpbmRBdmFpbGFibGVQb3J0KDQwMDAsIFtwb3J0XSlcbiAgaWYgKGludGVuZGVkUG9ydCAhPT0gcG9ydCkge1xuICAgIHRpbWUoXG4gICAgICBjaGFsay5yZWQoXG4gICAgICAgIGA9PiBXYXJuaW5nISBQb3J0ICR7aW50ZW5kZWRQb3J0fSBpcyBub3QgYXZhaWxhYmxlLiBVc2luZyBwb3J0ICR7Y2hhbGsuZ3JlZW4oXG4gICAgICAgICAgaW50ZW5kZWRQb3J0XG4gICAgICAgICl9IGluc3RlYWQhYFxuICAgICAgKVxuICAgIClcbiAgfVxuICBjb25zdCBob3N0ID1cbiAgICAoY29uZmlnLmRldlNlcnZlciAmJiBjb25maWcuZGV2U2VydmVyLmhvc3QpIHx8XG4gICAgcHJvY2Vzcy5lbnYuSE9TVCB8fFxuICAgICdodHRwOi8vbG9jYWxob3N0J1xuXG4gIGNvbnN0IGRldlNlcnZlckNvbmZpZyA9IHtcbiAgICBob3Q6IHRydWUsXG4gICAgZGlzYWJsZUhvc3RDaGVjazogdHJ1ZSxcbiAgICBjb250ZW50QmFzZTogW2NvbmZpZy5wYXRocy5QVUJMSUMsIGNvbmZpZy5wYXRocy5ESVNUXSxcbiAgICBwdWJsaWNQYXRoOiAnLycsXG4gICAgaGlzdG9yeUFwaUZhbGxiYWNrOiB0cnVlLFxuICAgIGNvbXByZXNzOiBmYWxzZSxcbiAgICBxdWlldDogdHJ1ZSxcbiAgICAuLi5jb25maWcuZGV2U2VydmVyLFxuICAgIHdhdGNoT3B0aW9uczoge1xuICAgICAgaWdub3JlZDogJ25vZGVfbW9kdWxlcycsXG4gICAgICAvLyBpZ25vcmVkOiBuZXcgUmVnRXhwKGAobm9kZV9tb2R1bGVzfCR7Y29uZmlnLnBhdGhzLlBBR0VTfSlgKSxcbiAgICAgIC4uLihjb25maWcuZGV2U2VydmVyID8gY29uZmlnLmRldlNlcnZlci53YXRjaE9wdGlvbnMgfHwge30gOiB7fSksXG4gICAgfSxcbiAgICBiZWZvcmU6IGFwcCA9PiB7XG4gICAgICAvLyBTZXJ2ZSB0aGUgc2l0ZSBkYXRhXG4gICAgICBhcHAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9nZXRNZXNzYWdlUG9ydCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgcG9ydDogbWVzc2FnZVBvcnQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBhcHAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9zaXRlRGF0YScsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNpdGVEYXRhID0gYXdhaXQgY29uZmlnLmdldFNpdGVEYXRhKHsgZGV2OiB0cnVlIH0pXG4gICAgICAgICAgcmVzLmpzb24oc2l0ZURhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICAgIHJlcy5qc29uKGVycilcbiAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gU2luY2Ugcm91dGVzIG1heSBjaGFuZ2UgZHVyaW5nIGRldiwgdGhpcyBmdW5jdGlvbiBjYW4gcmVidWlsZCBhbGwgb2YgdGhlIGNvbmZpZ1xuICAgICAgLy8gcm91dGVzLiBJdCBhbHNvIHJlZmVyZW5jZXMgdGhlIG9yaWdpbmFsIGNvbmZpZyB3aGVuIHBvc3NpYmxlLCB0byBtYWtlIHN1cmUgaXRcbiAgICAgIC8vIHVzZXMgYW55IHVwIHRvIGRhdGUgZ2V0RGF0YSBjYWxsYmFjayBnZW5lcmF0ZWQgZnJvbSBuZXcgb3IgcmVwbGFjZW1lbnQgcm91dGVzLlxuICAgICAgcmVsb2FkV2VicGFja1JvdXRlcyA9IGNvbmZpZyA9PiB7XG4gICAgICAgIC8vIFNlcnZlIGVhY2ggcm91dGVzIGRhdGFcbiAgICAgICAgY29uZmlnLnJvdXRlcy5mb3JFYWNoKCh7IHBhdGg6IHJvdXRlUGF0aCB9KSA9PiB7XG4gICAgICAgICAgYXBwLmdldChcbiAgICAgICAgICAgIGAvX19yZWFjdC1zdGF0aWNfXy9yb3V0ZUluZm8vJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIHJvdXRlUGF0aCA9PT0gJy8nID8gJycgOiByb3V0ZVBhdGhcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSB0aGUgbW9zdCB1cCB0byBkYXRlIHJvdXRlIGZyb20gdGhlIGNvbmZpZywgbm90XG4gICAgICAgICAgICAgIC8vIGFuIG91dCBvZiBkYXQgb2JqZWN0LlxuICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZXMuZmluZChkID0+IGQucGF0aCA9PT0gcm91dGVQYXRoKVxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGUgY291bGQgbm90IGJlIGZvdW5kIScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFByb3BzID0gcm91dGUuZ2V0RGF0YVxuICAgICAgICAgICAgICAgICAgPyBhd2FpdCByb3V0ZS5nZXREYXRhKHsgZGV2OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgICAgICAgICBhbGxQcm9wcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVsb2FkV2VicGFja1JvdXRlcyhjb25maWcpXG5cbiAgICAgIGlmIChjb25maWcuZGV2U2VydmVyICYmIGNvbmZpZy5kZXZTZXJ2ZXIuYmVmb3JlKSB7XG4gICAgICAgIGNvbmZpZy5kZXZTZXJ2ZXIuYmVmb3JlKGFwcClcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvcnQsXG4gICAgaG9zdCxcbiAgfVxuXG4gIGxldCBmaXJzdCA9IHRydWVcbiAgY29uc29sZS5sb2coJz0+IEJ1aWxkaW5nIEFwcCBCdW5kbGUuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQnVpbGQgQ29tcGxldGUnKSlcblxuICBkZXZDb21waWxlci5ob29rcy5pbnZhbGlkLnRhcChcbiAgICB7XG4gICAgICBuYW1lOiAnUmVhY3QtU3RhdGljJyxcbiAgICB9LFxuICAgIGZpbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJz0+IEZpbGUgY2hhbmdlZDonLCBmaWxlLnJlcGxhY2UoY29uZmlnLnBhdGhzLlJPT1QsICcnKSlcbiAgICAgIGNvbnNvbGUubG9nKCc9PiBVcGRhdGluZyBidWlsZC4uLicpXG4gICAgICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQnVpbGQgVXBkYXRlZCcpKVxuICAgIH1cbiAgKVxuXG4gIGRldkNvbXBpbGVyLmhvb2tzLmRvbmUudGFwKFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWFjdC1TdGF0aWMnLFxuICAgIH0sXG4gICAgc3RhdHMgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBmb3JtYXRXZWJwYWNrTWVzc2FnZXMoc3RhdHMudG9Kc29uKHt9LCB0cnVlKSlcbiAgICAgIGNvbnN0IGlzU3VjY2Vzc2Z1bCA9ICFtZXNzYWdlcy5lcnJvcnMubGVuZ3RoICYmICFtZXNzYWdlcy53YXJuaW5ncy5sZW5ndGhcblxuICAgICAgaWYgKGlzU3VjY2Vzc2Z1bCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQnVpbGQgQ29tcGxldGUnKSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQXBwIHNlcnZpbmcgYXQnKSxcbiAgICAgICAgICAgIGAke2hvc3R9OiR7cG9ydH1gXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBCdWlsZCBVcGRhdGVkJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0ICYmIGNvbmZpZy5vblN0YXJ0KSB7XG4gICAgICAgICAgY29uZmlnLm9uU3RhcnQoeyBkZXZTZXJ2ZXJDb25maWcgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaXJzdCA9IGZhbHNlXG5cbiAgICAgIGlmIChtZXNzYWdlcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnRmFpbGVkIHRvIGJ1aWxkISBGaXggYW55IGVycm9ycyBhbmQgdHJ5IGFnYWluIScpKVxuICAgICAgICBtZXNzYWdlcy5lcnJvcnMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2VzLndhcm5pbmdzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay55ZWxsb3coJ0J1aWxkIGNvbXBsZXRlIHdpdGggd2FybmluZ3MuJykpXG4gICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgbWVzc2FnZXMud2FybmluZ3MuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICAvLyBTdGFydCB0aGUgd2VicGFjayBkZXYgc2VydmVyXG4gIGRldlNlcnZlciA9IG5ldyBXZWJwYWNrRGV2U2VydmVyKGRldkNvbXBpbGVyLCBkZXZTZXJ2ZXJDb25maWcpXG5cbiAgLy8gU3RhcnQgdGhlIG1lc3NhZ2VzIHNvY2tldFxuICBjb25zdCBzb2NrZXQgPSBpbygpXG4gIHNvY2tldC5saXN0ZW4obWVzc2FnZVBvcnQpXG5cbiAgcmVzb2x2ZWRSZWxvYWRSb3V0ZXMgPSBhc3luYyBwYXRocyA9PiB7XG4gICAgYXdhaXQgcHJlcGFyZVJvdXRlcyhcbiAgICAgIHsgY29uZmlnLCBvcHRzOiB7IGRldjogdHJ1ZSB9LCBzaWxlbnQ6IHRydWUgfSxcbiAgICAgIGFzeW5jIGNvbmZpZyA9PiB7XG4gICAgICAgIGlmICghcGF0aHMpIHtcbiAgICAgICAgICBwYXRocyA9IGNvbmZpZy5yb3V0ZXMubWFwKHJvdXRlID0+IHJvdXRlLnBhdGgpXG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMgPSBwYXRocy5tYXAoY2xlYW5QYXRoKVxuICAgICAgICByZWxvYWRXZWJwYWNrUm91dGVzKGNvbmZpZylcbiAgICAgICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB7IHR5cGU6ICdyZWxvYWRSb3V0ZXMnLCBwYXRocyB9KVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkZXZTZXJ2ZXIubGlzdGVuKHBvcnQsIG51bGwsIGVyciA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgfVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gZGV2U2VydmVyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZFByb2R1Y3Rpb25CdW5kbGVzKHsgY29uZmlnIH0pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3ZWJwYWNrKFtcbiAgICAgIHdlYnBhY2tDb25maWcoeyBjb25maWcsIHN0YWdlOiAncHJvZCcgfSksXG4gICAgICB3ZWJwYWNrQ29uZmlnKHsgY29uZmlnLCBzdGFnZTogJ25vZGUnIH0pLFxuICAgIF0pLnJ1bigoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoZXJyLnN0YWNrIHx8IGVycikpXG4gICAgICAgIGlmIChlcnIuZGV0YWlscykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChlcnIuZGV0YWlscykpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICB9XG5cbiAgICAgIHN0YXRzLnRvSnNvbigndmVyYm9zZScpXG5cbiAgICAgIGNvbnN0IFtwcm9kU3RhdHMsIG5vZGVTdGF0c10gPSBzdGF0cy5zdGF0c1xuXG4gICAgICBjaGVja0J1aWxkU3RhdHMoJ3Byb2QnLCBwcm9kU3RhdHMpXG4gICAgICBjaGVja0J1aWxkU3RhdHMoJ25vZGUnLCBub2RlU3RhdHMpXG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrQnVpbGRTdGF0cyhzdGFnZSwgc3RhZ2VTdGF0cykge1xuICAgICAgICBjb25zdCBidWlsZEVycm9ycyA9IHN0YWdlU3RhdHMuaGFzRXJyb3JzKClcbiAgICAgICAgY29uc3QgYnVpbGRXYXJuaW5ncyA9IHN0YWdlU3RhdHMuaGFzV2FybmluZ3MoKVxuXG4gICAgICAgIGlmIChidWlsZEVycm9ycyB8fCBidWlsZFdhcm5pbmdzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBzdGFnZVN0YXRzLnRvU3RyaW5nKHtcbiAgICAgICAgICAgICAgY29udGV4dDogY29uZmlnLmNvbnRleHQsXG4gICAgICAgICAgICAgIHBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgaGFzaDogZmFsc2UsXG4gICAgICAgICAgICAgIHRpbWluZ3M6IHRydWUsXG4gICAgICAgICAgICAgIGVudHJ5cG9pbnRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2h1bmtPcmlnaW5zOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2h1bmtNb2R1bGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKGJ1aWxkRXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgY2hhbGsucmVkLmJvbGQoYFxuICAgICAgICAgICAgICAgID0+IFRoZXJlIHdlcmUgRVJST1JTIGR1cmluZyB0aGUgJHtzdGFnZX0gYnVpbGQgc3RhZ2UhIDooXG4gICAgICAgICAgICAgICAgPT4gRml4IHRoZW0gYW5kIHRyeSBhZ2FpbiFcbiAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKGJ1aWxkV2FybmluZ3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBjaGFsay55ZWxsb3coYFxuPT4gVGhlcmUgd2VyZSBXQVJOSU5HUyBkdXJpbmcgdGhlICR7c3RhZ2V9IGJ1aWxkIHN0YWdlLiBZb3VyIHNpdGUgd2lsbCBzdGlsbCBmdW5jdGlvbiwgYnV0IHlvdSBtYXkgYWNoaWV2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgYnkgYWRkcmVzc2luZyB0aGUgd2FybmluZ3MgYWJvdmUuXG5gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9kU3RhdHNKc29uID0gcHJvZFN0YXRzLnRvSnNvbigpXG5cbiAgICAgIGZzLm91dHB1dEZpbGVTeW5jKFxuICAgICAgICBwYXRoLmpvaW4oY29uZmlnLnBhdGhzLlRFTVAsICdjbGllbnQtc3RhdHMuanNvbicpLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShwcm9kU3RhdHNKc29uLCBudWxsLCAyKVxuICAgICAgKVxuXG4gICAgICBmcy5vdXRwdXRGaWxlU3luYyhcbiAgICAgICAgcGF0aC5qb2luKGNvbmZpZy5wYXRocy5URU1QLCAnYnVuZGxlLWVudmlyb25tZW50Lmpzb24nKSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYsIG51bGwsIDIpXG4gICAgICApXG5cbiAgICAgIHJlc29sdmUocHJvZFN0YXRzSnNvbilcbiAgICB9KVxuICB9KVxufVxuIl19