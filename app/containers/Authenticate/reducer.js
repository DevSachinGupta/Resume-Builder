/*
 *
 * Authenticate reducer
 *
 */
import produce from 'immer';
import { loadState, saveState, clearState } from 'utils/app/persistedStore';
import {
  DEFAULT_ACTION,
  AUTHENTICATE,
  USER_LOADING,
  UPDATE_TEMPLATE_NUMBER_STATE,
  UPDATE_IN_USERDATA,
} from './constants';

const persistedKeys = ['isAuthenticated', 'userData'];
export const persistedState = loadState(persistedKeys);

export const initialState = {
  isAuthenticated: false,
  userData: {},
  loading: false,
  templateNumberState: null,
  ...persistedState,
};

const authenticateReducer = (state = initialState, action) => {
  // For localStorage
  switch (action.type) {
    case `${AUTHENTICATE}_SET_CURRENT_USER`:
      saveState('isAuthenticated', action.isAuthenticated);
      saveState('userData', action.userData);
      break;
    case `${AUTHENTICATE}_UNSET`:
      clearState();
      break;
    case `${UPDATE_IN_USERDATA}_PROJECTS`:
      let  userDataUpdateProjects = state.userData;
      userDataUpdateProjects.siteProjects = action.siteProjects;
      console.log('update projects storage:', userDataUpdateProjects);
      saveState('userData', userDataUpdateProjects);
      break;
    case `${UPDATE_IN_USERDATA}_NOTIFICATIONS`:
      let userDataUpdateNotifications = state.userData;
      userDataUpdateNotifications.settings.notifications = action.notifications;
      console.log('update notification storage:', userDataUpdateNotifications);
      saveState('userData', userDataUpdateNotifications);
      break;
    case `${UPDATE_IN_USERDATA}_PROFILE`:
      let userDataUpdateProfile = state.userData;
      userDataUpdateProfile.firstName = action.firstName;
      userDataUpdateProfile.lastName = action.lastName;
      userDataUpdateProfile.settings.profileImageUrl = action.profileImageUrl;
      console.log('update profile storage:', userDataUpdateProfile);
      saveState('userData', userDataUpdateProfile);
      break;
    case `${UPDATE_IN_USERDATA}_SEO`:
      let userDataUpdateSEO = state.userData;
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
      case DEFAULT_ACTION:
        break;
      case `${AUTHENTICATE}_SET_CURRENT_USER`:
        draft.isAuthenticated = action.isAuthenticated;
        draft.userData = action.userData;
        break;
      case USER_LOADING:
        draft.loading = true;
        break;
      case `${AUTHENTICATE}_UNSET`:
        draft.userData = {};
        draft.isAuthenticated = false;
        break;
      case UPDATE_TEMPLATE_NUMBER_STATE:
        draft.templateNumberState = action.templateNumberState;
        break;
      case `${UPDATE_IN_USERDATA}_PROJECTS`:
        draft.userData.siteProjects = action.siteProjects;
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
      case `${AUTHENTICATE}_LOGIN`:
        break;
      case `${AUTHENTICATE}_LOGOUT`:
        break;
      case `${AUTHENTICATE}_SIGNUP`:
        break;
      case `${AUTHENTICATE}_FORGOT_PASSWORD`:
        break;
      case `${AUTHENTICATE}_FORGOT_PASSWORD_RESET`:
        break;
      default:
        break;
    }
  });
};

export default authenticateReducer;
