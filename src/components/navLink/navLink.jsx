import React from "react";
import { ListItem } from "./styles";
import * as Scroll from "react-scroll";

export const NavLink = ({ section, ...props }) => (
  <Scroll.Link to={section} smooth duration={900} {...props}>
    <ListItem>{section}</ListItem>
  </Scroll.Link>
);
