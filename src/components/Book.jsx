import React from 'react';

const Book = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.category}</td>
    </tr>
  );
}
export default Book;