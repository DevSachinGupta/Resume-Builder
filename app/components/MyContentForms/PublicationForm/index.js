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
import PublicationInputs from './PublicationItems';
import Button from '../../Button';

function PublicationForm() {
  const blankPubFields = {
    title: '',
    summary: '',
    url: '',
    date: '',
    description: '',
  };

  const [publications, setPublications] = useState([{ ...blankPubFields }]);

  return (
    <div>
      <Formik
        initialValues={{ publication: publications }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="publication"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.publication.map((item, idx) => (
                    <Accordian
                      id={idx}
                      label={item.title ? item.title : `Publication ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <PublicationInputs idx={idx} />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankPubFields)}
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
export default withCompose(PublicationForm);