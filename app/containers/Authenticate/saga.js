import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import apiClient from '../../utils/app/API';
// import { useHistory } from "react-router-dom";
// import { browserHistory } from 'react-router';
import history from '../App/history';
import { AUTHENTICATE } from './constants';

export default function* authenticateSaga() {
  yield all([
    // takeLatest(GET_AUTHENTICATION, isAuthentication),
    // takeLatest(`${AUTHENTICATE}_SET`, getThemeDetails),
    // takeLatest(`${AUTHENTICATE}_UNSET`, getThemeDetails),
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

function login(username, password) {
  return apiClient
    .post('login', {
      username,
      password,
    })
    .then(response => {
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('login error: ', error);
    });
}

function logout() {
  return apiClient
    .post('logout', {}, { withCredentials: true })
    .then(response => {
      console.log('logout response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('logout error: ');
      console.log(error);
    });
}

function signup(registeredEmail, username, firstName, lastName, password) {
  return apiClient
    .post('signup', {
      registeredEmail,
      username,
      firstName,
      lastName,
      password,
    })
    .then(response => {
      console.log('register response: ', response);
      return response;
    })
    .catch(error => {
      console.log('register error: ', error.response);
    });
}

function forgotPassword(username) {
  return apiClient
    .post('forgotPassword', {
      username,
    })
    .then(response => {
      console.log('forgotPassword response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('forgotPassword error: ', error);
    });
}

function forgotPasswordReset(newPassword, token) {
  return apiClient
    .post('resetPassword', {
      newPassword,
      token,
    })
    .then(response => {
      console.log('reset response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('reset error: ', error);
    });
}

function* userLogin(params) {
  try {
    const response = yield call(login, params.username, params.password);
    if (response.status === 200) {
      yield put({
        type: `${AUTHENTICATE}_SET_CURRENT_USER`,
        isAuthenticated: true,
        userData: response.data.data.user,
      });
      const isAuthenticated = yield select(state => state.authenticate);
      console.log(isAuthenticated);
      history.push('/features');
    } else {
      params.setSubmitError(response);
    }
  } catch (e) {
    console.log('catch err login', e);
  }
}

function* userLogout() {
  try {
    const response = yield call(logout);
    if (response.status === 200) {
      yield put({
        type: `${AUTHENTICATE}_SET_CURRENT_USER`,
        isAuthenticated: false,
        userData: {},
      });
      const isAuthenticated = yield select(state => state.authenticate);
      console.log(isAuthenticated);
      history.push('/login');
    }
  } catch (e) {
    console.log('catch err logout', e);
  }
}

function* userSignup(params) {
  console.log('register: ');
  try {
    const response = yield call(
      signup,
      params.registeredEmail,
      params.username,
      params.firstName,
      params.lastName,
      params.password,
    );
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
  } catch (e) {
    params.setLoadingStatus(false);
    params.setSubmitError({
      status: 'Something went wrong while submitting!',
    });
    console.log('userSignup error: ', error);
  }
}

function* userForgotPassword(params) {
  try {
    const response = yield call(forgotPassword, params.username);
    if (response.status === 200) {
      console.log('A link is sent to your mail ID');
    }
  } catch (e) {
    console.log('catch err userForgotPassword', e);
  }
}
function* userForgotPasswordReset(params) {
  try {
    const response = yield call(
      forgotPasswordReset,
      params.username,
      params.token,
    );
    if (response.status === 200) {
      console.log('reset password successfully');
      history.push('/login');
    }
  } catch (e) {
    console.log('catch err userForgotPasswordReset', e);
  }
}

export function* updateResumeEventHandler(params) {
  try {
    const storeData = yield select(state => state.builder.resume_json_state);
    if (params.sectionId === 'personal') {
      if (
        storeData &&
        storeData[`${params.sectionId}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldId}`]
      ) {
        storeData[`${params.sectionId}`].history[`${params.fieldId}`] =
          params.content;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (
        storeData &&
        storeData[`${params.sectionId}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldIndex}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldIndex}`][
          `${params.fieldId}`
        ]
      ) {
        storeData[`${params.sectionId}`].history[`${params.fieldIndex}`][
          `${params.fieldId}`
        ] = params.content;
      }
    }
  } catch (error) {
    console.log('error from updateResumeEventHandler saga: ', error);
  }
}
