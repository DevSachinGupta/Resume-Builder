import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Employment Form Component *****

const EmploymentInputs = ({ values, handleChange, handleBlur, errors }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Position"
          label="Position"
          name="position"
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.position}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Employer"
          label="Employer"
          name="employer"
          value={values.employer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.employer}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="State"
          label="State"
          name="state"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.state}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Country"
          label="Country"
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.country}
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

EmploymentInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default EmploymentInputs;
//  *****  Education Form Component : END  ******
