import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ShowPizza from "../containers/ShowPizza";

import NavApp from "../components/NavApp";

export default function MyPizza(){
  return(
    <div className="body">
      <header className="body__head">
        <Header/>
        <NavApp/>
      </header>
      <nav className="body__nav">
        <Nav/>
      </nav>
      <article className="body__content">
        <p className="body__title">Pizzas Disponibles</p>
        <ShowPizza/>
      </article>
    </div>
  );
}