import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../../components/product/Product";
import { CartCreateContext } from "../../contexts/CartContext";

const Cart = () => {
  // Using Context-API
  const { cart } = useContext(CartCreateContext);

  const [totalPrice, setTotalPrice] = useState(0);

  // It will render, whenever the 'cart' state changes
  useEffect(() => {
    setTotalPrice(
      // reduce((total, currentValue) => total+currentValue, intialValueOfTotal)
      // It will return single value 'total', after performing opeartion on
      // every element in the array.
      cart.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.price),
        0
      )
    );
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: "30" }}>Cart</span>
      <br />
      <span style={{ fontSize: "30" }}>{"Total : ₹ " + totalPrice}</span>
      <div className="productContainer">
        {cart.map((productObject) => {
          return <Product productObject={productObject} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
