import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import Input from '../../FormComponents/Input';
import Button from '../../Button';
// import Textfield from '../../FormComponents/TextField';
// import MultiselectSkill from '../../FormComponents/MultiselectSkill';
import './style.scss';
// import Dropdown from '../../FormComponents/Dropdown';

function SkillsForm() {
  const skillData = [
    { name: 'Music' },
    { name: 'Singing' },
    { name: 'Reading' },
    { name: 'Writing' },
    { name: 'Bloging' },
    { name: 'Poetry' },
    { name: 'Sketching' },
    { name: 'Photography' },
    { name: 'Designing' },
    { name: 'Painting' },
    { name: 'Volunteering' },
    { name: 'Socializing' },
    { name: 'Gaming' },
    { name: 'Sport' },
  ];
  const blankSkillsField = {
    type: '',
  };
  const [data, setData] = useState({
    datValues: [],
  });
  const updateData = value => {
    setData({
      datValues: [...data.datValues, value],
    });
  };
  console.log(data);
  return (
    <Formik initialValues={{ blankSkillsField }}>
      {({ handleSubmit, isSubmitting }) => (
        // <MultiselectSkill options={skillData} showDefaultOptions updateData={updateData} />
        <Form>
          <Input
            type="autocomplete"
            placeholder="Select Your Skills"
            label="Skills"
            name="skills"
            options={skillData}
            allowCustomText
            manageRangeVal
            allowMultiselect
            showFilterTagIcon={false}
            filterIconClassList=""
            filterNameClassList="ml-2"
            filterTagClassList=""
            showDataTagIcon={false}
            dataIconClassList=""
            dataNameClassList="tag-name ml-3"
            dataTagClassList=""
            showMultisectInTop={false}
            showMultisectInBottom
            // validate={validationMap.country}
          />
          <div className={cx('footerContainer')}>
            <Button as="submit" fullWidth type="primary">
              Save Details
            </Button>
          </div>
        </Form>
      )}
    </Formik>
    // <React.Fragment>
    //   <Dropdown onSelect={handleOptionSelect} options={options} />
    // </React.Fragment>
  );
}

export default SkillsForm;
