import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Education Form Component *****

const EducationInputs = ({ idx, values, setFieldValue }) => (
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
          validate={validationMap.title}
          name={`education.${idx}.institution`}
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
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          placeholder="State"
          label="State"
          name={`education.${idx}.state`}
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          placeholder="Country"
          label="Country"
          name={`education.${idx}.country`}
          validate={validationMap.country}
        />
      </Column>
    </Row>
    <Row>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          placeholderText="Start Date"
          label="Start Date"
          clearable
          name={`education.${idx}.start`}
          validate={validationMap.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          placeholderText="End Date"
          label="End Date"
          clearable
          // hidden={values.tillDate}
          disabled={values.tillDate}
          name={`education.${idx}.end`}
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
        />
      </Column>
    </Row>
  </div>
);

EducationInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default EducationInputs;
//  *****  Education Form Component : END  ******
