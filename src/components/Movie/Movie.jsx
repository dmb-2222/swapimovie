import React from "react";
import StarWarsImg from "../../img/defaultStarWars.jpg";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import PropTypes from "prop-types";

const Movie = ({ title, director, url }) => {
  const sliceUrl = url.slice(20, 28);
  return (
    <li className={styles.movei}>
      <Link to={sliceUrl}>
        <img src={StarWarsImg} alt="StarWars" />
        <p>{title}</p>
        <p>{director}</p>
      </Link>
    </li>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
