import React from "react";
import PropTypes from "prop-types";


export default function FloatingActionBtn({ icon, callback,color }){
  return(
    <button className="button-floating" onClick={callback} style={{backgroundColor : color}}> <img src={icon} /></button>
  );
}

FloatingActionBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};