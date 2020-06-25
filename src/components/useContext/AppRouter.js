import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
