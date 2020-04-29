/**
 *
 * Settings
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SettingPage from 'components/SettingPage';
import makeSelectSettings from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Settings() {
  useInjectReducer({ key: 'settings', reducer });
  useInjectSaga({ key: 'settings', saga });

  return <SettingPage />;
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settings: makeSelectSettings(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Settings);
