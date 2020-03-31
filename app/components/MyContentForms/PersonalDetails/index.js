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
// import {
//   updateEditorState,
//   updateResumeJSONState,
// } from 'containers/Builder/actions';
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

  // const handleSave = values => {
  //   const updatedEdu = [...values.education];
  //   const history = { history: updatedEdu };
  //   const JSONString = JSON.stringify(history);
  //   const HTMLString = editorState.getHtml();
  //   const TemplateCss = editorState.getCss();
  //   const ConvertedHTML = InjectJSONUsingCheerioEducation(
  //     HTMLString,
  //     JSONString,
  //   );

  //   const DemoPage = {
  //     html: ConvertedHTML,
  //     css: TemplateCss,
  //     components: null,
  //     style: null,
  //   };

  //   dispatch(updateEditorState(ComponentEditor(DemoPage)));
  //   // dispatch(updateDemoPageState(DemoPage))
  //   dispatch(updateResumeJSONState(history, 'Personal'));
  // };

  return (
    <div>
      <Formik
        initialValues={personal}
        onSubmit={(values, actions) => {
          console.log(values);
          // handleSave(values);
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
