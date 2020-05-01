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
  institution: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .validate(value),
    ),
  fieldOfStudy: value =>
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
        .nullable()
        .typeError('Invalid Date Format it should be dd/mm/yyyy')
        .validate(value),
    ),
  end: value =>
    validationHandler(
      yup
        .date()
        .required('Required')
        .nullable()
        .typeError('Invalid Date Format it should be dd/mm/yyyy')
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
