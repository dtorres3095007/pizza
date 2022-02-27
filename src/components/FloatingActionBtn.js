import React from "react";
import PropTypes from "prop-types";


export default function FloatingActionBtn({ icon,color,type }){
  return(
    <button type={type} className="button-floating"  style={{backgroundColor : color}}> <img src={icon} /></button>
  );
}

FloatingActionBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};