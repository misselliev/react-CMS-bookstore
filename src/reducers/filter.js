import { FILTER_BOOK } from '../actions/index';

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_BOOK:
      return state.filter(book => book.category === action.category);
    default:
      return state;
  }
};

export default filterReducer;
