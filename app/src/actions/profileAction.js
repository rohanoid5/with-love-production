import axios from 'axios';
import { LOGIN_SERVER } from './apihost.js';
import { hashHistory  } from 'react-router';

export function getUser() {
	let accessToken = localStorage.getItem('access_token');
	var profileUrl = LOGIN_SERVER + '/profile';
	return function(dispatch) {
		dispatch({
			type: 'GET_PROFILE_REQUEST'
		});
		return axios({
			url: profileUrl,
			headers: {
				'Authorization': accessToken,
				'Content-Type': 'application/json'
			},
			method: 'get'
		}).then(function(response) {
			dispatch({
				type: 'GET_PROFILE_RECIEVED',
				payload: response.data.user
			});
			//console.log(response.data);
		}).catch(function(error) {
			dispatch({
				type: 'GET_PROFILE_ERROR',
				payload: "Error"
			});
			localStorage.removeItem('access_token');
			hashHistory.replace('/login');
		});
	};
}
