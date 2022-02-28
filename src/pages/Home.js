import React, {useEffect, useState } from "react";
import PropTypes from "prop-types";
import {  connect } from "react-redux";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Pizza from "../components/Pizza";
import debit_card from "../assets/images/debit_card.png";
import menu from "../assets/images/menu.png";
import man from "../assets/images/man.png";
import shopping_cart from "../assets/images/shopping_cart.png";
import NavApp from "../components/NavApp";
import Sale from "../components/Sales";
import Loading from "../components/Loading";
import {  getSendData, showMessage, SERVER_BACK,showError } from "../Helper";
import { changeSelectPizza } from "../redux/actions/actGlobal";
import FloatingActionBtn from "../components/FloatingActionBtn";
import Modal from "../components/Modal";
import AddSale from "../containers/AddSale";
import Empty from "../components/Empty";
import Information from "../components/Information";

function Home({pizzaSelect, changeSelectPizza}){
  const [total, setTotal] = useState(0);
  const [totalSale, setTotalSale] = useState(0);
  const [dataPizza, setDatapizza] = useState([]);
  const [dataSale, setSale] = useState([]);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [information, setInformation] = useState({pizza : 0, client :0, sales : 0});
  const [reset, setReset] = useState([]);

  useEffect(() => {
    getPizza();
    getSale();
 
  },[]);

  const getPizza = async ()=>{
    setIsLoading(true);
    getSendData("/pizza","GET",null, async (error, estado, resp) => {
      setIsLoading(false);
      if (estado === 200) {
        setDatapizza(resp);
        changeSelectPizza([]);
      } else {
        showMessage.fire({ icon: "info", title: "Error al cargar las Pizza"});
      }});
  };

  const getSale = async ()=>{
    setIsLoading(true);
    getSendData("/sale","GET",null, async (error, estado, resp) => {
      setIsLoading(false);
      if (estado === 200) {
        setSale(resp);
        calculateValueSale(resp);
        getInformation();
      } else {
        showMessage.fire({ icon: "info", title: "Error al cargar las ventas"});
      }});
  };

  const getInformation = async ()=>{
    setIsLoading(true);
    getSendData("/sale/information","GET",null, async (error, estado, resp) => {
      setIsLoading(false);
      if (estado === 200) {
        setInformation(resp);
      } else {
        showMessage.fire({ icon: "info", title: "Error al cargar las ventas"});
      }});
  };

  const addSale = async (data,resetForm)=>{
    data.pizza = pizzaSelect;
    console.log(data);
    getSendData("/sale/add","post",data, async (error, estado, resp) => {
      if (estado === 200) {
        showMessage.fire({ icon: "success", title: resp.title });
        resetForm();
        setModalConfirm(false);
        setTotal(0);
        changeSelectPizza([]);
        await reset.map((callback)=>callback());
        setReset([]);
        getSale();
      } else {
        showMessage.fire({ icon: "info", title: resp.title ? resp.title : showError(resp) });
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

  const calculateValueSale = async (resp)=>{
    let total = 0;
    await resp.map(({price})=>{
      total = total + price; 
    }); 
    setTotalSale(total);
  };



  return(
    <div className="body">
      <Information information={information}/>
      {isLoading && <Loading/>}
      <header className="body__head">
        <Header />
      </header>
      <nav className="body__nav">
        <Nav />
      </nav>
      <article className="body__content">
        <p className="body__title">Selecciona Mypizza a vender</p>
        { dataPizza.length == 0 ? <Empty image={menu} title='Aun no tienes pizzas guardadas.'/> : <div className="body__pizza">
          {     
            dataPizza.map(({image, description, name, price, id},i) =>{
              price = price + 10000;
              image = `${SERVER_BACK}${image}`;
              return (
                <Pizza 
                  key={i} 
                  id={id}
                  description={description} 
                  image={image} 
                  name={name} 
                  price={price}
                  openModal={()=> setModalDetail(true)}
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
        </div>}
      </article>
      <aside className="body__side">
        <p className="body__title">Ventas Registradas</p>

        {
          dataSale.length == 0 ? <Empty image={shopping_cart} title='Aun no tienes ventas registradas.'/>: <Balance 
            image={debit_card} 
            title="Ventas" 
            price={totalSale} 
            color="#f44336"
            render={
              ()=>{     
                return dataSale.map(({client, price, total},i) =>{
                  return (
                    <Sale 
                      key={i} 
                      description={`Mypizza x${total}`} 
                      image={man} 
                      client={client} 
                      price={price} 
                      callback={()=>true}
                    />);
                });
              }
            }
          />}
      </aside>
      {
        total > 0 
        &&
        <FloatingActionBtn 
          callback={()=>{
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
            callback={addSale}
            total={total}
            pizzaSelect={pizzaSelect}
          />;
        }} 
        open={modalConfirm}
      />
      <Modal 
        title="Detalle Pizza" 
        callback={()=> setModalDetail(false)} 
        container={()=>{
          return (
            <div>
              Detalle Pizza
            </div>
          );
        }} 
        open={modalDetail}
      />
      <NavApp/>
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