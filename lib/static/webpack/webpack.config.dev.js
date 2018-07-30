"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

var _caseSensitivePathsWebpackPlugin = _interopRequireDefault(require("case-sensitive-paths-webpack-plugin"));

var _extractCssChunksWebpackPlugin = _interopRequireDefault(require("extract-css-chunks-webpack-plugin"));

var _path = _interopRequireDefault(require("path"));

var _rules = _interopRequireDefault(require("./rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
  var config = _ref.config;
  var _config$paths = config.paths,
      ROOT = _config$paths.ROOT,
      DIST = _config$paths.DIST,
      NODE_MODULES = _config$paths.NODE_MODULES,
      SRC = _config$paths.SRC,
      HTML_TEMPLATE = _config$paths.HTML_TEMPLATE;
  process.env.REACT_STATIC_BASE_PATH = config.basePath;
  process.env.REACT_STATIC_PUBLIC_PATH = config.publicPath;
  process.env.REACT_STATIC_ASSETS_PATH = config.assetsPath;
  return {
    mode: 'development',
    optimization: {
      noEmitOnErrors: true,
      concatenateModules: true
    },
    context: _path.default.resolve(__dirname, '../../../node_modules'),
    entry: [require.resolve('react-dev-utils/webpackHotDevClient'), require.resolve('webpack/hot/only-dev-server'), _path.default.resolve(ROOT, config.entry)],
    output: {
      filename: '[name].js',
      // never hash dev code
      chunkFilename: 'templates/[name].js',
      path: DIST,
      publicPath: process.env.REACT_STATIC_ASSETS_PATH || '/'
    },
    module: {
      rules: (0, _rules.default)({
        config: config,
        stage: 'dev'
      })
    },
    resolve: {
      modules: [SRC, NODE_MODULES, 'node_modules', _path.default.resolve(__dirname, '../../../node_modules'), DIST],
      mainFields: ['browser', 'main'],
      extensions: ['.js', '.json', '.jsx']
    },
    plugins: [new _webpack.default.EnvironmentPlugin(process.env), new _htmlWebpackPlugin.default({
      inject: true,
      template: "!!raw-loader!".concat(HTML_TEMPLATE)
    }), new _webpack.default.HotModuleReplacementPlugin(), new _webpack.default.NamedModulesPlugin(), new _webpack.default.NoEmitOnErrorsPlugin(), new _caseSensitivePathsWebpackPlugin.default(), new _extractCssChunksWebpackPlugin.default({
      hot: true
    })],
    devtool: 'cheap-module-source-map'
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/webpack/webpack.config.dev.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay93ZWJwYWNrLmNvbmZpZy5kZXYuanMiXSwibmFtZXMiOlsiY29uZmlnIiwicGF0aHMiLCJST09UIiwiRElTVCIsIk5PREVfTU9EVUxFUyIsIlNSQyIsIkhUTUxfVEVNUExBVEUiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCIsImJhc2VQYXRoIiwiUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIIiwicHVibGljUGF0aCIsIlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCIsImFzc2V0c1BhdGgiLCJtb2RlIiwib3B0aW1pemF0aW9uIiwibm9FbWl0T25FcnJvcnMiLCJjb25jYXRlbmF0ZU1vZHVsZXMiLCJjb250ZXh0IiwicGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJlbnRyeSIsInJlcXVpcmUiLCJvdXRwdXQiLCJmaWxlbmFtZSIsImNodW5rRmlsZW5hbWUiLCJtb2R1bGUiLCJydWxlcyIsInN0YWdlIiwibW9kdWxlcyIsIm1haW5GaWVsZHMiLCJleHRlbnNpb25zIiwicGx1Z2lucyIsIndlYnBhY2siLCJFbnZpcm9ubWVudFBsdWdpbiIsIkh0bWxXZWJwYWNrUGx1Z2luIiwiaW5qZWN0IiwidGVtcGxhdGUiLCJIb3RNb2R1bGVSZXBsYWNlbWVudFBsdWdpbiIsIk5hbWVkTW9kdWxlc1BsdWdpbiIsIk5vRW1pdE9uRXJyb3JzUGx1Z2luIiwiQ2FzZVNlbnNpdGl2ZVBhdGhzUGx1Z2luIiwiRXh0cmFjdENzc0NodW5rcyIsImhvdCIsImRldnRvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztlQUVlLHdCQUFxQjtBQUFBLE1BQVZBLE1BQVUsUUFBVkEsTUFBVTtBQUFBLHNCQUN1QkEsT0FBT0MsS0FEOUI7QUFBQSxNQUMxQkMsSUFEMEIsaUJBQzFCQSxJQUQwQjtBQUFBLE1BQ3BCQyxJQURvQixpQkFDcEJBLElBRG9CO0FBQUEsTUFDZEMsWUFEYyxpQkFDZEEsWUFEYztBQUFBLE1BQ0FDLEdBREEsaUJBQ0FBLEdBREE7QUFBQSxNQUNLQyxhQURMLGlCQUNLQSxhQURMO0FBR2xDQyxVQUFRQyxHQUFSLENBQVlDLHNCQUFaLEdBQXFDVCxPQUFPVSxRQUE1QztBQUNBSCxVQUFRQyxHQUFSLENBQVlHLHdCQUFaLEdBQXVDWCxPQUFPWSxVQUE5QztBQUNBTCxVQUFRQyxHQUFSLENBQVlLLHdCQUFaLEdBQXVDYixPQUFPYyxVQUE5QztBQUVBLFNBQU87QUFDTEMsVUFBTSxhQUREO0FBRUxDLGtCQUFjO0FBQ1pDLHNCQUFnQixJQURKO0FBRVpDLDBCQUFvQjtBQUZSLEtBRlQ7QUFNTEMsYUFBU0MsY0FBS0MsT0FBTCxDQUFhQyxTQUFiLEVBQXdCLHVCQUF4QixDQU5KO0FBT0xDLFdBQU8sQ0FDTEMsUUFBUUgsT0FBUixDQUFnQixxQ0FBaEIsQ0FESyxFQUVMRyxRQUFRSCxPQUFSLENBQWdCLDZCQUFoQixDQUZLLEVBR0xELGNBQUtDLE9BQUwsQ0FBYW5CLElBQWIsRUFBbUJGLE9BQU91QixLQUExQixDQUhLLENBUEY7QUFZTEUsWUFBUTtBQUNOQyxnQkFBVSxXQURKO0FBQ2lCO0FBQ3ZCQyxxQkFBZSxxQkFGVDtBQUdOUCxZQUFNakIsSUFIQTtBQUlOUyxrQkFBWUwsUUFBUUMsR0FBUixDQUFZSyx3QkFBWixJQUF3QztBQUo5QyxLQVpIO0FBa0JMZSxZQUFRO0FBQ05DLGFBQU8sb0JBQU07QUFBRTdCLHNCQUFGO0FBQVU4QixlQUFPO0FBQWpCLE9BQU47QUFERCxLQWxCSDtBQXFCTFQsYUFBUztBQUNQVSxlQUFTLENBQ1AxQixHQURPLEVBRVBELFlBRk8sRUFHUCxjQUhPLEVBSVBnQixjQUFLQyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsdUJBQXhCLENBSk8sRUFLUG5CLElBTE8sQ0FERjtBQVFQNkIsa0JBQVksQ0FBQyxTQUFELEVBQVksTUFBWixDQVJMO0FBU1BDLGtCQUFZLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakI7QUFUTCxLQXJCSjtBQWdDTEMsYUFBUyxDQUNQLElBQUlDLGlCQUFRQyxpQkFBWixDQUE4QjdCLFFBQVFDLEdBQXRDLENBRE8sRUFFUCxJQUFJNkIsMEJBQUosQ0FBc0I7QUFDcEJDLGNBQVEsSUFEWTtBQUVwQkMsdUNBQTBCakMsYUFBMUI7QUFGb0IsS0FBdEIsQ0FGTyxFQU1QLElBQUk2QixpQkFBUUssMEJBQVosRUFOTyxFQU9QLElBQUlMLGlCQUFRTSxrQkFBWixFQVBPLEVBUVAsSUFBSU4saUJBQVFPLG9CQUFaLEVBUk8sRUFTUCxJQUFJQyx3Q0FBSixFQVRPLEVBVVAsSUFBSUMsc0NBQUosQ0FBcUI7QUFBRUMsV0FBSztBQUFQLEtBQXJCLENBVk8sQ0FoQ0o7QUE0Q0xDLGFBQVM7QUE1Q0osR0FBUDtBQThDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjaydcbmltcG9ydCBIdG1sV2VicGFja1BsdWdpbiBmcm9tICdodG1sLXdlYnBhY2stcGx1Z2luJ1xuaW1wb3J0IENhc2VTZW5zaXRpdmVQYXRoc1BsdWdpbiBmcm9tICdjYXNlLXNlbnNpdGl2ZS1wYXRocy13ZWJwYWNrLXBsdWdpbidcbmltcG9ydCBFeHRyYWN0Q3NzQ2h1bmtzIGZyb20gJ2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCBydWxlcyBmcm9tICcuL3J1bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGNvbmZpZyB9KSB7XG4gIGNvbnN0IHsgUk9PVCwgRElTVCwgTk9ERV9NT0RVTEVTLCBTUkMsIEhUTUxfVEVNUExBVEUgfSA9IGNvbmZpZy5wYXRoc1xuXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19CQVNFX1BBVEggPSBjb25maWcuYmFzZVBhdGhcbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIID0gY29uZmlnLnB1YmxpY1BhdGhcbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRIID0gY29uZmlnLmFzc2V0c1BhdGhcblxuICByZXR1cm4ge1xuICAgIG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gICAgb3B0aW1pemF0aW9uOiB7XG4gICAgICBub0VtaXRPbkVycm9yczogdHJ1ZSxcbiAgICAgIGNvbmNhdGVuYXRlTW9kdWxlczogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbnRleHQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi9ub2RlX21vZHVsZXMnKSxcbiAgICBlbnRyeTogW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKCdyZWFjdC1kZXYtdXRpbHMvd2VicGFja0hvdERldkNsaWVudCcpLFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKCd3ZWJwYWNrL2hvdC9vbmx5LWRldi1zZXJ2ZXInKSxcbiAgICAgIHBhdGgucmVzb2x2ZShST09ULCBjb25maWcuZW50cnkpLFxuICAgIF0sXG4gICAgb3V0cHV0OiB7XG4gICAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsIC8vIG5ldmVyIGhhc2ggZGV2IGNvZGVcbiAgICAgIGNodW5rRmlsZW5hbWU6ICd0ZW1wbGF0ZXMvW25hbWVdLmpzJyxcbiAgICAgIHBhdGg6IERJU1QsXG4gICAgICBwdWJsaWNQYXRoOiBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEggfHwgJy8nLFxuICAgIH0sXG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogcnVsZXMoeyBjb25maWcsIHN0YWdlOiAnZGV2JyB9KSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgU1JDLFxuICAgICAgICBOT0RFX01PRFVMRVMsXG4gICAgICAgICdub2RlX21vZHVsZXMnLFxuICAgICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzJyksXG4gICAgICAgIERJU1QsXG4gICAgICBdLFxuICAgICAgbWFpbkZpZWxkczogWydicm93c2VyJywgJ21haW4nXSxcbiAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy5qc29uJywgJy5qc3gnXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIG5ldyB3ZWJwYWNrLkVudmlyb25tZW50UGx1Z2luKHByb2Nlc3MuZW52KSxcbiAgICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICAgIGluamVjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IGAhIXJhdy1sb2FkZXIhJHtIVE1MX1RFTVBMQVRFfWAsXG4gICAgICB9KSxcbiAgICAgIG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCksXG4gICAgICBuZXcgd2VicGFjay5OYW1lZE1vZHVsZXNQbHVnaW4oKSxcbiAgICAgIG5ldyB3ZWJwYWNrLk5vRW1pdE9uRXJyb3JzUGx1Z2luKCksXG4gICAgICBuZXcgQ2FzZVNlbnNpdGl2ZVBhdGhzUGx1Z2luKCksXG4gICAgICBuZXcgRXh0cmFjdENzc0NodW5rcyh7IGhvdDogdHJ1ZSB9KSxcbiAgICBdLFxuICAgIGRldnRvb2w6ICdjaGVhcC1tb2R1bGUtc291cmNlLW1hcCcsXG4gIH1cbn1cbiJdfQ==