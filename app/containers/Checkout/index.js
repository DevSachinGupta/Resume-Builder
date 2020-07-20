/**
 *
 * Checkout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import CheckoutPage from 'components/CheckoutPage';
import makeSelectCheckout from './selectors';
import reducer from './reducer';
import saga from './saga';
import CheckoutStatus from '../../components/CheckoutPage/CheckoutStatus';

export function Checkout(props) {
  useInjectReducer({ key: 'checkout', reducer });
  useInjectSaga({ key: 'checkout', saga });
  let renderObj = null;
  console.log("props from checout container: ", props)
  switch (props.method) {
    case 'checkoutStatus':
      renderObj = <CheckoutStatus />;
      break;
    default:
      renderObj = <CheckoutPage />;
      break;
  }
  return (
    <div>
      <Helmet>
        <title>Checkout</title>
        <meta name="description" content="Description of Checkout" />
      </Helmet>
      {renderObj}
    </div>
  );
}

Checkout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
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
)(Checkout);
