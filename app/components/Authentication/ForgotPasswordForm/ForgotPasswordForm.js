import React from 'react';
import { Formik } from 'formik';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from '../validation';

function ForgotPasswordFormFormik() {
  const blankLoginField = {
    username: '',
    password: '',
  };
  const onSubmitFunction = values => {
    console.log(values);
  };
  return (
    <Formik initialValues={blankLoginField} onSubmit={onSubmitFunction}>
      {() => (
        <div className="loginFields">
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
              placeholder="Enter Email Address..."
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              label="Email"
              name="email"
              fullWidth
              validate={validationMap.username}
            />
          </div>
          <div className="text-center mt-6">
            <Button as="submit" type="primary" 
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
              Login 
            </Button>
            {/* <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="submit"
              style={{ transition: 'all 0.15s ease 0s' }}
            >
              Login
            </button> */}
          </div>
          <div className="text-center ">
            <a href="#" className="text-blue-500" alt="Forgot password">
              <small>Create an Account!</small>
            </a>
          </div>
          <div className="text-center ">
            <a href="#" className="text-blue-500" alt="Forgot password">
              <small>Already have an Account? Login</small>
            </a>
          </div>
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
export default ForgotPasswordFormFormik;
