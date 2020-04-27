import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Radio from '../../FormComponents/Radio';
import Select from '../../FormComponents/Select';

//  *****  Personal Form Component *****
const PersonalDetailsForm = ({ countriesList }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="First Name"
          label="First Name"
          name="firstName"
          className="capitalize"
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
          clearable
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
      </Column>
    </Row>

    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Address Line 1"
          label="Address1"
          name="address1"
          validate={validationMap.address1}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Address Line 2"
          label="Address2"
          name="address2"
          validate={validationMap.address2}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/4" className="px-1">
        <Select
          placeholder="Country"
          label="Country"
          name="country"
          clearable
          options={countriesList}
          validate={validationMap.country}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="State"
          label="State"
          name="state"
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/4" className="px-1">
        <Input
          placeholder="City"
          label="City"
          name="city"
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
          // className="capitalize"
          validate={validationMap.brief}
        />
      </Column>
    </Row>
  </div>
);

PersonalDetailsForm.propTypes = {
  countriesList: PropTypes.array.isRequired,
};

export default PersonalDetailsForm;

//  *****  Personal Form Component : End *****
