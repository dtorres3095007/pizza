import React from "react";
import logo from "../assets/images/logo.jpg";

export default function Header(){
  return(
    <div className="header">
      <section className="header__logo"><img  src={logo}/></section>
      <section className="header__menu">
        <ul>
          <li> MyPizza</li>
        </ul>
      </section>
      <section className="header__input">
        <input placeholder="Buscar" />
      </section>

    </div>
  );
}