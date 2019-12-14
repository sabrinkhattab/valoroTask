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

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SearchInput = require("../Search/SearchInput");

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _BookingItem = require("../BookingItem/BookingItem");

var _BookingItem2 = _interopRequireDefault(_BookingItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/sabrin/01D216AB26050E90/interviews_Challenges/next-pwa/nextjs-pwa/components/Sidebar/Sidebar.js";


var Sidebar = function (_React$Component) {
    (0, _inherits3.default)(Sidebar, _React$Component);

    function Sidebar(props) {
        (0, _classCallCheck3.default)(this, Sidebar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

        _this.searchHandler = _this.searchHandler.bind(_this);

        _this.state = {
            filteredData: _this.props.Recurits
        };
        return _this;
    }
    // componentDidMount() {
    //     this.setState({
    //         filteredData: this.props.Recurits
    //     });
    // }

    (0, _createClass3.default)(Sidebar, [{
        key: "searchHandler",
        value: function searchHandler(event) {
            var currentList = [];
            var newList = [];
            //if searchInput isn't empty
            if (event.target.value !== "") {
                currentList = this.props.Recurits;
                newList = currentList.filter(function (item) {
                    var lowerCaseItem = item.CandidateName.toLowerCase();
                    var searchTerm = event.target.value.toLowerCase();
                    return lowerCaseItem.includes(searchTerm);
                });
                console.log(newList);
                this.setState({
                    filteredData: newList
                });

                //searchInput is empty
            } else {
                newList = this.props.Recurits;
                this.setState({
                    filteredData: newList
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var RecuritsList = this.state.filteredData.map(function (item) {
                return _react2.default.createElement(_BookingItem2.default, { key: item.id, GuestName: item.CandidateName, salary: item.salary, time: item.createdAt, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                });
            });
            return _react2.default.createElement("div", {
                className: "jsx-4270192519" + " " + "sidebar-container",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_SearchInput2.default, { handleData: this.searchHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), RecuritsList, _react2.default.createElement(_style2.default, {
                styleId: "4270192519",
                css: "p.jsx-4270192519{margin-block-start :0px;}.sidebar-container.jsx-4270192519{width :350px;height:100vh;background-color :#ebebe5;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVENEIsQUFJZ0IsQUFFYSxhQUNDLFdBSGIsRUFLRCwwQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIvbWVkaWEvc2FicmluLzAxRDIxNkFCMjYwNTBFOTAvaW50ZXJ2aWV3c19DaGFsbGVuZ2VzL25leHQtcHdhL25leHRqcy1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1NlYXJjaC9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IEJvb2tpbmdJdGVtIGZyb20gXCIuLi9Cb29raW5nSXRlbS9Cb29raW5nSXRlbVwiO1xuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2VhcmNoSGFuZGxlcj10aGlzLnNlYXJjaEhhbmRsZXIuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJlZERhdGEgOiB0aGlzLnByb3BzLlJlY3VyaXRzXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZmlsdGVyZWREYXRhOiB0aGlzLnByb3BzLlJlY3VyaXRzXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIHNlYXJjaEhhbmRsZXIoZXZlbnQpe1xuICAgICAgICBsZXQgY3VycmVudExpc3QgPSBbXTtcbiAgICAgICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgICAgICAgLy9pZiBzZWFyY2hJbnB1dCBpc24ndCBlbXB0eVxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgY3VycmVudExpc3QgPSB0aGlzLnByb3BzLlJlY3VyaXRzO1xuICAgICAgICAgICAgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcihpdGVtID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZUl0ZW0gPSBpdGVtLkNhbmRpZGF0ZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZUl0ZW0uaW5jbHVkZXMoc2VhcmNoVGVybSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TGlzdClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA6IG5ld0xpc3RcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vc2VhcmNoSW5wdXQgaXMgZW1wdHlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuZXdMaXN0ID0gdGhpcy5wcm9wcy5SZWN1cml0cztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA6IG5ld0xpc3RcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBSZWN1cml0c0xpc3QgPSB0aGlzLnN0YXRlLmZpbHRlcmVkRGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEJvb2tpbmdJdGVtIGtleT17aXRlbS5pZH0gR3Vlc3ROYW1lPXtpdGVtLkNhbmRpZGF0ZU5hbWV9IHNhbGFyeT17aXRlbS5zYWxhcnl9IHRpbWU9e2l0ZW0uY3JlYXRlZEF0fS8+XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXQgaGFuZGxlRGF0YT17dGhpcy5zZWFyY2hIYW5kbGVyfS8+XG4gICAgICAgICAgICAgICAge1JlY3VyaXRzTGlzdH1cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydCA6IDBweFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2lkZWJhci1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgd2lkdGggOjM1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNlYmViZTVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0= */\n/*@ sourceURL=components/Sidebar/Sidebar.js */"
            }));
        }
    }]);

    return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VhcmNoSW5wdXQiLCJCb29raW5nSXRlbSIsIlNpZGViYXIiLCJwcm9wcyIsInNlYXJjaEhhbmRsZXIiLCJiaW5kIiwic3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJSZWN1cml0cyIsImV2ZW50IiwiY3VycmVudExpc3QiLCJuZXdMaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJsb3dlckNhc2VJdGVtIiwiaXRlbSIsIkNhbmRpZGF0ZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFRlcm0iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIlJlY3VyaXRzTGlzdCIsIm1hcCIsImlkIiwic2FsYXJ5IiwiY3JlYXRlZEF0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjtxQ0FDRjs7cUJBQUEsQUFBWSxPQUFNOzRDQUFBOzs0SUFBQSxBQUNSLEFBQ047O2NBQUEsQUFBSyxnQkFBYyxNQUFBLEFBQUssY0FBTCxBQUFtQixLQUF0QyxBQUVBOztjQUFBLEFBQUs7MEJBQ2MsTUFBQSxBQUFLLE1BTFYsQUFJZCxBQUFhLEFBQ2lCO0FBRGpCLEFBQ1Q7ZUFFUDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O3NDLEFBRWMsT0FBTSxBQUNoQjtnQkFBSSxjQUFKLEFBQWtCLEFBQ2xCO2dCQUFJLFVBQUosQUFBYyxBQUNkO0FBQ0E7Z0JBQUcsTUFBQSxBQUFNLE9BQU4sQUFBYSxVQUFoQixBQUEwQixJQUFHLEFBQ3pCOzhCQUFjLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUN6QjtzQ0FBVSxBQUFZLE9BQU8sZ0JBQU8sQUFDaEM7d0JBQU0sZ0JBQWdCLEtBQUEsQUFBSyxjQUEzQixBQUFzQixBQUFtQixBQUN6Qzt3QkFBTSxhQUFhLE1BQUEsQUFBTSxPQUFOLEFBQWEsTUFBaEMsQUFBbUIsQUFBbUIsQUFDdEM7MkJBQU8sY0FBQSxBQUFjLFNBQXJCLEFBQU8sQUFBdUIsQUFDakM7QUFKRCxBQUFVLEFBS1YsaUJBTFU7d0JBS1YsQUFBUSxJQUFSLEFBQVksQUFDWjtxQkFBQSxBQUFLO2tDQUFMLEFBQWMsQUFDSyxBQUduQjtBQUpjLEFBQ1Y7O0FBSVA7QUFiRCxtQkFhSyxBQUNEOzBCQUFVLEtBQUEsQUFBSyxNQUFmLEFBQXFCLEFBQ3JCO3FCQUFBLEFBQUs7a0NBQUwsQUFBYyxBQUNLLEFBRXRCO0FBSGlCLEFBQ1Y7QUFJWDs7OztpQ0FHUSxBQUNMO2dCQUFNLG9CQUFlLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBSSxnQkFBUSxBQUNyRDt1Q0FBTyxBQUFDLHVDQUFZLEtBQUssS0FBbEIsQUFBdUIsSUFBSSxXQUFXLEtBQXRDLEFBQTJDLGVBQWUsUUFBUSxLQUFsRSxBQUF1RSxRQUFRLE1BQU0sS0FBckYsQUFBMEY7a0NBQTFGO29DQUFQLEFBQU8sQUFDVjtBQURVO2lCQUFBO0FBRFgsQUFBcUIsQUFHckIsYUFIcUI7bUNBSWpCLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHVDQUFZLFlBQVksS0FBekIsQUFBOEI7OEJBQTlCO2dDQURKLEFBQ0ksQUFDQztBQUREO2dCQURKO3lCQUFBO3FCQURKLEFBQ0ksQUFrQlA7QUFsQk87Ozs7O0VBL0NVLGdCLEFBQU0sQUFvRTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL21lZGlhL3NhYnJpbi8wMUQyMTZBQjI2MDUwRTkwL2ludGVydmlld3NfQ2hhbGxlbmdlcy9uZXh0LXB3YS9uZXh0anMtcHdhIn0=