"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.generateXML = exports.makeGenerateRouteXML = exports.getPermaLink = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _shared = require("../utils/shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var REGEX_TO_GET_LAST_SLASH = /\/{1,}$/gm;

var getPermaLink = function getPermaLink(_ref) {
  var path = _ref.path,
      prefixPath = _ref.prefixPath;
  var permalink = "".concat(prefixPath).concat((0, _shared.pathJoin)(path));
  return "".concat(permalink, "/").replace(REGEX_TO_GET_LAST_SLASH, '/');
};

exports.getPermaLink = getPermaLink;

var makeGenerateRouteXML = function makeGenerateRouteXML(_ref2) {
  var prefixPath = _ref2.prefixPath;
  return function (route) {
    var path = route.path,
        lastModified = route.lastModified,
        _route$priority = route.priority,
        priority = _route$priority === void 0 ? 0.5 : _route$priority;
    return ['<url>', "<loc>".concat(getPermaLink({
      path: path,
      prefixPath: prefixPath
    }).replace(/[<>&'"]/g, function (c) {
      switch (c) {
        case '<':
          return '&lt;';

        case '>':
          return '&gt;';

        case '&':
          return '&amp;';

        case "'":
          return '&apos;';

        case '"':
          return '&quot;';

        default:
          throw new Error('XML encoding failed');
      }
    }), "</loc>"), lastModified ? "<lastmod>".concat(lastModified, "</lastmod>") : '', "<priority>".concat(priority, "</priority>"), '</url>'].join('');
  };
};

exports.makeGenerateRouteXML = makeGenerateRouteXML;

var generateXML = function generateXML(_ref3) {
  var routes = _ref3.routes,
      prefixPath = _ref3.prefixPath;
  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">".concat(routes.filter(function (r) {
    return r.path !== '404';
  }).filter(function (r) {
    return !r.noindex;
  }).map(makeGenerateRouteXML({
    prefixPath: prefixPath
  })).join(''), "</urlset>");
};

exports.generateXML = generateXML;

