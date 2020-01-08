import React from "react";


const Book = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.category}</td>
      <td><button id={props.id} onClick={props.handleDelete}>Delete</button></td>
    </tr>
  );
};
export default Book;
