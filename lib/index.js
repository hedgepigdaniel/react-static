"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cleanPath", {
  enumerable: true,
  get: function get() {
    return _shared.cleanPath;
  }
});
Object.defineProperty(exports, "prefetch", {
  enumerable: true,
  get: function get() {
    return _methods.prefetch;
  }
});
Object.defineProperty(exports, "onLoading", {
  enumerable: true,
  get: function get() {
    return _methods.onLoading;
  }
});
Object.defineProperty(exports, "Prompt", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Prompt;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Route;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Switch;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.matchPath;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.withRouter;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _Loading.default;
  }
});
Object.defineProperty(exports, "withLoading", {
  enumerable: true,
  get: function get() {
    return _Loading.withLoading;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "PrefetchWhenSeen", {
  enumerable: true,
  get: function get() {
    return _PrefetchWhenSeen.default;
  }
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function get() {
    return _Router.default;
  }
});
Object.defineProperty(exports, "Redirect", {
  enumerable: true,
  get: function get() {
    return _Redirect.default;
  }
});
Object.defineProperty(exports, "NavLink", {
  enumerable: true,
  get: function get() {
    return _Link.NavLink;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link.Link;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
exports.getSiteData = exports.getRouteProps = void 0;

var _shared = require("./utils/shared");

var _methods = require("./client/methods");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _RouteData = _interopRequireWildcard(require("./client/components/RouteData"));

var _SiteData = _interopRequireWildcard(require("./client/components/SiteData"));

var _Loading = _interopRequireWildcard(require("./client/components/Loading"));

var _Prefetch = _interopRequireDefault(require("./client/components/Prefetch"));

var _PrefetchWhenSeen = _interopRequireDefault(require("./client/components/PrefetchWhenSeen"));

var _Router = _interopRequireDefault(require("./client/components/Router"));

var _Redirect = _interopRequireDefault(require("./client/components/Redirect"));

var _Link = require("./client/components/Link");

var _scrollTo = _interopRequireDefault(require("./utils/scrollTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

// Deprecations
var getRouteProps = function getRouteProps() {
  (0, _shared.deprecate)('getRouteProps', 'withRouteData');
  return _methods.withRouteData.apply(void 0, arguments);
};

exports.getRouteProps = getRouteProps;

var getSiteData = function getSiteData() {
  (0, _shared.deprecate)('getSiteData', 'withSiteData');
  return _methods.withSiteData.apply(void 0, arguments);
};

exports.getSiteData = getSiteData;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRouteProps, "getRouteProps", "/home/daniel/flattenedmonad/react-static/src/index.js");
  reactHotLoader.register(getSiteData, "getSiteData", "/home/daniel/flattenedmonad/react-static/src/index.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSb3V0ZVByb3BzIiwid2l0aFJvdXRlRGF0YSIsImdldFNpdGVEYXRhIiwid2l0aFNpdGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBS0E7O0FBR0E7O0FBR0E7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7OztBQUtBO0FBQ08sSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFhO0FBQ3hDLHlCQUFVLGVBQVYsRUFBMkIsZUFBM0I7QUFDQSxTQUFPQywrQ0FBUDtBQUNELENBSE07Ozs7QUFJQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsR0FBYTtBQUN0Qyx5QkFBVSxhQUFWLEVBQXlCLGNBQXpCO0FBQ0EsU0FBT0MsOENBQVA7QUFDRCxDQUhNOzs7Ozs7Ozs7Ozs7OzswQkFKTUgsYTswQkFJQUUsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IHsgd2l0aFJvdXRlRGF0YSwgd2l0aFNpdGVEYXRhIH0gZnJvbSAnLi9jbGllbnQvbWV0aG9kcydcblxuLy9cblxuLy8gUmVhY3QgUm91dGVyIENvbXBvbmVudHNcbmV4cG9ydCB7IFByb21wdCwgUm91dGUsIFN3aXRjaCwgbWF0Y2hQYXRoLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gSGVsbWV0XG5leHBvcnQgeyBIZWxtZXQgYXMgSGVhZCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcblxuLy8gUmVhY3QtU3RhdGljIENvbXBvbmVudHNcbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgUm91dGVEYXRhLFxuICB3aXRoUm91dGVEYXRhLFxufSBmcm9tICcuL2NsaWVudC9jb21wb25lbnRzL1JvdXRlRGF0YSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2l0ZURhdGEsIHdpdGhTaXRlRGF0YSB9IGZyb20gJy4vY2xpZW50L2NvbXBvbmVudHMvU2l0ZURhdGEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmcsIHdpdGhMb2FkaW5nIH0gZnJvbSAnLi9jbGllbnQvY29tcG9uZW50cy9Mb2FkaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmVmZXRjaCB9IGZyb20gJy4vY2xpZW50L2NvbXBvbmVudHMvUHJlZmV0Y2gnXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIFByZWZldGNoV2hlblNlZW4sXG59IGZyb20gJy4vY2xpZW50L2NvbXBvbmVudHMvUHJlZmV0Y2hXaGVuU2VlbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm91dGVyIH0gZnJvbSAnLi9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZGlyZWN0IH0gZnJvbSAnLi9jbGllbnQvY29tcG9uZW50cy9SZWRpcmVjdCdcbmV4cG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tICcuL2NsaWVudC9jb21wb25lbnRzL0xpbmsnXG5cbi8vIE1ldGhvZHNcbmV4cG9ydCB7IHByZWZldGNoLCBvbkxvYWRpbmcgfSBmcm9tICcuL2NsaWVudC9tZXRob2RzJ1xuXG4vLyBQdWJsaWMgVXRpbHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Nyb2xsVG8gfSBmcm9tICcuL3V0aWxzL3Njcm9sbFRvJ1xuXG4vLyBQcml2YXRlIFV0aWxzXG5leHBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuL3V0aWxzL3NoYXJlZCdcblxuLy8gRGVwcmVjYXRpb25zXG5leHBvcnQgY29uc3QgZ2V0Um91dGVQcm9wcyA9ICguLi5hcmdzKSA9PiB7XG4gIGRlcHJlY2F0ZSgnZ2V0Um91dGVQcm9wcycsICd3aXRoUm91dGVEYXRhJylcbiAgcmV0dXJuIHdpdGhSb3V0ZURhdGEoLi4uYXJncylcbn1cbmV4cG9ydCBjb25zdCBnZXRTaXRlRGF0YSA9ICguLi5hcmdzKSA9PiB7XG4gIGRlcHJlY2F0ZSgnZ2V0U2l0ZURhdGEnLCAnd2l0aFNpdGVEYXRhJylcbiAgcmV0dXJuIHdpdGhTaXRlRGF0YSguLi5hcmdzKVxufVxuIl19