import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import { toggleModal } from 'containers/App/actions';
import { makeUpdateResumeJSONState } from 'containers/Builder/selectors';
import {
  updateResumeJSONState,
  updateEditorCanvas,
  updateResumeKeyValue,
} from 'containers/Builder/actions';
import { setModalContent } from '../../../containers/MyContent/actions';
import { formatDateValue } from '../../../utils/app/textFormating';
import Accordian from '../../Accordion';
import AccomplishmentInputs from './AccomplishmentItems';
import Button from '../../Button';

function AccomplishmentForm({ resumeJSONState, dispatch }) {
  const blankAccompFields = {
    title: '',
    date: null,
    rank: '',
    summary: '',
  };
  const componentMap = {
    title: { valueMap: 'title', componentType: 'content' },
    date: { valueMap: 'date', componentType: 'content' },
    rank: { valueMap: 'rank', componentType: 'content' },
    summary: { valueMap: 'summary', componentType: 'content' },
  };

  let storeAccomplishment = null;
  if (resumeJSONState.accomplishment) {
    storeAccomplishment = resumeJSONState.accomplishment.history;
  }

  const [accomplishments, setAccomplishments] = useState(
    storeAccomplishment || [{ ...blankAccompFields }],
  );

  const { addToast } = useToasts();

  const formatValues = values => {
    const tempValues = values;
    tempValues.forEach((value, index) => {
      tempValues[index].date = formatDateValue(tempValues[index].date);
    });
    return tempValues;
  };
  const handleSave = values => {
    const updatedAccom = formatValues(
      JSON.parse(JSON.stringify(values.accomplishment)),
    );
    const history = { history: values.accomplishment };
    dispatch(
      updateEditorCanvas('accomplishment', 'ADD', updatedAccom, componentMap),
    );
    dispatch(updateResumeJSONState(history, 'accomplishment'));
    dispatch(updateResumeKeyValue('accomplishment', values.accomplishment, addToast));
    dispatch(toggleModal());
  };

  // const handleSaveAndNext = values => {
  //   handleSave(values);
  //   dispatch(setModalContent('employmentDetails'));
  // };
  const handlePrevious = () => {
    dispatch(toggleModal());
    dispatch(setModalContent('publication'));
  };

  return (
    <div>
      <Formik
        initialValues={{ accomplishment: accomplishments }}
        onSubmit={(values, actions) => {
          console.log('val and action', values, actions);
          if (values.publish === 0) {
            handleSave(values);
            // } else if (values.publish === 1) {
            //   handleSaveAndNext(values);
          } else if (values.publish === 2) {
            handlePrevious(values);
          }
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form>
            <FieldArray
              name="accomplishment"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.accomplishment.map((item, idx) => (
                    <Accordian
                      key={`Accordian-${idx}`}
                      id={idx}
                      label={
                        item.title ? item.title : `Accomplishment ${idx + 1}`
                      }
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <AccomplishmentInputs idx={idx} />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankAccompFields)}
                    fullWidth
                    type="flat"
                  >
                    Add Another
                  </Button>
                  <div className={cx('footerContainer')}>
                    <div className="mx-2 flex justify-between">
                      <div className="flex justify-left">
                        <div className="pr-2">
                          <Button
                            type="primary"
                            onClick={() => {
                              setFieldValue('publish', 2, false);
                              handleSubmit();
                            }}
                          >
                            Previous
                          </Button>
                        </div>
                        {/* <div className="pr-2">
                          <Button
                            type="primary"
                            onClick={() => {
                              setFieldValue('publish', 0, false);
                              handleSubmit();
                            }}
                          >
                            Save
                          </Button>
                        </div> */}
                      </div>
                      <div className="flex justify-end">
                        <div className="pl-6 pr-2">
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
                    </div>
                    {/* <Button as="submit" type="primary">
                      Save Details
                    </Button>
                    <Button as="submit" type="primary">
                      Save and Next
                    </Button> */}
                  </div>

                  {/* <div className={cx('footerContainer')}>
                    <Button as="submit" fullWidth type="primary">
                      Save Details
                    </Button>
                  </div> */}
                </React.Fragment>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

AccomplishmentForm.propTypes = {
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
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
export default withCompose(AccomplishmentForm);
