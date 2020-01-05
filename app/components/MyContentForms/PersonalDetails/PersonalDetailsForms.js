import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Personal Form Component *****

const PersonalDetailsForm = ({ values, handleChange, handleBlur, errors }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="First Name"
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Last Name"
          label="Last Name"
          name="lasttName"
          value={values.lasttName}
          onChange={handleChange}
          error={errors.lasttName}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Email Address"
          label="Email Address"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Contact Number"
          label="Contact Number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          placeholder="Date of Birth"
          label="Date of Birth"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
        />
      </Column>
      <Column width="1/2" className="px-1">
        {/* TODO: Gender variable Mapping */}
        <Input
          type="radio"
          name="genderMale"
          value={values.genderMale}
          onChange={handleChange}
          error={errors.genderMale}
          text="Male"
        />
        <Input
          type="radio"
          name="genderFemale"
          value={values.genderFemale}
          onChange={handleChange}
          error={errors.genderFemale}
          text="Female"
        />
        <Input
          type="radio"
          name="genderOther"
          value={values.genderOther}
          onChange={handleChange}
          error={errors.genderOther}
          text="Other"
        />
      </Column>
    </Row>

    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Address Line"
          label="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
          error={errors.address}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="City"
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          error={errors.city}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="State"
          label="State"
          name="state"
          value={values.state}
          onChange={handleChange}
          error={errors.state}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="Pincode"
          label="Pincode"
          name="pincode"
          value={values.pincode}
          onChange={handleChange}
          error={errors.pincode}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="Country"
          label="Country"
          name="country"
          value={values.country}
          onChange={handleChange}
          error={errors.country}
        />
      </Column>
    </Row>

    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name="brief"
          value={values.brief}
          onChange={handleChange}
          error={errors.brief}
        />
      </Column>
    </Row>
  </div>
);

PersonalDetailsForm.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default PersonalDetailsForm;

//  *****  Personal Form Component : End *****
