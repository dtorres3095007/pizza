import React from "react";
import PropTypes from "prop-types";

export default function Pizza({ image, name, description,price }){
  return(
    <div className="pizza">
      <section className="pizza__image">
        <img src={image} />
      </section>
      <section className="pizza__information">
        <p className="pizza__name">{name}</p>
        <p className="pizza__description">{description}</p>
        <p className="pizza__price">${price}</p>
      </section>
      <section className="pizza__actions"></section>
    </div>
  );
}

Pizza.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};