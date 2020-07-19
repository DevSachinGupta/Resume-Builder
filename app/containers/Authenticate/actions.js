/*
 *
 * Authenticate actions
 *
 */

import { DEFAULT_ACTION, AUTHENTICATE, USER_LOADING } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
/**
 * @description Action to be set user loading while authentication
 */
export function setUserLoading() {
  return {
    type: USER_LOADING,
  };
}
/**
 * @description Action to be dispatched for login authentication
 */
export function getUserLogin(
  username,
  password,
  setSubmitError,
  setLoadingStatus,
) {
  return {
    type: `${AUTHENTICATE}_LOGIN`,
    username,
    password,
    setSubmitError,
    setLoadingStatus,
  };
}
/**
 * @description Action to be dispatched for logout authentication
 */
export function getUserLogout(addToast) {
  return {
    type: `${AUTHENTICATE}_LOGOUT`,
    addToast,
  };
}
/**
 * @description Action to be dispatched for signup authentication
 */
export function getUserSignup(
  registeredEmail,
  username,
  firstName,
  lastName,
  password,
  setSubmitError,
  setSignupStatus,
  setLoadingStatus,
) {
  return {
    type: `${AUTHENTICATE}_SIGNUP`,
    registeredEmail,
    username,
    firstName,
    lastName,
    password,
    setSubmitError,
    setSignupStatus,
    setLoadingStatus,
  };
}
/**
 * @description Action to be dispatched for forgot password authentication
 */
export function getUserForgotPassword(
  username,
  setSubmitError,
  setForgotStatus,
  setLoadingStatus,
) {
  return {
    type: `${AUTHENTICATE}_FORGOT_PASSWORD`,
    username,
    setSubmitError,
    setForgotStatus,
    setLoadingStatus,
  };
}
/**
 * @description Action to be dispatched for reset password
 */
export function getUserForgotPasswordReset(
  newPassword,
  token,
  setSubmitError,
  setForgotStatus,
  setLoadingStatus,
) {
  return {
    type: `${AUTHENTICATE}_FORGOT_PASSWORD_RESET`,
    newPassword,
    token,
    setSubmitError,
    setForgotStatus,
    setLoadingStatus,
  };
}
