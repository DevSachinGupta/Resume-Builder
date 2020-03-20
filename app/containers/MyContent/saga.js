import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_COUNTRY_LIST } from './constants';
// Individual exports for testing
export default function* myContentSaga() {
  yield takeLatest(GET_COUNTRY_LIST, getCountryList);
}
function* getCountryList() {
  try {
    const response = yield call(
      axios.get,
      'https://resumebuilder.s3.ap-south-1.amazonaws.com/List/countryList.json',
    );
    yield put({ type: `${GET_COUNTRY_LIST}_SUCCESS`, data: response.data });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
