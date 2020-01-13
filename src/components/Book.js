import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

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
    const { id, title, category } = this.props;
    return (
      <tr>
        <td>{ id }</td>
        <td>{ title }</td>
        <td>{ category }</td>
        <td>
          <button type="submit" id={id} onClick={this.handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

export default connect(null, mapDispatchToProps)(Book);
