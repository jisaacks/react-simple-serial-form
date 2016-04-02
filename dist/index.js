'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formSerialize = require('form-serialize');

var _formSerialize2 = _interopRequireDefault(_formSerialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleSerialForm = function (_Component) {
  _inherits(SimpleSerialForm, _Component);

  function SimpleSerialForm() {
    _classCallCheck(this, SimpleSerialForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleSerialForm).apply(this, arguments));
  }

  _createClass(SimpleSerialForm, [{
    key: 'submitHandler',
    value: function submitHandler(event) {
      event.preventDefault();
      var data = (0, _formSerialize2.default)(this.form, { hash: true });
      this.props.onData(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        _extends({}, this.props, { onSubmit: this.submitHandler.bind(this), ref: this.getFormRef.bind(this) }),
        this.props.children
      );
    }
  }, {
    key: 'getFormRef',
    value: function getFormRef(form) {
      this.form = form;
    }
  }]);

  return SimpleSerialForm;
}(_react.Component);

SimpleSerialForm.propTypes = {
  onData: _react.PropTypes.func.isRequired
};
exports.default = SimpleSerialForm;