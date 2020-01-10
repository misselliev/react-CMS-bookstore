import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (books = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return books;
  }
};

export default filterReducer;
