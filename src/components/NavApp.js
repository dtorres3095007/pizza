import React,{useState} from "react";
import shopping_cart from "../assets/images/shopping_cart.png";
import ingredients from "../assets/images/ingredients.png";
import pizza from "../assets/images/pizza.png";
import menu from "../assets/images/menu.png";
import logo from "../assets/images/logo.jpg";
import close from "../assets/images/close.png";

export default function NavApp(){
  const [show, setShow] = useState(false);
  return(
    <div className="nav-app">
      <section className="nav-app__btn">
        <button onClick={()=> setShow(!show)}><img  src={show ? close : menu}/></button>
      </section>
      {
        show &&
      <section className="nav-app__menu">
        <div className="nav-app__logo"><img  src={logo}/></div>
        <section className="header__input">
          <input placeholder="Buscar MyPizza" />
        </section>
        <div  className="nav-app__options">
          <button className="nav-app__option"><img  src={shopping_cart}/><span>Confirmar Compra</span></button>
          <button className="nav-app__option"><img  src={pizza}/><span>Nueva Pizza</span></button>
          <button className="nav-app__option"><img  src={ingredients}/><span>Nuevo Ingrediente</span></button>
        </div>
      </section>
      }    
    </div>
  );
}