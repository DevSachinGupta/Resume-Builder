import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PersonalDetailsForms from './PersonalDetailsForms';
import { getCountryList, getStateList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions, makeSelectFilterStatesOptions } from '../../../containers/MyContent/selectors';
import states from '../../DropdownList/stateList';
import countries from '../../DropdownList/countryList';
import Button from '../../Button';
import './style.scss';

function PersonalDetails({ dispatch, allCountries, fiterStates }) {
  const blankPersonalFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: new Date(),
    gender: '',
    gender1: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    brief: '',
  };
  const [personal, setPersonal] = useState({ ...blankPersonalFields });

  // const countryName = 101;

  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });
  const getStates = useCallback(countryName => {
    dispatch(getStateList(countryName));
  });

  // useEffect(() => {
  //   console.log('here are all Counties', allCountries);
  // }, [allCountries]);
  useEffect(() => {
    console.log('here are all states', fiterStates);
  }, [fiterStates]);

  const [country, setCountry] = useState({
    countryList: [],
    isLoading: true,
    errors: null,
  });

  const updateState = e => {
    console.log(e.currentTarget.value);
    getStates(e.currentTarget.value);
  };

  useEffect(() => {
    getCountires();
    // getStates();
  }, []);

  const { isLoading, countriesList } = country;

  console.log("personal:", personal)
  return (
    <div>
      <Formik
        initialValues={personal}
        onSubmit={(values, actions) => {
          console.log(values);
          // handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <React.Fragment>
              {console.log("values", values)}
              <PersonalDetailsForms
                countriesList={allCountries}
                statesList={fiterStates}
                updateState={updateState}
                setFieldValue={setFieldValue}
              />

              <div className={cx('footerContainer')}>
                <Button as="submit" fullWidth type="primary">
                  Save Details
                </Button>
              </div>
            </React.Fragment>
          </Form>
        )}
      </Formik>
    </div>
  );
}
PersonalDetails.propTypes = {
  allCountries: PropTypes.array.isRequired,
  fiterStates: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = () =>
  createStructuredSelector({
    allCountries: makeSelectAllCountiesOptions(),
    fiterStates: makeSelectFilterStatesOptions(),
  });
const mapDispatchToProps = dispatch => ({
  dispatch,
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(PersonalDetails);
