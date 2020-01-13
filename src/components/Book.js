import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import styled from '@emotion/styled';



const styleCategory = {
  height: 18,
  opacity: '0.5',
  fontFamily: ' Montserrat',
  fontSize: 14,
  fontWeight: ' bold',
  fontStretch: ' normal',
  fontStyle: ' normal',
  lineHeight: ' normal',
  letterSpacing: ' normal',
  color: '#121212',
  marginBottom: 4,
};

const styleTitle = {
  height: 29,
  fontFamily: 'RobotoSlab',
  fontSize: 24,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.2',
  color: '#121212',
};

const styleAuthor = {
  height: 19,
  fontFamily: 'RobotoSlab',
  fontSize: 16,
  fontWeight: 300,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#4386bf',
};

const styleRemove = {
  cursor: 'pointer',
  fontFamily: 'RobotoSlab',
  fontSize: 16,
  fontWeight: 300,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#4386bf',
  marginTop: 21,
};

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
