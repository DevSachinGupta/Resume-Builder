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
import { updateCanvas } from 'components/Builder/BuilderEditor/ComponentEditor';
import { toggleModal } from 'containers/App/actions';
import { formatDateValue } from '../../../utils/app/textFormating';
import {
  getCountryList,
  setModalContent,
} from '../../../containers/MyContent/actions';
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
  if (resumeJSONState.education) {
    storeEducation = resumeJSONState.education.history;
  }
  console.log(resumeJSONState)
  const [educations, setEducations] = useState(
    storeEducation || [{ ...blankEduFields }],
  );

  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });

  useEffect(() => {
    getCountires();
  }, []);

  const formatValues = values => {
    const tempValues = values;
    tempValues.forEach((value, index) => {
      tempValues[index].start = formatDateValue(tempValues[index].start);
      if (tempValues[index].tillDate === true) {
        tempValues[index].end = 'Present';
      } else {
        tempValues[index].end = formatDateValue(tempValues[index].end);
      }
    });
    return tempValues;
  };
  const handleSave = values => {
    const updatedEdu = formatValues(
      JSON.parse(JSON.stringify(values.education)),
    );
    // const updatedEdu = [...values.education];
    const history = { history: values.education };
    updateCanvas('education', 'ADD', updatedEdu, editorState, componentMap);
    dispatch(updateResumeJSONState(history, 'education'));
    dispatch(toggleModal());
  };
  const handleSaveAndNext = values => {
    handleSave(values);
    // dispatch(toggleModal());
    dispatch(setModalContent('employmentDetails'));
  };
  const handlePrevious = values => {
    // dispatch(toggleModal());
    dispatch(setModalContent('personalDetails'));
  };

  return (
    <div>
      <Formik
        initialValues={{ education: educations }}
        onSubmit={(values, actions) => {
          console.log(values, actions);
          if (values.publish === 0) {
            handleSave(values);
          } else if (values.publish === 1) {
            handleSaveAndNext(values);
          } else if (values.publish === 2) {
            handlePrevious(values);
          }
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
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
                  <div className={cx('footerContainer flex')}>
                    <Button
                      type="button"
                      onClick={() => {
                        setFieldValue('publish', 2, false);
                        handleSubmit();
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      type="button"
                      onClick={() => {
                        setFieldValue('publish', 0, false);
                        handleSubmit();
                      }}
                    >
                      Save
                    </Button>

                    <Button
                      type="button"
                      onClick={() => {
                        setFieldValue('publish', 1, false);
                        handleSubmit();
                      }}
                    >
                      Save and Next
                    </Button>

                    {/* <Button as="submit" type="primary">
                      Save Details
                    </Button>
                    <Button as="submit" type="primary">
                      Save and Next
                    </Button> */}
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
