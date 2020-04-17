import React from 'react';
import Input from '../../../../FormComponents/Input';
import { validationMap } from '../../../EducationForm/validation';

export const FormFirstStep = () => (
  // const { errors, touched } = formikProps;
  <>
    <Input
      placeholder="bucketUserName"
      label="bucketUserName"
      name="title"
      validate={validationMap.title}
      // allowValidation={false}
    />
  </>
);
