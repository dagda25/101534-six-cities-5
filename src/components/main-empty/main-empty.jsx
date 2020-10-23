import React from "react";
import PropTypes from "prop-types";

const MainEmpty = (props) => {
  const {currentCity} = props;

  return (
    <React.Fragment>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

MainEmpty.propTypes = {
  currentCity: PropTypes.string.isRequired,
};

export default MainEmpty;
