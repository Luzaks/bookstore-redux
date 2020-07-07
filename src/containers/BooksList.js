import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const mapStateToProps = state => ({ books: state.books });

const BooksList = ({ books }) => (
  <table>
    { books.map(book => (
      <Book book={book} key={book.id} />
    ))}
  </table>
);

const connectedBookList = connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connectedBookList;
