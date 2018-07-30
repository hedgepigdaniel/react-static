"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/home/daniel/flattenedmonad/react-static/src/client/components/DevSpinner.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var DevSpinner = function DevSpinner() {
  return null;
}; // eslint-disable-line


if (process.env.REACT_STATIC_ENV === 'development') {
  DevSpinner = function DevSpinner() {
    return _react.default.createElement("div", {
      className: "react-static-loading",
      style: {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, _react.default.createElement("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
      style: {
        width: '50px',
        height: '50px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, _react.default.createElement("circle", {
      style: {
        transformOrigin: '50% 50% 0px',
        animation: 'react-static-loader 1s infinite',
        r: 20,
        stroke: 'rgba(0,0,0,0.4)',
        strokeWidth: 4,
        cx: 25,
        cy: 25,
        strokeDasharray: 10.4,
        strokeLinecap: 'round',
        fill: 'transparent'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })));
  };
}

var _default = DevSpinner;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DevSpinner, "DevSpinner", "/home/daniel/flattenedmonad/react-static/src/client/components/DevSpinner.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/client/components/DevSpinner.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9EZXZTcGlubmVyLmpzIl0sIm5hbWVzIjpbIkRldlNwaW5uZXIiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOViIsImRpc3BsYXkiLCJ3aWR0aCIsInRleHRBbGlnbiIsInBhZGRpbmciLCJoZWlnaHQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJhbmltYXRpb24iLCJyIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJjeCIsImN5Iiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlTGluZWNhcCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWpCLEMsQ0FBNEI7OztBQUU1QixJQUFJQyxRQUFRQyxHQUFSLENBQVlDLGdCQUFaLEtBQWlDLGFBQXJDLEVBQW9EO0FBQ2xESCxlQUFhO0FBQUEsV0FDWDtBQUNFLGlCQUFVLHNCQURaO0FBRUUsYUFBTztBQUNMSSxpQkFBUyxPQURKO0FBRUxDLGVBQU8sTUFGRjtBQUdMQyxtQkFBVyxRQUhOO0FBSUxDLGlCQUFTO0FBSkosT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtNQVRGLEVBcUJFO0FBQ0UsYUFBTztBQUNMRixlQUFPLE1BREY7QUFFTEcsZ0JBQVE7QUFGSCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUU7QUFDRSxhQUFPO0FBQ0xDLHlCQUFpQixhQURaO0FBRUxDLG1CQUFXLGlDQUZOO0FBR0xDLFdBQUcsRUFIRTtBQUlMQyxnQkFBUSxpQkFKSDtBQUtMQyxxQkFBYSxDQUxSO0FBTUxDLFlBQUksRUFOQztBQU9MQyxZQUFJLEVBUEM7QUFRTEMseUJBQWlCLElBUlo7QUFTTEMsdUJBQWUsT0FUVjtBQVVMQyxjQUFNO0FBVkQsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLENBckJGLENBRFc7QUFBQSxHQUFiO0FBNkNEOztlQUVjbEIsVTs7Ozs7Ozs7Ozs7Ozs7MEJBbERYQSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5sZXQgRGV2U3Bpbm5lciA9ICgpID0+IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5pZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBEZXZTcGlubmVyID0gKCkgPT4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LXN0YXRpYy1sb2FkaW5nXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHN0eWxlPlxuICAgICAgICB7YFxuICAgICAgICBAa2V5ZnJhbWVzIHJlYWN0LXN0YXRpYy1sb2FkZXIge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3ZnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICc1MHB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlIDBweCcsXG4gICAgICAgICAgICBhbmltYXRpb246ICdyZWFjdC1zdGF0aWMtbG9hZGVyIDFzIGluZmluaXRlJyxcbiAgICAgICAgICAgIHI6IDIwLFxuICAgICAgICAgICAgc3Ryb2tlOiAncmdiYSgwLDAsMCwwLjQpJyxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiA0LFxuICAgICAgICAgICAgY3g6IDI1LFxuICAgICAgICAgICAgY3k6IDI1LFxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAxMC40LFxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICAgICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldlNwaW5uZXJcbiJdfQ==