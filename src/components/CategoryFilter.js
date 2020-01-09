import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import { bookCategories } from '../containers/BookForm';

const selectCategory = (event) => {
  changeFilter(event.target.value);
}

export const CategoryFilter = () => {
  const options = ['All', ...bookCategories];

  return (
    <div>
      <select name="category" onChange={selectCategory} label="selectCategory">
        {options.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

