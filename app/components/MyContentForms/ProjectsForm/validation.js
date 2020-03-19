import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(() => resolve(false)).catch(err => reject(err));
  });
const validationMap = {
  title: value =>
    validationHandler(
      yup
        .string()
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
  keywords: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  url: value =>
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
  description: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
};
export { validationMap };
