import React from "react";
import { Link } from "react-router-dom";
import { BiCaretUp } from "react-icons/bi";
import { WithUser } from "../Providers/WithProvider";
function MbNavBar({ MobileViesUp, user, setUser }) {
  console.log("user", user);
  function onhandleUserRemove() {
    setUser(undefined);
    localStorage.removeItem("token");
  }
  return (
    <div className=" w-full flex flex-col space-y-4 md:hidden mx-2">
      <Link to="/home">Home</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/">ALL PRODUCTS</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/about">ABOUT</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/contact">CONTACT</Link>
      <hr className="sm:hidden"></hr>
      {!user && <Link to="/login">LOGIN</Link>}
      {user && <button onClick={onhandleUserRemove}>LOGOUT</button>}
      <hr className="sm:hidden"></hr>
      <BiCaretUp onClick={MobileViesUp} className="text-3xl self-center" />
    </div>
  );
}

export default WithUser(MbNavBar);
