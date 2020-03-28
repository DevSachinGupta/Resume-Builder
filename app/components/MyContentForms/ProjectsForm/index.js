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
import {
  updateEditorState,
  updateResumeJSONState,
} from 'containers/Builder/actions';
import { InjectJSONUsingCheerioEducation } from 'components/CheerioComponent/templates/template_1';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
import Accordian from '../../Accordion';
import ProjectInputs from './ProjectItems';
import Button from '../../Button';

function ProjectForm({ editorState, resumeJSONState, dispatch }) {
  const blankProFields = {
    title: '',
    summary: '',
    keywords: '',
    url: '',
    start: null,
    end: null,
    tillDate: false,
    description: '',
  };
  let storeProject = null;

  if (resumeJSONState.Project) {
    storeProject = resumeJSONState.Project.history;
  }

  const [projects, setProjects] = useState(
    storeProject || [{ ...blankProFields }],
  );

  const handleSave = values => {
    const updatedEdu = [...values.project];
    const history = { history: updatedEdu };
    const JSONString = JSON.stringify(history);
    const HTMLString = editorState.getHtml();
    const TemplateCss = editorState.getCss();
    const ConvertedHTML = InjectJSONUsingCheerioEducation(
      HTMLString,
      JSONString,
    );

    const DemoPage = {
      html: ConvertedHTML,
      css: TemplateCss,
      components: null,
      style: null,
    };

    dispatch(updateEditorState(ComponentEditor(DemoPage)));
    // dispatch(updateDemoPageState(DemoPage))
    dispatch(updateResumeJSONState(history, 'Project'));
  };

  return (
    <div>
      <Formik
        initialValues={{ project: projects }}
        onSubmit={(values, actions) => {
          console.log(values);
          // handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="project"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.project.map((item, idx) => (
                    <Accordian
                      id={idx}
                      label={item.title ? item.title : `Project ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <ProjectInputs
                        idx={idx}
                        values={item}
                        setFieldValue={setFieldValue}
                      />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankProFields)}
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

ProjectForm.propTypes = {
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
export default withCompose(ProjectForm);
