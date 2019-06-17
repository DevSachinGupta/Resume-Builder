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
import messages from './messages';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

export function Builder() {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });
  let editor = null;
  useEffect(() => {
    if (!editor) {
      editor = grapesjs.init({
        container: '#gjs',
        fromElement: true,
        width: 'auto',
        storageManager: { type: null },
        // Avoid any default panel
        panels: { defaults: [] },
      });
    }
  });
  return (
    <div id="gjs">
      <h1>Hello World Component!</h1>
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
