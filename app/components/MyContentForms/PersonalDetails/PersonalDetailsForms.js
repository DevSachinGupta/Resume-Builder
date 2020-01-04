import React from 'react';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';

const PersonalDetailsForm = ({ values, handleChange, handleBlur, errors }) => {
  return (
    <React.Fragment>
      <Row>
        <Column width="1/2" className="px-1">
          <Input
            placeholder="First Name"
            label="First Name"
            name="firstName"
            value={values.val}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.val}
          />
        </Column>
        <Column width="1/2" className="px-1">
          <Input
            placeholder="Last Name"
            val={values.val}
            label="Last Name"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
      </Row>

      <Row>
        <Column width="1/2" className="px-1">
          <Input
            placeholder="Email Address"
            val={values.val}
            label="Email Address"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
        <Column width="1/2" className="px-1">
          <Input
            placeholder="Contact Number"
            val={values.val}
            label="Contact Number"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
      </Row>

      <Row>
        <Column width="1/2" className="px-1">
          <Input
            placeholder="Date of Birth"
            val={values.val}
            label="Date of Birth"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
        <Column width="1/2" className="px-1">
          <Input
            placeholder="Gender"
            val={values.val}
            label="Gender"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
      </Row>

      <Row>
        <Column width="full" className="px-1">
          <Input
            placeholder="Address Line"
            val={values.val}
            label="Address"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
      </Row>

      <Row>
        <Column width="1/4" className="px-1" >
          <Input
            placeholder="City"
            val={values.val}
            label="City"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
        <Column width="1/4" className="px-1" >
          <Input
            placeholder="State"
            val={values.val}
            label="State"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
        <Column width="1/4" className="px-1" >
          <Input
            placeholder="Pincode"
            val={values.val}
            label="Pincode"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
        <Column width="1/4" className="px-1" >
          <Input
            placeholder="Country"
            val={values.val}
            label="Country"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
      </Row>

      <Row>
        <Column width="full" className="px-1">
          <Input
            placeholder="Summary"
            val={values.val}
            label="Summary"
            onChange={handleChange}
            error={errors.val}
          />
        </Column>
      </Row>
    </React.Fragment>
  );
};

export default PersonalDetailsForm;
