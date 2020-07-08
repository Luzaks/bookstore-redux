import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeCreator, filterCreator } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const filterHelper = event => event.target.value;

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeCreator(book));
  },
  handleFilterChange: event => {
    dispatch(filterCreator(filterHelper(event)));
  },
});

const BooksList = ({ books, handleRemoveBook, handleFilterChange }) => (
  <div>
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
    <table>
      { books.map(book => (
        <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
      ))}
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
