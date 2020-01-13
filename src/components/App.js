import React from 'react';
import '../App.css';
import MainHeader from './Header'
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import CategoryFilter from './CategoryFilter';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <CategoryFilter />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
