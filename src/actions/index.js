const CREATE_BOOK = "CREATE_BOOK";

const createBook = book => {
  return {
    type: CREATE_BOOK,
    book,
  };
};

const REMOVE_BOOK = "REMOVE_BOOK";

const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    book,
  };
};

const FILTER_BOOK = "FILTER_BOOK";
const filterBook = category => ({
    type: FILTER_BOOK,
    category
  })

export { createBook, removeBook, CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK, filterBook };
