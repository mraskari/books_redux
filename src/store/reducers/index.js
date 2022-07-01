import { combineReducers } from "redux";
import {
  FETCH_BOOKS_FAILED,
  FETCH_BOOKS_IN_PROGRESS,
  FETCH_BOOKS_SUCCESS,
  SELECT_BOOK,
} from "../action-types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FETCH_BOOKS_FAILED:
      return { loading: false, error: action.payload, data: [] };
    case FETCH_BOOKS_IN_PROGRESS:
      return { loading: true, error: null, data: [] };
    default:
      return state;
  }
};

const selectedBookReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer,
});
