/*
 *
 * Authenticate actions
 *
 */

import {
  DEFAULT_ACTION,
  AUTHENTICATE,
  USER_LOADING,
  UPDATE_TEMPLATE_NUMBER_STATE,
  UPDATE_IN_USERDATA,
} from './constants';

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
/**
 * @description function to update template_number state
 */
export function updateTemplateNumberState(templateNumberState) {
  return {
    type: UPDATE_TEMPLATE_NUMBER_STATE,
    templateNumberState,
  };
}
/**
 * @description function to update project in userData state
 */
export function updateProjectsInUserData(siteProjects) {
  return {
    type: `${UPDATE_IN_USERDATA}_PROJECTS`,
    siteProjects,
  };
}
/**
 * @description function to update notifications in userData state
 */
export function updateNotificationInUserData(notifications) {
  return {
    type: `${UPDATE_IN_USERDATA}_NOTIFICATIONS`,
    notifications,
  };
}
/**
 * @description function to update profile in userData state
 */
export function updateProfileInUserData(firstName, lastName, profileImageUrl) {
  return {
    type: `${UPDATE_IN_USERDATA}_PROFILE`,
    firstName,
    lastName,
    profileImageUrl,
  };
}
/**
 * @description function to update SEO in userData state
 */
export function updatePublishSEOInUserData(title, profession, description) {
  return {
    type: `${UPDATE_IN_USERDATA}_SEO`,
    title,
    profession,
    description,
  };
}
