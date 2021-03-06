import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import { bookCategories } from '../containers/BookForm';
import { formSelector, labelSelect } from './styles/FilterStyle';


const options = ['All', ...bookCategories];

const CategoryFilter = (props) => {
  const { books, changeFilter } = props;
  const selectCategory = event => (changeFilter(books, event.target.value));

  return (
    <span>
      <label htmlFor="category" style={labelSelect}>
        CATEGORIES:
        <select style={formSelector} id="category" name="category" books={books} onChange={selectCategory}>
          {options.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </span>
  );
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  changeFilter: (books, category) => dispatch(changeFilter(books, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
