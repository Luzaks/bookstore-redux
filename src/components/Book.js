import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Books.css';

const sliceCategory = category => `${category.slice(0, 1)}${category.slice(1).toLowerCase()}`;

const Book = ({ book, handleRemoveBook }) => (
  <div className="book-container">
    <table className="book-info-container">
      <tbody className="book-info-container">
        <tr className="book-info">
          <td className="book-category"><p>{sliceCategory(book.category)}</p></td>
          <td className="book-title"><p>{book.title}</p></td>
          <td className="book-author"><p>A. author</p></td>
        </tr>
        <tr className="links-container">
          <td>Comments</td>
          <td className="links-separator">|</td>
          <td>
            <button className="remove-book-btn" type="submit" onClick={() => handleRemoveBook(book)}> Remove Book </button>
          </td>
          <td className="links-separator">|</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
    <div className="book-progress">
      <div className="circle-container">
        <svg viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#307bbe" />
              <stop offset="100%" stopColor="#379cf6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" id="gray" />
          <circle cx="50" cy="50" r="45" stroke="url(#gradient)" id="blue" />
        </svg>
      </div>
      <div className="progress-data">
        <p className="percentage">64%</p>
        <p className="book-status">Completed</p>
      </div>
    </div>
    <div className="current-chapter">
      <div className="chapter-data">
        <p className="current-chapter-p">CURRENT CHAPTER</p>
        <p className="chapter-number">Chapter 17</p>
      </div>
      <div className="progress-button">
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
