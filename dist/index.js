(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["reactCommon"] = factory(require("react"), require("react-bootstrap"));
	else
		root["reactCommon"] = factory(root["react"], root["react-bootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actionModal = __webpack_require__(1);
	
	Object.defineProperty(exports, 'ActionModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_actionModal).default;
	  }
	});
	
	var _activeButton = __webpack_require__(4);
	
	Object.defineProperty(exports, 'ActiveButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activeButton).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(3);
	
	var _activeButton = __webpack_require__(4);
	
	var _activeButton2 = _interopRequireDefault(_activeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ActionModal = function (_Component) {
	    _inherits(ActionModal, _Component);
	
	    function ActionModal() {
	        _classCallCheck(this, ActionModal);
	
	        return _possibleConstructorReturn(this, (ActionModal.__proto__ || Object.getPrototypeOf(ActionModal)).apply(this, arguments));
	    }
	
	    _createClass(ActionModal, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                show = _props.show,
	                title = _props.title,
	                actionText = _props.actionText,
	                isWorking = _props.isWorking,
	                errorMessage = _props.errorMessage,
	                onCancel = _props.onCancel,
	                readonly = _props.readonly,
	                onAction = _props.onAction,
	                other = _objectWithoutProperties(_props, ['show', 'title', 'actionText', 'isWorking', 'errorMessage', 'onCancel', 'readonly', 'onAction']);
	
	            var message = errorMessage ? _react2.default.createElement(
	                'span',
	                { className: 'text-danger pull-left' },
	                _react2.default.createElement('i', { className: 'fa fa-warning' }),
	                ' ',
	                errorMessage
	            ) : _react2.default.createElement('span', null);
	
	            return _react2.default.createElement(
	                _reactBootstrap.Modal,
	                { show: show, onHide: onCancel },
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    _react2.default.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        title
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Body,
	                    null,
	                    _react2.default.cloneElement(this.props.children, other)
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Footer,
	                    null,
	                    message,
	                    _react2.default.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'link', onClick: onCancel },
	                        'cancel'
	                    ),
	                    readonly ? _react2.default.createElement('span', null) : _react2.default.createElement(_activeButton2.default, { buttonStyle: 'primary', onClick: onAction, active: isWorking, title: actionText })
	                )
	            );
	        }
	    }]);
	
	    return ActionModal;
	}(_react.Component);
	
	ActionModal.propTypes = {
	    show: _react.PropTypes.bool.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    actionText: _react.PropTypes.string.isRequired,
	    isWorking: _react.PropTypes.bool,
	    errorMessage: _react.PropTypes.string,
	    children: _react.PropTypes.element.isRequired,
	    onCancel: _react.PropTypes.func.isRequired,
	    onAction: _react.PropTypes.func.isRequired,
	    readonly: _react.PropTypes.bool.isRequired
	};
	
	ActionModal.defaultProps = {
	    isWorking: false,
	    errorMessage: '',
	    readonly: false
	};
	
	exports.default = ActionModal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActiveButton = function ActiveButton(props) {
	    return _react2.default.createElement(
	        _reactBootstrap.Button,
	        {
	            bsStyle: props.buttonStyle,
	            onClick: props.onClick,
	            disabled: props.active || !props.enabled },
	        props.active ? _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin' }) : _react2.default.createElement(
	            'span',
	            null,
	            props.title
	        )
	    );
	};
	
	ActiveButton.propTypes = {
	    buttonStyle: _react.PropTypes.oneOf(['primary', 'default', 'danger', 'info', 'warning', 'success']),
	    enabled: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    title: _react.PropTypes.string.isRequired,
	    onClick: _react.PropTypes.func.isRequired
	};
	
	ActiveButton.defaultProps = {
	    buttonStyle: 'default',
	    active: false,
	    enabled: true
	};
	
	exports.default = ActiveButton;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map