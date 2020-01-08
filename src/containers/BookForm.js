import React from "react";
import { connect } from "react-redux";
import { createBook } from "../actions/index";

const bookCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100),
      input: "",
      category: bookCategories[0]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const newBook = this.state;
    // const { createBook } = this.props;
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title: this.state.input,
      category: this.state.category
    };
    this.props
      .createBook(newBook)
      // createBook({
      //   id: Math.floor(Math.random() * 100),
      //   title: this.state.input,
      //   category: this.state.category
      // })
      .then(
        this.setState({
          id: Math.floor(Math.random() * 100),
          input: "",
          category: bookCategories[0]
        })
      );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a New Book</h2>
        <label>Book name</label>
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Book name"
        />{" "}
        <label>Book category</label>
        <select name="category" onChange={this.handleChange}>
          {bookCategories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>{" "}
        <button>Add Book</button>
      </form>
    );
  }
}

export default connect(null, { createBook })(BooksForm);
