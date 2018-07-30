"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyPublicFolder = copyPublicFolder;
exports.createIndexFilePlaceholder = createIndexFilePlaceholder;
exports.isArray = isArray;
exports.isObject = isObject;
exports.glob = glob;
exports.time = time;
exports.timeEnd = timeEnd;
exports.debounce = debounce;
exports.getConfigPluginHooks = getConfigPluginHooks;
Object.defineProperty(exports, "progress", {
  enumerable: true,
  get: function get() {
    return _progress.default;
  }
});
exports.findAvailablePort = exports.ChalkColor = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _openport = _interopRequireDefault(require("openport"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _glob = _interopRequireDefault(require("glob"));

var _perf_hooks = require("perf_hooks");

var _RootComponents = require("../static/RootComponents");

var _progress = _interopRequireDefault(require("./progress"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/utils/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ChalkColor = {
  yarn: '#2c8ebb',
  npm: '#cb3837'
};
exports.ChalkColor = ChalkColor;

var findAvailablePort = function findAvailablePort(start) {
  var avoid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return new Promise(function (resolve, reject) {
    return _openport.default.find({
      startingPort: start,
      endingPort: start + 1000,
      avoid: avoid
    }, function (err, port) {
      if (err) {
        return reject(err);
      }

      resolve(port);
    });
  });
};

exports.findAvailablePort = findAvailablePort;

function copyPublicFolder(config) {
  _fsExtra.default.ensureDirSync(config.paths.PUBLIC);

  _fsExtra.default.copySync(config.paths.PUBLIC, config.paths.DIST, {
    dereference: true,
    filter: function filter(file) {
      return file !== config.paths.INDEX;
    }
  });
}

function createIndexFilePlaceholder(_x) {
  return _createIndexFilePlaceholder.apply(this, arguments);
}

function _createIndexFilePlaceholder() {
  _createIndexFilePlaceholder = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var config, Component, siteData, DocumentHtml, html;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref.config, Component = _ref.Component, siteData = _ref.siteData;
            // Render the base document component to string with siteprops
            DocumentHtml = (0, _server.renderToString)(_react.default.createElement(Component, {
              renderMeta: {},
              Html: _RootComponents.Html,
              Head: _RootComponents.Head,
              Body: _RootComponents.Body,
              siteData: siteData,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            }, _react.default.createElement("div", {
              id: "root",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            })));
            html = "<!DOCTYPE html>".concat(DocumentHtml); // Write the Document to index.html

            _context.next = 5;
            return _fsExtra.default.outputFile(config.paths.HTML_TEMPLATE, html);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _createIndexFilePlaceholder.apply(this, arguments);
}

function isArray(a) {
  return Array.isArray(a);
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function glob(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    return (0, _glob.default)(path, options, function (err, files) {
      if (err) {
        return reject(err);
      }

      resolve(files);
    });
  });
}

var times = {};

function time(message) {
  times[message] = _perf_hooks.performance.now() / 1000;
}

function timeEnd(message) {
  if (times[message]) {
    console.log("".concat(message, " (").concat(Math.round((_perf_hooks.performance.now() / 1000 - times[message]) * 10) / 10, "s)"));
    times[message] = null;
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(void 0, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(void 0, args);
  };
}

function getConfigPluginHooks(config, hook) {
  return _toConsumableArray((config.plugins || []).map(function (plugin) {
    return plugin[hook];
  })).concat([config[hook]]).filter(Boolean);
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChalkColor, "ChalkColor", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(findAvailablePort, "findAvailablePort", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(copyPublicFolder, "copyPublicFolder", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(createIndexFilePlaceholder, "createIndexFilePlaceholder", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(isArray, "isArray", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(glob, "glob", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(times, "times", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(time, "time", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(timeEnd, "timeEnd", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(debounce, "debounce", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  reactHotLoader.register(getConfigPluginHooks, "getConfigPluginHooks", "/home/daniel/flattenedmonad/react-static/src/utils/index.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFsa0NvbG9yIiwieWFybiIsIm5wbSIsImZpbmRBdmFpbGFibGVQb3J0Iiwic3RhcnQiLCJhdm9pZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiT3BlblBvcnQiLCJmaW5kIiwic3RhcnRpbmdQb3J0IiwiZW5kaW5nUG9ydCIsImVyciIsInBvcnQiLCJjb3B5UHVibGljRm9sZGVyIiwiY29uZmlnIiwiZnMiLCJlbnN1cmVEaXJTeW5jIiwicGF0aHMiLCJQVUJMSUMiLCJjb3B5U3luYyIsIkRJU1QiLCJkZXJlZmVyZW5jZSIsImZpbHRlciIsImZpbGUiLCJJTkRFWCIsImNyZWF0ZUluZGV4RmlsZVBsYWNlaG9sZGVyIiwiQ29tcG9uZW50Iiwic2l0ZURhdGEiLCJEb2N1bWVudEh0bWwiLCJIdG1sIiwiSGVhZCIsIkJvZHkiLCJodG1sIiwib3V0cHV0RmlsZSIsIkhUTUxfVEVNUExBVEUiLCJpc0FycmF5IiwiYSIsIkFycmF5IiwiaXNPYmplY3QiLCJnbG9iIiwicGF0aCIsIm9wdGlvbnMiLCJmaWxlcyIsInRpbWVzIiwidGltZSIsIm1lc3NhZ2UiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVFbmQiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsInJvdW5kIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJhcmdzIiwibGF0ZXIiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdldENvbmZpZ1BsdWdpbkhvb2tzIiwiaG9vayIsInBsdWdpbnMiLCJtYXAiLCJwbHVnaW4iLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxhQUFhO0FB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VUMsSTswQkFHQUksTzswQkFXQUssUTswQkFjQVUsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlLCByZWFjdC9uby1kYW5nZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBPcGVuUG9ydCBmcm9tICdvcGVucG9ydCdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBub2RlR2xvYiBmcm9tICdnbG9iJ1xuaW1wb3J0IHsgcGVyZm9ybWFuY2UgfSBmcm9tICdwZXJmX2hvb2tzJ1xuLy9cbmltcG9ydCB7IEh0bWwsIEhlYWQsIEJvZHkgfSBmcm9tICcuLi9zdGF0aWMvUm9vdENvbXBvbmVudHMnXG5cbi8vXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvZ3Jlc3MgfSBmcm9tICcuL3Byb2dyZXNzJ1xuZXhwb3J0IGNvbnN0IENoYWxrQ29sb3IgPSB7XG4gIHlhcm46ICcjMmM4ZWJiJyxcbiAgbnBtOiAnI2NiMzgzNycsXG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQXZhaWxhYmxlUG9ydCA9IChzdGFydCwgYXZvaWQgPSBbXSkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBPcGVuUG9ydC5maW5kKFxuICAgICAge1xuICAgICAgICBzdGFydGluZ1BvcnQ6IHN0YXJ0LFxuICAgICAgICBlbmRpbmdQb3J0OiBzdGFydCArIDEwMDAsXG4gICAgICAgIGF2b2lkLFxuICAgICAgfSxcbiAgICAgIChlcnIsIHBvcnQpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocG9ydClcbiAgICAgIH1cbiAgICApXG4gIClcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlQdWJsaWNGb2xkZXIoY29uZmlnKSB7XG4gIGZzLmVuc3VyZURpclN5bmMoY29uZmlnLnBhdGhzLlBVQkxJQylcblxuICBmcy5jb3B5U3luYyhjb25maWcucGF0aHMuUFVCTElDLCBjb25maWcucGF0aHMuRElTVCwge1xuICAgIGRlcmVmZXJlbmNlOiB0cnVlLFxuICAgIGZpbHRlcjogZmlsZSA9PiBmaWxlICE9PSBjb25maWcucGF0aHMuSU5ERVgsXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmRleEZpbGVQbGFjZWhvbGRlcih7XG4gIGNvbmZpZyxcbiAgQ29tcG9uZW50LFxuICBzaXRlRGF0YSxcbn0pIHtcbiAgLy8gUmVuZGVyIHRoZSBiYXNlIGRvY3VtZW50IGNvbXBvbmVudCB0byBzdHJpbmcgd2l0aCBzaXRlcHJvcHNcbiAgY29uc3QgRG9jdW1lbnRIdG1sID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPENvbXBvbmVudFxuICAgICAgcmVuZGVyTWV0YT17e319XG4gICAgICBIdG1sPXtIdG1sfVxuICAgICAgSGVhZD17SGVhZH1cbiAgICAgIEJvZHk9e0JvZHl9XG4gICAgICBzaXRlRGF0YT17c2l0ZURhdGF9XG4gICAgPlxuICAgICAgPGRpdiBpZD1cInJvb3RcIiAvPlxuICAgIDwvQ29tcG9uZW50PlxuICApXG4gIGNvbnN0IGh0bWwgPSBgPCFET0NUWVBFIGh0bWw+JHtEb2N1bWVudEh0bWx9YFxuXG4gIC8vIFdyaXRlIHRoZSBEb2N1bWVudCB0byBpbmRleC5odG1sXG4gIGF3YWl0IGZzLm91dHB1dEZpbGUoY29uZmlnLnBhdGhzLkhUTUxfVEVNUExBVEUsIGh0bWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGEpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KGEpICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiBhICE9PSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbG9iKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBub2RlR2xvYihwYXRoLCBvcHRpb25zLCAoZXJyLCBmaWxlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgfSlcbiAgKVxufVxuXG5jb25zdCB0aW1lcyA9IHt9XG5leHBvcnQgZnVuY3Rpb24gdGltZShtZXNzYWdlKSB7XG4gIHRpbWVzW21lc3NhZ2VdID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwXG59XG5leHBvcnQgZnVuY3Rpb24gdGltZUVuZChtZXNzYWdlKSB7XG4gIGlmICh0aW1lc1ttZXNzYWdlXSkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYCR7bWVzc2FnZX0gKCR7TWF0aC5yb3VuZChcbiAgICAgICAgKHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCAtIHRpbWVzW21lc3NhZ2VdKSAqIDEwXG4gICAgICApIC8gMTB9cylgXG4gICAgKVxuICAgIHRpbWVzW21lc3NhZ2VdID0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMoLi4uYXJncylcbiAgICB9XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICAgIGlmIChjYWxsTm93KSBmdW5jKC4uLmFyZ3MpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ1BsdWdpbkhvb2tzKGNvbmZpZywgaG9vaykge1xuICByZXR1cm4gW1xuICAgIC4uLihjb25maWcucGx1Z2lucyB8fCBbXSkubWFwKHBsdWdpbiA9PiBwbHVnaW5baG9va10pLFxuICAgIGNvbmZpZ1tob29rXSxcbiAgXS5maWx0ZXIoQm9vbGVhbilcbn1cbiJdfQ==