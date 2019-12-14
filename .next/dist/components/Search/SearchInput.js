'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/media/sabrin/01D216AB26050E90/interviews_Challenges/next-pwa/nextjs-pwa/components/Search/SearchInput.js';


var SearchInput = function (_React$Component) {
    (0, _inherits3.default)(SearchInput, _React$Component);

    function SearchInput(props) {
        (0, _classCallCheck3.default)(this, SearchInput);

        return (0, _possibleConstructorReturn3.default)(this, (SearchInput.__proto__ || (0, _getPrototypeOf2.default)(SearchInput)).call(this, props));
        // this.searchHandler=this.searchHandler.bind(this)
    }

    // searchHandler(event){
    //     let currentList = [];
    //     let newList = [];
    //     //if searchInput isn't empty
    //     if(event.target.value !== ""){
    //         currentList = this.props.data;
    //         newList = currentList.filter(item =>{
    //             const lowerCaseItem = item.CandidateName.toLowerCase();
    //             const searchTerm = event.target.value.toLowerCase();
    //             return lowerCaseItem.includes(searchTerm);
    //         })
    //         console.log(newList)
    //
    //         //searchInput is empty
    //     }else{
    //         newList = this.props.data;
    //         console.log(newList)
    //     }
    //
    // }


    (0, _createClass3.default)(SearchInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'Search-wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('input', { placeholder: 'Search', className: 'Input-style', type: 'text', onChange: this.props.handleData, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSearch, className: 'icon-style', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, '\n                .Input-style{\n                   padding: 9px;\n                   width:223px;\n                   margin-left:27px;\n                   margin-top:18px;\n                   position : relative;\n                   border: none;\n                 \n                }\n                .icon-style{\n                    position: absolute;\n                    left: 244px;\n                    top: 28px;\n                    color:#e8e8e8\n                }\n                \n                \n                \n                '));
        }
    }]);

    return SearchInput;
}(_react2.default.Component);

exports.default = SearchInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoL1NlYXJjaElucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTZWFyY2giLCJTZWFyY2hJbnB1dCIsInByb3BzIiwiaGFuZGxlRGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOzs7Ozs7O0ksQUFFSDt5Q0FDRjs7eUJBQUEsQUFBWSxPQUFNOzRDQUFBOzsrSUFBQSxBQUNSLEFBQ047QUFFSDtBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7aUNBQ1MsQUFDTDttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLDJDQUNXLGFBQVAsQUFBbUIsVUFBUyxXQUE1QixBQUFzQyxlQUFjLE1BQXBELEFBQXlELFFBQU8sVUFBVSxLQUFBLEFBQUssTUFBL0UsQUFBcUY7OEJBQXJGO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsbURBQUQsQUFBaUIsQUFBTSxtQ0FBVyxXQUFsQyxBQUE0Qzs4QkFBNUM7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSlIsQUFDSSxBQUdJLEFBd0JYOzs7OztFQXhEcUIsZ0IsQUFBTSxBQTBEaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2VhcmNoSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL21lZGlhL3NhYnJpbi8wMUQyMTZBQjI2MDUwRTkwL2ludGVydmlld3NfQ2hhbGxlbmdlcy9uZXh0LXB3YS9uZXh0anMtcHdhIn0=