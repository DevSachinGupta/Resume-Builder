/*
 *
 * Builder reducer
 *
 */
import produce from 'immer';
import { loadState, saveState } from 'utils/app/persistedStore';
import {
  DEFAULT_ACTION,
  HANDLE_SIDEBAR_STATE,
  HANDLE_SECONDARY_SIDEBAR_STATE,
  UPDATE_EDITOR_STATE,
  UPDATE_CANVAS,
  UPDATE_RESUME_EVENT_HANDLER,
  SHOW_THEMES_TOGGLE,
  UPDATE_RESUME_KEY_VALUE_DB,
  UPDATE_SESSION_ARRAY,
  HANDLE_PROJECT_CLICK,
  UPDATE_PROJECT_ID,
} from './constants';

const persistedKeys = ['sessionArray'];
export const persistedState = loadState(persistedKeys);

export const initialState = {
  isSidebarOpen: true,
  isSecondarySidebarOpen: false,
  editorState: null,
  projectId: null,
  sessionArray: {},
  updateCanvasCount: 0,
  showThemeToggle: false,
  ...persistedState,
};

const canvasUpdateLimit = 2;

/* eslint-disable default-case, no-param-reassign */
const builderReducer = (state = initialState, action) => {
  // For localStorage
  switch (action.type) {
    case `${UPDATE_SESSION_ARRAY}_INSERT`:
      saveState('sessionArray', {
        ...state.sessionArray,
        [action.projectId]: {
          ...state.sessionArray[action.projectId],
          ...action.projectSession,
        },
      });
      console.log(
        'insert sessionArray: ',
        action.projectId,
        state.sessionArray[action.projectId],
      );
      break;
    case `${UPDATE_SESSION_ARRAY}_DELETE`:
      const sessionArrayUpdate = delete state.sessionArray[action.projectId];
      console.log('delete sessionArrayUpdate: ', state.sessionArray);
      saveState('sessionArray', state.sessionArray);
      break;
    default:
      break;
  }

  return produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HANDLE_SIDEBAR_STATE:
        draft.isSidebarOpen = !state.isSidebarOpen;
        break;
      case HANDLE_SECONDARY_SIDEBAR_STATE:
        draft.isSecondarySidebarOpen = !state.isSecondarySidebarOpen;
        break;
      case UPDATE_EDITOR_STATE:
        draft.editorState = action.editorState;
        break;
      case UPDATE_PROJECT_ID:
        draft.projectId = action.projectId;
        break;
      case `${UPDATE_SESSION_ARRAY}_INSERT`:
        draft.sessionArray = {
          ...state.sessionArray,
          [action.projectId]: {
            ...state.sessionArray[action.projectId],
            ...action.projectSession,
          },
        };
        break;
      case `${UPDATE_SESSION_ARRAY}_DELETE`:
        delete draft.sessionArray[action.projectId];
        break;
      case UPDATE_CANVAS:
        break;
      case `${UPDATE_CANVAS}_SWITCH_TEMPLATE`:
        break;
      case `${UPDATE_CANVAS}_COUNT`:
        if (draft.updateCanvasCount === canvasUpdateLimit) {
          draft.updateCanvasCount = 0;
        } else {
          draft.updateCanvasCount += 1;
        }
        break;
      case UPDATE_RESUME_EVENT_HANDLER:
        break;
      case UPDATE_RESUME_KEY_VALUE_DB:
        break;
      case HANDLE_PROJECT_CLICK:
        break;
      case SHOW_THEMES_TOGGLE:
        draft.showThemeToggle = !state.showThemeToggle;
        break;
      default:
        break;
    }
  });
};
export default builderReducer;
