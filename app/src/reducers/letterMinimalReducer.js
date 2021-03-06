export default function (state = {
		initiating:true,
	  message: null,
		error:false,
		completed:false,
		data:null
	}, action) {
	if(action && action.type){
    switch (action.type) {
      case 'GET_LETTER_MINIMAL_REQUEST':
      	return Object.assign({}, state, { initiating:true });
      	break;
      case 'GET_LETTER_MINIMAL_RECIEVED':
  	    return Object.assign({}, state, { initiating:false, error:false, data: action.payload, completed:true });
        break;
      case 'GET_LETTER_MINIMAL_ERROR':
      	return Object.assign({}, state, { initiating:false, error:true, message: action.payload, completed:true });
          break;
      default:
        return state;
    }
  } else {
    return state;
  }
}
