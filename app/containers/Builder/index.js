/**
 *
 * Builder
 *
 */

import React, { memo, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BuilderLayout from 'components/Builder/BuilderLayout';
import BuilderEditor from 'components/Builder/BuilderEditor';
import {
  updateTemplateNumberState,
  updateDemoPageState,
  getBuilderThemeContent,
} from 'containers/Builder/actions';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
  makeUpdateTemplateNumberState,
} from 'containers/Authenticate/selectors';
import makeSelectBuilder, { makeSelectGetThemeContent } from './selectors';
import reducer from './reducer';
import saga from './saga';

// const templateNumber = '6';
export function Builder({ templateNumber, themeContent, user, userData, dispatch }) {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });

  console.log('template number d:', templateNumber);

  const getThemeContent = useCallback(() => {
    dispatch(getBuilderThemeContent(templateNumber));
  });

  useEffect(() => {
    // if(userData)
    getThemeContent();
    const DemoPage = {
      html: themeContent,
      css: '{..}',
      components: null,
      style: null,
    };
    dispatch(updateDemoPageState(DemoPage));
  }, [themeContent]);

  // dispatch(updateTemplateNumberState(templateNumber));
  // dispatch(updateDemoPageState(DemoPage));
  return (
    <BuilderLayout>
      <div className="builder-workspace">
        <BuilderEditor />
      </div>
    </BuilderLayout>
  );
}

Builder.propTypes = {};

const mapStateToProps = createStructuredSelector({
  builder: makeSelectBuilder(),
  themeContent: makeSelectGetThemeContent(),
  templateNumber: makeUpdateTemplateNumberState(),
  user: makeSelectGetUserIsAuthenticated(),
  userData: makeSelectGetCurrentUserData(),
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
)(Builder);
