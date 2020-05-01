import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../../Layout';
// import Input from '../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../../FormComponents/TextArea';
import Select from '../../../FormComponents/Select';

const ContactUsInputs = ({ subjectsList }) => (
  <div>
    <Row>
      <div>
        <h3>Powered by Netcv()logo</h3>
        <h4>support@netcv.co.in</h4>
        <h5>Feel free to contact Us for any support.</h5>
      </div>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <Select
          placeholder="Subject"
          label="Subject"
          name="subject"
          clearable
          options={subjectsList}
          validate={validationMap.subject}
        />
      </Column>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Message"
          label="Message"
          name="message"
          validate={validationMap.message}
        />
      </Column>
    </Row>
  </div>
);

ContactUsInputs.propTypes = {
  subjectsList: PropTypes.array.isRequired,
};

export default ContactUsInputs;
