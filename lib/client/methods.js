"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.needsPrefetch = needsPrefetch;
exports.prefetch = prefetch;
exports.getComponentForPath = getComponentForPath;
exports.registerTemplateIDForPath = registerTemplateIDForPath;
exports.clearTemplateIDs = clearTemplateIDs;
exports.onLoading = exports.setLoading = exports.getRouteInfo = exports.reloadRouteData = exports.propsByHash = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _shared = require("../utils/shared");

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

var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var propsByHash = {};
exports.propsByHash = propsByHash;
var erroredPaths = {};
var inflightRouteInfo = {};
var inflightPropHashes = {};
var loading = 0;
var loadingSubscribers = [];
var disableRouteInfoWarning = process.env.REACT_STATIC_DISABLE_ROUTE_INFO_WARNING === 'true';
var requestPool = (0, _shared.createPool)({
  concurrency: Number(process.env.REACT_STATIC_PREFETCH_RATE) || 3
});

var reloadRouteData = function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, propsByHash, erroredPaths, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload
  // clearTemplateIDs()

  global.reloadAll();
};

exports.reloadRouteData = reloadRouteData;

if (process.env.REACT_STATIC_ENV === 'development') {
  var io = require('socket.io-client');

  var run =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, port, socket;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios.default.get('/__react-static__/getMessagePort');

            case 3:
              _ref2 = _context.sent;
              port = _ref2.data.port;
              socket = io("http://localhost:".concat(port));
              socket.on('connect', function () {
                console.log('React-Static data hot-loader websocket connected. Listening for data changes...');
              });
              socket.on('message', function (_ref3) {
                var type = _ref3.type;

                if (type === 'reloadRoutes') {
                  reloadRouteData();
                }
              });
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log('React-Static data hot-loader websocket encountered the following error:');
              console.error(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  run();
}

var getRouteInfo =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref5,
        priority,
        originalPath,
        routeInfo,
        _ref6,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref7,
        _data,
        _ref8,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref5 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref5.priority;

            if (!(typeof document === 'undefined')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            originalPath = path;
            path = (0, _shared.cleanPath)(path); // Check the cache first

            if (!routeInfoByPath[path]) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 7:
            if (!erroredPaths[path]) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return");

          case 9:
            _context2.prev = 9;

            if (!(process.env.REACT_STATIC_ENV === 'development')) {
              _context2.next = 19;
              break;
            }

            // In dev, request from the webpack dev server
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 14;
            return inflightRouteInfo[path];

          case 14:
            _ref6 = _context2.sent;
            data = _ref6.data;
            routeInfo = data;
            _context2.next = 36;
            break;

          case 19:
            routeInfoRoot = (process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING === 'true' ? process.env.REACT_STATIC_SITE_ROOT : process.env.REACT_STATIC_PUBLIC_PATH) || '/';
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _shared.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster);

            if (!priority) {
              _context2.next = 30;
              break;
            }

            _context2.next = 25;
            return _axios.default.get(getPath);

          case 25:
            _ref7 = _context2.sent;
            _data = _ref7.data;
            routeInfo = _data;
            _context2.next = 36;
            break;

          case 30:
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 33;
            return inflightRouteInfo[path];

          case 33:
            _ref8 = _context2.sent;
            _data2 = _ref8.data;
            routeInfo = _data2;

          case 36:
            _context2.next = 44;
            break;

          case 38:
            _context2.prev = 38;
            _context2.t0 = _context2["catch"](9);
            erroredPaths[path] = true;

            if (!(process.env.REACT_STATIC_ENV === 'production' || disableRouteInfoWarning)) {
              _context2.next = 43;
              break;
            }

            return _context2.abrupt("return");

          case 43:
            console.warn("Could not load routeInfo for path: ".concat(originalPath, ". If this is a static route, make sure any link to this page is valid! If this is not a static route, you can desregard this warning."));

          case 44:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            routeInfoByPath[path] = routeInfo;
            return _context2.abrupt("return", routeInfoByPath[path]);

          case 47:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[9, 38]]);
  }));

  return function getRouteInfo(_x) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRouteInfo = getRouteInfo;

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref9,
        priority,
        routeInfo,
        allProps,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref9 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref9.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.allProps) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", routeInfo.allProps);

          case 8:
            // Request and build the props one by one
            allProps = _objectSpread({}, routeInfo.localProps || {}); // Request the template and loop over the routeInfo.sharedPropsHashes, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedPropsHashes).map(
            /*#__PURE__*/
            function () {
              var _ref11 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref12, prop, _ref13, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedPropsHashes[key]; // Check the propsByHash first

                        if (propsByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref12 = _context3.sent;
                        prop = _ref12.data;
                        propsByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref13 = _context3.sent;
                        _prop = _ref13.data;
                        // Place it in the cache
                        propsByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        allProps[key] = propsByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x6) {
                return _ref11.apply(this, arguments);
              };
            }()));

          case 11:
            // Cache the entire props for the route
            routeInfo.allProps = allProps; // Return the props

            return _context4.abrupt("return", routeInfo.allProps);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref10,
        priority,
        routeInfo,
        pathTemplate,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref10 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref10.priority;
            // Clean the path
            path = (0, _shared.cleanPath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path);

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              registerTemplateIDForPath(path, routeInfo.templateID);
            } // Preload the template if available


            pathTemplate = getComponentForPath(path);

            if (!(pathTemplate && pathTemplate.preload)) {
              _context5.next = 17;
              break;
            }

            if (!priority) {
              _context5.next = 13;
              break;
            }

            _context5.next = 11;
            return pathTemplate.preload();

          case 11:
            _context5.next = 15;
            break;

          case 13:
            _context5.next = 15;
            return requestPool.add(function () {
              return pathTemplate.preload();
            });

          case 15:
            routeInfo.templateLoaded = true;
            return _context5.abrupt("return", pathTemplate);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function needsPrefetch(_x4) {
  return _needsPrefetch.apply(this, arguments);
}

