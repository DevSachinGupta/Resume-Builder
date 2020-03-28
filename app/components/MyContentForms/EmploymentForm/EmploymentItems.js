import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Select from '../../FormComponents/Select';

//  *****  Employment Form Component *****
const EmploymentInputs = ({ idx, values, setFieldValue, countriesList }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Position"
          label="Position"
          name={`employment.${idx}.position`}
          validate={validationMap.position}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Employer"
          label="Employer"
          name={`employment.${idx}.employer`}
          validate={validationMap.employer}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Select
          placeholder="Country"
          label="Country"
          name="country"
          clearable
          options={countriesList}
          validate={validationMap.country}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-name="state"
          placeholder="State"
          label="State"
          name={`employment.${idx}.state`}
          validate={validationMap.state}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="Start Date"
          label="Start Date"
          name={`employment.${idx}.start`}
          validate={validationMap.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
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
          placeholder="Till date"
          label="Till date"
          onChange={() => {
            if (values.tillDate) {
              setFieldValue(`employment.${idx}.tillDate`, false);
            } else {
              setFieldValue(`employment.${idx}.tillDate`, true);
              setFieldValue(`employment.${idx}.end`, new Date());
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
  countriesList: PropTypes.array.isRequired,
};

export default EmploymentInputs;
//  *****  Education Form Component : END  ******
