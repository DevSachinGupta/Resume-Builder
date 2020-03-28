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
// import {
//   updateEditorState,
//   updateResumeJSONState,
// } from 'containers/Builder/actions';
import Accordian from '../../Accordion';
import AffiliationInputs from './AffiliationItems';
import Button from '../../Button';

function AffiliationForm({ editorState, resumeJSONState, dispatch }) {
  const blankAffFields = {
    organization: '',
    role: '',
    start: null,
    end: null,
    tillDate: false,
    summary: '',
  };
  let storeAffiliation = null;

  if (resumeJSONState.Affiliation) {
    storeAffiliation = resumeJSONState.Affiliation.history;
  }

  const [affiliations, setAffiliations] = useState(
    storeAffiliation || [{ ...blankAffFields }],
  );

  return (
    <div>
      <Formik
        initialValues={{ affiliation: affiliations }}
        onSubmit={(values, actions) => {
          console.log(values);
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
export default withCompose(AffiliationForm);
