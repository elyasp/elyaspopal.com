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
          Having a multitude of professional backgrounds, from avionic
          engineering and sales, to investor, insurance advisor, emergency
          coordinator and finally, developer — I always seek to improve myself
          omnidirectionally, because I believe that real growth is realized by
          connecting the dots and forming
          <br />
          <br />
          As a web developer, I enjoy using my obsessive attention to detail, my
          unequivocal love for creating things, and my growth-driven work ethic
          to literally change the world. That's why I’m excited to make a big
          impact at a high-growth, pioneering company.
          <br />
          <br />
          If i'm not busy coding, you can find me on the way of the never-ending
          path of self-improvement, be it walking, cycling, driving or flying.
        </Paragraph>

        <Photo src="/images/coralprofile.jpg" alt="profile" />
      </Outer>
    </Scroll.Element>
  );
};
