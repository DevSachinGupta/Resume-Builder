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
export default makeSelectMyContent;
export { selectMyContentDomain, makeSelectActiveModalType };
