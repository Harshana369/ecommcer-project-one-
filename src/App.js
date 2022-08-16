import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />}></Route>
    </Routes>
  );
};

export default App;
