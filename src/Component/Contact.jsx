import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="flex items-center justify-center space-y-4 flex-col bg-white w-80 m-auto p-8 ">
      <h1 className="text-4xl text-bold">Say Hello</h1>
      <p>
        CodeYogi offers a totally free 6 months long software engineering
        training program that guarantees job to youth from low-income families.
      </p>
      <h1>ADDREDD =IT Park, Dehradun</h1>

      <Link className="text-indigo-600" to="/">
        Home
      </Link>
    </div>
  );
}
export default Contact;
