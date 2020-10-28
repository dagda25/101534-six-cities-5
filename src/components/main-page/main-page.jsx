import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OffersList from "../offers-list/offers-list";
import Header from "../header/header";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import MainEmpty from "../main-empty/main-empty";
import SortingForm from "../sorting-form/sorting-form";

const MainPage = (props) => {
  const {offersList, changeCity, cities, currentCity, currentCityOffers, currentSorting, changeSorting, isSortingMenuOpened, toggleSortingMenu} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={currentCityOffers.length ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList cities={cities} changeCity={changeCity} currentCity={currentCity}/>
            </ul>
          </section>
        </div>
        {offersList.length ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} place(s) to stay in {currentCity}</b>
                <SortingForm changeSorting={changeSorting} currentSorting={currentSorting} isSortingMenuOpened={isSortingMenuOpened} toggleSortingMenu={toggleSortingMenu}/>
                <OffersList offers={currentCityOffers} currentSorting={currentSorting}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={currentCityOffers}/>
                </section>
              </div>
            </div>
          </div> :
          <MainEmpty currentCity={currentCity}/>
        }
      </main>
    </div>
  );
};


MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  offersList: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSorting: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
  isSortingMenuOpened: PropTypes.bool.isRequired,
  toggleSortingMenu: PropTypes.func.isRequired,
  currentCityOffers: PropTypes.array.isRequired
};

const mapStateToProps = ({DATA, SORTING}) => ({
  currentCity: DATA.currentCity,
  offersList: DATA.offersList,
  currentSorting: SORTING.currentSorting,
  isSortingMenuOpened: SORTING.isSortingMenuOpened,
  currentCityOffers: DATA.currentCityOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOfferList() {
    dispatch(ActionCreator.getOfferList());
  },
  changeActiveCard() {
    dispatch(ActionCreator.changeActiveCard());
  },
  changeSorting(evt) {
    dispatch(ActionCreator.changeSorting(evt));
  },
  toggleSortingMenu() {
    dispatch(ActionCreator.toggleSortingMenu());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
