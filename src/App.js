import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Containers
import Home from "./containers/Home";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

function App() {
  const [searchItem, setSearchItem] = useState("");
  // Star Wars ID by default
  const [movieId, setMovieId] = useState(11);

  return (
    <Router>
      <Header
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        setMovieId={setMovieId}
      />
      <Switch>
        <Route path="/">
          <Home movieId={movieId} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
