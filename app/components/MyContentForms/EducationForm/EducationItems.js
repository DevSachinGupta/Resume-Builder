import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Education Form Component *****

const EducationInputs = ({ idx }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Degree"
          label="Degree"
          name={`title-${idx}`}
          validate={validationMap.title}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Institute Name"
          label="Institute Name"
          name={`institution-${idx}`}
          validate={validationMap.institution}
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
          validate={validationMap.fieldOfStudy}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
          placeholder="State"
          label="State"
          name={`state-${idx}`}
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Country"
          label="Country"
          name={`country-${idx}`}
          validate={validationMap.country}
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
          placeholder="Summary"
          label="Summary"
          name={`summary-${idx}`}
          validate={validationMap.summary}
        />
      </Column>
    </Row>
  </div>
);

EducationInputs.propTypes = {
  idx: PropTypes.number,
};

export default EducationInputs;
//  *****  Education Form Component : END  ******
