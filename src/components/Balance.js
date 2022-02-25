import React from "react";
import PropTypes from "prop-types";

export default function Balance({ image, title,price, color }){
  return(
    <div className="balance" style={{backgroundColor : color}}>
      <section className="balance__icon">
        <img src={image} />
      </section>
      <section className="balance__information">
        <p className="balance__title">{title}</p>
        <p className="balance__price">${price}</p>
      </section>
    </div>
  );
}

Balance.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};