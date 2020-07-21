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
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";

export const LandingView = (props) => (
  <Scroll.Element>
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
          {/* <Star
          size={{ width: "1px", height: "1px" }}
          starFrequency={1000}
          animationSpeed={300}
        />
        <Star
          size={{ width: "2px", height: "2px" }}
          starFrequency={500}
          animationSpeed={200}
        />
        <Star
          size={{ width: "3px", height: "3px" }}
          starFrequency={150}
          animationSpeed={100}
        /> */}
        </Main>
        <PortfolioView />
        <Fade>
          <AboutView />
        </Fade>
        <ContactView />
        <Footer>
          <a href="https://www.elyaspopal.com/">
            Copyright © 2020 Elyas Popal Design Ltd
          </a>
          . All Rights Reserved.
        </Footer>
      </Uniform>
    </div>
  </Scroll.Element>
);
