import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Affiliation Form Component *****

const AffiliationInputs = ({ values, handleChange, handleBlur, errors }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Organisation"
          label="Organisation"
          name="organization"
          value={values.organization}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.organization}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Role"
          label="Role"
          name="role"
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.role}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="Start Date"
          label="Start Date"
          name="start"
          value={values.start}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="End Date"
          label="End Date"
          name="end"
          value={values.end}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.end}
        />
      </Column>
      <Column width="1/5" className="px-1">
        {/* TODO: Change this textfield with checkbox */}
        <Input
          type="checkbox"
          placeholder="Till date"
          label="Till date"
          name="tillDate"
          value={values.tillDate}
          onChange={handleChange}
          error={errors.tillDate}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.summary}
        />
      </Column>
    </Row>
  </div>
);

AffiliationInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default AffiliationInputs;
//  *****  Affiliation Form Component : END  ******
