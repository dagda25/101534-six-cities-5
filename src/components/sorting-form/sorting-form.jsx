import React from "react";
import PropTypes from "prop-types";
import {SortingTypes} from "../../utils/const";
import withToggleMenu from "../../hocs/withToggleMenu";

const SortingForm = (props) => {
  const {changeSorting, currentSorting, isMenuOpen, onToggleClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" data-type="toggler" onClick={onToggleClick}>
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={onToggleClick} className={isMenuOpen ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`} data-value="popular">
        {SortingTypes.map((type) => {
          return (
            <li className={type.name === currentSorting ? `places__option places__option--active` : `places__option`} tabIndex="0" onClick={(evt) => changeSorting(evt.target.textContent)} key={type.id}>{type.name}</li>
          );
        })}
      </ul>
      <select className="places__sorting-type" id="places-sorting" value={currentSorting} onChange={(evt) => changeSorting(evt)} style={{display: `none`}}>
        {SortingTypes.map((type) => {
          return (
            <option className="places__option" value={type.name} key={type.id}>{type.name}</option>
          );
        })}
      </select>
    </form>
  );
};

SortingForm.propTypes = {
  changeSorting: PropTypes.func.isRequired,
  currentSorting: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};
export {SortingForm};

export default withToggleMenu(SortingForm);
