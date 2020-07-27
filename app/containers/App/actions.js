/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  TOGGLE_MODAL,
  UPDATE_PUBLISH_TYPE,
  TOGGLE_HEADER_USER_PILL,
  UPDATE_IN_USERDATA,
  AUTHENTICATE_USER,
  UPDATE_REDIRECTION_URL,
  UPDATE_PUBLISH_DETAILS,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
/**
 * Dispatched when Modal State is Toggled
 */
export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}
/**
 * Dispatches when Header user Menu is Toggled
 */
export function toggleHeaderUserMenu() {
  return {
    type: TOGGLE_HEADER_USER_PILL,
  };
}
/**
 * Dispatched when to update publish type
 */
export function updatePublishType(publishType) {
  return {
    type: UPDATE_PUBLISH_TYPE,
    publishType,
  };
}
/**
 * Dispatched when to update publish type
 */
export function updateRedirectionUrl(redirectionUrl) {
  return {
    type: UPDATE_REDIRECTION_URL,
    redirectionUrl,
  };
}
/**
 * @description function to set publish details
 */
export function setPublishDetails(data) {
  console.log("setPublishDetails action called: ", data)
  return {
    type: `${UPDATE_PUBLISH_DETAILS}_SET`,
    data,
  };
}
/**
 * @description function to unset publish details
 */
export function unsetPublishDetails() {
  return {
    type: `${UPDATE_PUBLISH_DETAILS}_UNSET`,
  };
}
/**
 * @description function to update settings details
 */
export function updateSettings(settings) {
  return {
    type: `${UPDATE_IN_USERDATA}_SETTINGS`,
    settings,
  };
}
/**
 * @description Action to be set current user after authentication
 */
export function setCurrentUser(isAuthenticated, userData) {
  return {
    type: `${AUTHENTICATE_USER}_SET`,
    isAuthenticated,
    userData,
  };
}
/**
 * @description function to update project in userData state
 */
export function updateProjectsInUserData(siteProjects) {
  console.log('project action trigger');
  return {
    type: `${UPDATE_IN_USERDATA}_PROJECTS`,
    siteProjects,
  };
}
/**
 * @description function to update resume JSON in userData state
 */
export function updateResumeJsonInUserData(sectionKey, resumeJsonState) {
  return {
    type: `${UPDATE_IN_USERDATA}_RESUME_JSON`,
    sectionKey,
    resumeJsonState,
  };
}
/**
 * @description function to update resume JSON Object in userData state
 */
export function updateResumeJsonAllInUserData(resumeDataStoreAll) {
  return {
    type: `${UPDATE_IN_USERDATA}_RESUME_JSON_ALL`,
    resumeDataStoreAll,
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

