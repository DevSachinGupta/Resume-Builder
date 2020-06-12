import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { getUserForgotPassword } from '../../../containers/Authenticate/actions';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function ForgotPasswordFormFormik({ dispatch }) {
  const blankForgotField = {
    email: '',
  };
  const [forgotpwd, setForgotpwd] = useState({ ...blankForgotField });
  const onSubmitFunction = values => {
    dispatch(getUserForgotPassword(values.email));
  };
  return (
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
              <div className="relative w-full mb-3">
                <Input
                  placeholder="Enter Email Address..."
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  label="Email"
                  name="email"
                  fullWidth
                  validate={validationMap.username}
                />
              </div>
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
              <div className="text-center ">
                <small>
                  <Link
                    to="login"
                    className="text-blue-500"
                    style={{ 'padding-top': '0.5rem' }}
                  >
                    Already have an Account? Login
                  </Link>
                </small>
              </div>
            </div>
          </React.Fragment>
        </Form>
      )}
    </Formik>
  );
}
// export default ForgotPasswordFormFormik;
ForgotPasswordFormFormik.propTypes = {
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
export default withCompose(ForgotPasswordFormFormik);