function _needsPrefetch() {
  _needsPrefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        routeInfo,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
            // Clean the path
            path = (0, _shared.cleanPath)(path);

            if (path) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", false);

          case 4:
            _context6.next = 6;
            return getRouteInfo(path, options);

          case 6:
            routeInfo = _context6.sent;

            if (routeInfo) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", true);

          case 9:
            if (!(!routeInfo.allProps || !routeInfo.templateLoaded)) {
              _context6.next = 11;
              break;
            }

            return _context6.abrupt("return", true);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _needsPrefetch.apply(this, arguments);
}

function prefetch(_x5) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(path) {
    var options,
        type,
        data,
        _ref14,
        _ref15,
        _args7 = arguments;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
            // Clean the path
            path = (0, _shared.cleanPath)(path);
            type = options.type;

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context7.next = 10;
              break;
            }

            _context7.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context7.sent;
            _context7.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context7.next = 15;
              break;
            }

            _context7.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context7.next = 21;
            break;

          case 15:
            ;
            _context7.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref14 = _context7.sent;
            _ref15 = _slicedToArray(_ref14, 1);
            data = _ref15[0];

          case 21:
            if (options.priority) {
              requestPool.start();
            }

            return _context7.abrupt("return", data);

          case 23:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _prefetch.apply(this, arguments);
}

var setLoading = function setLoading(d) {
  if (loading !== d) {
    loading = d;
    loadingSubscribers.forEach(function (s) {
      return s();
    });
  }
};

exports.setLoading = setLoading;

var onLoading = function onLoading(cb) {
  var ccb = function ccb() {
    return cb(loading);
  };

  loadingSubscribers.push(ccb);
  return function () {
    loadingSubscribers = loadingSubscribers.filter(function (d) {
      return d !== ccb;
    });
  };
};

exports.onLoading = onLoading;

function getComponentForPath(path) {
  path = (0, _shared.cleanPath)(path);
  return global.reactStaticGetComponentForPath && global.reactStaticGetComponentForPath(path);
}

