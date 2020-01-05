import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import TextArea from '../../FormComponents/TextArea';

//  *****  Accomplishment Form Component *****

const AccomplishmentInputs = ({ values, handleChange, handleBlur, errors }) => (
  <div>
    <Row>
      <Column width="full" className="px-1">
        <Input
          placeholder="Title"
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.title}
        />
      </Column>
    </Row>
    <Row>
      <Column width="1/2" className="px-1">
        <Input
          type="date"
          placeholder="Date"
          label="Date"
          name="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.date}
        />
      </Column>
      <Column width="1/2" className="px-1">
        <Input
          placeholder="Rank"
          label="Rank"
          name="rank"
          value={values.rank}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.rank}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.summary}
        />
      </Column>
    </Row>
  </div>
);

AccomplishmentInputs.propTypes = {
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.array,
};

export default AccomplishmentInputs;
//  *****  Education Form Component : END  ******
