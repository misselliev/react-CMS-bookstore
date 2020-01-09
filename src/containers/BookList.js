import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';
import store from '../index';

const deleteBook = (event) => {
  const book = store.getState().filter(item => parseInt(event.target.id, 10) === item.key);
  store.dispatch(removeBook(book[0]));
};
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

const mapStateToProps = state => ({ books: state });


export default connect(mapStateToProps, null)(BookList);
