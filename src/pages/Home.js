import React, {useEffect, useState } from "react";
import PropTypes from "prop-types";
import {  connect } from "react-redux";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Pizza from "../components/Pizza";
import debit_card from "../assets/images/debit_card.png";
import NavApp from "../components/NavApp";
import Sale from "../components/Sales";
import Loading from "../components/Loading";
import { DataSales, moveContentScroll, getSendData, showMessage, SERVER_BACK } from "../Helper";
import { changeSelectPizza } from "../redux/actions/actGlobal";
import FloatingActionBtn from "../components/FloatingActionBtn";
import Modal from "../components/Modal";
import AddSale from "../containers/AddSale";

function Home({pizzaSelect, changeSelectPizza}){
  const [total, setTotal] = useState(0);
  const [datapizza, setDatapizza] = useState([]);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reset, setReset] = useState([]);



  useEffect(() => {
    moveContentScroll("balance__sales");
    getPizza();
  },[]);

  const getPizza = async ()=>{
    setIsLoading(true);
    getSendData("/pizza","GET",null, async (error, estado, resp) => {
      console.log("llama");
      setIsLoading(false);
      if (estado === 200) {
        console.log(resp);
        setDatapizza(resp);
      } else {
        showMessage.fire({ icon: "info", title: "ERROR"});
      }});
  };

  const addPizzaBuy = (data)=>{
    let add = pizzaSelect;
    let exist = add.filter(({id})=> id == data.id);
    if(exist.length == 0){
      add.push(data);
      changeSelectPizza(add);
    }else{
      let del = add.map(function(e) { return e.id; }).indexOf(data.id);
      add.splice(del,1);
      changeSelectPizza(add);
    }
    calculateValue();
  };

  const calculateValue = async ()=>{
    let total = 0;
    await pizzaSelect.map(({price})=>{
      total = total + price;
    });
    setTotal(total);
  };

  return(
    <div className="body">
      {isLoading && <Loading/>}
      <header className="body__head">
        <Header/>
        <NavApp/>
      </header>
      <nav className="body__nav">
        <Nav />
      </nav>
      <article className="body__content">
        <p className="body__title">Selecciona Mypizza a vender</p>
        <div className="body__pizza">
          {     
            datapizza.map(({image, description, name, price, id},i) =>{
              price = price + 10000;
              image = `${SERVER_BACK}${image}`;
              return (
                <Pizza 
                  key={i} 
                  description={description} 
                  image={image} 
                  name={name} 
                  price={price}
                  callback={(setCheck,check)=>{
                    addPizzaBuy({ name, price, id, i, image});
                    setCheck(!check);
                    let listCheck = reset;
                    listCheck.push(()=>{
                      setCheck(false);
                    });
                    setReset(listCheck);
                  }}
                />
              );
            })
          }
        </div>
      </article>
      <aside className="body__side">
        <p className="body__title">Ventas Registradas</p>

        <Balance 
          image={debit_card} 
          title="Ventas" 
          price={50000} 
          color="#f44336"
          render={
            ()=>{     
              return DataSales().map(({image, description, client, price},i) =>{
                return (
                  <Sale 
                    key={i} 
                    description={description} 
                    image={image} 
                    client={client} 
                    price={price} 
                    callback={()=>true}
                  />);
              });
            }
          }
        />
      </aside>
      {
        total > 0 
        &&
        <FloatingActionBtn 
          callback={()=>{
            moveContentScroll("balance_sales_confirm");
            setModalConfirm(true);
          }}
          color="teal"  
          type="" 
          title={`Comprar por $${total}`}
        /> 
      }
      <Modal 
        title="Confirmar Compra" 
        callback={()=> setModalConfirm(false)} 
        container={()=>{
          return <AddSale  
            callback={()=> alert("submit")}
            total={total}
            pizzaSelect={pizzaSelect}
          />;
        }} 
        open={modalConfirm}
      />
     
    </div>
  );
}

Home.propTypes = {
  pizzaSelect: PropTypes.array.isRequired,
  changeSelectPizza: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    pizzaSelect : state.redGlobal.pizzaSelect
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    changeSelectPizza : (value) => dispatch(changeSelectPizza(value))
  };
};
export default connect( mapStateToProps, mapDispatchToProps)(Home);