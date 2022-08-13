import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import "./responsive.css";

import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />}></Route>
    </Routes>
  );
};

export default App;
