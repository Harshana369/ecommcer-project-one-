import React from "react";
import "./App.css";
import "./responsive.css";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
