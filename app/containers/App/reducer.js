/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { loadState, saveState, clearState } from 'utils/app/persistedStore';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  TOGGLE_MODAL,
  UPDATE_PUBLISH_TYPE,
  TOGGLE_HEADER_USER_PILL,
  UPDATE_IN_USERDATA,
  AUTHENTICATE_USER,
} from './constants';

const persistedKeys = ['publishType', 'isAuthenticated', 'userData'];
export const persistedState = loadState(persistedKeys);

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  modalState: {
    isOpen: false,
  },
  headerState: {
    isUserPillOpen: false,
  },
  publishType: '',
  isAuthenticated: false,
  userData: {},
  ...persistedState,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) => {
  // For localStorage
  switch (action.type) {
    case UPDATE_PUBLISH_TYPE:
      saveState('publishType', action.publishType);
      break;
    case `${AUTHENTICATE_USER}_SET`:
      saveState('isAuthenticated', action.isAuthenticated);
      saveState('userData', action.userData);
      break;
    case `${AUTHENTICATE_USER}_UNSET`:
      clearState();
      break;
    case `${UPDATE_IN_USERDATA}_PROJECTS`:
      const userDataUpdateProjects = state.userData;
      userDataUpdateProjects.siteProjects = action.siteProjects;
      console.log('update projects storage:', userDataUpdateProjects);
      saveState('userData', userDataUpdateProjects);
      break;
    case `${UPDATE_IN_USERDATA}_RESUME_JSON`:
      const userDataUpdateResume = state.userData;
      userDataUpdateResume.resumeDataStore = {
        ...userDataUpdateResume.resumeDataStore,
        [action.sectionKey]: action.resumeJsonState,
      };
      saveState('userData', userDataUpdateResume);
      break;
    case `${UPDATE_IN_USERDATA}_RESUME_JSON_ALL`:
      const userDataUpdateResumeAll = state.userData;
      userDataUpdateResumeAll.resumeDataStore = action.resumeDataStoreAll;
      console.log('update resume all storage:', userDataUpdateResumeAll);
      saveState('userData', userDataUpdateResumeAll);
      break;
    case `${UPDATE_IN_USERDATA}_NOTIFICATIONS`:
      const userDataUpdateNotifications = state.userData;
      userDataUpdateNotifications.settings.notifications = action.notifications;
      console.log('update notification storage:', userDataUpdateNotifications);
      saveState('userData', userDataUpdateNotifications);
      break;
    case `${UPDATE_IN_USERDATA}_PROFILE`:
      const userDataUpdateProfile = state.userData;
      userDataUpdateProfile.firstName = action.firstName;
      userDataUpdateProfile.lastName = action.lastName;
      userDataUpdateProfile.settings.profileImageUrl = action.profileImageUrl;
      console.log('update profile storage:', userDataUpdateProfile);
      saveState('userData', userDataUpdateProfile);
      break;
    case `${UPDATE_IN_USERDATA}_SEO`:
      const userDataUpdateSEO = state.userData;
      userDataUpdateSEO.settings.SEO.title = action.title;
      userDataUpdateSEO.settings.SEO.profession = action.profession;
      userDataUpdateSEO.settings.SEO.description = action.description;
      console.log('update profile storage:', userDataUpdateSEO);
      saveState('userData', userDataUpdateSEO);
      break;
    default:
      break;
  }

  return produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;
      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;
      case TOGGLE_MODAL:
        draft.modalState.isOpen = !state.modalState.isOpen;
        break;
      case UPDATE_PUBLISH_TYPE:
        draft.publishType = action.publishType;
        break;
      case TOGGLE_HEADER_USER_PILL:
        draft.headerState.isUserPillOpen = !state.headerState.isUserPillOpen;
        break;
      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case `${AUTHENTICATE_USER}_SET`:
        draft.isAuthenticated = action.isAuthenticated;
        draft.userData = action.userData;
        break;
      case `${AUTHENTICATE_USER}_UNSET`:
        draft.userData = {};
        draft.isAuthenticated = false;
        break;
      case `${UPDATE_IN_USERDATA}_PROJECTS`:
        draft.userData.siteProjects = action.siteProjects;
        break;
      case `${UPDATE_IN_USERDATA}_RESUME_JSON`:
        draft.userData.resumeDataStore = {
          ...state.userData.resumeDataStore,
          [action.sectionKey]: action.resumeJsonState,
        };
        break;
      case `${UPDATE_IN_USERDATA}_RESUME_JSON_ALL`:
        draft.userData.resumeDataStore = action.resumeDataStoreAll;
        break;
      case `${UPDATE_IN_USERDATA}_NOTIFICATIONS`:
        draft.userData.settings.notifications = action.notifications;
        break;
      case `${UPDATE_IN_USERDATA}_PROFILE`:
        draft.userData.firstName = action.firstName;
        draft.userData.lastName = action.lastName;
        draft.userData.settings.profileImageUrl = action.profileImageUrl;
        break;
      case `${UPDATE_IN_USERDATA}_SEO`:
        const { title, profession, description } = { ...action };
        draft.userData.settings.SEO = { title, profession, description };
        break;
    }
  });
};
export default appReducer;
