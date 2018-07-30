"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _path = _interopRequireDefault(require("path"));

var _slash = _interopRequireDefault(require("slash"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

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
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var config, templates, routes, paths, route404, id404, productionImports, developmentImports, productionTemplates, developmentTemplates, file, dynamicRoutesPath;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref.config;
            templates = config.templates, routes = config.routes, paths = config.paths;
            route404 = routes.find(function (route) {
              return route.path === '404';
            });
            id404 = route404.templateID;
            productionImports = "\nimport universal, { setHasBabelPlugin } from 'react-universal-component'\n  ";
            developmentImports = '';
            productionTemplates = "\nsetHasBabelPlugin()\n\nconst universalOptions = {\n  loading: () => null,\n  error: props => {\n    console.error(props.error);\n    return <div>An error occurred loading this page's template. More information is available in the console.</div>;\n  },\n}\n\n".concat(templates.map(function (template, index) {
              var templatePath = _path.default.relative(paths.DIST, _path.default.resolve(paths.ROOT, template));

              return "const t_".concat(index, " = universal(import('").concat((0, _slash.default)(templatePath), "'), universalOptions)");
            }).join('\n'), "\n");
            developmentTemplates = templates.map(function (template, index) {
              var templatePath = _path.default.relative(paths.DIST, _path.default.resolve(paths.ROOT, template));

              return "import t_".concat(index, " from '").concat((0, _slash.default)(templatePath), "'");
            }).join('\n');
            file = "\nimport React, { Component } from 'react'\nimport { Route } from 'react-router-dom'\nimport { cleanPath } from 'react-static'\n".concat(process.env.NODE_ENV === 'production' ? productionImports : developmentImports, "\n\n").concat(process.env.NODE_ENV === 'production' ? productionTemplates : developmentTemplates, "\n\n// Template Map\nglobal.componentsByTemplateID = global.componentsByTemplateID || [\n  ").concat(templates.map(function (template, index) {
              return "t_".concat(index);
            }).join(',\n'), "\n]\n\nconst defaultTemplateIDs = {\n  '404': ").concat(id404, "\n}\n\n// Template Tree\nglobal.templateIDsByPath = global.templateIDsByPath || defaultTemplateIDs\n\n// Get template for given path\nconst getComponentForPath = path => {\n  path = cleanPath(path)\n  return global.componentsByTemplateID[global.templateIDsByPath[path]]\n}\n\nglobal.reactStaticGetComponentForPath = getComponentForPath\nglobal.reactStaticRegisterTemplateIDForPath = (path, id) => {\n  global.templateIDsByPath[path] = id\n}\nglobal.clearTemplateIDs = () => {\n  global.templateIDsByPath = defaultTemplateIDs\n}\n\nexport default class Routes extends Component {\n  componentDidMount () {\n    global.clearTemplateIDs = () => {\n      this.setState({})\n    }\n    ").concat(process.env.NODE_ENV !== 'production' ? "\n    if (typeof document !== 'undefined' && module.hot) {\n      ".concat(templates.map(function (template, index) {
              var templatePath = _path.default.relative(paths.DIST, _path.default.resolve(paths.ROOT, template));

              return "module.hot.accept('".concat((0, _slash.default)(templatePath), "', () => {\n            global.componentsByTemplateID[").concat(index, "] = require('").concat((0, _slash.default)(templatePath), "').default\n            this.forceUpdate()\n          })");
            }).join('\n'), "\n      }\n") : '', "\n\n  }\n  render () {\n    const { component: Comp, render, children } = this.props\n\n    const getFullComponentForPath = path => {\n      let Comp = getComponentForPath(path)\n      let is404 = path === '404'\n      if (!Comp) {\n        is404 = true\n        Comp = getComponentForPath('/404')\n      }\n      return (newProps = {}) => (\n        Comp\n          ? <Comp {...newProps} {...(is404 ? {path: '404'} : {})} />\n          : null\n      )\n    }\n\n    const renderProps = {\n      componentsByTemplateID: global.componentsByTemplateID,\n      templateIDsByPath: global.templateIDsByPath,\n      getComponentForPath: getFullComponentForPath\n    }\n\n    if (Comp) {\n      return (\n        <Comp\n          {...renderProps}\n        />\n      )\n    }\n\n    if (render || children) {\n      return (render || children)(renderProps)\n    }\n\n    // This is the default auto-routing renderer\n    return (\n      <Route render={props => {\n        let Comp = getFullComponentForPath(props.location.pathname)\n        // If Comp is used as a component here, it triggers React to re-mount the entire\n        // component tree underneath during reconciliation, losing all internal state.\n        // By unwrapping it here we keep the real, static component exposed directly to React.\n        return Comp && Comp()\n      }} />\n    )\n  }\n}\n\n");
            dynamicRoutesPath = _path.default.join(paths.DIST, 'react-static-routes.js');
            _context.next = 12;
            return _fsExtra.default.remove(dynamicRoutesPath);

          case 12:
            _context.next = 14;
            return _fsExtra.default.outputFile(dynamicRoutesPath, file);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function _default(_x) {
    return _ref2.apply(this, arguments);
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/generateRoutes.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2VuZXJhdGVSb3V0ZXMuanMiXSwibmFtZXMiOlsiY29uZmlnIiwidGVtcGxhdGVzIiwicm91dGVzIiwicGF0aHMiLCJyb3V0ZTQwNCIsImZpbmQiLCJyb3V0ZSIsInBhdGgiLCJpZDQwNCIsInRlbXBsYXRlSUQiLCJwcm9kdWN0aW9uSW1wb3J0cyIsImRldmVsb3BtZW50SW1wb3J0cyIsInByb2R1Y3Rpb25UZW1wbGF0ZXMiLCJtYXAiLCJ0ZW1wbGF0ZSIsImluZGV4IiwidGVtcGxhdGVQYXRoIiwicmVsYXRpdmUiLCJESVNUIiwicmVzb2x2ZSIsIlJPT1QiLCJqb2luIiwiZGV2ZWxvcG1lbnRUZW1wbGF0ZXMiLCJmaWxlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZHluYW1pY1JvdXRlc1BhdGgiLCJmcyIsInJlbW92ZSIsIm91dHB1dEZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUVlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQSxrQkFBVCxRQUFTQSxNQUFUO0FBQ0xDLHFCQURLLEdBQ3dCRCxNQUR4QixDQUNMQyxTQURLLEVBQ01DLE1BRE4sR0FDd0JGLE1BRHhCLENBQ01FLE1BRE4sRUFDY0MsS0FEZCxHQUN3QkgsTUFEeEIsQ0FDY0csS0FEZDtBQUdQQyxvQkFITyxHQUdJRixPQUFPRyxJQUFQLENBQVk7QUFBQSxxQkFBU0MsTUFBTUMsSUFBTixLQUFlLEtBQXhCO0FBQUEsYUFBWixDQUhKO0FBSVBDLGlCQUpPLEdBSUNKLFNBQVNLLFVBSlY7QUFNUEMsNkJBTk87QUFTUEMsOEJBVE8sR0FTYyxFQVRkO0FBV1BDLCtCQVhPLGlSQXNCYlgsVUFDR1ksR0FESCxDQUNPLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixrQkFBTUMsZUFBZVQsY0FBS1UsUUFBTCxDQUNuQmQsTUFBTWUsSUFEYSxFQUVuQlgsY0FBS1ksT0FBTCxDQUFhaEIsTUFBTWlCLElBQW5CLEVBQXlCTixRQUF6QixDQUZtQixDQUFyQjs7QUFJQSx1Q0FBa0JDLEtBQWxCLGtDQUErQyxvQkFDN0NDLFlBRDZDLENBQS9DO0FBR0QsYUFUSCxFQVVHSyxJQVZILENBVVEsSUFWUixDQXRCYTtBQW1DUEMsZ0NBbkNPLEdBbUNnQnJCLFVBQzFCWSxHQUQwQixDQUN0QixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDeEIsa0JBQU1DLGVBQWVULGNBQUtVLFFBQUwsQ0FDbkJkLE1BQU1lLElBRGEsRUFFbkJYLGNBQUtZLE9BQUwsQ0FBYWhCLE1BQU1pQixJQUFuQixFQUF5Qk4sUUFBekIsQ0FGbUIsQ0FBckI7O0FBSUEsd0NBQW1CQyxLQUFuQixvQkFBa0Msb0JBQU1DLFlBQU4sQ0FBbEM7QUFDRCxhQVAwQixFQVExQkssSUFSMEIsQ0FRckIsSUFScUIsQ0FuQ2hCO0FBNkNQRSxnQkE3Q08sNklBa0RYQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsR0FDSWhCLGlCQURKLEdBRUlDLGtCQXBETyxpQkF3RFhhLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixHQUNJZCxtQkFESixHQUVJVSxvQkExRE8sd0dBK0RYckIsVUFBVVksR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLGlDQUEwQkEsS0FBMUI7QUFBQSxhQUFkLEVBQWlETSxJQUFqRCxDQUFzRCxLQUF0RCxDQS9EVywyREFtRUpiLEtBbkVJLHNyQkE2RlRnQixRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsK0VBR0V6QixVQUNDWSxHQURELENBQ0ssVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ3hCLGtCQUFNQyxlQUFlVCxjQUFLVSxRQUFMLENBQ25CZCxNQUFNZSxJQURhLEVBRW5CWCxjQUFLWSxPQUFMLENBQWFoQixNQUFNaUIsSUFBbkIsRUFBeUJOLFFBQXpCLENBRm1CLENBQXJCOztBQUlBLGtEQUE2QixvQkFBTUUsWUFBTixDQUE3QixtRUFDa0NELEtBRGxDLDBCQUN1RCxvQkFDckRDLFlBRHFELENBRHZEO0FBTUQsYUFaRCxFQWFDSyxJQWJELENBYU0sSUFiTixDQUhGLG1CQW1CSSxFQWhISztBQXNLUE0sNkJBdEtPLEdBc0thcEIsY0FBS2MsSUFBTCxDQUFVbEIsTUFBTWUsSUFBaEIsRUFBc0Isd0JBQXRCLENBdEtiO0FBQUE7QUFBQSxtQkF1S1BVLGlCQUFHQyxNQUFILENBQVVGLGlCQUFWLENBdktPOztBQUFBO0FBQUE7QUFBQSxtQkF3S1BDLGlCQUFHRSxVQUFILENBQWNILGlCQUFkLEVBQWlDSixJQUFqQyxDQXhLTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzbGFzaCBmcm9tICdzbGFzaCdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgY29uZmlnIH0pID0+IHtcbiAgY29uc3QgeyB0ZW1wbGF0ZXMsIHJvdXRlcywgcGF0aHMgfSA9IGNvbmZpZ1xuXG4gIGNvbnN0IHJvdXRlNDA0ID0gcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0aCA9PT0gJzQwNCcpXG4gIGNvbnN0IGlkNDA0ID0gcm91dGU0MDQudGVtcGxhdGVJRFxuXG4gIGNvbnN0IHByb2R1Y3Rpb25JbXBvcnRzID0gYFxuaW1wb3J0IHVuaXZlcnNhbCwgeyBzZXRIYXNCYWJlbFBsdWdpbiB9IGZyb20gJ3JlYWN0LXVuaXZlcnNhbC1jb21wb25lbnQnXG4gIGBcbiAgY29uc3QgZGV2ZWxvcG1lbnRJbXBvcnRzID0gJydcblxuICBjb25zdCBwcm9kdWN0aW9uVGVtcGxhdGVzID0gYFxuc2V0SGFzQmFiZWxQbHVnaW4oKVxuXG5jb25zdCB1bml2ZXJzYWxPcHRpb25zID0ge1xuICBsb2FkaW5nOiAoKSA9PiBudWxsLFxuICBlcnJvcjogcHJvcHMgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IocHJvcHMuZXJyb3IpO1xuICAgIHJldHVybiA8ZGl2PkFuIGVycm9yIG9jY3VycmVkIGxvYWRpbmcgdGhpcyBwYWdlJ3MgdGVtcGxhdGUuIE1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGluIHRoZSBjb25zb2xlLjwvZGl2PjtcbiAgfSxcbn1cblxuJHt0ZW1wbGF0ZXNcbiAgICAubWFwKCh0ZW1wbGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9IHBhdGgucmVsYXRpdmUoXG4gICAgICAgIHBhdGhzLkRJU1QsXG4gICAgICAgIHBhdGgucmVzb2x2ZShwYXRocy5ST09ULCB0ZW1wbGF0ZSlcbiAgICAgIClcbiAgICAgIHJldHVybiBgY29uc3QgdF8ke2luZGV4fSA9IHVuaXZlcnNhbChpbXBvcnQoJyR7c2xhc2goXG4gICAgICAgIHRlbXBsYXRlUGF0aFxuICAgICAgKX0nKSwgdW5pdmVyc2FsT3B0aW9ucylgXG4gICAgfSlcbiAgICAuam9pbignXFxuJyl9XG5gXG5cbiAgY29uc3QgZGV2ZWxvcG1lbnRUZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNcbiAgICAubWFwKCh0ZW1wbGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9IHBhdGgucmVsYXRpdmUoXG4gICAgICAgIHBhdGhzLkRJU1QsXG4gICAgICAgIHBhdGgucmVzb2x2ZShwYXRocy5ST09ULCB0ZW1wbGF0ZSlcbiAgICAgIClcbiAgICAgIHJldHVybiBgaW1wb3J0IHRfJHtpbmRleH0gZnJvbSAnJHtzbGFzaCh0ZW1wbGF0ZVBhdGgpfSdgXG4gICAgfSlcbiAgICAuam9pbignXFxuJylcblxuICBjb25zdCBmaWxlID0gYFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAncmVhY3Qtc3RhdGljJ1xuJHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICA/IHByb2R1Y3Rpb25JbXBvcnRzXG4gICAgICA6IGRldmVsb3BtZW50SW1wb3J0c1xuICB9XG5cbiR7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgPyBwcm9kdWN0aW9uVGVtcGxhdGVzXG4gICAgICA6IGRldmVsb3BtZW50VGVtcGxhdGVzXG4gIH1cblxuLy8gVGVtcGxhdGUgTWFwXG5nbG9iYWwuY29tcG9uZW50c0J5VGVtcGxhdGVJRCA9IGdsb2JhbC5jb21wb25lbnRzQnlUZW1wbGF0ZUlEIHx8IFtcbiAgJHt0ZW1wbGF0ZXMubWFwKCh0ZW1wbGF0ZSwgaW5kZXgpID0+IGB0XyR7aW5kZXh9YCkuam9pbignLFxcbicpfVxuXVxuXG5jb25zdCBkZWZhdWx0VGVtcGxhdGVJRHMgPSB7XG4gICc0MDQnOiAke2lkNDA0fVxufVxuXG4vLyBUZW1wbGF0ZSBUcmVlXG5nbG9iYWwudGVtcGxhdGVJRHNCeVBhdGggPSBnbG9iYWwudGVtcGxhdGVJRHNCeVBhdGggfHwgZGVmYXVsdFRlbXBsYXRlSURzXG5cbi8vIEdldCB0ZW1wbGF0ZSBmb3IgZ2l2ZW4gcGF0aFxuY29uc3QgZ2V0Q29tcG9uZW50Rm9yUGF0aCA9IHBhdGggPT4ge1xuICBwYXRoID0gY2xlYW5QYXRoKHBhdGgpXG4gIHJldHVybiBnbG9iYWwuY29tcG9uZW50c0J5VGVtcGxhdGVJRFtnbG9iYWwudGVtcGxhdGVJRHNCeVBhdGhbcGF0aF1dXG59XG5cbmdsb2JhbC5yZWFjdFN0YXRpY0dldENvbXBvbmVudEZvclBhdGggPSBnZXRDb21wb25lbnRGb3JQYXRoXG5nbG9iYWwucmVhY3RTdGF0aWNSZWdpc3RlclRlbXBsYXRlSURGb3JQYXRoID0gKHBhdGgsIGlkKSA9PiB7XG4gIGdsb2JhbC50ZW1wbGF0ZUlEc0J5UGF0aFtwYXRoXSA9IGlkXG59XG5nbG9iYWwuY2xlYXJUZW1wbGF0ZUlEcyA9ICgpID0+IHtcbiAgZ2xvYmFsLnRlbXBsYXRlSURzQnlQYXRoID0gZGVmYXVsdFRlbXBsYXRlSURzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBnbG9iYWwuY2xlYXJUZW1wbGF0ZUlEcyA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gICAgfVxuICAgICR7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgID8gYFxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5ob3QpIHtcbiAgICAgICR7dGVtcGxhdGVzXG4gICAgICAgIC5tYXAoKHRlbXBsYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9IHBhdGgucmVsYXRpdmUoXG4gICAgICAgICAgICBwYXRocy5ESVNULFxuICAgICAgICAgICAgcGF0aC5yZXNvbHZlKHBhdGhzLlJPT1QsIHRlbXBsYXRlKVxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gYG1vZHVsZS5ob3QuYWNjZXB0KCcke3NsYXNoKHRlbXBsYXRlUGF0aCl9JywgKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmNvbXBvbmVudHNCeVRlbXBsYXRlSURbJHtpbmRleH1dID0gcmVxdWlyZSgnJHtzbGFzaChcbiAgICAgICAgICAgIHRlbXBsYXRlUGF0aFxuICAgICAgICAgICl9JykuZGVmYXVsdFxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgfSlgXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCdcXG4nKX1cbiAgICAgIH1cbmBcbiAgICAgICAgOiAnJ1xuICAgIH1cblxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjb21wb25lbnQ6IENvbXAsIHJlbmRlciwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGdldEZ1bGxDb21wb25lbnRGb3JQYXRoID0gcGF0aCA9PiB7XG4gICAgICBsZXQgQ29tcCA9IGdldENvbXBvbmVudEZvclBhdGgocGF0aClcbiAgICAgIGxldCBpczQwNCA9IHBhdGggPT09ICc0MDQnXG4gICAgICBpZiAoIUNvbXApIHtcbiAgICAgICAgaXM0MDQgPSB0cnVlXG4gICAgICAgIENvbXAgPSBnZXRDb21wb25lbnRGb3JQYXRoKCcvNDA0JylcbiAgICAgIH1cbiAgICAgIHJldHVybiAobmV3UHJvcHMgPSB7fSkgPT4gKFxuICAgICAgICBDb21wXG4gICAgICAgICAgPyA8Q29tcCB7Li4ubmV3UHJvcHN9IHsuLi4oaXM0MDQgPyB7cGF0aDogJzQwNCd9IDoge30pfSAvPlxuICAgICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclByb3BzID0ge1xuICAgICAgY29tcG9uZW50c0J5VGVtcGxhdGVJRDogZ2xvYmFsLmNvbXBvbmVudHNCeVRlbXBsYXRlSUQsXG4gICAgICB0ZW1wbGF0ZUlEc0J5UGF0aDogZ2xvYmFsLnRlbXBsYXRlSURzQnlQYXRoLFxuICAgICAgZ2V0Q29tcG9uZW50Rm9yUGF0aDogZ2V0RnVsbENvbXBvbmVudEZvclBhdGhcbiAgICB9XG5cbiAgICBpZiAoQ29tcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbXBcbiAgICAgICAgICB7Li4ucmVuZGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciB8fCBjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIChyZW5kZXIgfHwgY2hpbGRyZW4pKHJlbmRlclByb3BzKVxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQgYXV0by1yb3V0aW5nIHJlbmRlcmVyXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IHtcbiAgICAgICAgbGV0IENvbXAgPSBnZXRGdWxsQ29tcG9uZW50Rm9yUGF0aChwcm9wcy5sb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgICAgLy8gSWYgQ29tcCBpcyB1c2VkIGFzIGEgY29tcG9uZW50IGhlcmUsIGl0IHRyaWdnZXJzIFJlYWN0IHRvIHJlLW1vdW50IHRoZSBlbnRpcmVcbiAgICAgICAgLy8gY29tcG9uZW50IHRyZWUgdW5kZXJuZWF0aCBkdXJpbmcgcmVjb25jaWxpYXRpb24sIGxvc2luZyBhbGwgaW50ZXJuYWwgc3RhdGUuXG4gICAgICAgIC8vIEJ5IHVud3JhcHBpbmcgaXQgaGVyZSB3ZSBrZWVwIHRoZSByZWFsLCBzdGF0aWMgY29tcG9uZW50IGV4cG9zZWQgZGlyZWN0bHkgdG8gUmVhY3QuXG4gICAgICAgIHJldHVybiBDb21wICYmIENvbXAoKVxuICAgICAgfX0gLz5cbiAgICApXG4gIH1cbn1cblxuYFxuXG4gIGNvbnN0IGR5bmFtaWNSb3V0ZXNQYXRoID0gcGF0aC5qb2luKHBhdGhzLkRJU1QsICdyZWFjdC1zdGF0aWMtcm91dGVzLmpzJylcbiAgYXdhaXQgZnMucmVtb3ZlKGR5bmFtaWNSb3V0ZXNQYXRoKVxuICBhd2FpdCBmcy5vdXRwdXRGaWxlKGR5bmFtaWNSb3V0ZXNQYXRoLCBmaWxlKVxufVxuIl19