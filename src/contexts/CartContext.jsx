import { createContext, useState } from "react";

// 'createContext()' is creating a context which can be mad eaccesible for every
// componenet in the app
export const CartCreateContext = createContext();

const CartContext = (props) => {
  const { children } = props;
  const [cart, setCart] = useState([]);

  // Making 'cart' State Accesible for every componemet using context-api
  return (
    <CartCreateContext.Provider value={{ cart, setCart }}>
      {children}
    </CartCreateContext.Provider>
  );
};

export default CartContext;
