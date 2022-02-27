
import React from "react";
import PropTypes from "prop-types";

export default function Modal({ container, title, callback,open}){
  return(
    <div  className="modal" 
      style={{
        visibility: open ? "visible" : "", 
        opacity: open ? 1 :0,
        transition: open ? "visibility 0s, opacity 0.5s linear" : "visibility 0s linear 0.5s, opacity 0.5s",
      }}>
      <div className="modal__content">
        <div className="modal__title">
          <span>{title}</span>
          <span className="modal__close" onClick={callback}>X</span>
        </div>
        <div className="modal__body">
          {container()}
        </div>
      </div>

    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  container: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};