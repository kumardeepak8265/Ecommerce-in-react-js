import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
function Product({ title, img, Price, id, category }) {
  return (
    <div className="m-2  p-4 max-w-xl border border-gray-200" key={id}>
      <Link to={"/ProductDetail/" + id}>
        <div className="w-full aspect-square">
          <img className="w-full h-full object-cover" src={img}></img>
        </div>
        <h1 className="text-gray-500 ">{category}</h1>
        <h1 className="text-bold ">{title}</h1>
        <span className="flex">
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
        </span>
        <h1 className="mb-2">$ {Price}</h1>
      </Link>
    </div>
  );
}
export default Product;
