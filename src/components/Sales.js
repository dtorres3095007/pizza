import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Sales({ image, client, description, price, callback }){
  const [check, setCheck] = useState(false);

  return(
    <div onDoubleClick={()=> callback(setCheck,check)} className="sales" style={{backgroundColor : check ? "#FFF1D1" : "white"}}>
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
  callback: PropTypes.func.isRequired,
  client: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};