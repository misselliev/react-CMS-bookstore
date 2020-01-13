import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import bookCSS from './styles/BookStyle'; 

const {styleCategory, styleAuthor, styleTitle, styleRemove} = bookCSS;
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { removeBook } = this.props;
    return removeBook(this.props);
  }

  render() {
    const { id, title, author, category } = this.props;
    return (
      <div>
        <div style={styleCategory} >{category}</div>
        <div style={styleTitle} >{title}</div>
        <div style={styleAuthor} >{author}</div>
        <div>
          <div style={styleRemove} type="submit" id={id} onClick={this.handleDelete}>
            Delete
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

export default connect(null, mapDispatchToProps)(Book);
