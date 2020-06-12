import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
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
    takeLatest(`${AUTHENTICATE}_FORGOT_PASSWORD_RESET`, userForgotPasswordReset),
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
    const res = yield call(
      axios
        .post(
          'http://localhost:2000/login',
          {
            username: params.username,
            password: params.password,
          },
          { withCredentials: true },
        )
        .then(response => {
          console.log('login response: ', response);
          if (response.status === 200) {
            console.log('response.ststus userLogin ', response.status);
            // update App.js state
            // this.props.updateUser({
            //   loggedIn: true,
            //   username: response.data.username,
            // });
            // update the state to redirect to home
            // this.setState({
            //   redirectTo: '/',
            // });
          }
        })
        .catch(error => {
          console.log('login error: ', error);
        }),
    );
    // yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: res.data });
    console.log('res from login', res);
  } catch (e) {
    console.log('catch err login', e);
  }
}

function* userLogout(params) {
  try {
    const res = yield call(
      axios
        .post('http://localhost:2000/logout', {}, { withCredentials: true })
        .then(response => {
          console.log('logout response: ');
          console.log(response);
          if (response.status === 200) {
            console.log('response.ststus logout ', response.status);
            // update App.js state
            // this.props.updateUser({
            //   loggedIn: true,
            //   username: response.data.username,
            // });
            // update the state to redirect to home
            // this.setState({
            //   redirectTo: '/',
            // });
          }
        })
        .catch(error => {
          console.log('logout error: ');
          console.log(error);
        }),
    );
    // yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: res.data });
    console.log('res from logout', res);
  } catch (e) {
    console.log('catch err logout', e);
  }
}

function* userSignup(params) {
  console.log('register: ');
  try {
    const res = yield call(
      axios
        .post(
          'http://localhost:2000/signup',
          {
            registeredEmail: params.registeredEmail,
            username: params.username,
            password: params.password,
          },
          { withCredentials: true },
        )
        .then(response => {
          console.log('register response: ');
          console.log(response);
          if (response.status === 200) {
            console.log('response status', response.status);
            // update App.js state
            // this.props.updateUser({
            //   loggedIn: true,
            //   username: response.data.username,
            // });
            // update the state to redirect to home
            // this.setState({
            //   redirectTo: '/',
            // });
          }
        })
        .catch(error => {
          console.log('register error: ');
          console.log(error);
        }),
    );
    // yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: res.data });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

function* userForgotPassword(params) {
  try {
    const res = yield call(
      axios
        .post('http://localhost:2000/forgotPassword', {
          username: params.username,
        })
        .then(response => {
          console.log('register response: ');
          console.log(response);
          if (response.status === 200) {
            // update App.js state
            this.props.updateUser({
              loggedIn: true,
              username: response.data.username,
            });
            // update the state to redirect to home
            // this.setState({
            //   redirectTo: '/',
            // });
          }
        })
        .catch(error => {
          console.log('register error: ');
          console.log(error);
        }),
    );
    // yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: res.data });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
function* userForgotPasswordReset(params) {
  try {
    const res = yield call(
      axios
        .post('http://localhost:2000/resetPassword', {
          newPassword: params.newPassword,
          token: params.token,
        })
        .then(response => {
          console.log('reset response: ');
          console.log(response);
          if (response.status === 200) {
            // update App.js state
            this.props.updateUser({
              loggedIn: true,
              username: response.data.username,
            });
            // update the state to redirect to home
            // this.setState({
            //   redirectTo: '/',
            // });
          }
        })
        .catch(error => {
          console.log('reset error: ');
          console.log(error);
        }),
    );
    // yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: res.data });
    console.log(res);
  } catch (e) {
    console.log(e);
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
