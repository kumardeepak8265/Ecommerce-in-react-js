import React from "react";

import { Navigate } from "react-router-dom";
import { WithUser } from "../Providers/WithProvider";
function AuthRouthe({ children, user }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default WithUser(AuthRouthe);
