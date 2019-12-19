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
      title: "",
      category: bookCategories[0]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newBook = this.state;
    const { createBook } = this.props;
    createBook(newBook);
    this.setState({ title: "", category: bookCategories[0] });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a New Book</h2>
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Book name"
        />{" "}
        <select
          value={this.state.category}
          id="category"
          onChange={this.handleChange}
        >
          {bookCategories.map(category => (
            <option id={category} value={category} key={category}>
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
