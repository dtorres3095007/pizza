import React from "react";
import logo from "../assets/images/logo.jpg";
export default function Header(){
  return(
    <div className="header">
      <section className="header__logo"><img  src={logo}/></section>
      <section className="header__menu">
        <ul>
          <li>Ventas</li>
          <li>Mis Pizzas</li>
        </ul>
      </section>
      <section>
        <input placeholder="Buscar Pizza" className="header__input"/>
      </section>
    </div>
  );
}