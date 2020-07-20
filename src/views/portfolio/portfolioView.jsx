import React from "react";
import {
  MainPortfolio,
  Title,
  Work,
  Icon,
  Project,
  Projects,
  Logo,
} from "./styles";
import * as Scroll from "react-scroll";
import { WorkItem, RevWorkItem, WorkItemLong } from "../../components";
export const PortfolioView = () => (
  <Scroll.Element name="portfolio">
    <MainPortfolio>
      <Projects>
        <Project>
          <Logo img={"/images/quasarc.png"}>
            {" "}
            <div>
              A stress challenging and soothing browser game. The quasar is
              pulling gravitational waves towards the center - move your ship
              around the quasar and maneuver through gravity.
              <br />
              <br />
              How many waves will you survive?
            </div>
          </Logo>

          {/* <img src="/images/quasarc.png" alt="quasarc-logo" /> */}
        </Project>
        <Project>
          <Logo img={"/images/karmafy.png"}></Logo>
          <div></div>
          {/* <img src="/images/karmafy.png" alt="karmafy-logo" /> */}
        </Project>
        <Project>
          <Logo img={"/images/omnilect.png"}></Logo>
          <div></div>
          {/* <img src="/images/omnilect.png" alt="omnilect-logo" /> */}
        </Project>
        <Project>
          <Logo img={"/images/abb.png"}></Logo>
          <div></div>
          {/* <img src="/images/abb.png" alt="abb-logo" /> */}
        </Project>
      </Projects>
      {/* <WorkItem logo={require("./quasarc.png")} title="quasarc" />
      <RevWorkItem logo={require("./omnilect.jpg")} title="omnilect" />
      <WorkItemLong logo={require("./karmafy.png")} title="karmafy" /> */}
    </MainPortfolio>
  </Scroll.Element>
);
