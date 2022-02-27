import React from "react";
import PropTypes from "prop-types";


export default function FloatingActionBtn({ icon,color,type, callback, title }){
  return(
    <button onClick={callback}type={type} className="button-floating"  style={{backgroundColor : color}}> <img src={icon} />{title}</button>
  );
}

FloatingActionBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  callback : PropTypes.func
};