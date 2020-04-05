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
import makeSelectBuilder, { makeSelectGetThemeContent } from './selectors';
import reducer from './reducer';
import saga from './saga';

const template_number = '2';
export function Builder({ themeContent, dispatch }) {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });

  const getThemeContent = useCallback(() => {
    dispatch(getBuilderThemeContent(template_number));
  });

  useEffect(() => {
    getThemeContent();
    const DemoPage = {
      html: themeContent,
      css: '{..}',
      components: null,
      style: null,
    };
    dispatch(updateDemoPageState(DemoPage));
  }, [themeContent]);

  // console.log("from coontainer: ", DemoPage)

  dispatch(updateTemplateNumberState(template_number));
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
