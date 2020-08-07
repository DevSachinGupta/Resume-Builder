import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Radio from '../../FormComponents/Radio';
import Select from '../../FormComponents/Select';

export const FormSecondStep = ({ countriesList }) => (
  // const { errors, touched } = formikProps;
  <>
    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Address Line 1"
          label="Address1"
          name="address1"
          validate={validationMap.address1}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Address Line 2"
          label="Address2"
          name="address2"
          validate={validationMap.address2}
        />
      </Column>
    </Row>

    <Row>
      <Column width="1/2" className="px-1">
        <Select
          placeholder="Country"
          label="Country"
          name="country"
          clearable
          options={countriesList}
          validate={validationMap.country}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="State"
          label="State"
          name="state"
          validate={validationMap.state}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="City"
          label="City"
          name="city"
          validate={validationMap.city}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Pincode"
          label="Pincode"
          name="pincode"
          validate={validationMap.pincode}
        />
      </Column>
    </Row>
  </>
);
