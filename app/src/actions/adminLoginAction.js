import axios from 'axios';
import md5 from 'md5';
import querystring from 'querystring';

import {
  browserHistory
} from 'react-router'
import {
  hashHistory
} from 'react-router'

import {
  LOGIN_SERVER
} from './apihost.js'

export function loginUser(userDetail) {
  const url = LOGIN_SERVER + '/authenticate';
  let postBody = {

  };

  if (userDetail) {
    let data = {
      'email': userDetail.email,
      'password': userDetail.password
    }

    return function(dispatch) {
      dispatch({
        type: 'USER_LOGIN_REQUEST'
      });
      return axios.post(LOGIN_SERVER + '/authenticate', data, {
        headers: {
        	'Content-type': 'application/json'
        }
      }).then(function(response) {
        if(response.data.success) {
          if(true) {
            localStorage.setItem('access_token', response.data.token);
            dispatch({
              type: 'USER_LOGGED_IN',
              payload: response.data.token
            });
            hashHistory.replace('/admin-home');
          } else {
            dispatch({
              type: 'USER_LOGIN_INCOMPLETE',
              payload: response.data.user.active
            });
          }
          console.log(response.data.user.active);
        } else {
          hashHistory.replace('/admin-login');
        }
      }).catch(function(error) {
        dispatch({
          type: 'USER_LOGIN_ERROR',
          payload: error.response.data.message
        });
        console.log(error.response.data);
      });
    };
  }
}

export function signupUser(userDetail) {
  return function(dispatch) {
    if (userDetail) {
        let data = {
          'password': userDetail.password,
          'name': userDetail.name,
          'email': userDetail.email,
        };
        console.log(data);
        dispatch({
          type: 'USER_LOGIN_REQUEST'
        });
        axios.post(LOGIN_SERVER + '/admin/register', querystring.stringify(data), {
          headers: {
          	'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then(function(response) {
          dispatch({
            type: 'USER_SIGNED_UP',
            payload: response.data.access_token
          });
          console.log(response.data);

        }).catch(function(error) {
          dispatch({
            type: 'USER_SIGNUP_ERROR',
            payload: error.response.data.message
          });
          console.log(error.response.data.message);
        });
    }
  };
}

export function logoutUser() {
	localStorage.removeItem('access_token');
  return function(dispatch){
	  dispatch({
      type: 'USER_LOGOUT'
	  });
  };
}
