import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_DEFAULT_THEME, GET_THEME_CONTENT } from './constants';
// Individual exports for testing
export default function* builderSaga() {
  yield takeLatest(GET_DEFAULT_THEME, getThemeDetails);
  yield takeLatest(GET_THEME_CONTENT, getThemeContent);
}
function* getThemeDetails() {
  console.log('HELLO WORLD');
}

function* getThemeContent(params) {
  try {
    const response = yield call(
      axios.get,
      `https://resumebuilder.s3.ap-south-1.amazonaws.com/templates/template_1/index-${params.themeId}.html`,
    );
    yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: response.data });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}