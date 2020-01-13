import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import bookFormCSS from '../components/styles/BookFormStyle';

const {
  formStyle,
  formTitle,
  formSelector,
  formInput,
  formButton,
} = bookFormCSS;

export const bookCategories = [
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
    this.inputState = {
      input: '',
      category: bookCategories[0]
    };
    this.state = this.inputState;
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
    const id = new Date().getTime();
    const newBook = {
      id,
      key: id,
      title: input,
      category,
    };
    this.setState(this.inputState);
    createBook(newBook);
    return newBook;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <h2 style={formTitle}>ADD A NEW BOOK</h2>
        <label htmlFor="bookName">
          <input
            id="bookName"
            label="nameInput"
            type="text"
            name="input"
            value={input}
            onChange={this.handleChange}
            placeholder="Book name"
            style={formInput}
          />
        </label>
        {' '}
        <label htmlFor="bookCategory">
          <select
            style={formSelector}
            id="bookCategory"
            name="category"
            onChange={this.handleChange}
            label="selectCategory"
          >
            {bookCategories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        {' '}
        <button type="submit" style={formButton}>ADD BOOK</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ books: state });

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
