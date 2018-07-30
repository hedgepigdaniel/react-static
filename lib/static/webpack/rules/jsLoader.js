"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
  var config = _ref.config,
      stage = _ref.stage;
  return {
    test: /\.(js|jsx)$/,
    exclude: new RegExp("(node_modules|".concat(config.paths.EXCLUDE_MODULES, ")")),
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: stage !== 'prod'
      }
    }]
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/webpack/rules/jsLoader.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9qc0xvYWRlci5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJzdGFnZSIsInRlc3QiLCJleGNsdWRlIiwiUmVnRXhwIiwicGF0aHMiLCJFWENMVURFX01PRFVMRVMiLCJ1c2UiLCJsb2FkZXIiLCJvcHRpb25zIiwiY2FjaGVEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7ZUFBZSx3QkFBNEI7QUFBQSxNQUFqQkEsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3pDLFNBQU87QUFDTEMsVUFBTSxhQUREO0FBRUxDLGFBQVMsSUFBSUMsTUFBSix5QkFBNEJKLE9BQU9LLEtBQVAsQ0FBYUMsZUFBekMsT0FGSjtBQUdMQyxTQUFLLENBQ0g7QUFDRUMsY0FBUSxjQURWO0FBRUVDLGVBQVM7QUFDUEMsd0JBQWdCVCxVQUFVO0FBRG5CO0FBRlgsS0FERztBQUhBLEdBQVA7QUFZRCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBjb25maWcsIHN0YWdlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiAvXFwuKGpzfGpzeCkkLyxcbiAgICBleGNsdWRlOiBuZXcgUmVnRXhwKGAobm9kZV9tb2R1bGVzfCR7Y29uZmlnLnBhdGhzLkVYQ0xVREVfTU9EVUxFU30pYCksXG4gICAgdXNlOiBbXG4gICAgICB7XG4gICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBjYWNoZURpcmVjdG9yeTogc3RhZ2UgIT09ICdwcm9kJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfVxufVxuIl19