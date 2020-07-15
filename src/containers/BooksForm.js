import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createCreator } from '../actions/index';
import '../styles/BooksForm.css';
import postData from '../api/postData';

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
      id: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanges({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { title, category } = this.state;
    const apiData = await postData(title, category);

    this.setState({
      id: apiData.id,
    });

    const { addBook } = this.props;
    addBook(this.state);
    this.setState({
      title: '',
      category: 'Category',
    });
  }

  render() {
    const categories = ['ACTION', 'BIOGRAPHY', 'HISTORY', 'HORROR', 'KIDS', 'LEARNING', 'SCI-FI'];
    const { title, category } = this.state;

    return (
      <form className="books-form">
        <p className="form-title">ADD NEW BOOK</p>
        <div className="input-container">
          <input className="book-title-input" type="text" name="title" placeholder="Book title" value={title} onChange={this.handleChanges} />
          <select className="book-category-input" name="category" value={category} onChange={this.handleChanges}>
            <option value="Category" disabled hidden>Category</option>
            { categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <input className="form-submit-button" type="submit" value="ADD BOOK" onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
