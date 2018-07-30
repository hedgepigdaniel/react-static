"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _path = _interopRequireDefault(require("path"));

var _caseSensitivePathsWebpackPlugin = _interopRequireDefault(require("case-sensitive-paths-webpack-plugin"));

var _webpackBundleAnalyzer = require("webpack-bundle-analyzer");

var _uglifyjsWebpackPlugin = _interopRequireDefault(require("uglifyjs-webpack-plugin"));

var _webpackNodeExternals = _interopRequireDefault(require("webpack-node-externals"));

var _extractCssChunksWebpackPlugin = _interopRequireDefault(require("extract-css-chunks-webpack-plugin"));

var _optimizeCssAssetsWebpackPlugin = _interopRequireDefault(require("optimize-css-assets-webpack-plugin"));

var _rules = _interopRequireDefault(require("./rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function common(config) {
  var _config$paths = config.paths,
      ROOT = _config$paths.ROOT,
      DIST = _config$paths.DIST,
      NODE_MODULES = _config$paths.NODE_MODULES,
      SRC = _config$paths.SRC,
      ASSETS = _config$paths.ASSETS;
  process.env.REACT_STATIC_SITE_ROOT = config.siteRoot;
  process.env.REACT_STATIC_BASE_PATH = config.basePath;
  process.env.REACT_STATIC_PUBLIC_PATH = config.publicPath;
  process.env.REACT_STATIC_ASSETS_PATH = config.assetsPath;
  var splitChunks = {
    chunks: 'all',
    minSize: 10000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 5,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        chunks: 'all'
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  };
  var extrackCSSChunks = new _extractCssChunksWebpackPlugin.default({
    filename: '[name].[chunkHash:8].css',
    chunkFilename: '[id].[chunkHash:8].css'
  });

  if (!config.extractCssChunks) {
    splitChunks.cacheGroups = {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      }
    };
    extrackCSSChunks = new _extractCssChunksWebpackPlugin.default({
      filename: '[name].[chunkHash:8].css'
    });
  }

  return {
    mode: 'production',
    context: _path.default.resolve(__dirname, '../../../node_modules'),
    entry: _path.default.resolve(ROOT, config.entry),
    output: {
      filename: '[name].[hash:8].js',
      // dont use chunkhash, its not a chunk
      chunkFilename: 'templates/[name].[chunkHash:8].js',
      path: ASSETS,
      publicPath: process.env.REACT_STATIC_ASSETS_PATH || '/'
    },
    optimization: {
      minimize: true,
      minimizer: [new _uglifyjsWebpackPlugin.default({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps

      }), new _optimizeCssAssetsWebpackPlugin.default({})],
      splitChunks: splitChunks
    },
    module: {
      rules: (0, _rules.default)({
        config: config,
        stage: 'prod',
        isNode: false
      })
    },
    resolve: {
      modules: [SRC, NODE_MODULES, 'node_modules', _path.default.resolve(__dirname, '../../../node_modules'), DIST],
      mainFields: ['browser', 'main'],
      extensions: ['.js', '.json', '.jsx']
    },
    externals: [],
    target: undefined,
    plugins: [new _webpack.default.EnvironmentPlugin(process.env), extrackCSSChunks, new _caseSensitivePathsWebpackPlugin.default(), config.bundleAnalyzer && new _webpackBundleAnalyzer.BundleAnalyzerPlugin()].filter(function (d) {
      return d;
    }),
    devtool: 'source-map'
  };
}

