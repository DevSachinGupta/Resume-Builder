import React from 'react';
// import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Radio from '../../FormComponents/Radio';

//  *****  Personal Form Component *****
const PersonalDetailsForm = ({countriesList}) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="First Name"
          label="First Name"
          name="firstName"
          validate={validationMap.firstName}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Last Name"
          label="Last Name"
          name="lastName"
          validate={validationMap.lastName}
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
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Contact Number"
          label="Contact Number"
          name="phone"
          validate={validationMap.phone}
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
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Radio
          placeholder="Gender"
          label="Gender"
          name="gender"
          validate={validationMap.gender}
          values={['Male', 'Female', 'Others']}
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
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/4" className="px-1">
        <Input
          type="autocomplete"
          placeholder="Country"
          label="Country"
          name="country"
          options={countriesList}
          validate={validationMap.country}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          type="autocomplete"
          placeholder="State"
          label="State"
          name="state"
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          type="autocomplete"
          placeholder="City"
          label="City"
          name="city"
          options={[
            'Papaya',
            'Persimmon',
            'Paw Paw',
            'Prickly Pear',
            'Peach',
            'Pomegranate',
            'Pineapple',
          ]}
          validate={validationMap.city}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="Pincode"
          label="Pincode"
          name="pincode"
          validate={validationMap.pincode}
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
        />
      </Column>
    </Row>
  </div>
);

PersonalDetailsForm.propTypes = {};

export default PersonalDetailsForm;

//  *****  Personal Form Component : End *****
