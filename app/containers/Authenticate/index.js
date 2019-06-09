/**
 *
 * Authenticate
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import LoginFrom from 'components/Authentication/LoginForm';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form } from 'antd';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthenticate from './selectors';
import reducer from './reducer';
import saga from './saga';
export function Authenticate() {
  useInjectReducer({ key: 'authenticate', reducer });
  useInjectSaga({ key: 'authenticate', saga });

  return (
    <div>
      <Helmet>
        <title>Authenticate</title>
        <meta name="description" content="Description of Authenticate" />
      </Helmet>
      <LoginFrom />
    </div>
  );
}

Authenticate.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authenticate: makeSelectAuthenticate(),
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
)(Authenticate);
