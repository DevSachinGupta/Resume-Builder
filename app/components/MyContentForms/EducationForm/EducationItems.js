import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea'

//  *****  Education Form Component *****

const EducationInputs = ({ idx, values,  setFieldValue }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Degree"
          label="Degree"
          validate={validationMap.title}
          name={`education.${idx}.title`}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
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
          data-idx={idx}
          placeholder="Field of Study"
          label="Field of Study"
          name={`education.${idx}.fieldOfStudy`}
          validate={validationMap.fieldOfStudy}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
          placeholder="State"
          label="State"
          name={`education.${idx}.state`}
          validate={validationMap.state}
        />
      </Column>
      <Column width="1/3" className="px-1">
        <Input
          data-idx={idx}
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
          placeholder="Start Date"
          label="Start Date"
          name={`education.${idx}.start`}
          validate={validationMap.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          placeholder="End Date"
          label="End Date"
          // hidden={values.tillDate}
          disabled={values.tillDate}
          name={`education.${idx}.end`}
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
            console.log(values.tillDate);
            if (values.tillDate) {
              setFieldValue(`education.${idx}.tillDate`, false);
            } else {
              setFieldValue(`education.${idx}.tillDate`, true);
              setFieldValue(`education.${idx}.end`, '');
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
          data-idx={idx}
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
};

export default EducationInputs;
//  *****  Education Form Component : END  ******
