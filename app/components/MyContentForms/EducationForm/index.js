/**
 *
 * EducationForm
 *
 */

import React, { useState, memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateResumeJSONState } from 'containers/Builder/actions';
import updateCanvas from 'components/Builder/BuilderEditor/ComponentEditor';
import { getCountryList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import EducationInputs from './EducationItems';
import Accordian from '../../Accordion';
import Button from '../../Button';

function EducationForm({
  allCountries,
  editorState,
  resumeJSONState,
  dispatch,
}) {
  const blankEduFields = {
    title: '',
    institution: '',
    fieldOfStudy: '',
    state: '',
    country: '',
    start: null,
    end: null,
    tillDate: false,
    summary: '',
  };

  const componentMap = {
    title: { valueMap: 'title', componetType: 'content' },
    institution: { valueMap: 'institution', componetType: 'content' },
    fieldOfStudy: { valueMap: 'fieldOfStudy', componetType: 'content' },
    state: { valueMap: 'state', componetType: 'content' },
    country: { valueMap: 'country', componetType: 'content' },
    start: { valueMap: 'start', componetType: 'content' },
    end: { valueMap: 'end', componetType: 'content' },
    summary: { valueMap: 'summary', componetType: 'content' },
  };

  let storeEducation = null;

  if (resumeJSONState.Education) {
    storeEducation = resumeJSONState.Education.history;
  }

  const [educations, setEducations] = useState(
    storeEducation || [{ ...blankEduFields }],
  );

  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });

  useEffect(() => {
    getCountires();
  }, []);

  const handleSave = values => {
    const updatedEdu = [...values.education];
    const history = { history: updatedEdu };
    updateCanvas('education', 'ADD', values.education, editorState, componentMap);
    // updateCanvas('education', 'ADD', values.education, editorState);
    dispatch(updateResumeJSONState(history, 'Education'));
  };

  return (
    <div>
      <Formik
        initialValues={{ education: educations }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="education"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.education.map((item, idx) => (
                    <Accordian
                      key={`Accordian-${idx}`}
                      id={idx}
                      label={item.title ? item.title : `Education ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <EducationInputs
                        idx={idx}
                        values={item}
                        setFieldValue={setFieldValue}
                        countriesList={allCountries}
                      />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankEduFields)}
                    fullWidth
                    type="flat"
                  >
                    Add Another
                  </Button>
                  <div className={cx('footerContainer')}>
                    <Button as="submit" fullWidth type="primary">
                      Save Details
                    </Button>
                  </div>
                </React.Fragment>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
EducationForm.propTypes = {
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

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(EducationForm);
