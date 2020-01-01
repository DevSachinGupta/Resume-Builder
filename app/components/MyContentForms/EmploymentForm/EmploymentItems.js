import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import Textfield from '../../FormComponents/TextField';

//  *****  Employement Form Component *****

const EmpInputs = ({ values, handleChange, handleBlur, errors }) => (
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
          error={errors.val}
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
          error={errors.val}
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
          error={errors.val}
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
          error={errors.val}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          placeholder="Start Date"
          label="Start Date"
          name="start"
          value={values.start}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          placeholder="End Date"
          label="End Date"
          name="end"
          value={values.end}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
        />
      </Column>
      <Column width="1/5" className="px-1">
        {/* TODO: Change this textfield with checkbox */}
        <Textfield
          labeltxt="Till date"
          type="checkbox"
          name="tillDate"
          //   disabled={checkboxState}
          //   onClick={checkboxStateChange}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Summary"
          label="Summary"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
        />
      </Column>
    </Row>
  </div>
);

EmpInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default EmpInputs;
//  *****  Education Form Component : END  ******
