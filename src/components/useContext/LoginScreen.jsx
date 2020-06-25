import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginScreen</h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            username: "Kash",
            email: "me@fernando.gg",
          })
        }
      >
        Login
      </button>
    </>
  );
};

export default LoginScreen;
