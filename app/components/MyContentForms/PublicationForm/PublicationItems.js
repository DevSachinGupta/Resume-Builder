import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Publication Form Component *****

const PublicationInputs = ({ values, handleChange, handleBlur, errors }) => (
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
          error={errors.title}
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
          error={errors.summary}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Reference Link"
          label="Reference Link"
          name="url"
          value={values.url}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.url}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          placeholder="Date"
          label="Date"
          name="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.date}
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

PublicationInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default PublicationInputs;
//  *****  Publication Form Component : END  ******
