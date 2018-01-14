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

export function getAdminLetterPaid() {
  const url = LOGIN_SERVER + '/admin/paid_letters';
  let accessToken = localStorage.getItem('access_token');
	return function(dispatch) {
		dispatch({
			type: 'GET_ADMIN_LETTER_PAID_REQUEST'
		});
		return axios({
			url: url,
			headers: {
				'Authorization': accessToken,
				'Content-Type': 'application/json'
			},
			method: 'get'
		}).then(function(response) {
			dispatch({
				type: 'GET_ADMIN_LETTER_PAID_RECIEVED',
				payload: response.data.letter
			});
			// console.log(response.data.letter);
		}).catch(function(error) {
			dispatch({
				type: 'GET_ADMIN_LETTER_PAID_ERROR',
				payload: error.response.data
			});
			//console.log(error.response.data);
		});
	};
}

export function getAdminLetterUnpaid() {
  const url = LOGIN_SERVER + '/admin/unpaid_letters';
  let accessToken = localStorage.getItem('access_token');
	return function(dispatch) {
		dispatch({
			type: 'GET_ADMIN_LETTER_UNPAID_REQUEST'
		});
		return axios({
			url: url,
			headers: {
				'Authorization': accessToken,
				'Content-Type': 'application/json'
			},
			method: 'get'
		}).then(function(response) {
			dispatch({
				type: 'GET_ADMIN_LETTER_UNPAID_RECIEVED',
				payload: response.data.letter
			});
		}).catch(function(error) {
			dispatch({
				type: 'GET_ADMIN_LETTER_UNPAID_ERROR',
				payload: error.response.data
			});
			//console.log(error.response.data);
		});
	};
}

export function getAdminLetterDispatched() {
  const url = LOGIN_SERVER + '/admin/dispatched_letters';
  let accessToken = localStorage.getItem('access_token');
	return function(dispatch) {
		dispatch({
			type: 'GET_ADMIN_LETTER_DISPATCHED_REQUEST'
		});
		return axios({
			url: url,
			headers: {
				'Authorization': accessToken,
				'Content-Type': 'application/json'
			},
			method: 'get'
		}).then(function(response) {
			dispatch({
				type: 'GET_ADMIN_LETTER_DISPATCHED_RECIEVED',
				payload: response.data.letter
			});
			// console.log(response);
		}).catch(function(error) {
			dispatch({
				type: 'GET_ADMIN_LETTER_DISPATCHED_ERROR',
				payload: error.response.data
			});
			//console.log(error.response.data);
		});
	};
}
