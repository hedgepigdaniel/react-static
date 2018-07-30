"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHeadWithMeta = exports.InlineStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/static/components/HeadWithMeta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var REGEX_FOR_STYLE_TAG = /<style>|<\/style>/gi;

var InlineStyle = function InlineStyle(_ref) {
  var clientCss = _ref.clientCss;
  return _react.default.createElement("style", {
    key: "clientCss",
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: clientCss.toString().replace(REGEX_FOR_STYLE_TAG, '')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

exports.InlineStyle = InlineStyle;

var makeHeadWithMeta = function makeHeadWithMeta(_ref2) {
  var head = _ref2.head,
      route = _ref2.route,
      clientScripts = _ref2.clientScripts,
      config = _ref2.config,
      clientStyleSheets = _ref2.clientStyleSheets,
      clientCss = _ref2.clientCss,
      meta = _ref2.meta;
  return function (_ref3) {
    var children = _ref3.children,
        rest = _objectWithoutProperties(_ref3, ["children"]);

    var renderLinkCSS = !route.redirect && !config.inlineCss;
    var useHelmetTitle = head.title && head.title[0] && head.title[0].props.children !== '';
    var childrenArray = children;

    if (useHelmetTitle) {
      head.title[0] = _react.default.cloneElement(head.title[0], {
        key: 'title'
      });
      childrenArray = _react.default.Children.toArray(children).filter(function (child) {
        if (child.type === 'title') {
          // Filter out the title of the Document in static.config.js
          // if there is a helmet title on this route
          return false;
        }

        return true;
      });
    }

    var pluginHeads = (config.plugins || []).map(function (plugin) {
      return plugin.Head;
    }).filter(Boolean).map(function (PluginHead) {
      return _react.default.createElement(PluginHead, {
        meta: meta,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });
    });
    return _react.default.createElement("head", _extends({}, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), head.base, useHelmetTitle && head.title, head.meta, !route.redirect && clientScripts.map(function (script) {
      return _react.default.createElement("link", {
        key: "clientScript_".concat(script),
        rel: "preload",
        as: "script",
        href: (0, _shared.makePathAbsolute)((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, script)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      });
    }), renderLinkCSS && clientStyleSheets.reduce(function (memo, styleSheet) {
      var href = (0, _shared.makePathAbsolute)((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, styleSheet));
      return _toConsumableArray(memo).concat([_react.default.createElement("link", {
        key: "clientStyleSheetPreload_".concat(styleSheet),
        rel: "preload",
        as: "style",
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), _react.default.createElement("link", {
        key: "clientStyleSheet_".concat(styleSheet),
        rel: "stylesheet",
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })]);
    }, []), head.link, head.noscript, head.script, config.inlineCss && _react.default.createElement(InlineStyle, {
      clientCss: clientCss,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), head.style, pluginHeads, childrenArray);
  };
};

exports.makeHeadWithMeta = makeHeadWithMeta;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_FOR_STYLE_TAG, "REGEX_FOR_STYLE_TAG", "/home/daniel/flattenedmonad/react-static/src/static/components/HeadWithMeta.js");
  reactHotLoader.register(InlineStyle, "InlineStyle", "/home/daniel/flattenedmonad/react-static/src/static/components/HeadWithMeta.js");
  reactHotLoader.register(makeHeadWithMeta, "makeHeadWithMeta", "/home/daniel/flattenedmonad/react-static/src/static/components/HeadWithMeta.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9IZWFkV2l0aE1ldGEuanMiXSwibmFtZXMiOlsiUkVHRVhfRk9SX1NUWUxFX1RBRyIsIklubGluZVN0eWxlIiwiY2xpZW50Q3NzIiwiX19odG1sIiwidG9TdHJpbmciLCJyZXBsYWNlIiwibWFrZUhlYWRXaXRoTWV0YSIsImhlYWQiLCJyb3V0ZSIsImNsaWVudFNjcmlwdHMiLCJjb25maWciLCJjbGllbnRTdHlsZVNoZWV0cyIsIm1ldGEiLCJjaGlsZHJlbiIsInJlc3QiLCJyZW5kZXJMaW5rQ1NTIiwicmVkaXJlY3QiLCJpbmxpbmVDc3MiLCJ1c2VIZWxtZXRUaXRsZSIsInRpdGxlIiwicHJvcHMiLCJjaGlsZHJlbkFycmF5IiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJmaWx0ZXIiLCJjaGlsZCIsInR5cGUiLCJwbHVnaW5IZWFkcyIsInBsdWdpbnMiLCJtYXAiLCJwbHVnaW4iLCJIZWFkIiwiQm9vbGVhbiIsImJhc2UiLCJzY3JpcHQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRIIiwicmVkdWNlIiwibWVtbyIsInN0eWxlU2hlZXQiLCJocmVmIiwibGluayIsIm5vc2NyaXB0Iiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IscUJBQTVCOztBQUVPLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFNBQ3pCO0FBQ0UsU0FBSSxXQUROO0FBRUUsVUFBSyxVQUZQO0FBR0UsNkJBQXlCO0FBQ3ZCQyxjQUFRRCxVQUFVRSxRQUFWLEdBQXFCQyxPQUFyQixDQUE2QkwsbUJBQTdCLEVBQWtELEVBQWxEO0FBRGUsS0FIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFE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UUFSRjtBQWNELEtBbkJELEVBbUJHLEVBbkJILENBaEJKLEVBb0NHckMsS0FBS3NDLElBcENSLEVBcUNHdEMsS0FBS3VDLFFBckNSLEVBc0NHdkMsS0FBSzhCLE1BdENSLEVBdUNHM0IsT0FBT08sU0FBUCxJQUFvQiw2QkFBQyxXQUFEO0FBQWEsaUJBQVdmLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkN2QixFQXdDR0ssS0FBS3dDLEtBeENSLEVBeUNHakIsV0F6Q0gsRUEwQ0dULGFBMUNILENBREY7QUE4Q0QsR0E1RStCO0FBQUEsQ0FBekI7Ozs7Ozs7Ozs7Ozs7OzBCQVpEckIsbUI7MEJBRU9DLFc7MEJBVUFLLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGF0aEpvaW4sIG1ha2VQYXRoQWJzb2x1dGUgfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQnXG5cbmNvbnN0IFJFR0VYX0ZPUl9TVFlMRV9UQUcgPSAvPHN0eWxlPnw8XFwvc3R5bGU+L2dpXG5cbmV4cG9ydCBjb25zdCBJbmxpbmVTdHlsZSA9ICh7IGNsaWVudENzcyB9KSA9PiAoXG4gIDxzdHlsZVxuICAgIGtleT1cImNsaWVudENzc1wiXG4gICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgX19odG1sOiBjbGllbnRDc3MudG9TdHJpbmcoKS5yZXBsYWNlKFJFR0VYX0ZPUl9TVFlMRV9UQUcsICcnKSxcbiAgICB9fVxuICAvPlxuKVxuXG5leHBvcnQgY29uc3QgbWFrZUhlYWRXaXRoTWV0YSA9ICh7XG4gIGhlYWQsXG4gIHJvdXRlLFxuICBjbGllbnRTY3JpcHRzLFxuICBjb25maWcsXG4gIGNsaWVudFN0eWxlU2hlZXRzLFxuICBjbGllbnRDc3MsXG4gIG1ldGEsXG59KSA9PiAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckxpbmtDU1MgPSAhcm91dGUucmVkaXJlY3QgJiYgIWNvbmZpZy5pbmxpbmVDc3NcbiAgY29uc3QgdXNlSGVsbWV0VGl0bGUgPVxuICAgIGhlYWQudGl0bGUgJiYgaGVhZC50aXRsZVswXSAmJiBoZWFkLnRpdGxlWzBdLnByb3BzLmNoaWxkcmVuICE9PSAnJ1xuICBsZXQgY2hpbGRyZW5BcnJheSA9IGNoaWxkcmVuXG4gIGlmICh1c2VIZWxtZXRUaXRsZSkge1xuICAgIGhlYWQudGl0bGVbMF0gPSBSZWFjdC5jbG9uZUVsZW1lbnQoaGVhZC50aXRsZVswXSwgeyBrZXk6ICd0aXRsZScgfSlcbiAgICBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSAndGl0bGUnKSB7XG4gICAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHRpdGxlIG9mIHRoZSBEb2N1bWVudCBpbiBzdGF0aWMuY29uZmlnLmpzXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgaGVsbWV0IHRpdGxlIG9uIHRoaXMgcm91dGVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBwbHVnaW5IZWFkcyA9IChjb25maWcucGx1Z2lucyB8fCBbXSlcbiAgICAubWFwKHBsdWdpbiA9PiBwbHVnaW4uSGVhZClcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcChQbHVnaW5IZWFkID0+IDxQbHVnaW5IZWFkIG1ldGE9e21ldGF9IC8+KVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWQgey4uLnJlc3R9PlxuICAgICAge2hlYWQuYmFzZX1cbiAgICAgIHt1c2VIZWxtZXRUaXRsZSAmJiBoZWFkLnRpdGxlfVxuICAgICAge2hlYWQubWV0YX1cbiAgICAgIHshcm91dGUucmVkaXJlY3QgJiZcbiAgICAgICAgY2xpZW50U2NyaXB0cy5tYXAoc2NyaXB0ID0+IChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtgY2xpZW50U2NyaXB0XyR7c2NyaXB0fWB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgIGhyZWY9e21ha2VQYXRoQWJzb2x1dGUoXG4gICAgICAgICAgICAgIHBhdGhKb2luKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCwgc2NyaXB0KVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIHtyZW5kZXJMaW5rQ1NTICYmXG4gICAgICAgIGNsaWVudFN0eWxlU2hlZXRzLnJlZHVjZSgobWVtbywgc3R5bGVTaGVldCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhyZWYgPSBtYWtlUGF0aEFic29sdXRlKFxuICAgICAgICAgICAgcGF0aEpvaW4ocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRILCBzdHlsZVNoZWV0KVxuICAgICAgICAgIClcblxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5tZW1vLFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAga2V5PXtgY2xpZW50U3R5bGVTaGVldFByZWxvYWRfJHtzdHlsZVNoZWV0fWB9XG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAga2V5PXtgY2xpZW50U3R5bGVTaGVldF8ke3N0eWxlU2hlZXR9YH1cbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICBdXG4gICAgICAgIH0sIFtdKX1cbiAgICAgIHtoZWFkLmxpbmt9XG4gICAgICB7aGVhZC5ub3NjcmlwdH1cbiAgICAgIHtoZWFkLnNjcmlwdH1cbiAgICAgIHtjb25maWcuaW5saW5lQ3NzICYmIDxJbmxpbmVTdHlsZSBjbGllbnRDc3M9e2NsaWVudENzc30gLz59XG4gICAgICB7aGVhZC5zdHlsZX1cbiAgICAgIHtwbHVnaW5IZWFkc31cbiAgICAgIHtjaGlsZHJlbkFycmF5fVxuICAgIDwvaGVhZD5cbiAgKVxufVxuIl19