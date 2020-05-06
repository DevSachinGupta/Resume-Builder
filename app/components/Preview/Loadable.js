/**
 *
 * Asynchronously loads the component for Preview
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
