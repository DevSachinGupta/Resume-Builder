/**
 *
 * Asynchronously loads the component for Features
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
