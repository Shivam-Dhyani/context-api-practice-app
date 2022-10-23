import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCreateContext } from "../../contexts/CartContext";
import "./Header.css";

const Header = () => {
  // Using Context-API
  const { cart } = useContext(CartCreateContext);
  return (
    <div>
      <span className="header">React Context API App</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart{cart.length ? "(" + cart.length + ")" : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
