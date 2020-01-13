import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const filtering = (books, filterRes) => (filterRes === 'All' ? books : books.filter(book => book.category === filterRes));

const styleCard = {
  borderRadius: 4,
  border: 'solid 1 #e8e8e8',
  backgroundColor: '#ffffff',
  margin: '15px 100px 15px 100px',
  padding: 27,
  textAlign: 'left',
};

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
