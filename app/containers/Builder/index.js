/**
 *
 * Builder
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BuilderLayout from 'components/Builder/BuilderLayout';
import BuilderEditor from 'components/Builder/BuilderEditor';
import makeSelectBuilder from './selectors';
import reducer from './reducer';
import saga from './saga';
import { updateTemplateNumberState , updateDemoPageState } from 'containers/Builder/actions';

import TemplateHTML from 'components/CheerioComponent/templates/template_1/html.js';

const DemoPage = {
  html: TemplateHTML,
  css: '{{}}',
  components: null,
  style: null,
}; 

const template_number = '2'
export function Builder({dispatch}) {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });
  dispatch(updateTemplateNumberState(template_number));
  dispatch(updateDemoPageState(DemoPage));
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
