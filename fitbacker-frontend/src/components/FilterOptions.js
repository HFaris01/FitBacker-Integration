import React, { useState, useEffect } from 'react';

const FilterOptions = ({ onFilter, fitnessPlan }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    lowCalories: false,
    highProtein: false,
    lowCarbs: false,
  });

  useEffect(() => {
    // Mock logic to highlight filters based on fitness plan
    if (fitnessPlan === 'loseWeight') {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        lowCalories: true,
      }));
    } else if (fitnessPlan === 'gainMuscle') {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        highProtein: true,
      }));
    }
  }, [fitnessPlan]);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const applyFilters = () => {
    onFilter(selectedFilters);
  };

  return (
    <div className="filter-options">
      <div className="filter-item">
        <input
          type="checkbox"
          name="lowCalories"
          checked={selectedFilters.lowCalories}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="lowCalories"
          style={{ color: selectedFilters.lowCalories ? 'blue' : 'black' }}
          className="filter-label"
        >
          Low Calories
        </label>
      </div>
      <div className="filter-item">
        <input
          type="checkbox"
          name="highProtein"
          checked={selectedFilters.highProtein}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="highProtein"
          style={{ color: selectedFilters.highProtein ? 'blue' : 'black' }}
          className="filter-label"
        >
          High Protein
        </label>
      </div>
      <div className="filter-item">
        <input
          type="checkbox"
          name="lowCarbs"
          checked={selectedFilters.lowCarbs}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="lowCarbs"
          style={{ color: selectedFilters.lowCarbs ? 'blue' : 'black' }}
          className="filter-label"
        >
          Low Carbs
        </label>
      </div>
      <button
        onClick={applyFilters}
        className="apply-filters-button"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterOptions;
