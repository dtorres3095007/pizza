import React from "react";
import Balance from "../components/Balance";
import Header from "../components/Header";
// import Nav from "../components/Nav";
import ShowPizza from "../containers/ShowPizza";

import debit_card from "../assets/images/debit_card.png";
import ShowSales from "../containers/ShowSales";

export default function Home(){
  return(
    <div className="wrapper">
      <header className="main-head">
        <Header/>
      </header>
      {/* <nav className="main-nav">
        <Nav/>
      </nav> */}
      <article className="content">
        <ShowPizza/>
      </article>
      <aside className="side">
        <Balance image={debit_card} title="Balance" price={50000} color="#f44336"/>
      </aside>
      <div className="ad">
        <ShowSales/>
      </div>
      <footer className="main-footer">The footer</footer>
    </div>
  );
}