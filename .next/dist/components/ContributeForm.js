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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\workspaces12\\kickstarter-blockchain-exam\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });

                                console.log('transaction start -> ' + _this.props.address);

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 10:

                                console.log('transaction done');
                                //현재 페이지 리로딩하기 위함
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 18;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](4);

                                console.log(_context.t0);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:

                                _this.setState({ loading: false, value: '' });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'ether',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Contribute!'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwidDAiLCJtZXNzYWdlIiwic3RvcCIsIl94Iiwia2V5IiwicmVuZGVyIiwiX3RoaXMzIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGaWVsZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLDhFQUFuQjs7O0FBT0EsSUFBSUMsaUJBQWlCLFVBQVVDLFVBQVYsRUFBc0I7QUFDdkMsNEJBQVVELGNBQVYsRUFBMEJDLFVBQTFCOztBQUVBLGFBQVNELGNBQVQsR0FBMEI7QUFDdEIsWUFBSUUsSUFBSjtBQUFBLFlBQ0lDLFNBQVMsSUFEYjs7QUFHQSxZQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLHNDQUFnQixJQUFoQixFQUFzQk4sY0FBdEI7O0FBRUEsYUFBSyxJQUFJTyxPQUFPQyxVQUFVQyxNQUFyQixFQUE2QkMsT0FBT0MsTUFBTUosSUFBTixDQUFwQyxFQUFpREssT0FBTyxDQUE3RCxFQUFnRUEsT0FBT0wsSUFBdkUsRUFBNkVLLE1BQTdFLEVBQXFGO0FBQ2pGRixpQkFBS0UsSUFBTCxJQUFhSixVQUFVSSxJQUFWLENBQWI7QUFDSDs7QUFFRCxlQUFPTixRQUFRRixTQUFTQyxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDSCxPQUFPRixlQUFlYSxTQUFmLElBQTRCLDhCQUF1QmIsY0FBdkIsQ0FBcEMsRUFBNEVjLElBQTVFLENBQWlGQyxLQUFqRixDQUF1RmIsSUFBdkYsRUFBNkYsQ0FBQyxJQUFELEVBQU9jLE1BQVAsQ0FBY04sSUFBZCxDQUE3RixDQUFqQyxDQUFSLEVBQTZKTCxLQUF0SyxHQUE4S0EsTUFBTVksS0FBTixHQUFjO0FBQ3ZNQyxtQkFBTyxFQURnTTtBQUV2TUMsMEJBQWMsRUFGeUw7QUFHdk1DLHFCQUFTO0FBSDhMLFNBQTVMLEVBSVpmLE1BQU1nQixRQUFOLEdBQWlCLFlBQVk7QUFDNUIsZ0JBQUlDLFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN6RixvQkFBSUMsUUFBSixFQUFjQyxRQUFkO0FBQ0EsdUJBQU8sc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4RCwyQkFBTyxDQUFQLEVBQVU7QUFDTixnQ0FBUUEsU0FBU0MsSUFBVCxHQUFnQkQsU0FBU0UsSUFBakM7QUFDSSxpQ0FBSyxDQUFMO0FBQ0lQLHNDQUFNUSxjQUFOOztBQUVBUCwyQ0FBVyx3QkFBU3JCLE1BQU02QixLQUFOLENBQVlDLE9BQXJCLENBQVg7O0FBR0E5QixzQ0FBTStCLFFBQU4sQ0FBZSxFQUFFaEIsU0FBUyxJQUFYLEVBQWlCRCxjQUFjLEVBQS9CLEVBQWY7O0FBRUFrQix3Q0FBUUMsR0FBUixDQUFZLDBCQUEwQmpDLE1BQU02QixLQUFOLENBQVlDLE9BQWxEOztBQUVBTCx5Q0FBU0MsSUFBVCxHQUFnQixDQUFoQjtBQUNBRCx5Q0FBU0UsSUFBVCxHQUFnQixDQUFoQjtBQUNBLHVDQUFPLGNBQUtPLEdBQUwsQ0FBU0MsV0FBVCxFQUFQOztBQUVKLGlDQUFLLENBQUw7QUFDSWIsMkNBQVdHLFNBQVNXLElBQXBCO0FBQ0FYLHlDQUFTRSxJQUFULEdBQWdCLEVBQWhCO0FBQ0EsdUNBQU9OLFNBQVNnQixPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsQ0FBbUM7QUFDdENDLDBDQUFNbEIsU0FBUyxDQUFULENBRGdDO0FBRXRDVCwyQ0FBTyxjQUFLNEIsS0FBTCxDQUFXQyxLQUFYLENBQWlCMUMsTUFBTVksS0FBTixDQUFZQyxLQUE3QixFQUFvQyxPQUFwQztBQUYrQixpQ0FBbkMsQ0FBUDs7QUFLSixpQ0FBSyxFQUFMOztBQUVJbUIsd0NBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBO0FBQ0EsK0NBQU9VLFlBQVAsQ0FBb0IsZ0JBQWdCM0MsTUFBTTZCLEtBQU4sQ0FBWUMsT0FBaEQ7QUFDQUwseUNBQVNFLElBQVQsR0FBZ0IsRUFBaEI7QUFDQTs7QUFFSixpQ0FBSyxFQUFMO0FBQ0lGLHlDQUFTQyxJQUFULEdBQWdCLEVBQWhCO0FBQ0FELHlDQUFTbUIsRUFBVCxHQUFjbkIsU0FBUyxPQUFULEVBQWtCLENBQWxCLENBQWQ7O0FBRUFPLHdDQUFRQyxHQUFSLENBQVlSLFNBQVNtQixFQUFyQjtBQUNBNUMsc0NBQU0rQixRQUFOLENBQWUsRUFBRWpCLGNBQWNXLFNBQVNtQixFQUFULENBQVlDLE9BQTVCLEVBQWY7O0FBRUosaUNBQUssRUFBTDs7QUFFSTdDLHNDQUFNK0IsUUFBTixDQUFlLEVBQUVoQixTQUFTLEtBQVgsRUFBa0JGLE9BQU8sRUFBekIsRUFBZjs7QUFFSixpQ0FBSyxFQUFMO0FBQ0EsaUNBQUssS0FBTDtBQUNJLHVDQUFPWSxTQUFTcUIsSUFBVCxFQUFQO0FBNUNSO0FBOENIO0FBQ0osaUJBakRNLEVBaURKM0IsT0FqREksRUFpREtyQixNQWpETCxFQWlEYSxDQUFDLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBRCxDQWpEYixDQUFQO0FBa0RILGFBcEQyQyxDQUFoQyxDQUFaOztBQXNEQSxtQkFBTyxVQUFVaUQsRUFBVixFQUFjO0FBQ2pCLHVCQUFPOUIsTUFBTVAsS0FBTixDQUFZLElBQVosRUFBa0JQLFNBQWxCLENBQVA7QUFDSCxhQUZEO0FBR0gsU0ExRG1CLEVBSkwsRUE4RFZKLEtBOURFLEdBOERNLHlDQUEyQkMsS0FBM0IsRUFBa0NDLElBQWxDLENBOURiO0FBK0RIOztBQUVELCtCQUFhTixjQUFiLEVBQTZCLENBQUM7QUFDMUJxRCxhQUFLLFFBRHFCO0FBRTFCbkMsZUFBTyxTQUFTb0MsTUFBVCxHQUFrQjtBQUNyQixnQkFBSUMsU0FBUyxJQUFiOztBQUVBLG1CQUFPLGdCQUFNQyxhQUFOLHdCQUVILEVBQUVuQyxVQUFVLEtBQUtBLFFBQWpCLEVBQTJCb0MsT0FBTyxDQUFDLENBQUMsS0FBS3hDLEtBQUwsQ0FBV0UsWUFBL0MsRUFBNkR1QyxVQUFVO0FBQy9EQyw4QkFBVTVELFlBRHFEO0FBRS9ENkQsZ0NBQVk7QUFGbUQ7QUFBdkUsYUFGRyxFQU9ILGdCQUFNSixhQUFOLENBQ0ksc0JBQUtLLEtBRFQsRUFFSTtBQUNJSCwwQkFBVTtBQUNOQyw4QkFBVTVELFlBREo7QUFFTjZELGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksZ0JBQU1KLGFBQU4sQ0FDSSxPQURKLEVBRUk7QUFDSUUsMEJBQVU7QUFDTkMsOEJBQVU1RCxZQURKO0FBRU42RCxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLHNCQVJKLENBUkosRUFrQkksZ0JBQU1KLGFBQU4seUJBQTJCO0FBQ3ZCdEMsdUJBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQURLO0FBRXZCNEMsMEJBQVUsU0FBU0EsUUFBVCxDQUFrQnJDLEtBQWxCLEVBQXlCO0FBQy9CLDJCQUFPOEIsT0FBT25CLFFBQVAsQ0FBZ0IsRUFBRWxCLE9BQU9PLE1BQU1zQyxNQUFOLENBQWE3QyxLQUF0QixFQUFoQixDQUFQO0FBQ0gsaUJBSnNCO0FBS3ZCOEMsdUJBQU8sT0FMZ0I7QUFNdkJDLCtCQUFlLE9BTlE7QUFPdkJQLDBCQUFVO0FBQ05DLDhCQUFVNUQsWUFESjtBQUVONkQsZ0NBQVk7QUFGTjtBQVBhLGFBQTNCLENBbEJKLENBUEcsRUFzQ0gsZ0JBQU1KLGFBQU4sMkJBQTZCLEVBQUVDLE9BQU8sSUFBVCxFQUFlUyxRQUFRLE1BQXZCLEVBQStCQyxTQUFTLEtBQUtsRCxLQUFMLENBQVdFLFlBQW5ELEVBQWlFdUMsVUFBVTtBQUNoR0MsOEJBQVU1RCxZQURzRjtBQUVoRzZELGdDQUFZO0FBRm9GO0FBQTNFLGFBQTdCLENBdENHLEVBMkNILGdCQUFNSixhQUFOLDBCQUVJLEVBQUVZLFNBQVMsSUFBWCxFQUFpQmhELFNBQVMsS0FBS0gsS0FBTCxDQUFXRyxPQUFyQyxFQUE4Q3NDLFVBQVU7QUFDaERDLDhCQUFVNUQsWUFEc0M7QUFFaEQ2RCxnQ0FBWTtBQUZvQztBQUF4RCxhQUZKLEVBT0ksYUFQSixDQTNDRyxDQUFQO0FBcURIO0FBMUR5QixLQUFELENBQTdCOztBQTZEQSxXQUFPNUQsY0FBUDtBQUNILENBOUlvQixrQkFBckI7O2tCQWdKZUEsYyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0U6XFxcXHdvcmtzcGFjZXMxMlxcXFxraWNrc3RhcnRlci1ibG9ja2NoYWluLWV4YW1cXFxcY29tcG9uZW50c1xcXFxDb250cmlidXRlRm9ybS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbnZhciBDb250cmlidXRlRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbnRyaWJ1dGVGb3JtLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbnRyaWJ1dGVGb3JtKCkge1xuICAgICAgICB2YXIgX3JlZixcbiAgICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJpYnV0ZUZvcm0pO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENvbnRyaWJ1dGVGb3JtLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKENvbnRyaWJ1dGVGb3JtKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSwgX3RoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbXBhaWduLCBhY2NvdW50cztcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oX3RoaXMucHJvcHMuYWRkcmVzcyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyYW5zYWN0aW9uIHN0YXJ0IC0+ICcgKyBfdGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaShfdGhpcy5zdGF0ZS52YWx1ZSwgJ2V0aGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmFuc2FjdGlvbiBkb25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v7ZiE7J6sIO2OmOydtOyngCDrpqzroZzrlKntlZjquLAg7JyE7ZWoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoJy9jYW1wYWlnbnMvJyArIF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMiwgW1s0LCAxNF1dKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29udHJpYnV0ZUZvcm0sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgRm9ybSxcbiAgICAgICAgICAgICAgICB7IG9uU3VibWl0OiB0aGlzLm9uU3VibWl0LCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Ftb3VudCB0byBDb250cmlidXRlJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnZXRoZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0NlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzJywgY29udGVudDogdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgeyBwcmltYXJ5OiB0cnVlLCBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1NVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnQ29udHJpYnV0ZSEnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb250cmlidXRlRm9ybTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm07Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwidDAiLCJtZXNzYWdlIiwic3RvcCIsIl94Iiwia2V5IiwicmVuZGVyIiwiX3RoaXMzIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGaWVsZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLDhFQUFuQjs7O0FBT0EsSUFBSUMsaUJBQWlCLFVBQVVDLFVBQVYsRUFBc0I7QUFDdkMsNEJBQVVELGNB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