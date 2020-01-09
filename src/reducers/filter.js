import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return state.filter(book => book.category === action.category);
    default:
      return state;
  }
};

export default filterReducer;
