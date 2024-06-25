import { Route, Routes } from "react-router-dom";
import Home from "./assets/views/Home";
import Detalle from "./assets/views/Detalle.jsx";
import Carrito from "./assets/views/Carrito";
import "./App.css";

function App() {
  return (
    <div className="todo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pizzas/:id" element={<Detalle />} />
        <Route path="Carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
