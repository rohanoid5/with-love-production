export default function (state = {
		initiating:true,
	  message: null,
		error:false,
		completed:false,
		data:null
	}, action) {
	if(action && action.type){
    switch (action.type) {
      case 'GET_RECEIVER_REQUEST':
      	return Object.assign({}, state, { initiating:true });
      	break;
      case 'GET_RECEIVER_RECIEVED':
  	    return Object.assign({}, state, { initiating:false, error:false, data: action.payload, completed:true });
        break;
      case 'GET_RECEIVER_ERROR':
      	return Object.assign({}, state, { initiating:false, error:true, data: action.payload, completed:true });
          break;
      default:
        return state;
    }
  } else {
    return state;
  }
}
