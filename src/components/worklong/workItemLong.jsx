import React from "react";
import {
  MainPortfolio,
  Title,
  Work,
  Text,
  IconLong,
  Description,
  Tech
} from "./styles";
import * as Scroll from "react-scroll";
import Zoom from "react-reveal/Zoom";

export const WorkItemLong = props => (
  <Scroll.Element name="portfolio">
    <MainPortfolio>
      <Work>
        <Description>
          <Title>{props.title}</Title>
          <Text>
            The lost and found app that is designed to make lives easier, and
            losing your keys more difficult. With the aim of making gestures of
            kindness more accessible and tackling the issue of lost belongings
            never being reunited because of unnoticed flyers or ineffective
            police reports. With features including map based searching,
            tracking personal items and instant mailing.
          </Text>
          <Tech>
            <button>React</button>
            <button>Node</button>
            <button>Express</button>
            <button>axios</button>
            <button>MongoDB</button>
            <button>SPA</button>
            <button>styled-components</button>
            <button>Responsive design</button>
          </Tech>
        </Description>

        <Zoom>
          <IconLong>
            <a
              href="http://karmafy.life/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={props.logo} alt="kok" />
            </a>
          </IconLong>
        </Zoom>
      </Work>
    </MainPortfolio>
  </Scroll.Element>
);
