import React from "react";
import { ListItem, Logo } from "./styles";
import * as Scroll from "react-scroll";

export const NavLink = ({ section, ...props }) => (
  <Scroll.Link to={section} smooth duration={900} {...props}>
    {section !== "home" ? (
      <ListItem>{section}</ListItem>
    ) : (
      <Logo>
        <img src={require("./logo.png")} width="70" alt="hole" />
      </Logo>
    )}
  </Scroll.Link>
);
