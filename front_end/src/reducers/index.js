import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from '@keymastervn/redux-token-auth';
import registerReducer from '../reducers/register/index';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  registerReducer,
});

export default rootReducer;