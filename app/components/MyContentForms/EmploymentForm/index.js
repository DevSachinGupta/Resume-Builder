import React, { useState, memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  updateResumeJSONState,
} from 'containers/Builder/actions';
import { InjectJSONUsingCheerioEmployement } from 'components/CheerioComponent/templates/template_1';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
import { getCountryList } from '../../../containers/MyContent/actions';
import { makeSelectAllCountiesOptions } from '../../../containers/MyContent/selectors';
import Accordian from '../../Accordion';
import EmploymentInputs from './EmploymentItems';
import Button from '../../Button';

function EmploymentForm({
  allCountries,
  editorState,
  resumeJSONState,
  dispatch,
}) {
  const blankEmpFields = {
    position: '',
    employer: '',
    state: '',
    country: '',
    start: new Date(),
    end: new Date(),
    tillDate: false,
    summary: '',
  };
  let empStoreState = null;
  // const empStoreState = [
  //   {
  //     position: 'Senior Analyst',
  //     employer: 'HCL',
  //     state: 'Delhi',
  //     country: 'India',
  //     start: '10-10-2020',
  //     end: '10-10-2020',
  //     summary: 'My employment summary',
  //   },
  //   {
  //     position: 'GTE',
  //     employer: 'HCL',
  //     state: 'Delhi',
  //     country: 'India',
  //     start: '10-10-2020',
  //     end: '10-10-2020',
  //     summary: 'My employment summary',
  //   },
  // ];

  if (resumeJSONState.Employment) {
    empStoreState = resumeJSONState.Employment.history;
  }

  const [employments, setEmployments] = useState(
    empStoreState || [{ ...blankEmpFields }],
  );

  const getCountires = useCallback(() => {
    dispatch(getCountryList());
  });

  useEffect(() => {
    getCountires();
  }, []);

  // const handlePrevious = () => {
  //   dispatch(toggleModal());
  //   dispatch(setModalContent('education'));
  // };

  const handleSave = values => {
    const updatedEdu = [...values.employment];
    const history = { history: updatedEdu };
    const JSONString = JSON.stringify(history);
    const HTMLString = editorState.getHtml();
    const TemplateCss = editorState.getCss();
    const ConvertedHTML = InjectJSONUsingCheerioEmployement(
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
    dispatch(updateResumeJSONState(history, 'Employment'));
  };
  // const handleSaveAndNext = () => {
  //   handleSave();
  //   dispatch(toggleModal());
  //   dispatch(setModalContent('education'));
  // };

  return (
    <div>
      <Formik
        initialValues={{ employment: employments }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="employment"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.employment.map((item, idx) => (
                    <Accordian
                      key={idx}
                      id={idx}
                      label={
                        item.employer ? item.employer : `Employment ${idx + 1}`
                      }
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <EmploymentInputs
                        idx={idx}
                        values={item}
                        setFieldValue={setFieldValue}
                        countriesList={allCountries}
                      />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankEmpFields)}
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

EmploymentForm.propTypes = {
  allCountries: PropTypes.array.isRequired,
  editorState: PropTypes.object,
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    allCountries: makeSelectAllCountiesOptions(),
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
