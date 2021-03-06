'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWdCLFVBQVVBLE9BQVYsRUFBbUI7QUFDL0IsV0FBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLG1CQUFTQyxTQUFwQixDQUF0QixFQUFzREwsT0FBdEQsQ0FBUDtBQUNILEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi9idWlsZC9DYW1wYWlnbi5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKENhbXBhaWduLmludGVyZmFjZSksIGFkZHJlc3MpO1xufSk7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWdCLFVBQVVBLE9BQVYsRUFBbUI7QUFDL0IsV0FBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLG1CQUFTQyxTQUFwQixDQUF0QixFQUFzREwsT0FBdEQsQ0FBUDtBQUNILEMiLCJmaWxlIjoidW5rbm93biJ9