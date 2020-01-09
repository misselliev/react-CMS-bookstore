import React from 'react';
import '../App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className='App'>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
