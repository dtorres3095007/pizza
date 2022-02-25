import React from "react";
import Pizza from "../components/Pizza";
import { Datapizza } from "../Helper";

export default function ShowPizza(){
  return(
    <div className="container-pizza">
      {      Datapizza().map(({image, description, name, price},i) =>{
        return <Pizza key={i} description={description} image={image} name={name} price={price}/>;
      })}
    </div>
  );
}

