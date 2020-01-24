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
  email: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  phone: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  dateOfBirth: value =>
    validationHandler(
      yup
        .date()
        .required('Required')
        .validate(value),
    ),
  gender: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  address: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  city: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  state: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  pincode: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  country: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  brief: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
};
export { validationMap };