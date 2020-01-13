import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

export const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const formStyle = {
  borderTop: 'solid 1px #e8e8e8',
  marginLeft: 100,
  marginRight: 100,
  marginTop: 40,
  textAlign: 'left',
  marginBottom: 200,
}
const formTitle = {
  textAlign: 'left',
  height: 24,
  fontFamily: 'Montserrat',
  fontSize: 20,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.18',
  color: '#888888',
};
const formInput = {
  width: 664,
  height: 45,
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',
}
const formSelector = {
  width: 285,
  height: 45,
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',
}
const formButton = {
  width: 184,
  height: 45,
  borderRadius: 3,
  backgroundColor: '#0290ff',
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.5',
  textAlign: 'center',
  color: '#ffffff',
};

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
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Book name"
          style={formInput}
        />
        </label>
        {' '}
        <label htmlFor="bookCategory">
        <select style={formSelector} id="bookCategory" name="category" onChange={this.handleChange} label="selectCategory">
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
