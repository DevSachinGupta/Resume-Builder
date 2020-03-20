import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PersonalDetailsForms from './PersonalDetailsForms';
import { getCountryList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import states from '../../DropdownList/stateList';
import countries from '../../DropdownList/countryList';
import Button from '../../Button';
import './style.scss';

function PersonalDetails({ dispatch, allCountries }) {
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
    country: 'test',
    brief: '',
  };
  const [personal, setPersonal] = useState({ ...blankPersonalFields });
  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });
  useEffect(() => {
    console.log('here are all Counties', allCountries);
  }, [allCountries]);
  const [country, setCountry] = useState({
    countryList: [],
    isLoading: true,
    errors: null,
  });

  // useEffect(() => {
  //   axios
  //     .get('https://resumebuilder.s3.ap-south-1.amazonaws.com/List/countryList.json')
  //     .then(response => {
  //       setCountry({
  //         countryList: response.data,
  //         isLoading: false,
  //       });
  //     })
  //     .catch(error => {
  //       setCountry({ error, isLoading: false });
  //     });
  // }, []);

  useEffect(() => {
    getCountires();
  }, []);

  // const countriesList = [];
  // countries.map((item, index) => (countriesList[index] = { name: item.name }));

  const statesList = [];
  states.map((item, index) => (statesList[index] = item.name));

  const updateState = e => {
    const statesList = [];
    states.map((item, index) => (statesList[index] = item.name));
  };

  console.log('axios state: ', country);

  const { isLoading, countriesList } = country;

  return (
    <div>
      <Formik
        initialValues={personal}
        onSubmit={(values, actions) => {
          console.log(values);
          // handleSave(values);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form>
            <React.Fragment>
              <PersonalDetailsForms
                countriesList={allCountries}
                statesList={statesList}
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
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = () =>
  createStructuredSelector({
    allCountries: makeSelectAllCountiesOptions(),
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
