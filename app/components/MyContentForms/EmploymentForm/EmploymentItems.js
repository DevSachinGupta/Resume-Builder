import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Employment Form Component *****

const EmploymentInputs = ({
  idx,
  values,
  handleChange,
  handleBlur,
  errors,
}) => {
  let errorFields = {
    position: null,
    employer: null,
    state: null,
    country: null,
    start: null,
    end: null,
    summary: null,
  };
  if (!Object.keys(errors).length == 0) {
    console.log('not empty');
    errorFields = errors[idx];
  }
  return (
    <div>
      <Row>
        <Column width="1/2" className="px-1">
          <Input
            data-idx={idx}
            placeholder="Position"
            label="Position"
            name="position"
            value={values.position}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.position}
          />
        </Column>
        <Column width="1/2" className="px-1">
          <Input
            data-idx={idx}
            placeholder="Employer"
            label="Employer"
            name="employer"
            value={values.employer}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.employer}
          />
        </Column>
      </Row>
      <Row>
        <Column width="1/2" className="px-1">
          <Input
            data-idx={idx}
            data-name="state"
            placeholder="State"
            label="State"
            name="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.state}
          />
        </Column>
        <Column width="1/2" className="px-1">
          <Input
            data-idx={idx}
            data-name="country"
            placeholder="Country"
            label="Country"
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.country}
          />
        </Column>
      </Row>
      <Row>
        <Column width="2/5" className="px-1">
          <Input
            type="date"
            data-idx={idx}
            placeholder="Start Date"
            label="Start Date"
            name="start"
            value={values.start}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.start}
          />
        </Column>
        <Column width="2/5" className="px-1">
          <Input
            type="date"
            data-idx={idx}
            placeholder="End Date"
            label="End Date"
            name="end"
            value={values.end}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.end}
          />
        </Column>
        <Column width="1/5" className="px-1">
          {/* TODO: Change this textfield with checkbox */}
          <Input
            type="checkbox"
            data-idx={idx}
            placeholder="Till date"
            label="Till date"
            name="tillDate"
            value={values.tillDate}
            onChange={handleChange}
            error={errorFields.tillDate}
          />
        </Column>
      </Row>
      <Row>
        <Column width="full" className="px-1">
          <TextArea
            data-idx={idx}
            placeholder="Summary"
            label="Summary"
            name="summary"
            value={values.summary}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFields.summary}
          />
        </Column>
      </Row>
    </div>
  );
};

EmploymentInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default EmploymentInputs;
//  *****  Education Form Component : END  ******
