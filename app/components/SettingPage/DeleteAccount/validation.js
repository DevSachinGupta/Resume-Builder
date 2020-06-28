import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(() => resolve(false)).catch(err => reject(err));
  });
const validationMap = {
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
