import { ADD_BOOK, REMOVE_BOOK } from "../actions/index";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
