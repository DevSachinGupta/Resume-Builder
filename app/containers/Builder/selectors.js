import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the builder state domain
 */

const selectBuilderDomain = state => state.builder || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Builder
 */

const makeSelectBuilder = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate,
  );
const makeSelectGetDefaultTheme = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.theme.isLoaded,
  );
const makeSelectGetThemeContent = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.theme.data,
  );
const makeSelectIsSidebarOpen = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.isSidebarOpen,
  );
const makeSelectIsSecondarySidebarOpen = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.isSecondarySidebarOpen,
  );
const makeUpdateEditorState = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.editor_state,
  );
const makeUpdateResumeJSONState = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.resume_json_state,
  );
const makeUpdateDemoPageState = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.demopage_state,
  );
const makeSelectSessionArray = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.sessionArray,
  );
const makeSelectEditorArray = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.editorArray,
  );
const makeUpdateTemplateNumberState = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.templateNumberState,
  );
const makeUpdateShowThemeToggle = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.showThemeToggle,
  );
export default makeSelectBuilder;
export {
  selectBuilderDomain,
  makeSelectGetDefaultTheme,
  makeSelectGetThemeContent,
  makeSelectIsSidebarOpen,
  makeSelectIsSecondarySidebarOpen,
  makeUpdateEditorState,
  makeUpdateResumeJSONState,
  makeUpdateDemoPageState,
  makeSelectSessionArray,
  makeSelectEditorArray,
  makeUpdateTemplateNumberState,
  makeUpdateShowThemeToggle,
};
