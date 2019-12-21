import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_DEFAULT_THEME } from './constants';
// Individual exports for testing
export default function* builderSaga() {
  yield takeLatest(GET_DEFAULT_THEME, getThemeDetails);
}
function* getThemeDetails() {
  console.log('HELLO WORLD');
}
