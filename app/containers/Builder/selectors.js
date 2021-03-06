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
const makeUpdateTemplateNumberState = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.template_number_state,
  );
export default makeSelectBuilder;
export {
  selectBuilderDomain,
  makeSelectIsSidebarOpen,
  makeSelectIsSecondarySidebarOpen,
  makeUpdateEditorState,
  makeUpdateResumeJSONState,
  makeUpdateDemoPageState,
  makeUpdateTemplateNumberState,
};
