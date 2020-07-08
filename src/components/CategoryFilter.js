import React from 'react';

const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select name="filter">
      <option value="Categories" selected disabled hidden>Categories</option>
      { categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  );
};

export default CategoryFilter;
