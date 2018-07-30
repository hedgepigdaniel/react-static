"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _static = require("../static");

var _RootComponents = require("../static/RootComponents");

var _webpack = require("../static/webpack");

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
var cleaned;
var indexCreated;

var _default =
/*#__PURE__*/
function () {
  var _start = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var _ref,
        config,
        debug,
        _args3 = arguments;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, config = _ref.config, debug = _ref.debug;

            // ensure ENV variables are set
            if (typeof process.env.NODE_ENV === 'undefined') {
              process.env.NODE_ENV = 'development';
            }

            process.env.REACT_STATIC_ENV = 'development';
            process.env.BABEL_ENV = 'development'; // Use callback style to subscribe to changes

            _context3.next = 6;
            return (0, _getConfig.default)(config,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(config) {
                var siteData, Component;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (debug) {
                          console.log('DEBUG - Resolved static.config.js:');
                          console.log(config);
                        }

                        if (cleaned) {
                          _context2.next = 5;
                          break;
                        }

                        cleaned = true; // Clean the dist folder

                        _context2.next = 5;
                        return _fsExtra.default.remove(config.paths.DIST);

                      case 5:
                        _context2.next = 7;
                        return config.getSiteData({
                          dev: true
                        });

                      case 7:
                        siteData = _context2.sent;
                        // Resolve the base HTML template
                        Component = config.Document || _RootComponents.DefaultDocument;

                        if (indexCreated) {
                          _context2.next = 13;
                          break;
                        }

                        indexCreated = true; // Render an index.html placeholder

                        _context2.next = 13;
                        return (0, _utils.createIndexFilePlaceholder)({
                          config: config,
                          Component: Component,
                          siteData: siteData
                        });

                      case 13:
                        _context2.next = 15;
                        return (0, _static.prepareRoutes)({
                          config: config,
                          opts: {
                            dev: true
                          }
                        },
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          _regenerator.default.mark(function _callee(config) {
                            return _regenerator.default.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    (0, _webpack.reloadRoutes)(); // Build the JS bundle

                                    _context.next = 3;
                                    return (0, _webpack.startDevServer)({
                                      config: config
                                    });

                                  case 3:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));

                          return function (_x2) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 6:
            _context3.next = 8;
            return new Promise(function () {});

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function start() {
    return _start.apply(this, arguments);
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

  reactHotLoader.register(cleaned, "cleaned", "/home/daniel/flattenedmonad/react-static/src/commands/start.js");
  reactHotLoader.register(indexCreated, "indexCreated", "/home/daniel/flattenedmonad/react-static/src/commands/start.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdGFydC5qcyJdLCJuYW1lcyI6WyJjbGVhbmVkIiwiaW5kZXhDcmVhdGVkIiwiY29uZmlnIiwiZGVidWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9TVEFUSUNfRU5WIiwiQkFCRUxfRU5WIiwiY29uc29sZSIsImxvZyIsImZzIiwicmVtb3ZlIiwicGF0aHMiLCJESVNUIiwiZ2V0U2l0ZURhdGEiLCJkZXYiLCJzaXRlRGF0YSIsIkNvbXBvbmVudCIsIkRvY3VtZW50IiwiRGVmYXVsdERvY3VtZW50Iiwib3B0cyIsIlByb21pc2UiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxJQUFJQSxPQUFKO0FBQ0EsSUFBSUMsWUFBSjs7Ozs7Ozs0QkFFZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQUF5QyxFQUF6QyxFQUF1QkMsTUFBdkIsUUFBdUJBLE1BQXZCLEVBQStCQyxLQUEvQixRQUErQkEsS0FBL0I7O0FBQ2Q7QUFDQSxnQkFBSSxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLFFBQW5CLEtBQWdDLFdBQXBDLEVBQWlEO0FBQy9DRixzQkFBUUMsR0FBUixDQUFZQyxRQUFaLEdBQXVCLGFBQXZCO0FBQ0Q7O0FBQ0RGLG9CQUFRQyxHQUFSLENBQVlFLGdCQUFaLEdBQStCLGFBQS9CO0FBQ0FILG9CQUFRQyxHQUFSLENBQVlHLFNBQVosR0FBd0IsYUFBeEIsQ0FOYyxDQVFkOztBQVJjO0FBQUEsbUJBU1Isd0JBQVVOLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUFrQixrQkFBTUEsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEIsNEJBQUlDLEtBQUosRUFBVztBQUNUTSxrQ0FBUUMsR0FBUixDQUFZLG9DQUFaO0FBQ0FELGtDQUFRQyxHQUFSLENBQVlSLE1BQVo7QUFDRDs7QUFKcUIsNEJBTWpCRixPQU5pQjtBQUFBO0FBQUE7QUFBQTs7QUFPcEJBLGtDQUFVLElBQVYsQ0FQb0IsQ0FRcEI7O0FBUm9CO0FBQUEsK0JBU2RXLGlCQUFHQyxNQUFILENBQVVWLE9BQU9XLEtBQVAsQ0FBYUMsSUFBdkIsQ0FUYzs7QUFBQTtBQUFBO0FBQUEsK0JBYUNaLE9BQU9hLFdBQVAsQ0FBbUI7QUFBRUMsK0JBQUs7QUFBUCx5QkFBbkIsQ0FiRDs7QUFBQTtBQWFoQkMsZ0NBYmdCO0FBZXRCO0FBQ01DLGlDQWhCZ0IsR0FnQkpoQixPQUFPaUIsUUFBUCxJQUFtQkMsK0JBaEJmOztBQUFBLDRCQWtCakJuQixZQWxCaUI7QUFBQTtBQUFBO0FBQUE7O0FBbUJwQkEsdUNBQWUsSUFBZixDQW5Cb0IsQ0FvQnBCOztBQXBCb0I7QUFBQSwrQkFxQmQsdUNBQTJCO0FBQy9CQyx3Q0FEK0I7QUFFL0JnQiw4Q0FGK0I7QUFHL0JEO0FBSCtCLHlCQUEzQixDQXJCYzs7QUFBQTtBQUFBO0FBQUEsK0JBNEJoQiwyQkFBYztBQUFFZix3Q0FBRjtBQUFVbUIsZ0NBQU07QUFBRUwsaUNBQUs7QUFBUDtBQUFoQix5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBQStDLGlCQUFNZCxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkQsaUVBRG1ELENBR25EOztBQUhtRDtBQUFBLDJDQUk3Qyw2QkFBZTtBQUFFQTtBQUFGLHFDQUFmLENBSjZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUEvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkE1QmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRROztBQUFBO0FBQUE7QUFBQSxtQkE2Q1IsSUFBSW9CLE9BQUosQ0FBWSxZQUFNLENBRXZCLENBRkssQ0E3Q1E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWVDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUgzQnZCLE87MEJBQ0FDLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG4vL1xuaW1wb3J0IHsgcHJlcGFyZVJvdXRlcyB9IGZyb20gJy4uL3N0YXRpYydcbmltcG9ydCB7IERlZmF1bHREb2N1bWVudCB9IGZyb20gJy4uL3N0YXRpYy9Sb290Q29tcG9uZW50cydcbmltcG9ydCB7IHN0YXJ0RGV2U2VydmVyLCByZWxvYWRSb3V0ZXMgfSBmcm9tICcuLi9zdGF0aWMvd2VicGFjaydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnLi4vc3RhdGljL2dldENvbmZpZydcbmltcG9ydCB7IGNyZWF0ZUluZGV4RmlsZVBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vdXRpbHMnXG4vL1xuXG5sZXQgY2xlYW5lZFxubGV0IGluZGV4Q3JlYXRlZFxuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gc3RhcnQoeyBjb25maWcsIGRlYnVnIH0gPSB7fSkge1xuICAvLyBlbnN1cmUgRU5WIHZhcmlhYmxlcyBhcmUgc2V0XG4gIGlmICh0eXBlb2YgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAnZGV2ZWxvcG1lbnQnXG4gIH1cbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9ICdkZXZlbG9wbWVudCdcbiAgcHJvY2Vzcy5lbnYuQkFCRUxfRU5WID0gJ2RldmVsb3BtZW50J1xuXG4gIC8vIFVzZSBjYWxsYmFjayBzdHlsZSB0byBzdWJzY3JpYmUgdG8gY2hhbmdlc1xuICBhd2FpdCBnZXRDb25maWcoY29uZmlnLCBhc3luYyBjb25maWcgPT4ge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ0RFQlVHIC0gUmVzb2x2ZWQgc3RhdGljLmNvbmZpZy5qczonKVxuICAgICAgY29uc29sZS5sb2coY29uZmlnKVxuICAgIH1cblxuICAgIGlmICghY2xlYW5lZCkge1xuICAgICAgY2xlYW5lZCA9IHRydWVcbiAgICAgIC8vIENsZWFuIHRoZSBkaXN0IGZvbGRlclxuICAgICAgYXdhaXQgZnMucmVtb3ZlKGNvbmZpZy5wYXRocy5ESVNUKVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgc2l0ZSBwcm9wc1xuICAgIGNvbnN0IHNpdGVEYXRhID0gYXdhaXQgY29uZmlnLmdldFNpdGVEYXRhKHsgZGV2OiB0cnVlIH0pXG5cbiAgICAvLyBSZXNvbHZlIHRoZSBiYXNlIEhUTUwgdGVtcGxhdGVcbiAgICBjb25zdCBDb21wb25lbnQgPSBjb25maWcuRG9jdW1lbnQgfHwgRGVmYXVsdERvY3VtZW50XG5cbiAgICBpZiAoIWluZGV4Q3JlYXRlZCkge1xuICAgICAgaW5kZXhDcmVhdGVkID0gdHJ1ZVxuICAgICAgLy8gUmVuZGVyIGFuIGluZGV4Lmh0bWwgcGxhY2Vob2xkZXJcbiAgICAgIGF3YWl0IGNyZWF0ZUluZGV4RmlsZVBsYWNlaG9sZGVyKHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHNpdGVEYXRhLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhd2FpdCBwcmVwYXJlUm91dGVzKHsgY29uZmlnLCBvcHRzOiB7IGRldjogdHJ1ZSB9IH0sIGFzeW5jIGNvbmZpZyA9PiB7XG4gICAgICByZWxvYWRSb3V0ZXMoKVxuXG4gICAgICAvLyBCdWlsZCB0aGUgSlMgYnVuZGxlXG4gICAgICBhd2FpdCBzdGFydERldlNlcnZlcih7IGNvbmZpZyB9KVxuICAgIH0pXG4gIH0pXG5cbiAgYXdhaXQgbmV3IFByb21pc2UoKCkgPT4ge1xuICAgIC8vIERvIG5vdGhpbmcsIHRoZSB1c2VyIG11c3QgZXhpdCB0aGlzIGNvbW1hbmRcbiAgfSlcbn0pXG4iXX0=