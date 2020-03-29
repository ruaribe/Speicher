import { PHOTO_BOOK_UPDATE_PARAMS } from '../../constants';

const initialState = {
  name: "",
  isSubmitting: false
}

const photoBookReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case PHOTO_BOOK_UPDATE_PARAMS:
      return {
        ...state,
        ...action.updateItem
      }
    default:
      return state
  }
};

export default photoBookReducer;