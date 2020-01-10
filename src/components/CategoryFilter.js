import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import { bookCategories } from '../containers/BookForm';


const options = ['All', ...bookCategories];
class CategoryFilter extends React.Component{
  constructor(props){
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
  }
  selectCategory = (event) => {this.props.changeFilter(event.target.value);
  }
  render(){
    return (
    <div>
      <select name="category" onChange={this.selectCategory} label="selectCategory">
        {options.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => ({ changeFilter: category => dispatch(changeFilter(category))})

export default connect(null, mapDispatchToProps)(CategoryFilter);
