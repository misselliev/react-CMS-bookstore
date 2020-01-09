import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
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
    const { input, category } = this.state;
    const { createBook } = this.props;
    const newBook = {
      key: new Date().getTime(),
      title: input,
      category,
    };
    createBook(newBook);
    return newBook;
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
        />
        {' '}
        <label>Book category</label>
        <select name="category" onChange={this.handleChange}>
          {bookCategories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {' '}
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ books: state });

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
