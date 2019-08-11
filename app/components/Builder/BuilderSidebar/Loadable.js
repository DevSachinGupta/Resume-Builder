/**
 *
 * Asynchronously loads the component for BuilderSidebar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
