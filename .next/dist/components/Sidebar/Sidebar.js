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
                newList = this.props.data;
                this.setState({
                    filteredData: newList
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var RecuritsList = this.state.filteredData.map(function (item) {
                return _react2.default.createElement(_BookingItem2.default, { GuestName: item.CandidateName, salary: item.salary, time: item.createdAt, __source: {
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
                css: "p.jsx-4270192519{margin-block-start :0px;}.sidebar-container.jsx-4270192519{width :350px;height:100vh;background-color :#ebebe5;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVENEIsQUFJZ0IsQUFFYSxhQUNDLFdBSGIsRUFLRCwwQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIvbWVkaWEvc2FicmluLzAxRDIxNkFCMjYwNTBFOTAvaW50ZXJ2aWV3c19DaGFsbGVuZ2VzL25leHQtcHdhL25leHRqcy1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1NlYXJjaC9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IEJvb2tpbmdJdGVtIGZyb20gXCIuLi9Cb29raW5nSXRlbS9Cb29raW5nSXRlbVwiO1xuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2VhcmNoSGFuZGxlcj10aGlzLnNlYXJjaEhhbmRsZXIuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJlZERhdGEgOiB0aGlzLnByb3BzLlJlY3VyaXRzXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZmlsdGVyZWREYXRhOiB0aGlzLnByb3BzLlJlY3VyaXRzXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIHNlYXJjaEhhbmRsZXIoZXZlbnQpe1xuICAgICAgICBsZXQgY3VycmVudExpc3QgPSBbXTtcbiAgICAgICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgICAgICAgLy9pZiBzZWFyY2hJbnB1dCBpc24ndCBlbXB0eVxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgY3VycmVudExpc3QgPSB0aGlzLnByb3BzLlJlY3VyaXRzO1xuICAgICAgICAgICAgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcihpdGVtID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZUl0ZW0gPSBpdGVtLkNhbmRpZGF0ZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZUl0ZW0uaW5jbHVkZXMoc2VhcmNoVGVybSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TGlzdClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA6IG5ld0xpc3RcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vc2VhcmNoSW5wdXQgaXMgZW1wdHlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuZXdMaXN0ID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhIDogbmV3TGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IFJlY3VyaXRzTGlzdCA9IHRoaXMuc3RhdGUuZmlsdGVyZWREYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Qm9va2luZ0l0ZW0gIEd1ZXN0TmFtZT17aXRlbS5DYW5kaWRhdGVOYW1lfSBzYWxhcnk9e2l0ZW0uc2FsYXJ5fSB0aW1lPXtpdGVtLmNyZWF0ZWRBdH0vPlxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaElucHV0IGhhbmRsZURhdGE9e3RoaXMuc2VhcmNoSGFuZGxlcn0vPlxuICAgICAgICAgICAgICAgIHtSZWN1cml0c0xpc3R9XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQgOiAwcHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNpZGViYXItY29udGFpbmVye1xuICAgICAgICAgICAgICAgIHdpZHRoIDozNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZWJlYmU1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19 */\n/*@ sourceURL=components/Sidebar/Sidebar.js */"
            }));
        }
    }]);

    return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VhcmNoSW5wdXQiLCJCb29raW5nSXRlbSIsIlNpZGViYXIiLCJwcm9wcyIsInNlYXJjaEhhbmRsZXIiLCJiaW5kIiwic3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJSZWN1cml0cyIsImV2ZW50IiwiY3VycmVudExpc3QiLCJuZXdMaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJsb3dlckNhc2VJdGVtIiwiaXRlbSIsIkNhbmRpZGF0ZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFRlcm0iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImRhdGEiLCJSZWN1cml0c0xpc3QiLCJtYXAiLCJzYWxhcnkiLCJjcmVhdGVkQXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7Ozs7OztJLEFBRWxCO3FDQUNGOztxQkFBQSxBQUFZLE9BQU07NENBQUE7OzRJQUFBLEFBQ1IsQUFDTjs7Y0FBQSxBQUFLLGdCQUFjLE1BQUEsQUFBSyxjQUFMLEFBQW1CLEtBQXRDLEFBRUE7O2NBQUEsQUFBSzswQkFDYyxNQUFBLEFBQUssTUFMVixBQUlkLEFBQWEsQUFDaUI7QUFEakIsQUFDVDtlQUVQO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7c0MsQUFFYyxPQUFNLEFBQ2hCO2dCQUFJLGNBQUosQUFBa0IsQUFDbEI7Z0JBQUksVUFBSixBQUFjLEFBQ2Q7QUFDQTtnQkFBRyxNQUFBLEFBQU0sT0FBTixBQUFhLFVBQWhCLEFBQTBCLElBQUcsQUFDekI7OEJBQWMsS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3pCO3NDQUFVLEFBQVksT0FBTyxnQkFBTyxBQUNoQzt3QkFBTSxnQkFBZ0IsS0FBQSxBQUFLLGNBQTNCLEFBQXNCLEFBQW1CLEFBQ3pDO3dCQUFNLGFBQWEsTUFBQSxBQUFNLE9BQU4sQUFBYSxNQUFoQyxBQUFtQixBQUFtQixBQUN0QzsyQkFBTyxjQUFBLEFBQWMsU0FBckIsQUFBTyxBQUF1QixBQUNqQztBQUpELEFBQVUsQUFLVixpQkFMVTt3QkFLVixBQUFRLElBQVIsQUFBWSxBQUNaO3FCQUFBLEFBQUs7a0NBQUwsQUFBYyxBQUNLLEFBR25CO0FBSmMsQUFDVjs7QUFJUDtBQWJELG1CQWFLLEFBQ0Q7MEJBQVUsS0FBQSxBQUFLLE1BQWYsQUFBcUIsQUFDckI7cUJBQUEsQUFBSztrQ0FBTCxBQUFjLEFBQ0ssQUFFdEI7QUFIaUIsQUFDVjtBQUlYOzs7O2lDQUdRLEFBQ0w7Z0JBQU0sb0JBQWUsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLGdCQUFRLEFBQ3JEO3VDQUFPLEFBQUMsdUNBQWEsV0FBVyxLQUF6QixBQUE4QixlQUFlLFFBQVEsS0FBckQsQUFBMEQsUUFBUSxNQUFNLEtBQXhFLEFBQTZFO2tDQUE3RTtvQ0FBUCxBQUFPLEFBQ1Y7QUFEVTtpQkFBQTtBQURYLEFBQXFCLEFBR3JCLGFBSHFCO21DQUlqQixjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyx1Q0FBWSxZQUFZLEtBQXpCLEFBQThCOzhCQUE5QjtnQ0FESixBQUNJLEFBQ0M7QUFERDtnQkFESjt5QkFBQTtxQkFESixBQUNJLEFBa0JQO0FBbEJPOzs7OztFQS9DVSxnQixBQUFNLEFBb0U1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJTaWRlYmFyLmpzIiwic291cmNlUm9vdCI6Ii9tZWRpYS9zYWJyaW4vMDFEMjE2QUIyNjA1MEU5MC9pbnRlcnZpZXdzX0NoYWxsZW5nZXMvbmV4dC1wd2EvbmV4dGpzLXB3YSJ9