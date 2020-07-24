/**
 *
 * CheckoutPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
} from '../../containers/App/selectors';
import apiClient from '../../utils/app/API';
import DashboardHeader from '../Header/DashboardHeader';
import Button from '../Button';
import Footer from '../Footer';
import './style.scss';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CheckoutPage({ user, userData, dispatch }) {
  const { addToast } = useToasts();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [generateSignature, setGenerateSignature] = useState({});

  const handleCheckout = () => {
    console.log('inside handleCheckout');
    const postData = {
      appId: '754585f7b68e3d3e737777c75457',
      orderId: 'order00005',
      orderAmount: '100',
      orderCurrency: 'INR',
      orderNote: 'test',
      customerName: 'John ',
      customerEmail: 'gocv.co.in@gmail.com',
      customerPhone: '9999999999',
      returnUrl: 'https://front.gocv.co.in/checkoutStatus',
      notifyUrl: 'https://back.gocv.co.in/billing/checkoutNotify',
    };
    apiClient
      .post(
        '/billing/generateSignature',
        { ...postData },
        {
          withCredentials: true,
        },
      )
      .then(response => {
        if (response.status === 200) {
          // TODO : update userData in redux
          setGenerateSignature(JSON.parse(response.data.data.postData));
          console.log(
            'succesfully submit your request.',
            response,
            JSON.parse(response.data.data.postData),
            // document.getElementById('redirectForm').innerHTML,
          );
          document.getElementById('redirectForm').submit();
          // setTimeout(function() {
          //   document.getElementById('redirectForm').submit();
          // }, 5000);

          // axios.post('https://test.cashfree.com/billpay/checkout/post/submit',
          //   { ...JSON.parse(response.data.data.postData) },
          //   {
          //     withCredentials: true,
          //   },
          // )
          // .then(response => {console.log("response from payment", response)})
        } else {
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        console.log('updateProfile error: ', error, error.response);
      });
  };

  const renderObj = (
    <div>
      {Object.keys(generateSignature).map(item => (
        <input type="hidden" name={item} value={generateSignature[item]} />
      ))}
    </div>
  );
  console.log('renderObj: ', renderObj);

  useEffect(() => {
    console.log('generateSignature: ', generateSignature);
    // const html = document.getElementById('redirectForm').innerHTML;
    // console.log('html: ', html);
    // document.getElementById('redirectForm').submit();
  }, [generateSignature]);

  return (
    <div className="bg-white flex flex-col h-screen justify-between text-black">
      <div>
        <DashboardHeader user={user} userData={userData} dispatch={dispatch} />
      </div>
      <div className="flex mb-auto">
        <div className="container mx-auto md:px-8">
          <div className="flex px-10 items-center justify-between">
            <div className="pl-6 text-4xl text-gray-800">
              Review and Upgrade
            </div>
          </div>
          <div className="flex w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y">
            <div className="flex-1">
              <div className="my-4 -mx-2 lg:flex">
                <div className="lg:px-2 lg:w-2/3">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">
                      Your Plan Details
                    </h1>
                  </div>
                  <div className="p-4 mb-3">
                    <div className="md:px-4 border shadow-lg">
                      <div className="flex justify-between border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold my-auto align-middle uppercase text-center text-gray-800">
                          Starter
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          <p className="text-xl font-bold text-center whitespace-no-wrap">
                            INR 250
                          </p>
                          <p className="text-xs text-center uppercase">
                            yearly
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">
                      Your Order Summary
                    </h1>
                  </div>
                  <div className="p-4 mb-3">
                    <p className="mb-6 italic">
                      Cost are calcutated based on feature you have slected.
                    </p>
                    <div className="flex justify-between pt-2 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-sm lg:text-md text-center text-gray-800">
                        Plan - Starter ( 3 Months )
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-md text-center text-gray-900">
                        250 INR
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-sm lg:text-md text-center text-gray-800">
                        Resume Formating Services
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-md text-center text-gray-900">
                        0 INR
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-sm lg:text-md text-center text-gray-800">
                        Resume Theme Chargers ( Template_name)
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-md text-center text-gray-900">
                        0 INR
                      </div>
                    </div>
                    <div className="flex justify-between border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-md lg:text-lg font-bold text-center text-gray-800">
                        Subtotal
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-md font-bold text-center text-gray-900">
                        250 INR
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 border-b">
                      <div className="flex lg:px-4 lg:py-2 m-2 text-md lg:text-lg font-bold text-gray-800">
                        <form action="" method="POST">
                          <button type="submit" className="mr-2 mt-1 lg:mt-2">
                            <svg
                              aria-hidden="true"
                              data-prefix="far"
                              data-icon="trash-alt"
                              className="w-4 text-red-600 hover:text-red-800"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                              />
                            </svg>
                          </button>
                        </form>
                        Coupon off
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-md font-bold text-center text-green-700">
                        -50 INR
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-md lg:text-lg font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-md font-bold text-center text-gray-900">
                        200 INR
                      </div>
                    </div>
                    <form
                      id="redirectForm"
                      method="post"
                      action="https://test.cashfree.com/billpay/checkout/post/submit"
                    >
                      {renderObj}
                    </form>

                    <button
                      type="button"
                      className="flex justify-center px-10 py-3 mt-6 mx-auto font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                      onClick={() => {
                        handleCheckout();
                      }}
                    >
                      {/* <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg> */}
                      <span className="ml-2 mt-5px">Procceed to checkout</span>
                    </button>
                  </div>
                </div>

                <div className="lg:px-2 lg:w-1/3">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                  </div>
                  <div className="p-4 mb-3">
                    <p className="mb-4 italic">
                      If you have a coupon code, please enter it in the box
                      below
                    </p>
                    <div className="justify-center md:flex">
                      <form action="" method="POST">
                        <div className="flex items-center w-full h-13 pl-3 bg-white border rounded-full">
                          <input
                            type="coupon"
                            name="code"
                            id="coupon"
                            placeholder="Apply coupon"
                            className="w-full outline-none appearance-none focus:outline-none active:outline-none"
                          />
                          <button
                            type="submit"
                            className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                          >
                            <svg
                              aria-hidden="true"
                              data-prefix="fas"
                              data-icon="gift"
                              className="w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                              />
                            </svg>
                            <span className="font-medium">Apply coupon</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="p-4 mt-6 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Offers</h1>
                  </div>
                  <div className="p-4 mb-3">
                    <div className="flexborder-t border-b">
                      <p className="mb-4 pl-2 text-sm">
                        <span>
                          Refer & Register any two member and get INR 50 Off
                          Coupon.{' '}
                          <span className="text-blue-500 cursor-pointer">
                            Click here
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <div className="p-4 mt-6 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">
                      Instruction for seller
                    </h1>
                  </div>
                  <div className="p-4">
                    <p className="mb-4 italic">
                      If you have some information for the seller you can leave
                      them in the box below
                    </p>
                    <textarea className="w-full h-24 p-2 bg-gray-100 rounded" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  user: makeSelectGetUserIsAuthenticated(),
  userData: makeSelectGetCurrentUserData(),
});

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CheckoutPage);
