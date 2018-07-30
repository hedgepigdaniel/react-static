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
  prefetchRate: 3,
  inlineCss: false,
  outputFileRate: 100,
  extractCssChunks: false,
  entry: './root/src/index.js',
  paths: {
    ROOT: './root/',
    SRC: './root/src',
    PUBLIC: './root/public',
    PACKAGE: './root/package.json',
    DIST: './root/tmp/dev-server',
    ASSETS: './root/tmp/dev-server',
    STATIC_DATA: './root/tmp/dev-server/staticData',
    HTML_TEMPLATE: './root/tmp/dev-server/index.html',
    LOCAL_NODE_MODULES: './dirname/../../node_modules',
    NODE_MODULES: './root/node_modules'
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/__mocks__/defaultConfigDevelopment.mock.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvX19tb2Nrc19fL2RlZmF1bHRDb25maWdEZXZlbG9wbWVudC5tb2NrLmpzIl0sIm5hbWVzIjpbInNpdGVSb290IiwiYmFzZVBhdGgiLCJwcmVmZXRjaFJhdGUiLCJpbmxpbmVDc3MiLCJvdXRwdXRGaWxlUmF0ZSIsImV4dHJhY3RDc3NDaHVua3MiLCJlbnRyeSIsInBhdGhzIiwiUk9PVCIsIlNSQyIsIlBVQkxJQyIsIlBBQ0tBR0UiLCJESVNUIiwiQVNTRVRTIiwiU1RBVElDX0RBVEEiLCJIVE1MX1RFTVBMQVRFIiwiTE9DQUxfTk9ERV9NT0RVTEVTIiwiTk9ERV9NT0RVTEVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O2VBQWU7QUFDYkEsWUFBVSxFQURHO0FBRWJDLFlBQVUsRUFGRztBQUdiQyxnQkFBYyxDQUhEO0FBSWJDLGFBQVcsS0FKRTtBQUtiQyxrQkFBZ0IsR0FMSDtBQU1iQyxvQkFBa0IsS0FOTDtBQU9iQyxTQUFPLHFCQVBNO0FBUWJDLFNBQU87QUFDTEMsVUFBTSxTQUREO0FBRUxDLFNBQUssWUFGQTtBQUdMQyxZQUFRLGVBSEg7QUFJTEMsYUFBUyxxQkFKSjtBQUtMQyxVQUFNLHVCQUxEO0FBTUxDLFlBQVEsdUJBTkg7QUFPTEMsaUJBQWEsa0NBUFI7QUFRTEMsbUJBQWUsa0NBUlY7QUFTTEMsd0JBQW9CLDhCQVRmO0FBVUxDLGtCQUFjO0FBVlQ7QUFSTSxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBzaXRlUm9vdDogJycsXG4gIGJhc2VQYXRoOiAnJyxcbiAgcHJlZmV0Y2hSYXRlOiAzLFxuICBpbmxpbmVDc3M6IGZhbHNlLFxuICBvdXRwdXRGaWxlUmF0ZTogMTAwLFxuICBleHRyYWN0Q3NzQ2h1bmtzOiBmYWxzZSxcbiAgZW50cnk6ICcuL3Jvb3Qvc3JjL2luZGV4LmpzJyxcbiAgcGF0aHM6IHtcbiAgICBST09UOiAnLi9yb290LycsXG4gICAgU1JDOiAnLi9yb290L3NyYycsXG4gICAgUFVCTElDOiAnLi9yb290L3B1YmxpYycsXG4gICAgUEFDS0FHRTogJy4vcm9vdC9wYWNrYWdlLmpzb24nLFxuICAgIERJU1Q6ICcuL3Jvb3QvdG1wL2Rldi1zZXJ2ZXInLFxuICAgIEFTU0VUUzogJy4vcm9vdC90bXAvZGV2LXNlcnZlcicsXG4gICAgU1RBVElDX0RBVEE6ICcuL3Jvb3QvdG1wL2Rldi1zZXJ2ZXIvc3RhdGljRGF0YScsXG4gICAgSFRNTF9URU1QTEFURTogJy4vcm9vdC90bXAvZGV2LXNlcnZlci9pbmRleC5odG1sJyxcbiAgICBMT0NBTF9OT0RFX01PRFVMRVM6ICcuL2Rpcm5hbWUvLi4vLi4vbm9kZV9tb2R1bGVzJyxcbiAgICBOT0RFX01PRFVMRVM6ICcuL3Jvb3Qvbm9kZV9tb2R1bGVzJyxcbiAgfSxcbn1cbiJdfQ==