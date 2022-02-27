import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import MyPizza from "./pages/MyPizza";
import "./assets/styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizza" element={<MyPizza />} />
          <Route path="ingredientes" element={()=> <h1>Hola</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
