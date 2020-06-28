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
import ForgotPasswordForm from 'components/Authentication/ForgotPasswordForm';
import ForgotPasswordResetForm from 'components/Authentication/ForgotPasswordResetForm';
import AccountVerifyPage from 'components/Authentication/AccountVerify/AccountVerifyPage';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthenticate from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
export function Authenticate(props) {
  useInjectReducer({ key: 'authenticate', reducer });
  useInjectSaga({ key: 'authenticate', saga });
  let renderObj = null;
  // console.log("props auth:", props);
  switch (props.method) {
    case 'login':
      renderObj = <LoginFrom />;
      break;
    case 'signup':
      renderObj = <RegistrationFrom />;
      break;
    case 'forgotpwd':
      renderObj = <ForgotPasswordForm />;
      break;
    case 'resetPassword':
      renderObj = (
        <ForgotPasswordResetForm tokenId={props.match.params.tokenId} />
      );
      break;
    case 'accountVerify':
      renderObj = <AccountVerifyPage tokenId={props.match.params.tokenId} />;
      break;
    default:
      renderObj = <RegistrationFrom />;
      break;
  }
  return (
    <div>
      <Helmet>
        <title>Authenticate</title>
        <meta name="description" content="Description of Authenticate" />
      </Helmet>
      <div>{renderObj}</div>
    </div>
  );
}

Authenticate.propTypes = {
  method: PropTypes.string,
  match: PropTypes.object,
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
