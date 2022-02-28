
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Pizza({ image, name, description,price, callback, initial = false }){
  const [check, setCheck] = useState(initial);

  return(
    <div className="pizza" onClick={()=> callback(setCheck,check)} style={{backgroundColor : check ? "#FFF1D1" : "white"}}>
      <section className="pizza__image">
        <img src={image} />
      </section>
      <section className="pizza__information">
        <p className="pizza__name">{name}</p>
        <p className="pizza__description">{description}</p>
        <p className="pizza__price">${price}</p>
      </section>
    </div>
  );
}

Pizza.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  initial: PropTypes.bool,
};