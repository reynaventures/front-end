import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { metamaskReducer } from './metaMask';

const rootReducer = combineReducers({
	user: userReducer,
    metamask: metamaskReducer,
});

export default rootReducer;