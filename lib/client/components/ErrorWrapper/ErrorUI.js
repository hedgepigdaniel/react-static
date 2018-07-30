"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/ErrorUI.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var ErrorUI = function ErrorUI(_ref) {
  var error = _ref.error,
      errorInfo = _ref.errorInfo;
  return _react.default.createElement("div", {
    style: {
      margin: '1rem',
      padding: '1rem',
      background: 'rgba(0,0,0,0.05)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("pre", {
    style: {
      whiteSpace: 'normal',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _react.default.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, error && error.toString())), _react.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "This error occurred here:"), _react.default.createElement("pre", {
    style: {
      color: 'red',
      overflow: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _react.default.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, errorInfo.componentStack)), _react.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "For more information, please see the console."));
};

ErrorUI.propTypes = {
  error: _propTypes.default.object.isRequired,
  errorInfo: _propTypes.default.object.isRequired
};
var _default = ErrorUI;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorUI, "ErrorUI", "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/ErrorUI.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/client/components/ErrorWrapper/ErrorUI.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvcldyYXBwZXIvRXJyb3JVSS5qcyJdLCJuYW1lcyI6WyJFcnJvclVJIiwiZXJyb3IiLCJlcnJvckluZm8iLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIndoaXRlU3BhY2UiLCJjb2xvciIsInRvU3RyaW5nIiwib3ZlcmZsb3ciLCJjb21wb25lbnRTdGFjayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsU0FBVixRQUFVQSxTQUFWO0FBQUEsU0FDZDtBQUNFLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLGVBQVMsTUFGSjtBQUdMQyxrQkFBWTtBQUhQLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FQRixFQVFFO0FBQUssV0FBTztBQUFFQyxrQkFBWSxRQUFkO0FBQXdCQyxhQUFPO0FBQS9CLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTixTQUFTQSxNQUFNTyxRQUFOLEVBQWhCLENBREYsQ0FSRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVhGLEVBWUU7QUFBSyxXQUFPO0FBQUVELGFBQU8sS0FBVDtBQUFnQkUsZ0JBQVU7QUFBMUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9QLFVBQVVRLGNBQWpCLENBREYsQ0FaRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQWZGLENBRGM7QUFBQSxDQUFoQjs7QUFvQkFWLFFBQVFXLFNBQVIsR0FBb0I7QUFDbEJWLFNBQU9XLG1CQUFVQyxNQUFWLENBQWlCQyxVQUROO0FBRWxCWixhQUFXVSxtQkFBVUMsTUFBVixDQUFpQkM7QUFGVixDQUFwQjtlQUtlZCxPOzs7Ozs7Ozs7Ozs7OzswQkF6QlRBLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEVycm9yVUkgPSAoeyBlcnJvciwgZXJyb3JJbmZvIH0pID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICBtYXJnaW46ICcxcmVtJyxcbiAgICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMDUpJyxcbiAgICB9fVxuICA+XG4gICAgPGgyPk9oLW5vISBTb21ldGhpbmfigJlzIGdvbmUgd3JvbmchPC9oMj5cbiAgICA8cHJlIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3JtYWwnLCBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICA8Y29kZT57ZXJyb3IgJiYgZXJyb3IudG9TdHJpbmcoKX08L2NvZGU+XG4gICAgPC9wcmU+XG4gICAgPGgzPlRoaXMgZXJyb3Igb2NjdXJyZWQgaGVyZTo8L2gzPlxuICAgIDxwcmUgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgPGNvZGU+e2Vycm9ySW5mby5jb21wb25lbnRTdGFja308L2NvZGU+XG4gICAgPC9wcmU+XG4gICAgPHA+Rm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSBzZWUgdGhlIGNvbnNvbGUuPC9wPlxuICA8L2Rpdj5cbilcblxuRXJyb3JVSS5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGVycm9ySW5mbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclVJXG4iXX0=