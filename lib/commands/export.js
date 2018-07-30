"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _static = require("../static");

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var _ref2,
        originalConfig,
        staging,
        debug,
        isBuild,
        config,
        bundledEnv,
        clientStats,
        PrettyError,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, originalConfig = _ref2.config, staging = _ref2.staging, debug = _ref2.debug, isBuild = _ref2.isBuild;

            // ensure ENV variables are set
            if (typeof process.env.NODE_ENV === 'undefined' && !debug) {
              process.env.NODE_ENV = 'production';
            }

            process.env.REACT_STATIC_ENV = 'production';
            process.env.BABEL_ENV = 'production';

            if (staging) {
              process.env.REACT_STATIC_STAGING = 'true';
            }

            if (debug) {
              process.env.REACT_STATIC_DEBUG = 'true';
            }

            if (isBuild) {
              _context.next = 20;
              break;
            }

            _context.next = 9;
            return (0, _getConfig.default)(originalConfig);

          case 9:
            config = _context.sent;
            config.originalConfig = originalConfig; // Restore the process environment variables that were present during the build

            _context.next = 13;
            return _fsExtra.default.readJson("".concat(config.paths.TEMP, "/bundle-environment.json"));

          case 13:
            bundledEnv = _context.sent;
            Object.keys(bundledEnv).forEach(function (key) {
              if (typeof process.env[key] === 'undefined') {
                process.env[key] = bundledEnv[key];
              }
            });
            _context.next = 17;
            return (0, _static.prepareRoutes)({
              config: config,
              opts: {
                dev: false
              }
            });

          case 17:
            config = _context.sent;
            _context.next = 21;
            break;

          case 20:
            config = originalConfig;

          case 21:
            if (config.routes) {
              _context.next = 24;
              break;
            }

            _context.next = 24;
            return (0, _static.prepareRoutes)(config, {
              dev: false
            });

          case 24:
            if (debug) {
              console.log('DEBUG - Resolved static.config.js:');
              console.log(config);
            }

            _context.next = 27;
            return _fsExtra.default.readJson("".concat(config.paths.TEMP, "/client-stats.json"));

          case 27:
            clientStats = _context.sent;

            if (clientStats) {
              _context.next = 30;
              break;
            }

            throw new Error('No Client Stats Found');

          case 30:
            _context.prev = 30;
            _context.next = 33;
            return (0, _static.exportRoutes)({
              config: config,
              clientStats: clientStats
            });

          case 33:
            _context.next = 40;
            break;

          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](30);
            PrettyError = require('pretty-error');
            console.log(new PrettyError().render(_context.t0));
            process.exit(1);

          case 40:
            _context.next = 42;
            return (0, _static.buildXMLandRSS)({
              config: config
            });

          case 42:
            if (!config.onBuild) {
              _context.next = 45;
              break;
            }

            _context.next = 45;
            return config.onBuild({
              config: config
            });

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[30, 35]]);
  }));

  return function _default() {
    return _ref.apply(this, arguments);
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/commands/export.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9leHBvcnQuanMiXSwibmFtZXMiOlsib3JpZ2luYWxDb25maWciLCJjb25maWciLCJzdGFnaW5nIiwiZGVidWciLCJpc0J1aWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfU1RBVElDX0VOViIsIkJBQkVMX0VOViIsIlJFQUNUX1NUQVRJQ19TVEFHSU5HIiwiUkVBQ1RfU1RBVElDX0RFQlVHIiwiZnMiLCJyZWFkSnNvbiIsInBhdGhzIiwiVEVNUCIsImJ1bmRsZWRFbnYiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIm9wdHMiLCJkZXYiLCJyb3V0ZXMiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50U3RhdHMiLCJFcnJvciIsIlByZXR0eUVycm9yIiwicmVxdWlyZSIsInJlbmRlciIsImV4aXQiLCJvbkJ1aWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFFZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBS1gsRUFMVyxFQUNMQSxjQURLLFNBQ2JDLE1BRGEsRUFFYkMsT0FGYSxTQUViQSxPQUZhLEVBR2JDLEtBSGEsU0FHYkEsS0FIYSxFQUliQyxPQUphLFNBSWJBLE9BSmE7O0FBTWI7QUFDQSxnQkFBSSxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLFFBQW5CLEtBQWdDLFdBQWhDLElBQStDLENBQUNKLEtBQXBELEVBQTJEO0FBQ3pERSxzQkFBUUMsR0FBUixDQUFZQyxRQUFaLEdBQXVCLFlBQXZCO0FBQ0Q7O0FBRURGLG9CQUFRQyxHQUFSLENBQVlFLGdCQUFaLEdBQStCLFlBQS9CO0FBQ0FILG9CQUFRQyxHQUFSLENBQVlHLFNBQVosR0FBd0IsWUFBeEI7O0FBRUEsZ0JBQUlQLE9BQUosRUFBYTtBQUNYRyxzQkFBUUMsR0FBUixDQUFZSSxvQkFBWixHQUFtQyxNQUFuQztBQUNEOztBQUVELGdCQUFJUCxLQUFKLEVBQVc7QUFDVEUsc0JBQVFDLEdBQVIsQ0FBWUssa0JBQVosR0FBaUMsTUFBakM7QUFDRDs7QUFwQlksZ0JBeUJSUCxPQXpCUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQTBCSSx3QkFBVUosY0FBVixDQTFCSjs7QUFBQTtBQTBCWEMsa0JBMUJXO0FBMkJYQSxtQkFBT0QsY0FBUCxHQUF3QkEsY0FBeEIsQ0EzQlcsQ0E0Qlg7O0FBNUJXO0FBQUEsbUJBNkJjWSxpQkFBR0MsUUFBSCxXQUNwQlosT0FBT2EsS0FBUCxDQUFhQyxJQURPLDhCQTdCZDs7QUFBQTtBQTZCTEMsc0JBN0JLO0FBZ0NYQyxtQkFBT0MsSUFBUCxDQUFZRixVQUFaLEVBQXdCRyxPQUF4QixDQUFnQyxlQUFPO0FBQ3JDLGtCQUFJLE9BQU9kLFFBQVFDLEdBQVIsQ0FBWWMsR0FBWixDQUFQLEtBQTRCLFdBQWhDLEVBQTZDO0FBQzNDZix3QkFBUUMsR0FBUixDQUFZYyxHQUFaLElBQW1CSixXQUFXSSxHQUFYLENBQW5CO0FBQ0Q7QUFDRixhQUpEO0FBaENXO0FBQUEsbUJBcUNJLDJCQUFjO0FBQUVuQiw0QkFBRjtBQUFVb0Isb0JBQU07QUFBRUMscUJBQUs7QUFBUDtBQUFoQixhQUFkLENBckNKOztBQUFBO0FBcUNYckIsa0JBckNXO0FBQUE7QUFBQTs7QUFBQTtBQXVDWEEscUJBQVNELGNBQVQ7O0FBdkNXO0FBQUEsZ0JBMENSQyxPQUFPc0IsTUExQ0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkEyQ0wsMkJBQWN0QixNQUFkLEVBQXNCO0FBQUVxQixtQkFBSztBQUFQLGFBQXRCLENBM0NLOztBQUFBO0FBOENiLGdCQUFJbkIsS0FBSixFQUFXO0FBQ1RxQixzQkFBUUMsR0FBUixDQUFZLG9DQUFaO0FBQ0FELHNCQUFRQyxHQUFSLENBQVl4QixNQUFaO0FBQ0Q7O0FBakRZO0FBQUEsbUJBbURhVyxpQkFBR0MsUUFBSCxXQUNyQlosT0FBT2EsS0FBUCxDQUFhQyxJQURRLHdCQW5EYjs7QUFBQTtBQW1EUFcsdUJBbkRPOztBQUFBLGdCQXVEUkEsV0F2RFE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBd0RMLElBQUlDLEtBQUosQ0FBVSx1QkFBVixDQXhESzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE0REwsMEJBQWE7QUFDakIxQiw0QkFEaUI7QUFFakJ5QjtBQUZpQixhQUFiLENBNURLOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpRUxFLHVCQWpFSyxHQWlFU0MsUUFBUSxjQUFSLENBakVUO0FBa0VYTCxvQkFBUUMsR0FBUixDQUFZLElBQUlHLFdBQUosR0FBa0JFLE1BQWxCLGFBQVo7QUFDQXpCLG9CQUFRMEIsSUFBUixDQUFhLENBQWI7O0FBbkVXO0FBQUE7QUFBQSxtQkFzRVAsNEJBQWU7QUFBRTlCO0FBQUYsYUFBZixDQXRFTzs7QUFBQTtBQUFBLGlCQXdFVEEsT0FBTytCLE9BeEVFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBeUVML0IsT0FBTytCLE9BQVAsQ0FBZTtBQUFFL0I7QUFBRixhQUFmLENBekVLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG4vL1xuaW1wb3J0IHsgZXhwb3J0Um91dGVzLCBidWlsZFhNTGFuZFJTUywgcHJlcGFyZVJvdXRlcyB9IGZyb20gJy4uL3N0YXRpYydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnLi4vc3RhdGljL2dldENvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHtcbiAgY29uZmlnOiBvcmlnaW5hbENvbmZpZyxcbiAgc3RhZ2luZyxcbiAgZGVidWcsXG4gIGlzQnVpbGQsXG59ID0ge30pID0+IHtcbiAgLy8gZW5zdXJlIEVOViB2YXJpYWJsZXMgYXJlIHNldFxuICBpZiAodHlwZW9mIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndW5kZWZpbmVkJyAmJiAhZGVidWcpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9ICdwcm9kdWN0aW9uJ1xuICB9XG5cbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9ICdwcm9kdWN0aW9uJ1xuICBwcm9jZXNzLmVudi5CQUJFTF9FTlYgPSAncHJvZHVjdGlvbidcblxuICBpZiAoc3RhZ2luZykge1xuICAgIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19TVEFHSU5HID0gJ3RydWUnXG4gIH1cblxuICBpZiAoZGVidWcpIHtcbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfREVCVUcgPSAndHJ1ZSdcbiAgfVxuXG4gIGxldCBjb25maWdcblxuICAvLyBBbGxvdyBjb25maWcgbG9jYXRpb24gdG8gYmUgb3ZlcnJpZGVuXG4gIGlmICghaXNCdWlsZCkge1xuICAgIGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZyhvcmlnaW5hbENvbmZpZylcbiAgICBjb25maWcub3JpZ2luYWxDb25maWcgPSBvcmlnaW5hbENvbmZpZ1xuICAgIC8vIFJlc3RvcmUgdGhlIHByb2Nlc3MgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRoYXQgd2VyZSBwcmVzZW50IGR1cmluZyB0aGUgYnVpbGRcbiAgICBjb25zdCBidW5kbGVkRW52ID0gYXdhaXQgZnMucmVhZEpzb24oXG4gICAgICBgJHtjb25maWcucGF0aHMuVEVNUH0vYnVuZGxlLWVudmlyb25tZW50Lmpzb25gXG4gICAgKVxuICAgIE9iamVjdC5rZXlzKGJ1bmRsZWRFbnYpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcHJvY2Vzcy5lbnZba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnZba2V5XSA9IGJ1bmRsZWRFbnZba2V5XVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uZmlnID0gYXdhaXQgcHJlcGFyZVJvdXRlcyh7IGNvbmZpZywgb3B0czogeyBkZXY6IGZhbHNlIH0gfSlcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBvcmlnaW5hbENvbmZpZ1xuICB9XG5cbiAgaWYgKCFjb25maWcucm91dGVzKSB7XG4gICAgYXdhaXQgcHJlcGFyZVJvdXRlcyhjb25maWcsIHsgZGV2OiBmYWxzZSB9KVxuICB9XG5cbiAgaWYgKGRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ0RFQlVHIC0gUmVzb2x2ZWQgc3RhdGljLmNvbmZpZy5qczonKVxuICAgIGNvbnNvbGUubG9nKGNvbmZpZylcbiAgfVxuXG4gIGNvbnN0IGNsaWVudFN0YXRzID0gYXdhaXQgZnMucmVhZEpzb24oXG4gICAgYCR7Y29uZmlnLnBhdGhzLlRFTVB9L2NsaWVudC1zdGF0cy5qc29uYFxuICApXG5cbiAgaWYgKCFjbGllbnRTdGF0cykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gQ2xpZW50IFN0YXRzIEZvdW5kJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZXhwb3J0Um91dGVzKHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNsaWVudFN0YXRzLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zdCBQcmV0dHlFcnJvciA9IHJlcXVpcmUoJ3ByZXR0eS1lcnJvcicpXG4gICAgY29uc29sZS5sb2cobmV3IFByZXR0eUVycm9yKCkucmVuZGVyKGUpKVxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG5cbiAgYXdhaXQgYnVpbGRYTUxhbmRSU1MoeyBjb25maWcgfSlcblxuICBpZiAoY29uZmlnLm9uQnVpbGQpIHtcbiAgICBhd2FpdCBjb25maWcub25CdWlsZCh7IGNvbmZpZyB9KVxuICB9XG59XG4iXX0=