import React from "react";
import PropTypes from "prop-types";


export default function FloatingActionBtn({ color,type, callback, title }){
  return(
    <div className="button-floating">
      <button onClick={callback}type={type}   style={{backgroundColor : color}}> {title}</button>
    </div>
  );
}

FloatingActionBtn.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  callback : PropTypes.func
};