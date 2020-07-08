import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tbody>
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
    <tr>
      <td>
        <button type="submit" onClick={() => handleRemoveBook(book)}> Remove Book </button>
      </td>
    </tr>
  </tbody>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
