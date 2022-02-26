import React from "react";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ShowPizza from "../containers/ShowPizza";

import debit_card from "../assets/images/debit_card.png";

export default function Home(){
  return(
    <div className="body">
      <header className="body__head">
        <Header/>
      </header>
      <nav className="body__nav">
        <Nav/>
      </nav>
      <article className="body__content">
        <p className="body__title">Pizzas Disponibles</p>
        <ShowPizza/>
      </article>
      <aside className="body__side">
        <p className="body__title">Ventas Registradas</p>
        <Balance image={debit_card} title="Balance" price={50000} color="#f44336"/>
      </aside>
    </div>
  );
}