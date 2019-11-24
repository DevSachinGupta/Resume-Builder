/**
 *
 * MyContent
 *
 */

import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Model from 'components/Modal';
import { getModalContent } from 'components/MyContentForms';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectActiveModalType } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MyContent({ activeModalType }) {
  useInjectReducer({ key: 'myContent', reducer });
  useInjectSaga({ key: 'myContent', saga });

  return (
    <Model heading={activeModalType} actions={[]}>
      {getModalContent(activeModalType)}
    </Model>
  );
}

MyContent.propTypes = {
  activeModalType: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  activeModalType: makeSelectActiveModalType(),
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
)(MyContent);
