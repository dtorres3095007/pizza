import React from "react";
import Home from "./pages/Home";
import MyPizza from "./pages/MyPizza";
import "./assets/styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<MyPizza />} />
        <Route path="ingredientes" element={()=> <h1>Hola</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
