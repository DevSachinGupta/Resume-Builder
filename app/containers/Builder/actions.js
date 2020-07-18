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
  GET_THEME_CONTENT,
  UPDATE_EDITOR_STATE,
  UPDATE_RESUMEJSON_STATE,
  UPDATE_DEMOPAGE_STATE,
  UPDATE_TEMPLATE_NUMBER_STATE,
  UPDATE_CANVAS,
  UPDATE_RESUME_EVENT_HANDLER,
  SHOW_THEMES_TOGGLE,
  UPDATE_RESUME_KEY_VALUE_DB,
  UPDATE_SESSION_ARRAY,
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
 * @description function to handle Theme toggle State
 */
export function showThemeToggle() {
  return {
    type: SHOW_THEMES_TOGGLE,
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
 * @description function to be dispatched the fetched theme
 */
export function getBuilderThemeContent(themeId) {
  return {
    type: GET_THEME_CONTENT,
    themeId,
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
export function updateResumeJSONState(resume_json_state, section_key_state) {
  return {
    type: UPDATE_RESUMEJSON_STATE,
    resume_json_state,
    section_key_state,
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
 * @description function to update session array insert
 */
export function updateSessionArrayInsert(projectId, projectSession) {
  return {
    type: `${UPDATE_SESSION_ARRAY}_INSERT`,
    projectId,
    projectSession,
  };
}
/**
 * @description function to update session array delete
 */
export function updateSessionArrayDelete(projectId) {
  return {
    type: `${UPDATE_SESSION_ARRAY}_DELETE`,
    projectId,
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
 * @description function to update canvas
 */
export function updateEditorCanvas(
  sectionId,
  operation,
  payload,
  componentMap,
  projectId,
) {
  return {
    type: UPDATE_CANVAS,
    sectionId,
    operation,
    payload,
    componentMap,
    projectId,
  };
}
/**
 * @description function to increase canvas update count
 */
export function updateCanvasCount() {
  return {
    type: `${UPDATE_CANVAS}_COUNT`,
  };
}
/**
 * @description function to update resume event handler
 */
export function updateResumeEventHanlder(
  sectionId,
  fieldId,
  fieldIndex,
  content,
  addToast,
) {
  return {
    type: UPDATE_RESUME_EVENT_HANDLER,
    sectionId,
    fieldId,
    fieldIndex,
    content,
    addToast,
  };
}
/**
 * @description function to update resume key value in DB
 */
export function updateResumeKeyValue(key, data, addToast) {
  return {
    type: UPDATE_RESUME_KEY_VALUE_DB,
    key,
    data,
    addToast,
  };
}
