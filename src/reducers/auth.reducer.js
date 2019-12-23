import * as actions from '../constants/auth.constant';

const initState = {
  isAuthenticated: false,
  message: '',
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, message: action.payload };
    case actions.LOGIN_FAILED:
      return { ...state, isAuthenticated: false, message: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
