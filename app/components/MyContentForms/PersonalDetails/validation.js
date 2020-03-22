import * as yup from 'yup';

const validationHandler = validation =>
  new Promise((resolve, reject) => {
    validation.then(() => resolve(false)).catch(err => reject(err));
  });
const validationMap = {
  firstName: value =>
    validationHandler(
      yup
        .string()
        .required('Required1')
        .validate(value),
    ),
  lastName: value =>
    validationHandler(
      yup
        .string()
        .required('Required2')
        .validate(value),
    ),
  email: value =>
    validationHandler(
      yup
        .string()
        .required('Required3')
        .validate(value),
    ),
  phone: value =>
    validationHandler(
      yup
        .string()
        .required('Required4')
        .validate(value),
    ),
  dateOfBirth: value =>
    validationHandler(
      yup
        .date()
        .typeError("start Please Enter Valid Date")
        .required('Required5')
        .validate(value),
    ),
  gender: value =>
    validationHandler(
      yup
        .string()
        .required('Required6')
        .validate(value),
    ),
  address: value =>
    validationHandler(
      yup
        .string()
        .required('Required7')
        .validate(value),
    ),
  city: value =>
    validationHandler(
      yup
        .string()
        .required('Required8')
        .validate(value),
    ),
  state: value =>
    validationHandler(
      yup
        .string()
        .required('Required9')
        .validate(value),
    ),
  pincode: value =>
    validationHandler(
      yup
        .string()
        .required('Required10')
        .validate(value),
    ),
  country: value =>
    validationHandler(
      yup
        .string()
        .required('Required11')
        .validate(value),
    ),
  brief: value =>
    validationHandler(
      yup
        .string()
        .required('Required12')
        .validate(value),
    ),
};
export { validationMap };
