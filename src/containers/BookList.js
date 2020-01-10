import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const filtering = (books, filterRes) =>  (filterRes === 'All' ? books : books.filter(book => book.category === filterRes));

const BookList = ({ books, filter }) => (
  <div>
    <table>
      <tbody>
        {filtering(books, filter).map((book) => (
          <Book
            key={book.key}
            id={book.key}
            title={book.title}
            author={book.author}
            category={book.category}
            handleDelete={removeBook(book)}
          />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({ books: state.books, filter: state.filter});
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
