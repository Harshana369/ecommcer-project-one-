import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import { PrivateRoute } from "./PrivateRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>

        <Route path="/products">
          <Route path=":productId" element={<SingleProduct />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<CartScreen />} />

        <Route path="/cart">
          <Route path=":productId" element={<CartScreen />} />
        </Route>

        <Route path="/login">
          <Route
            path=":shipping"
            element={
              <PrivateRoute>
                <ShippingScreen />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/placeorder"
          element={
            <PrivateRoute>
              <PlaceOrderScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/order/:id"
          element={
            <PrivateRoute>
              <OrderScreen />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
