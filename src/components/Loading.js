import React from "react";
import loadingIcon from "../assets/images/loading.gif";



export default function Loading(){
  return(
    <section className="loading">
      <div>
        <img  src={loadingIcon}/>
        <p>Cargando...</p>
      </div>
    </section>
  );
}