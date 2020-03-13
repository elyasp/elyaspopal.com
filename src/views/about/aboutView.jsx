import React from "react";
import { Outer, Photo, Paragraph } from "./styles";
import * as Scroll from "react-scroll";

export const AboutView = props => {
  return (
    <Scroll.Element name="about">
      <Outer>
        <Paragraph>
          <h1>Hello</h1>
          I'm Elyas, a software developer based in Barcelona, Spain. I find it
          intriguing how fast society has been shaped and continues to be, by
          the influence of human engineering. A few years ago if someone were to
          have claimed that cars would become autonomous, people would have
          doubted them. Now we are at a stage where nearly anything is possible
          and this is due to the relentless thirst of humanities'
          <br />
          <br />
          Technological advancements take place around us everyday, from the
          evolution of bulky antenna phones into smart phones to the
          introduction of smart virtual assistants such as Apple’s Siri, Google
          Now and Windows’ Cortana. I am inspired by the fact that computer
          science has become a fundamental element in the development of a
          better, smarter future for our world and my goal is to be part of that
          development process.
        </Paragraph>

        <Photo src="/images/coralprofile.jpg" alt="profile" />
      </Outer>
    </Scroll.Element>
  );
};
