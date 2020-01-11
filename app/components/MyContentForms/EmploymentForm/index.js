import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik } from 'formik';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  updateResumeJSONState,
} from 'containers/Builder/actions';
import { setModalContent } from 'containers/MyContent/actions';
import { toggleModal } from 'containers/App/actions';
import { InjectJSONUsingCheerioEmployement } from 'components/CheerioComponent/templates/template_1';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
import { Validations } from '../../../utils/validations';
import Accordian from '../../Accordion';
import EmploymentInputs from './EmploymentItems';

function EmploymentForm({ editorState, resumeJSONState, dispatch }) {
  const blankEmpFields = {
    position: '',
    employer: '',
    state: '',
    country: '',
    start: '',
    end: '',
    summary: '',
  };
  const nullEmpFields = {
    position: null,
    employer: null,
    state: null,
    country: null,
    start: null,
    end: null,
    summary: null,
  };
  const [employments, setEmployments] = useState([{ ...blankEmpFields }]);
  const [touched, setTouched] = useState([{ ...nullEmpFields }]);
  const [errors, setErrors] = useState([{ ...nullEmpFields }]);

  const addMore = () => {
    setEmployments([...employments, { ...blankEmpFields }]);
    setTouched([...touched, { ...nullEmpFields }]);
    setErrors([...errors, { ...nullEmpFields }]);
  };

  const handlePrevious = () => {
    dispatch(toggleModal());
    dispatch(setModalContent('education'));
  };

  const handleSave = () => {
    const updatedEmp = [...employments];
    const history = { history: updatedEmp };
    const JSONString = JSON.stringify(history);
    const HTMLString = editorState.getHtml();
    const TemplateCSS = editorState.getCss();
    const ConvertedHTML = InjectJSONUsingCheerioEmployement(
      HTMLString,
      JSONString,
    );

    const DemoPage = {
      html: ConvertedHTML,
      css: TemplateCSS,
      components: null,
      style: null,
    };

    dispatch(updateEditorState(ComponentEditor(DemoPage)));
    dispatch(updateResumeJSONState(history, 'Employement'));
  };

  const handleSaveAndNext = () => {
    handleSave();
    dispatch(toggleModal());
    dispatch(setModalContent('education'));
  };

  const handleEmpChange = e => {
    const updatedEmp = [...employments];
    updatedEmp[e.target.dataset.idx][e.target.name] = e.target.value;
    setEmployments(updatedEmp);
  };

  const validateFields = e => {
    // console.log('valida: ', Validations.InputValidations.isEmpty('fsd'));
    const updatedErrors = [...errors];
    const { idx } = e.target.dataset;
    updatedErrors[idx] = { ...nullEmpFields };
    if (Validations.InputValidations.isEmpty(employments[idx].position)) {
      updatedErrors[idx].position = 'Required';
    }
    if (Validations.InputValidations.isEmpty(employments[idx].employer)) {
      updatedErrors[idx].employer = 'Required';
    }
    if (Validations.InputValidations.isEmpty(employments[idx].state)) {
      updatedErrors[idx].state = 'Required';
    }
    if (Validations.InputValidations.isEmpty(employments[idx].country)) {
      updatedErrors[idx].country = 'Required';
    }
    setErrors(updatedErrors);
  };

  const handleTouchChange = e => {
    const updatedTouch = [...touched];
    updatedTouch[e.target.dataset.idx][e.target.name] = true;
    setTouched(updatedTouch);
  };

  const handleBlur = e => {
    handleTouchChange(e);
    validateFields(e);
  };

  return (
    <div>
      <Formik
        initialValues={{ ...employments }}
        // validate={Validations.InputValidations}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {employments.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Employment ${idx + 1}`}
              >
                <EmploymentInputs
                  idx={idx}
                  values={item}
                  handleChange={handleEmpChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              </Accordian>
            ))}
            <button type="button" onClick={addMore}>
              Add More
            </button>
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}

EmploymentForm.propTypes = {};

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
export default withCompose(EmploymentForm);
