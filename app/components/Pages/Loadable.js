/**
 *
 * Asynchronously loads the component for Pages
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
