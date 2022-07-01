import axios from "axios";
import {
  FETCH_BOOKS_FAILED,
  FETCH_BOOKS_IN_PROGRESS,
  FETCH_BOOKS_SUCCESS,
  SELECT_BOOK,
} from "../action-types";

export const fetchBooks = (term) => {
  return async (dispatch, store) => {
    dispatch({ type: FETCH_BOOKS_IN_PROGRESS });
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=20&startIndex=20`
      );

      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: response.data.items,
      });

      dispatch(selectedBook(response.data.items ? response.data.items[0] : ""));
    } catch (e) {
      dispatch({
        type: FETCH_BOOKS_FAILED,
        payload: e.message,
      });
    }
  };
};

export const selectedBook = (book) => {
  return {
    type: SELECT_BOOK,
    payload: book,
  };
};
