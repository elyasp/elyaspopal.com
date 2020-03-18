import React from "react";
import { Outer, Photo, Paragraph } from "./styles";
import * as Scroll from "react-scroll";

export const AboutView = props => {
  return (
    <Scroll.Element name="about">
      <Outer>
        <Paragraph>
          <h1>Hello</h1>
          I'm Elyas, a software developer based in Barcelona, Spain. A more
          elaborated description of myself will follow shortly as I am currently
          under construction
        </Paragraph>

        <Photo src="/images/coralprofile.jpg" alt="profile" />
      </Outer>
    </Scroll.Element>
  );
};
