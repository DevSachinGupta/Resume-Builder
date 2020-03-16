import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Project Form Component *****

const ProjectInputs = ({ idx, values, setFieldValue }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Title"
          label="Title"
          name={`project.${idx}.title`}
          validate={validationMap.title}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Summary"
          label="Summary"
          name={`project.${idx}.summary`}
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
          name={`project.${idx}.keywords`}
          validate={validationMap.keywords}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Reference Link"
          label="Reference Link"
          name={`project.${idx}.url`}
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
          name={`project.${idx}.start`}
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
          name={`project.${idx}.end`}
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
              setFieldValue(`project.${idx}.tillDate`, false);
            } else {
              setFieldValue(`project.${idx}.tillDate`, true);
              setFieldValue(`project.${idx}.end`, '');
            }
          }}
          name={`project.${idx}.tillDate`}
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
          name={`project.${idx}.description`}
          validate={validationMap.description}
        />
      </Column>
    </Row>
  </div>
);

ProjectInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default ProjectInputs;

//  *****  Project Form Component : END  ******
