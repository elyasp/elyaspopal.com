import React, { Fragment } from "react";
import { LandingView } from "./views";
import { Navbar, HamburgerNavbar, Theme } from "./components";
require("dotenv").config();

const App = () => {
  return (
    <Theme>
      <Fragment>
        <Navbar />
        <HamburgerNavbar />
        <LandingView />
      </Fragment>
    </Theme>
  );
};

export default App;
