import React from "react";
import PropTypes from "prop-types";
import bar_chart from "../assets/images/bar_chart.png";
import graph from "../assets/images/graph.png";
import profits from "../assets/images/profits.png";

export default function Information({information}){
  return(
    <section className="information">
      <div className="information__one">
        <p className="infomation__title">#Pizzas</p>
        <p className="information__value">{information.pizza}</p>
        <img src={bar_chart}/>
      </div>
      <div className="information__two">
        <p className="infomation__title">#Ventas</p>
        <p className="information__value">{information.sales}</p>
        <img src={graph}/>
      </div>
      <div className="information__three">
        <p className="infomation__title">#Clientes</p>
        <p className="information__value">{information.client}</p>
        <img src={profits}/>
      </div>
    </section>
  );
}
Information.propTypes = {
  information: PropTypes.object.isRequired,
};