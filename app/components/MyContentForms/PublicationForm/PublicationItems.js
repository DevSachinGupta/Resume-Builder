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
          placeholder="Title"
          label="Title"
          name={`publication.${idx}.title`}
          validate={validationMap.title}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Summary"
          label="Summary"
          name={`publication.${idx}.summary`}
          validate={validationMap.summary}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Reference Link"
          label="Reference Link"
          name={`publication.${idx}.url`}
          validate={validationMap.url}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          placeholder="Date"
          label="Date"
          clearable
          name={`publication.${idx}.date`}
          validate={validationMap.date}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Description"
          label="Description"
          name={`publication.${idx}.description`}
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
