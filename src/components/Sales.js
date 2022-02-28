import React, { useState } from "react";
import PropTypes from "prop-types";
import plus from "../assets/images/plus.png";
import cancel from "../assets/images/cancel.png";

export default function Sales({ image, client, description, price, callback, show= false }){
  const [check, setCheck] = useState(false);

  return(
    <div className="sales" style={{backgroundColor : check ? "#FFF1D1" : "white"}} data-testid="sale-1">
      <section className="sales__image">
        <img src={image} />
      </section>
      <section className="sales__information">
        <p className="sales__name">{client}</p>
        <p className="sales__description">{description}</p>
        <p className="sales__price">${price}</p>
        {show &&<button className="sales__check"  onClick={()=> callback(setCheck,check)}>
          {check ? <img src={cancel}/> : <img src={plus}/>}
        </button>}
      </section>
    </div>
  );
}

Sales.propTypes = {
  image: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  client: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  show: PropTypes.bool,
};