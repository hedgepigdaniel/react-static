"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buildConfigation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _path = _interopRequireDefault(require("path"));

var _chokidar = _interopRequireDefault(require("chokidar"));

var _resolveFrom = _interopRequireDefault(require("resolve-from"));

var _getDirname = _interopRequireDefault(require("../utils/getDirname"));

var _shared = require("../utils/shared");

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_NAME_FOR_STATIC_CONFIG_FILE = 'static.config.js'; // the default static.config.js location

var DEFAULT_PATH_FOR_STATIC_CONFIG = _path.default.resolve(_path.default.join(process.cwd(), DEFAULT_NAME_FOR_STATIC_CONFIG_FILE));

var DEFAULT_ROUTES = [{
  path: '/'
}];
var DEFAULT_ENTRY = 'index.js';

var buildConfigation = function buildConfigation() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // path defaults
  config.paths = _objectSpread({
    root: _path.default.resolve(process.cwd()),
    src: 'src',
    dist: 'dist',
    temp: 'tmp',
    devDist: 'tmp/dev-server',
    public: 'public',
    plugins: 'plugins',
    // TODO: document
    pages: 'src/pages',
    // TODO: document
    nodeModules: 'node_modules',
    assets: ''
  }, config.paths || {}); // Use the root to resolve all other relative paths

  var resolvePath = function resolvePath(relativePath) {
    return _path.default.resolve(config.paths.root, relativePath);
  }; // Resolve all paths


  var DIST = process.env.REACT_STATIC_ENV === 'development' ? resolvePath(config.paths.devDist || config.paths.dist) : resolvePath(config.paths.dist);

  var ASSETS = _path.default.resolve(DIST, config.paths.assets);

  var paths = {
    ROOT: config.paths.root,
    LOCAL_NODE_MODULES: _path.default.resolve((0, _getDirname.default)(), '../../node_modules'),
    SRC: resolvePath(config.paths.src),
    PAGES: resolvePath(config.paths.pages),
    DIST: DIST,
    ASSETS: ASSETS,
    PLUGINS: resolvePath(config.paths.plugins),
    TEMP: resolvePath(config.paths.temp),
    PUBLIC: resolvePath(config.paths.public),
    NODE_MODULES: resolvePath(config.paths.nodeModules),
    EXCLUDE_MODULES: config.paths.excludeResolvedModules || resolvePath(config.paths.nodeModules),
    PACKAGE: resolvePath('package.json'),
    HTML_TEMPLATE: _path.default.join(DIST, 'index.html'),
    STATIC_DATA: _path.default.join(ASSETS, 'staticData')
  };
  var siteRoot = '';
  var basePath = '';

  if (process.env.REACT_STATIC_ENV === 'development') {
    basePath = (0, _shared.cleanSlashes)(config.devBasePath);
  } else if (process.env.REACT_STATIC_STAGING === 'true') {
    siteRoot = (0, _shared.cutPathToRoot)(config.stagingSiteRoot, '$1');
    basePath = (0, _shared.cleanSlashes)(config.stagingBasePath);
  } else {
    siteRoot = (0, _shared.cutPathToRoot)(config.siteRoot, '$1');
    basePath = (0, _shared.cleanSlashes)(config.basePath);
  }

  var publicPath = "".concat((0, _shared.cleanSlashes)("".concat(siteRoot, "/").concat(basePath)), "/");
  var assetsPath = (0, _shared.cleanSlashes)(config.assetsPath || config.paths.assets);

  if (assetsPath && !(0, _shared.isAbsoluteUrl)(assetsPath)) {
    assetsPath = "/".concat((0, _shared.cleanSlashes)("".concat(basePath, "/").concat(assetsPath)), "/");
  } // Defaults


  var finalConfig = _objectSpread({
    // Defaults
    entry: _path.default.join(paths.SRC, DEFAULT_ENTRY),
    getSiteData: function getSiteData() {
      return {};
    },
    renderToComponent: function renderToComponent(Comp) {
      return _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      });
    },
    renderToHtml: function renderToHtml(render, comp) {
      return render(comp);
    },
    prefetchRate: 3,
    maxThreads: Infinity,
    disableRouteInfoWarning: false,
    disableRoutePrefixing: false,
    outputFileRate: 100,
    extensions: ['.js', '.jsx'],
    // TODO: document
    getRoutes: function () {
      var _getRoutes = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", DEFAULT_ROUTES);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getRoutes() {
        return _getRoutes.apply(this, arguments);
      };
    }(),
    plugins: []
  }, config, {
    // Materialized Overrides
    paths: paths,
    siteRoot: siteRoot,
    basePath: basePath,
    publicPath: publicPath,
    assetsPath: assetsPath,
    extractCssChunks: config.extractCssChunks || false,
    inlineCss: config.inlineCss || false // Set env variables to be used client side

  });

  process.env.REACT_STATIC_PREFETCH_RATE = finalConfig.prefetchRate;
  process.env.REACT_STATIC_DISABLE_ROUTE_INFO_WARNING = finalConfig.disableRouteInfoWarning;
  process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING = finalConfig.disableRoutePrefixing; // Fetch plugins, if any

  finalConfig.plugins = finalConfig.plugins.map(function (plugin) {
    var resolver = plugin;
    var options = {};

    if (Array.isArray(plugin)) {
      resolver = plugin[0];
      options = plugin[1] || {};
    } // Attempt a direct require for absolute paths


    try {
      plugin = require(resolver).default;
    } catch (err) {
      try {
        // Attempt a /plugins directory require
        plugin = require(_path.default.resolve(paths.PLUGINS, resolver)).default;
      } catch (err) {
        // Attempt a root directory require (node_modules)
        plugin = require((0, _resolveFrom.default)(process.cwd(), resolver)).default;
      }
    }

    return _objectSpread({
      resolver: resolver,
      options: options
    }, plugin(options));
  });
  return finalConfig;
};

