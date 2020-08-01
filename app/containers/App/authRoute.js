import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Authenticate from 'containers/Authenticate';
import { Route, Redirect  } from 'react-router-dom';
import { makeSelectGetUserIsAuthenticated } from './selectors';

const AuthRoute = props => {
  const { isAuthenticated, type } = props;
  if (type === 'private' && !isAuthenticated){
    return (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
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
