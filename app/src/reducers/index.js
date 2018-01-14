import { combineReducers } from 'redux';
import authReducer from './authReducer';
import leavesReducer from './leavesReducer';
import addLeaveReducer from './addLeaveReducer';
import profileReducer from './profileReducer';
import statusReducer from './statusReducer';
import receiverReducer from './receiverReducer';
import letterMinimalReducer from './letterMinimalReducer';
import letterOneReducer from './letterOneReducer';
import adminPaidLetterReducer from './adminPaidLetterReducer';
import adminUnpaidLetterReducer from './adminUnpaidLetterReducer';
import adminDispatchedLetterReducer from './adminDispatchedLetterReducer';

const allReducers = combineReducers({
  authState: authReducer,
  leaves: leavesReducer,
  leave: addLeaveReducer,
  user: profileReducer,
  status: statusReducer,
  receiver: receiverReducer,
  letterMinimal: letterMinimalReducer,
  letterOne: letterOneReducer,
  adminPaidLetter: adminPaidLetterReducer,
  adminUnpaidLetter: adminUnpaidLetterReducer,
  adminDispatchedLetter: adminDispatchedLetterReducer
});

const rootReducer = (state, action) => {
	  if (action.type === 'USER_LOGOUT') {
		  console.log('USER_LOGOUT');
	    state = undefined
	  }
	  return allReducers(state, action)
	}
export default rootReducer
