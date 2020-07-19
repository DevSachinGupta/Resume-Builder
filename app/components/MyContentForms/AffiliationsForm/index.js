import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
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
import { setModalContent } from '../../../containers/MyContent/actions';
import {
  componentMapAffiliation,
  formatValuesAffiliation,
} from '../dataLoadStructure';
import Accordian from '../../Accordion';
import AffiliationInputs from './AffiliationItems';
import Button from '../../Button';

function AffiliationForm({ resumeDataStore, dispatch }) {
  const blankAffFields = {
    organization: '',
    role: '',
    start: null,
    end: null,
    tillDate: false,
    summary: '',
  };

  let storeAffiliation = null;
  if (resumeDataStore.affiliation) {
    storeAffiliation = resumeDataStore.affiliation.history;
  }
  const [affiliations, setAffiliations] = useState(
    storeAffiliation || [{ ...blankAffFields }],
  );

  const { addToast } = useToasts();

  const handleSave = values => {
    const updatedAff = formatValuesAffiliation(
      JSON.parse(JSON.stringify(values.affiliation)),
    );
    const history = { history: values.affiliation };
    dispatch(
      updateEditorCanvas(
        'affiliation',
        'ADD',
        updatedAff,
        componentMapAffiliation,
      ),
    );
    dispatch(updateResumeJsonInUserData('affiliation', history));
    dispatch(updateResumeKeyValue('affiliation', values.affiliation, addToast));
    dispatch(toggleModal());
  };

  const handleSaveAndNext = values => {
    handleSave(values);
    dispatch(setModalContent('social'));
  };
  const handlePrevious = () => {
    dispatch(toggleModal());
    dispatch(setModalContent('skills'));
  };

  return (
    <div>
      <Formik
        initialValues={{ affiliation: affiliations }}
        onSubmit={(values, actions) => {
          console.log('val and action', values, actions);
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
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

AffiliationForm.propTypes = {
  resumeDataStore: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  resumeDataStore: makeSelectResumeJsonStateFromUserData(),
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
