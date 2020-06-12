import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { getUserForgotPasswordReset } from '../../../containers/Authenticate/actions';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function ForgotPasswordResetFormFormik({
  tokenId,
  setResetSuccessfullly,
  dispatch,
}) {
  const blankForgotField = {
    newPassword: '',
  };
  const [forgotpwd, setForgotpwd] = useState({ ...blankForgotField });
  const onSubmitFunction = values => {
    dispatch(getUserForgotPasswordReset(values.newPassword, tokenId));
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
                  type="password"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  classNameLabel="block uppercase text-gray-700 text-xs font-bold mb-2"
                  placeholder="New Password"
                  label="Password"
                  name="newPassword"
                  fullWidth
                  validate={validationMap.password}
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
            </div>
          </React.Fragment>
        </Form>
      )}
    </Formik>
  );
}
// export default ForgotPasswordResetFormFormik;
ForgotPasswordResetFormFormik.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setResetSuccessfullly: PropTypes.func.isRequired,
  tokenId: PropTypes.number.isRequired,
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
