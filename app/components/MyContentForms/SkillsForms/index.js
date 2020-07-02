import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import { makeUpdateResumeJSONState } from 'containers/Builder/selectors';
import {
  updateResumeJSONState,
  updateEditorCanvas,
} from 'containers/Builder/actions';
import { FaTimes } from 'react-icons/fa';
import { toggleModal } from 'containers/App/actions';
import { setModalContent } from '../../../containers/MyContent/actions';
import { updateResumeKeyValue } from '../index';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import './style.scss';

function SkillsForm({ resumeJSONState, dispatch }) {
  let skillData = [
    { key: 'Music', value: 'Music' },
    { key: 'B', value: 'B' },
    { key: 'Delhi', value: 'Delhi' },
    { key: 'Kolkata', value: 'Kolkata' },
    { key: 'Mumbai', value: 'Mumbai' },
    { key: 'New Delhi', value: 'New Delhi' },
    { key: 'Ghaziabad', value: 'Ghaziabad' },
    { key: 'Other', value: 'Other' },
  ];
  const componentMap = {
    value: {
      valueMap: 'value',
      componentType: 'content',
    },
    progress: {
      key: ['style'],
      valueMap: ['rangeVal'],
      styleMap: { '0': 'width' },
      componentType: 'attribute',
    },
  };

  let storeSkill = null;
  if (resumeJSONState.skills) {
    storeSkill = resumeJSONState.skills.history;
    skillData = skillData.filter(
      data =>
        !storeSkill
          .map(tempData => tempData.value.toLowerCase())
          .includes(data.value.toLowerCase()),
    );
  }

  const [skills, setSkills] = useState(storeSkill || []);
  const [skillsData, setSkillsData] = useState(skillData);

  const getValues = data => {
    data.rangeVal = 10;
    setSkills([...skills, data]);
    const skillDataTemp = skillsData.filter(
      sData => sData.value.toLowerCase() !== data.value.toLowerCase(),
    );
    setSkillsData(skillDataTemp);
  };
  const removeValue = e => {
    const removeData = skills.find(
      data => data.value.toLowerCase() === e.currentTarget.value.toLowerCase(),
    );
    const skillDataTemp = [...skillsData, removeData];
    const skill = skills.filter(
      data => data.value.toLowerCase() !== e.currentTarget.value.toLowerCase(),
    );
    setSkillsData(skillDataTemp);
    setSkills(skill);
  };

  const { addToast } = useToasts();

  const formatValues = values => {
    const tempValues = values;
    tempValues.forEach((value, index) => {
      tempValues[index].rangeVal = `${value.rangeVal * 10}%`;
    });
    return tempValues;
  };

  const handleSave = values => {
    const updatedSkills = formatValues(JSON.parse(JSON.stringify(values)));
    const history = { history: values };
    dispatch(updateEditorCanvas('skills', 'ADD', updatedSkills, componentMap));
    dispatch(updateResumeJSONState(history, 'skills'));
    updateResumeKeyValue('skills', values, addToast);
    dispatch(toggleModal());
  };
  const handleSaveAndNext = values => {
    handleSave(values);
    dispatch(setModalContent('affilication'));
  };
  const handlePrevious = () => {
    dispatch(setModalContent('projects'));
  };

  const updateRange = e => {
    const skillsTemp = [...skills];
    skillsTemp[e.target.dataset.idx].rangeVal = e.target.value;
    setSkills(skillsTemp);
  };

  let skillsUI;

  if (skills) {
    skillsUI = skills.map((data, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="skillMultiselectDiv" key={`skill-${index}`}>
        <div className="tags">
          <span className="">{data.icon}</span>
          <span className="">{data.value}</span>

          <span className="w-20">
            <input
              id="range"
              data-idx={index}
              type="range"
              value={data.rangeVal}
              min="0"
              max="10"
              step="1"
              onChange={updateRange}
            />
            <span id="output">{data.rangeVal}</span>
          </span>

          <button type="button" onClick={removeValue} value={data.value}>
            <FaTimes />
          </button>
        </div>
      </div>
    ));
  }

  return (
    <Formik
      initialValues={[...skills]}
      onSubmit={values => {
        console.log('val and action', values);
        if (values.publish === 0) {
          handleSave(values);
        } else if (values.publish === 1) {
          handleSaveAndNext(values);
        } else if (values.publish === 2) {
          handlePrevious(values);
        }
      }}
      enableReinitialize
    >
      {({ setFieldValue, handleSubmit }) => (
        <Form>
          <div className="skillsSections">
            {skills.length ? (
              <div className="selectedSkills">{skillsUI}</div>
            ) : (
              ''
            )}
            <Input
              type="autocomplete"
              placeholder="Select Your Skills"
              label="Choose From List"
              name="skills"
              options={skillsData}
              allowCustomText
              allowMultiselect
              allowIconsInOptionList={false}
              updateValues={getValues}
              allowValidation={false}
            />
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
          </div>
        </Form>
      )}
    </Formik>
  );
}

SkillsForm.propTypes = {
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
export default withCompose(SkillsForm);
