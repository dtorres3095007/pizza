import React from "react";
import PropTypes from "prop-types";

export default function Pizza({ image, name, description,price }){
  return(
    <section className="pizza">
      <img src={image} className="pizza__image"/>
      <div className="pizza__information">
        <p className="pizza__name">{name}</p>
        <p className="pizza__description">{description}</p>
        <p className="pizza__price">${price}</p>
      </div>
      <div className="pizza__actions"></div>
    </section>
  );
}

Pizza.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};