import React from "react";
import Book from "../components/Book";
import { connect } from "react-redux";

const deleteBook = (event) => {
  console.log('event ', event);
  debugger
}
export const BookList = ({ books }) => {
  return (
    <div>
      <table>
        <tbody>
          {books.map(book => (
            <Book
              key={book.key}
              id={book.key}
              title={book.title}
              author={book.author}
              category={book.category}
              handleDelete={deleteBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const mapStateToProps = state => ({
  books: state
});

export default connect(mapStateToProps, null)(BookList);
