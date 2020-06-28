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
      <div className="flex flex-col min-w-0 w-full mb-6 text-center">
        <div className="text-center leading-none text-xl  mb-0 px-6 pb-3"><small className="text-xs font-light ">Powered by </small>NetCV.</div>
        <div className="text-base">Feel free to contact us for any support.</div>
        <small className="text-sm font-light leading-tight">support@netcv.com</small>
      </div>
      {/* <div>
        <h3>Powered by Netcv()logo</h3>
        <h4>support@netcv.co.in</h4>
        <h5>Feel free to contact Us for any support.</h5>
      </div> */}
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
