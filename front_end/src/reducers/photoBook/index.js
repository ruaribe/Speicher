import {
  FETCH_PHOTO_BOOKS_REQUEST,
  FETCH_PHOTO_BOOKS_SUCCESS,
  FETCH_PHOTO_BOOKS_FAILURE,
  PHOTO_BOOK_UPDATE_PARAMS,
} from '../../constants';

const initialState = {
  name: "",
  isSubmitting: false,
  isLoading: false,
  photoBooks: [],
  error: null
}

const photoBookReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case PHOTO_BOOK_UPDATE_PARAMS:
      return {
        ...state,
        ...action.updateItem
      };
    case FETCH_PHOTO_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PHOTO_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photoBooks: action.data,
        error: null
      }
    case FETCH_PHOTO_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
};

export default photoBookReducer;