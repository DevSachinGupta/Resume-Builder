/**
 *
 * Asynchronously loads the component for Themes
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
