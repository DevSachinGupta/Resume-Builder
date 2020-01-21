import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Project Form Component *****

const ProjectInputs = ({ idx }) => (
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
          placeholder="Technology Used"
          label="Technology Used"
          name={`keywords-${idx}`}
          validate={validationMap.keywords}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Reference Link"
          label="Reference Link"
          name={`url-${idx}`}
          validate={validationMap.url}
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
          name={`start-${idx}`}
          validate={validationMap.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          placeholder="End Date"
          label="End Date"
          name={`end-${idx}`}
          validate={validationMap.end}
        />
      </Column>
      <Column width="1/5" className="px-1">
        {/* TODO: Change this textfield with checkbox */}
        <Input
          type="checkbox"
          data-idx={idx}
          placeholder="Till date"
          label="Till date"
          name={`tillDate-${idx}`}
          validate={validationMap.tillDate}
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

ProjectInputs.propTypes = {
  idx: PropTypes.number,
};

export default ProjectInputs;

//  *****  Project Form Component : END  ******
