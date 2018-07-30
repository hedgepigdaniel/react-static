"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _extractCssChunksWebpackPlugin = _interopRequireDefault(require("extract-css-chunks-webpack-plugin"));

var _postcssFlexbugsFixes = _interopRequireDefault(require("postcss-flexbugs-fixes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function initCSSLoader(stage) {
  var cssLoader = [{
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      minimize: stage === 'prod',
      sourceMap: false
    }
  }, {
    loader: 'postcss-loader',
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebookincubator/create-react-app/issues/2677
      sourceMap: true,
      ident: 'postcss',
      plugins: function plugins() {
        return [_postcssFlexbugsFixes.default, (0, _autoprefixer.default)({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
          flexbox: 'no-2009' // I'd opt in for this - safari 9 & IE 10.

        })];
      }
    }
  }];
  return cssLoader;
}

var _default = function _default(_ref) {
  var stage = _ref.stage,
      isNode = _ref.isNode;
  var cssLoader = initCSSLoader(stage);

  if (stage === 'node' || isNode) {
    return {
      test: /\.css$/,
      loader: cssLoader
    };
  }

  cssLoader = [_extractCssChunksWebpackPlugin.default.loader].concat(cssLoader); // seeing as it's HMR, why not :)

  return {
    test: /\.css$/,
    loader: cssLoader
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

  reactHotLoader.register(initCSSLoader, "initCSSLoader", "/home/daniel/flattenedmonad/react-static/src/static/webpack/rules/cssLoader.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/webpack/rules/cssLoader.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9jc3NMb2FkZXIuanMiXSwibmFtZXMiOlsiaW5pdENTU0xvYWRlciIsInN0YWdlIiwiY3NzTG9hZGVyIiwibG9hZGVyIiwib3B0aW9ucyIsImltcG9ydExvYWRlcnMiLCJtaW5pbWl6ZSIsInNvdXJjZU1hcCIsImlkZW50IiwicGx1Z2lucyIsInBvc3Rjc3NGbGV4YnVnc0ZpeGVzIiwiYnJvd3NlcnMiLCJmbGV4Ym94IiwiaXNOb2RlIiwidGVzdCIsIkV4dHJhY3RDc3NDaHVua3MiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCLE1BQU1DLFlBQVksQ0FDaEI7QUFDRUMsWUFBUSxZQURWO0FBRUVDLGFBQVM7QUFDUEMscUJBQWUsQ0FEUjtBQUVQQyxnQkFBVUwsVUFBVSxNQUZiO0FBR1BNLGlCQUFXO0FBSEo7QUFGWCxHQURnQixFQVNoQjtBQUNFSixZQUFRLGdCQURWO0FBRUVDLGFBQVM7QUFDUDtBQUNBO0FBQ0FHLGlCQUFXLElBSEo7QUFJUEMsYUFBTyxTQUpBO0FBS1BDLGVBQVM7QUFBQSxlQUFNLENBQ2JDLDZCQURhLEVBRWIsMkJBQWE7QUFDWEMsb0JBQVUsQ0FDUixLQURRLEVBRVIsaUJBRlEsRUFHUixhQUhRLEVBSVIsWUFKUSxDQURDO0FBT1hDLG1CQUFTLFNBUEUsQ0FPUzs7QUFQVCxTQUFiLENBRmEsQ0FBTjtBQUFBO0FBTEY7QUFGWCxHQVRnQixDQUFsQjtBQStCQSxTQUFPVixTQUFQO0FBQ0Q7O2VBRWMsd0JBQTRCO0FBQUEsTUFBakJELEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVZZLE1BQVUsUUFBVkEsTUFBVTtBQUN6QyxNQUFJWCxZQUFZRixjQUFjQyxLQUFkLENBQWhCOztBQUNBLE1BQUlBLFVBQVUsTUFBVixJQUFvQlksTUFBeEIsRUFBZ0M7QUFDOUIsV0FBTztBQUNMQyxZQUFNLFFBREQ7QUFFTFgsY0FBUUQ7QUFGSCxLQUFQO0FBSUQ7O0FBRURBLGNBQVksQ0FBQ2EsdUNBQWlCWixNQUFsQixFQUEwQmEsTUFBMUIsQ0FBaUNkLFNBQWpDLENBQVosQ0FUeUMsQ0FTZTs7QUFFeEQsU0FBTztBQUNMWSxVQUFNLFFBREQ7QUFFTFgsWUFBUUQ7QUFGSCxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7OzBCQWxEUUYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IEV4dHJhY3RDc3NDaHVua3MgZnJvbSAnZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luJ1xuaW1wb3J0IHBvc3Rjc3NGbGV4YnVnc0ZpeGVzIGZyb20gJ3Bvc3Rjc3MtZmxleGJ1Z3MtZml4ZXMnXG5cbmZ1bmN0aW9uIGluaXRDU1NMb2FkZXIoc3RhZ2UpIHtcbiAgY29uc3QgY3NzTG9hZGVyID0gW1xuICAgIHtcbiAgICAgIGxvYWRlcjogJ2Nzcy1sb2FkZXInLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpbXBvcnRMb2FkZXJzOiAxLFxuICAgICAgICBtaW5pbWl6ZTogc3RhZ2UgPT09ICdwcm9kJyxcbiAgICAgICAgc291cmNlTWFwOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsb2FkZXI6ICdwb3N0Y3NzLWxvYWRlcicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vIE5lY2Vzc2FyeSBmb3IgZXh0ZXJuYWwgQ1NTIGltcG9ydHMgdG8gd29ya1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2tpbmN1YmF0b3IvY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjY3N1xuICAgICAgICBzb3VyY2VNYXA6IHRydWUsXG4gICAgICAgIGlkZW50OiAncG9zdGNzcycsXG4gICAgICAgIHBsdWdpbnM6ICgpID0+IFtcbiAgICAgICAgICBwb3N0Y3NzRmxleGJ1Z3NGaXhlcyxcbiAgICAgICAgICBhdXRvcHJlZml4ZXIoe1xuICAgICAgICAgICAgYnJvd3NlcnM6IFtcbiAgICAgICAgICAgICAgJz4xJScsXG4gICAgICAgICAgICAgICdsYXN0IDQgdmVyc2lvbnMnLFxuICAgICAgICAgICAgICAnRmlyZWZveCBFU1InLFxuICAgICAgICAgICAgICAnbm90IGllIDwgOScsIC8vIFJlYWN0IGRvZXNuJ3Qgc3VwcG9ydCBJRTggYW55d2F5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmxleGJveDogJ25vLTIwMDknLCAvLyBJJ2Qgb3B0IGluIGZvciB0aGlzIC0gc2FmYXJpIDkgJiBJRSAxMC5cbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXVxuICByZXR1cm4gY3NzTG9hZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHsgc3RhZ2UsIGlzTm9kZSB9KSB7XG4gIGxldCBjc3NMb2FkZXIgPSBpbml0Q1NTTG9hZGVyKHN0YWdlKVxuICBpZiAoc3RhZ2UgPT09ICdub2RlJyB8fCBpc05vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgbG9hZGVyOiBjc3NMb2FkZXIsXG4gICAgfVxuICB9XG5cbiAgY3NzTG9hZGVyID0gW0V4dHJhY3RDc3NDaHVua3MubG9hZGVyXS5jb25jYXQoY3NzTG9hZGVyKSAvLyBzZWVpbmcgYXMgaXQncyBITVIsIHdoeSBub3QgOilcblxuICByZXR1cm4ge1xuICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICBsb2FkZXI6IGNzc0xvYWRlcixcbiAgfVxufVxuIl19