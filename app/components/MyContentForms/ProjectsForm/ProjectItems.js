import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Project Form Component *****

const ProjectInputs = ({ values, handleChange, handleBlur, errors }) => (
<div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Title"
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
        />
      </Column>
      <Column width="1/2" className="px-1">
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
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Technology Used"
          label="Technology Used"
          name="keywords"
          value={values.keywords}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Reference Link"
          label="Reference Link"
          name="url"
          value={values.url}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.val}
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
          placeholder="Description"
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.description}
        />
      </Column>
    </Row>
  </div>
);

ProjectInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default ProjectInputs;

//  *****  Project Form Component : END  ******

