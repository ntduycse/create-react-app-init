import * as actions from '../constants/auth.constant';
import * as services from '../services/auth.service';
import setAuth from '../setupAuth';

export function register(payload) {
  // eslint-disable-next-line consistent-return
  return async (dispatch) => {
    try {
      dispatch({ type: actions.REGISTER });
      const { data } = await services.register(payload);
      dispatch({
        type: actions.REGISTER_SUCCESS,
        payload: data.message,
      });
      return data;
    } catch (e) {
      console.log(e);
      dispatch({
        type: actions.REGISTER_FAILED,
      });
    }
  };
}

export function login(payload) {
  // eslint-disable-next-line func-names
  return async (dispatch) => {
    try {
      dispatch({ type: actions.LOGIN });
      const { data } = await services.login(payload);
      localStorage.setItem('token', data.message);
      setAuth(data.message);
      dispatch({
        type: actions.LOGIN_SUCCESS,
      });
      return data;
    } catch (e) {
      dispatch({ type: actions.LOGIN_FAILED });
      throw e;
    }
  };
}

export function verifyToken() {
  // eslint-disable-next-line func-names
  return async function (dispatch) {
    if (localStorage.getItem('token')) {
      setAuth(localStorage.getItem('token'));
      dispatch({ type: actions.LOGIN_SUCCESS });
    }
  };
}