var _default =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref4) {
    var config, routes, _config$paths, paths, disableRoutePrefixing, DIST, prefixPath, xml;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref4.config;
            routes = config.routes, _config$paths = config.paths, paths = _config$paths === void 0 ? {} : _config$paths, disableRoutePrefixing = config.disableRoutePrefixing;
            DIST = paths.DIST;
            prefixPath = disableRoutePrefixing ? config.siteRoot : process.env.REACT_STATIC_PUBLIC_PATH;

            if (config.siteRoot) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            xml = generateXML({
              routes: routes,
              prefixPath: prefixPath
            });
            _context.next = 9;
            return _fsExtra.default.writeFile(_path.default.join(DIST, 'sitemap.xml'), xml);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function _default(_x) {
    return _ref5.apply(this, arguments);
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

  reactHotLoader.register(REGEX_TO_GET_LAST_SLASH, "REGEX_TO_GET_LAST_SLASH", "/home/daniel/flattenedmonad/react-static/src/static/buildXML.js");
  reactHotLoader.register(getPermaLink, "getPermaLink", "/home/daniel/flattenedmonad/react-static/src/static/buildXML.js");
  reactHotLoader.register(makeGenerateRouteXML, "makeGenerateRouteXML", "/home/daniel/flattenedmonad/react-static/src/static/buildXML.js");
  reactHotLoader.register(generateXML, "generateXML", "/home/daniel/flattenedmonad/react-static/src/static/buildXML.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/buildXML.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvYnVpbGRYTUwuanMiXSwibmFtZXMiOlsiUkVHRVhfVE9fR0VUX0xBU1RfU0xBU0giLCJnZXRQZXJtYUxpbmsiLCJwYXRoIiwicHJlZml4UGF0aCIsInBlcm1hbGluayIsInJlcGxhY2UiLCJtYWtlR2VuZXJhdGVSb3V0ZVhNTCIsInJvdXRlIiwibGFzdE1vZGlmaWVkIiwicHJpb3JpdHkiLCJjIiwiRXJyb3IiLCJqb2luIiwiZ2VuZXJhdGVYTUwiLCJyb3V0ZXMiLCJmaWx0ZXIiLCJyIiwibm9pbmRleCIsIm1hcCIsImNvbmZpZyIsInBhdGhzIiwiZGlzYWJsZVJvdXRlUHJlZml4aW5nIiwiRElTVCIsInNpdGVSb290IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSCIsInhtbCIsImZzIiwid3JpdGVGaWxlIiwibm9kZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLDBCQUEwQixXQUFoQzs7QUFFTyxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsT0FBMEI7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNwRCxNQUFNQyxzQkFBZUQsVUFBZixTQUE0QixzQkFBU0QsSUFBVCxDQUE1QixDQUFOO0FBQ0EsU0FBTyxVQUFHRSxTQUFILE9BQWdCQyxPQUFoQixDQUF3QkwsdUJBQXhCLEVBQWlELEdBQWpELENBQVA7QUFDRCxDQUhNOzs7O0FBS0EsSUFBTU0sdUJBQXVCLFNBQXZCQSxvQkFBdUI7QUFBQSxNQUFHSCxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUFvQixpQkFBUztBQUFBLFFBQ3ZERCxJQUR1RCxHQUNoQkssS0FEZ0IsQ0FDdkRMLElBRHVEO0FBQUEsUUFDakRNLFlBRGlELEdBQ2hCRCxLQURnQixDQUNqREMsWUFEaUQ7QUFBQSwwQkFDaEJELEtBRGdCLENBQ25DRSxRQURtQztBQUFBLFFBQ25DQSxRQURtQyxnQ0FDeEIsR0FEd0I7QUFFL0QsV0FBTyxDQUNMLE9BREssaUJBRUdSLGFBQWE7QUFBRUMsZ0JBQUY7QUFBUUM7QUFBUixLQUFiLEVBQW1DRSxPQUFuQyxDQUEyQyxVQUEzQyxFQUF1RCxhQUFLO0FBQ2xFLGNBQVFLLENBQVI7QUFDRSxhQUFLLEdBQUw7QUFDRSxpQkFBTyxNQUFQOztBQUNGLGFBQUssR0FBTDtBQUNFLGlCQUFPLE1BQVA7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sT0FBUDs7QUFDRixhQUFLLEdBQUw7QUFDRSxpQkFBTyxRQUFQOztBQUNGLGFBQUssR0FBTDtBQUNFLGlCQUFPLFFBQVA7O0FBQ0Y7QUFDRSxnQkFBTSxJQUFJQyxLQUFKLENBQVUscUJBQVYsQ0FBTjtBQVpKO0FBY0QsS0FmTyxDQUZILGFBa0JMSCxrQ0FBMkJBLFlBQTNCLGtCQUFzRCxFQWxCakQsc0JBbUJRQyxRQW5CUixrQkFvQkwsUUFwQkssRUFxQkxHLElBckJLLENBcUJBLEVBckJBLENBQVA7QUFzQkQsR0F4Qm1DO0FBQUEsQ0FBN0I7Ozs7QUEwQkEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV1gsVUFBWCxTQUFXQSxVQUFYO0FBQUEsMkhBQzRFVyxPQUNsR0MsTUFEa0csQ0FDM0Y7QUFBQSxXQUFLQyxFQUFFZCxJQUFGLEtBQVcsS0FBaEI7QUFBQSxHQUQyRixFQUVsR2EsTUFGa0csQ0FFM0Y7QUFBQSxXQUFLLENBQUNDLEVBQUVDLE9BQVI7QUFBQSxHQUYyRixFQUdsR0MsR0FIa0csQ0FHOUZaLHFCQUFxQjtBQUFFSDtBQUFGLEdBQXJCLENBSDhGLEVBSWxHUyxJQUprRyxDQUk3RixFQUo2RixDQUQ1RTtBQUFBLENBQXBCOzs7Ozs7Ozs7NEJBT1E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTTyxrQkFBVCxTQUFTQSxNQUFUO0FBQ0xMLGtCQURLLEdBQ3lDSyxNQUR6QyxDQUNMTCxNQURLLGtCQUN5Q0ssTUFEekMsQ0FDR0MsS0FESCxFQUNHQSxLQURILDhCQUNXLEVBRFgsa0JBQ2VDLHFCQURmLEdBQ3lDRixNQUR6QyxDQUNlRSxxQkFEZjtBQUdMQyxnQkFISyxHQUdJRixLQUhKLENBR0xFLElBSEs7QUFJUG5CLHNCQUpPLEdBSU1rQix3QkFDZkYsT0FBT0ksUUFEUSxHQUVmQyxRQUFRQyxHQUFSLENBQVlDLHdCQU5IOztBQUFBLGdCQVFSUCxPQUFPSSxRQVJDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBWVBJLGVBWk8sR0FZRGQsWUFBWTtBQUFFQyw0QkFBRjtBQUFVWDtBQUFWLGFBQVosQ0FaQztBQUFBO0FBQUEsbUJBY1B5QixpQkFBR0MsU0FBSCxDQUFhQyxjQUFTbEIsSUFBVCxDQUFjVSxJQUFkLEVBQW9CLGFBQXBCLENBQWIsRUFBaURLLEdBQWpELENBZE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBeENUM0IsdUI7MEJBRU9DLFk7MEJBS0FLLG9COzBCQTBCQU8sVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBub2RlUGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgeyBwYXRoSm9pbiB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZCdcblxuY29uc3QgUkVHRVhfVE9fR0VUX0xBU1RfU0xBU0ggPSAvXFwvezEsfSQvZ21cblxuZXhwb3J0IGNvbnN0IGdldFBlcm1hTGluayA9ICh7IHBhdGgsIHByZWZpeFBhdGggfSkgPT4ge1xuICBjb25zdCBwZXJtYWxpbmsgPSBgJHtwcmVmaXhQYXRofSR7cGF0aEpvaW4ocGF0aCl9YFxuICByZXR1cm4gYCR7cGVybWFsaW5rfS9gLnJlcGxhY2UoUkVHRVhfVE9fR0VUX0xBU1RfU0xBU0gsICcvJylcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VHZW5lcmF0ZVJvdXRlWE1MID0gKHsgcHJlZml4UGF0aCB9KSA9PiByb3V0ZSA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgbGFzdE1vZGlmaWVkLCBwcmlvcml0eSA9IDAuNSB9ID0gcm91dGVcbiAgcmV0dXJuIFtcbiAgICAnPHVybD4nLFxuICAgIGA8bG9jPiR7Z2V0UGVybWFMaW5rKHsgcGF0aCwgcHJlZml4UGF0aCB9KS5yZXBsYWNlKC9bPD4mJ1wiXS9nLCBjID0+IHtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICByZXR1cm4gJyZsdDsnXG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIHJldHVybiAnJmd0OydcbiAgICAgICAgY2FzZSAnJic6XG4gICAgICAgICAgcmV0dXJuICcmYW1wOydcbiAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICByZXR1cm4gJyZhcG9zOydcbiAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgIHJldHVybiAnJnF1b3Q7J1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWE1MIGVuY29kaW5nIGZhaWxlZCcpXG4gICAgICB9XG4gICAgfSl9PC9sb2M+YCxcbiAgICBsYXN0TW9kaWZpZWQgPyBgPGxhc3Rtb2Q+JHtsYXN0TW9kaWZpZWR9PC9sYXN0bW9kPmAgOiAnJyxcbiAgICBgPHByaW9yaXR5PiR7cHJpb3JpdHl9PC9wcmlvcml0eT5gLFxuICAgICc8L3VybD4nLFxuICBdLmpvaW4oJycpXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVhNTCA9ICh7IHJvdXRlcywgcHJlZml4UGF0aCB9KSA9PlxuICBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj4ke3JvdXRlc1xuICAgIC5maWx0ZXIociA9PiByLnBhdGggIT09ICc0MDQnKVxuICAgIC5maWx0ZXIociA9PiAhci5ub2luZGV4KVxuICAgIC5tYXAobWFrZUdlbmVyYXRlUm91dGVYTUwoeyBwcmVmaXhQYXRoIH0pKVxuICAgIC5qb2luKCcnKX08L3VybHNldD5gXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHsgcm91dGVzLCBwYXRocyA9IHt9LCBkaXNhYmxlUm91dGVQcmVmaXhpbmcgfSA9IGNvbmZpZ1xuXG4gIGNvbnN0IHsgRElTVCB9ID0gcGF0aHNcbiAgY29uc3QgcHJlZml4UGF0aCA9IGRpc2FibGVSb3V0ZVByZWZpeGluZ1xuICAgID8gY29uZmlnLnNpdGVSb290XG4gICAgOiBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFVCTElDX1BBVEhcblxuICBpZiAoIWNvbmZpZy5zaXRlUm9vdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgeG1sID0gZ2VuZXJhdGVYTUwoeyByb3V0ZXMsIHByZWZpeFBhdGggfSlcblxuICBhd2FpdCBmcy53cml0ZUZpbGUobm9kZVBhdGguam9pbihESVNULCAnc2l0ZW1hcC54bWwnKSwgeG1sKVxufVxuIl19