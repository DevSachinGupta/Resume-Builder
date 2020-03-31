import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import MultiselectSkill  from '../../FormComponents/MultiselectAutocomplete'

//  *****  Project Form Component *****

const ProjectInputs = ({ idx, values, setFieldValue, skillData, getValues }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Title"
          label="Title"
          name={`project.${idx}.title`}
          validate={validationMap.title}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Summary"
          label="Summary"
          name={`project.${idx}.summary`}
          validate={validationMap.summary}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        {/* <AutocompleteInput
          type="autocomplete"
          placeholder="Select Your Skills"
          label="Choose From List"
          name="Skills"
          options={skillData}
          allowCustomText={false}
          allowMultiselect
          allowIconsInOptionList
          updateValues={getValues}
        /> */}
         <MultiselectSkill options={skillData} showDefaultOptions />
        {/* <Input
          placeholder="Technology Used"
          label="Technology Used"
          name={`project.${idx}.keywords`}
          validate={validationMap.keywords}
        /> */}
      </Column>
      <Column width="1/2" className="px-1">
        <Input
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
          placeholder="Start Date"
          label="Start Date"
          clearable
          name={`project.${idx}.start`}
          validate={validationMap.start}
        />
      </Column>
      <Column width="2/5" className="px-1">
        <Input
          type="date"
          placeholder="End Date"
          label="End Date"
          clearable
          disabled={values.tillDate}
          name={`project.${idx}.end`}
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
              setFieldValue(`project.${idx}.tillDate`, false);
            } else {
              setFieldValue(`project.${idx}.tillDate`, true);
              setFieldValue(`project.${idx}.end`, null);
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
  skillData: PropTypes.array,
};

export default ProjectInputs;

//  *****  Project Form Component : END  ******
