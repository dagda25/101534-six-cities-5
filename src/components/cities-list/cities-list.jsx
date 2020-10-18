import React from "react";

const CitiesList = (props) => {

  const {cities, changeCity, currentCity} = props;

  return (
    cities.map((city, i) => {
      return (
        <li className="locations__item" key={i}>
          <a className={city === currentCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#" onClick={changeCity}>
            <span>{city}</span>
          </a>
        </li>
      );
    })
  );
};

export default CitiesList;
