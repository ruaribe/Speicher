import { registerUser } from '@keymastervn/redux-token-auth';
import {
  REGISTER_UPDATE_PARAMS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../../constants';

const registerUpdateParams = (key, value) => {
  return ({
    type: REGISTER_UPDATE_PARAMS,
    updateItem: { [key]:value }
  })
};
const registerSuccess = () => {
  return ({
    type: REGISTER_SUCCESS
  })
};
const registerFailure = () => {
  return ({
    type: REGISTER_FAILURE
  })
};

const register = ({
  name,
  email,
  password,
  passwordConfirmation,
//  successCb,
//  errorCb,
}) => {
  return dispatch => {
    registerUser({ name, email, password, passwordConfirmation })(dispatch)
      .then(res => {
        dispatch(registerSuccess())
        //successCb()
      })
      .catch(error => {
        dispatch(registerFailure())
        //errorCb(error)
      })
  }
}


export {
  registerUpdateParams,
  registerSuccess,
  registerFailure,
  register
}