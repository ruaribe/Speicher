import axios from '../../axios_helper';


import {
  PHOTO_BOOK_UPDATE_PARAMS,
  FETCH_PHOTO_BOOKS_REQUEST,
  FETCH_PHOTO_BOOKS_SUCCESS,
  FETCH_PHOTO_BOOKS_FAILURE
} from '../../constants';

const fetchPhotoBooksRequest = () => {
  return ({
    type: FETCH_PHOTO_BOOKS_REQUEST
  });
}

const fetchPhotoBooksSuccess = (data) => {
  return {
    type: FETCH_PHOTO_BOOKS_SUCCESS,
    data
  };
};

const fetchPhotoBooksFailure = (error) => {
  return {
    type: FETCH_PHOTO_BOOKS_FAILURE,
    error
  }
};

const fetchPhotoBooks = () => {
  return async (dispatch) => {
    dispatch(fetchPhotoBooksRequest());

    try {
      const response = await axios.get(`${API_URL}/photobooks`);
      const data = response.data.results;
      dispatch(fetchPhotoBooksSuccess(data));
    } catch (error) {
      dispatch(fetchPhotoBooksFailure(error));
    }
  };
};

const photoBookUpdateParams = (key, value) => {
  return ({
    type: PHOTO_BOOK_UPDATE_PARAMS,
    updateItem: { [key]:value }
  });
}

const photoBookDelete = (id) => {
  return ({
    type: PHOTO_BOOK_DELETE,
    id
  })
}


export {
  fetchPhotoBooksRequest,
  fetchPhotoBooksSuccess,
  fetchPhotoBooksFailure,
  fetchPhotoBooks,
  photoBookUpdateParams,
  photoBookDelete
};