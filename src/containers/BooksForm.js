import React, { Component } from 'react';
import { createCreator } from '../actions/index'
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    addBook: (bookObj) => dispatch(createCreator(bookObj))
  }
}

class BooksForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      category: "Category"
    }
    this.handleChanges = this.handleChanges.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChanges(event) {
    if (event.target.id === 'title') {
      this.setState({
        title: event.target.value
      })
    } else if (event.target.id === 'category') {
      this.setState({
        category: event.target.value
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addBook(this.state)
    this.setState({
      title: "",
      category: "Category"
    })
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <form>
        <input type="text" id="title" placeholder="Book title" value={this.state.title} onChange={this.handleChanges}/>
        <select name="category" id="category" value={this.state.category} onChange={this.handleChanges}>
          <option value="Category" disabled hidden>Category</option>
          { categories.map(category => <option key={category} value={category}>{category}</option>) }
        </select>
        <input type="submit" value="ADD BOOK" onClick={this.handleSubmit}/>
      </form>
    );
  }
  
};

const ConnectedBooksForm = connect(null, mapDispatchToProps)(BooksForm)

export default ConnectedBooksForm;
