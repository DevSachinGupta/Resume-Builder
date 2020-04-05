import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Select from '../../FormComponents/Select';

//  *****  Education Form Component *****

const EducationInputs = ({ idx, values, setFieldValue, countriesList }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Degree"
          label="Degree"
          validate={validationMap.title}
          name={`education.${idx}.title`}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Institute Name"
          label="Institute Name"
          validate={validationMap.institution}
          name={`education.${idx}.institution`}
          allowValidation={false}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/3" className="px-1">
        <Input
          placeholder="Field of Study"
          label="Field of Study"
          name={`education.${idx}.fieldOfStudy`}
          validate={validationMap.fieldOfStudy}
          allowValidation={false}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Select
          placeholder="Country"
          label="Country"
          name={`education.${idx}.country`}
          clearable
          options={countriesList}
          validate={validationMap.country}
          allowValidation={false}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          placeholder="State"
          label="State"
          name={`education.${idx}.state`}
          validate={validationMap.state}
          allowValidation={false}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="Start Date"
          label="Start Date"
          clearable
          name={`education.${idx}.start`}
          validate={validationMap.start}
          allowValidation={false}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="End Date"
          label="End Date"
          clearable
          // hidden={values.tillDate}
          disabled={values.tillDate}
          name={`education.${idx}.end`}
          validate={validationMap.end}
          allowValidation={false}
        />
      </Column>
      <Column width="1/5" className="px-1">
        <Input
          type="checkbox"
          placeholder="Till date"
          label="Till date"
          onChange={() => {
            if (values.tillDate) {
              setFieldValue(`education.${idx}.tillDate`, false);
            } else {
              setFieldValue(`education.${idx}.tillDate`, true);
              setFieldValue(`education.${idx}.end`, null);
            }
          }}
          name={`education.${idx}.tillDate`}
          validate={validationMap.tillDate}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name={`education.${idx}.summary`}
          validate={validationMap.summary}
          allowValidation={false}
        />
      </Column>
    </Row>
  </div>
);

EducationInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
  countriesList: PropTypes.array.isRequired,
};

export default EducationInputs;
//  *****  Education Form Component : END  ******
