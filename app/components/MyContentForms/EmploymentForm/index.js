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
import Accordian from '../../Accordion';
import EmploymentInputs from './EmploymentItems';
import Button from '../../Button';

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
  const [employments, setEmployments] = useState([{ ...blankEmpFields }]);

  const handlePrevious = () => {
    dispatch(toggleModal());
    dispatch(setModalContent('education'));
  };

  const addMore = () => {
    setEmployments([...employments, { ...blankEmpFields }]);
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

  return (
    <div>
      <Formik initialValues={{ ...employments }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {employments.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Employment ${idx + 1}`}
              >
                <EmploymentInputs idx={idx} />
              </Accordian>
            ))}
          </React.Fragment>
        )}
      </Formik>
      <Button onClick={addMore} fullWidth type="flat">
        Add Another
      </Button>
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
