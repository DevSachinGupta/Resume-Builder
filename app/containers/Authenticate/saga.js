import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
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
  return axios
    .post(
      'http://localhost:2000/login',
      {
        username,
        password,
      },
      { withCredentials: true },
    )
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
  return axios
    .post('http://localhost:2000/logout', {}, { withCredentials: true })
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

function signup(registeredEmail, username, password) {
  return axios
    .post(
      'http://localhost:2000/signup',
      {
        registeredEmail,
        username,
        password,
      },
      { withCredentials: true },
    )
    .then(response => {
      console.log('register response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('register error: ', error.response);
    });
}

function forgotPassword(username) {
  return axios
    .post('http://localhost:2000/forgotPassword', {
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
  return axios
    .post('http://localhost:2000/resetPassword', {
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
      params.password,
    );
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
    console.log(e);
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
