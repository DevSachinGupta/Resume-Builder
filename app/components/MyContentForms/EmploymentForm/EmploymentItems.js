import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Employment Form Component *****
const EmploymentInputs = ({ idx }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Position"
          label="Position"
          name={`position-${idx}`}
          validate={validationMap.position}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Employer"
          label="Employer"
          name={`employer-${idx}`}
          validate={validationMap.employer}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          data-name="state"
          placeholder="State"
          label="State"
          name={`state-${idx}`}
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          data-name="country"
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

EmploymentInputs.propTypes = {
  idx: PropTypes.number,
};

export default EmploymentInputs;
//  *****  Education Form Component : END  ******
