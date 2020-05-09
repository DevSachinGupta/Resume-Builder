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
import RegistrationFrom from 'components/Authentication/SignupForm';
// import ForgotPasswordForm from 'components/Authentication/ForgotPasswordForm';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthenticate from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
export function Authenticate({ method }) {
  useInjectReducer({ key: 'authenticate', reducer });
  useInjectSaga({ key: 'authenticate', saga });
  return (
    <div>
      <Helmet>
        <title>Authenticate</title>
        <meta name="description" content="Description of Authenticate" />
      </Helmet>
      <div>
        {method === 'login' ? <LoginFrom /> : <RegistrationFrom />}
      </div>
    </div>
  );
}

Authenticate.propTypes = {
  method: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  authenticate: makeSelectAuthenticate(),
});

function mapDispatchToProps() {
  return {
    //  dispatch,
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
