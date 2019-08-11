/**
 *
 * Asynchronously loads the component for BuilderEditor
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
