/*
 *
 * Builder actions
 *
 */

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
 * @description function to update editor state
 */
export function updateEditorState(editorState) {
  return {
    type: UPDATE_EDITOR_STATE,
    editorState,
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
 * @description function to update canvas on first load
 */
export function updateCanvasOnFirstLoad(projectId) {
  return {
    type: `${UPDATE_CANVAS}_ON_FIRST_LOAD`,
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
  projectId,
) {
  return {
    type: UPDATE_RESUME_EVENT_HANDLER,
    sectionId,
    fieldId,
    fieldIndex,
    content,
    addToast,
    projectId,
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
/**
 * @description function to update resume key value in DB
 */
export function handleMyProjectClick(projectId) {
  return {
    type: HANDLE_PROJECT_CLICK,
    projectId,
  };
}
/**
 * @description function to update projectId
 */
export function updateProjectId(projectId) {
  return {
    type: UPDATE_PROJECT_ID,
    projectId,
  };
}
/**
 * @description function to handle switch template
 */
export function handleSwitchTemplate(data) {
  return {
    type: `${UPDATE_CANVAS}_SWITCH_TEMPLATE`,
    data,
  };
}
