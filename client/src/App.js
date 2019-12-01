// ------ Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WorklistPage from "./pages/Worklist";
import NoMatch from "./pages/NoMatch";

// ------ App
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={WorklistPage} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// ------ Export
export default App;
