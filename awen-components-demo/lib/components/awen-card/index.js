"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _utils = _interopRequireDefault(require("awen/utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AwenCard = function AwenCard(props) {
  var title = props.title,
      description = props.description,
      btnInfo = props.btnInfo,
      _props$style = props.style,
      PropsStyle = _props$style === void 0 ? {} : _props$style,
      href = props.href;

  var _React$useState = React.useState(PropsStyle),
      style = _React$useState[0],
      setStyle = _React$useState[1];

  var openPage = function openPage() {
    _utils["default"].open(href);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "awen-card",
    style: style
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "awen-card-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "awen-card-tip"
  }, description)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_core.Button, {
    variant: "outlined",
    onClick: openPage
  }, /*#__PURE__*/React.createElement("span", {
    className: "awen-card-btn"
  }, btnInfo))));
};

AwenCard.defaultProps = {
  title: 'title',
  description: 'description',
  btnInfo: 'detail',
  href: 'https://www.ylawen.com/'
};
AwenCard.displayName = 'PortalCard';
var _default = AwenCard;
exports["default"] = _default;