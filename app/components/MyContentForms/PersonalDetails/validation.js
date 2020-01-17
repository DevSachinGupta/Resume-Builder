import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(valid => resolve(valid)).catch(err => reject(err));
  });
const validationMap = {
  firstName: value => validationHandler(yup.string().isValid(value)),
  lastName: value => validationHandler(yup.string().isValid(value)),
  email: value =>
    validationHandler(
      yup
        .string()
        .email('Please enter a valid email')
        .isValid(value),
    ),
  phone: value => validationHandler(yup.string().isValid(value)),
  dateOfBirth: value => validationHandler(yup.date().isValid(value)),
  gender: value => validationHandler(yup.string().isValid(value)),
  address: value => validationHandler(yup.string().isValid(value)),
  city: value => validationHandler(yup.string().isValid(value)),
  state: value => validationHandler(yup.string().isValid(value)),
  pincode: value => validationHandler(yup.string().isValid(value)),
  country: value => validationHandler(yup.string().isValid(value)),
  brief: value => validationHandler(yup.string().isValid(value)),
};
export { validationMap };
