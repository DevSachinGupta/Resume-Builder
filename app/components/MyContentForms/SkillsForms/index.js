import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { FaTimes } from 'react-icons/fa';
import Button from '../../Button';
import Dropdown from '../../FormComponents/Dropdown';
import Input from '../../FormComponents/Input';
import Tag from '../../Tag';
import './style.scss';

function SkillsForm() {
  const skillData = [
    { key: 'Music', value: 'Music' },
    { key: 'B', value: 'B' },
    { key: 'Delhi', value: 'Delhi' },
    { key: 'Kolkata', value: 'Kolkata' },
    { key: 'Mumbai', value: 'Mumbai' },
    { key: 'New Delhi', value: 'New Delhi' },
    { key: 'Ghaziabad', value: 'Ghaziabad' },
    { key: 'Other', value: 'Other' },
  ];
  // const blankSkillsField = [];
  // const [data, setData] = useState([]);
  // const updateData = value => {
  //   setData([...data, value]);
  // };

  const [skillsData, setSkillsData] = useState(skillData);
  const [skills, setSkills] = useState([]);

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

export default SkillsForm;
