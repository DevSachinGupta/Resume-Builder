/**
 *
 * Asynchronously loads the component for Builder
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
