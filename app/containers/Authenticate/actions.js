/*
 *
 * Authenticate actions
 *
 */

import { DEFAULT_ACTION, AUTHENTICATE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
/**
 * @description Action to be dispatched for login authentication
 */
export function getUserLogin(username, password) {
  return {
    type: `${AUTHENTICATE}_LOGIN`,
    username,
    password,
  };
}
/**
 * @description Action to be dispatched for logout authentication
 */
export function getUserLogout(username) {
  return {
    type: `${AUTHENTICATE}_LOGOUT`,
    username,
  };
}
/**
 * @description Action to be dispatched for signup authentication
 */
export function getUserSignup(registeredEmail, username, password) {
  return {
    type: `${AUTHENTICATE}_SIGNUP`,
    registeredEmail,
    username,
    password,
  };
}
/**
 * @description Action to be dispatched for forgot password authentication
 */
export function getUserForgotPassword(username, password) {
  return {
    type: `${AUTHENTICATE}_FORGOT_PASSWORD`,
    username,
    password,
  };
}
