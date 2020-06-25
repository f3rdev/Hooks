import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <>
      <h1>AboutScreen</h1>
      <pre className="text-warning">{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-danger" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};

export default AboutScreen;
