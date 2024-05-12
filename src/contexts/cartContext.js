import { createContext, useState } from "react";
const CartContext = createContext();
export const ContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});
  const addProductToCart = (product) => {
    const newCart = cartData;
    if (product.id in newCart) {
      newCart[product.id].count++;
    } else {
      newCart[product.id] = {
        count: 1,
        info: product,
      };
    }
    setCartData({ ...newCart });
  };
  const removeFromCart = (product) => {
    const newCart = cartData;
    if (product.id in newCart) {
      if (newCart[product.id].count === 1) {
        delete newCart[product.id];
      } else {
        newCart[product.id].count--;
      }
      setCartData({ ...newCart });
    }
  };
  return (
    <CartContext.Provider
      value={{ cartData, addProductToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
