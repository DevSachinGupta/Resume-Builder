import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(() => resolve(false)).catch(err => reject(err));
  });
const validationMap = {
  url: value =>
    validationHandler(
      yup
        .string()
        .url('Enter a valid url')
        .validate(value),
    ),
};
export { validationMap };
