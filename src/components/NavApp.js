import React,{useState} from "react";
import { Link } from "react-router-dom";
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
        <div  className="nav-app__options">
          <nav>
            <Link to="/" ><button className="nav-app__option" style={isCheck("")}> <img  src={house}/><span>Inicio</span> </button></Link>
            <Link to="/pizza" ><button className="nav-app__option" style={isCheck("pizza")}> <img  src={pizza}/><span>Nueva Pizza</span></button></Link>
          </nav>
        </div>
      </section>
      }    
    </div>
  );
}