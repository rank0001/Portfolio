import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Index";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";
import Particles from "react-particles-js";
import Error from "./components/Error";
import Blogs from "./components/Blogs";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blogs" component={Blogs}/>
        <Route exact path='/about' component={About}/>
        <Route exact path="*" component={Error} />
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
