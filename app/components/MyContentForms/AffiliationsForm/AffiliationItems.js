import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Affiliation Form Component *****

const AffiliationInputs = ({ idx, values, handleChange }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Organisation"
          label="Organisation"
          name={`organization-${idx}`}
          value={values.organization}
          validate={validationMap.organization}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Role"
          label="Role"
          name={`role-${idx}`}
          value={values.role}
          validate={validationMap.role}
          onChange={handleChange}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          data-idx={idx}
          type="date"
          placeholder="Start Date"
          label="Start Date"
          name={`start-${idx}`}
          value={values.start}
          validate={validationMap.start}
          onChange={handleChange}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          data-idx={idx}
          type="date"
          placeholder="End Date"
          label="End Date"
          name={`end-${idx}`}
          value={values.end}
          validate={validationMap.end}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/5" className="px-1">
        {/* TODO: Change this textfield with checkbox */}
        <Input
          data-idx={idx}
          type="checkbox"
          placeholder="Till date"
          label="Till date"
          name={`tillDate-${idx}`}
          value={values.tillDate}
          validate={validationMap.tillDate}
          onChange={handleChange}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          data-idx={idx}
          placeholder="Summary"
          label="Summary"
          name={`summary-${idx}`}
          value={values.summary}
          validate={validationMap.summary}
          onChange={handleChange}
        />
      </Column>
    </Row>
  </div>
);

AffiliationInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default AffiliationInputs;
//  *****  Affiliation Form Component : END  ******
