import React from "react";
import "./App.css";
import "./responsive.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./screens/SingleProduct";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />}></Route>
      <Route path="/products/:id" component={SingleProduct} />
      {/* <Route path="/products/:id" element={<SingleProduct />}></Route> */}
    </Routes>
  );
};

export default App;
