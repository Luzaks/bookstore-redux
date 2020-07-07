import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tbody>
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  </tbody>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
