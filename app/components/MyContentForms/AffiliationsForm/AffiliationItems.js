import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Affiliation Form Component *****

const AffiliationInputs = ({ idx }) => (
  <div>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Organisation"
          label="Organisation"
          name={`organization-${idx}`}
          validate={validationMap.organization}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Role"
          label="Role"
          name={`role-${idx}`}
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
        {/* TODO: Change this textfield with checkbox */}
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

AffiliationInputs.propTypes = {
  idx: PropTypes.number,
};

export default AffiliationInputs;
//  *****  Affiliation Form Component : END  ******
