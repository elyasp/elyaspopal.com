import React from "react";
import {
  MainPortfolio,
  Title,
  Work,
  Icon,
  Text,
  Oppose,
  Description,
  Tech
} from "./styles";
import * as Scroll from "react-scroll";
import Zoom from "react-reveal/Zoom";

export const RevWorkItem = props => (
  <Scroll.Element name="portfolio">
    <MainPortfolio>
      <Work>
        <Zoom>
          <Icon>
            <img src={props.logo} alt="kok" />
          </Icon>
        </Zoom>
        <Description>
          <Text>
            <Title>{props.title}</Title>
            <div>
              Dinner or supper? Soda or coke? Hand or parking brake...? Find out
              with Omnilect, a multi-language research tool used to conduct
              surveys on language and pronunciation differences around the
              world. Create a survey and get real-time geographical data based
              on results.
            </div>
          </Text>

          <Tech>
            <button>Handlebars</button>
            <button>Express</button>
            <button>Node.js</button>
            <button>mongoDB</button>
            <button>SCSS</button>
            <button>Agile</button>
          </Tech>
        </Description>
      </Work>
    </MainPortfolio>
  </Scroll.Element>
);
