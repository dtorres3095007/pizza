import React from "react";
import PropTypes from "prop-types";

export default function Sales({ image, client, description, price }){
  return(
    <div className="sales">
      <section className="sales__image">
        <img src={image} />
      </section>
      <section className="sales__information">
        <p className="sales__name">{client}</p>
        <p className="sales__description">{description}</p>
        <p className="sales__price">${price}</p>
      </section>
      <section className="sales__actions"></section>
    </div>
  );
}

Sales.propTypes = {
  image: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};