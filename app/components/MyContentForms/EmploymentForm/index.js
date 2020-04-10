import React, { useState, memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateResumeJSONState } from 'containers/Builder/actions';
import { updateCanvas } from 'components/Builder/BuilderEditor/ComponentEditor';
import { formatDateValue } from '../../../utils/app/textFormating';
import { getCountryList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import Accordian from '../../Accordion';
import EmploymentInputs from './EmploymentItems';
import Button from '../../Button';

function EmploymentForm({
  allCountries,
  editorState,
  resumeJSONState,
  dispatch,
}) {
  const blankEmpFields = {
    position: '',
    employer: '',
    state: '',
    country: '',
    start: null,
    end: null,
    tillDate: false,
    summary: '',
  };
  const componentMap = {
    position: { valueMap: 'position', componetType: 'content' },
    employer: { valueMap: 'employer', componetType: 'content' },
    state: { valueMap: 'state', componetType: 'content' },
    country: { valueMap: 'country', componetType: 'content' },
    start: { valueMap: 'start', componetType: 'content' },
    end: { valueMap: 'end', componetType: 'content' },
    summary: { valueMap: 'summary', componetType: 'content' },
  };

  let empStoreState = null;
  if (resumeJSONState.employment) {
    empStoreState = resumeJSONState.employment.history;
  }

  const [employments, setEmployments] = useState(
    empStoreState || [{ ...blankEmpFields }],
  );

  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });

  useEffect(() => {
    getCountires();
  }, []);

  // const handlePrevious = () => {
  //   dispatch(toggleModal());
  //   dispatch(setModalContent('education'));
  // };

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
    const updatedEmp = formatValues(
      JSON.parse(JSON.stringify(values.employment)),
    );
    // const updatedEmp = [...values.employment];
    const history = { history: values.employment };
    updateCanvas('employment', 'ADD', updatedEmp, editorState, componentMap);
    dispatch(updateResumeJSONState(history, 'employment'));
  };

  // const handleSaveAndNext = () => {
  //   handleSave();
  //   dispatch(toggleModal());
  //   dispatch(setModalContent('education'));
  // };

  return (
    <div>
      <Formik
        initialValues={{ employment: employments }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="employment"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.employment.map((item, idx) => (
                    <Accordian
                      key={`Accordian-${idx}`}
                      id={idx}
                      label={
                        item.employer ? item.employer : `Employment ${idx + 1}`
                      }
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <EmploymentInputs
                        idx={idx}
                        values={item}
                        setFieldValue={setFieldValue}
                        countriesList={allCountries}
                      />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankEmpFields)}
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

EmploymentForm.propTypes = {
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
export default withCompose(EmploymentForm);
