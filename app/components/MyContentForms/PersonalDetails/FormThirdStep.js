import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import { validationMap } from './validation';
import TextArea from '../../FormComponents/TextArea';
import Radio from '../../FormComponents/Radio';
import Select from '../../FormComponents/Select';

export const FormThirdStep = () => (
  // const { errors, touched } = formikProps;
  <>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Summary"
          label="Summary"
          name="brief"
          // className="capitalize"
          validate={validationMap.brief}
        />
      </Column>
    </Row>
  </>
);
