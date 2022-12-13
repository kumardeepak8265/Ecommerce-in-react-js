import React, { useState } from "react";
import { useEffect } from "react";
import { WithCart } from "../Providers/WithProvider";
import CartRow from "./CartRow";
import MobileCartRow from "./MobileCartRow";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState({});

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({
        ...m,
        [cartItem.product.id]: cartItem.quantity,
      }),
      {}
    );

  useEffect(() => {
    setQuantityMap(cartToQuantityMap);
  }, [cart]);
  const onhandleQuantityChange = (productId, newValue) => {
    const newLocalCart = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newLocalCart);
  };
  const onhandleUpdateCart = () => updateCart(quantityMap);
  const onhandleRemoveCart = (produceId) => {
    const newQuantityMap = cartToQuantityMap();
    newQuantityMap[produceId];
    delete newQuantityMap[produceId];
    updateCart(newQuantityMap);
  };

  return (
    <div>
      <div className="hidden md:block bg-white">
        <div className="sm:flex   sm:px-4 sm:py-2 sm:space-x-4 border border-gray-300">
          <span className="ml-28 grow">Product</span>
          <span className="w-20">Price</span>
          <span className="w-32">Quantity</span>
          <span className="w-20">Subtotal</span>
        </div>
        {cart.map((cartItem) => (
          <CartRow
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
            onQuantityChange={onhandleQuantityChange}
            onRemove={onhandleRemoveCart}
          />
        ))}
        <div className="flex justify-end px-4 py-2 border border-gray-300">
          <button
            onClick={onhandleUpdateCart}
            className="bg-indigo-600 p-2 rounded-md text-white hover:bg-indigo-800"
          >
            Update Cart
          </button>
        </div>
      </div>
      <div className=" p-2 m-4 mt-4 md:hidden bg-white">
        {cart.map((cartItem) => (
          <MobileCartRow
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
            onQuantityChange={onhandleQuantityChange}
            onRemove={onhandleRemoveCart}
          />
        ))}
        <div className="flex justify-end px-4 py-2 border border-gray-300 ">
          <button
            className=" p-2 font-bold text-white bg-indigo-600 hover:bg-indigo-800 rounded-md"
            onClick={onhandleUpdateCart}
          >
            Update Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default WithCart(CartList);
