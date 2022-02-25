import React from "react";
import Header from "../components/Header";
import ShowPizza from "../containers/ShowPizza";
export default function Home(){
  return(
    <div className="wrapper">
      <header className="main-head">
        <Header/>
      </header>
      <article className="content">
        <ShowPizza/>
      </article>
      <aside className="side">Sidebar</aside>
      <div className="ad">Advertising</div>
      <footer className="main-footer">The footer</footer>
    </div>
  );
}