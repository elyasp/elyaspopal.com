import React from "react";
import { MainPortfolio, Title, Work, Icon } from "./styles";
import * as Scroll from "react-scroll";
import { WorkItem, RevWorkItem, WorkItemLong } from "../../components";
export const PortfolioView = () => (
  <Scroll.Element name="portfolio">
    <MainPortfolio>
      <WorkItem logo={require("./quasarc.png")} title="quasarc" />
      <RevWorkItem logo={require("./omnilect.jpg")} title="omnilect" />
      <WorkItemLong logo={require("./karmafy.png")} title="karmafy" />
    </MainPortfolio>
  </Scroll.Element>
);
