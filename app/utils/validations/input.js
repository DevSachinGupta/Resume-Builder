export const isEmail = value => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return true;
  }
  return false;
};
export const isLink = value => {
  let pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (pattern.test(value)) {
    return true;
  }
  return false;
};
export const isEmpty = value => {
  if (value) {
    return true;
  }
  return false;
};
export const isOverFlowing = () => {};
export const InputValidations = {
  isEmail,
  isLink,
  isEmpty,
  isOverFlowing,
};
