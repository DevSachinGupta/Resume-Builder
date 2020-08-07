import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Radio from '../../FormComponents/Radio';
import Select from '../../FormComponents/Select';

export const FormFirstStep = () => (
  // const { errors, touched } = formikProps;
  <>
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
  </>
);
