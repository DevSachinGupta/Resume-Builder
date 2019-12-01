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
import { Switch, Route } from 'react-router-dom';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Authenticate from 'containers/Authenticate/Loadable';
import Builder from 'containers/Builder/Loadable';
import MyContentContainer from 'containers/MyContent/Loadable';
import { connect } from 'react-redux';
import { setModalContent } from '../MyContent/actions';
import GlobalStyle from '../../global-styles';
import '../../main.css';
const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = ({ dispatch }) => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Authenticate} />
      <Route path="/features" component={FeaturePage} />
      <Route
        path="/login"
        render={routeProps => <Authenticate {...routeProps} method="login" />}
      />
      <Route
        path="/builder"
        component={() => {
          const location = new URLSearchParams(window.location.search);
          if (location.has('modal')) {
            dispatch(setModalContent(location.get('modal')));
          }
          return <Builder />;
        }}
      />
      <Route
        path="/signup"
        render={routeProps => <Authenticate {...routeProps} method="signup" />}
      />
      <Route path="/signup" component={Authenticate} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    {/* <Footer /> */}
    <MyContentContainer />
    <GlobalStyle />
  </AppWrapper>
);
const withConnet = connect(
  null,
  null,
);
export default withConnet(App);
