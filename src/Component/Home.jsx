import React from "react";

function Home() {
  return (
    <div className="m-2 ">
      <div className="flex flex-col sm:flex-row ">
        <div className="sm:w-1/2 flex flex-col justify-center space-y-8 mb-4 p-4 items-center sm:items-start">
          <h1 className="font-bold">Best Quality Products</h1>
          <h1 className="text-6xl font-bold">We Print What You Want!</h1>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sapien
          </p>
          <button className="px-4 bg-red-400 py-2 rounded-md w-64 ">
            GET STARTED
          </button>
        </div>
        <div className="sm:w-1/2">
          <img src="https://trycasuals.com/wp-content/uploads/2019/06/image26-free-1.png" />
        </div>
      </div>

      <div className=" flex flex-col">
        <div className="flex justify-between gap-8 my-20 mx-10 flex-col sm:flex-row ">
          <div className="flex flex-col items-center space-y-4 border-2 border-gray-300">
            <img src="https://trycasuals.com/wp-content/uploads/2020/01/image-01-1.jpg" />
            <h1 className="text-gray-600">Most Loved Designs</h1>
            <h1 className="text-2xl">Customize Your T-Shirts</h1>
          </div>

          <div className="flex flex-col items-center space-y-4 border-2 border-gray-300">
            <h1 className="text-gray-600">Design of the Week</h1>
            <h1 className="text-2xl">Rubber Print Your T-Shirt</h1>
            <img src="https://trycasuals.com/wp-content/uploads/2020/01/image-03-1.jpg" />
          </div>

          <div className="flex flex-col items-center space-y-4 border-2 border-gray-300">
            <img src="https://trycasuals.com/wp-content/uploads/2020/01/image-02-1.jpg" />
            <h1 className="text-gray-600">New T-shirt Edition</h1>
            <h1 className="text-2xl">Customize Plain Colors</h1>
          </div>
        </div>
        <h1 className="text-center text-4xl font-bold">
          Our Featured Products
        </h1>
      </div>
    </div>
  );
}
export default Home;
