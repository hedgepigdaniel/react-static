"use strict";

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

require('@babel/register');

var updateNotifier = require('update-notifier');

var PrettyError = require('pretty-error');

var pkg = require('../../package.json');

updateNotifier({
  pkg: pkg
}).notify({
  isGlobal: false
}); // necesarry at any entry point of the cli to ensure that Babel-register
// does not attempt to transform non JavaScript files.

var ignoredExtensions = ['css', 'scss', 'styl', 'less', 'png', 'gif', 'jpg', 'jpeg', 'svg', 'woff', 'woff2', 'ttf', 'eot', 'otf', 'mp4', 'webm', 'ogg', 'mp3', 'wav', 'md', 'yaml'];
ignoredExtensions.forEach(function (ext) {
  require.extensions[".".concat(ext)] = function () {};
});

console.error = function (err) {
  var _console;

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return (_console = console).log.apply(_console, [new PrettyError().render(err)].concat(rest));
}; // Be sure to log useful information about unhandled exceptions. This should seriously
// be a default: https://github.com/nodejs/node/issues/9523#issuecomment-259303079


process.on('unhandledRejection', function (r) {
  console.error(r);
});
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ignoredExtensions, "ignoredExtensions", "/home/daniel/flattenedmonad/react-static/src/utils/binHelper.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9iaW5IZWxwZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInVwZGF0ZU5vdGlmaWVyIiwiUHJldHR5RXJyb3IiLCJwa2ciLCJub3RpZnkiLCJpc0dsb2JhbCIsImlnbm9yZWRFeHRlbnNpb25zIiwiZm9yRWFjaCIsImV4dGVuc2lvbnMiLCJleHQiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJyZXN0IiwibG9nIiwicmVuZGVyIiwicHJvY2VzcyIsIm9uIiwiciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxpQkFBUjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsaUJBQVIsQ0FBdkI7O0FBQ0EsSUFBTUUsY0FBY0YsUUFBUSxjQUFSLENBQXBCOztBQUNBLElBQU1HLE1BQU1ILFFBQVEsb0JBQVIsQ0FBWjs7QUFFQUMsZUFBZTtBQUFFRTtBQUFGLENBQWYsRUFBd0JDLE1BQXhCLENBQStCO0FBQzdCQyxZQUFVO0FBRG1CLENBQS9CLEUsQ0FJQTtBQUNBOztBQUNBLElBQU1DLG9CQUFvQixDQUN4QixLQUR3QixFQUV4QixNQUZ3QixFQUd4QixNQUh3QixFQUl4QixNQUp3QixFQUt4QixLQUx3QixFQU14QixLQU53QixFQU94QixLQVB3QixFQVF4QixNQVJ3QixFQVN4QixLQVR3QixFQVV4QixNQVZ3QixFQVd4QixPQVh3QixFQVl4QixLQVp3QixFQWF4QixLQWJ3QixFQWN4QixLQWR3QixFQWV4QixLQWZ3QixFQWdCeEIsTUFoQndCLEVBaUJ4QixLQWpCd0IsRUFrQnhCLEtBbEJ3QixFQW1CeEIsS0FuQndCLEVBb0J4QixJQXBCd0IsRUFxQnhCLE1BckJ3QixDQUExQjtBQXVCQUEsa0JBQWtCQyxPQUFsQixDQUEwQixlQUFPO0FBQy9CUCxVQUFRUSxVQUFSLFlBQXVCQyxHQUF2QixLQUFnQyxZQUFNLENBQUUsQ0FBeEM7QUFDRCxDQUZEOztBQUlBQyxRQUFRQyxLQUFSLEdBQWdCLFVBQUNDLEdBQUQ7QUFBQTs7QUFBQSxvQ0FBU0MsSUFBVDtBQUFTQSxRQUFUO0FBQUE7O0FBQUEsU0FDZCxxQkFBUUMsR0FBUixrQkFBWSxJQUFJWixXQUFKLEdBQWtCYSxNQUFsQixDQUF5QkgsR0FBekIsQ0FBWixTQUE4Q0MsSUFBOUMsRUFEYztBQUFBLENBQWhCLEMsQ0FHQTtBQUNBOzs7QUFDQUcsUUFBUUMsRUFBUixDQUFXLG9CQUFYLEVBQWlDLGFBQUs7QUFDcENQLFVBQVFDLEtBQVIsQ0FBY08sQ0FBZDtBQUNELENBRkQ7Ozs7Ozs7Ozs7OzswQkFoQ01aLGlCIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnQGJhYmVsL3JlZ2lzdGVyJylcblxuY29uc3QgdXBkYXRlTm90aWZpZXIgPSByZXF1aXJlKCd1cGRhdGUtbm90aWZpZXInKVxuY29uc3QgUHJldHR5RXJyb3IgPSByZXF1aXJlKCdwcmV0dHktZXJyb3InKVxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJylcblxudXBkYXRlTm90aWZpZXIoeyBwa2cgfSkubm90aWZ5KHtcbiAgaXNHbG9iYWw6IGZhbHNlLFxufSlcblxuLy8gbmVjZXNhcnJ5IGF0IGFueSBlbnRyeSBwb2ludCBvZiB0aGUgY2xpIHRvIGVuc3VyZSB0aGF0IEJhYmVsLXJlZ2lzdGVyXG4vLyBkb2VzIG5vdCBhdHRlbXB0IHRvIHRyYW5zZm9ybSBub24gSmF2YVNjcmlwdCBmaWxlcy5cbmNvbnN0IGlnbm9yZWRFeHRlbnNpb25zID0gW1xuICAnY3NzJyxcbiAgJ3Njc3MnLFxuICAnc3R5bCcsXG4gICdsZXNzJyxcbiAgJ3BuZycsXG4gICdnaWYnLFxuICAnanBnJyxcbiAgJ2pwZWcnLFxuICAnc3ZnJyxcbiAgJ3dvZmYnLFxuICAnd29mZjInLFxuICAndHRmJyxcbiAgJ2VvdCcsXG4gICdvdGYnLFxuICAnbXA0JyxcbiAgJ3dlYm0nLFxuICAnb2dnJyxcbiAgJ21wMycsXG4gICd3YXYnLFxuICAnbWQnLFxuICAneWFtbCcsXG5dXG5pZ25vcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gIHJlcXVpcmUuZXh0ZW5zaW9uc1tgLiR7ZXh0fWBdID0gKCkgPT4ge31cbn0pXG5cbmNvbnNvbGUuZXJyb3IgPSAoZXJyLCAuLi5yZXN0KSA9PlxuICBjb25zb2xlLmxvZyhuZXcgUHJldHR5RXJyb3IoKS5yZW5kZXIoZXJyKSwgLi4ucmVzdClcblxuLy8gQmUgc3VyZSB0byBsb2cgdXNlZnVsIGluZm9ybWF0aW9uIGFib3V0IHVuaGFuZGxlZCBleGNlcHRpb25zLiBUaGlzIHNob3VsZCBzZXJpb3VzbHlcbi8vIGJlIGEgZGVmYXVsdDogaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy85NTIzI2lzc3VlY29tbWVudC0yNTkzMDMwNzlcbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIHIgPT4ge1xuICBjb25zb2xlLmVycm9yKHIpXG59KVxuIl19