import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { validationMap } from './validation';

function DeleteAccountPageFormik({ handleDelete }) {
  const blankDeletionField = {
    password: '',
  };
  const [deleteAccount, setDeleteAccount] = useState({ ...blankDeletionField });
  return (
    <Formik
      initialValues={deleteAccount}
      onSubmit={(values, actions) => {
        console.log(values);
        handleDelete(values);
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
                  placeholder="Password"
                  label="Confirm Password"
                  name="password"
                  autofill={false}
                  fullWidth
                  validate={validationMap.password}
                />
              </div>
              <div className="text-center mt-6">
                <Button
                  as="submit"
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </React.Fragment>
        </Form>
      )}
    </Formik>
  );
}

DeleteAccountPageFormik.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setResetSuccessfullly: PropTypes.func.isRequired,
  tokenId: PropTypes.number.isRequired,
};

export default DeleteAccountPageFormik;
