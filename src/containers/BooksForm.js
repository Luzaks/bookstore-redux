import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createCreator } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addBook: bookObj => dispatch(createCreator(bookObj)),
  };
}

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Category',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanges({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    this.setState({
      title: '',
      category: 'Category',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;

    return (
      <form>
        <input type="text" name="title" placeholder="Book title" value={title} onChange={this.handleChanges} />
        <select name="category" value={category} onChange={this.handleChanges}>
          <option value="Category" disabled hidden>Category</option>
          { categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        <input type="submit" value="ADD BOOK" onClick={this.handleSubmit} />
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
