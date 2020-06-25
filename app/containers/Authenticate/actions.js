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
 * @description Action to be set current user after authentication
 */
export function setCurrentUser(isAuthenticated, userData) {
  return {
    type: `${AUTHENTICATE}_SET_CURRENT_USER`,
    isAuthenticated,
    userData,
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
export function getUserLogin(username, password, setSubmitError) {
  return {
    type: `${AUTHENTICATE}_LOGIN`,
    username,
    password,
    setSubmitError,
  };
}
/**
 * @description Action to be dispatched for logout authentication
 */
export function getUserLogout() {
  return {
    type: `${AUTHENTICATE}_LOGOUT`,
  };
}
/**
 * @description Action to be dispatched for signup authentication
 */
export function getUserSignup(
  registeredEmail,
  username,
  password,
  setSubmitError,
) {
  return {
    type: `${AUTHENTICATE}_SIGNUP`,
    registeredEmail,
    username,
    password,
    setSubmitError,
  };
}
/**
 * @description Action to be dispatched for forgot password authentication
 */
export function getUserForgotPassword(username) {
  return {
    type: `${AUTHENTICATE}_FORGOT_PASSWORD`,
    username,
  };
}
/**
 * @description Action to be dispatched for reset password
 */
export function getUserForgotPasswordReset(newPassword, token) {
  return {
    type: `${AUTHENTICATE}_FORGOT_PASSWORD_RESET`,
    newPassword,
    token,
  };
}
