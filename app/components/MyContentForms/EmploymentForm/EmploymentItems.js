import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Employment Form Component *****
const EmploymentInputs = ({ idx, values, setFieldValue }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Position"
          label="Position"
          name={`employment.${idx}.position`}
          validate={validationMap.position}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Employer"
          label="Employer"
          name={`employment.${idx}.employer`}
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
          name={`employment.${idx}.state`}
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          data-name="country"
          placeholder="Country"
          label="Country"
          name={`employment.${idx}.country`}
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
          name={`employment.${idx}.start`}
          validate={validationMap.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          placeholder="End Date"
          label="End Date"
          disabled={values.tillDate}
          name={`employment.${idx}.end`}
          validate={validationMap.end}
        />
      </Column>
      <Column width="1/5" className="px-1">
        <Input
          type="checkbox"
          data-idx={idx}
          placeholder="Till date"
          label="Till date"
          onChange={() => {
            if (values.tillDate) {
              setFieldValue(`employment.${idx}.tillDate`, false);
            } else {
              setFieldValue(`employment.${idx}.tillDate`, true);
              setFieldValue(`employment.${idx}.end`, '');
            }
          }}
          name={`employment.${idx}.tillDate`}
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
          name={`employment.${idx}.summary`}
          validate={validationMap.summary}
        />
      </Column>
    </Row>
  </div>
);

EmploymentInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default EmploymentInputs;
//  *****  Education Form Component : END  ******
