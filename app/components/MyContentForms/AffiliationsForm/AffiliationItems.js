import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Affiliation Form Component *****

const AffiliationInputs = ({ idx, values, setFieldValue }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Organisation"
          label="Organisation"
          name={`affiliation.${idx}.organization`}
          validate={validationMap.organization}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Role"
          label="Role"
          name={`affiliation.${idx}.role`}
          validate={validationMap.role}
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
          name={`affiliation.${idx}.start`}
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
          name={`affiliation.${idx}.end`}
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
              setFieldValue(`affiliation.${idx}.tillDate`, false);
            } else {
              setFieldValue(`affiliation.${idx}.tillDate`, true);
              setFieldValue(`affiliation.${idx}.end`, '');
            }
          }}
          name={`affiliation.${idx}.tillDate`}
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
          name={`affiliation.${idx}.summary`}
          validate={validationMap.summary}
        />
      </Column>
    </Row>
  </div>
);

AffiliationInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default AffiliationInputs;
//  *****  Affiliation Form Component : END  ******
