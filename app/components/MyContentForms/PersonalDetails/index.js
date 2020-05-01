import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeUpdateResumeJSONState } from 'containers/Builder/selectors';
import {
  updateResumeJSONState,
  updateEditorCanvas,
} from 'containers/Builder/actions';
import { formatDateValue } from '../../../utils/app/textFormating';
import { getCountryList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import PersonalDetailsForms from './PersonalDetailsForms';
import Button from '../../Button';
import './style.scss';

function PersonalDetails({ allCountries, resumeJSONState, dispatch }) {
  const blankPersonalFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: null,
    gender: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    brief: '',
  };
  const componentMap = {
    firstName: { valueMap: 'firstName', componentType: 'content' },
    lastName: { valueMap: 'lastName', componentType: 'content' },
    fullName: { valueMap: 'fullName', componentType: 'content' },
    email: { valueMap: 'email', componentType: 'content' },
    phone: {
      valueMap: 'phone',
      componentType: 'content',
      addHiddenClass: false,
    },
    dateOfBirth: { valueMap: 'dateOfBirth', componentType: 'content' },
    gender: { valueMap: 'gender', componentType: 'content' },
    address1: { valueMap: 'address1', componentType: 'content' },
    address2: { valueMap: 'address2', componentType: 'content' },
    city: { valueMap: 'city', componentType: 'content' },
    state: { valueMap: 'state', componentType: 'content' },
    country: { valueMap: 'country', componentType: 'content' },
    pincode: { valueMap: 'pincode', componentType: 'content' },
    brief: { valueMap: 'brief', componentType: 'content' },
  };

  let storePersonal = null;
  if (resumeJSONState.personal) {
    storePersonal = resumeJSONState.personal.history;
  }

  const [personal, setPersonal] = useState(
    storePersonal || { ...blankPersonalFields },
  );

  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });

  useEffect(() => {
    getCountires();
  }, []);

  const formatValues = values => {
    const tempValues = values;
    tempValues.fullName = `${tempValues.firstName} ${tempValues.lastName}`;
    tempValues.dateOfBirth = formatDateValue(tempValues.dateOfBirth);
    if (tempValues.phone === '') {
      componentMap.phone.addHiddenClass = true;
    } else {
      componentMap.phone.addHiddenClass = false;
    }
    return tempValues;
  };
  const handleSave = values => {
    const updatedPer = formatValues(JSON.parse(JSON.stringify(values)));
    const history = { history: values };
    dispatch(updateEditorCanvas('personal', 'ADD', updatedPer, componentMap));
    dispatch(updateResumeJSONState(history, 'personal'));
  };

  return (
    <div>
      <Formik
        initialValues={personal}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {() => (
          <Form>
            <React.Fragment>
              <PersonalDetailsForms countriesList={allCountries} />

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
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    allCountries: makeSelectAllCountiesOptions(),
    resumeJSONState: makeUpdateResumeJSONState(),
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
