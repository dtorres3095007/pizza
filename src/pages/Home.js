import React, {useEffect } from "react";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ShowPizza from "../containers/ShowPizza";
import debit_card from "../assets/images/debit_card.png";
import NavApp from "../components/NavApp";
import Sale from "../components/Sales";
import { DataSales, moveContentScroll } from "../Helper";

export default function Home(){

  useEffect(() => {
    moveContentScroll("balance__sales");
  },[]);


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
        <p className="body__title">MyPizza Disponibles</p>
        <ShowPizza/>
      </article>
      <aside className="body__side">
        <p className="body__title">Ventas Registradas</p>
        <Balance 
          image={debit_card} 
          title="Balance" 
          price={50000} 
          color="#f44336"
          render={
            ()=>{     
              return DataSales().map(({image, description, client, price},i) =>{
                return <Sale key={i} description={description} image={image} client={client} price={price} callback={()=>true}/>;
              });
            }
          }
        />
      </aside>
    </div>
  );
}