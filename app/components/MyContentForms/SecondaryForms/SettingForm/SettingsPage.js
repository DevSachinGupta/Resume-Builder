import React, { memo } from 'react';
import PropTypes from 'prop-types';

function SettingsPage(props) {
  return <div className="scroller settings-innerpage">{props.children}</div>;
}

SettingsPage.propTypes = {};

export default memo(SettingsPage);
