import { signinUser } from '@keymastervn/redux-token-auth';
import {
  SIGNIN_UPDATE_PARAMS,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../../constants';

const signInUpdateParams = (key, value) => {
  return ({
    type: SIGNIN_UPDATE_PARAMS,
    updateItem: { [key]:value }
  })
};
const signInSuccess = () => {
  return ({
    type: SIGNIN_SUCCESS
  })
};
const signInFailure = () => {
  return ({
    type: SIGNIN_FAILURE
  })
};

const signIn = ({ email, password }) => {
  return dispatch => {
    signInUser({ email, password })(dispatch)
      .then(res => {
        dispatch(signInSuccess())
      })
      .catch(error => {
        dispatch(signInFailure())
      })
  }
}

export {
  signInUpdateParams,
  signInSuccess,
  signInFailure,
  signIn
}