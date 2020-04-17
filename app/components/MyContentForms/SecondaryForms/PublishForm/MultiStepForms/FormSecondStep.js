import React from 'react';
import Input from '../../../../FormComponents/Input';
import { validationMap } from '../../../EducationForm/validation';

export const FormSecondStep = () => (
  // const { errors, touched } = formikProps;
  <>
    <Input
      placeholder="State"
      label="State"
      name="state"
      validate={validationMap.state}
      // allowValidation={false}
    />
  </>
);
