/*
 *
 * Builder reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  HANDLE_SIDEBAR_STATE,
  HANDLE_SECONDARY_SIDEBAR_STATE,
  GET_DEFAULT_THEME,
  SET_DEFAULT_THEME,
} from './constants';

export const initialState = {
  isSidebarOpen: true,
  isSecondarySidebarOpen: false,
  theme: {
    data: null,
    isLoaded: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const builderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_DEFAULT_THEME:
        draft.theme.isLoaded = false;
        break;
      case SET_DEFAULT_THEME:
        draft.theme.isLoaded = true;
        break;
      case HANDLE_SIDEBAR_STATE:
        draft.isSidebarOpen = !state.isSidebarOpen;
        break;
      case HANDLE_SECONDARY_SIDEBAR_STATE:
        draft.isSecondarySidebarOpen = !state.isSecondarySidebarOpen;
        break;
      default:
        break;
    }
  });

export default builderReducer;
