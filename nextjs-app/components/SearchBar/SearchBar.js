import React, { useState } from 'react';

import Button from '../Button/Button';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const inputChangedHandler = event => {
    setInputValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
  };

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
        <Button type="submit" text="Filter" style="searchbar__button" click={() => {}} />
      </form>
    </div>
  );
};

export default SearchBar;
