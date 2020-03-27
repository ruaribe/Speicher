import {
  REGISTER_UPDATE_PARAMS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../../constants';

const initial_state = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  isSubmitting: false,
}

const registerReducer = (state = initial_state, action) => {
  switch (action.type) {
    case REGISTER_UPDATE_PARAMS:
      return {
        ...state,
        ...action.updateItem
      }
    case REGISTER_SUCCESS:
      return {
        ...initial_state
      }
    case REGISTER_FAILURE:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default registerReducer;