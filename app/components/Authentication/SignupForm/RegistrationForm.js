import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { TiChevronRight } from 'react-icons/ti';
import { Formik } from 'formik';
import { getUserSignup } from '../../../containers/Authenticate/actions';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function RegistrationFormFormik({ dispatch }) {
  const blankLoginField = {
    username: '',
    password: '',
  };
  // dispatch(getUserSignup);
  const onSubmitFunction = values => {
    console.log("signup",values);
    dispatch(getUserSignup);
  };
  return (
    <Formik initialValues={blankLoginField} onSubmit={onSubmitFunction}>
      {() => (
        <div>
          <div className="relative w-full mb-3">
            {/* <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              type="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Email"
              style={{ transition: 'all 0.15s ease 0s' }}
            /> */}
            <Input
              placeholder="Name"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              classNameLabel="block uppercase text-gray-700 text-xs font-bold mb-2"
              label="Name"
              name="name"
              fullWidth
              validate={validationMap.username}
            />
          </div>
          <div className="relative w-full mb-3">
            {/* <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              type="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Email"
              style={{ transition: 'all 0.15s ease 0s' }}
            /> */}
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
            {/* <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Password"
              style={{ transition: 'all 0.15s ease 0s' }}
              val
            /> */}
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
              {/* <input
                id="customCheckLogin"
                type="checkbox"
                className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                style={{ transition: 'all 0.15s ease 0s' }}
              /> */}
              <Input
                className="form-checkbox text-gray-800 ml-1 w-5 h-5 pl-0"
                style={{ transition: 'all 0.15s ease 0s' }}
                type="checkbox"
                placeholder="Remember me"
                allowValidation={false}
              />
              <span className="ml-2 text-sm text-gray-700">
                <small>
                  I agree with{' '}
                  <a href="#" className="text-blue-400">
                    Terms of Services
                  </a>{' '}
                  of this site and accept its{' '}
                  <a className="text-blue-400">Privacy Policy</a>
                </small>
              </span>
            </label>
          </div>
          <div className="text-center mt-6">
            {/* <Button as="submit" type="primary" className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
              Login <TiChevronRight className="inline float-r" />
            </Button> */}
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="submit"
              style={{ transition: 'all 0.15s ease 0s' }}
            >
              Create Account
            </button>
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              onClick={() => { dispatch(getUserSignup("jit10@jit.com","jit10","jit"))}}
            >
              test
            </button>
          </div>
          {/* <div className="text-center ">
            <a href="#" className="text-blue-500" alt="Forgot password">
              <small>Forgot password?</small>
            </a>
          </div> */}
        </div>
        // <Input
        //   placeholder="Username"
        //   label="Username"
        //   name="username"
        //   fullWidth
        //   validate={validationMap.username}
        // />
        // <Input
        //   type="password"
        //   className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
        //   placeholder="Password"
        //   label="Password"
        //   name="password"
        //   fullWidth
        //   validate={validationMap.password}
        // />
        // <Row>
        //   <Column width="1/2" className="inline-block">
        //     <Input type="checkbox" placeholder="Remember me" />
        //   </Column>
        //   <Column width="1/2">
        //     <Link
        //       to="login"
        //       className="float-right"
        //       style={{ 'padding-top': '0.5rem' }}
        //     >
        //       Forget Password
        //     </Link>
        //   </Column>
        // </Row>
        // <Button as="submit" fullWidth type="primary">
        //   Login <TiChevronRight className="inline float-r" />
        // </Button>
        // <Button as="button" fullWidth type="primary mt-2">
        //   <Link to="/signup">Sign Up</Link>
        // </Button>
      )}
    </Formik>
  );
}
// export default RegistrationFormFormik;
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
