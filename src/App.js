import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Containers
import Home from "./containers/Home";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <Router>
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
