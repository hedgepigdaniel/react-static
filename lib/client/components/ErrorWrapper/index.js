"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorCatcher = _interopRequireDefault(require("./ErrorCatcher"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var ErrorWrapper = function ErrorWrapper(_ref) {
  var showErrorsInProduction = _ref.showErrorsInProduction,
      children = _ref.children;

  if (process.env.REACT_STATIC_ENV === 'development' || showErrorsInProduction) {
    return _react.default.createElement(_ErrorCatcher.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, children);
  }

  return _react.default.Children.only(children);
};

ErrorWrapper.propTypes = {
  showErrorsInProduction: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
ErrorWrapper.defaultProps = {
  showErrorsInProduction: false
};
var _default = ErrorWrapper;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorWrapper, "ErrorWrapper", "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/index.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/index.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvcldyYXBwZXIvaW5kZXguanMiXSwibmFtZXMiOlsiRXJyb3JXcmFwcGVyIiwic2hvd0Vycm9yc0luUHJvZHVjdGlvbiIsImNoaWxkcmVuIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19FTlYiLCJSZWFjdCIsIkNoaWxkcmVuIiwib25seSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBMEM7QUFBQSxNQUF2Q0Msc0JBQXVDLFFBQXZDQSxzQkFBdUM7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzdELE1BQ0VDLFFBQVFDLEdBQVIsQ0FBWUMsZ0JBQVosS0FBaUMsYUFBakMsSUFDQUosc0JBRkYsRUFHRTtBQUNBLFdBQU8sNkJBQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZUMsUUFBZixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0ksZUFBTUMsUUFBTixDQUFlQyxJQUFmLENBQW9CTixRQUFwQixDQUFQO0FBQ0QsQ0FURDs7QUFXQUYsYUFBYVMsU0FBYixHQUF5QjtBQUN2QlIsMEJBQXdCUyxtQkFBVUMsSUFEWDtBQUV2QlQsWUFBVVEsbUJBQVVFLElBQVYsQ0FBZUM7QUFGRixDQUF6QjtBQUtBYixhQUFhYyxZQUFiLEdBQTRCO0FBQzFCYiwwQkFBd0I7QUFERSxDQUE1QjtlQUllRCxZOzs7Ozs7Ozs7Ozs7OzswQkFwQlRBLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRXJyb3JDYXRjaGVyIGZyb20gJy4vRXJyb3JDYXRjaGVyJ1xuXG5jb25zdCBFcnJvcldyYXBwZXIgPSAoeyBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8XG4gICAgc2hvd0Vycm9yc0luUHJvZHVjdGlvblxuICApIHtcbiAgICByZXR1cm4gPEVycm9yQ2F0Y2hlcj57Y2hpbGRyZW59PC9FcnJvckNhdGNoZXI+XG4gIH1cblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbn1cblxuRXJyb3JXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgc2hvd0Vycm9yc0luUHJvZHVjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufVxuXG5FcnJvcldyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uOiBmYWxzZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JXcmFwcGVyXG4iXX0=