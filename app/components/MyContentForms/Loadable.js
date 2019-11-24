/**
 *
 * Asynchronously loads the component for MyContentForms
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
