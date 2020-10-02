import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {offerCount} = props;
  return (
    <MainPage offerCount={offerCount}/>
  );
};

export default App;

App.propTypes = {offerCount: PropTypes.number.isRequired};
