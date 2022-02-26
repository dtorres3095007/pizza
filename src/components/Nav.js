import React from "react";
import { Link } from "react-router-dom";
import shopping_cart from "../assets/images/shopping_cart.png";
import ingredients from "../assets/images/ingredients.png";
import pizza from "../assets/images/pizza.png";
import house from "../assets/images/house.png";
import { isCheck } from "../Helper";


export default function Nav(){
  return(
    <nav className="nav">
      <section className="nav__option" ><Link to="/" ><button style={isCheck("")}><img  src={house}/></button><span>Inicio</span></Link> </section>
      <section className="nav__option"><Link to="/vender" ><button  style={isCheck("vender")}><img  src={shopping_cart}/></button><span>Confirmar Compra</span></Link> </section>
      <section className="nav__option" ><Link to="/pizza" ><button style={isCheck("pizza")}><img  src={pizza}/></button><span>Nueva Pizza</span></Link> </section>
      <section className="nav__option" ><Link to="/ingredientes" ><button style={isCheck("ingredientes")}><img  src={ingredients}/></button><span>Nuevo Ingrediente</span></Link> </section>
    </nav>
  );
}