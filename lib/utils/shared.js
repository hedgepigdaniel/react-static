"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.cleanPath = cleanPath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _swimmer = require("swimmer");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        scheme = _string$split2[0],
        path = _string$split2[1];

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
}

function cleanPath(path) {
  // Resolve the local path
  if (!path || path === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    path = path.replace(window.location.origin, '');
    path = path.replace(/#.*/, '');
    path = path.replace(/\?.*/, '');
  }

  if (process.env.REACT_STATIC_BASE_PATH) {
    path = path.replace(new RegExp("^\\/?".concat(process.env.REACT_STATIC_BASE_PATH, "\\/")), '');
  }

  path = path || '/';
  return pathJoin(path);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(cleanPath, "cleanPath", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(isObject, "isObject", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(deprecate, "deprecate", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/home/daniel/flattenedmonad/react-static/src/utils/shared.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zaGFyZWQuanMiXSwibmFtZXMiOlsiUkVHRVhfVE9fQ1VUX1RPX1JPT1QiLCJSRUdFWF9UT19SRU1PVkVfTEVBRElOR19TTEFTSCIsIlJFR0VYX1RPX1JFTU9WRV9UUkFJTElOR19TTEFTSCIsIlJFR0VYX1RPX1JFTU9WRV9ET1VCTEVfU0xBU0giLCJjdXRQYXRoVG9Sb290Iiwic3RyaW5nIiwicmVwbGFjZSIsInRyaW1MZWFkaW5nU2xhc2hlcyIsInRyaW1UcmFpbGluZ1NsYXNoZXMiLCJ0cmltRG91YmxlU2xhc2hlcyIsImlzQWJzb2x1dGVVcmwiLCJzcGxpdCIsInNjaGVtZSIsInBhdGgiLCJqb2luIiwiY2xlYW5TbGFzaGVzIiwib3B0aW9ucyIsImxlYWRpbmciLCJ0cmFpbGluZyIsImRvdWJsZSIsImNsZWFuZWRTdHJpbmciLCJwYXRoSm9pbiIsInBhdGhzIiwibmV3UGF0aCIsIm1hcCIsImluY2x1ZGVzIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNsZWFuUGF0aCIsImRvY3VtZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCIsIlJlZ0V4cCIsInVud3JhcEFycmF5IiwiYXJnIiwiZGVmYXVsdFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNPYmplY3QiLCJhIiwiZGVwcmVjYXRlIiwiZnJvbSIsInRvIiwiY29uc29sZSIsIndhcm4iLCJ1cmwiLCJ0ZXN0IiwibWFrZVBhdGhBYnNvbHV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLGNBQTdCO0FBQ0EsSUFBTUMsZ0NBQWdDLFVBQXRDO0FBQ0EsSUFBTUMsaUNBQWlDLFVBQXZDO0FBQ0EsSUFBTUMsK0JBQStCLFNBQXJDOztBQUVPLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFB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Q0FBUDtBQUNEOztBQUVNLFNBQVNFLGdCQUFULENBQTBCdEMsSUFBMUIsRUFBZ0M7QUFDckMsTUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFdBQU8sR0FBUDtBQUNEOztBQUVELE1BQUlILGNBQWNHLElBQWQsQ0FBSixFQUF5QjtBQUN2QixXQUFPQSxJQUFQO0FBQ0Q7O0FBRUQsb0JBQVdOLG1CQUFtQk0sSUFBbkIsQ0FBWDtBQUNEOzs7Ozs7Ozs7Ozs7OzBCQW5IS2Isb0I7MEJBQ0FDLDZCOzBCQUNBQyw4QjswQkFDQUMsNEI7MEJBRU9DLGE7MEJBR0FHLGtCOzBCQUdBQyxtQjswQkFHQUMsaUI7MEJBVUFNLFk7MEJBcUJHTSxROzBCQWFBTyxTOzBCQXFCQVMsVzswQkFRQUssUTswQkFJQUUsUzswQkFNQWxDLGE7MEJBUUF5QyxnQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHBvb2xBbGwsIGNyZWF0ZVBvb2wgfSBmcm9tICdzd2ltbWVyJ1xuXG5jb25zdCBSRUdFWF9UT19DVVRfVE9fUk9PVCA9IC8oXFwuLis/KVxcLy4qL2dcbmNvbnN0IFJFR0VYX1RPX1JFTU9WRV9MRUFESU5HX1NMQVNIID0gL15cXC97MSx9L2dcbmNvbnN0IFJFR0VYX1RPX1JFTU9WRV9UUkFJTElOR19TTEFTSCA9IC9cXC97MSx9JC9nXG5jb25zdCBSRUdFWF9UT19SRU1PVkVfRE9VQkxFX1NMQVNIID0gL1xcL3syLH0vZ1xuXG5leHBvcnQgY29uc3QgY3V0UGF0aFRvUm9vdCA9IChzdHJpbmcgPSAnJykgPT5cbiAgc3RyaW5nLnJlcGxhY2UoUkVHRVhfVE9fQ1VUX1RPX1JPT1QsICckMScpXG5cbmV4cG9ydCBjb25zdCB0cmltTGVhZGluZ1NsYXNoZXMgPSAoc3RyaW5nID0gJycpID0+XG4gIHN0cmluZy5yZXBsYWNlKFJFR0VYX1RPX1JFTU9WRV9MRUFESU5HX1NMQVNILCAnJylcblxuZXhwb3J0IGNvbnN0IHRyaW1UcmFpbGluZ1NsYXNoZXMgPSAoc3RyaW5nID0gJycpID0+XG4gIHN0cmluZy5yZXBsYWNlKFJFR0VYX1RPX1JFTU9WRV9UUkFJTElOR19TTEFTSCwgJycpXG5cbmV4cG9ydCBjb25zdCB0cmltRG91YmxlU2xhc2hlcyA9IChzdHJpbmcgPSAnJykgPT4ge1xuICBpZiAoaXNBYnNvbHV0ZVVybChzdHJpbmcpKSB7XG4gICAgY29uc3QgW3NjaGVtZSwgcGF0aF0gPSBzdHJpbmcuc3BsaXQoJzovLycpXG5cbiAgICByZXR1cm4gW3NjaGVtZSwgcGF0aC5yZXBsYWNlKFJFR0VYX1RPX1JFTU9WRV9ET1VCTEVfU0xBU0gsICcvJyldLmpvaW4oJzovLycpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoUkVHRVhfVE9fUkVNT1ZFX0RPVUJMRV9TTEFTSCwgJy8nKVxufVxuXG5leHBvcnQgY29uc3QgY2xlYW5TbGFzaGVzID0gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICghc3RyaW5nKSByZXR1cm4gJydcblxuICBjb25zdCB7IGxlYWRpbmcgPSB0cnVlLCB0cmFpbGluZyA9IHRydWUsIGRvdWJsZSA9IHRydWUgfSA9IG9wdGlvbnNcbiAgbGV0IGNsZWFuZWRTdHJpbmcgPSBzdHJpbmdcblxuICBpZiAobGVhZGluZykge1xuICAgIGNsZWFuZWRTdHJpbmcgPSB0cmltTGVhZGluZ1NsYXNoZXMoY2xlYW5lZFN0cmluZylcbiAgfVxuXG4gIGlmICh0cmFpbGluZykge1xuICAgIGNsZWFuZWRTdHJpbmcgPSB0cmltVHJhaWxpbmdTbGFzaGVzKGNsZWFuZWRTdHJpbmcpXG4gIH1cblxuICBpZiAoZG91YmxlKSB7XG4gICAgY2xlYW5lZFN0cmluZyA9IHRyaW1Eb3VibGVTbGFzaGVzKGNsZWFuZWRTdHJpbmcpXG4gIH1cblxuICByZXR1cm4gY2xlYW5lZFN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aEpvaW4oLi4ucGF0aHMpIHtcbiAgbGV0IG5ld1BhdGggPSBwYXRocy5tYXAoY2xlYW5TbGFzaGVzKS5qb2luKCcvJylcbiAgaWYgKCFuZXdQYXRoIHx8IG5ld1BhdGggPT09ICcvJykge1xuICAgIHJldHVybiAnLydcbiAgfVxuXG4gIG5ld1BhdGggPSBjbGVhblNsYXNoZXMobmV3UGF0aClcbiAgaWYgKG5ld1BhdGguaW5jbHVkZXMoJz8nKSkge1xuICAgIG5ld1BhdGggPSBuZXdQYXRoLnN1YnN0cmluZygwLCBuZXdQYXRoLmluZGV4T2YoJz8nKSlcbiAgfVxuICByZXR1cm4gbmV3UGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5QYXRoKHBhdGgpIHtcbiAgLy8gUmVzb2x2ZSB0aGUgbG9jYWwgcGF0aFxuICBpZiAoIXBhdGggfHwgcGF0aCA9PT0gJy8nKSB7XG4gICAgcmV0dXJuICcvJ1xuICB9XG4gIC8vIFJlbW92ZSBvcmlnaW4sIGhhc2hlcywgYW5kIHF1ZXJ5IHBhcmFtc1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbiwgJycpXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvIy4qLywgJycpXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFw/LiovLCAnJylcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoXG4gICAgICBuZXcgUmVnRXhwKGBeXFxcXC8/JHtwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQkFTRV9QQVRIfVxcXFwvYCksXG4gICAgICAnJ1xuICAgIClcbiAgfVxuICBwYXRoID0gcGF0aCB8fCAnLydcbiAgcmV0dXJuIHBhdGhKb2luKHBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBBcnJheShhcmcsIGRlZmF1bHRWYWx1ZSkge1xuICBhcmcgPSBBcnJheS5pc0FycmF5KGFyZykgPyBhcmdbMF0gOiBhcmdcbiAgaWYgKCFhcmcgJiYgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG4gIHJldHVybiBhcmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGEpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KGEpICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiBhICE9PSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGUoZnJvbSwgdG8pIHtcbiAgY29uc29sZS53YXJuKFxuICAgIGBSZWFjdC1TdGF0aWMgZGVwcmVjYXRpb24gbm90aWNlOiAke2Zyb219IHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAke3RvfSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLmBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVybCh1cmwpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gL15bYS16XVthLXowLTkrLi1dKjovLnRlc3QodXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhdGhBYnNvbHV0ZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gJy8nXG4gIH1cblxuICBpZiAoaXNBYnNvbHV0ZVVybChwYXRoKSkge1xuICAgIHJldHVybiBwYXRoXG4gIH1cblxuICByZXR1cm4gYC8ke3RyaW1MZWFkaW5nU2xhc2hlcyhwYXRoKX1gXG59XG4iXX0=