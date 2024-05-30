import React, { useState, useEffect } from 'react';

const FilterOptions = ({ onFilter, fitnessPlan }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    lowCalories: false,
    highProtein: false,
    lowCarbs: false,
    lowFat: false, // Added lowFat filter
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
    <div className="flex flex-col md:flex-row items-center space-x-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="lowCalories"
          checked={selectedFilters.lowCalories}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="lowCalories"
          className={`filter-label ${selectedFilters.lowCalories ? 'text-blue-500' : 'text-black'}`}
        >
          Low Calories
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="highProtein"
          checked={selectedFilters.highProtein}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="highProtein"
          className={`filter-label ${selectedFilters.highProtein ? 'text-blue-500' : 'text-black'}`}
        >
          High Protein
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="lowCarbs"
          checked={selectedFilters.lowCarbs}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="lowCarbs"
          className={`filter-label ${selectedFilters.lowCarbs ? 'text-blue-500' : 'text-black'}`}
        >
          Low Carbs
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="lowFat"
          checked={selectedFilters.lowFat}
          onChange={handleFilterChange}
          className="filter-checkbox"
        />
        <label
          htmlFor="lowFat"
          className={`filter-label ${selectedFilters.lowFat ? 'text-blue-500' : 'text-black'}`}
        >
          Low Fat
        </label>
      </div>
      <button
        onClick={applyFilters}
        className="apply-filters-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4 md:mt-0"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterOptions;
