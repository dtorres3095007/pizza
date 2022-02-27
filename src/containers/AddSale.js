import React, { useState } from "react";
import PropTypes from "prop-types";
import shopping_cart from "../assets/images/shopping_cart.png";
import Balance from "../components/Balance";
import Sales from "../components/Sales";
import FloatingActionBtn from "../components/FloatingActionBtn";

export default function AddSale({callback, pizzaSelect, total}){

  const [client, setClient] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const resetForm = ()=>{
    setPhone("");
    setDate("");
    setClient("");
  };

  return(
    <div className="container-add-sale">
      <section>
        <p className="body__title">MyPizza seleccionadas</p>
        <Balance 
          id="balance_sales_confirm"
          image={shopping_cart} 
          title="Total" 
          price={total} 
          color="#f44336"
          render={()=>
                 
            pizzaSelect.map(({image, name, price},i) =>{
              return (
                <Sales 
                  key={i} 
                  description={"X1"} 
                  image={image} 
                  client={name} 
                  price={price} 
                  callback={()=>true}
                />);

            })
            
          }
        />
      </section>
      <form
        onSubmit={(e)=> {
          callback({client,phone, date, price : total},resetForm);
          e.preventDefault();
        }
        }>
        <p className="body__title"></p>
        <label className="container-add-pizza__input">
          Cliente 
          <input 
            value={client}
            type="text" 
            name="name" 
            placeholder="Ingresa el nombre"
            onChange={({ target: { value } }) => setClient(value)}
            required={true}
          /> 
        </label>
        <label className="container-add-pizza__input">
          Telefono del cliente
          <input 
            value={phone}
            type="number" 
            name="phone" 
            placeholder="Ingrese Telefono"
            onChange={({ target: { value } }) => setPhone(value)}
            required={true}
          />    
        </label>
        <label className="container-add-pizza__input">
          Fecha
          <input 
            value={date}
            type="date" 
            name="phone" 
            placeholder="Seleccione Fecha"
            onChange={({ target: { value } }) => setDate(value)}
            required={true}
          />    
        </label>
        <FloatingActionBtn 
          callback={()=>{}}
          color="teal"  
          type="submit" 
          title={"Aceptar"}
        />
      </form>

    </div>
  );
}


AddSale.propTypes = {
  callback: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  pizzaSelect: PropTypes.array.isRequired,
};