/*
 *
 * Builder actions
 *
 */

import {
  DEFAULT_ACTION,
  HANDLE_SIDEBAR_STATE,
  HANDLE_SECONDARY_SIDEBAR_STATE,
  GET_DEFAULT_THEME,
  UPDATE_EDITOR_STATE,
  UPDATE_RESUMEJSON_STATE,
  UPDATE_CURRENT_EDITABLE_ITEM_ID_STATE,
  UPDATE_DEMOPAGE_STATE,
  UPDATE_TEMPLATE_NUMBER_STATE,

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
/**
 * @description function to handle Sidebar State
 */
export function toggleSidebar() {
  return {
    type: HANDLE_SIDEBAR_STATE,
  };
}
/**
 * @description function to handle Secondary Sidebar
 */
export function toggleSecondarySidebar() {
  return {
    type: HANDLE_SECONDARY_SIDEBAR_STATE,
  };
}
/**
 * @description function to be dispatched when new theme added
 */
export function getBuilderTheme(theme) {
  return {
    type: GET_DEFAULT_THEME,
    theme,
  };
}
 /** 
  * @description function to update editor state
 */
export function updateEditorState(editor_state) {
  return {
    type: UPDATE_EDITOR_STATE,
    editor_state,
  };
}
/**
 * @description function to update resume_json state
 */
export function updateResumeJSONState(resume_json_state , section_key_state) {
  return {
    type: UPDATE_RESUMEJSON_STATE,
    resume_json_state,
    section_key_state,
  };
}
/**
 * @description function to update current_editable_item_Id
 */
export function updateCurrentEditableItemId(currentEditableItemId_state) {
  return {
    type: UPDATE_CURRENT_EDITABLE_ITEM_ID_STATE,
    currentEditableItemId_state,
  };
}
/**
 * @description function to update demopage state
 */
export function updateDemoPageState(demopage_state) {
  return {
    type: UPDATE_DEMOPAGE_STATE,
    demopage_state,
  };
}
/**
 * @description function to update template_number state
 */
export function updateTemplateNumberState(template_number_state) {
  return {
    type: UPDATE_TEMPLATE_NUMBER_STATE,
    template_number_state,
  };
}
