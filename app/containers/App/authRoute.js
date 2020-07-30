import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router';
import Authenticate from 'containers/Authenticate';
import { Route } from 'react-router-dom';
import { makeSelectGetUserIsAuthenticated } from './selectors';

const AuthRoute = props => {
  const { isAuthenticated, type } = props;
  console.log('auth Route: ', props);
  //   if (type === 'guest' && isAuthUser) return <Redirect to="/home" />;
  if (type === 'private' && !isAuthenticated){
    console.log('inside if');
    return (
      <Redirect to="/login" />
      // <Route
      //   path="/login"
      //   render={routeProps => <Authenticate {...routeProps} method="login" />}
      // />
      // ref: https://www.pluralsight.com/guides/how-to-router-redirect-after-login
    );
  }

  return <Route {...props} />;
};

const mapStateToProps = () =>
  createStructuredSelector({
    isAuthenticated: makeSelectGetUserIsAuthenticated(),
  });
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(AuthRoute);