exports.buildConfigation = buildConfigation;

var buildConfigFromPath = function buildConfigFromPath(configPath) {
  var filename = _path.default.resolve(configPath);

  delete require.cache[filename];

  try {
    var config = require(filename).default;

    return buildConfigation(config);
  } catch (err) {
    console.error(err);
    return {};
  }
};

var fromFile =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var configPath,
        subscribe,
        config,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            configPath = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : DEFAULT_PATH_FOR_STATIC_CONFIG;
            subscribe = _args2.length > 1 ? _args2[1] : undefined;
            config = buildConfigFromPath(configPath);

            if (subscribe) {
              _chokidar.default.watch(configPath).on('all', function () {
                subscribe(buildConfigFromPath(configPath));
              });
            }

            return _context2.abrupt("return", config);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fromFile() {
    return _ref.apply(this, arguments);
  };
}(); // Retrieves the static.config.js from the current project directory


var _default =
/*#__PURE__*/
function () {
  var _getConfig = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(customConfig, cb) {
    var builtConfig;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_typeof(customConfig) === 'object')) {
              _context3.next = 4;
              break;
            }

            // return a custom config obj
            builtConfig = buildConfigation(customConfig);

            if (cb) {
              cb(builtConfig);
            }

            return _context3.abrupt("return", builtConfig);

          case 4:
            return _context3.abrupt("return", fromFile(customConfig, cb));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getConfig(_x, _x2) {
    return _getConfig.apply(this, arguments);
  };
}();

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DEFAULT_NAME_FOR_STATIC_CONFIG_FILE, "DEFAULT_NAME_FOR_STATIC_CONFIG_FILE", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  reactHotLoader.register(DEFAULT_PATH_FOR_STATIC_CONFIG, "DEFAULT_PATH_FOR_STATIC_CONFIG", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  reactHotLoader.register(DEFAULT_ROUTES, "DEFAULT_ROUTES", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  reactHotLoader.register(DEFAULT_ENTRY, "DEFAULT_ENTRY", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  reactHotLoader.register(buildConfigation, "buildConfigation", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  reactHotLoader.register(buildConfigFromPath, "buildConfigFromPath", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  reactHotLoader.register(fromFile, "fromFile", "/home/daniel/flattenedmonad/react-static/src/static/getConfig.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Q29uZmlnLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTkFNRV9GT1JfU1RBVElDX0NPTkZJR19GSUxFIiwiREVGQVVMVF9QQVRIX0ZPUl9TVEFUSUNfQ09ORklHIiwibm9kZVBhdGgiLCJyZXNvbHZlIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJERUZBVUxUX1JPVVRFUyIsInBhdGgiLCJERUZBVUxUX0VOVFJZIiwiYnVpbGRDb25maWdhdGlvbiIsImNvbmZpZyIsInBhdGhzIiwicm9vdCIsInNyYyIsImRpc3QiLCJ0ZW1wIiwiZGV2RGlzdCIsInB1YmxpYyIsInBsdWdpbnMiLCJwYWdlcyIsIm5vZGVNb2R1bGVzIiwiYXNzZXRzIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJESVNUIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOViIsIkFTU0VUUyIsIlJPT1QiLCJMT0NBTF9OT0RFX01PRFVMRVMiLCJTUkMiLCJQQUdFUyIsIlBMVUdJTlMiLCJURU1QIiwiUFVCTElDIiwiTk9ERV9NT0RVTEVTIiwiRVhDTFVERV9NT0RVTEVTIiwiZXhjbHVkZVJlc29sdmVkTW9kdWxlcyIsIlBBQ0tBR0UiLCJIVE1MX1RFTVBMQVRFIiwiU1RBVElDX0RBVEEiLCJzaXRlUm9vdCIsImJhc2VQYXRoIiwiZGV2QmFzZVBhdGgiLCJSRUFDVF9TVEFUSUNfU1RBR0lORyIsInN0YWdpbmdTaXRlUm9vdCIsInN0YWdpbmdCYXNlUGF0aCIsInB1YmxpY1BhdGgiLCJhc3NldHNQYXRoIiwiZmluYWxDb25maWciLCJlbnRyeSIsImdldFNpdGVEYXRhIiwicmVuZGVyVG9Db21wb25lbnQiLCJyZW5kZXJUb0h0bWwiLCJyZW5kZXIiLCJjb21wIiwicHJlZmV0Y2hSYXRlIiwibWF4VGhyZWFkcyIsIkluZmluaXR5IiwiZGlzYWJsZVJvdXRlSW5mb1dhcm5pbmciLCJkaXNhYmxlUm91dGVQcmVmaXhpbmciLCJvdXRwdXRGaWxlUmF0ZSIsImV4dGVuc2lvbnMiLCJnZXRSb3V0ZXMiLCJleHRyYWN0Q3NzQ2h1bmtzIiwiaW5saW5lQ3NzIiwiUkVBQ1RfU1RBVElDX1BSRUZFVENIX1JBVEUiLCJSRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9JTkZPX1dBUk5JTkciLCJSRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkciLCJtYXAiLCJyZXNvbHZlciIsInBsdWdpbiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImVyciIsImJ1aWxkQ29uZmlnRnJvbVBhdGgiLCJmaWxlbmFtZSIsImNvbmZpZ1BhdGgiLCJjYWNoZSIsImNvbnNvbGUiLCJlcnJvciIsImZyb21GaWxlIiwic3Vic2NyaWJlIiwiY2hva2lkYXIiLCJ3YXRjaCIsIm9uIiwiY3VzdG9tQ29uZmlnIiwiY2IiLCJidWlsdENvbmZpZyIsImdldENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQ0FBc0Msa0JBQTVDLEMsQ0FDQTs7QUFDQSxJQUFNQyxpQ0FBaUNDLGNBQVNDLE9BQVQsQ0FDckNELGNBQVNFLElBQVQsQ0FBY0MsUUFBUUMsR0FBUixFQUFkLEVBQTZCTixtQ0FBN0IsQ0FEcUMsQ0FBdkM7O0FBR0EsSUFBTU8saUJBQWlCLENBQUM7QUFBRUMsUUFBTTtBQUFSLENBQUQsQ0FBdkI7QUFDQSxJQUFNQyxnQkFBZ0IsVUFBdEI7O0FBRU8sSUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUMvQztBQUNBQSxTQUFPQyxLQUFQO0FBQ0VDLFVBQU1YLGNBQVNDLE9BQVQsQ0FBaUJFLFFBQVFDLEdBQVIsRUFBakIsQ0FEUjtBQUVFUSxTQUFLLEtBRlA7QUFHRUMsVUFBTSxNQUhSO0FBSUVDLFVBQU0sS0FKUjtBQUtFQyxhQUFTLGdCQUxYO0FBTUVD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QSxXQUFPLEVBQVA7QUFDRDtBQUNGLENBVkQ7O0FBWUEsSUFBTU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmSixzQkFEZSw4REFDRmhGLDhCQURFO0FBRWZxRixxQkFGZTtBQUlUM0Usa0JBSlMsR0FJQW9FLG9CQUFvQkUsVUFBcEIsQ0FKQTs7QUFNZixnQkFBSUssU0FBSixFQUFlO0FBQ2JDLGdDQUFTQyxLQUFULENBQWVQLFVBQWYsRUFBMkJRLEVBQTNCLENBQThCLEtBQTlCLEVBQXFDLFlBQU07QUFDekNILDBCQUFVUCxvQkFBb0JFLFVBQXBCLENBQVY7QUFDRCxlQUZEO0FBR0Q7O0FBVmMsOENBWVJ0RSxNQVpROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTixDLENBZUE7Ozs7Ozs7OzRCQUNnQixrQkFBeUIrRSxZQUF6QixFQUF1Q0MsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1YsUUFBT0QsWUFBUCxNQUF3QixRQURkO0FBQUE7QUFBQTtBQUFBOztBQUVaO0FBQ01FLHVCQUhNLEdBR1FsRixpQkFBaUJnRixZQUFqQixDQUhSOztBQUlaLGdCQUFJQyxFQUFKLEVBQVE7QUFDTkEsaUJBQUdDLFdBQUg7QUFDRDs7QUFOVyw4Q0FPTEEsV0FQSzs7QUFBQTtBQUFBLDhDQVlQUCxTQUFTSyxZQUFULEVBQXVCQyxFQUF2QixDQVpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlRSxTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkF4S3pCN0YsbUM7MEJBRUFDLDhCOzBCQUdBTSxjOzBCQUNBRSxhOzBCQUVPQyxnQjswQkFvSVBxRSxtQjswQkFZQU0sUSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgY2hva2lkYXIgZnJvbSAnY2hva2lkYXInXG5pbXBvcnQgcmVzb2x2ZUZyb20gZnJvbSAncmVzb2x2ZS1mcm9tJ1xuXG5pbXBvcnQgZ2V0RGlybmFtZSBmcm9tICcuLi91dGlscy9nZXREaXJuYW1lJ1xuaW1wb3J0IHsgY2xlYW5TbGFzaGVzLCBjdXRQYXRoVG9Sb290LCBpc0Fic29sdXRlVXJsIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkJ1xuXG5jb25zdCBERUZBVUxUX05BTUVfRk9SX1NUQVRJQ19DT05GSUdfRklMRSA9ICdzdGF0aWMuY29uZmlnLmpzJ1xuLy8gdGhlIGRlZmF1bHQgc3RhdGljLmNvbmZpZy5qcyBsb2NhdGlvblxuY29uc3QgREVGQVVMVF9QQVRIX0ZPUl9TVEFUSUNfQ09ORklHID0gbm9kZVBhdGgucmVzb2x2ZShcbiAgbm9kZVBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBERUZBVUxUX05BTUVfRk9SX1NUQVRJQ19DT05GSUdfRklMRSlcbilcbmNvbnN0IERFRkFVTFRfUk9VVEVTID0gW3sgcGF0aDogJy8nIH1dXG5jb25zdCBERUZBVUxUX0VOVFJZID0gJ2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRDb25maWdhdGlvbiA9IChjb25maWcgPSB7fSkgPT4ge1xuICAvLyBwYXRoIGRlZmF1bHRzXG4gIGNvbmZpZy5wYXRocyA9IHtcbiAgICByb290OiBub2RlUGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCkpLFxuICAgIHNyYzogJ3NyYycsXG4gICAgZGlzdDogJ2Rpc3QnLFxuICAgIHRlbXA6ICd0bXAnLFxuICAgIGRldkRpc3Q6ICd0bXAvZGV2LXNlcnZlcicsXG4gICAgcHVibGljOiAncHVibGljJyxcbiAgICBwbHVnaW5zOiAncGx1Z2lucycsIC8vIFRPRE86IGRvY3VtZW50XG4gICAgcGFnZXM6ICdzcmMvcGFnZXMnLCAvLyBUT0RPOiBkb2N1bWVudFxuICAgIG5vZGVNb2R1bGVzOiAnbm9kZV9tb2R1bGVzJyxcbiAgICBhc3NldHM6ICcnLFxuICAgIC4uLihjb25maWcucGF0aHMgfHwge30pLFxuICB9XG5cbiAgLy8gVXNlIHRoZSByb290IHRvIHJlc29sdmUgYWxsIG90aGVyIHJlbGF0aXZlIHBhdGhzXG4gIGNvbnN0IHJlc29sdmVQYXRoID0gcmVsYXRpdmVQYXRoID0+XG4gICAgbm9kZVBhdGgucmVzb2x2ZShjb25maWcucGF0aHMucm9vdCwgcmVsYXRpdmVQYXRoKVxuXG4gIC8vIFJlc29sdmUgYWxsIHBhdGhzXG4gIGNvbnN0IERJU1QgPVxuICAgIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICAgID8gcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLmRldkRpc3QgfHwgY29uZmlnLnBhdGhzLmRpc3QpXG4gICAgICA6IHJlc29sdmVQYXRoKGNvbmZpZy5wYXRocy5kaXN0KVxuXG4gIGNvbnN0IEFTU0VUUyA9IG5vZGVQYXRoLnJlc29sdmUoRElTVCwgY29uZmlnLnBhdGhzLmFzc2V0cylcblxuICBjb25zdCBwYXRocyA9IHtcbiAgICBST09UOiBjb25maWcucGF0aHMucm9vdCxcbiAgICBMT0NBTF9OT0RFX01PRFVMRVM6IG5vZGVQYXRoLnJlc29sdmUoZ2V0RGlybmFtZSgpLCAnLi4vLi4vbm9kZV9tb2R1bGVzJyksXG4gICAgU1JDOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMuc3JjKSxcbiAgICBQQUdFUzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnBhZ2VzKSxcbiAgICBESVNULFxuICAgIEFTU0VUUyxcbiAgICBQTFVHSU5TOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMucGx1Z2lucyksXG4gICAgVEVNUDogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnRlbXApLFxuICAgIFBVQkxJQzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnB1YmxpYyksXG4gICAgTk9ERV9NT0RVTEVTOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMubm9kZU1vZHVsZXMpLFxuICAgIEVYQ0xVREVfTU9EVUxFUzpcbiAgICAgIGNvbmZpZy5wYXRocy5leGNsdWRlUmVzb2x2ZWRNb2R1bGVzIHx8XG4gICAgICByZXNvbHZlUGF0aChjb25maWcucGF0aHMubm9kZU1vZHVsZXMpLFxuICAgIFBBQ0tBR0U6IHJlc29sdmVQYXRoKCdwYWNrYWdlLmpzb24nKSxcbiAgICBIVE1MX1RFTVBMQVRFOiBub2RlUGF0aC5qb2luKERJU1QsICdpbmRleC5odG1sJyksXG4gICAgU1RBVElDX0RBVEE6IG5vZGVQYXRoLmpvaW4oQVNTRVRTLCAnc3RhdGljRGF0YScpLFxuICB9XG5cbiAgbGV0IHNpdGVSb290ID0gJydcbiAgbGV0IGJhc2VQYXRoID0gJydcblxuICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGJhc2VQYXRoID0gY2xlYW5TbGFzaGVzKGNvbmZpZy5kZXZCYXNlUGF0aClcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfU1RBR0lORyA9PT0gJ3RydWUnKSB7XG4gICAgc2l0ZVJvb3QgPSBjdXRQYXRoVG9Sb290KGNvbmZpZy5zdGFnaW5nU2l0ZVJvb3QsICckMScpXG4gICAgYmFzZVBhdGggPSBjbGVhblNsYXNoZXMoY29uZmlnLnN0YWdpbmdCYXNlUGF0aClcbiAgfSBlbHNlIHtcbiAgICBzaXRlUm9vdCA9IGN1dFBhdGhUb1Jvb3QoY29uZmlnLnNpdGVSb290LCAnJDEnKVxuICAgIGJhc2VQYXRoID0gY2xlYW5TbGFzaGVzKGNvbmZpZy5iYXNlUGF0aClcbiAgfVxuXG4gIGNvbnN0IHB1YmxpY1BhdGggPSBgJHtjbGVhblNsYXNoZXMoYCR7c2l0ZVJvb3R9LyR7YmFzZVBhdGh9YCl9L2BcblxuICBsZXQgYXNzZXRzUGF0aCA9IGNsZWFuU2xhc2hlcyhjb25maWcuYXNzZXRzUGF0aCB8fCBjb25maWcucGF0aHMuYXNzZXRzKVxuICBpZiAoYXNzZXRzUGF0aCAmJiAhaXNBYnNvbHV0ZVVybChhc3NldHNQYXRoKSkge1xuICAgIGFzc2V0c1BhdGggPSBgLyR7Y2xlYW5TbGFzaGVzKGAke2Jhc2VQYXRofS8ke2Fzc2V0c1BhdGh9YCl9L2BcbiAgfVxuXG4gIC8vIERlZmF1bHRzXG4gIGNvbnN0IGZpbmFsQ29uZmlnID0ge1xuICAgIC8vIERlZmF1bHRzXG4gICAgZW50cnk6IG5vZGVQYXRoLmpvaW4ocGF0aHMuU1JDLCBERUZBVUxUX0VOVFJZKSxcbiAgICBnZXRTaXRlRGF0YTogKCkgPT4gKHt9KSxcbiAgICByZW5kZXJUb0NvbXBvbmVudDogQ29tcCA9PiA8Q29tcCAvPixcbiAgICByZW5kZXJUb0h0bWw6IChyZW5kZXIsIGNvbXApID0+IHJlbmRlcihjb21wKSxcbiAgICBwcmVmZXRjaFJhdGU6IDMsXG4gICAgbWF4VGhyZWFkczogSW5maW5pdHksXG4gICAgZGlzYWJsZVJvdXRlSW5mb1dhcm5pbmc6IGZhbHNlLFxuICAgIGRpc2FibGVSb3V0ZVByZWZpeGluZzogZmFsc2UsXG4gICAgb3V0cHV0RmlsZVJhdGU6IDEwMCxcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanN4J10sIC8vIFRPRE86IGRvY3VtZW50XG4gICAgZ2V0Um91dGVzOiBhc3luYyAoKSA9PiBERUZBVUxUX1JPVVRFUyxcbiAgICBwbHVnaW5zOiBbXSxcbiAgICAvLyBDb25maWcgT3ZlcnJpZGVzXG4gICAgLi4uY29uZmlnLFxuICAgIC8vIE1hdGVyaWFsaXplZCBPdmVycmlkZXNcbiAgICBwYXRocyxcbiAgICBzaXRlUm9vdCxcbiAgICBiYXNlUGF0aCxcbiAgICBwdWJsaWNQYXRoLFxuICAgIGFzc2V0c1BhdGgsXG4gICAgZXh0cmFjdENzc0NodW5rczogY29uZmlnLmV4dHJhY3RDc3NDaHVua3MgfHwgZmFsc2UsXG4gICAgaW5saW5lQ3NzOiBjb25maWcuaW5saW5lQ3NzIHx8IGZhbHNlLFxuICB9XG5cbiAgLy8gU2V0IGVudiB2YXJpYWJsZXMgdG8gYmUgdXNlZCBjbGllbnQgc2lkZVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFJFRkVUQ0hfUkFURSA9IGZpbmFsQ29uZmlnLnByZWZldGNoUmF0ZVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9JTkZPX1dBUk5JTkcgPVxuICAgIGZpbmFsQ29uZmlnLmRpc2FibGVSb3V0ZUluZm9XYXJuaW5nXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyA9XG4gICAgZmluYWxDb25maWcuZGlzYWJsZVJvdXRlUHJlZml4aW5nXG5cbiAgLy8gRmV0Y2ggcGx1Z2lucywgaWYgYW55XG4gIGZpbmFsQ29uZmlnLnBsdWdpbnMgPSBmaW5hbENvbmZpZy5wbHVnaW5zLm1hcChwbHVnaW4gPT4ge1xuICAgIGxldCByZXNvbHZlciA9IHBsdWdpblxuICAgIGxldCBvcHRpb25zID0ge31cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwbHVnaW4pKSB7XG4gICAgICByZXNvbHZlciA9IHBsdWdpblswXVxuICAgICAgb3B0aW9ucyA9IHBsdWdpblsxXSB8fCB7fVxuICAgIH1cbiAgICAvLyBBdHRlbXB0IGEgZGlyZWN0IHJlcXVpcmUgZm9yIGFic29sdXRlIHBhdGhzXG4gICAgdHJ5IHtcbiAgICAgIHBsdWdpbiA9IHJlcXVpcmUocmVzb2x2ZXIpLmRlZmF1bHRcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEF0dGVtcHQgYSAvcGx1Z2lucyBkaXJlY3RvcnkgcmVxdWlyZVxuICAgICAgICBwbHVnaW4gPSByZXF1aXJlKG5vZGVQYXRoLnJlc29sdmUocGF0aHMuUExVR0lOUywgcmVzb2x2ZXIpKS5kZWZhdWx0XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHJvb3QgZGlyZWN0b3J5IHJlcXVpcmUgKG5vZGVfbW9kdWxlcylcbiAgICAgICAgcGx1Z2luID0gcmVxdWlyZShyZXNvbHZlRnJvbShwcm9jZXNzLmN3ZCgpLCByZXNvbHZlcikpLmRlZmF1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzb2x2ZXIsXG4gICAgICBvcHRpb25zLFxuICAgICAgLi4ucGx1Z2luKG9wdGlvbnMpLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZmluYWxDb25maWdcbn1cblxuY29uc3QgYnVpbGRDb25maWdGcm9tUGF0aCA9IGNvbmZpZ1BhdGggPT4ge1xuICBjb25zdCBmaWxlbmFtZSA9IG5vZGVQYXRoLnJlc29sdmUoY29uZmlnUGF0aClcbiAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbZmlsZW5hbWVdXG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnID0gcmVxdWlyZShmaWxlbmFtZSkuZGVmYXVsdFxuICAgIHJldHVybiBidWlsZENvbmZpZ2F0aW9uKGNvbmZpZylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuY29uc3QgZnJvbUZpbGUgPSBhc3luYyAoXG4gIGNvbmZpZ1BhdGggPSBERUZBVUxUX1BBVEhfRk9SX1NUQVRJQ19DT05GSUcsXG4gIHN1YnNjcmliZVxuKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGJ1aWxkQ29uZmlnRnJvbVBhdGgoY29uZmlnUGF0aClcblxuICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgY2hva2lkYXIud2F0Y2goY29uZmlnUGF0aCkub24oJ2FsbCcsICgpID0+IHtcbiAgICAgIHN1YnNjcmliZShidWlsZENvbmZpZ0Zyb21QYXRoKGNvbmZpZ1BhdGgpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY29uZmlnXG59XG5cbi8vIFJldHJpZXZlcyB0aGUgc3RhdGljLmNvbmZpZy5qcyBmcm9tIHRoZSBjdXJyZW50IHByb2plY3QgZGlyZWN0b3J5XG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gZ2V0Q29uZmlnKGN1c3RvbUNvbmZpZywgY2IpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21Db25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcmV0dXJuIGEgY3VzdG9tIGNvbmZpZyBvYmpcbiAgICBjb25zdCBidWlsdENvbmZpZyA9IGJ1aWxkQ29uZmlnYXRpb24oY3VzdG9tQ29uZmlnKVxuICAgIGlmIChjYikge1xuICAgICAgY2IoYnVpbHRDb25maWcpXG4gICAgfVxuICAgIHJldHVybiBidWlsdENvbmZpZ1xuICB9XG5cbiAgLy8gcmV0dXJuIGEgY3VzdG9tIGNvbmZpZyBmaWxlIGxvY2F0aW9uXG4gIC8vIGRlZmF1bHRzIHRvIGNvbnN0YW50IHBhYXRoIGZvciBzdGF0aWMgY29uZmlnXG4gIHJldHVybiBmcm9tRmlsZShjdXN0b21Db25maWcsIGNiKVxufSlcbiJdfQ==