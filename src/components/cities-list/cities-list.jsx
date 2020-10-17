import React from "react";

const CitiesList = (props) => {

  const {cities} = props;

  return (
    cities.map((city, i) => {
      return (
        <li className="locations__item" key={i}>
          <a className={i === 0 ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
            <span>{city}</span>
          </a>
        </li>
      );
    })
  );
};

export default CitiesList;
