import React from 'react';
import Input from '../../../../FormComponents/Input';

export const FormFirstStep = formikProps => {
  const { errors, touched } = formikProps;
  return (
    <>
      <Input
        placeholder="bucketUserName"
        label="bucketUserName"
        name="bucketUserName"
        // validate={validationMap.title}
        allowValidation={false}
      />
    </>
  );
};
