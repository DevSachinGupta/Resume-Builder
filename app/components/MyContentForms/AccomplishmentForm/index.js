import React, { memo, useState } from 'react';
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
import { formatDateValue } from '../../../utils/app/textFormating';
import Accordian from '../../Accordion';
import AccomplishmentInputs from './AccomplishmentItems';
import Button from '../../Button';

function AccomplishmentForm({ editorState, resumeJSONState, dispatch }) {
  const blankAccompFields = {
    title: '',
    date: null,
    rank: '',
    summary: '',
  };
  const componentMap = {
    title: { valueMap: 'title', componetType: 'content' },
    date: { valueMap: 'date', componetType: 'content' },
    rank: { valueMap: 'rank', componetType: 'content' },
    summary: { valueMap: 'summary', componetType: 'content' },
  };

  let storeAccomplishment = null;
  if (resumeJSONState.Accomplishment) {
    storeAccomplishment = resumeJSONState.Accomplishment.history;
  }

  const [accomplishments, setAccomplishments] = useState(
    storeAccomplishment || [{ ...blankAccompFields }],
  );

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
    // const updatedAccom = [...values.accomplishment];
    const history = { history: values.accomplishment };
    updateCanvas(
      'accomplishment',
      'ADD',
      updatedAccom,
      editorState,
      componentMap,
    );
    dispatch(updateResumeJSONState(history, 'Accomplishment'));
  };

  return (
    <div>
      <Formik
        initialValues={{ accomplishment: accomplishments }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {({ values }) => (
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

AccomplishmentForm.propTypes = {
  editorState: PropTypes.object,
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
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
export default withCompose(AccomplishmentForm);
