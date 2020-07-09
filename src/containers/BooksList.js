import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeCreator, filterCreator } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import { FaUser } from 'react-icons/fa'

const filterHelper = event => event.target.value;

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeCreator(book));
  },
  handleFilterChange: event => {
    dispatch(filterCreator(filterHelper(event)));
  },
});

const renderHelper = (filter, books) => (
  filter === 'All' ? books : books.filter(book => (book.category === filter))
);

const BooksList = ({
  books, filter, handleRemoveBook, handleFilterChange,
}) => (
  <div className="container-nav-body">
    <nav className="bookstore-nav">
      <div className="nav-left">
        <h1 className="bookstore-logo">Bookstore CMS</h1>
        <h3 className="books-link">Books</h3>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
      <div className="nav-right user-icon">
        <FaUser />
      </div>
    </nav>
    <table className="books-table">
      {
        renderHelper(filter, books).map(book => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))
      }
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.instanceOf(String).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
