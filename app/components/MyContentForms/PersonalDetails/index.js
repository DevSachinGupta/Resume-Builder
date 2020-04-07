import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateResumeJSONState } from 'containers/Builder/actions';
import updateCanvas from 'components/Builder/BuilderEditor/ComponentEditor';
import { getCountryList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import PersonalDetailsForms from './PersonalDetailsForms';
import Button from '../../Button';
import './style.scss';

function PersonalDetails({
  allCountries,
  editorState,
  resumeJSONState,
  dispatch,
}) {
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
    firstName: { valueMap: 'firstName', componetType: 'content' },
    lastName: { valueMap: 'lastName', componetType: 'content' },
    fullName: { valueMap: 'fullName', componetType: 'content' },
    email: { valueMap: 'email', componetType: 'content' },
    phone: { valueMap: 'phone', componetType: 'content' },
    dateOfBirth: { valueMap: 'dateOfBirth', componetType: 'content' },
    gender: { valueMap: 'gender', componetType: 'content' },
    address1: { valueMap: 'address1', componetType: 'content' },
    address2: { valueMap: 'address2', componetType: 'content' },
    city: { valueMap: 'city', componetType: 'content' },
    state: { valueMap: 'state', componetType: 'content' },
    country: { valueMap: 'country', componetType: 'content' },
    pincode: { valueMap: 'pincode', componetType: 'content' },
    brief: { valueMap: 'brief', componetType: 'content' },
  };

  let storePersonal = null;
  if (resumeJSONState.Personal) {
    storePersonal = resumeJSONState.Personal.history;
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
    tempValues['fullName'] = `${tempValues.firstName} ${tempValues.lastName}`;
    return tempValues;
  };
  const handleSave = values => {
    const updatedPer = formatValues(values);
    const history = { history: updatedPer };
    updateCanvas('personal', 'ADD', updatedPer, editorState, componentMap);
    dispatch(updateResumeJSONState(history, 'Personal'));
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
  editorState: PropTypes.object,
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    allCountries: makeSelectAllCountiesOptions(),
    editorState: makeUpdateEditorState(),
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
