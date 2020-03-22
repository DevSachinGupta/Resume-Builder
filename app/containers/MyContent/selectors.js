import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myContent state domain
 */

const selectMyContentDomain = state => state.myContent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyContent
 */

const makeSelectMyContent = () =>
  createSelector(
    selectMyContentDomain,
    substate => substate,
  );
const makeSelectActiveModalType = () =>
  createSelector(
    selectMyContentDomain,
    substate => substate.activeModalType,
  );
const makeSelectAllCountiesOptions = () =>
  createSelector(
    selectMyContentDomain,
    substate => substate.allCountries,
  );
const makeSelectFilterStatesOptions = () =>
  createSelector(
    selectMyContentDomain,
    substate => substate.filterStates,
  );
export default makeSelectMyContent;
export {
  selectMyContentDomain,
  makeSelectActiveModalType,
  makeSelectAllCountiesOptions,
  makeSelectFilterStatesOptions,
};
