import React from "react";
import Book from "../components/Book";
import { connect } from "react-redux";

export const BookList = ({ books }) => {
  return (
    <div>
      <table>
        <tbody>
          {books.map(book => (
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
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
