import React from "react";
import "./App.css";

import ArticleListing from "./containers/ArticleListing";

import Article from "./containers/Article";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // Returns JSX (HTML)
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* can pass prop data to id */}
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <ArticleListing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
