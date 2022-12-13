import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./Component/Alert";
import AuthRouthe from "./Component/AuthRouthe";
import Login from "./Component/Login";
import ProductDetail from "./Component/ProductDetail";
import ProductPage from "./Component/ProductPage";
import Signup from "./Component/Signup";
import UserRoute from "./Component/UserRoute";
import Footer from "./Component/Footer";
import NavBar from "./NavBar/NavBar";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import CartProvider from "./Providers/CartProvider";
import CartPage from "./CartComponent/CartPage";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="m-2">
      <UserProvider>
        <AlertProvider>
          <CartProvider>
            <NavBar></NavBar>
            <Alert></Alert>

            <div className="h-screen overflow-scroll bg-gray-200 mx-auto sm:py-20 sm:px-10 ">
              <Routes>
                <Route
                  index
                  element={<UserRoute>{<ProductPage></ProductPage>}</UserRoute>}
                />
                <Route
                  path="/ProductDetail/:id"
                  element={<ProductDetail></ProductDetail>}
                />
                <Route path="/cartpage" element={<CartPage></CartPage>} />
                <Route
                  path="/login"
                  element={
                    <AuthRouthe>
                      <Login></Login>
                    </AuthRouthe>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <AuthRouthe>
                      <Signup></Signup>
                    </AuthRouthe>
                  }
                />

                <Route path="/home" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/contact" element={<Contact></Contact>} />
              </Routes>
            </div>

            <Footer></Footer>
          </CartProvider>
        </AlertProvider>
      </UserProvider>
    </div>
  );
}

export default App;
