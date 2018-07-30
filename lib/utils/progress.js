"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _progress = _interopRequireDefault(require("progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(total, label, options) {
  if (!options) {
    options = {};
  }

  if (!options.format) {
    options.format = "=> ".concat(label ? "".concat(label, " ") : '', "[:bar] :current/:total :percent :rate/s :etas ");
  }

  var stream = options.stream || process.stderr;

  if (stream.isTTY && !options.forceNonTTY) {
    options.total = total;
    return new _progress.default(options.format, options);
  }

  var curr = 0;
  var percent = 0;
  var start = new Date();
  return {
    tick: function tick() {
      curr += 1;
      var ratio = Math.min(Math.max(curr / total, 0), 1);
      var value = Math.floor(ratio * 100);

      if (value >= percent + 5) {
        percent = value;
        var elapsed = new Date() - start;
        var eta = percent === 100 ? 0 : elapsed * (total / curr - 1);
        var rate = curr / (elapsed / 1000);
        stream.write("".concat(options.format.replace('[:bar] ', '').replace('[:bar]', '').replace(':current', curr).replace(':total', total).replace(':elapsed', Number.isNaN(elapsed) ? '0.0' : (elapsed / 1000).toFixed(1)).replace(':eta', Number.isNaN(eta) || !Number.isFinite(eta) ? '0.0' : (eta / 1000).toFixed(1)).replace(':percent', "".concat(percent.toFixed(0), "%")).replace(':rate', Math.round(rate)), "\n"));
      }
    }
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

  reactHotLoader.register(_default, "default", "/home/daniel/flattenedmonad/react-static/src/utils/progress.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9wcm9ncmVzcy5qcyJdLCJuYW1lcyI6WyJ0b3RhbCIsImxhYmVsIiwib3B0aW9ucyIsImZvcm1hdCIsInN0cmVhbSIsInByb2Nlc3MiLCJzdGRlcnIiLCJpc1RUWSIsImZvcmNlTm9uVFRZIiwiUHJvZ3Jlc3MiLCJjdXJyIiwicGVyY2VudCIsInN0YXJ0IiwiRGF0ZSIsInRpY2siLCJyYXRpbyIsIk1hdGgiLCJtaW4iLCJtYXgiLCJ2YWx1ZSIsImZsb29yIiwiZWxhcHNlZCIsImV0YSIsInJhdGUiLCJ3cml0ZSIsInJlcGxhY2UiLCJOdW1iZXIiLCJpc05hTiIsInRvRml4ZWQiLCJpc0Zpbml0ZSIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7ZUFFZSxrQkFBQ0EsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLE9BQWYsRUFBMkI7QUFDeEMsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkEsY0FBVSxFQUFWO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDQSxRQUFRQyxNQUFiLEVBQXFCO0FBQ25CRCxZQUFRQyxNQUFSLGdCQUNFRixrQkFBV0EsS0FBWCxTQUFzQixFQUR4QjtBQUdEOztBQUNELE1BQU1HLFNBQVNGLFFBQVFFLE1BQVIsSUFBa0JDLFFBQVFDLE1BQXpDOztBQUNBLE1BQUlGLE9BQU9HLEtBQVAsSUFBZ0IsQ0FBQ0wsUUFBUU0sV0FBN0IsRUFBMEM7QUFDeENOLFlBQVFGLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0EsV0FBTyxJQUFJUyxpQkFBSixDQUFhUCxRQUFRQyxNQUFyQixFQUE2QkQsT0FBN0IsQ0FBUDtBQUNEOztBQUNELE1BQUlRLE9BQU8sQ0FBWDtBQUNBLE1BQUlDLFVBQVUsQ0FBZDtBQUNBLE1BQU1DLFFBQVEsSUFBSUMsSUFBSixFQUFkO0FBQ0EsU0FBTztBQUNMQyxVQUFNLGdCQUFNO0FBQ1ZKLGNBQVEsQ0FBUjtBQUNBLFVBQU1LLFFBQVFDLEtBQUtDLEdBQUwsQ0FBU0QsS0FBS0UsR0FBTCxDQUFTUixPQUFPVixLQUFoQixFQUF1QixDQUF2QixDQUFULEVBQW9DLENBQXBDLENBQWQ7QUFDQSxVQUFNbUIsUUFBUUgsS0FBS0ksS0FBTCxDQUFXTCxRQUFRLEdBQW5CLENBQWQ7O0FBRUEsVUFBSUksU0FBU1IsVUFBVSxDQUF2QixFQUEwQjtBQUN4QkEsa0JBQVVRLEtBQVY7QUFDQSxZQUFNRSxVQUFVLElBQUlSLElBQUosS0FBYUQsS0FBN0I7QUFDQSxZQUFNVSxNQUFNWCxZQUFZLEdBQVosR0FBa0IsQ0FBbEIsR0FBc0JVLFdBQVdyQixRQUFRVSxJQUFSLEdBQWUsQ0FBMUIsQ0FBbEM7QUFDQSxZQUFNYSxPQUFPYixRQUFRVyxVQUFVLElBQWxCLENBQWI7QUFDQWpCLGVBQU9vQixLQUFQLFdBQ0t0QixRQUFRQyxNQUFSLENBQ0FzQixPQURBLENBQ1EsU0FEUixFQUNtQixFQURuQixFQUVBQSxPQUZBLENBRVEsUUFGUixFQUVrQixFQUZsQixFQUdBQSxPQUhBLENBR1EsVUFIUixFQUdvQmYsSUFIcEIsRUFJQWUsT0FKQSxDQUlRLFFBSlIsRUFJa0J6QixLQUpsQixFQUtBeUIsT0FMQSxDQU1DLFVBTkQsRUFPQ0MsT0FBT0MsS0FBUCxDQUFhTixPQUFiLElBQXdCLEtBQXhCLEdBQWdDLENBQUNBLFVBQVUsSUFBWCxFQUFpQk8sT0FBakIsQ0FBeUIsQ0FBekIsQ0FQakMsRUFTQUgsT0FUQSxDQVVDLE1BVkQsRUFXQ0MsT0FBT0MsS0FBUCxDQUFhTCxHQUFiLEtBQXFCLENBQUNJLE9BQU9HLFFBQVAsQ0FBZ0JQLEdBQWhCLENBQXRCLEdBQ0ksS0FESixHQUVJLENBQUNBLE1BQU0sSUFBUCxFQUFhTSxPQUFiLENBQXFCLENBQXJCLENBYkwsRUFlQUgsT0FmQSxDQWVRLFVBZlIsWUFldUJkLFFBQVFpQixPQUFSLENBQWdCLENBQWhCLENBZnZCLFFBZ0JBSCxPQWhCQSxDQWdCUSxPQWhCUixFQWdCaUJULEtBQUtjLEtBQUwsQ0FBV1AsSUFBWCxDQWhCakIsQ0FETDtBQW1CRDtBQUNGO0FBL0JJLEdBQVA7QUFpQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9ncmVzcyBmcm9tICdwcm9ncmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHRvdGFsLCBsYWJlbCwgb3B0aW9ucykgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuICBpZiAoIW9wdGlvbnMuZm9ybWF0KSB7XG4gICAgb3B0aW9ucy5mb3JtYXQgPSBgPT4gJHtcbiAgICAgIGxhYmVsID8gYCR7bGFiZWx9IGAgOiAnJ1xuICAgIH1bOmJhcl0gOmN1cnJlbnQvOnRvdGFsIDpwZXJjZW50IDpyYXRlL3MgOmV0YXMgYFxuICB9XG4gIGNvbnN0IHN0cmVhbSA9IG9wdGlvbnMuc3RyZWFtIHx8IHByb2Nlc3Muc3RkZXJyXG4gIGlmIChzdHJlYW0uaXNUVFkgJiYgIW9wdGlvbnMuZm9yY2VOb25UVFkpIHtcbiAgICBvcHRpb25zLnRvdGFsID0gdG90YWxcbiAgICByZXR1cm4gbmV3IFByb2dyZXNzKG9wdGlvbnMuZm9ybWF0LCBvcHRpb25zKVxuICB9XG4gIGxldCBjdXJyID0gMFxuICBsZXQgcGVyY2VudCA9IDBcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpXG4gIHJldHVybiB7XG4gICAgdGljazogKCkgPT4ge1xuICAgICAgY3VyciArPSAxXG4gICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnIgLyB0b3RhbCwgMCksIDEpXG4gICAgICBjb25zdCB2YWx1ZSA9IE1hdGguZmxvb3IocmF0aW8gKiAxMDApXG5cbiAgICAgIGlmICh2YWx1ZSA+PSBwZXJjZW50ICsgNSkge1xuICAgICAgICBwZXJjZW50ID0gdmFsdWVcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5ldyBEYXRlKCkgLSBzdGFydFxuICAgICAgICBjb25zdCBldGEgPSBwZXJjZW50ID09PSAxMDAgPyAwIDogZWxhcHNlZCAqICh0b3RhbCAvIGN1cnIgLSAxKVxuICAgICAgICBjb25zdCByYXRlID0gY3VyciAvIChlbGFwc2VkIC8gMTAwMClcbiAgICAgICAgc3RyZWFtLndyaXRlKFxuICAgICAgICAgIGAke29wdGlvbnMuZm9ybWF0XG4gICAgICAgICAgICAucmVwbGFjZSgnWzpiYXJdICcsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ1s6YmFyXScsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoJzpjdXJyZW50JywgY3VycilcbiAgICAgICAgICAgIC5yZXBsYWNlKCc6dG90YWwnLCB0b3RhbClcbiAgICAgICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgICAgICAnOmVsYXBzZWQnLFxuICAgICAgICAgICAgICBOdW1iZXIuaXNOYU4oZWxhcHNlZCkgPyAnMC4wJyA6IChlbGFwc2VkIC8gMTAwMCkudG9GaXhlZCgxKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICc6ZXRhJyxcbiAgICAgICAgICAgICAgTnVtYmVyLmlzTmFOKGV0YSkgfHwgIU51bWJlci5pc0Zpbml0ZShldGEpXG4gICAgICAgICAgICAgICAgPyAnMC4wJ1xuICAgICAgICAgICAgICAgIDogKGV0YSAvIDEwMDApLnRvRml4ZWQoMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5yZXBsYWNlKCc6cGVyY2VudCcsIGAke3BlcmNlbnQudG9GaXhlZCgwKX0lYClcbiAgICAgICAgICAgIC5yZXBsYWNlKCc6cmF0ZScsIE1hdGgucm91bmQocmF0ZSkpfVxcbmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cbiJdfQ==