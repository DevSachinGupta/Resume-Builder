import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  updateResumeJSONState,
} from 'containers/Builder/actions';
import { InjectJSONUsingCheerioEducation } from 'components/CheerioComponent/templates/template_1';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
import Accordian from '../../Accordion';
import AffiliationInputs from './AffiliationItems';
import Button from '../../Button';

function AffiliationForm() {
  const blankAffFields = {
    organization: '',
    role: '',
    start: '',
    end: '',
    tillDate: false,
    summary: '',
  };

  const [affiliations, setAffiliations] = useState([{ ...blankAffFields }]);

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
                      label={item.organization ? item.organization : `Affiliation ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <AffiliationInputs idx={idx} values={item} setFieldValue={setFieldValue} />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankAffFields)}
                    fullWidth
                    type="flat"
                  >
                    Add Another
                  </Button>
                  {console.log(' value: ', values)}
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

const mapStateToProps = createStructuredSelector({
  editor_state: makeUpdateEditorState(),
  resume_json_state: makeUpdateResumeJSONState(),
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