/**
 *
 * Asynchronously loads the component for StarRating
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
