import React from 'react';
import '../styles/App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div className="App">
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
