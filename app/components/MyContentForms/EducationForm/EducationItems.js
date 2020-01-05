import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import TextArea from '../../FormComponents/TextArea';

//  *****  Education Form Component *****

const EducationInputs = ({ values, handleChange, handleBlur, errors }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Degree"
          label="Degree"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.title}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Institute Name"
          label="Institute Name"
          name="institution"
          value={values.institution}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.institution}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/3" className="px-1">
        <Input
          placeholder="Field of Study"
          label="Field of Study"
          name="fieldOfStudy"
          value={values.fieldOfStudy}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.fieldOfStudy}
        />
      </Column>
      <Column width="1/3" className="px-1">
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
      <Column width="1/3" className="px-1">
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

EducationInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default EducationInputs;
//  *****  Education Form Component : END  ******
