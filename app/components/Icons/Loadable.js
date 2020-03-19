/**
 *
 * Asynchronously loads the component for Icons
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
