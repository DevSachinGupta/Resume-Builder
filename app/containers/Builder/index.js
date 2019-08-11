/**
 *
 * Builder
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBuilder from './selectors';
import reducer from './reducer';
import saga from './saga';
import BuilderSidebar from 'components/Builder/BuilderSidebar';
import BuilderHeader from 'components/Builder/BuilderHeader';
import BuilderEditor from 'components/Builder/BuilderEditor';
import 'grapesjs/dist/css/grapes.min.css';

export function Builder() {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });
  return (
    <div className="builder-container">
      {/* <div className="builder-header">
        <BuilderHeader />
      </div> */}
      <div className="builder-workspace">
        <BuilderEditor />
      </div>
    </div>
  );
}

Builder.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

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
