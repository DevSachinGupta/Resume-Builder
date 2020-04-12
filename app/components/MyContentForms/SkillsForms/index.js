import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import Button from '../../Button';
import Dropdown from '../../FormComponents/Dropdown';
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
  const blankSkillsField = [];
  const [data, setData] = useState([]);
  const updateData = value => {
    setData([...data, value]);
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
        <React.Fragment>
          <div className="tagContainer">
            {data.map(item => (
              <Tag>{item.value}</Tag>
            ))}
          </div>
          <Form className="socialFormContainer">
            <Dropdown
              onSelect={updateData}
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
        </React.Fragment>
      )}
    </Formik>
  );
}

export default SkillsForm;
