import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeCreator } from '../actions';

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeCreator(book));
  },
});

const BooksList = ({ books, handleRemoveBook }) => (
  <table>
    { books.map(book => (
      <tbody key={book.id}>
        <Book book={book} />
        <tr>
          <td>
            <button type="submit" onClick={() => handleRemoveBook(book)}> Remove Book </button>
          </td>
        </tr>
      </tbody>
    ))}
  </table>
);

const connectedBookList = connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default connectedBookList;
