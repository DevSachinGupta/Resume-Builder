/**
 *
 * Asynchronously loads the component for Documentation
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
