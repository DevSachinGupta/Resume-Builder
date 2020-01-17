import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';

//  *****  Accomplishment Form Component *****

const AccomplishmentInputs = ({ idx, values, handleChange }) => (
  <div>
    <Row>
      <Column width="full" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Title"
          label="Title"
          name={`title-${idx}`}
          value={values.title}
          validate={validationMap.title}
          onChange={handleChange}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          type="date"
          placeholder="Date"
          label="Date"
          name={`date-${idx}`}
          value={values.date}
          validate={validationMap.date}
          onChange={handleChange}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          data-idx={idx}
          placeholder="Rank"
          label="Rank"
          name={`rank-${idx}`}
          value={values.rank}
          validate={validationMap.rank}
          onChange={handleChange}
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
          value={values.summary}
          validate={validationMap.summary}
          onChange={handleChange}
        />
      </Column>
    </Row>
  </div>
);

AccomplishmentInputs.propTypes = {
  idx: PropTypes.number,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default AccomplishmentInputs;
//  *****  Education Form Component : END  ******