var _default = function _default(_ref) {
  var config = _ref.config,
      isNode = _ref.isNode;
  var result = common(config);
  if (!isNode) return result;
  result.output.filename = 'static.[chunkHash:8].js';
  result.output.libraryTarget = 'umd';
  result.optimization.minimize = false;
  result.optimization.minimizer = [];
  result.target = 'node';
  result.externals = [(0, _webpackNodeExternals.default)({
    whitelist: ['react-universal-component', 'webpack-flush-chunks', 'react-static-routes']
  })]; //
  // module.rules

  result.module.rules = (0, _rules.default)({
    config: config,
    stage: 'prod',
    isNode: true
  });
  result.plugins = [new _webpack.default.EnvironmentPlugin(process.env), new _caseSensitivePathsWebpackPlugin.default(), new _webpack.default.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })];
  return result;
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

  reactHotLoader.register(common, "common", "/home/daniel/flattenedmonad/react-static/src/static/webpack/webpack.config.prod.js");
  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/static/webpack/webpack.config.prod.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay93ZWJwYWNrLmNvbmZpZy5wcm9kLmpzIl0sIm5hbWVzIjpbImNvbW1vbiIsImNvbmZpZyIsInBhdGhzIiwiUk9PVCIsIkRJU1QiLCJOT0RFX01PRFVMRVMiLCJTUkMiLCJBU1NFVFMiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX1NJVEVfUk9PVCIsInNpdGVSb290IiwiUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCIsImJhc2VQYXRoIiwiUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIIiwicHVibGljUGF0aCIsIlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCIsImFzc2V0c1BhdGgiLCJzcGxpdENodW5rcyIsImNodW5rcyIsIm1pblNpemUiLCJtaW5DaHVua3MiLCJtYXhBc3luY1JlcXVlc3RzIiwibWF4SW5pdGlhbFJlcXVlc3RzIiwiYXV0b21hdGljTmFtZURlbGltaXRlciIsIm5hbWUiLCJjYWNoZUdyb3VwcyIsInZlbmRvcnMiLCJ0ZXN0IiwicHJpb3JpdHkiLCJkZWZhdWx0IiwicmV1c2VFeGlzdGluZ0NodW5rIiwiZXh0cmFja0NTU0NodW5rcyIsIkV4dHJhY3RDc3NDaHVua3MiLCJmaWxlbmFtZSIsImNodW5rRmlsZW5hbWUiLCJleHRyYWN0Q3NzQ2h1bmtzIiwic3R5bGVzIiwiZW5mb3JjZSIsIm1vZGUiLCJjb250ZXh0IiwicGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJlbnRyeSIsIm91dHB1dCIsIm9wdGltaXphdGlvbiIsIm1pbmltaXplIiwibWluaW1pemVyIiwiVWdsaWZ5SnNQbHVnaW4iLCJjYWNoZSIsInBhcmFsbGVsIiwic291cmNlTWFwIiwiT3B0aW1pemVDU1NBc3NldHNQbHVnaW4iLCJtb2R1bGUiLCJydWxlcyIsInN0YWdlIiwiaXNOb2RlIiwibW9kdWxlcyIsIm1haW5GaWVsZHMiLCJleHRlbnNpb25zIiwiZXh0ZXJuYWxzIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwicGx1Z2lucyIsIndlYnBhY2siLCJFbnZpcm9ubWVudFBsdWdpbiIsIkNhc2VTZW5zaXRpdmVQYXRoc1BsdWdpbiIsImJ1bmRsZUFuYWx5emVyIiwiQnVuZGxlQW5hbHl6ZXJQbHVnaW4iLCJmaWx0ZXIiLCJkIiwiZGV2dG9vbCIsInJlc3VsdCIsImxpYnJhcnlUYXJnZXQiLCJ3aGl0ZWxpc3QiLCJvcHRpbWl6ZSIsIkxpbWl0Q2h1bmtDb3VudFBsdWdpbiIsIm1heENodW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFBQSxzQkFDNEJBLE9BQU9DLEtBRG5DO0FBQUEsTUFDZEMsSUFEYyxpQkFDZEEsSUFEYztBQUFBLE1BQ1JDLElBRFEsaUJBQ1JBLElBRFE7QUFBQSxNQUNGQyxZQURFLGlCQUNGQSxZQURFO0FBQUEsTUFDWUMsR0FEWixpQkFDWUEsR0FEWjtBQUFBLE1BQ2lCQyxNQURqQixpQkFDaUJBLE1BRGpCO0FBR3RCQyxVQUFRQyxHQUFSLENBQVlDLHNCQUFaLEdBQXFDVCxPQUFPVSxRQUE1QztBQUNBSCxVQUFRQyxHQUFSLENBQVlHLHNCQUFaLEdBQXFDWCxPQUFPWSxRQUE1QztBQUNBTCxVQUFRQyxHQUFSLENBQVlLLHdCQUFaLEdBQXVDYixPQUFPYyxVQUE5QztBQUNBUCxVQUFRQyxHQUFSLENBQVlPLHdCQUFaLEdBQXVDZixPQUFPZ0IsVUFBOUM7QUFFQSxNQUFNQyxjQUFjO0FBQ2xCQyxZQUFRLEtBRFU7QUFFbEJDLGFBQVMsS0FGUztBQUdsQkMsZUFBVyxDQUhPO0FBSWxCQyxzQkFBa0IsQ0FKQTtBQUtsQkMsd0JBQW9CLENBTEY7QUFNbEJDLDRCQUF3QixHQU5OO0FBT2xCQyxVQUFNLElBUFk7QUFRbEJDLGlCQUFhO0FBQ1hDLGVBQVM7QUFDUEMsY0FBTSx3QkFEQztBQUVQQyxrQkFBVSxDQUFDLEVBRko7QUFHUFYs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QUFtQixDQUNqQixtQ0FBYztBQUNaYyxlQUFXLENBQ1QsMkJBRFMsRUFFVCxzQkFGUyxFQUdULHFCQUhTO0FBREMsR0FBZCxDQURpQixDQUFuQixDQVIwQyxDQWlCMUM7QUFDQTs7QUFDQUYsU0FBT25CLE1BQVAsQ0FBY0MsS0FBZCxHQUFzQixvQkFBTTtBQUFFdEQsa0JBQUY7QUFBVXVELFdBQU8sTUFBakI7QUFBeUJDLFlBQVE7QUFBakMsR0FBTixDQUF0QjtBQUNBZ0IsU0FBT1QsT0FBUCxHQUFpQixDQUNmLElBQUlDLGlCQUFRQyxpQkFBWixDQUE4QjFELFFBQVFDLEdBQXRDLENBRGUsRUFFZixJQUFJMEQsd0NBQUosRUFGZSxFQUdmLElBQUlGLGlCQUFRVyxRQUFSLENBQWlCQyxxQkFBckIsQ0FBMkM7QUFDekNDLGVBQVc7QUFEOEIsR0FBM0MsQ0FIZSxDQUFqQjtBQU9BLFNBQU9MLE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7MEJBNUhRekUsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IENhc2VTZW5zaXRpdmVQYXRoc1BsdWdpbiBmcm9tICdjYXNlLXNlbnNpdGl2ZS1wYXRocy13ZWJwYWNrLXBsdWdpbidcbmltcG9ydCB7IEJ1bmRsZUFuYWx5emVyUGx1Z2luIH0gZnJvbSAnd2VicGFjay1idW5kbGUtYW5hbHl6ZXInXG5pbXBvcnQgVWdsaWZ5SnNQbHVnaW4gZnJvbSAndWdsaWZ5anMtd2VicGFjay1wbHVnaW4nXG5pbXBvcnQgbm9kZUV4dGVybmFscyBmcm9tICd3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzJ1xuaW1wb3J0IEV4dHJhY3RDc3NDaHVua3MgZnJvbSAnZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luJ1xuaW1wb3J0IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luIGZyb20gJ29wdGltaXplLWNzcy1hc3NldHMtd2VicGFjay1wbHVnaW4nXG5pbXBvcnQgcnVsZXMgZnJvbSAnLi9ydWxlcydcblxuZnVuY3Rpb24gY29tbW9uKGNvbmZpZykge1xuICBjb25zdCB7IFJPT1QsIERJU1QsIE5PREVfTU9EVUxFUywgU1JDLCBBU1NFVFMgfSA9IGNvbmZpZy5wYXRoc1xuXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19TSVRFX1JPT1QgPSBjb25maWcuc2l0ZVJvb3RcbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCA9IGNvbmZpZy5iYXNlUGF0aFxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFVCTElDX1BBVEggPSBjb25maWcucHVibGljUGF0aFxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEggPSBjb25maWcuYXNzZXRzUGF0aFxuXG4gIGNvbnN0IHNwbGl0Q2h1bmtzID0ge1xuICAgIGNodW5rczogJ2FsbCcsXG4gICAgbWluU2l6ZTogMTAwMDAsXG4gICAgbWluQ2h1bmtzOiAxLFxuICAgIG1heEFzeW5jUmVxdWVzdHM6IDUsXG4gICAgbWF4SW5pdGlhbFJlcXVlc3RzOiA1LFxuICAgIGF1dG9tYXRpY05hbWVEZWxpbWl0ZXI6ICd+JyxcbiAgICBuYW1lOiB0cnVlLFxuICAgIGNhY2hlR3JvdXBzOiB7XG4gICAgICB2ZW5kb3JzOiB7XG4gICAgICAgIHRlc3Q6IC9bXFxcXC9dbm9kZV9tb2R1bGVzW1xcXFwvXS8sXG4gICAgICAgIHByaW9yaXR5OiAtMTAsXG4gICAgICAgIGNodW5rczogJ2FsbCcsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBtaW5DaHVua3M6IDIsXG4gICAgICAgIHByaW9yaXR5OiAtMjAsXG4gICAgICAgIHJldXNlRXhpc3RpbmdDaHVuazogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuXG4gIGxldCBleHRyYWNrQ1NTQ2h1bmtzID0gbmV3IEV4dHJhY3RDc3NDaHVua3Moe1xuICAgIGZpbGVuYW1lOiAnW25hbWVdLltjaHVua0hhc2g6OF0uY3NzJyxcbiAgICBjaHVua0ZpbGVuYW1lOiAnW2lkXS5bY2h1bmtIYXNoOjhdLmNzcycsXG4gIH0pXG5cbiAgaWYgKCFjb25maWcuZXh0cmFjdENzc0NodW5rcykge1xuICAgIHNwbGl0Q2h1bmtzLmNhY2hlR3JvdXBzID0ge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIG5hbWU6ICdzdHlsZXMnLFxuICAgICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICAgIGNodW5rczogJ2FsbCcsXG4gICAgICAgIGVuZm9yY2U6IHRydWUsXG4gICAgICB9LFxuICAgIH1cbiAgICBleHRyYWNrQ1NTQ2h1bmtzID0gbmV3IEV4dHJhY3RDc3NDaHVua3Moe1xuICAgICAgZmlsZW5hbWU6ICdbbmFtZV0uW2NodW5rSGFzaDo4XS5jc3MnLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiAncHJvZHVjdGlvbicsXG4gICAgY29udGV4dDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL25vZGVfbW9kdWxlcycpLFxuICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoUk9PVCwgY29uZmlnLmVudHJ5KSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgIGZpbGVuYW1lOiAnW25hbWVdLltoYXNoOjhdLmpzJywgLy8gZG9udCB1c2UgY2h1bmtoYXNoLCBpdHMgbm90IGEgY2h1bmtcbiAgICAgIGNodW5rRmlsZW5hbWU6ICd0ZW1wbGF0ZXMvW25hbWVdLltjaHVua0hhc2g6OF0uanMnLFxuICAgICAgcGF0aDogQVNTRVRTLFxuICAgICAgcHVibGljUGF0aDogcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRIIHx8ICcvJyxcbiAgICB9LFxuICAgIG9wdGltaXphdGlvbjoge1xuICAgICAgbWluaW1pemU6IHRydWUsXG4gICAgICBtaW5pbWl6ZXI6IFtcbiAgICAgICAgbmV3IFVnbGlmeUpzUGx1Z2luKHtcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICBwYXJhbGxlbDogdHJ1ZSxcbiAgICAgICAgICBzb3VyY2VNYXA6IHRydWUsIC8vIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IEpTIHNvdXJjZSBtYXBzXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgT3B0aW1pemVDU1NBc3NldHNQbHVnaW4oe30pLFxuICAgICAgXSxcbiAgICAgIHNwbGl0Q2h1bmtzLFxuICAgIH0sXG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogcnVsZXMoeyBjb25maWcsIHN0YWdlOiAncHJvZCcsIGlzTm9kZTogZmFsc2UgfSksXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIFNSQyxcbiAgICAgICAgTk9ERV9NT0RVTEVTLFxuICAgICAgICAnbm9kZV9tb2R1bGVzJyxcbiAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL25vZGVfbW9kdWxlcycpLFxuICAgICAgICBESVNULFxuICAgICAgXSxcbiAgICAgIG1haW5GaWVsZHM6IFsnYnJvd3NlcicsICdtYWluJ10sXG4gICAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanNvbicsICcuanN4J10sXG4gICAgfSxcbiAgICBleHRlcm5hbHM6IFtdLFxuICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIG5ldyB3ZWJwYWNrLkVudmlyb25tZW50UGx1Z2luKHByb2Nlc3MuZW52KSxcbiAgICAgIGV4dHJhY2tDU1NDaHVua3MsXG4gICAgICBuZXcgQ2FzZVNlbnNpdGl2ZVBhdGhzUGx1Z2luKCksXG4gICAgICBjb25maWcuYnVuZGxlQW5hbHl6ZXIgJiYgbmV3IEJ1bmRsZUFuYWx5emVyUGx1Z2luKCksXG4gICAgXS5maWx0ZXIoZCA9PiBkKSxcbiAgICBkZXZ0b29sOiAnc291cmNlLW1hcCcsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBjb25maWcsIGlzTm9kZSB9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGNvbW1vbihjb25maWcpXG4gIGlmICghaXNOb2RlKSByZXR1cm4gcmVzdWx0XG4gIHJlc3VsdC5vdXRwdXQuZmlsZW5hbWUgPSAnc3RhdGljLltjaHVua0hhc2g6OF0uanMnXG4gIHJlc3VsdC5vdXRwdXQubGlicmFyeVRhcmdldCA9ICd1bWQnXG4gIHJlc3VsdC5vcHRpbWl6YXRpb24ubWluaW1pemUgPSBmYWxzZVxuICByZXN1bHQub3B0aW1pemF0aW9uLm1pbmltaXplciA9IFtdXG4gIHJlc3VsdC50YXJnZXQgPSAnbm9kZSdcbiAgcmVzdWx0LmV4dGVybmFscyA9IFtcbiAgICBub2RlRXh0ZXJuYWxzKHtcbiAgICAgIHdoaXRlbGlzdDogW1xuICAgICAgICAncmVhY3QtdW5pdmVyc2FsLWNvbXBvbmVudCcsXG4gICAgICAgICd3ZWJwYWNrLWZsdXNoLWNodW5rcycsXG4gICAgICAgICdyZWFjdC1zdGF0aWMtcm91dGVzJyxcbiAgICAgIF0sXG4gICAgfSksXG4gIF1cbiAgLy9cbiAgLy8gbW9kdWxlLnJ1bGVzXG4gIHJlc3VsdC5tb2R1bGUucnVsZXMgPSBydWxlcyh7IGNvbmZpZywgc3RhZ2U6ICdwcm9kJywgaXNOb2RlOiB0cnVlIH0pXG4gIHJlc3VsdC5wbHVnaW5zID0gW1xuICAgIG5ldyB3ZWJwYWNrLkVudmlyb25tZW50UGx1Z2luKHByb2Nlc3MuZW52KSxcbiAgICBuZXcgQ2FzZVNlbnNpdGl2ZVBhdGhzUGx1Z2luKCksXG4gICAgbmV3IHdlYnBhY2sub3B0aW1pemUuTGltaXRDaHVua0NvdW50UGx1Z2luKHtcbiAgICAgIG1heENodW5rczogMSxcbiAgICB9KSxcbiAgXVxuICByZXR1cm4gcmVzdWx0XG59XG4iXX0=