function registerTemplateIDForPath(path, templateID) {
  path = (0, _shared.cleanPath)(path);
  return global.reactStaticGetComponentForPath && global.reactStaticRegisterTemplateIDForPath(path, templateID);
}

function clearTemplateIDs() {
  return global.clearTemplateIDs && global.clearTemplateIDs();
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(propsByHash, "propsByHash", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(erroredPaths, "erroredPaths", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(loading, "loading", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(loadingSubscribers, "loadingSubscribers", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(disableRouteInfoWarning, "disableRouteInfoWarning", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(requestPool, "requestPool", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(needsPrefetch, "needsPrefetch", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(prefetch, "prefetch", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(setLoading, "setLoading", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(onLoading, "onLoading", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(getComponentForPath, "getComponentForPath", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(registerTemplateIDForPath, "registerTemplateIDForPath", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  reactHotLoader.register(clearTemplateIDs, "clearTemplateIDs", "/home/daniel/flattenedmonad/react-static/src/client/methods.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvbWV0aG9kcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZUluZm9CeVBhdGgiLCJwcm9wc0J5SGFzaCIsImVycm9yZWRQYXRocyIsImluZmxpZ2h0Um91dGVJbmZvIiwiaW5mbGlnaHRQcm9wSGFzaGVzIiwibG9hZGluZyIsImxvYWRpbmdTdWJzY3JpYmVycyIsImRpc2FibGVSb3V0ZUluZm9XYXJuaW5nIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX0lORk9fV0FSTklORyIsInJlcXVlc3RQb29sIiwiY29uY3VycmVuY3kiLCJOdW1iZXIiLCJSRUFDVF9TVEFUSUNfUFJFRkVUQ0hfUkFURSIsInJlbG9hZFJvdXRlRGF0YSIsImZvckVhY2giLCJPYmplY3QiLCJrZXlzIiwicGFydCIsImtleSIsImdsb2JhbCIsInJlbG9hZEFsbCIsIlJFQUNUX1NUQVRJQ19FTlYiLCJpbyIsInJlcXVpcmUiLCJydW4iLCJheGlvcyIsImdldCIsInBvcnQiLCJkYXRhIiwic29ja2V0Iiwib24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImVycm9yIiwiZ2V0Um91dGVJbmZvIiwicGF0aCIsInByaW9yaXR5IiwiZG9jdW1lbnQiLCJvcmlnaW5hbFBhdGgiLCJyb3V0ZUluZm8iLCJyb3V0ZUluZm9Sb290IiwiUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfUFJFRklYSU5HIiwiUkVBQ1RfU1RBVElDX1NJVEVfUk9PVCIsIlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSCIsImNhY2hlQnVzdGVyIiwiUkVBQ1RfU1RBVElDX0NBQ0hFX0JVU1QiLCJnZXRQYXRoIiwiYWRkIiwid2FybiIsInByZWZldGNoRGF0YSIsImFsbFByb3BzIiwibG9jYWxQcm9wcyIsIlByb21pc2UiLCJhbGwiLCJzaGFyZWRQcm9wc0hhc2hlcyIsIm1hcCIsImhhc2giLCJSRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgiLCJwcm9wIiwicHJlZmV0Y2hUZW1wbGF0ZSIsInJlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgiLCJ0ZW1wbGF0ZUlEIiwicGF0aFRlbXBsYXRlIiwiZ2V0Q29tcG9uZW50Rm9yUGF0aCIsInByZWxvYWQiLCJ0ZW1wbGF0ZUxvYWRlZCIsIm5lZWRzUHJlZmV0Y2giLCJvcHRpb25zIiwicHJlZmV0Y2giLCJzdG9wIiwic3RhcnQiLCJzZXRMb2FkaW5nIiwiZCIsInMiLCJvbkxvYWRpbmciLCJjY2IiLCJjYiIsInB1c2giLCJmaWx0ZXIiLCJyZWFjdFN0YXRpY0dldENvbXBvbmVudEZvclBhdGgiLCJyZWFjdFN0YXRpY1JlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgiLCJjbGVhclRlbXBsYXRlSURzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsa0JBQWtCLEVBQXhCOztBQUNBLElBQU1DLGNBQWMsRUFBcEI7O0FBQ1AsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLG9CQUFvQixFQUExQjtBQUNBLElBQU1DLHFCQUFxQixFQUEzQjtBQUNBLElBQUlDLFVBQVUsQ0FBZDtBQUNBLElBQUlDLHFCQUFxQixFQUF6QjtBQUNBLElBQU1DLDBCQUNKQyxRQUFRQyxHQUFSLENBQVlDLHVDQUFaLEtBQXdELE1BRDFEO0FBR0EsSUFBTUMsY0FBYyx3QkFBVztBQUM3QkMsZUFBYUMsT0FBT0wsUUFBUUMsR0FBUixDQUFZSywwQkFBbkIsS0FBa0Q7QUFEbEMsQ0FBWCxDQUFwQjs7QUFJTyxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDbkM7QUFDQTtBQUFDLEdBQ0NmLGVBREQsRUFFQ0MsV0FGRCxFQUdDQyxZQUhELEVBSUNDLGlCQUpELEVBS0NDLGtCQUxELEVBTUNZLE9BTkQsQ0FNUyxnQkFBUTtBQUNoQkMsV0FBT0MsSUFBUCxDQUFZQyxJQUFaLEVBQWtCSCxPQUFsQixDQUEwQixlQUFPO0FBQy9CLGFBQU9HLEtBQUtDLEdBQUwsQ0FBUDtBQUNE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dC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgY3JlYXRlUG9vbCwgY2xlYW5QYXRoLCBwYXRoSm9pbiB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZCdcblxuZXhwb3J0IGNvbnN0IHJvdXRlSW5mb0J5UGF0aCA9IHt9XG5leHBvcnQgY29uc3QgcHJvcHNCeUhhc2ggPSB7fVxuY29uc3QgZXJyb3JlZFBhdGhzID0ge31cbmNvbnN0IGluZmxpZ2h0Um91dGVJbmZvID0ge31cbmNvbnN0IGluZmxpZ2h0UHJvcEhhc2hlcyA9IHt9XG5sZXQgbG9hZGluZyA9IDBcbmxldCBsb2FkaW5nU3Vic2NyaWJlcnMgPSBbXVxuY29uc3QgZGlzYWJsZVJvdXRlSW5mb1dhcm5pbmcgPVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9JTkZPX1dBUk5JTkcgPT09ICd0cnVlJ1xuXG5jb25zdCByZXF1ZXN0UG9vbCA9IGNyZWF0ZVBvb2woe1xuICBjb25jdXJyZW5jeTogTnVtYmVyKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QUkVGRVRDSF9SQVRFKSB8fCAzLFxufSlcblxuZXhwb3J0IGNvbnN0IHJlbG9hZFJvdXRlRGF0YSA9ICgpID0+IHtcbiAgLy8gRGVsZXRlIGFsbCBjYWNoZWQgZGF0YVxuICA7W1xuICAgIHJvdXRlSW5mb0J5UGF0aCxcbiAgICBwcm9wc0J5SGFzaCxcbiAgICBlcnJvcmVkUGF0aHMsXG4gICAgaW5mbGlnaHRSb3V0ZUluZm8sXG4gICAgaW5mbGlnaHRQcm9wSGFzaGVzLFxuICBdLmZvckVhY2gocGFydCA9PiB7XG4gICAgT2JqZWN0LmtleXMocGFydCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZGVsZXRlIHBhcnRba2V5XVxuICAgIH0pXG4gIH0pXG4gIC8vIEZvcmNlIGVhY2ggUm91dGVEYXRhIGNvbXBvbmVudCB0byByZWxvYWRcbiAgLy8gY2xlYXJUZW1wbGF0ZUlEcygpXG4gIGdsb2JhbC5yZWxvYWRBbGwoKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKVxuICBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBwb3J0IH0sXG4gICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9nZXRNZXNzYWdlUG9ydCcpXG4gICAgICBjb25zdCBzb2NrZXQgPSBpbyhgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YClcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ1JlYWN0LVN0YXRpYyBkYXRhIGhvdC1sb2FkZXIgd2Vic29ja2V0IGNvbm5lY3RlZC4gTGlzdGVuaW5nIGZvciBkYXRhIGNoYW5nZXMuLi4nXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAoeyB0eXBlIH0pID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZWxvYWRSb3V0ZXMnKSB7XG4gICAgICAgICAgcmVsb2FkUm91dGVEYXRhKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnUmVhY3QtU3RhdGljIGRhdGEgaG90LWxvYWRlciB3ZWJzb2NrZXQgZW5jb3VudGVyZWQgdGhlIGZvbGxvd2luZyBlcnJvcjonXG4gICAgICApXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gIH1cbiAgcnVuKClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlSW5mbyA9IGFzeW5jIChwYXRoLCB7IHByaW9yaXR5IH0gPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9yaWdpbmFsUGF0aCA9IHBhdGhcbiAgcGF0aCA9IGNsZWFuUGF0aChwYXRoKVxuICAvLyBDaGVjayB0aGUgY2FjaGUgZmlyc3RcbiAgaWYgKHJvdXRlSW5mb0J5UGF0aFtwYXRoXSkge1xuICAgIHJldHVybiByb3V0ZUluZm9CeVBhdGhbcGF0aF1cbiAgfVxuICBpZiAoZXJyb3JlZFBhdGhzW3BhdGhdKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IHJvdXRlSW5mb1xuICB0cnkge1xuICAgIGlmIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAvLyBJbiBkZXYsIHJlcXVlc3QgZnJvbSB0aGUgd2VicGFjayBkZXYgc2VydmVyXG4gICAgICBpZiAoIWluZmxpZ2h0Um91dGVJbmZvW3BhdGhdKSB7XG4gICAgICAgIGluZmxpZ2h0Um91dGVJbmZvW3BhdGhdID0gYXhpb3MuZ2V0KFxuICAgICAgICAgIGAvX19yZWFjdC1zdGF0aWNfXy9yb3V0ZUluZm8vJHtwYXRoID09PSAnLycgPyAnJyA6IHBhdGh9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGluZmxpZ2h0Um91dGVJbmZvW3BhdGhdXG4gICAgICByb3V0ZUluZm8gPSBkYXRhXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mb1Jvb3QgPVxuICAgICAgICAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfUFJFRklYSU5HID09PSAndHJ1ZSdcbiAgICAgICAgICA/IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19TSVRFX1JPT1RcbiAgICAgICAgICA6IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSCkgfHwgJy8nXG4gICAgICBjb25zdCBjYWNoZUJ1c3RlciA9IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19DQUNIRV9CVVNUXG4gICAgICAgID8gYD8ke3Byb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19DQUNIRV9CVVNUfWBcbiAgICAgICAgOiAnJ1xuICAgICAgY29uc3QgZ2V0UGF0aCA9IGAke3JvdXRlSW5mb1Jvb3R9JHtwYXRoSm9pbihcbiAgICAgICAgcGF0aCxcbiAgICAgICAgJ3JvdXRlSW5mby5qc29uJ1xuICAgICAgKX0ke2NhY2hlQnVzdGVyfWBcblxuICAgICAgaWYgKHByaW9yaXR5KSB7XG4gICAgICAgIC8vIEluIHByb2R1Y3Rpb24sIHJlcXVlc3QgZnJvbSByb3V0ZSdzIHJvdXRlSW5mby5qc29uXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGdldFBhdGgpXG4gICAgICAgIHJvdXRlSW5mbyA9IGRhdGFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaW5mbGlnaHRSb3V0ZUluZm9bcGF0aF0pIHtcbiAgICAgICAgICBpbmZsaWdodFJvdXRlSW5mb1twYXRoXSA9IHJlcXVlc3RQb29sLmFkZCgoKSA9PiBheGlvcy5nZXQoZ2V0UGF0aCkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBpbmZsaWdodFJvdXRlSW5mb1twYXRoXVxuICAgICAgICByb3V0ZUluZm8gPSBkYXRhXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnJvcmVkUGF0aHNbcGF0aF0gPSB0cnVlXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8XG4gICAgICBkaXNhYmxlUm91dGVJbmZvV2FybmluZ1xuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBDb3VsZCBub3QgbG9hZCByb3V0ZUluZm8gZm9yIHBhdGg6ICR7b3JpZ2luYWxQYXRofS4gSWYgdGhpcyBpcyBhIHN0YXRpYyByb3V0ZSwgbWFrZSBzdXJlIGFueSBsaW5rIHRvIHRoaXMgcGFnZSBpcyB2YWxpZCEgSWYgdGhpcyBpcyBub3QgYSBzdGF0aWMgcm91dGUsIHlvdSBjYW4gZGVzcmVnYXJkIHRoaXMgd2FybmluZy5gXG4gICAgKVxuICB9XG4gIGlmICghcHJpb3JpdHkpIHtcbiAgICBkZWxldGUgaW5mbGlnaHRSb3V0ZUluZm9bcGF0aF1cbiAgfVxuICByb3V0ZUluZm9CeVBhdGhbcGF0aF0gPSByb3V0ZUluZm9cbiAgcmV0dXJuIHJvdXRlSW5mb0J5UGF0aFtwYXRoXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2hEYXRhKHBhdGgsIHsgcHJpb3JpdHkgfSA9IHt9KSB7XG4gIC8vIEdldCByb3V0ZSBpbmZvIHNvIHdlIGNhbiBjaGVjayBpZiBwYXRoIGhhcyBhbnkgZGF0YVxuICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCBnZXRSb3V0ZUluZm8ocGF0aCwgeyBwcmlvcml0eSB9KVxuXG4gIC8vIE5vdCBhIHN0YXRpYyByb3V0ZT8gQmFpbCBvdXQuXG4gIGlmICghcm91dGVJbmZvKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBEZWZlciB0byB0aGUgY2FjaGUgZmlyc3QuIEluIGRldiBtb2RlLCB0aGlzIHNob3VsZCBhbHJlYWR5IGJlIGF2YWlsYWJsZSBmcm9tXG4gIC8vIHRoZSBjYWxsIHRvIGdldFJvdXRlSW5mb1xuICBpZiAocm91dGVJbmZvLmFsbFByb3BzKSB7XG4gICAgcmV0dXJuIHJvdXRlSW5mby5hbGxQcm9wc1xuICB9XG5cbiAgLy8gUmVxdWVzdCBhbmQgYnVpbGQgdGhlIHByb3BzIG9uZSBieSBvbmVcbiAgY29uc3QgYWxsUHJvcHMgPSB7XG4gICAgLi4uKHJvdXRlSW5mby5sb2NhbFByb3BzIHx8IHt9KSxcbiAgfVxuXG4gIC8vIFJlcXVlc3QgdGhlIHRlbXBsYXRlIGFuZCBsb29wIG92ZXIgdGhlIHJvdXRlSW5mby5zaGFyZWRQcm9wc0hhc2hlcywgcmVxdWVzdGluZyBlYWNoIHByb3BcbiAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgT2JqZWN0LmtleXMocm91dGVJbmZvLnNoYXJlZFByb3BzSGFzaGVzKS5tYXAoYXN5bmMga2V5ID0+IHtcbiAgICAgIGNvbnN0IGhhc2ggPSByb3V0ZUluZm8uc2hhcmVkUHJvcHNIYXNoZXNba2V5XVxuXG4gICAgICAvLyBDaGVjayB0aGUgcHJvcHNCeUhhc2ggZmlyc3RcbiAgICAgIGlmICghcHJvcHNCeUhhc2hbaGFzaF0pIHtcbiAgICAgICAgLy8gUmV1c2UgcmVxdWVzdCBmb3IgZHVwbGljYXRlIGluZmxpZ2h0IHJlcXVlc3RzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gSWYgcHJpb3JpdHksIGdldCBpdCBpbW1lZGlhdGVseVxuICAgICAgICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9wIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICAgIHBhdGhKb2luKFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCxcbiAgICAgICAgICAgICAgICBgc3RhdGljRGF0YS8ke2hhc2h9Lmpzb25gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHByb3BzQnlIYXNoW2hhc2hdID0gcHJvcFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb24gcHJpb3JpdHksIHNoYXJlIGluZmxpZ2h0IHJlcXVlc3RzIGFuZCB1c2UgcG9vbFxuICAgICAgICAgICAgaWYgKCFpbmZsaWdodFByb3BIYXNoZXNbaGFzaF0pIHtcbiAgICAgICAgICAgICAgaW5mbGlnaHRQcm9wSGFzaGVzW2hhc2hdID0gcmVxdWVzdFBvb2wuYWRkKCgpID0+XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgcGF0aEpvaW4oXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCxcbiAgICAgICAgICAgICAgICAgICAgYHN0YXRpY0RhdGEvJHtoYXNofS5qc29uYFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9wIH0gPSBhd2FpdCBpbmZsaWdodFByb3BIYXNoZXNbaGFzaF1cbiAgICAgICAgICAgIC8vIFBsYWNlIGl0IGluIHRoZSBjYWNoZVxuICAgICAgICAgICAgcHJvcHNCeUhhc2hbaGFzaF0gPSBwcm9wXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdFcnJvcjogVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgYSBwcm9wIGZvciB0aGlzIHJvdXRlISBoYXNoSUQ6JyxcbiAgICAgICAgICAgIGhhc2hcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmlvcml0eSkge1xuICAgICAgICAgIGRlbGV0ZSBpbmZsaWdodFByb3BIYXNoZXNbaGFzaF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGp1c3Qgc2V0IGl0IGFzIHRoZSBrZXlcbiAgICAgIGFsbFByb3BzW2tleV0gPSBwcm9wc0J5SGFzaFtoYXNoXVxuICAgIH0pXG4gIClcblxuICAvLyBDYWNoZSB0aGUgZW50aXJlIHByb3BzIGZvciB0aGUgcm91dGVcbiAgcm91dGVJbmZvLmFsbFByb3BzID0gYWxsUHJvcHNcblxuICAvLyBSZXR1cm4gdGhlIHByb3BzXG4gIHJldHVybiByb3V0ZUluZm8uYWxsUHJvcHNcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWZldGNoVGVtcGxhdGUocGF0aCwgeyBwcmlvcml0eSB9ID0ge30pIHtcbiAgLy8gQ2xlYW4gdGhlIHBhdGhcbiAgcGF0aCA9IGNsZWFuUGF0aChwYXRoKVxuICAvLyBHZXQgcm91dGUgaW5mbyBzbyB3ZSBjYW4gY2hlY2sgaWYgcGF0aCBoYXMgYW55IGRhdGFcbiAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgZ2V0Um91dGVJbmZvKHBhdGgpXG5cbiAgaWYgKHJvdXRlSW5mbykge1xuICAgIHJlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgocGF0aCwgcm91dGVJbmZvLnRlbXBsYXRlSUQpXG4gIH1cblxuICAvLyBQcmVsb2FkIHRoZSB0ZW1wbGF0ZSBpZiBhdmFpbGFibGVcbiAgY29uc3QgcGF0aFRlbXBsYXRlID0gZ2V0Q29tcG9uZW50Rm9yUGF0aChwYXRoKVxuICBpZiAocGF0aFRlbXBsYXRlICYmIHBhdGhUZW1wbGF0ZS5wcmVsb2FkKSB7XG4gICAgaWYgKHByaW9yaXR5KSB7XG4gICAgICBhd2FpdCBwYXRoVGVtcGxhdGUucHJlbG9hZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJlcXVlc3RQb29sLmFkZCgoKSA9PiBwYXRoVGVtcGxhdGUucHJlbG9hZCgpKVxuICAgIH1cbiAgICByb3V0ZUluZm8udGVtcGxhdGVMb2FkZWQgPSB0cnVlXG4gICAgcmV0dXJuIHBhdGhUZW1wbGF0ZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuZWVkc1ByZWZldGNoKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBDbGVhbiB0aGUgcGF0aFxuICBwYXRoID0gY2xlYW5QYXRoKHBhdGgpXG5cbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBHZXQgcm91dGUgaW5mbyBzbyB3ZSBjYW4gY2hlY2sgaWYgcGF0aCBoYXMgYW55IGRhdGFcbiAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgZ2V0Um91dGVJbmZvKHBhdGgsIG9wdGlvbnMpXG5cbiAgLy8gTm90IGEgc3RhdGljIHJvdXRlPyBCYWlsIG91dC5cbiAgaWYgKCFyb3V0ZUluZm8pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gRGVmZXIgdG8gdGhlIGNhY2hlIGZpcnN0XG4gIGlmICghcm91dGVJbmZvLmFsbFByb3BzIHx8ICFyb3V0ZUluZm8udGVtcGxhdGVMb2FkZWQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVmZXRjaChwYXRoLCBvcHRpb25zID0ge30pIHtcbiAgLy8gQ2xlYW4gdGhlIHBhdGhcbiAgcGF0aCA9IGNsZWFuUGF0aChwYXRoKVxuXG4gIGNvbnN0IHsgdHlwZSB9ID0gb3B0aW9uc1xuXG4gIGlmIChvcHRpb25zLnByaW9yaXR5KSB7XG4gICAgcmVxdWVzdFBvb2wuc3RvcCgpXG4gIH1cblxuICBsZXQgZGF0YVxuICBpZiAodHlwZSA9PT0gJ2RhdGEnKSB7XG4gICAgZGF0YSA9IGF3YWl0IHByZWZldGNoRGF0YShwYXRoLCBvcHRpb25zKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICBhd2FpdCBwcmVmZXRjaFRlbXBsYXRlKHBhdGgsIG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgO1tkYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHByZWZldGNoRGF0YShwYXRoLCBvcHRpb25zKSxcbiAgICAgIHByZWZldGNoVGVtcGxhdGUocGF0aCwgb3B0aW9ucyksXG4gICAgXSlcbiAgfVxuXG4gIGlmIChvcHRpb25zLnByaW9yaXR5KSB7XG4gICAgcmVxdWVzdFBvb2wuc3RhcnQoKVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSBkID0+IHtcbiAgaWYgKGxvYWRpbmcgIT09IGQpIHtcbiAgICBsb2FkaW5nID0gZFxuICAgIGxvYWRpbmdTdWJzY3JpYmVycy5mb3JFYWNoKHMgPT4gcygpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvbkxvYWRpbmcgPSBjYiA9PiB7XG4gIGNvbnN0IGNjYiA9ICgpID0+IGNiKGxvYWRpbmcpXG4gIGxvYWRpbmdTdWJzY3JpYmVycy5wdXNoKGNjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsb2FkaW5nU3Vic2NyaWJlcnMgPSBsb2FkaW5nU3Vic2NyaWJlcnMuZmlsdGVyKGQgPT4gZCAhPT0gY2NiKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnRGb3JQYXRoKHBhdGgpIHtcbiAgcGF0aCA9IGNsZWFuUGF0aChwYXRoKVxuICByZXR1cm4gKFxuICAgIGdsb2JhbC5yZWFjdFN0YXRpY0dldENvbXBvbmVudEZvclBhdGggJiZcbiAgICBnbG9iYWwucmVhY3RTdGF0aWNHZXRDb21wb25lbnRGb3JQYXRoKHBhdGgpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgocGF0aCwgdGVtcGxhdGVJRCkge1xuICBwYXRoID0gY2xlYW5QYXRoKHBhdGgpXG4gIHJldHVybiAoXG4gICAgZ2xvYmFsLnJlYWN0U3RhdGljR2V0Q29tcG9uZW50Rm9yUGF0aCAmJlxuICAgIGdsb2JhbC5yZWFjdFN0YXRpY1JlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgocGF0aCwgdGVtcGxhdGVJRClcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUZW1wbGF0ZUlEcygpIHtcbiAgcmV0dXJuIGdsb2JhbC5jbGVhclRlbXBsYXRlSURzICYmIGdsb2JhbC5jbGVhclRlbXBsYXRlSURzKClcbn1cbiJdfQ==