import React, { FC, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

type UserHashProviderProps = {
  children: React.ReactNode;
};

const UserHashProvider: FC<UserHashProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const userHash = Cookies.get("userHash");

    if (userHash) {
      fetch("", {
        method: "POST",
        body: JSON.stringify({
          userHash: userHash,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Request error:", error);
        });
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default UserHashProvider;
