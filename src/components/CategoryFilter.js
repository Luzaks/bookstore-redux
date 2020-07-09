import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['ALL', 'ACTION', 'BIOGRAPHY', 'HISTORY', 'HORROR', 'KIDS', 'LEARNING', 'SCI-FI'];

  return (
    <select className="filter-selector" name="filter" onChange={handleFilterChange}>
      <option value="Categories" selected disabled hidden>CATEGORIES</option>
      { categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
