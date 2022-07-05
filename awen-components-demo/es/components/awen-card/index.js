import { Button } from '@material-ui/core';
import * as React from 'react';
import "./index.scss";
import autil from 'awen/utils';

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
    autil.open(href);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "awen-card",
    style: style
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "awen-card-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "awen-card-tip"
  }, description)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
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
export default AwenCard;