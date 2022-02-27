import jamon from "./assets/images/jamon.png";
import queso from "./assets/images/queso.png";
import salchicha from "./assets/images/salchicha.png";
import champinon from "./assets/images/champinon.png";
import atun from "./assets/images/atun.png";
import pollo from "./assets/images/pollo.png";
import pimiento from "./assets/images/pimiento.png";
import salami from "./assets/images/salami.png";
import pina from "./assets/images/pina.png";
import carne from "./assets/images/carne.png";
import chorizo from "./assets/images/chorizo.png";
import cebolla from "./assets/images/cebolla.png";
import tomate from "./assets/images/tomate.png";
import tocino from "./assets/images/tocino.png";
import pepperoni from "./assets/images/pepperoni.png";
import Swal from "sweetalert2";

const API_V1 = "http://127.0.0.1:8000/api/v1.0";

export  const sendDataForm = (url,method,data,callback) => {
  fetch(`${API_V1}${url}`, {
    method,
    cache: "no-cache",
    mode: "cors",
    body: data,
  }).then(async response => {
    const estado = response.status;
    const resp = await response.json();
    callback(null, estado, resp);
  }).catch(error => callback(error));
};

export const createFormData = (data) => {
  return new Promise((resolve) => {
    let key = Object.keys(data);
    let formData = new FormData();
    key.forEach((key) => formData.append(key, data[key]));
    resolve(formData);
  });
};



export const showMessage = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

export const showError = (errores) => {
  for (var k in errores) {
    let r = errores[k];
    let mensaje = "";
    r.forEach((element) => {
      mensaje = `${mensaje} ${element}`;
    });
    return `${k} : ${mensaje}`;
  }
};

export function Datapizza (){
  return [
    {
      "image" : "https://cocina-casera.com/wp-content/uploads/2011/10/masa-pizza-casera.jpg",
      "name" : "Valentine's Special Brunch",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 59900,
    },
    {
      "image" : "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg",
      "name" : "Brunch Is Love",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 50000,
    },
    {
      "image" : "https://cocina-casera.com/wp-content/uploads/2011/10/masa-pizza-casera.jpg",
      "name" : "Valentine's Special Brunch Valentine's Special Brunch",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 59900,
    },
    {
      "image" : "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg",
      "name" : "Brunch Is Love",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 50000,
    },
    {
      "image" : "https://cocina-casera.com/wp-content/uploads/2011/10/masa-pizza-casera.jpg",
      "name" : "Valentine's Special Brunch",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 59900,
    },
    {
      "image" : "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg",
      "name" : "Brunch Is Love",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 50000,
    },
    {
      "image" : "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg",
      "name" : "Brunch Is Love",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 50000,
    },
    {
      "image" : "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg",
      "name" : "Brunch Is Love",
      "description" : "Valentine's brunch incluye pancakes a elección, egg & bacon muffin, porción d",
      "price" : 50000,
    },
  ];
}


export function DataSales (){
  return [
    {
      "image" : "http://assets.stickpng.com/thumbs/585e4bc4cb11b227491c3395.png",
      "client" : "Andrea Menesesssssss",
      "description" : "Pizza X3",
      "price" : 59900,
    },
    {
      "image" : "https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png",
      "client" : "Damian Torres",
      "description" : "Pizza X4",
      "price" : 30000,
    },
  
    {
      "image" : "http://assets.stickpng.com/thumbs/585e4bc4cb11b227491c3395.png",
      "client" : "Andrea Menesesssssss",
      "description" : "Pizza X3",
      "price" : 59900,
    },
    {
      "image" : "https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png",
      "client" : "Damian Torres",
      "description" : "Pizza X4",
      "price" : 30000,
    },
  
    {
      "image" : "http://assets.stickpng.com/thumbs/585e4bc4cb11b227491c3395.png",
      "client" : "Andrea Menesesssssss",
      "description" : "Pizza X3",
      "price" : 59900,
    },
    {
      "image" : "https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png",
      "client" : "Damian Torres",
      "description" : "Pizza X4",
      "price" : 30000,
    },
  
    {
      "image" : "http://assets.stickpng.com/thumbs/585e4bc4cb11b227491c3395.png",
      "client" : "Andrea Menesesssssss",
      "description" : "Pizza X3",
      "price" : 59900,
    },
    {
      "image" : "https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png",
      "client" : "Damian Torres",
      "description" : "Pizza X4",
      "price" : 30000,
    },
  
  ];
}

export function DataIngredients (){
  return [
    {
      "code" : 1,
      "image" : queso,
      "name" : "Queso",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 2,
      "image" : jamon,
      "name" : "Jamón",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
  
    {
      "code" : 3,
      "image" : champinon,
      "name" : "Champiñones",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 4,
      "image" :salchicha,
      "name" : "Salchichas",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
  
    {
      "code" : 5,
      "image" : atun,
      "name" : "Atún",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
  
    {
      "code" : 6,
      "image" : pollo,
      "name" : "Pollo",
      "description" : "Disponible",
      "price" : 5000,
      "check" : false
    },
    {
      "code" : 7,
      "image" : pimiento,
      "name" : "Pimientos",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 8,
      "image" : salami,
      "name" : "Salami",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 9,
      "image" : pina,
      "name" : "Piña",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 10,
      "image" : carne,
      "name" : "Carne",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 11,
      "image" : chorizo,
      "name" : "Chorizo",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 12,
      "image" : cebolla,
      "name" : "Cebolla",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 13,
      "image" : tomate,
      "name" : "Tomate",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 14,
      "image" : tocino,
      "name" : "Tocino",
      "description" : "Disponible",
      "price" : 3000,
      "check" : false
    },
    {
      "code" : 15,
      "image" : pepperoni,
      "name" : "Pepperoni",
      "description" : "Disponible",
      "price" : 4500,
      "check" : false
    },
  
  ];
}

export const isCheck = (url, backgroundColor = "#FFF1D1", color = "#6D7278") => {
  let currentUrl = window.location.pathname.split("/")[1];
  return (url == currentUrl ? { backgroundColor, color } : {});
};

export const moveContentScroll = (classN) =>{
  const ele = document.getElementById(classN);
  ele.style.cursor = "grab";

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener("mousedown", mouseDownHandler);
};