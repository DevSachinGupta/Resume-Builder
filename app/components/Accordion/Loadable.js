/**
 *
 * Asynchronously loads the component for Accordian
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
