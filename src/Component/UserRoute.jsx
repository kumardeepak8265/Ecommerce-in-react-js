import React from "react";
import { Navigate } from "react-router-dom";

import { WithUser } from "../Providers/WithProvider";

function UserRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default WithUser(UserRoute);
