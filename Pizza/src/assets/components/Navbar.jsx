import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/">
        <h3>Pizzería Mamma Mia!</h3>
      </NavLink>
      <NavLink to="/Carrito">
        <p>a</p>
      </NavLink>
    </div>
  );
}
