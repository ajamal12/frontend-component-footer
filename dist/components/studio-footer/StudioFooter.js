import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { intlShape, injectIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { ActionRow, Button, Container, Hyperlink, Image, TransitionReplace } from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import messages from './messages';
ensureConfig(['LMS_BASE_URL', 'MARKETING_SITE_BASE_URL', 'TERMS_OF_SERVICE_URL', 'PRIVACY_POLICY_URL', 'SUPPORT_EMAIL', 'SITE_NAME', 'STUDIO_BASE_URL', 'ENABLE_ACCESSIBILITY_PAGE'], 'Studio Footer component');
const StudioFooter = _ref => {
  let {
    // injected
    intl
  } = _ref;
  const [isOpen, setIsOpen] = useState(false);
  const {
    config
  } = useContext(AppContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-0 mt-6 row align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col border-top mr-2"
  }), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "helpToggleButton",
    variant: "outline-primary",
    onClick: () => setIsOpen(!isOpen),
    iconBefore: Help,
    iconAfter: isOpen ? ExpandLess : ExpandMore,
    size: "sm"
  }, isOpen ? intl.formatMessage(messages.closeHelpButtonLabel) : intl.formatMessage(messages.openHelpButtonLabel)), /*#__PURE__*/React.createElement("div", {
    className: "col border-top ml-2"
  })), /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    className: "px-4"
  }, /*#__PURE__*/React.createElement(TransitionReplace, null, isOpen ? /*#__PURE__*/React.createElement(ActionRow, {
    key: "help-link-button-row",
    className: "py-4",
    "data-testid": "helpButtonRow"
  }, /*#__PURE__*/React.createElement(ActionRow.Spacer, null), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://docs.edx.org/",
    size: "sm"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.edxDocumentationButtonLabel)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://open.edx.org/",
    size: "sm",
    "data-testid": "openEdXPortalButton"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.openEdxPortalButtonLabel)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://www.edx.org/course/edx101-overview-of-creating-an-edx-course#.VO4eaLPF-n1",
    size: "sm"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.edx101ButtonLabel)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://www.edx.org/course/studiox-creating-a-course-with-edx-studio",
    size: "sm"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.studioXButtonLabel)), !_.isEmpty(config.SUPPORT_EMAIL) && /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: `mailto:${config.SUPPORT_EMAIL}`,
    size: "sm",
    "data-testid": "contactUsButton"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.contactUsButtonLabel)), /*#__PURE__*/React.createElement(ActionRow.Spacer, null)) : null), /*#__PURE__*/React.createElement(ActionRow, {
    className: "pt-3 m-0 x-small"
  }, "\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.MARKETING_SITE_BASE_URL,
    target: "_blank",
    className: "ml-2"
  }, config.SITE_NAME), /*#__PURE__*/React.createElement(ActionRow.Spacer, null), !_.isEmpty(config.TERMS_OF_SERVICE_URL) && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.TERMS_OF_SERVICE_URL,
    "data-testid": "termsOfService"
  }, intl.formatMessage(messages.termsOfServiceLinkLabel)), !_.isEmpty(config.PRIVACY_POLICY_URL) && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.PRIVACY_POLICY_URL,
    "data-testid": "privacyPolicy"
  }, intl.formatMessage(messages.privacyPolicyLinkLabel)), config.ENABLE_ACCESSIBILITY_PAGE === 'true' && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: `${config.STUDIO_BASE_URL}/accessibility`,
    "data-testid": "accessibilityRequest"
  }, intl.formatMessage(messages.accessibilityRequestLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.LMS_BASE_URL
  }, "LMS")), /*#__PURE__*/React.createElement(ActionRow, {
    className: "mt-3 pb-4 x-small"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.trademarkMessage), /*#__PURE__*/React.createElement(Hyperlink, {
    className: "ml-1",
    destination: "https://www.edx.org"
  }, "edX Inc"), ".", /*#__PURE__*/React.createElement(ActionRow.Spacer, null), /*#__PURE__*/React.createElement(Hyperlink, {
    destination: "https://open.edx.org",
    className: "float-right"
  }, /*#__PURE__*/React.createElement(Image, {
    width: "120px",
    alt: "Powered by Open edX",
    src: "https://logos.openedx.org/open-edx-logo-tag.png"
  })))));
};
StudioFooter.propTypes = {
  // injected
  intl: intlShape.isRequired
};
export default injectIntl(StudioFooter);
//# sourceMappingURL=StudioFooter.js.map