'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _error = require('next/dist/lib/error.js');

var _error2 = _interopRequireDefault(_error);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Sidebar = require('../components/Sidebar/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _ReservationSection = require('../components/ReservationSection/ReservationSection');

var _ReservationSection2 = _interopRequireDefault(_ReservationSection);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/media/sabrin/01D216AB26050E90/interviews_Challenges/next-pwa/nextjs-pwa/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
          console.log('service worker registration successful');
        }).catch(function (err) {
          console.warn('service worker registration failed', err.message);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {

      // console.log(this.props.data)
      // if( typeof stories === 'undefined' || ! stories ) return <Error statusCode={503} />
      return _react2.default.createElement('div', {
        className: 'jsx-1108927624' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_Sidebar2.default, { Recurits: this.props.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_ReservationSection2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '362958211',
        css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDc0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL3NhYnJpbi8wMUQyMTZBQjI2MDUwRTkwL2ludGVydmlld3NfQ2hhbGxlbmdlcy9uZXh0LXB3YS9uZXh0anMtcHdhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyXCI7XG5pbXBvcnQgUmVzZXJ2YXRpb25TZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1Jlc2VydmF0aW9uU2VjdGlvbi9SZXNlcnZhdGlvblNlY3Rpb25cIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgICAgICAucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4vLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpXG4gICAgLy8gaWYoIHR5cGVvZiBzdG9yaWVzID09PSAndW5kZWZpbmVkJyB8fCAhIHN0b3JpZXMgKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxTaWRlYmFyIFJlY3VyaXRzPXt0aGlzLnByb3BzLmRhdGF9PjwvU2lkZWJhcj5cbiAgICAgICAgICA8UmVzZXJ2YXRpb25TZWN0aW9uPjwvUmVzZXJ2YXRpb25TZWN0aW9uPlxuXG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkgeyBcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBlZDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICB9XG5cbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGEgO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vNWRmMGRkYjc5ZGY2ZmIwMDE0MmJkMzY0Lm1vY2thcGkuaW8vVmFsb3JvL1JlY3J1aXQnKTtcbiAgICAgICAgIGRhdGEgPSBhd2FpdCAgcmVzLmpzb24oKTtcbiAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgZGF0YSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3334647394',
        css: 'body{margin:0;background:#f0f0ed;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DNkIsQUFHb0IsU0FDVSxtQkFDRyxzQkFFeEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL3NhYnJpbi8wMUQyMTZBQjI2MDUwRTkwL2ludGVydmlld3NfQ2hhbGxlbmdlcy9uZXh0LXB3YS9uZXh0anMtcHdhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyXCI7XG5pbXBvcnQgUmVzZXJ2YXRpb25TZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1Jlc2VydmF0aW9uU2VjdGlvbi9SZXNlcnZhdGlvblNlY3Rpb25cIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgICAgICAucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4vLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpXG4gICAgLy8gaWYoIHR5cGVvZiBzdG9yaWVzID09PSAndW5kZWZpbmVkJyB8fCAhIHN0b3JpZXMgKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxTaWRlYmFyIFJlY3VyaXRzPXt0aGlzLnByb3BzLmRhdGF9PjwvU2lkZWJhcj5cbiAgICAgICAgICA8UmVzZXJ2YXRpb25TZWN0aW9uPjwvUmVzZXJ2YXRpb25TZWN0aW9uPlxuXG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkgeyBcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBlZDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICB9XG5cbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGEgO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vNWRmMGRkYjc5ZGY2ZmIwMDE0MmJkMzY0Lm1vY2thcGkuaW8vVmFsb3JvL1JlY3J1aXQnKTtcbiAgICAgICAgIGRhdGEgPSBhd2FpdCAgcmVzLmpzb24oKTtcbiAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgZGF0YSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var data, res;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _isomorphicUnfetch2.default)('http://5df0ddb79df6fb00142bd364.mockapi.io/Valoro/Recruit');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);

          data = undefined;

        case 12:
          return _context.abrupt('return', {
            data: data
          });

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 9]]);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVycm9yIiwiTGluayIsIkxheW91dCIsIlNpZGViYXIiLCJSZXNlcnZhdGlvblNlY3Rpb24iLCJmZXRjaCIsIkluZGV4IiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsIndhcm4iLCJlcnIiLCJtZXNzYWdlIiwicHJvcHMiLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozt3Q0FFaUIsQUFDbkI7VUFBSSxtQkFBSixBQUF1QixXQUFXLEFBQ2hDO2tCQUFBLEFBQVUsY0FBVixBQUNHLFNBREgsQUFDWSxzQkFEWixBQUVHLEtBQUssd0JBQWdCLEFBQ3BCO2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFKSCxXQUFBLEFBS0csTUFBTSxlQUFPLEFBQ1o7a0JBQUEsQUFBUSxLQUFSLEFBQWEsc0NBQXNDLElBQW5ELEFBQXVELEFBQ3hEO0FBUEgsQUFRRDtBQUNGOzs7OzZCQUVRLEFBRVg7O0FBQ0k7QUFDQTs2QkFDSSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxtQ0FBUSxVQUFVLEtBQUEsQUFBSyxNQUF4QixBQUE4QjtvQkFBOUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRTtBQUFBO0FBQUE7aUJBRkY7YUFBQTtBQUFBO2lCQUFBO2FBREosQUFDSSxBQW9CTDtBQXBCSzs7Ozs7RUFwQlksZ0IsQUFBTTs7QUE0QzFCLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7WUFBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7MEJBQUE7aUJBR0UsaUNBSEYsQUFHRSxBQUFNOzthQUFsQjtBQUhVLHlCQUFBOzBCQUFBO2lCQUlELElBSkMsQUFJRCxBQUFJOzthQUFsQjtBQUplLDBCQUFBOzBCQUFBO0FBQUE7O2FBQUE7MEJBQUE7MENBTWhCOztpQkFOZ0IsQUFNaEIsQUFBTzs7YUFOUzs7a0JBQUEsQUFTYjtBQUFBLEFBQ0o7O2FBVmlCO2FBQUE7MEJBQUE7O0FBQUE7eUJBQUE7QUFBeEIsQUFjQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvc2FicmluLzAxRDIxNkFCMjYwNTBFOTAvaW50ZXJ2aWV3c19DaGFsbGVuZ2VzL25leHQtcHdhL25leHRqcy1wd2EifQ==