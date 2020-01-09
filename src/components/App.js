import React from 'react';
import '../App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import {CategoryFilter} from '../components/CategoryFilter.js';
function App() {
  return (
    <div className="App">
      <CategoryFilter />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
