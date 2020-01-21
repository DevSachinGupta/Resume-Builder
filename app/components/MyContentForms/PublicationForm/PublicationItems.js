import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Publication Form Component *****

const PublicationInputs = ({ idx }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Title"
          label="Title"
          name={`title-${idx}`}
          validate={validationMap.title}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Summary"
          label="Summary"
          name={`summary-${idx}`}
          validate={validationMap.summary}
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
          validate={validationMap.url}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          placeholder="Date"
          label="Date"
          name={`date-${idx}`}
          validate={validationMap.date}
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
          validate={validationMap.description}
        />
      </Column>
    </Row>
  </div>
);

PublicationInputs.propTypes = {
  idx: PropTypes.number,
};

export default PublicationInputs;
//  *****  Publication Form Component : END  ******
