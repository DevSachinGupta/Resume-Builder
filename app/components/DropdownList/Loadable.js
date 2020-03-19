/**
 *
 * Asynchronously loads the component for DropdownList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
