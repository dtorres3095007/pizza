import React, {useEffect } from "react";
import PropTypes from "prop-types";
import {  moveContentScroll} from "../Helper";

export default function Balance({ image, title, price, color, render, id = "balance__sales" }){

  useEffect(() => {
    moveContentScroll(id);
  },[]);

  return(
    <div className="balance" data-testid="balance-1">
      <section className="balance__sales" id={id}>
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
  id: PropTypes.string,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired,
};