"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  siteRoot: '',
  basePath: '',
  assetsPath: '',
  prefetchRate: 3,
  inlineCss: false,
  outputFileRate: 100,
  extractCssChunks: false,
  entry: './root/src/index.js',
  paths: {
    ROOT: './root/',
    TEMP: './root/tmp',
    SRC: './root/src',
    DIST: './root/dist',
    ASSETS: './root/dist',
    PUBLIC: './root/public',
    PACKAGE: './root/package.json',
    NODE_MODULES: './root/node_modules',
    STATIC_DATA: './root/dist/staticData',
    HTML_TEMPLATE: './root/dist/index.html',
    LOCAL_NODE_MODULES: './dirname/../../node_modules'
  }
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/__mocks__/defaultConfigProduction.mock.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvX19tb2Nrc19fL2RlZmF1bHRDb25maWdQcm9kdWN0aW9uLm1vY2suanMiXSwibmFtZXMiOlsic2l0ZVJvb3QiLCJiYXNlUGF0aCIsImFzc2V0c1BhdGgiLCJwcmVmZXRjaFJhdGUiLCJpbmxpbmVDc3MiLCJvdXRwdXRGaWxlUmF0ZSIsImV4dHJhY3RDc3NDaHVua3MiLCJlbnRyeSIsInBhdGhzIiwiUk9PVCIsIlRFTVAiLCJTUkMiLCJESVNUIiwiQVNTRVRTIiwiUFVCTElDIiwiUEFDS0FHRSIsIk5PREVfTU9EVUxFUyIsIlNUQVRJQ19EQVRBIiwiSFRNTF9URU1QTEFURSIsIkxPQ0FMX05PREVfTU9EVUxFUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztlQUFlO0FBQ2JBLFlBQVUsRUFERztBQUViQyxZQUFVLEVBRkc7QUFHYkMsY0FBWSxFQUhDO0FBSWJDLGdCQUFjLENBSkQ7QUFLYkMsYUFBVyxLQUxFO0FBTWJDLGtCQUFnQixHQU5IO0FBT2JDLG9CQUFrQixLQVBMO0FBUWJDLFNBQU8scUJBUk07QUFTYkMsU0FBTztBQUNMQyxVQUFNLFNBREQ7QUFFTEMsVUFBTSxZQUZEO0FBR0xDLFNBQUssWUFIQTtBQUlMQyxVQUFNLGFBSkQ7QUFLTEMsWUFBUSxhQUxIO0FBTUxDLFlBQVEsZUFOSDtBQU9MQyxhQUFTLHFCQVBKO0FBUUxDLGtCQUFjLHFCQVJUO0FBU0xDLGlCQUFhLHdCQVRSO0FBVUxDLG1CQUFlLHdCQVZWO0FBV0xDLHdCQUFvQjtBQVhmO0FBVE0sQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc2l0ZVJvb3Q6ICcnLFxuICBiYXNlUGF0aDogJycsXG4gIGFzc2V0c1BhdGg6ICcnLFxuICBwcmVmZXRjaFJhdGU6IDMsXG4gIGlubGluZUNzczogZmFsc2UsXG4gIG91dHB1dEZpbGVSYXRlOiAxMDAsXG4gIGV4dHJhY3RDc3NDaHVua3M6IGZhbHNlLFxuICBlbnRyeTogJy4vcm9vdC9zcmMvaW5kZXguanMnLFxuICBwYXRoczoge1xuICAgIFJPT1Q6ICcuL3Jvb3QvJyxcbiAgICBURU1QOiAnLi9yb290L3RtcCcsXG4gICAgU1JDOiAnLi9yb290L3NyYycsXG4gICAgRElTVDogJy4vcm9vdC9kaXN0JyxcbiAgICBBU1NFVFM6ICcuL3Jvb3QvZGlzdCcsXG4gICAgUFVCTElDOiAnLi9yb290L3B1YmxpYycsXG4gICAgUEFDS0FHRTogJy4vcm9vdC9wYWNrYWdlLmpzb24nLFxuICAgIE5PREVfTU9EVUxFUzogJy4vcm9vdC9ub2RlX21vZHVsZXMnLFxuICAgIFNUQVRJQ19EQVRBOiAnLi9yb290L2Rpc3Qvc3RhdGljRGF0YScsXG4gICAgSFRNTF9URU1QTEFURTogJy4vcm9vdC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIExPQ0FMX05PREVfTU9EVUxFUzogJy4vZGlybmFtZS8uLi8uLi9ub2RlX21vZHVsZXMnLFxuICB9LFxufVxuIl19