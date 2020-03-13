/**
 *
 * EducationForm
 *
 */

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
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import EducationInputs from './EducationItems';
import Accordian from '../../Accordion';
import Button from '../../Button';

function EducationForm(props) {
  const blankEduFields = {
    title: '',
    institution: '',
    fieldOfStudy: '',
    state: '',
    country: '',
    start: '',
    end: '',
    summary: '',
  };
  const [educations, setEducations] = useState([{ ...blankEduFields }]);

  // const handleSave = () => {
  //   const updatedEdu = [...educations];
  //   const history = { history: updatedEdu };
  //   const JSONString = JSON.stringify(history);
  //   const HTMLString = editor_state.getHtml();
  //   const TemplateCSS = editor_state.getCss();
  //   const ConvertedHTML = InjectJSONUsingCheerioEducation(
  //     HTMLString,
  //     JSONString,
  //   );
  //   const DemoPage = {
  //     html: ConvertedHTML,
  //     css: TemplateCSS,
  //     components: null,
  //     style: null,
  //   };

  //   dispatch(updateEditorState(ComponentEditor(DemoPage)));
  //   dispatch(updateResumeJSONState(history, 'Education'));
  // };
  return (
    <div>
      <Formik
        initialValues={{ education: educations }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="education"
              render={arrayHelpers => (
                <React.Fragment>
                  {console.log(arrayHelpers, ' value: ', values)}
                  {values.education.map((item, idx) => (
                    <Accordian
                      id={idx}
                      label={item.title ? item.title : `Education ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <EducationInputs idx={idx} />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankEduFields)}
                    fullWidth
                    type="flat"
                  >
                    Add Another
                  </Button>
                  {console.log(arrayHelpers, ' value: ', values)}
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
EducationForm.propTypes = {};

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
export default withCompose(EducationForm);
