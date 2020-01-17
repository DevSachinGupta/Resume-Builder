import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Publication Form Component *****

const PublicationInputs = ({ idx, values, handleChange }) => (
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
          placeholder="Reference Link"
          label="Reference Link"
          name={`url-${idx}`}
          value={values.url}
          validate={validationMap.url}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          type="date"
          placeholder="Date"
          label="Date"
          name={`date-${idx}`}
          value={values.date}
          validate={validationMap.date}
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

PublicationInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default PublicationInputs;
//  *****  Publication Form Component : END  ******
