import React, {useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NavApp from "../components/NavApp";
import FloatingActionBtn from "../components/FloatingActionBtn";
import add from "../assets/images/add.png";
import Balance from "../components/Balance";
import ingredients from "../assets/images/ingredients.png";
import AddPizza from "../containers/AddPizza";
import Sale from "../components/Sales";
import { DataIngredients, moveContentScroll } from "../Helper";

export default function MyPizza(){
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
        <div className="body__title">
          <p>Ingresa la siguiente información</p>
        </div>
        <section className="body__content-form">
          <AddPizza/>
        </section>
      </article>
      <aside className="body__side">
        <p className="body__title">Seleccione Ingredientes adicionales</p>
        <Balance 
          image={ingredients} 
          title="Ingredientes" 
          price={0} 
          color="#f44336"
          render={
            ()=>{     
              return DataIngredients().map(({image, description, client, price},i) =>{
                return <Sale key={i} description={description} image={image} client={client} price={price}/>;
              });
            }
          }
        />
      </aside>

      <FloatingActionBtn color="teal" callback={()=> alert("Hola")} icon={add}/>
    </div>
  );
}