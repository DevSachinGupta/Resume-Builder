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
  UPDATE_EDITOR_STATE,
  UPDATE_RESUMEJSON_STATE,
  UPDATE_DEMOPAGE_STATE,
  UPDATE_TEMPLATE_NUMBER_STATE,
} from './constants';

export const initialState = {
  isSidebarOpen: true,
  isSecondarySidebarOpen: false,
  editor_state: null,
  resume_json_state: {},
  demopage_state: null,
  template_number_state: null,
};

/* eslint-disable default-case, no-param-reassign */
const builderReducer = (state = initialState, action) =>
  produce(state, draft => {
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
        draft.editor_state = action.editor_state;
        break;
      case UPDATE_RESUMEJSON_STATE:
        draft.resume_json_state = {...state.resume_json_state, [action.section_key_state]: action.resume_json_state }
        break;
      case UPDATE_DEMOPAGE_STATE:        
        draft.demopage_state = action.demopage_state;
        break;
      case UPDATE_TEMPLATE_NUMBER_STATE:
        draft.template_number_state = action.template_number_state;
        break;
      default:
        break;
    }
  });

export default builderReducer;
