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
      <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
    ))}
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
