import React from "react";
import {
  MainPortfolio,
  Title,
  Work,
  Icon,
  Text,
  Description,
  Tech
} from "./styles";
import * as Scroll from "react-scroll";
import Zoom from "react-reveal/Zoom";

export const WorkItem = props => (
  <Scroll.Element name="portfolio">
    <MainPortfolio>
      <Work>
        <Description>
          <Title>{props.title}</Title>
          <Text>
            A stress challenging and soothing browser game. The quasar is
            pulling gravitational waves towards the center - move your ship
            around the quasar and maneuver through gravity.
            <br />
            <br />
            How many waves will you survive?
          </Text>
          <Tech>
            <div>
              <button>HTML Canvas</button>
              <button>Vanilla JS</button>
              <button>CSS</button>
              <button>OOP</button>
            </div>
          </Tech>
        </Description>

        <Zoom>
          <Icon>
            <img src={props.logo} alt="kok" />
          </Icon>
        </Zoom>
      </Work>
    </MainPortfolio>
  </Scroll.Element>
);
