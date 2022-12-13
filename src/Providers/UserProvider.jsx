import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "./Context";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [signuptoken, setSignupToken] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((r) => setUser(r.data))
        .catch(() => localStorage.removeItem("token"));
    }
  }, []);
  return (
    <div>
      <UserContext.Provider
        value={{
          isloggedIn: !!token,
          user,
          setUser,
          signuptoken,
          setSignupToken,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;
