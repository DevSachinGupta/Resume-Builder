import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import { makeUpdateResumeJSONState } from 'containers/Builder/selectors';
import {
  updateResumeJSONState,
  updateEditorCanvas,
} from 'containers/Builder/actions';
import { toggleModal } from 'containers/App/actions';
import { defaultTo } from 'lodash';
import { setModalContent } from '../../../containers/MyContent/actions';
import { updateResumeKeyValue } from '../index';
import { formatDateValue } from '../../../utils/app/textFormating';
import Accordian from '../../Accordion';
import ProjectInputs from './ProjectItems';
import Button from '../../Button';

function ProjectForm({ resumeJSONState, dispatch }) {
  const skillData = [
    'Music',
    'Singing',
    'Reading',
    'Writing',
    'Bloging',
    'Poetry',
    'Sketching',
    'Photography',
    'Designing',
    'Painting',
    'Volunteering',
    'Socializing',
    'Gaming',
    'Sport',
  ];

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
  const componentMap = {
    title: { valueMap: 'title', componentType: 'content' },
    summary: { valueMap: 'summary', componentType: 'content' },
    keywords: { valueMap: 'keywords', componentType: 'content' },
    url: {
      key: ['href'],
      valueMap: ['url'],
      componentType: 'attribute',
      addHiddenClass: [],
    },
    start: { valueMap: 'start', componentType: 'content' },
    end: { valueMap: 'end', componentType: 'content' },
    description: { valueMap: 'description', componentType: 'content' },
  };

  // useEffect(() => {
  //   console.log(resumeJSONState);
  //   const storeProject = defaultTo(resumeJSONState, 'project.history', null);
  //   if (storeProject) {
  //     setProjects([{ ...storeProject }]);
  //   }
  // }, [resumeJSONState]);
  // const [projects, setProjects] = useState([{ ...blankProFields }]);

  let storeProject = null;
  if (resumeJSONState.project) {
    storeProject = resumeJSONState.project.history;
  }
  const [projects, setProjects] = useState(
    storeProject || [{ ...blankProFields }],
  );

  const { addToast } = useToasts();

  const formatValues = values => {
    const tempValues = values;
    tempValues.forEach((value, index) => {
      tempValues[index].start = formatDateValue(tempValues[index].start);
      if (tempValues[index].tillDate === true) {
        tempValues[index].end = 'Present';
      } else {
        tempValues[index].end = formatDateValue(tempValues[index].end);
      }
      if (tempValues[index].url === '') {
        componentMap.url.addHiddenClass.push(true);
      } else {
        componentMap.url.addHiddenClass.push(false);
      }
    });
    return tempValues;
  };
  const handleSave = values => {
    const updatedPro = formatValues(JSON.parse(JSON.stringify(values.project)));
    const history = { history: values.project };
    dispatch(updateEditorCanvas('project', 'ADD', updatedPro, componentMap));
    dispatch(updateResumeJSONState(history, 'project'));
    updateResumeKeyValue('project', values.project, addToast);
    dispatch(toggleModal());
  };
  const handleSaveAndNext = values => {
    handleSave(values);
    dispatch(setModalContent('skills'));
  };
  const handlePrevious = () => {
    dispatch(setModalContent('employmentDetails'));
  };

  return (
    <div>
      <Formik
        initialValues={{ project: projects }}
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
              name="project"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.project.map((item, idx) => (
                    <Accordian
                      key={idx}
                      id={idx}
                      label={item.title ? item.title : `Project ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <ProjectInputs
                        idx={idx}
                        values={item}
                        setFieldValue={setFieldValue}
                        skillData={skillData}
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
                    {/* <Button as="submit" type="primary">
                      Save Details
                    </Button>
                    <Button as="submit" type="primary">
                      Save and Next
                    </Button> */}
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

ProjectForm.propTypes = {
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
export default withCompose(ProjectForm);
