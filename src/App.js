import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
