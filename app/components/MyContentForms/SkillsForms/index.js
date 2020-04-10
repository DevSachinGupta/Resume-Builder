import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateResumeJSONState } from 'containers/Builder/actions';
import { updateCanvas } from 'components/Builder/BuilderEditor/ComponentEditor';
import { FaTimes } from 'react-icons/fa';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import './style.scss';

function SkillsForm({ editorState, resumeJSONState, dispatch }) {
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
      componetType: 'content',
    },
    progress: {
      key: ['style'],
      valueMap: ['rangeVal'],
      styleMap: { '0': 'width' },
      componetType: 'attribute',
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

  const formatValues = values => {
    const tempValues = values;
    tempValues.forEach((value, index) => {
      tempValues[index].rangeVal = `${value.rangeVal * 10}%`;
    });
    return tempValues;
  };

  const handleSave = values => {
    const updatedSkills = formatValues(JSON.parse(JSON.stringify(values)));
    // const updatedSkills = [...values];
    const history = { history: values };
    updateCanvas('skills', 'ADD', updatedSkills, editorState, componentMap);
    dispatch(updateResumeJSONState(history, 'skills'));
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
        // eslint-disable-next-line no-console
        console.log(values);
        handleSave(values);
      }}
      enableReinitialize
    >
      {() => (
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
              <Button as="submit" fullWidth type="primary">
                Save Details
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

SkillsForm.propTypes = {
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
export default withCompose(SkillsForm);
