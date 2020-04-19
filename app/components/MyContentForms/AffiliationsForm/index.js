import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import { createStructuredSelector } from 'reselect';
import { makeUpdateResumeJSONState } from 'containers/Builder/selectors';
import {
  updateResumeJSONState,
  updateEditorCanvas,
} from 'containers/Builder/actions';
import { formatDateValue } from '../../../utils/app/textFormating';
import Accordian from '../../Accordion';
import AffiliationInputs from './AffiliationItems';
import Button from '../../Button';

function AffiliationForm({ resumeJSONState, dispatch }) {
  const blankAffFields = {
    organization: '',
    role: '',
    start: null,
    end: null,
    tillDate: false,
    summary: '',
  };
  const componentMap = {
    organization: { valueMap: 'organization', componentType: 'content' },
    role: { valueMap: 'role', componentType: 'content' },
    start: { valueMap: 'start', componentType: 'content' },
    end: { valueMap: 'end', componentType: 'content' },
    summary: { valueMap: 'summary', componentType: 'content' },
  };

  let storeAffiliation = null;
  if (resumeJSONState.affiliation) {
    storeAffiliation = resumeJSONState.affiliation.history;
  }

  const [affiliations, setAffiliations] = useState(
    storeAffiliation || [{ ...blankAffFields }],
  );

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
    const updatedAff = formatValues(
      JSON.parse(JSON.stringify(values.affiliation)),
    );
    const history = { history: values.affiliation };
    dispatch(
      updateEditorCanvas('affiliation', 'ADD', updatedAff, componentMap),
    );
    dispatch(updateResumeJSONState(history, 'affiliation'));
  };

  return (
    <div>
      <Formik
        initialValues={{ affiliation: affiliations }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="affiliation"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.affiliation.map((item, idx) => (
                    <Accordian
                      key={`Accordian-${idx}`}
                      id={idx}
                      label={
                        item.organization
                          ? item.organization
                          : `Affiliation ${idx + 1}`
                      }
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <AffiliationInputs
                        idx={idx}
                        values={item}
                        setFieldValue={setFieldValue}
                      />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankAffFields)}
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

AffiliationForm.propTypes = {
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
export default withCompose(AffiliationForm);
