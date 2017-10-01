import axios from 'axios';
import querystring from 'querystring';
import {
	LOGIN_SERVER
} from './apihost.js'

export function getReceiverData() {
  const url = LOGIN_SERVER + '/receiver';
  let accessToken = localStorage.getItem('access_token');
	return function(dispatch) {
		dispatch({
			type: 'GET_RECEIVER_REQUEST'
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
				type: 'GET_RECEIVER_RECIEVED',
				payload: response.data.receiver
			});
			//console.log(response.data.message);
		}).catch(function(error) {
			dispatch({
				type: 'GET_RECEIVER_ERROR',
				payload: error.response.data
			});
			//console.log(error.response.data);
		});
	};
}
