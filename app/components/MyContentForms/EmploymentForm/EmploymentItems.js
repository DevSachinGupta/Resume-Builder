import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Employment Form Component *****
console.log(validationMap['position']);
const EmploymentInputs = ({ idx, values }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Position"
          label="Position"
          name={`position-${idx}`}
          validate={validationMap['position']}
          value={values.position}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Employer"
          label="Employer"
          name={`employer-${idx}`}
          validate={validationMap['employer']}
          value={values.employer}
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
          validate={validationMap['state']}
          value={values.state}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          data-name="country"
          placeholder="Country"
          label="Country"
          name={`country-${idx}`}
          validate={validationMap['country']}
          value={values.country}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="Start Date"
          label="Start Date"
          name={`start-${idx}`}
          validate={validationMap['start']}
          value={values.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="End Date"
          label="End Date"
          name={`end-${idx}`}
          validate={validationMap['end']}
          value={values.end}
        />
      </Column>
      <Column width="1/5" className="px-1">
        <Input
          type="checkbox"
          placeholder="Till date"
          label="Till date"
          name={`tillDate-${idx}`}
          validate={validationMap['tillDate']}
          value={values.tillDate}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name={`summary-${idx}`}
          validate={validationMap['summary']}
          value={values.summary}
        />
      </Column>
    </Row>
  </div>
);

EmploymentInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
};

export default EmploymentInputs;
//  *****  Education Form Component : END  ******
