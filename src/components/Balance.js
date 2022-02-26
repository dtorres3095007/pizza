import React from "react";
import PropTypes from "prop-types";
import Sale from "../components/Sales";
import { DataSales } from "../Helper";

export default function Balance({ image, title,price, color }){
  return(
    <div className="balance">
      <section className="balance__sales" id="balance__sales">
        {     
          DataSales().map(({image, description, client, price},i) =>{
            return <Sale key={i} description={description} image={image} client={client} price={price}/>;
          })
        }
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
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};