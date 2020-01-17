import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Radio from '../../FormComponents/Radio';

//  *****  Personal Form Component *****
const PersonalDetailsForm = ({ values, handleChange }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="First Name"
          label="First Name"
          name="firstName"
          validate={validationMap.firstName}
          value={values.firstName}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Last Name"
          label="Last Name"
          name="lastName"
          validate={validationMap.lastName}
          value={values.lastName}
          onChange={handleChange}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Email Address"
          label="Email Address"
          name="email"
          validate={validationMap.email}
          value={values.email}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Contact Number"
          label="Contact Number"
          name="phone"
          validate={validationMap.phone}
          value={values.phone}
          onChange={handleChange}
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
          validate={validationMap.dateOfBirth}
          value={values.dateOfBirth}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Radio
          placeholder="Gender"
          label="Gender"
          name="gender"
          validate={validationMap.gender}
          value={values.gender}
          values={['Male', 'Female', 'Others']}
          onChange={handleChange}
        />
        {/* TODO: Gender variable Mapping */}
        {/* <Input
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
        /> */}
      </Column>
    </Row>

    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Address Line"
          label="Address"
          name="address"
          validate={validationMap.address}
          value={values.address}
          onChange={handleChange}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/4" className="px-1">
        <Input
          type="autocomplete"
          placeholder="City"
          label="City"
          name="city"
          validate={validationMap.city}
          value={values.city}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          type="autocomplete"
          placeholder="State"
          label="State"
          name="state"
          validate={validationMap.state}
          value={values.state}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="Pincode"
          label="Pincode"
          name="pincode"
          validate={validationMap.pincode}
          value={values.pincode}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          type="autocomplete"
          placeholder="Country"
          label="Country"
          name="country"
          validate={validationMap.country}
          value={values.country}
          onChange={handleChange}
        />
      </Column>
    </Row>

    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name="brief"
          validate={validationMap.brief}
          value={values.brief}
          onChange={handleChange}
        />
      </Column>
    </Row>
  </div>
);

PersonalDetailsForm.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default PersonalDetailsForm;

//  *****  Personal Form Component : End *****
