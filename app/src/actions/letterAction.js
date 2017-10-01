import axios from 'axios';
import querystring from 'querystring';
import {
	LOGIN_SERVER
} from './apihost.js'

export function getMinimalLetter() {
  const url = LOGIN_SERVER + '/letter_minimal';
  let accessToken = localStorage.getItem('access_token');
	return function(dispatch) {
		dispatch({
			type: 'GET_LETTER_MINIMAL_REQUEST'
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
				type: 'GET_LETTER_MINIMAL_RECIEVED',
				payload: response.data.letter
			});
			//console.log(response.data.message);
		}).catch(function(error) {
			dispatch({
				type: 'GET_LETTER_MINIMAL_ERROR',
				payload: error.response.data
			});
			//console.log(error.response.data);
		});
	};
}

export function getMinimalLetterOne(id) {
  const url = LOGIN_SERVER + '/letter_minimal/' + id;
  let accessToken = localStorage.getItem('access_token');
	return function(dispatch) {
		dispatch({
			type: 'GET_LETTER_ONE_REQUEST'
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
				type: 'GET_LETTER_ONE_RECIEVED',
				payload: response.data
			});
			//console.log(response.data.message);
		}).catch(function(error) {
			dispatch({
				type: 'GET_LETTER_ONE_ERROR',
				payload: error.response.data
			});
			//console.log(error.response.data);
		});
	};
}
