import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_COUNTRY_LIST, GET_STATE_LIST } from './constants';
// Individual exports for testing
export default function* myContentSaga() {
  yield takeLatest(GET_COUNTRY_LIST, getCountryList);
  yield takeLatest(GET_STATE_LIST, getStateList);
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

function* getStateList(params) {
  try {
    console.log('country id: ', params.countryID);
    const response = yield call(
      axios.get,
      `https://resumebuilder.s3.ap-south-1.amazonaws.com/List/sub_state_name/stateList-${
        params.countryID
      }.json`,
    );
    yield put({ type: `${GET_STATE_LIST}_SUCCESS`, data: response.data });
    console.log(response);
    if (response.status !== 200) {
      yield put({ type: `${GET_STATE_LIST}_SUCCESS`, data: [] });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: `${GET_STATE_LIST}_SUCCESS`, data: [] });
  }
}
