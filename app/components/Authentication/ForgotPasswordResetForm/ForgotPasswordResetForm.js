import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { getUserForgotPasswordReset } from '../../../containers/Authenticate/actions';
import DotsLoading from '../../LoadingIndicator/dotsLoading';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function ForgotPasswordResetFormFormik({ tokenId, dispatch }) {
  const blankForgotField = {
    newPassword: '',
  };
  const [forgotpwd, setForgotpwd] = useState({ ...blankForgotField });
  const [forgotStatus, setForgotStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const onSubmitFunction = values => {
    setLoadingStatus(true);
    dispatch(
      getUserForgotPasswordReset(
        values.newPassword,
        tokenId,
        setSubmitError,
        setForgotStatus,
        setLoadingStatus,
      ),
    );
  };
  return (
    <div>
      {forgotStatus === true ? (
        <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
          <div className="text-gray-600 text-center mb-3">
            <small>
              Successfully reset your new password! You can login with your new
              password.
            </small>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/login"
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            >
              Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
          <div className="text-gray-600 text-center mb-3">
            <small>
              Just enter a new password and you'll be on your way. Remember your
              new password!
            </small>
          </div>
          <Formik
            initialValues={forgotpwd}
            onSubmit={(values, actions) => {
              console.log(values);
              onSubmitFunction(values);
            }}
          >
            {() => (
              <Form>
                <React.Fragment>
                  <div className="loginFields">
                    <div className="relative w-full mb-2">
                      <Input
                        type="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="New Password"
                        label="New Password"
                        name="newPassword"
                        validate={validationMap.password}
                      />
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
                        Reset Password
                      </Button>
                    </div>
                    <div className="text-center ">
                      <small>
                        <Link
                          to="signup"
                          className="text-blue-500"
                          style={{ 'padding-top': '0.5rem' }}
                        >
                          Create an Account!
                        </Link>
                      </small>
                    </div>
                  </div>
                </React.Fragment>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
// export default ForgotPasswordResetFormFormik;
ForgotPasswordResetFormFormik.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tokenId: PropTypes.string.isRequired,
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
export default withCompose(ForgotPasswordResetFormFormik);
