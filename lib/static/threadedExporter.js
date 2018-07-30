"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _glob = _interopRequireDefault(require("glob"));

var _path = _interopRequireDefault(require("path"));

var _getConfig = _interopRequireDefault(require("./getConfig"));

var _RootComponents = require("./RootComponents");

var _shared = require("../utils/shared");

var _exportRoute = _interopRequireDefault(require("./exportRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable import/first, import/no-dynamic-require */
require('../utils/binHelper');

process.on('message',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(payload) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.delegateYield(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee2() {
              var oldConfig, routes, config, Comp, DocumentTemplate, tasks, _loop, i;

              return _regenerator.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      oldConfig = payload.config, routes = payload.routes; // Get config again

                      _context2.next = 3;
                      return (0, _getConfig.default)(oldConfig.originalConfig);

                    case 3:
                      config = _context2.sent;
                      // Use the node version of the app created with webpack
                      Comp = require(_glob.default.sync(_path.default.resolve(config.paths.ASSETS, 'static.*.js'))[0]).default; // Retrieve the document template

                      DocumentTemplate = config.Document || _RootComponents.DefaultDocument;
                      tasks = [];

                      _loop = function _loop(i) {
                        var route = routes[i];
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
                                  return (0, _exportRoute.default)(_objectSpread({}, payload, {
                                    config: config,
                                    route: route,
                                    Comp: Comp,
                                    DocumentTemplate: DocumentTemplate
                                  }));

                                case 2:
                                  if (process.connected) {
                                    process.send({
                                      type: 'tick'
                                    });
                                  }

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

                      _context2.next = 11;
                      return (0, _shared.poolAll)(tasks, Number(config.outputFileRate));

                    case 11:
                      if (process.connected) {
                        process.send({
                          type: 'done'
                        });
                      }

                      process.exit();

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            })(), "t0", 2);

          case 2:
            _context3.next = 9;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t1 = _context3["catch"](0);
            console.error(_context3.t1);

            if (process.connected) {
              process.send({
                type: 'error',
                payload: _context3.t1
              });
            }

            process.exit(1);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 4]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvdGhyZWFkZWRFeHBvcnRlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJvY2VzcyIsIm9uIiwicGF5bG9hZCIsIm9sZENvbmZpZyIsImNvbmZpZyIsInJvdXRlcyIsIm9yaWdpbmFsQ29uZmlnIiwiQ29tcCIsImdsb2IiLCJzeW5jIiwicGF0aCIsInJlc29sdmUiLCJwYXRocyIsIkFTU0VUUyIsImRlZmF1bHQiLCJEb2N1bWVudFRlbXBsYXRlIiwiRG9jdW1lbnQiLCJEZWZhdWx0RG9jdW1lbnQiLCJ0YXNrcyIsImkiLCJyb3V0ZSIsInB1c2giLCJjb25uZWN0ZWQiLCJzZW5kIiwidHlwZSIsImxlbmd0aCIsIk51bWJlciIsIm91dHB1dEZpbGVSYXRlIiwiZXhpdCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUlBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFWQTtBQUVBQSxRQUFRLG9CQUFSOztBQVVBQyxRQUFRQyxFQUFSLENBQVcsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXNCLGtCQUFNQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLCtCQUZFLEdBRW9CRCxPQUZwQixDQUVWRSxNQUZVLEVBRVNDLE1BRlQsR0FFb0JILE9BRnBCLENBRVNHLE1BRlQsRUFHbEI7O0FBSGtCO0FBQUEsNkJBSUcsd0JBQVVGLFVBQVVHLGNBQXBCLENBSkg7O0FBQUE7QUFJWkYsNEJBSlk7QUFLbEI7QUFDTUcsMEJBTlksR0FNTFIsUUFBUVMsY0FBS0MsSUFBTCxDQUNuQkMsY0FBS0MsT0FBTCxDQUFhUCxPQUFPUSxLQUFQLENBQWFDLE1BQTFCLEVBQWtDLGFBQWxDLENBRG1CLEVBRW5CLENBRm1CLENBQVIsRUFFUEMsT0FSWSxFQVNsQjs7QUFDTUMsc0NBVlksR0FVT1gsT0FBT1ksUUFBUCxJQUFtQkMsK0JBVjFCO0FBWVpDLDJCQVpZLEdBWUosRUFaSTs7QUFBQSw2Q0FhVEMsQ0FiUztBQWNoQiw0QkFBTUMsUUFBUWYsT0FBT2MsQ0FBUCxDQUFkO0FBQ0FELDhCQUFNRyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBQ0gsNENBQ0RuQixPQURDO0FBRUpFLGtEQUZJO0FBR0pnQixnREFISTtBQUlKYiw4Q0FKSTtBQUtKUTtBQUxJLHFDQURHOztBQUFBO0FBUVQsc0NBQUlmLFFBQVFzQixTQUFaLEVBQXVCO0FBQ3JCdEIsNENBQVF1QixJQUFSLENBQWE7QUFBRUMsNENBQU07QUFBUixxQ0FBYjtBQUNEOztBQVZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFYO0FBZmdCOztBQWFsQiwyQkFBU0wsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLElBQUlkLE9BQU9vQixNQUEzQixFQUFtQ04sR0FBbkMsRUFBd0M7QUFBQSw4QkFBL0JBLENBQStCO0FBY3ZDOztBQTNCaUI7QUFBQSw2QkE0QloscUJBQVFELEtBQVIsRUFBZVEsT0FBT3RCLE9BQU91QixjQUFkLENBQWYsQ0E1Qlk7O0FBQUE7QUE2QmxCLDBCQUFJM0IsUUFBUXNCLFNBQVosRUFBdUI7QUFDckJ0QixnQ0FBUXVCLElBQVIsQ0FBYTtBQUFFQyxnQ0FBTTtBQUFSLHlCQUFiO0FBQ0Q7O0FBQ0R4Qiw4QkFBUTRCLElBQVI7O0FBaENrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0NsQkMsb0JBQVFDLEtBQVI7O0FBQ0EsZ0JBQUk5QixRQUFRc0IsU0FBWixFQUF1QjtBQUNyQnRCLHNCQUFRdUIsSUFBUixDQUFhO0FBQUVDLHNCQUFNLE9BQVI7QUFBaUJ0QjtBQUFqQixlQUFiO0FBQ0Q7O0FBQ0RGLG9CQUFRNEIsSUFBUixDQUFhLENBQWI7O0FBdENrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9maXJzdCwgaW1wb3J0L25vLWR5bmFtaWMtcmVxdWlyZSAqL1xuXG5yZXF1aXJlKCcuLi91dGlscy9iaW5IZWxwZXInKVxuXG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuL2dldENvbmZpZydcbmltcG9ydCB7IERlZmF1bHREb2N1bWVudCB9IGZyb20gJy4vUm9vdENvbXBvbmVudHMnXG5pbXBvcnQgeyBwb29sQWxsIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IGV4cG9ydFJvdXRlIGZyb20gJy4vZXhwb3J0Um91dGUnXG5cbnByb2Nlc3Mub24oJ21lc3NhZ2UnLCBhc3luYyBwYXlsb2FkID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvbmZpZzogb2xkQ29uZmlnLCByb3V0ZXMgfSA9IHBheWxvYWRcbiAgICAvLyBHZXQgY29uZmlnIGFnYWluXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKG9sZENvbmZpZy5vcmlnaW5hbENvbmZpZylcbiAgICAvLyBVc2UgdGhlIG5vZGUgdmVyc2lvbiBvZiB0aGUgYXBwIGNyZWF0ZWQgd2l0aCB3ZWJwYWNrXG4gICAgY29uc3QgQ29tcCA9IHJlcXVpcmUoZ2xvYi5zeW5jKFxuICAgICAgcGF0aC5yZXNvbHZlKGNvbmZpZy5wYXRocy5BU1NFVFMsICdzdGF0aWMuKi5qcycpXG4gICAgKVswXSkuZGVmYXVsdFxuICAgIC8vIFJldHJpZXZlIHRoZSBkb2N1bWVudCB0ZW1wbGF0ZVxuICAgIGNvbnN0IERvY3VtZW50VGVtcGxhdGUgPSBjb25maWcuRG9jdW1lbnQgfHwgRGVmYXVsdERvY3VtZW50XG5cbiAgICBjb25zdCB0YXNrcyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW2ldXG4gICAgICB0YXNrcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZXhwb3J0Um91dGUoe1xuICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIENvbXAsXG4gICAgICAgICAgRG9jdW1lbnRUZW1wbGF0ZSxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHByb2Nlc3MuY29ubmVjdGVkKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zZW5kKHsgdHlwZTogJ3RpY2snIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGF3YWl0IHBvb2xBbGwodGFza3MsIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpKVxuICAgIGlmIChwcm9jZXNzLmNvbm5lY3RlZCkge1xuICAgICAgcHJvY2Vzcy5zZW5kKHsgdHlwZTogJ2RvbmUnIH0pXG4gICAgfVxuICAgIHByb2Nlc3MuZXhpdCgpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIGlmIChwcm9jZXNzLmNvbm5lY3RlZCkge1xuICAgICAgcHJvY2Vzcy5zZW5kKHsgdHlwZTogJ2Vycm9yJywgcGF5bG9hZDogZXJyIH0pXG4gICAgfVxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG59KVxuIl19