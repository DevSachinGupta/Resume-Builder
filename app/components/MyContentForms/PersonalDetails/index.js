import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import {
  toggleModal,
  updateResumeJsonInUserData,
} from 'containers/App/actions';
import {
  updateEditorCanvas,
  updateResumeKeyValue,
} from 'containers/Builder/actions';
import { makeSelectResumeJsonStateFromUserData } from '../../../containers/App/selectors';
import {
  setModalContent,
  getCountryList,
} from '../../../containers/MyContent/actions';

import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import {
  componentMapPersonal,
  formatValuesPersonal,
} from '../dataLoadStructure';
import PersonalDetailsForms from './PersonalDetailsForms';
import Button from '../../Button';
import './style.scss';

function PersonalDetails({ allCountries, resumeDataStore, dispatch }) {
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

  let storePersonal = null;
  if (resumeDataStore.personal) {
    storePersonal = resumeDataStore.personal.history;
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

  const { addToast } = useToasts();

  const handleSave = values => {
    const formatObject = formatValuesPersonal(
      JSON.parse(JSON.stringify(values)),
      componentMapPersonal,
    );
    const updatedPer = formatObject.tempValues;
    const { componentMap } = formatObject;
    const history = { history: values };
    dispatch(updateEditorCanvas('personal', 'ADD', updatedPer, componentMap));
    dispatch(updateResumeJsonInUserData('personal', history));
    dispatch(updateResumeKeyValue('personal', values, addToast));
    dispatch(toggleModal());
  };
  const handleSaveAndNext = values => {
    handleSave(values);
    dispatch(setModalContent('education'));
  };
  // const handlePrevious = () => {
  //   dispatch(toggleModal());
  //   dispatch(setModalContent('employmentDetails'));
  // };

  return (
    <div>
      <Formik
        initialValues={personal}
        onSubmit={(values, actions) => {
          console.log('val and action', values, actions);
          if (values.publish === 0) {
            handleSave(values);
          } else if (values.publish === 1) {
            handleSaveAndNext(values);
            // } else if (values.publish === 2) {
            //   handlePrevious(values);
          }
        }}
      >
        {({ setFieldValue, handleSubmit }) => (
          <Form>
            <React.Fragment>
              <PersonalDetailsForms countriesList={allCountries} />

              <div className={cx('footerContainer')}>
                <div className="mx-2 flex justify-between">
                  <div className="flex justify-left">
                    {/* <div className="pr-2">
                      <Button
                        type="primary"
                        onClick={() => {
                          setFieldValue('publish', 2, false);
                          handleSubmit();
                        }}
                      >
                        Previous
                      </Button>
                    </div> */}
                    <div className="pr-2">
                      <Button
                        type="primary"
                        onClick={() => {
                          setFieldValue('publish', 0, false);
                          handleSubmit();
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="pl-6 pr-2">
                      <Button
                        type="primary"
                        onClick={() => {
                          setFieldValue('publish', 1, false);
                          handleSubmit();
                        }}
                      >
                        Save and Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={cx('footerContainer')}>
                <Button as="submit" fullWidth type="primary">
                  Save Details
                </Button>
              </div> */}
            </React.Fragment>
          </Form>
        )}
      </Formik>
    </div>
  );
}
PersonalDetails.propTypes = {
  allCountries: PropTypes.array.isRequired,
  resumeDataStore: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    allCountries: makeSelectAllCountiesOptions(),
    resumeDataStore: makeSelectResumeJsonStateFromUserData(),
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
