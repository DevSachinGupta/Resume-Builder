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
  url: value =>
    validationHandler(
      yup
        .string()
        .required('Required')
        .url('Enter a valid url')
        .validate(value),
    ),
  date: value =>
    validationHandler(
      yup
        .date()
        .required('Required')
        .nullable()
        .typeError('Invalid Date Format it should be dd/mm/yyyy')
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
