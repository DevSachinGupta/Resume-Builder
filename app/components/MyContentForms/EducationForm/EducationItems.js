import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Education Form Component *****

const EducationInputs = ({ idx, values, handleChange }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Degree"
          label="Degree"
          name={`title-${idx}`}
          value={values.title}
          validate={validationMap.title}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Institute Name"
          label="Institute Name"
          name={`institution-${idx}`}
          value={values.institution}
          validate={validationMap.institution}
          onChange={handleChange}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Field of Study"
          label="Field of Study"
          name={`fieldOfStudy-${idx}`}
          value={values.fieldOfStudy}
          validate={validationMap.fieldOfStudy}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
          placeholder="State"
          label="State"
          name={`state-${idx}`}
          value={values.state}
          validate={validationMap.state}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Country"
          label="Country"
          name={`country-${idx}`}
          value={values.country}
          validate={validationMap.country}
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

EducationInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default EducationInputs;
//  *****  Education Form Component : END  ******
