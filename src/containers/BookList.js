import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';
import { styleCard } from '../components/styles/BookListStyle'

const filtering = (books, filterRes) => (filterRes === 'All' ? books : books.filter(book => book.category === filterRes));

const BookList = ({ books, filter }) => (
  <div>
    {filtering(books, filter).map(book => (
      <div style={styleCard}>

        <Book
          key={book.key}
          id={book.key}
          title={book.title}
          author={book.author}
          category={book.category}
          handleDelete={removeBook(book)}
        />
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
