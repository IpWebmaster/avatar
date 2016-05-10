import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from '../constants/User';

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default function userstate(state = initialState, action) {
  switch (action.type) {

    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload.token,
        statusText: 'You have been successfully logged in.'
      };

    case LOGIN_USER_FAIL:
      return {
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
      };

    case LOGOUT_USER_SUCCESS:
      return {
        isAuthenticating: false,
        token: null,
        userName: null,
        statusText: 'You have been successfully logged out.'
      };

    default:
      return state;
  }
}
