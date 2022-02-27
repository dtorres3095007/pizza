import React, { useState } from "react";
import PropTypes from "prop-types";
import image_add from "../assets/images/image_add.png";
import FloatingActionBtn from "../components/FloatingActionBtn";
import add from "../assets/images/add.png";

export default function AddPizza({callback}){

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [, setImage] = useState("");

  const resetForm = ()=>{
    document.getElementById("image_pizza").value = "";
    setImage("");
    setDescription("");
    setName("");
  };

  return(
    <div className="container-add-pizza">
      <form className="container-add-pizza__form" 
        onSubmit={(e)=> {
          let image = document.getElementById("image_pizza").files[0];
          callback({name,image,description},resetForm);
          e.preventDefault();
        }
        }>
        <label className="container-add-pizza__input">
          Nombre 
          <input 
            value={name}
            type="text" 
            name="name" 
            placeholder="Ingresa el nombre"
            onChange={({ target: { value } }) => setName(value)}
            required={true}
          /> 
        </label>
        <label className="container-add-pizza__input">
          Descripción
          <input 
            value={description}
            type="text" 
            name="description" 
            placeholder="Ingresa la descripción"
            onChange={({ target: { value } }) => setDescription(value)}
            required={true}
          /> 
                 
        </label>
        <label className="container-add-pizza__input">
          Imagen 
          <input 
            accept="image/*"
            type="file" 
            name="image"
            id="image_pizza"
            onChange={({ target: { value } }) => setImage(value)} 
            required={true}
          /> 
        </label>
        <FloatingActionBtn callback={()=>{}} color="teal" icon={add} type="submit" title="Agregar MyPizza"/>
      </form>
      <section className="container-add-pizza__image">
        <img src={image_add}/>
      </section>
    </div>
  );
}


AddPizza.propTypes = {
  callback: PropTypes.func.isRequired,
};