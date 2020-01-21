import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(_ => resolve(false)).catch(err => reject(err));
  });
const validationMap = {
  position: value =>
    validationHandler(
      yup
        .string()
        .required('HELLO WORLD')
        .max(5, 'ARE JYADA HOGAYA BHAI')
        .validate(value),
    ),
  employer: value =>
    validationHandler(
      yup
        .string()
        .required('HELLO WORLD')
        .validate(value),
    ),
  state: value =>
    validationHandler(
      yup
        .string()
        .required('HELLO WORLD')
        .validate(value),
    ),
  country: value =>
    validationHandler(
      yup
        .string()
        .required()
        .validate(value),
    ),
  start: value =>
    validationHandler(
      yup
        .date()
        .required()
        .validate(value),
    ),
  end: value =>
    validationHandler(
      yup
        .date()
        .required()
        .validate(value),
    ),
  tillDate: value =>
    validationHandler(
      yup
        .bool()
        .required()
        .validate(value),
    ),
  summary: value =>
    validationHandler(
      yup
        .string()
        .required()
        .validate(value),
    ),
};
export { validationMap };
