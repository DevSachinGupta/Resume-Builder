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
        .required('Required')
        .max(5, 'ARE JYADA HOGAYA BHAI')
        .validate(value),
    ),
  employer: value =>
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
  country: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  start: value =>
    validationHandler(
      yup
        .date()
        .required('Required')
        .validate(value),
    ),
  end: value =>
    validationHandler(
      yup
        .date()
        .required('Required')
        .validate(value),
    ),
  tillDate: value =>
    validationHandler(
      yup
        .bool()
        .required('Required')
        .validate(value),
    ),
  summary: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
};
export { validationMap };
