/**
 *
 * CustomDomainInfo
 *
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleModal } from 'containers/App/actions';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CustomDomainInfo({ dispatch }) {
  return (
    <div className="bg-white flex flex-col justify-between">
        Instructions for Custom Domain here.

        <button className="bg-blue-500 py-1 px-2 text-sm" onClick={()=>{dispatch(toggleModal())}}>Got it</button>
    </div>
  );
}

CustomDomainInfo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(CustomDomainInfo);