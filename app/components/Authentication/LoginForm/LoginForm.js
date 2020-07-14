import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { getUserLogin } from '../../../containers/Authenticate/actions';
import DotsLoading from '../../LoadingIndicator/dotsLoading';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function LoginFormFormik({ dispatch }) {
  const blankLoginField = {
    username: '',
    password: '',
  };
  const [login, setLogin] = useState({ ...blankLoginField });
  // const [loginStatus, setLoginStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const onSubmitFunction = values => {
    setLoadingStatus(true);
    dispatch(
      getUserLogin(
        values.username,
        values.password,
        setSubmitError,
        setLoadingStatus,
      ),
    );
  };
  return (
    <Formik
      initialValues={login}
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
                  placeholder="Email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  label="Email"
                  name="username"
                  autoFocus
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
                    placeholder="Remember me"
                    allowValidation={false}
                  />
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    Remember me
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
                  Login
                </Button>
              </div>
              <div className="text-center">
                <small>
                  <Link to="login" className="pt-2 text-blue-500">
                    Forget Password
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
// export default LoginFormFormik;
LoginFormFormik.propTypes = {
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
export default withCompose(LoginFormFormik);
