import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { getUserSignup } from '../../../containers/Authenticate/actions';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function RegistrationFormFormik({ dispatch }) {
  const blankSignupField = {
    username: '',
    password: '',
    email: '',
    acceptCheckbox: false,
  };
  const [signup, setSignup] = useState({ ...blankSignupField });
  const [submitError, setSubmitError] = useState(null);
  const onSubmitFunction = values => {
    dispatch(
      getUserSignup(
        values.email,
        values.username,
        values.password,
        setSubmitError,
      ),
    );
  };
  return (
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
            <div>
              <div className="relative w-full mb-3">
                <Input
                  placeholder="Name"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  classNameLabel="block uppercase text-gray-700 text-xs font-bold mb-2"
                  label="Name"
                  name="username"
                  fullWidth
                  validate={validationMap.username}
                />
              </div>
              <div className="relative w-full mb-3">
                <Input
                  placeholder="Email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  classNameLabel="block uppercase text-gray-700 text-xs font-bold mb-2"
                  label="Email"
                  name="email"
                  fullWidth
                  validate={validationMap.username}
                />
              </div>
              <div className="relative w-full mb-3">
                <Input
                  type="password"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  classNameLabel="block uppercase text-gray-700 text-xs font-bold mb-2"
                  placeholder="Password"
                  label="Password"
                  name="password"
                  fullWidth
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
                      I agree with{' '}
                      <a href="/docs" className="text-blue-400">
                        Terms of Services
                      </a>{' '}
                      of this site and accept its{' '}
                      <a href="/docs" className="text-blue-400">
                        Privacy Policy
                      </a>
                    </small>
                  </span>
                </label>
              </div>
              <div className="relative w-full mb-3">
                {submitError && (
                  <p className="text-red-500">
                    <strong>{submitError.status}</strong>
                  </p>
                )}
              </div>
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
