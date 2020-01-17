import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Project Form Component *****

const ProjectInputs = ({ idx, values, handleChange }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Title"
          label="Title"
          name={`title-${idx}`}
          value={values.title}
          validate={validationMap.title}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
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
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Technology Used"
          label="Technology Used"
          name={`keywords-${idx}`}
          value={values.keywords}
          validate={validationMap.keywords}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Reference Link"
          label="Reference Link"
          name={`url-${idx}`}
          value={values.url}
          validate={validationMap.url}
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
          placeholder="Description"
          label="Description"
          name={`description-${idx}`}
          value={values.description}
          validate={validationMap.description}
          onChange={handleChange}
        />
      </Column>
    </Row>
  </div>
);

ProjectInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default ProjectInputs;

//  *****  Project Form Component : END  ******
