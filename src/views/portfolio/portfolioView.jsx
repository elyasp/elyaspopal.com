import React from "react";
import { PageWrap, Projects, Project, Logo, Description, Tech } from "./styles";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

export const PortfolioView = () => (
  <Scroll.Element name="portfolio">
    <PageWrap>
      <Fade>
        <h1>projects</h1>
      </Fade>

      <Projects>
        <a
          href="https://quasarc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/quasarc.webp"} />
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
              <Logo img={"/images/karmafy.webp"} />
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
                  <h5>REST API</h5>
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
              <Logo img={"/images/omnilect.webp"} />
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
                  <h5>REST API</h5>
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
              <Logo img={"/images/abb.webp"} />
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
                  <h5>Hooks</h5>
                  <h5>Node</h5>
                  <h5>Express</h5>
                  <h5>REST API</h5>
                  <h5>JSON</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
        <a
          href="https://flappx.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/tappx-logo.svg"} />
              <Description>
                <p>
                  Tappx is an AdTech company that serves ads on multiple
                  platforms. To keep track of their programmatic ads in mobile
                  platforms, I developed a bundle manager that helps them
                  registering each app where a tappx ad is placed in. Click to
                  see UI serving from a mock SQL database.
                </p>
                <Tech>
                  <h5>React</h5>
                  <h5>Typescript</h5>
                  <h5>Node</h5>
                  <h5>Express</h5>
                  <h5>REST API</h5>
                  <h5>MySQL</h5>
                  <h5>styled-components</h5>
                  <h5>webpack</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
        <a
          href="https://githublight.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade bottom>
            <Project>
              <Logo img={"/images/githublight.webp"} />
              <Description>
                <p>
                  Getting too lost in Github's maze of functionalities and
                  lists? Github Light is a training project made to provide a
                  simple repository search based on a user. Currently using
                  Github's v3 API, which i'm upgrading to the GraphQL using v4
                  API ... in progress
                </p>
                <Tech>
                  <h5>React</h5>
                  <h5>Hooks</h5>
                  <h5>Jest</h5>
                  <h5>axios</h5>
                  <h5>styled-components</h5>
                </Tech>
              </Description>
            </Project>
          </Fade>
        </a>
      </Projects>
    </PageWrap>
  </Scroll.Element>
);
