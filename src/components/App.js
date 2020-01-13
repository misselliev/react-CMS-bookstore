import React from 'react';
import '../App.css';
import MainHeader from './Header'
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
