import React from "react";
import styles from './SearchBar.module.css'
import propTypes from "prop-types";
const SearchBar = ({ handleInput, handeleSubmit, value }) => {
  return (
    <form className={styles.searchForm} onSubmit={handeleSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search movies..."
        onChange={handleInput}
        value={value}
      />
    </form>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  value: propTypes.string,
  onInputChange: propTypes.func
};
