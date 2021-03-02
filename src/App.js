import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/index";
import Contact from "./pages/contact";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
    <div>
      <NavBar/>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
  );
}

export default App;
