import React from "react";
import { useContext } from "react";
import { AlertContext, UserContext, CartContext } from "./Context";

function WithProvider(provider) {
  function HOC(IncomingComponent) {
    function OutgoingComponent(props) {
      const providerdata = useContext(provider);
      return (
        <IncomingComponent {...props} {...providerdata}></IncomingComponent>
      );
    }
    return OutgoingComponent;
  }
  return HOC;
}
export const WithUser = WithProvider(UserContext);

export const WithAlert = WithProvider(AlertContext);
export const WithCart = WithProvider(CartContext);
