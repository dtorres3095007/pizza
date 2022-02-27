import React, {useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NavApp from "../components/NavApp";
import Balance from "../components/Balance";
import pizza from "../assets/images/pizza.png";
import AddPizza from "../containers/AddPizza";
import Sale from "../components/Sales";
import { DataIngredients, moveContentScroll, createFormData, sendDataForm, showMessage, showError } from "../Helper";

export default function MyPizza(){
  const [ingredientsAdd, setIngredientsAdd] = useState([]);
  const [total, setTotal] = useState(10000);
  const [reset, setReset] = useState([]);

  useEffect(() => {
    moveContentScroll("balance__sales");
  },[]);

  const addIngredients = (data)=>{
    let add = ingredientsAdd;
    let exist = add.filter(({code})=> code == data.code);
    if(exist.length == 0){
      add.push(data);
      setIngredientsAdd(add);
    }else{
      let del = add.map(function(e) { return e.code; }).indexOf(data.code);
      add.splice(del,1);
      setIngredientsAdd(add);
    }
    calculateValue();
  };

  const calculateValue = async ()=>{
    let total = 10000;
    await ingredientsAdd.map(({price})=>{
      total = total + price;
    });
    setTotal(total);
  };

  const addPizza = async (data,resetForm)=>{
    data.ingredients = JSON.stringify(ingredientsAdd);
    let add = await createFormData(data);
    sendDataForm("/pizza/add","post",add, async (error, estado, resp) => {
      if (estado === 200) {
        showMessage.fire({ icon: "success", title: resp.title });
        resetForm();
        setIngredientsAdd([]);
        setTotal(10000);
        await reset.map((callback)=>callback());
        setReset([]);
      } else {
        showMessage.fire({ icon: "info", title: resp.title ? resp.title : showError(resp) });
      }});
  };

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
          <AddPizza callback={addPizza}/>
        </section>
      </article>
      <aside className="body__side">
        <p className="body__title">Seleccione Ingredientes adicionales</p>
        <Balance 
          image={pizza} 
          title="Total" 
          price={total} 
          color="#f44336"
          render={
            ()=>{     
              return DataIngredients().map(({image, description, name, price, code},i) =>{
                return( 
                  <Sale 
                    key={i}
                    description={description} 
                    image={image} 
                    client={name}
                    price={price} 
                    callback={(setCheck,check)=>{
                      addIngredients({ name, price, code, i});
                      setCheck(!check);
                      let listCheck = reset;
                      listCheck.push(()=>{
                        setCheck(false);
                      });
                      setReset(listCheck);
                    }}
                  />
                );
              });
            }
          }
        />
      </aside>
    </div>
  );
}