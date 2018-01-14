export default function (state = {
		initiating:true,
	  message: null,
		error:false,
		completed:false,
		data:null
	}, action) {
	if(action && action.type){
    switch (action.type) {
      case 'GET_ADMIN_LETTER_UNPAID_REQUEST':
      	return Object.assign({}, state, { initiating:true });
      	break;
      case 'GET_ADMIN_LETTER_UNPAID_RECIEVED':
  	    return Object.assign({}, state, { initiating:false, error:false, data: action.payload, completed:true });
        break;
      case 'GET_ADMIN_LETTER_UNPAID_ERROR':
      	return Object.assign({}, state, { initiating:false, error:true, message: action.payload, completed:true });
          break;
      default:
        return state;
    }
  } else {
    return state;
  }
}
