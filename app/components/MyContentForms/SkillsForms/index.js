import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import Button from '../../Button';
import Dropdown from '../../FormComponents/Dropdown';
import './style.scss';

function SkillsForm() {
  const skillData = [
    { key: 'Music', value: 'Music' },
    { key: 'B', value: 'B' },
    { key: 'C', value: 'C' },
  ];
  const blankSkillsField = [];
  const [data, setData] = useState({
    datValues: [],
  });
  const updateData = value => {
    setData({
      datValues: [...data.datValues, value],
    });
  };
  return (
    <Formik
      initialValues={blankSkillsField}
      onSubmit={(values, actions) => {
        console.log(values);
        // handleSave(values);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="socialFormContainer">
          <Dropdown
            onSelect={value => console.log(value)}
            name="skils"
            multiSelect
            options={skillData}
          />
          <div className={cx('footerContainer')}>
            <Button as="submit" fullWidth type="primary">
              Save Details
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SkillsForm;
