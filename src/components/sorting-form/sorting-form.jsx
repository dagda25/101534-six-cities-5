import React from "react";
import PropTypes from "prop-types";

const SortingForm = (props) => {
  const {changeSorting, currentSorting} = props;
  const sortingList = React.createRef();
  const sortingCaption = React.createRef();
  const selector = React.createRef();

  const handleClick = (evt) => {
    if (!evt.target.dataset) {
      return;
    }
    if (evt.target.dataset.type === `toggler`) {
      toggleSortingList(sortingList);
    }
    if (evt.target.dataset.type === `option`) {
      changeOption(evt.target);
    }
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
    selector.current.dispatchEvent(new Event(`change`, {bubbles: true}));
    selector.current.value = option.dataset.value;
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={(evt) => handleClick(evt)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" data-type="toggler" ref={sortingCaption}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened" ref={sortingList} data-value="popular">
        <li className="places__option places__option--active" tabIndex="0" data-type="option" data-value="popular">Popular</li>
        <li className="places__option" tabIndex="0" data-type="option" data-value="to-high">Price: low to high</li>
        <li className="places__option" tabIndex="0" data-type="option" data-value="to-low">Price: high to low</li>
        <li className="places__option" tabIndex="0" data-type="option" data-value="top-rated">Top rated first</li>
      </ul>
      <select className="places__sorting-type" id="places-sorting" value={currentSorting} ref={selector} onChange={(evt) => changeSorting(evt)}>
        <option className="places__option" value="popular">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
    </form>
  );
};

SortingForm.propTypes = {
  changeSorting: PropTypes.func.isRequired,
  currentSorting: PropTypes.string.isRequired,
};

export default SortingForm;
