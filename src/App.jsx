import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/officeShop" element={<Home />} />
      <Route path="/officeShop/Shop" element={<Shop />} />
      <Route path="/officeShop/Cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
