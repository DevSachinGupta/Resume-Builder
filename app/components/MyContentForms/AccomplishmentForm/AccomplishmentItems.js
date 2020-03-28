import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Accomplishment Form Component *****

const AccomplishmentInputs = ({ idx }) => (
  <div>
    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Title"
          label="Title"
          name={`accomplishment.${idx}.title`}
          validate={validationMap.title}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          placeholder="Date"
          label="Date"
          name={`accomplishment.${idx}.date`}
          validate={validationMap.date}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Rank"
          label="Rank"
          name={`accomplishment.${idx}.rank`}
          validate={validationMap.rank}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name={`accomplishment.${idx}.summary`}
          validate={validationMap.summary}
        />
      </Column>
    </Row>
  </div>
);

AccomplishmentInputs.propTypes = {
  idx: PropTypes.number,
};

export default AccomplishmentInputs;
//  *****  Education Form Component : END  ******
