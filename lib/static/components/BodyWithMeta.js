"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBodyWithMeta = void 0;

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/static/components/BodyWithMeta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var REGEX_FOR_SCRIPT = /<(\/)?(script)/gi;

var generateRouteInformation = function generateRouteInformation(embeddedRouteInfo) {
  return {
    __html: "\n    window.__routeInfo = ".concat(JSON.stringify(embeddedRouteInfo).replace(REGEX_FOR_SCRIPT, '<"+"$1$2'), ";")
  };
}; // Not only do we pass react-helmet attributes and the app.js here, but
// we also need to  hard code site props and route props into the page to
// prevent flashing when react mounts onto the HTML.


var makeBodyWithMeta = function makeBodyWithMeta(_ref) {
  var head = _ref.head,
      route = _ref.route,
      embeddedRouteInfo = _ref.embeddedRouteInfo,
      _ref$clientScripts = _ref.clientScripts,
      clientScripts = _ref$clientScripts === void 0 ? [] : _ref$clientScripts;
  return function (_ref2) {
    var children = _ref2.children,
        rest = _objectWithoutProperties(_ref2, ["children"]);

    return _react.default.createElement("body", _extends({}, head.bodyProps, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), children, !route.redirect && _react.default.createElement("script", {
      type: "text/javascript",
      dangerouslySetInnerHTML: generateRouteInformation(embeddedRouteInfo),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), !route.redirect && clientScripts.map(function (script) {
      return _react.default.createElement("script", {
        key: script,
        defer: true,
        type: "text/javascript",
        src: (0, _shared.makePathAbsolute)((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, script)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    }));
  };
};

exports.makeBodyWithMeta = makeBodyWithMeta;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_FOR_SCRIPT, "REGEX_FOR_SCRIPT", "/home/daniel/flattenedmonad/react-static/src/static/components/BodyWithMeta.js");
  reactHotLoader.register(generateRouteInformation, "generateRouteInformation", "/home/daniel/flattenedmonad/react-static/src/static/components/BodyWithMeta.js");
  reactHotLoader.register(makeBodyWithMeta, "makeBodyWithMeta", "/home/daniel/flattenedmonad/react-static/src/static/components/BodyWithMeta.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9Cb2R5V2l0aE1ldGEuanMiXSwibmFtZXMiOlsiUkVHRVhfRk9SX1NDUklQVCIsImdlbmVyYXRlUm91dGVJbmZvcm1hdGlvbiIsIl9faHRtbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWJlZGRlZFJvdXRlSW5mbyIsInJlcGxhY2UiLCJtYWtlQm9keVdpdGhNZXRhIiwiaGVhZCIsInJvdXRlIiwiY2xpZW50U2NyaXB0cyIsImNoaWxkcmVuIiwicmVzdCIsImJvZHlQcm9wcyIsInJlZGlyZWN0IiwibWFwIiwic2NyaXB0IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsa0JBQXpCOztBQUVBLElBQU1DLDJCQUEyQixTQUEzQkEsd0JBQTJCO0FBQUEsU0FBc0I7QUFDckRDLGlEQUN5QkMsS0FBS0MsU0FBTCxDQUFlQyxpQkFBZixFQUFrQ0MsT0FBbEMsQ0FDckJOLGdCQURxQixFQUVyQixVQUZxQixDQUR6QjtBQURxRCxHQUF0QjtBQUFBLENBQWpDLEMsQ0FRQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1PLG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsTUFDOUJDLElBRDhCLFFBQzlCQSxJQUQ4QjtBQUFBLE1BRTlCQyxLQUY4QixRQUU5QkEsS0FGOEI7QUFBQSxNQUs5QkosaUJBTDhCLFFBSzlCQSxpQkFMOEI7QUFBQSxnQ0FNOUJLLGFBTjhCO0FBQUEsTUFNOUJBLGFBTjhCLG1DQU1kLEVBTmM7QUFBQSxTQU8xQjtBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWdCQyxJQUFoQjs7QUFBQSxXQUNKLGtEQUFVSixLQUFLSyxTQUFmLEVBQThCRCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHRCxRQURILEVBRUcsQ0FBQ0YsTUFBTUssUUFBUCxJQUNDO0FBQ0UsWUFBSyxpQkFEUDtBQUVFLCtCQUF5QmIseUJBQXlCSSxpQkFBekIsQ0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQVFHLENBQUNJLE1BQU1LLFFBQVAsSUFDQ0osY0FBY0ssR0FBZCxDQUFrQjtBQUFBLGFBQ2hCO0FBQ0UsYUFBS0MsTUFEUDtBQUVFLG1CQUZGO0FBR0UsY0FBSyxpQkFIUDtBQUlFLGFBQUssOEJBQ0gsc0JBQVNDLFFBQVFDLEdBQVIsQ0FBWUMsd0JBQXJCLEVBQStDSCxNQUEvQyxDQURHLENBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEZ0I7QUFBQSxLQUFsQixDQVRKLENBREk7QUFBQSxHQVAwQjtBQUFBLENBQXpCOzs7Ozs7Ozs7Ozs7OzswQkFiRGhCLGdCOzBCQUVBQyx3QjswQkFXT00sZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXRoSm9pbiwgbWFrZVBhdGhBYnNvbHV0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZCdcblxuY29uc3QgUkVHRVhfRk9SX1NDUklQVCA9IC88KFxcLyk/KHNjcmlwdCkvZ2lcblxuY29uc3QgZ2VuZXJhdGVSb3V0ZUluZm9ybWF0aW9uID0gZW1iZWRkZWRSb3V0ZUluZm8gPT4gKHtcbiAgX19odG1sOiBgXG4gICAgd2luZG93Ll9fcm91dGVJbmZvID0gJHtKU09OLnN0cmluZ2lmeShlbWJlZGRlZFJvdXRlSW5mbykucmVwbGFjZShcbiAgICAgIFJFR0VYX0ZPUl9TQ1JJUFQsXG4gICAgICAnPFwiK1wiJDEkMidcbiAgICApfTtgLFxufSlcblxuLy8gTm90IG9ubHkgZG8gd2UgcGFzcyByZWFjdC1oZWxtZXQgYXR0cmlidXRlcyBhbmQgdGhlIGFwcC5qcyBoZXJlLCBidXRcbi8vIHdlIGFsc28gbmVlZCB0byAgaGFyZCBjb2RlIHNpdGUgcHJvcHMgYW5kIHJvdXRlIHByb3BzIGludG8gdGhlIHBhZ2UgdG9cbi8vIHByZXZlbnQgZmxhc2hpbmcgd2hlbiByZWFjdCBtb3VudHMgb250byB0aGUgSFRNTC5cbmV4cG9ydCBjb25zdCBtYWtlQm9keVdpdGhNZXRhID0gKHtcbiAgaGVhZCxcbiAgcm91dGUsXG4gIC8vIFRoaXMgZW1iZWRkZWRSb3V0ZUluZm8gd2lsbCBiZSBpbmxpbmVkIGludG8gdGhlIEhUTUwgZm9yIHRoaXMgcm91dGUuXG4gIC8vIEl0IHNob3VsZCBvbmx5IGluY2x1ZGUgdGhlIGZ1bGwgcHJvcHMsIG5vdCB0aGUgcGFydGlhbHMuXG4gIGVtYmVkZGVkUm91dGVJbmZvLFxuICBjbGllbnRTY3JpcHRzID0gW10sXG59KSA9PiAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxib2R5IHsuLi5oZWFkLmJvZHlQcm9wc30gey4uLnJlc3R9PlxuICAgIHtjaGlsZHJlbn1cbiAgICB7IXJvdXRlLnJlZGlyZWN0ICYmIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtnZW5lcmF0ZVJvdXRlSW5mb3JtYXRpb24oZW1iZWRkZWRSb3V0ZUluZm8pfVxuICAgICAgLz5cbiAgICApfVxuICAgIHshcm91dGUucmVkaXJlY3QgJiZcbiAgICAgIGNsaWVudFNjcmlwdHMubWFwKHNjcmlwdCA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3NjcmlwdH1cbiAgICAgICAgICBkZWZlclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz17bWFrZVBhdGhBYnNvbHV0ZShcbiAgICAgICAgICAgIHBhdGhKb2luKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCwgc2NyaXB0KVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgPC9ib2R5PlxuKVxuIl19