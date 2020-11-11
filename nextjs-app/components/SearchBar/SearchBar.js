import React from 'react';
import { func, string } from 'prop-types';

import Button from '../Button/Button';

const SearchBar = ({ inputChangedHandler, submitHandler, inputValue }) => {
  return (
    <div>
      <label className="searchbar__label" htmlFor="searchInput">
        Filter
      </label>

      <form onSubmit={submitHandler} className="searchbar__container">
        <input
          type="text"
          className="searchbar__input"
          id="searchInput"
          onChange={inputChangedHandler}
          value={inputValue}
        />
        <Button type="submit" text="Filter" style="searchbar__button" />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  inputChangedHandler: func.isRequired,
  submitHandler: func.isRequired,
  inputValue: string.isRequired,
};

export default SearchBar;
