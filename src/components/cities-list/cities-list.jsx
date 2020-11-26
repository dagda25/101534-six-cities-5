import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {

  const {cities, changeCity, currentCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => {
        return (
          <li className="locations__item" key={i}>
            <a className={city === currentCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#" onClick={changeCity}>
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};


CitiesList.propTypes = {
  changeCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default CitiesList;
