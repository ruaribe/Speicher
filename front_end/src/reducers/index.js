import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from '@keymastervn/redux-token-auth';
import registerReducer from '../reducers/register/index';
import photoBook from '../reducers/photoBook/index';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  registerReducer,
  photoBook
});

export default rootReducer;