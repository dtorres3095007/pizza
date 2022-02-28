import React from "react";
import PropTypes from "prop-types";


export default function Empty({image, title }){
  return(
    <section className="empty">
      <div>
        <img  src={image}/>
        <p>{title}</p>
      </div>
    </section>
  );
}
Empty.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};