import React from "react";
import image_add from "../assets/images/image_add.png";
export default function AddPizza(){
  return(
    <div className="container-add-pizza">
      <form className="container-add-pizza__form">
        <label className="container-add-pizza__input">Nombre <input type="text" name="name" placeholder="Ingresa el nombre"/> </label>
        <label className="container-add-pizza__input">Descripción <input type="text" name="description" placeholder="Ingresa la descripción"/> </label>
        <label className="container-add-pizza__input">Imagen <input type="file" name="image" /> </label>
      </form>
      <section className="container-add-pizza__image">
        <img src={image_add}/>
      </section>
    </div>
  );
}

