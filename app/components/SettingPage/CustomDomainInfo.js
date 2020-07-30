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
import Button from '../Button';
// import styled from 'styled-components';

function CustomDomainInfo({ dispatch }) {
  return (
    <div className="lg:pl-8 max-w-xs bg-white flex flex-col text-sm items-center text-justify">
      <p>
        If you want to use the coustom domain, first of all, you need publish
        your resume to our sub-domain and then you need to buy your domain from
        a domain provider (eg Goddady, Google Domains, etc).
      </p>

      <p className="pt-2">
        Then in provider's setting panel, just add a new CNAME record and point
        it to published sub-domain.
      </p>
      <Button
        type="primary"
        className="py-1 px-2 mt-4 text-sm"
        onClick={() => {
          dispatch(toggleModal());
        }}
      >
        Got it
      </Button>
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
