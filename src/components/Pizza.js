/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { getSendData, showMessage } from "../Helper";
import plus from "../assets/images/plus.png";
import cancel from "../assets/images/cancel.png";


export default function Pizza({ id,image, name, description,price, callback, initial = false }){
  const [check, setCheck] = useState(initial);
  const [ingredients, setIngredients] = useState("");
  const [show, setShow] = useState(false);

  const getPizza = async ()=>{
    getSendData(`/pizza/${id}/ingredients`,"GET",null, async (error, estado, resp) => {
      if (estado === 200) {
        let ing = "";
        await  resp.map((data)=> ing = `${ing}${data.name}, `);
        setIngredients(ing);
        setShow(true);
      } else {
        showMessage.fire({ icon: "info", title: "Error al cargar las ingredientes"});
      }});
  };

  return(
    <div className="pizza"  style={{backgroundColor : check ? "#FFF1D1" : "white"}}>
      <section className="pizza__image">
        <img src={image} />
      </section>
      <section className="pizza__information">
        <p className="pizza__name">{name}</p>
        <p className="pizza__description">{description}</p>
        <p className="pizza__price">${price}</p>
        <button className="pizza__check"  onClick={()=> callback(setCheck,check)}>
          {check ? <img src={cancel}/> : <img src={plus}/>}
        </button>
      </section>
      <section className="pizza__detail" >
        {/* <span className="pizza__close" onClick={()=> setShow(false)}>X</span> */}
        <p className="pizza__title">{name}</p>
        { show ?   <p className="pizza__ingredients">{ingredients}</p> : <p onClick={getPizza}>Ver Ingredientes</p>}
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
  id: PropTypes.number.isRequired,
};