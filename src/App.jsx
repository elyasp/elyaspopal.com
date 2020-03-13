import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingView, AboutView, ContactView, PortfolioView } from "./views";
import { Navbar, HamburgerNavbar } from "./components";

const App = () => {
  return (
    <Fragment>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={LandingView} />
          <Route path="/contact" exact component={ContactView} />
          <Route path="/about" exact component={AboutView} />
          <Route path="/portfolio" exact component={PortfolioView} />
        </Switch>
      </Router> */}
      <Navbar />
      <HamburgerNavbar />
      <LandingView />
    </Fragment>
  );
};

export default App;
