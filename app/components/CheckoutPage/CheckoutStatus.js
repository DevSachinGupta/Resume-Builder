/**
 *
 * CheckoutStatus
 *
 */

import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CheckoutStatus(props) {
  console.log('page props: ', props);

  let checkoutStatus = '';

  useEffect(() => {
    checkoutStatus = window.sessionStorage.getItem('paymentStatus');
    console.log('payemnt Status session: ', checkoutStatus);
  }, []);

  const handlePaymentCheck = () => {
    console.log('inside handleCheckout');
    const postData = {
      appId: '754585f7b68e3d3e737777c75457',
      orderId: 'order00001',
      orderAmount: '100',
      orderCurrency: 'INR',
      orderNote: 'test',
      customerName: 'John ',
      customerEmail: 'gocv.co.in@gmail.com',
      customerPhone: '9999999999',
    };
    axios
      .post(
        'http://localhost:2000/billing/generateSignature',
        { ...postData },
        {
          withCredentials: true,
        },
      )
      .then(response => {
        if (response.status === 200) {
          // TODO : update userData in redux
          console.log(
            'succesfully submit your request.',
            response,
            JSON.parse(JSON.stringify(response.data.data.postData)),
          );
        } else {
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        console.log('updateProfile error: ', error, error.response);
      });
  };

  return (
    <div className="flex justify-center my-6">
      <p>checkoutStatus Page: {}</p>
    </div>
  );
}

CheckoutStatus.propTypes = {};

export default memo(CheckoutStatus);
