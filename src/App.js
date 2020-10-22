import React from "react";
import HomePage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <HomePage />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
