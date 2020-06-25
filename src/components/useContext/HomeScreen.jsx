import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>HomeScreen</h1>
      <pre className="text-warning">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

export default HomeScreen;
