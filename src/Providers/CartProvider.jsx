import { useEffect, useState } from "react";
import { getCart, getProductByIds, saveCart } from "../Component/Api";
import { CartContext } from "./Context";
import { WithUser } from "./WithProvider";

function CartProvider({ isloggedIn, children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (isloggedIn) {
      getCart().then((savedCart) => setCart(savedCart));
    } else {
      const savedData = JSON.parse(localStorage.getItem("cart-Item") || "{}");
      quantityMapToCart(savedData);
    }
  }, [isloggedIn]);
  const quantityMapToCart = (quantityMap) => {
    getProductByIds(Object.keys(quantityMap)).then((products) => {
      const CartData = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(CartData);
    });
  };
  const addToCart = (productid, count) => {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    const oldCount = quantityMap[productid] || 0;
    const newCount = { ...quantityMap, [productid]: oldCount + count };
    updateCart(newCount);
  };

  const updateCart = (quantityMap) => {
    if (isloggedIn) {
      saveCart(quantityMap).then(() => {
        quantityMapToCart(quantityMap);
      });
    } else {
      const localStoragedata = JSON.stringify(newCount);
      localStorage.setItem("cart-Item", localStoragedata);
      quantityMapToCart(newCount);
    }
  };

  const cartCount = cart.reduce(function (previos, current) {
    return previos + current.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}
export default WithUser(CartProvider);
