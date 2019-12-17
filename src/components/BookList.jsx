import React from 'react';
import Book from '../containers/Book';
import { connect } from 'react-redux';

export const BookList = (books) => {
  console.log('books ', books)
  return (
  <div>
    <table>
      <tbody>
        {
          books.map((book) => (
            <Book id={book.id} title={book.title} author={book.author} category={book.category}  />
          ))
        }     
      </tbody>
    </table>
  </div>
  )
}


const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null) (BookList);
