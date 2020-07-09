import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Books.css';

const Book = ({ book, handleRemoveBook }) => (
  <tbody className="book-container">
    <tr className="book-info-container">
      <tr className="book-info">
        <td className="book-category"><p>{book.category}</p></td>
        <td className="book-title"><p>{book.title}</p></td>
        <td className="book-author"><p>A. author</p></td>
      </tr>
      <tr className="links-container">
        <td>Comments</td>
        <td className="links-separator">|</td>
        <td>
          <button type="submit" onClick={() => handleRemoveBook(book)}> Remove Book </button>
        </td>
        <td className="links-separator">|</td>
        <td>Edit</td>
      </tr>
    </tr>
    <div className="book-progress">
      <div className="progress-oval" />
      <div className="progress-data">
        <h3>64%</h3>
        <h4>Completed</h4>
      </div>
    </div>
    <div className="current-chapter">
      <div className="chapter-data">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
      </div>
      <div className="progress-button">
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </tbody>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
