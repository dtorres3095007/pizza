import React,{useState} from "react";
import { Link } from "react-router-dom";
import shopping_cart from "../assets/images/shopping_cart.png";
import ingredients from "../assets/images/ingredients.png";
import pizza from "../assets/images/pizza.png";
import menu from "../assets/images/menu.png";
import logo from "../assets/images/logo.jpg";
import house from "../assets/images/house.png";
import close from "../assets/images/close.png";
import { isCheck } from "../Helper";

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
          <nav>
            <button className="nav-app__option" style={isCheck("")}> <Link to="/" ><img  src={house}/><span>Inicio</span></Link> </button>
            <button className="nav-app__option" style={isCheck("vender")}> <Link to="/vender" ><img  src={shopping_cart}/><span>Confirmar Compra</span></Link> </button>
            <button className="nav-app__option" style={isCheck("pizza")}> <Link to="/pizza" ><img  src={pizza}/><span>Nueva Pizza</span></Link></button>
            <button className="nav-app__option" style={isCheck("ingredientes")}> <Link to="/ingredientes" ><img  src={ingredients}/><span>Nuevo Ingrediente</span></Link></button>
          </nav>
        </div>
      </section>
      }    
    </div>
  );
}