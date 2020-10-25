import React from "react";
import PropTypes from "prop-types";
import {SortingTypes} from "../../utils/const";

const SortingForm = (props) => {
  const {changeSorting, currentSorting, isSortingMenuOpened, toggleSortingMenu} = props;
  const sortingCaption = React.createRef();

  const handleClick = (evt) => {
    console.log(evt.target)
    /*if (!evt.target.dataset) {
      return;
    }
    if (evt.target.dataset.type === `toggler`) {
      toggleSortingList(sortingList);
    }
    if (evt.target.dataset.type === `option`) {
      changeOption(evt.target);
    }*/
  };

  const toggleSortingList = (list) => {
    list.current.classList.toggle(`places__options--opened`);
  };

  const changeOption = (option) => {
    sortingCaption.current.firstChild.textContent = option.textContent;
    sortingList.current.dataset.value = option.dataset.value;

    [...sortingList.current.children].forEach((el) => {
      el.classList.remove(`places__option--active`);
    });
    option.classList.add(`places__option--active`);

    selector.current.value = option.dataset.value;
    selector.current.dispatchEvent(new Event(`change`, {bubbles: true}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" data-type="toggler" ref={sortingCaption} onClick={toggleSortingMenu}>
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isSortingMenuOpened ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`} data-value="popular">
        {SortingTypes.map((type) => {
          return (
            <li className={type.name === currentSorting ? `places__option places__option--active` : `places__option`} tabIndex="0" onClick={(evt) => handleClick(evt)} key={type.id}>{type.name}</li>
          );
        })}
      </ul>
      <select className="places__sorting-type" id="places-sorting" value={currentSorting} onChange={(evt) => changeSorting(evt)}>
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
  isSortingMenuOpened: PropTypes.bool.isRequired,
  toggleSortingMenu: PropTypes.func.isRequired,
};

export default SortingForm;
