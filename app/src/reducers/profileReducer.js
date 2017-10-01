export default function (state = {
		initiating:false,
	  message: null,
		error:false,
		completed:false,
		data:null
	}, action) {
	if(action && action.type){
    switch (action.type) {
      case 'GET_PROFILE_REQUEST':
      	return Object.assign({}, state, { initiating:true });
      	break;
      case 'GET_PROFILE_RECIEVED':
  	    return Object.assign({}, state, { initiating:false, error:false, data: action.payload, completed:true });
        break;
      case 'GET_PROFILE_ERROR':
      	return Object.assign({}, state, { initiating:false, error:true, message: action.payload });
          break;
      default:
        return state;
    }
  } else {
    return state;
  }
}
