/**
 *
 * Asynchronously loads the component for ToastNotification
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
