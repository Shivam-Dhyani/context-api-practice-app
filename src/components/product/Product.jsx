import React, { useContext } from "react";
import { CartCreateContext } from "../../contexts/CartContext";

const Product = (props) => {
  const { productObject } = props;

  // Using Context-API
  const { cart, setCart } = useContext(CartCreateContext);
  return (
    <div className="products">
      <img src={productObject.image} alt={productObject.name} />
      <div className="productDescription">
        <span style={{ fontWeight: 700 }}>{productObject.name}</span>
        <span>{" ₹ " + productObject.price.substring(0, 3)}</span>
      </div>
      {/* Checking in the 'cart' array, does the current 'productObject' exist */}
      {cart.includes(productObject) ? (
        <button
          className="remove"
          // On the click of the button, in the 'cart' array, the current 'productObject',
          // is removed.
          onClick={() =>
            setCart(cart.filter((product) => product.id !== productObject.id))
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          // On the click of the button, in the 'cart' array, the current 'productObject',
          // is added.
          onClick={() => setCart([...cart, productObject])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
