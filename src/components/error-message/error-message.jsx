
import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  const {text, onClick} = props;

  return (
    <div style={{color: `white`, backgroundColor: `red`, padding: `10px`, borderRadius: `5px`, marginTop: `5px`}} onClick={onClick}>
      {text}
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ErrorMessage;
