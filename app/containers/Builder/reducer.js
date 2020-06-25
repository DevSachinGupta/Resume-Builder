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
  GET_THEME_CONTENT,
  SET_DEFAULT_THEME,
  UPDATE_EDITOR_STATE,
  UPDATE_RESUMEJSON_STATE,
  UPDATE_DEMOPAGE_STATE,
  UPDATE_TEMPLATE_NUMBER_STATE,
  UPDATE_CANVAS,
  UPDATE_RESUME_EVENT_HANDLER,
  SHOW_THEMES_TOGGLE,
} from './constants';

export const initialState = {
  isSidebarOpen: true,
  isSecondarySidebarOpen: false,
  theme: {
    data: '',
    isLoaded: false,
  },
  editor_state: null,
  resume_json_state: {},
  demopage_state: null,
  template_number_state: 2,
  showThemeToggle: false,
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
      case `${GET_THEME_CONTENT}_SUCCESS`:
        draft.theme.data = action.data;
        break;
      case `${GET_THEME_CONTENT}_TEST`:
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
      case UPDATE_EDITOR_STATE:
        draft.editor_state = action.editor_state;
        break;
      case UPDATE_RESUMEJSON_STATE:
        draft.resume_json_state = {
          ...state.resume_json_state,
          [action.section_key_state]: action.resume_json_state,
        };
        break;
      case UPDATE_DEMOPAGE_STATE:
        draft.demopage_state = action.demopage_state;
        break;
      case UPDATE_TEMPLATE_NUMBER_STATE:
        console.log("update temp number:", action.template_number_state)
        draft.template_number_state = action.template_number_state;
        break;
      case UPDATE_CANVAS:
        break;
      case UPDATE_RESUME_EVENT_HANDLER:
        break;
      case SHOW_THEMES_TOGGLE:
        draft.showThemeToggle = !state.showThemeToggle;
        break;
      default:
        break;
    }
  });

export default builderReducer;
