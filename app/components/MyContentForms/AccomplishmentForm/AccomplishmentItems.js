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
          data-idx={idx}
          placeholder="Title"
          label="Title"
          name={`title-${idx}`}
          validate={validationMap.title}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          data-idx={idx}
          type="date"
          placeholder="Date"
          label="Date"
          name={`date-${idx}`}
          validate={validationMap.date}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Rank"
          label="Rank"
          name={`rank-${idx}`}
          validate={validationMap.rank}
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

AccomplishmentInputs.propTypes = {
  idx: PropTypes.number,
};

export default AccomplishmentInputs;
//  *****  Education Form Component : END  ******
