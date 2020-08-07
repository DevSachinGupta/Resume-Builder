/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import HomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Settings from 'containers/Settings/Loadable';
import Preview from 'components/Preview';
import DeleteAccountPage from 'components/SettingPage/DeleteAccount/DeleteAccountPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Authenticate from 'containers/Authenticate/Loadable';
import Builder from 'containers/Builder/Loadable';
import MyContentContainer from 'containers/MyContent/Loadable';
import { connect } from 'react-redux';
import AuthRoute from './authRoute';
import { Checkout } from '../Checkout';
import { setModalContent } from '../MyContent/actions';
import history from './history';
import GlobalStyle from '../../global-styles';

import '../../main.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = ({ dispatch }) => (
  <ToastProvider autoDismiss autoDismissTimeout={2000} placement="bottom-left">
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <AuthRoute
            path="/dashboard/new-project"
            type="private"
            render={routeProps => (
              <Dashboard {...routeProps} method="new-project" />
            )}
          />
          <AuthRoute
            path="/dashboard"
            type="private"
            render={routeProps => <Dashboard {...routeProps} method="#" />}
          />
          {/* <Route
            path="/dashboard"
            render={routeProps => <Dashboard {...routeProps} method="#" />}
          /> */}
          <AuthRoute
            path="/checkoutStatus/:orderId"
            type="private"
            render={routeProps => (
              <Checkout {...routeProps} method="checkoutStatus" />
            )}
          />
          <AuthRoute
            path="/checkout"
            type="private"
            render={routeProps => <Checkout {...routeProps} method="#" />}
          />
          <AuthRoute path="/settings" type="private" component={Settings} />
          <Route path="/preview/:templateURL" component={Preview} />
          <Route
            path="/login"
            render={routeProps => (
              <Authenticate {...routeProps} method="login" />
            )}
          />
          <AuthRoute
            path="/builder/:projectId"
            type="private"
            component={Builder}
          />
          <AuthRoute
            path="/builder/:projectId"
            type="private"
            component={() => {
              const location = new URLSearchParams(window.location.search);
              if (location.has('modal')) {
                dispatch(setModalContent(location.get('modal')));
              }
              console.log('params: ', window, location);
              return <Builder />;
            }}
          />
          <Route
            path="/signup/:referralCode"
            render={routeProps => (
              <Authenticate {...routeProps} method="signup" />
            )}
          />
          <Route
            path="/signup"
            render={routeProps => (
              <Authenticate {...routeProps} method="signup" />
            )}
          />
          <Route
            path="/forgotpwd"
            render={routeProps => (
              <Authenticate {...routeProps} method="forgotpwd" />
            )}
          />
          <Route
            path="/resetPassword/:tokenId"
            render={routeProps => (
              <Authenticate {...routeProps} method="resetPassword" />
            )}
          />
          <Route
            path="/accountVerify/:tokenId"
            render={routeProps => (
              <Authenticate {...routeProps} method="accountVerify" />
            )}
          />
          <Route path="/deleteAccount/:tokenId" component={DeleteAccountPage} />
          <Route path="/signup" component={Authenticate} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Router>
      {/* <Footer /> */}
      <MyContentContainer />
      <GlobalStyle />
    </AppWrapper>
  </ToastProvider>
);
App.propTypes = {
  dispatch: Proptypes.func.isRequired,
};
const withConnet = connect(
  null,
  null,
);
export default withConnet(App);
