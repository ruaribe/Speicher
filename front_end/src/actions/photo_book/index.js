import {
  PHOTO_BOOK_UPDATE_PARAMS,
  FETCH_PHOTO_BOOKS_REQUEST
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
    type: FETCH_QUIZZES_FAILURE,
    error
  }
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
  photoBookUpdateParams,
  photoBookDelete
};