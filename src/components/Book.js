import React from 'react';

const Book = ({ 
  id,
  title,
  category,
  handleDelete
}) => (
  <tr>
    <td>{ id }</td>
    <td>{ title }</td>
    <td>{ category }</td>
    <td>
      <button type="submit" id={id} onClick={handleDelete}>
        Delete
      </button>
    </td>
  </tr>
);

export default Book;
