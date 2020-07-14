import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import apiClient from '../../utils/app/API';
import history from '../App/history';
import { AUTHENTICATE } from './constants';

export default function* authenticateSaga() {
  yield all([
    takeLatest(`${AUTHENTICATE}_LOGIN`, userLogin),
    takeLatest(`${AUTHENTICATE}_LOGOUT`, userLogout),
    takeLatest(`${AUTHENTICATE}_SIGNUP`, userSignup),
    takeLatest(`${AUTHENTICATE}_FORGOT_PASSWORD`, userForgotPassword),
    takeLatest(
      `${AUTHENTICATE}_FORGOT_PASSWORD_RESET`,
      userForgotPasswordReset,
    ),
  ]);
}

export function* isAuthentication() {
  try {
    const isAuthenticated = yield select(
      state => state.authenticate.isAuthenticated,
    );
    return isAuthenticated;
  } catch (e) {
    console.log('isAuthentication', e);
  }
}

function* userLogin(params) {
  try {
    const response = yield call(apiClient.post, 'login', {
      username: params.username,
      password: params.password,
    });
    if (response.status === 200) {
      yield put({
        type: `${AUTHENTICATE}_SET_CURRENT_USER`,
        isAuthenticated: true,
        userData: response.data.data.user,
      });
      // const isAuthenticated = yield select(state => state.authenticate);
      // console.log(isAuthenticated);
      params.setLoadingStatus(false);
      history.push('/dashboard');
    } else if (response.status === 204) {
      params.setSubmitError({
        status: 'A user is already exits with username $',
      });
    } else {
      params.setSubmitError({
        status: 'Something went wrong while submitting!',
      });
    }
    params.setLoadingStatus(false);
    console.log('Something went wrong while re: ', response);
  } catch (e) {
    params.setLoadingStatus(false);
    params.setSubmitError({
      status: 'Something went wrong while submitting!',
    });
    console.log('catch err login', e);
  }
}

function* userLogout(params) {
  console.log("called userlogout");
  try {
    const response = yield call(apiClient.post, 'logout', {});
    if (response.status === 200) {
      history.push('/login');
      params.addToast('Successfully Logout!', { appearance: 'info' });
      yield put({
        type: `${AUTHENTICATE}_UNSET`,
      });
    }
  } catch (e) {
    console.log('catch err logout', e);
  }
}

function* userSignup(params) {
  console.log('register: ');
  try {
    const response = yield call(apiClient.post, 'signup', {
      registeredEmail: params.registeredEmail,
      username: params.username,
      firstName: params.firstName,
      lastName: params.lastName,
      password: params.password,
    });
    if (response.status === 200) {
      params.setSignupStatus(true);
      params.setLoadingStatus(false);
      console.log('succesfully submit your request.');
    } else if (response.status === 204) {
      params.setSubmitError({
        status: 'A user is already exits with username $',
      });
    } else {
      params.setSubmitError({
        status: 'Something went wrong while submitting!',
      });
    }
    params.setLoadingStatus(false);
    console.log('Something went wrong while re: ', response);
  } catch (error) {
    params.setLoadingStatus(false);
    params.setSubmitError({
      status: 'Something went wrong while submitting!',
    });
    console.log('userSignup error: ', error);
  }
}

function* userForgotPassword(params) {
  try {
    const response = yield call(apiClient.post, 'forgotPassword', {
      username: params.username,
    });
    if (response.status === 200) {
      params.setForgotStatus(true);
      params.setLoadingStatus(false);
      console.log('succesfully submit your request.');
    } else if (response.status === 204) {
      params.setSubmitError({
        status: 'A user is already exits with username $',
      });
    } else {
      params.setSubmitError({
        status: 'Something went wrong while submitting!',
      });
    }
    params.setLoadingStatus(false);
    console.log('Something went wrong while re: ', response);
  } catch (e) {
    params.setLoadingStatus(false);
    params.setSubmitError({
      status: 'Something went wrong while submitting!',
    });
    console.log('catch err userForgotPassword', e);
  }
}

function* userForgotPasswordReset(params) {
  try {
    const response = yield call(apiClient.post, 'resetPassword', {
      newPassword: params.newPassword,
      token: params.token,
    });
    if (response.status === 200) {
      params.setForgotStatus(true);
      params.setLoadingStatus(false);
      console.log('reset password successfully');
      // history.push('/login');
    } else if (response.status === 204) {
      params.setSubmitError({
        status: 'A user is already exits with username $',
      });
    } else {
      params.setSubmitError({
        status: 'Something went wrong while submitting!',
      });
    }
    params.setLoadingStatus(false);
  } catch (e) {
    params.setLoadingStatus(false);
    params.setSubmitError({
      status: 'Something went wrong while submitting!',
    });
    console.log('catch err userForgotPasswordReset', e);
  }
}

// export function* updateResumeEventHandler(params) {
//   try {
//     const storeData = yield select(state => state.builder.resume_json_state);
//     if (params.sectionId === 'personal') {
//       if (
//         storeData &&
//         storeData[`${params.sectionId}`] &&
//         storeData[`${params.sectionId}`].history[`${params.fieldId}`]
//       ) {
//         storeData[`${params.sectionId}`].history[`${params.fieldId}`] =
//           params.content;
//       }
//     } else {
//       // eslint-disable-next-line no-lonely-if
//       if (
//         storeData &&
//         storeData[`${params.sectionId}`] &&
//         storeData[`${params.sectionId}`].history[`${params.fieldIndex}`] &&
//         storeData[`${params.sectionId}`].history[`${params.fieldIndex}`][
//           `${params.fieldId}`
//         ]
//       ) {
//         storeData[`${params.sectionId}`].history[`${params.fieldIndex}`][
//           `${params.fieldId}`
//         ] = params.content;
//       }
//     }
//   } catch (error) {
//     console.log('error from updateResumeEventHandler saga: ', error);
//   }
// }
