import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(valid => resolve(valid)).catch(err => reject(err));
  });
const validationMap = {
  firstName: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  lastName: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  username: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  password: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .min(8)
        .validate(value),
    ),
};

export { validationMap };
