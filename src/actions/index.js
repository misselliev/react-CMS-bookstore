const CREATE_BOOK = "CREATE_BOOK";

const createBook = book => {
  return {
    type: CREATE_BOOK,
    book
  };
};

const REMOVE_BOOK = "REMOVE_BOOK";

const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    book
  };
};

export { createBook, removeBook, CREATE_BOOK, REMOVE_BOOK };
