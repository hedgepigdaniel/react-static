"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(require("raf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof window !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    (0, _raf.default)(step);
  });
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/home/daniel/flattenedmonad/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/home/daniel/flattenedmonad/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/home/daniel/flattenedmonad/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/home/daniel/flattenedmonad/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/home/daniel/flattenedmonad/react-static/src/utils/scrollTo.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zY3JvbGxUby5qcyJdLCJuYW1lcyI6WyJlYXNlIiwidCIsImRlZmF1bHRPcHRpb25zIiwiZHVyYXRpb24iLCJvZmZzZXQiLCJjb250ZXh0Iiwid2luZG93IiwiZ2V0VG9wIiwiZWxlbWVudCIsImNvbnRleHRTY3JvbGxIZWlnaHQiLCJjb250ZXh0VmlzaWJsZUhlaWdodCIsIk1hdGgiLCJtaW4iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImdldFBvc2l0aW9uIiwic3RhcnQiLCJlbmQiLCJlbGFwc2VkIiwiZWFzZUZuIiwic2Nyb2xsVG8iLCJvcHRpb25zIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJjbG9jayIsIkRhdGUiLCJub3ciLCJQcm9taXNlIiwic3RlcCIsInBhcnNlSW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsU0FBTUMsSUFBSSxHQUFKLEdBQVUsSUFBSUEsQ0FBSixHQUFRQSxDQUFsQixHQUFzQixDQUFDLENBQUQsR0FBSyxDQUFDLElBQUksSUFBSUEsQ0FBVCxJQUFjQSxDQUEvQztBQUFBLENBQWI7O0FBRUEsSUFBTUMsaUJBQWlCO0FBQ3JCQyxZQUFVLEdBRFc7QUFFckJDLFVBQVEsQ0FGYTtBQUdyQkMsV0FBUyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQTtBQUhyQixDQUF2Qjs7QUFNQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsT0FBRCxFQUFVSixNQUFWLEVBQWtCSyxtQkFBbEIsRUFBdUNDLG9CQUF2QztBQUFBLFNBQ2JDLEtBQUtDLEdBQUwsQ0FDRUosUUFBUUsscUJBQVIsR0FBZ0NDLEdBQWhDLEdBQXNDUixPQUFPUyxXQUE3QyxHQUEyRFgsTUFEN0QsRUFFRUssc0JBQXNCQyxvQkFGeEIsQ0FEYTtBQUFBLENBQWY7O0FBTUEsSUFBTU0sY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxPQUFiLEVBQXNCaEIsUUFBdEIsRUFBZ0NpQixNQUFoQyxFQUEyQztBQUM3RCxNQUFJRCxVQUFVaEIsUUFBZCxFQUF3QixPQUFPZSxHQUFQO0FBQ3hCLFNBQU9ELFFBQVEsQ0FBQ0MsTUFBTUQsS0FBUCxJQUFnQkcsT0FBT0QsVUFBVWhCLFFBQWpCLENBQS9CO0FBQ0QsQ0FIRDs7QUFLZSxTQUFTa0IsUUFBVCxDQUFrQmIsT0FBbEIsRUFBMkJjLE9BQTNCLEVBQW9DO0FBQUEsZ0RBQ05wQixjQURNLEVBQ2FvQixPQURiO0FBQUEsTUFDekNuQixRQUR5Qyx5QkFDekNBLFFBRHlDO0FBQUEsTUFDL0JDLE1BRCtCLHlCQUMvQkEsTUFEK0I7QUFBQSxNQUN2QkMsT0FEdUIseUJBQ3ZCQSxPQUR1Qjs7QUFFakQsTUFBTVksUUFBUVgsT0FBT1MsV0FBckI7QUFDQSxNQUFJUSxXQUFKO0FBQ0EsTUFBSUMsWUFBSjs7QUFDQSxNQUFJbkIsWUFBWUMsTUFBaEIsRUFBd0I7QUFDdEJpQixrQkFBY2xCLFFBQVFvQixZQUF0QjtBQUNBRCxtQkFBZW5CLFFBQVFtQixZQUF2QjtBQUNELEdBSEQsTUFHTztBQUNMRCxrQkFBY2pCLE9BQU9pQixXQUFyQjtBQUNBQyxtQkFBZUUsU0FBU0MsSUFBVCxDQUFjSCxZQUE3QjtBQUNEOztBQUNELE1BQU1JLFFBQVFDLEtBQUtDLEdBQUwsS0FBYSxDQUEzQjtBQUNBLFNBQU8sSUFBSUMsT0FBSixDQUFZLG1CQUFXO0FBQzVCLFFBQU1DLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFVBQU1iLFVBQVVVLEtBQUtDLEdBQUwsS0FBYUYsS0FBN0I7QUFDQSxVQUFNVixNQUNKLE9BQU9WLE9BQVAsS0FBbUIsUUFBbkIsR0FDSXlCLFNBQVN6QixPQUFULENBREosR0FFSUQsT0FBT0MsT0FBUCxFQUFnQkosTUFBaEIsRUFBd0JvQixZQUF4QixFQUFzQ0QsV0FBdEMsQ0FITjs7QUFJQSxVQUFJbEIsWUFBWUMsTUFBaEIsRUFBd0I7QUFDdEJELGdCQUFRNkIsU0FBUixHQUFvQmxCLFlBQVlDLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxPQUF4QixFQUFpQ2hCLFFBQWpDLEVBQTJDSCxJQUEzQyxDQUFwQjtBQUNELE9BRkQsTUFFTztBQUNMTSxlQUFPNkIsTUFBUCxDQUFjLENBQWQsRUFBaUJuQixZQUFZQyxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkMsT0FBeEIsRUFBaUNoQixRQUFqQyxFQUEyQ0gsSUFBM0MsQ0FBakI7QUFDRDs7QUFFRCxVQUFJLE9BQU9HLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNnQixVQUFVaEIsUUFBakQsRUFBMkQ7QUFDekRpQztBQUNBO0FBQ0QsT0FmZ0IsQ0FpQmpCOzs7QUFDQSxVQUFJbkIsVUFBVUMsR0FBZCxFQUFtQjtBQUNqQmtCO0FBQ0E7QUFDRDs7QUFFRCx3QkFBSUosSUFBSjtBQUNELEtBeEJEOztBQXlCQSxzQkFBSUEsSUFBSjtBQUNELEdBM0JNLENBQVA7QUE0QkQ7Ozs7Ozs7Ozs7Ozs7MEJBNURLaEMsSTswQkFFQUUsYzswQkFNQUssTTswQkFNQVMsVzswQkFLa0JLLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmFmIGZyb20gJ3JhZidcbi8vXG5jb25zdCBlYXNlID0gdCA9PiAodCA8IDAuNSA/IDIgKiB0ICogdCA6IC0xICsgKDQgLSAyICogdCkgKiB0KVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZHVyYXRpb246IDgwMCxcbiAgb2Zmc2V0OiAwLFxuICBjb250ZXh0OiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3csXG59XG5cbmNvbnN0IGdldFRvcCA9IChlbGVtZW50LCBvZmZzZXQsIGNvbnRleHRTY3JvbGxIZWlnaHQsIGNvbnRleHRWaXNpYmxlSGVpZ2h0KSA9PlxuICBNYXRoLm1pbihcbiAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCArIG9mZnNldCxcbiAgICBjb250ZXh0U2Nyb2xsSGVpZ2h0IC0gY29udGV4dFZpc2libGVIZWlnaHRcbiAgKVxuXG5jb25zdCBnZXRQb3NpdGlvbiA9IChzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbiwgZWFzZUZuKSA9PiB7XG4gIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHJldHVybiBlbmRcbiAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIGVhc2VGbihlbGFwc2VkIC8gZHVyYXRpb24pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBkdXJhdGlvbiwgb2Zmc2V0LCBjb250ZXh0IH0gPSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH1cbiAgY29uc3Qgc3RhcnQgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgbGV0IGlubmVySGVpZ2h0XG4gIGxldCBzY3JvbGxIZWlnaHRcbiAgaWYgKGNvbnRleHQgIT09IHdpbmRvdykge1xuICAgIGlubmVySGVpZ2h0ID0gY29udGV4dC5vZmZzZXRIZWlnaHRcbiAgICBzY3JvbGxIZWlnaHQgPSBjb250ZXh0LnNjcm9sbEhlaWdodFxuICB9IGVsc2Uge1xuICAgIGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHRcbiAgfVxuICBjb25zdCBjbG9jayA9IERhdGUubm93KCkgLSAxXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBjbG9ja1xuICAgICAgY29uc3QgZW5kID1cbiAgICAgICAgdHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInXG4gICAgICAgICAgPyBwYXJzZUludChlbGVtZW50KVxuICAgICAgICAgIDogZ2V0VG9wKGVsZW1lbnQsIG9mZnNldCwgc2Nyb2xsSGVpZ2h0LCBpbm5lckhlaWdodClcbiAgICAgIGlmIChjb250ZXh0ICE9PSB3aW5kb3cpIHtcbiAgICAgICAgY29udGV4dC5zY3JvbGxUb3AgPSBnZXRQb3NpdGlvbihzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbiwgZWFzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZ2V0UG9zaXRpb24oc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24sIGVhc2UpKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAndW5kZWZpbmVkJyB8fCBlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBTYW5pdHkgY2hlY2sgdG8gcHJldmVudCB0YWtpbmcgb3ZlciB0aGUgc2Nyb2xsIG9uY2Ugd2UgcHJlbWF0dXJlbHkgZ290IHRvIHRoZSBlbGVtZW50XG4gICAgICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJhZihzdGVwKVxuICAgIH1cbiAgICByYWYoc3RlcClcbiAgfSlcbn1cbiJdfQ==