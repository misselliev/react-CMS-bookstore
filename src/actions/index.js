// Create book action and action creator
const CREATE_BOOK = "CREATE_BOOK";

const createBook = book => {
  return {
    type: CREATE_BOOK,
    book
  };
};

// Remove book action and action creator
const REMOVE_BOOK = "REMOVE_BOOK";

const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    book
  };
};

export { createBook, removeBook };
