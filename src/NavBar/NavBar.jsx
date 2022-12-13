import { useState } from "react";
import LpNavBar from "./LpNavBar";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import MbNavBar from "./MbNavBar";
import { WithCart } from "../Providers/WithProvider";

function NavBar({ cartCount }) {
  const [manuControl, setManuControl] = useState(true);
  const handleManuControl = () => setManuControl(!manuControl);
  return (
    <div className="top-0 sticky bg-white  sm:px-10">
      <div className="flex justify-between ">
        <div className=" w-20">
          <img
            className=" h-16 w-full"
            src="https://cdn.discordapp.com/attachments/937199046211305514/1009111634805002351/croppedImage_1660661295402.png"
          />
        </div>

        <div className=" h-16 flex space-x-4 items-center">
          <div className="hidden md:block  ">
            <LpNavBar></LpNavBar>
          </div>
          {manuControl && (
            <GiHamburgerMenu
              className=" text-3xl md:hidden "
              onClick={handleManuControl}
            />
          )}
          <Link to="/cartpage">
            <div className=" flex flex-col items-center mr-4">
              <span>{cartCount}</span>
              <FiShoppingCart className=" text-4xl hover:bg-red-200  " />
            </div>
          </Link>
        </div>
      </div>
      {!manuControl && <MbNavBar MobileViesUp={handleManuControl}></MbNavBar>}
    </div>
  );
}
export default WithCart(NavBar);
