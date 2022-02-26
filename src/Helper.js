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


export const moveContentScroll = ( classN) =>{
  const ele = document.getElementById( classN);
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