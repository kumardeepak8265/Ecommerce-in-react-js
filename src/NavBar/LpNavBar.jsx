import React from "react";
import { Link } from "react-router-dom";
import { WithUser } from "../Providers/WithProvider";

function LpNavBar({ user, setUser }) {
  function onhandleUserRemove() {
    setUser(undefined);
    localStorage.removeItem("token");
  }
  return (
    <div className="  flex  sm:flex-row p-4  sm:space-x-8 ">
      <Link to="/home">Home</Link>
      <Link to="/">ALL PRODUCTS</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
      {!user && <Link to="/login">LOGIN</Link>}
      {user && <button onClick={onhandleUserRemove}>LOGOUT</button>}
    </div>
  );
}
export default WithUser(LpNavBar);
