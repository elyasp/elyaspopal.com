import React, { Fragment } from "react";
import { LandingView } from "./views";
import { Navbar, HamburgerNavbar } from "./components";
require("dotenv").config();

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <HamburgerNavbar />
      <LandingView />
    </Fragment>
  );
};

export default App;
