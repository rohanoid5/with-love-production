export default function(state = {
		logging:false,
		isLoggedIn:localStorage.getItem('access_token')!=null?true:false,
		error:false,
		errorLogin: false,
		errorMsg:null,
		completed:false,
		inActive:false
	}, action) {
  if(action && action.type){
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
      	return Object.assign({}, state, { logging:true, inActive: false });
      	break;
			case 'USER_LOGGED_IN':
	  	  return Object.assign({}, state, { logging:false, isLoggedIn: true, error:false, inActive: false});
	      break;
      case 'USER_SIGNED_UP':
  	    return Object.assign({}, state, { logging:false, isLoggedIn: true, error:false, completed:true, inActive: false });
        break;
			case 'USER_LOGIN_INCOMPLETE':
	      return Object.assign({}, state, { logging:false, isLoggedIn: false, error:false, inActive: true });
	        break;
      case 'USER_SIGNUP_ERROR':
      	return Object.assign({}, state, { logging:false, isLoggedIn: false, error:true, errorMsg: action.payload, inActive: false });
          break;
			case 'USER_LOGIN_ERROR':
		    return Object.assign({}, state, { logging:false, isLoggedIn: false, errorLogin:true, errorMsg: action.payload, inActive: false });
		      break;
      default:
        return state;
      }
    } else {
      return state;
    }
}
