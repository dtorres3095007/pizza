import React from "react";
import PropTypes from "prop-types";


export default function Balance({ image, title, price, color, render }){


  return(
    <div className="balance">
      <section className="balance__sales" id="balance__sales">
        {render()}
      </section>
      <section className="balance__information"  style={{backgroundColor : color}}>
        <div className="balance__icon">
          <img src={image} />
        </div>
        <div className="balance__description">
          <p className="balance__title">{title}</p>
          <p className="balance__price">${price}</p>
        </div>
      </section>
    </div>
  );
}

Balance.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired,
};