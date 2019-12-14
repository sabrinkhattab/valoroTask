"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _StatusIcons = require("../StatusIcons/StatusIcons");

var _StatusIcons2 = _interopRequireDefault(_StatusIcons);

var _NightsAndGuests = require("../NightsAndGuests/NightsAndGuests");

var _NightsAndGuests2 = _interopRequireDefault(_NightsAndGuests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/sabrin/01D216AB26050E90/interviews_Challenges/next-pwa/nextjs-pwa/components/BookingItem/BookingItem.js";


var BookingItem = function (_React$Component) {
  (0, _inherits3.default)(BookingItem, _React$Component);

  function BookingItem() {
    (0, _classCallCheck3.default)(this, BookingItem);

    return (0, _possibleConstructorReturn3.default)(this, (BookingItem.__proto__ || (0, _getPrototypeOf2.default)(BookingItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(BookingItem, [{
    key: "render",

    // getDate = (TimeStamp)=>{
    //      var Date = new Date( TimeStamp* 1000);
    //      return `${Date.getDate()}/${Date.getMonth()}/${Date.getFullYear()}`
    //  }


    value: function render() {
      var date = this.props.time;

      return _react2.default.createElement("div", { className: "bookingItem-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_StatusIcons2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement("div", { className: "test", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("div", { className: "guest-details", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("p", { className: "name", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.GuestName), _react2.default.createElement("p", { className: "booking-date", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.time)), _react2.default.createElement("p", { className: "home-details", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "3 Bedrooms Condo in Bahi"), _react2.default.createElement("span", { className: "arrival-date", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "29 May 2019,"), _react2.default.createElement(_NightsAndGuests2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement("p", { className: "paid-amount", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.props.salary + " $")), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "\n                .bookingItem-wrapper{\n                border-bottom: 1px solid gray;\n                padding:20px;\n                display : flex;\n                }\n                .name{\n                  color : #838383;\n                  font-weight: bold;\n\n                }\n                .booking-date{\n                  color : #838383;\n                }\n                .arrival-date{\n                 color : #d4d4d4\n                }\n                .test{\n                width: 100%;\n                margin-left: 10px;\n                position : relative\n\n                }\n                .test p {\n                  margin-block-start: 0;\n                  margin-block-end: 0\n                }\n                .guest-details{\n                  display: flex;\n                  justify-content: space-between;\n                }\n                .guest-details p {\n                  margin-block-start: 0;\n                  margin-block-end: 0\n\n                }\n                .home-details {\n                   margin-block-start: 0;\n                   color : #838383\n\n                }\n                .paid-amount{\n                      width: 50px;\n                      height: 20px;\n                      border: 1px solid #d4d4d4;\n                      background-color: transparent;\n                      border-radius: 11px;\n                      text-align: center;\n                      display: inline-block;\n                      position: absolute;\n                      right: 2px;\n                      color : #d4d4d4\n\n                 \n                }\n              \n     \n\n\n                \n                "));
    }
  }]);

  return BookingItem;
}(_react2.default.Component);

exports.default = BookingItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQm9va2luZ0l0ZW0vQm9va2luZ0l0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTdGF0dXNJY29ucyIsIk5pZ2h0c0FuZEd1ZXN0cyIsIkJvb2tpbmdJdGVtIiwiZGF0ZSIsInByb3BzIiwidGltZSIsIkd1ZXN0TmFtZSIsInNhbGFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQXFCOzs7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7OztTQUVIOztBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFHVSxBQUNiO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFFaEI7OzZCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO09BQUEsa0JBQ0ksQUFBQzs7b0JBQUQ7c0JBREosQUFDSSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBLEFBQXFCO0FBQXJCO2NBQXFCLEFBQUssTUFEOUIsQUFDSSxBQUFnQyxBQUNoQyw0QkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBLEFBQTZCO0FBQTdCO2NBQTZCLEFBQUssTUFIMUMsQUFDSSxBQUVJLEFBQXdDLEFBRTVDLHdCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQUxKLEFBS0ksQUFDQSw2Q0FBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUE7QUFBQTtTQU5KLEFBTUksQUFFQSxpQ0FBQSxBQUFDOztvQkFBRDtzQkFSSixBQVFJLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUEsQUFBK0I7QUFBL0I7Y0FBK0IsQUFBSyxNQUFwQyxBQUEwQyxTQVhsRCxBQUVJLEFBU0ksQUFLSix3QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FqQlIsQUFDSSxBQWdCSSxBQWdFWDs7Ozs7RUE1RnFCLGdCQThGMUIsQSxBQTlGZ0M7O2tCQThGaEMsQUFBZSIsImZpbGUiOiJCb29raW5nSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvbWVkaWEvc2FicmluLzAxRDIxNkFCMjYwNTBFOTAvaW50ZXJ2aWV3c19DaGFsbGVuZ2VzL25leHQtcHdhL25leHRqcy1wd2EifQ==