import React from 'react';
import { Link } from 'react-router-dom';
import { TiChevronRight } from 'react-icons/ti';
// import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Formik } from 'formik';
import Button from '../../Button';
import HR from '../../Layout/HR';
import Input from '../../FormComponents/Input';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';
import Carousel from '../../Carousel';
import { validationMap } from '../validation';
import './style.css';

function LoginForm() {
  const blankLoginField = {
    username: '',
    password: '',
  };
  const onSubmitFunction = () => {};
  return (
    <Formik initialValues={blankLoginField} onSubmit={onSubmitFunction}>
      {() => (
        <Row className="my-3 bg-white">
          <Column width="full" className="px-1">
            <Input
              placeholder="Username"
              label="Username"
              name="username"
              fullWidth
              validate={validationMap.username}
            />
            <Input
              type="password"
              placeholder="Password"
              label="Password"
              name="password"
              fullWidth
              validate={validationMap.password}
            />
            <Row>
              <Column width="1/2" className="inline-block">
                <Input type="checkbox" placeholder="Remember me" />
              </Column>
              <Column width="1/2">
                <Link
                  to="login"
                  className="float-right"
                  style={{ 'padding-top': '0.5rem' }}
                >
                  Forget Password
                </Link>
              </Column>
            </Row>
            <Button as="submit" fullWidth type="primary">
              Login <TiChevronRight className="inline float-r" />
            </Button>
            <Button as="button" fullWidth type="primary mt-2">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <HR />
            <Row>
              <Column width="1/4" className="capitalize">
                or login with
              </Column>
              <Column width="1/4 px-4" className="">
                Facebook
              </Column>
              <Column width="1/4 px-4" className="">
                Github
              </Column>
              <Column width="1/4 px-4" className="">
                LinkedIn
              </Column>
            </Row>
          </Column>
        </Row>
      )}
    </Formik>
  );
}
export default LoginForm;
