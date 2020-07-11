import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { getUserSignup } from '../../../containers/Authenticate/actions';
import DotsLoading from '../../LoadingIndicator/dotsLoading';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function RegistrationFormFormik({ dispatch }) {
  const blankSignupField = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    acceptCheckbox: false,
  };
  const [signup, setSignup] = useState({ ...blankSignupField });
  const [signupStatus, setSignupStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const onSubmitFunction = values => {
    setLoadingStatus(true);
    dispatch(
      getUserSignup(
        values.username,
        values.username,
        values.firstName,
        values.lastName,
        values.password,
        setSubmitError,
        setSignupStatus,
        setLoadingStatus,
      ),
    );
  };
  return (
    <div>
      {signupStatus === true ? (
        <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
          <div className="text-gray-600 text-center pb-6">
            <small>
              Successfully register your details. Please verify the link send to
              your email for account activation.
            </small>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={signup}
          onSubmit={(values, actions) => {
            console.log(values);
            onSubmitFunction(values);
          }}
        >
          {() => (
            <Form>
              <React.Fragment>
                <div className="loginFields">
                  <div className="relative flex w-full mb-2">
                    <div className="w-1/2 mr-1">
                      <Input
                        placeholder="FirstName"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        label="FirstName"
                        name="firstName"
                        validate={validationMap.username}
                      />
                    </div>
                    <div className="w-1/2 ml-1">
                      <Input
                        placeholder="LastName"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        label="LastName"
                        name="lastName"
                        validate={validationMap.username}
                      />
                    </div>
                  </div>
                  <div className="relative w-full mb-2">
                    <Input
                      placeholder="Email/Username"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      label="Email"
                      name="username"
                      validate={validationMap.username}
                    />
                  </div>
                  <div className="relative w-full mb-2">
                    <Input
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Password"
                      label="Password"
                      name="password"
                      validate={validationMap.password}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <Input
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5 pl-0"
                        style={{ transition: 'all 0.15s ease 0s' }}
                        type="checkbox"
                        name="acceptCheckbox"
                        placeholder="Remember me"
                        validate={validationMap.acceptCheckbox}
                        // allowValidation={false}
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        <small>
                          I agree to accept NetCV{' '}
                          <a href="/docs" className="text-blue-400">
                            Service agreements
                          </a>{' '}
                          and{' '}
                          <a href="/docs" className="text-blue-400">
                            Privacy Policy
                          </a>
                        </small>
                      </span>
                    </label>
                  </div>
                  {loadingStatus === true ? (
                    loadingStatus && <DotsLoading loadingText="Loading..." />
                  ) : (
                    <div className="relative w-full">
                      {submitError && (
                        <p className="text-red-500 pl-2">
                          <small>{submitError.status}</small>
                        </p>
                      )}
                    </div>
                  )}
                  <div className="text-center mt-6">
                    <Button
                      as="submit"
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    >
                      Create Account
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
// export default RegistrationFormFormik;
RegistrationFormFormik.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => createStructuredSelector({});

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(RegistrationFormFormik);
