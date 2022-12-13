import React from "react";
import Product from "./Product";
function ProductList({ item }) {
  return (
    <div>
      <div className=" flex flex-wrap gap-2 justify-center md:grid grid-cols-3 ">
        {item.map(function (data) {
          return (
            <Product
              title={data.title}
              Price={data.price}
              img={data.thumbnail}
              key={data.id}
              id={data.id}
              rating={data.rating}
              category={data.category}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
