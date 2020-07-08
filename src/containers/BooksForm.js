import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" placeholder="Book title" />
      <select name="category" id="category" defaultValue="Category">
        <option value="Category" disabled hidden>Category</option>
        { categories.map(category => <option key={category} value={category}>{category}</option>) }
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default BooksForm;
