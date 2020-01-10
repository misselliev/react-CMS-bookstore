import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (books = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.category === 'All') {
        return action.books;
      } else {
        return action.books.filter(book => book.category === action.category);
      }

    default:
      return books;
  }
};

export default filterReducer;
