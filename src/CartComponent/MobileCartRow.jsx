import React from "react";
import { ImCross } from "react-icons/im";

function MobileCartRow({ product, quantity, onQuantityChange, onRemove }) {
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
  }

  return (
    <div className="flex flex-col">
      <div className="  border border-gray-400 p-4  flex justify-center">
        <img className="object-cover w-20 " src={product.thumbnail} />
      </div>
      <h1 className=" border border-gray-400 p-4 text-red-700">
        <span className="text-black font-bold ">Product: </span>
        {product.title}
      </h1>
      <div className=" border border-gray-400 p-4 flex justify-between">
        <h1 className="text-gray-800 ">Price:</h1>
        <h1 className="text-gray-800 ">${product.price}</h1>
      </div>

      <div className=" border border-gray-400 p-4 flex justify-between">
        <h1 className="text-gray-800 ">Quantity:</h1>
        <input
          type="number"
          className="w-12 p-1  border border-gray-300 rounded-md"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <span className="flex justify-end border border-gray-400 p-4 ">
        <ImCross onClick={handleCrossClick} />
      </span>
      <div className=" border border-gray-400 p-4 flex justify-between">
        <h1 className="text-gray-800 ">Subtotal:</h1>
        <span>${product.price * quantity}</span>
      </div>
    </div>
  );
}

export default MobileCartRow;
