/* eslint-disable no-unused-vars */

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from '../constants/User';
import { ROUTING } from '../constants/Routing';
import { checkHttpStatus, parseJSON } from '../utils';

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token
    }
  };
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  };
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAIL,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}


export function login(payload) {
  return (dispatch) => {
    dispatch(loginUserRequest());

    /* return fetch('http://ec2-52-50-8-3.eu-west-1.compute.amazonaws.com/api/v1/authentication/new?phone=79856868061', {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      try {
        const decoded = jwtDecode(response.token);
        dispatch(loginUserSuccess(response.token));
        dispatch(pushState(null, redirect));
      } catch (e) {
        dispatch(loginUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid token'
          }
        }));
      }
    })
    .catch(error => {
      dispatch(loginUserFailure(error));
    });*/

    setTimeout(() => {
      const response = {
        id: '3',
        name: 'Yury Gerasimenko',
        description: 'Кто-то сказал, что это не возможно',
        rating: '5.0',
        phone: '79856868061',
        user_count: '',
        category_id: '',
        is_verified: '0',
        logo_url: '/system/users/logos/000/000/003/thumb/-1708549436_avatar.jpg%29?1462743657',
        logo_medium_url:
          '/system/users/logos/000/000/003/medium/-1708549436_avatar.jpg%29?1462743657',
        logo_default_url:
          '/system/users/logos/000/000/003/original/-1708549436_avatar.jpg%29?1462743657',
        last_activity_at: 1462743680,
        avatar_status: 'active',
        avatar_type: 'user',
        user_name: 'YuryGerasimenko',
        banners: {
          iphone_url: '/images/missing.png',
          ipad_url: '/images/missing.png'
        }
      };

      dispatch(loginUserSuccess(response.id));

      dispatch({
        type: ROUTING,
        payload: {
          method: 'replace',
          nextUrl: '/'
        }
      });
    }, 2000);
  };
}

export function logout() {
  return {
    type: LOGOUT_USER_SUCCESS
  };
}

/* eslint-enable no-unused-vars */
