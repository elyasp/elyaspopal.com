import React from "react";
import {
  Star,
  Main,
  Name,
  Intro,
  Title,
  Role,
  Span,
  Footer,
  Uniform,
} from "./styles";
import { PortfolioView, AboutView, ContactView } from "../index";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

export const LandingView = (props) => (
  <Scroll.Element name="home">
    <div name="home">
      <Uniform>
        <Main>
          <Intro>
            <Title>
              <Span></Span>
              <Name>
                Elyas Popal<span></span>
              </Name>
            </Title>

            <Role>
              <div></div>
              <p>FULLSTACK DEVELOPER</p>
            </Role>
          </Intro>
        </Main>
        <Star
          size={{ width: "1px", height: "1px" }}
          starFrequency={1000}
          animationSpeed={99}
        />
        <Star
          size={{ width: "2px", height: "2px" }}
          starFrequency={500}
          animationSpeed={66}
        />
        <Star
          size={{ width: "3px", height: "3px" }}
          starFrequency={150}
          animationSpeed={33}
        />
        <PortfolioView />
        <Fade right>
          <AboutView />
        </Fade>
        <ContactView />
        <Footer>
          <a href="https://www.elyaspopal.com/">© 2020 Elyas Popal Design. </a>
          <a
            href="https://www.youtube.com/watch?v=q2TNr18oJGk"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Random Music Track
          </a>
        </Footer>
      </Uniform>
    </div>
  </Scroll.Element>
);
