import React from "react";
import shopping_cart from "../assets/images/shopping_cart.png";
import ingredients from "../assets/images/ingredients.png";
import pizza from "../assets/images/pizza.png";


export default function Nav(){
  return(
    <nav className="nav">
      <section className="nav__option"><button><img  src={shopping_cart}/></button><span>Confirmar Compra</span></section>
      <section className="nav__option"><button><img  src={pizza}/></button><span>Nueva Pizza</span></section>
      <section className="nav__option"><button><img  src={ingredients}/></button><span>Nuevo Ingrediente</span></section>
    </nav>
  );
}