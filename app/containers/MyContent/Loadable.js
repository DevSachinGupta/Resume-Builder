/**
 *
 * Asynchronously loads the component for MyContent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
