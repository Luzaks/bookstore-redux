import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select name="filter" onChange={handleFilterChange}>
      <option value="Categories" selected disabled hidden>Categories</option>
      { categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
