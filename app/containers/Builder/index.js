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

const DemoPage = {
  html: `<h1>HELLO WORLD</h1>`,
  css: null,
  components: null,
  style: null,
};

export function Builder() {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });
  return (
    <BuilderLayout>
      <div className="builder-workspace">
        <BuilderEditor
			DemoPage={DemoPage}
		/>
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
