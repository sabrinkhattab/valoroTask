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
          lineNumber: 27
        }
      }, _react2.default.createElement(_Sidebar2.default, { Recurits: this.props.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_ReservationSection2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '362958211',
        css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCc0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL3NhYnJpbi8wMUQyMTZBQjI2MDUwRTkwL2ludGVydmlld3NfQ2hhbGxlbmdlcy9uZXh0LXB3YS9uZXh0anMtcHdhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJcIjtcbmltcG9ydCBSZXNlcnZhdGlvblNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25TZWN0aW9uL1Jlc2VydmF0aW9uU2VjdGlvblwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbi8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0YSlcbiAgICAvLyBpZiggdHlwZW9mIHN0b3JpZXMgPT09ICd1bmRlZmluZWQnIHx8ICEgc3RvcmllcyApIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFNpZGViYXIgUmVjdXJpdHM9e3RoaXMucHJvcHMuZGF0YX0+PC9TaWRlYmFyPlxuICAgICAgICAgIDxSZXNlcnZhdGlvblNlY3Rpb24+PC9SZXNlcnZhdGlvblNlY3Rpb24+XG5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7IFxuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGVkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cblxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0YSA7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly81ZGYwZGRiNzlkZjZmYjAwMTQyYmQzNjQubW9ja2FwaS5pby9WYWxvcm8vUmVjcnVpdCcpO1xuICAgICAgICAgZGF0YSA9IGF3YWl0ICByZXMuanNvbigpO1xuICAgIH1jYXRjaCAoZSkge1xuICAgICAgICBkYXRhID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3334647394',
        css: 'body{margin:0;background:#f0f0ed;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DNkIsQUFHb0IsU0FDVSxtQkFDRyxzQkFFeEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL3NhYnJpbi8wMUQyMTZBQjI2MDUwRTkwL2ludGVydmlld3NfQ2hhbGxlbmdlcy9uZXh0LXB3YS9uZXh0anMtcHdhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJcIjtcbmltcG9ydCBSZXNlcnZhdGlvblNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25TZWN0aW9uL1Jlc2VydmF0aW9uU2VjdGlvblwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbi8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0YSlcbiAgICAvLyBpZiggdHlwZW9mIHN0b3JpZXMgPT09ICd1bmRlZmluZWQnIHx8ICEgc3RvcmllcyApIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFNpZGViYXIgUmVjdXJpdHM9e3RoaXMucHJvcHMuZGF0YX0+PC9TaWRlYmFyPlxuICAgICAgICAgIDxSZXNlcnZhdGlvblNlY3Rpb24+PC9SZXNlcnZhdGlvblNlY3Rpb24+XG5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7IFxuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGVkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cblxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0YSA7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly81ZGYwZGRiNzlkZjZmYjAwMTQyYmQzNjQubW9ja2FwaS5pby9WYWxvcm8vUmVjcnVpdCcpO1xuICAgICAgICAgZGF0YSA9IGF3YWl0ICByZXMuanNvbigpO1xuICAgIH1jYXRjaCAoZSkge1xuICAgICAgICBkYXRhID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVycm9yIiwiTGluayIsIlNpZGViYXIiLCJSZXNlcnZhdGlvblNlY3Rpb24iLCJmZXRjaCIsIkluZGV4IiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsIndhcm4iLCJlcnIiLCJtZXNzYWdlIiwicHJvcHMiLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7O3dDQUVpQixBQUNuQjtVQUFJLG1CQUFKLEFBQXVCLFdBQVcsQUFDaEM7a0JBQUEsQUFBVSxjQUFWLEFBQ0csU0FESCxBQUNZLHNCQURaLEFBRUcsS0FBSyx3QkFBZ0IsQUFDcEI7a0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQUpILFdBQUEsQUFLRyxNQUFNLGVBQU8sQUFDWjtrQkFBQSxBQUFRLEtBQVIsQUFBYSxzQ0FBc0MsSUFBbkQsQUFBdUQsQUFDeEQ7QUFQSCxBQVFEO0FBQ0Y7Ozs7NkJBRVEsQUFFWDs7QUFDSTtBQUNBOzZCQUNJLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLG1DQUFRLFVBQVUsS0FBQSxBQUFLLE1BQXhCLEFBQThCO29CQUE5QjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFO0FBQUE7QUFBQTtpQkFGRjthQUFBO0FBQUE7aUJBQUE7YUFESixBQUNJLEFBb0JMO0FBcEJLOzs7OztFQXBCWSxnQixBQUFNOztBQTRDMUIsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtZQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTswQkFBQTtpQkFHRSxpQ0FIRixBQUdFLEFBQU07O2FBQWxCO0FBSFUseUJBQUE7MEJBQUE7aUJBSUQsSUFKQyxBQUlELEFBQUk7O2FBQWxCO0FBSmUsMEJBQUE7MEJBQUE7QUFBQTs7YUFBQTswQkFBQTswQ0FNaEI7O2lCQU5nQixBQU1oQixBQUFPOzthQU5TOztrQkFBQSxBQVNiO0FBQUEsQUFDSjs7YUFWaUI7YUFBQTswQkFBQTs7QUFBQTt5QkFBQTtBQUF4QixBQWNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9tZWRpYS9zYWJyaW4vMDFEMjE2QUIyNjA1MEU5MC9pbnRlcnZpZXdzX0NoYWxsZW5nZXMvbmV4dC1wd2EvbmV4dGpzLXB3YSJ9