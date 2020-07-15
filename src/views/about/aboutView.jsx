import React from "react";
import { Outer, Photo, Paragraph } from "./styles";
import * as Scroll from "react-scroll";

export const AboutView = () => {
  return (
    <Scroll.Element name="about">
      <Outer>
        <Paragraph>
          <h1>Hello</h1>
          I'm Elyas, a software developer from the Netherlands. <br />
          Having a multitude of professional backgrounds, from avionics,
          aerospace engineering and sales, to investor, insurance advisor,
          emergency coordinator and finally, developer — I always seek to
          improve myself omnidirectionally, because I believe that real growth
          is realized by connecting the dots and expanding perceptions.
          <br />
          <br />
          As a web developer, I enjoy using my obsessive attention to detail, my
          ever-present love for creating things, and my growth-driven work ethic
          to literally change the world. That's why I’m excited to make a big
          impact in this field at a highly-motivated, pioneering environment.
          <br />
          <br />
          Can you find your team, company, project or idea sharing the same
          vision? Don't hesitate to contact me below and let's bundle our
          powers!
        </Paragraph>

        <Photo src="/images/coralprofile.jpg" alt="profile" />
      </Outer>
    </Scroll.Element>
  );
};
