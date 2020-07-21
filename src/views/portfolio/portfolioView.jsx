import React from "react";
import { PageWrap, Projects, Project, Logo, Description, Tech } from "./styles";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

export const PortfolioView = () => (
  <Scroll.Element name="portfolio">
    <PageWrap>
      <h1>projects</h1>
      <Projects>
        <a
          href="https://quasarc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/quasarc.png"} />
              <Description>
                <p>
                  A stress challenging and soothing browser game. The quasar is
                  pulling gravitational waves towards the center - move your
                  ship around the quasar and maneuver through gravity.
                  <br />
                  <br />
                  How many waves will you survive?
                </p>
                <Tech>
                  <h5>Javascript</h5>
                  <h5>HTML Canvas</h5>
                  <h5>CSS</h5>
                  <h5>OOP</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
        <a
          href="http://karmafy.life/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/karmafy.png"} />
              <Description>
                <p>
                  The lost and found app that is designed to make lives easier,
                  and losing your keys more difficult. With the aim of making
                  gestures of kindness more accessible and tackling the issue of
                  lost belongings never being reunited because of unnoticed
                  flyers or ineffective police reports. With features including
                  map based searching, tracking personal items and instant
                  mailing.
                </p>
                <Tech>
                  <h5>React</h5>
                  <h5>Node</h5>
                  <h5>Express</h5>
                  <h5>RESTful API</h5>
                  <h5>MongoDB</h5>
                  <h5>styled-components</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
        <a
          href="http://omnilect.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/omnilect.png"} />
              <Description>
                <p>
                  Dinner or supper? Soda or coke? Hand or parking brake...? Find
                  out with Omnilect, a multi-language research tool used to
                  conduct surveys on language and pronunciation differences
                  around the world. Create a survey and get real-time
                  geographical data based on results.
                </p>
                <Tech>
                  <h5>Handlebars</h5>
                  <h5>Express</h5>
                  <h5>Node</h5>
                  <h5>RESTful API</h5>
                  <h5>CSS</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
        <a
          href="https://github.com/elyasp/human-machine-interface"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/abb.png"} />
              <Description>
                <p>
                  A human-machine interface to show deviations and observations
                  of a robotic module. Consuming a RESTful API that the would-be
                  machine is emitting, I created the appropriate components to
                  display the data in a React application. Click to examine the
                  repository including instructional description.
                </p>
                <Tech>
                  <h5>React</h5>
                  <h5>React Hooks</h5>
                  <h5>Node</h5>
                  <h5>Express</h5>
                  <h5>RESTful API</h5>
                  <h5>JSON</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
      </Projects>
    </PageWrap>
  </Scroll.Element>
);
