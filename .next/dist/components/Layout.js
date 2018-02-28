'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\workspaces12\\kickstarter-blockchain-exam\\components\\Layout.js';

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxzRUFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUg7QUFDSUMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURkLEtBRkcsRUFRSCxnQkFBTUgsYUFBTixpQkFFSTtBQUNJQyxrQkFBVTtBQUNOQyxzQkFBVUosWUFESjtBQUVOSyx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVJLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxzRUFBM0IsRUFBbUdKLFVBQVU7QUFDaklDLHNCQUFVSixZQUR1SDtBQUVqSUssd0JBQVk7QUFGcUg7QUFBN0csS0FBNUIsQ0FSSixDQVJHLEVBc0JILGdCQUFNSCxhQUFOLG1CQUE0QjtBQUN4QkMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBdEJHLEVBNEJISixNQUFNTyxRQTVCSCxDQUFQO0FBOEJILEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnRTpcXFxcd29ya3NwYWNlczEyXFxcXGtpY2tzdGFydGVyLWJsb2NrY2hhaW4tZXhhbVxcXFxjb21wb25lbnRzXFxcXExheW91dC5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dFxcXFxkaXN0XFxcXGxpYlxcXFxoZWFkLmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRhaW5lcixcbiAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEhlYWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaW5rJywgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICk7XG59KTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxzRUFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUg7QUFDSUMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURkLEtBRkcsRUFRSCxnQkFBTUgsYUFBTixpQkFFSTtBQUNJQyxrQkFBVTtBQUNOQyxzQkFBVUosWUFESjtBQUVOSyx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVJLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxzRUFBM0IsRUFBbUdKLFVBQVU7QUFDaklDLHNCQUFVSixZQUR1SDtBQUVqSUssd0JBQVk7QUFGcUg7QUFBN0csS0FBNUIsQ0FSSixDQVJHLEVBc0JILGdCQUFNSCxhQUFOLG1CQUE0QjtBQUN4QkMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBdEJHLEVBNEJISixNQUFNTyxRQTVCSCxDQUFQO0FBOEJILEMiLCJmaWxlIjoidW5rbm93biJ9